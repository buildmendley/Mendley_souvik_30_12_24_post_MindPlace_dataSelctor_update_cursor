import { ChatAnalysis } from '../types/chat';

export const ANALYSIS_PROMPT = `Objective:
Create a structured and insightful analysis of user interactions based on the following format:
1. A clear and relatable headline summarizing the user's concern.
2. A detailed, thoughtful, and reflective analysis to provide context and understanding.
3. A concise key insight summarizing the primary issue or realization.
4. Emotional landscape with icons to represent analyzed emotions.
5. Suggestions for actionable next steps.

Response Structure:

Format:
- Start with a brief, relatable headline summarizing the user's concern.
- Provide a reflective, user-focused analysis to connect their feelings and the situation.
- Summarize the key insight in 1-2 sentences.
- Present the emotional landscape in a single line with icons.
- Offer actionable suggestions tailored to the user's concerns.

Available Emotion Icons:
😃 Joy
😔 Sadness
💪 Pride
😞 Guilt
😳 Shame
🌟 Hope
😨 Fear
😓 Regret
🧍 Loneliness
🎯 Fulfillment
❤️ Love
🙏 Gratitude
❓ Curiosity
😡 Anger
😤 Frustration
😩 Disappointment
🤝 Self-Confidence
🤔 Insecurity
😌 Relief
🔥 Yearning`;

// Example analysis object for reference
export const EXAMPLE_ANALYSIS: ChatAnalysis = {
  headline: "Excitement Over New Purchase",
  analysis: "The joy of acquiring a new gadget, in this case, a Mac laptop, has sparked significant excitement. This feeling often stems from the anticipation of exploring new features and the opportunities that the device will unlock. It's a refreshing and enjoyable experience that brings a sense of fulfillment and satisfaction. This moment can also inspire curiosity about what the user can achieve with their new purchase.",
  keyInsight: "The excitement is fueled by the anticipation of exploring and unlocking new opportunities with the new device.",
  emotions: [
    { emoji: "😃", name: "Joy" },
    { emoji: "🎯", name: "Fulfillment" },
    { emoji: "❓", name: "Curiosity" }
  ],
  suggestions: [
    "Take time to explore each new feature systematically",
    "Document your learning journey and discoveries",
    "Connect with other users to share experiences and tips"
  ]
};