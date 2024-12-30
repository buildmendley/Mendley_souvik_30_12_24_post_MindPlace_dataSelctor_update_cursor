import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { ChatMessage } from '../../../types/chat';
import ChatBubble from '../messages/ChatBubble';

interface ChatHistoryProps {
  messages: ChatMessage[];
}

const ChatHistory = ({ messages }: ChatHistoryProps) => {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className="w-full flex items-center justify-between text-gray-900 hover:text-ocean-dark transition-colors"
      >
        <span className="text-lg font-semibold">Chat History</span>
        {isExpanded ? (
          <ChevronUp className="w-5 h-5" />
        ) : (
          <ChevronDown className="w-5 h-5" />
        )}
      </button>

      {isExpanded && (
        <div className="mt-6 space-y-4 max-h-[400px] overflow-y-auto">
          {messages.map((message) => (
            <ChatBubble
              key={message.id}
              content={message.content}
              isUser={message.sender === 'user'}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default ChatHistory;