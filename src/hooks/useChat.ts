import { useState, useCallback, useEffect } from 'react';
import { ChatMessage } from '../types/chat';
import { generateChatResponse } from '../utils/openai';
import { saveChatHistory, loadChatHistory, clearChatHistory } from '../utils/storage';
import { CHAT_PROMPTS } from '../prompts/chat-prompts';
import { getConversationStarter, getAllConversationStarters } from '../utils/chatStarters';

export const useChat = (mode: string = 'Friend Chat') => {
  const [messages, setMessages] = useState<ChatMessage[]>([]);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    clearChatHistory();
    setMessages([]);
    startConversation();
  }, [mode]);

  useEffect(() => {
    if (messages.length > 0) {
      saveChatHistory(mode, messages);
    }
  }, [messages, mode]);

  const startConversation = useCallback(async () => {
    try {
      setIsLoading(true);
      setError(null);

      // Get all starters for this mode
      const allStarters = getAllConversationStarters(mode);
      
      // Create initial messages array
      const initialMessages: ChatMessage[] = [];

      // Add each starter as a separate message
      allStarters.forEach((starter, index) => {
        initialMessages.push({
          id: (Date.now() + index).toString(),
          content: starter,
          sender: 'ai',
          timestamp: new Date()
        });
      });

      setMessages(initialMessages);
    } catch (err) {
      setError('Failed to start conversation. Please try again.');
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [mode]);

  const sendMessage = useCallback(async (content: string) => {
    try {
      setIsLoading(true);
      setError(null);

      const userMessage: ChatMessage = {
        id: Date.now().toString(),
        content,
        sender: 'user',
        timestamp: new Date()
      };
      
      const updatedMessages = [...messages, userMessage];
      setMessages(updatedMessages);

      const conversationHistory = updatedMessages.map(msg => ({
        role: msg.sender === 'user' ? 'user' : 'assistant',
        content: msg.content
      }));

      const response = await generateChatResponse(content, mode, conversationHistory);

      const aiMessage: ChatMessage = {
        id: (Date.now() + 1).toString(),
        content: response || 'I apologize, but I am unable to respond at the moment.',
        sender: 'ai',
        timestamp: new Date()
      };
      
      setMessages(messages => [...messages, aiMessage]);
    } catch (err) {
      setError('Failed to send message. Please try again.');
      console.error('Chat error:', err);
    } finally {
      setIsLoading(false);
    }
  }, [messages, mode]);

  return {
    messages,
    isLoading,
    error,
    sendMessage,
    startConversation
  };
};