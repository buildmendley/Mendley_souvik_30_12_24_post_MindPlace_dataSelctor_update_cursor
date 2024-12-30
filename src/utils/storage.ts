// Storage utility functions

const CHAT_STORAGE_KEY = 'mendley_chat';
const MEMORY_STORAGE_KEY = 'mendley_memories';

interface ChatHistory {
  mode: string;
  messages: any[];
}

interface Memory {
  id: string;
  timestamp: number;
  mode: string;
  messages: any[];
  analysis: any;
  tags?: string[];
}

// Chat history functions
export const saveChatHistory = (mode: string, messages: any[]) => {
  try {
    localStorage.setItem(CHAT_STORAGE_KEY, JSON.stringify({ mode, messages }));
  } catch (error) {
    console.error('Error saving chat history:', error);
  }
};

export const loadChatHistory = (): ChatHistory | null => {
  try {
    const stored = localStorage.getItem(CHAT_STORAGE_KEY);
    return stored ? JSON.parse(stored) : null;
  } catch (error) {
    console.error('Error loading chat history:', error);
    return null;
  }
};

export const clearChatHistory = () => {
  try {
    localStorage.removeItem(CHAT_STORAGE_KEY);
  } catch (error) {
    console.error('Error clearing chat history:', error);
  }
};

// Memory functions
export const saveMemory = (mode: string, messages: any[], analysis: any) => {
  try {
    const memories = loadAllMemories();
    const newMemory: Memory = {
      id: crypto.randomUUID(),
      timestamp: Date.now(),
      mode,
      messages,
      analysis,
      tags: extractTags(analysis, mode)
    };

    memories.unshift(newMemory);
    localStorage.setItem(MEMORY_STORAGE_KEY, JSON.stringify(memories));
    return newMemory;
  } catch (error) {
    console.error('Error saving memory:', error);
    return null;
  }
};

export const loadAllMemories = (): Memory[] => {
  try {
    const stored = localStorage.getItem(MEMORY_STORAGE_KEY);
    return stored ? JSON.parse(stored) : [];
  } catch (error) {
    console.error('Error loading memories:', error);
    return [];
  }
};

export const loadMemory = (id: string): Memory | null => {
  try {
    const memories = loadAllMemories();
    return memories.find(memory => memory.id === id) || null;
  } catch (error) {
    console.error('Error loading memory:', error);
    return null;
  }
};

export const deleteMemory = (id: string): boolean => {
  try {
    const memories = loadAllMemories();
    const filtered = memories.filter(memory => memory.id !== id);
    localStorage.setItem(MEMORY_STORAGE_KEY, JSON.stringify(filtered));
    return true;
  } catch (error) {
    console.error('Error deleting memory:', error);
    return false;
  }
};

// Helper function to extract tags from analysis and mode
const extractTags = (analysis: any, mode: string): string[] => {
  const tags = new Set<string>();
  
  // Add mode as a tag
  tags.add(mode.toLowerCase().replace(/\s+/g, '-'));
  
  // Add emotions as tags
  analysis.emotions?.forEach((emotion: { name: string }) => {
    tags.add(emotion.name.toLowerCase());
  });

  // Add key themes from analysis
  const keyWords = analysis.keyInsight
    .toLowerCase()
    .match(/\b\w{4,}\b/g) || [];
  
  keyWords.forEach((word: string) => {
    if (!commonWords.has(word)) {
      tags.add(word);
    }
  });

  return Array.from(tags).slice(0, 5);
};

// Common words to exclude from tags
const commonWords = new Set([
  'this', 'that', 'these', 'those', 'have', 'been',
  'were', 'would', 'could', 'should', 'their', 'about'
]);