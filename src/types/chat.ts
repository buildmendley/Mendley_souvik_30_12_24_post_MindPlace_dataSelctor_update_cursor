// Add these types to your existing chat.ts file

export interface Emotion {
  emoji: string;
  name: string;
}

export interface ChatAnalysis {
  headline: string;
  analysis: string;
  keyInsight: string;
  emotions: Emotion[];
  suggestions: string[];
}