import React, { useRef, useEffect } from 'react';
import ChatBubble from './ChatBubble';
import { ChatMessage } from '../../../types/chat';

interface MessageListProps {
  messages: ChatMessage[];
  isLoading?: boolean;
}

const MessageList = ({ messages, isLoading }: MessageListProps) => {
  const messagesEndRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages]);

  return (
    <div className="flex-1 overflow-y-auto py-6 px-4 md:px-6 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-4xl mx-auto space-y-4">
        {messages.map((message) => (
          <ChatBubble
            key={message.id}
            content={message.content}
            isUser={message.sender === 'user'}
          />
        ))}
        {isLoading && (
          <div className="text-gray-800 px-4">Ana is typing...</div>
        )}
        <div ref={messagesEndRef} />
      </div>
    </div>
  );
};

export default MessageList;