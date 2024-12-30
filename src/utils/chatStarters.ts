import { CHAT_PROMPTS } from '../prompts/chat-prompts';

export const getConversationStarter = (mode: string): string => {
  const promptContent = CHAT_PROMPTS[mode];
  if (!promptContent) {
    return "Hi! I'm Ana. What's on your mind today?";
  }

  // Extract conversation starters section
  const starterMatch = promptContent.match(/\*\*Conversation Starters?:\*\*([\s\S]*?)(?=\n\n|$)/i);
  if (!starterMatch || !starterMatch[1]) {
    return "Hi! I'm Ana. What's on your mind today?";
  }

  // Extract all starters (lines starting with dash)
  const starters = starterMatch[1]
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.startsWith('-'))
    .map(line => line.replace(/^-\s*["']?|["']?$/g, '').trim())
    .filter(Boolean);

  if (starters.length === 0) {
    return "Hi! I'm Ana. What's on your mind today?";
  }

  // Return a random starter
  return starters[Math.floor(Math.random() * starters.length)];
};

export const getAllConversationStarters = (mode: string): string[] => {
  const promptContent = CHAT_PROMPTS[mode];
  if (!promptContent) {
    return [];
  }

  const starterMatch = promptContent.match(/\*\*Conversation Starters?:\*\*([\s\S]*?)(?=\n\n|$)/i);
  if (!starterMatch || !starterMatch[1]) {
    return [];
  }

  return starterMatch[1]
    .split('\n')
    .map(line => line.trim())
    .filter(line => line.startsWith('-'))
    .map(line => line.replace(/^-\s*["']?|["']?$/g, '').trim())
    .filter(Boolean);
};