import { ChatMessage, ChatAnalysis, Emotion } from '../types/chat';
import { generateAnalysis } from './openai';

// Enhanced emotion patterns with more contextual matches
const emotionPatterns = [
  {
    pattern: /😃|happy|joy|excited|delighted|pleased|thrilled|wonderful|fantastic|great/i,
    emoji: "😃",
    name: "Joy",
    weight: 1
  },
  {
    pattern: /😔|sad|down|unhappy|depressed|blue|gloomy|heartbroken|upset/i,
    emoji: "😔",
    name: "Sadness",
    weight: 1
  },
  {
    pattern: /💪|proud|accomplished|achieved|successful|confident|strong/i,
    emoji: "💪",
    name: "Pride",
    weight: 1
  },
  {
    pattern: /😞|guilt|regret|sorry|apologetic|remorse|mistake/i,
    emoji: "😞",
    name: "Guilt",
    weight: 1
  },
  {
    pattern: /😳|shame|embarrassed|humiliated|awkward|uncomfortable/i,
    emoji: "😳",
    name: "Shame",
    weight: 1
  },
  {
    pattern: /🌟|hope|optimistic|looking forward|positive|better future|excited about/i,
    emoji: "🌟",
    name: "Hope",
    weight: 1
  },
  {
    pattern: /😨|fear|scared|worried|anxious|nervous|concerned|afraid/i,
    emoji: "😨",
    name: "Fear",
    weight: 1
  },
  {
    pattern: /🧍|lonely|alone|isolated|disconnected|missing|solitary/i,
    emoji: "🧍",
    name: "Loneliness",
    weight: 1
  },
  {
    pattern: /❤️|love|care|affection|attachment|fond|cherish/i,
    emoji: "❤️",
    name: "Love",
    weight: 1
  },
  {
    pattern: /🙏|grateful|thankful|appreciate|blessed|fortunate/i,
    emoji: "🙏",
    name: "Gratitude",
    weight: 1
  },
  {
    pattern: /❓|curious|wonder|interested|intrigued|fascinated/i,
    emoji: "❓",
    name: "Curiosity",
    weight: 1
  },
  {
    pattern: /😡|angry|mad|furious|outraged|irritated|annoyed/i,
    emoji: "😡",
    name: "Anger",
    weight: 1
  },
  {
    pattern: /😤|frustrated|stuck|blocked|hindered|limited/i,
    emoji: "😤",
    name: "Frustration",
    weight: 1
  },
  {
    pattern: /😩|disappointed|letdown|failed|unfulfilled|unsatisfied/i,
    emoji: "😩",
    name: "Disappointment",
    weight: 1
  },
  {
    pattern: /🤝|confident|assured|certain|self-assured|capable/i,
    emoji: "🤝",
    name: "Self-Confidence",
    weight: 1
  },
  {
    pattern: /🤔|unsure|insecure|doubtful|uncertain|hesitant|confused/i,
    emoji: "🤔",
    name: "Insecurity",
    weight: 1
  },
  {
    pattern: /😌|relief|relieved|relaxed|calm|peaceful|at ease/i,
    emoji: "😌",
    name: "Relief",
    weight: 1
  },
  {
    pattern: /🔥|yearning|desire|want|need|crave|aspire/i,
    emoji: "🔥",
    name: "Yearning",
    weight: 1
  }
];

// Enhanced emotion extraction with context awareness
const extractEmotions = (messages: ChatMessage[]): Emotion[] => {
  const emotionCounts = new Map<string, number>();
  
  messages.forEach(message => {
    if (message.sender === 'user') {  // Focus on user messages for emotion analysis
      emotionPatterns.forEach(({ pattern, emoji, name, weight }) => {
        const matches = (message.content.match(pattern) || []).length;
        if (matches > 0) {
          const currentCount = emotionCounts.get(name) || 0;
          emotionCounts.set(name, currentCount + (matches * weight));
        }
      });
    }
  });

  // Convert to array and sort by frequency
  const sortedEmotions = Array.from(emotionCounts.entries())
    .sort((a, b) => b[1] - a[1])
    .slice(0, 5)  // Take top 5 emotions
    .map(([name]) => {
      const pattern = emotionPatterns.find(p => p.name === name)!;
      return { emoji: pattern.emoji, name };
    });

  return sortedEmotions;
};

export const analyzeChatSession = async (messages: ChatMessage[]): Promise<ChatAnalysis> => {
  try {
    // Combine messages for OpenAI analysis
    const conversationText = messages
      .map(msg => `${msg.sender.toUpperCase()}: ${msg.content}`)
      .join('\n');

    // Get AI analysis
    const analysis = await generateAnalysis(conversationText);

    // Extract emotions with enhanced context awareness
    const emotions = extractEmotions(messages);

    // Ensure we have at least one emotion
    if (emotions.length === 0) {
      emotions.push({ emoji: "🤔", name: "Contemplative" });
    }

    return {
      ...analysis,
      emotions
    };
  } catch (error) {
    console.error('Error analyzing chat session:', error);
    throw error;
  }
};