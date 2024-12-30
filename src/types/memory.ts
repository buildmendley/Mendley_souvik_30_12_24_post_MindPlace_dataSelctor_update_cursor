export interface Memory {
  id: string;
  timestamp: number;
  mode: string;
  messages: any[];
  analysis: {
    headline: string;
    analysis: string;
    keyInsight: string;
    emotions: Array<{ emoji: string; name: string }>;
    suggestions: string[];
  };
  tags?: string[];
}