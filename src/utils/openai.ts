import OpenAI from 'openai';
import { ChatAnalysis } from '../types/chat';
import { ANALYSIS_PROMPT } from '../prompts/analysis-prompt';
import { CHAT_PROMPTS } from '../prompts/chat-prompts';

const openai = new OpenAI({
  apiKey: import.meta.env.VITE_OPENAI_API_KEY,
  dangerouslyAllowBrowser: true
});

export const generateChatResponse = async (
  message: string,
  mode: string,
  conversationHistory: { role: 'user' | 'assistant', content: string }[] = []
) => {
  try {
    const promptContent = CHAT_PROMPTS[mode];
    if (!promptContent) {
      throw new Error(`No prompt found for mode: ${mode}`);
    }

    // Add structure requirement to system message
    const systemMessage = `${promptContent}\n\n
IMPORTANT: Format your response in three distinct parts:
1. First, validate and acknowledge the user's feelings
2. Then, provide practical advice or insight
3. Finally, ask a thoughtful follow-up question

Each part should be a complete, standalone message.
DO NOT include section labels or bullet points.`;

    const messages = [
      { role: 'system', content: systemMessage },
      ...conversationHistory,
      { role: 'user', content: message }
    ];

    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: messages as any[],
      temperature: 0.7,
      max_tokens: 500,
      top_p: 1,
      frequency_penalty: 0.2,
      presence_penalty: 0.1
    });

    const content = response.choices[0].message.content;
    if (!content) return null;

    // Split into three parts and remove any section labels
    const parts = content
      .split(/\n(?=Validation:|Advice\/Insight:|Question:)/i)
      .map(section => section
        .replace(/^(Validation|Advice\/Insight|Question):\s*/i, '')
        .replace(/^[-•]\s+/gm, '')
        .trim()
      )
      .filter(Boolean);

    // Join with double newlines to create separate message bubbles
    return parts.join('\n\n');

  } catch (error) {
    console.error('Error generating chat response:', error);
    throw new Error('Failed to generate response. Please try again.');
  }
};

export const generateAnalysis = async (conversationText: string): Promise<ChatAnalysis> => {
  try {
    const response = await openai.chat.completions.create({
      model: 'gpt-4',
      messages: [
        {
          role: 'system',
          content: ANALYSIS_PROMPT
        },
        {
          role: 'user',
          content: `Analyze this conversation and provide insights:\n\n${conversationText}`
        }
      ],
      temperature: 0.7,
      max_tokens: 500
    });

    const content = response.choices[0].message.content;
    if (!content) {
      throw new Error('No analysis generated');
    }

    // Parse the response into structured format
    const sections = content.split('\n\n').filter(Boolean);
    
    return {
      headline: sections[0]?.trim() || 'Chat Analysis',
      analysis: sections[1]?.trim() || 'No detailed analysis available.',
      keyInsight: sections[2]?.replace(/^Key Insight:\s*/i, '').trim() || 'No key insight available.',
      emotions: parseEmotions(sections[3] || ''),
      suggestions: parseSuggestions(sections[4] || '')
    };
  } catch (error) {
    console.error('Error generating analysis:', error);
    throw new Error('Failed to analyze conversation. Please try again.');
  }
};

// Helper function to parse emotions from the response
const parseEmotions = (emotionsText: string): { emoji: string; name: string }[] => {
  const emotionMatches = emotionsText.match(/[😃💪😞😳🌟😨😓🧍🎯❤️🙏❓😡😤😩🤝🤔😌🔥]\s*\w+/g) || [];
  return emotionMatches.map(match => {
    const [emoji, ...nameParts] = match.split(/\s+/);
    return {
      emoji,
      name: nameParts.join(' ')
    };
  });
};

// Helper function to parse suggestions from the response
const parseSuggestions = (suggestionsText: string): string[] => {
  return suggestionsText
    .split('\n')
    .map(line => line.replace(/^[-•]\s*/, '').trim())
    .filter(Boolean);
};