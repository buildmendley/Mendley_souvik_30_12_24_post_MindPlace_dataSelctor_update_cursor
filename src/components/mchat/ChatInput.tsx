import React, { useState } from 'react';
import { Send, Mic, Phone } from 'lucide-react';

interface ChatInputProps {
  onSendMessage: (message: string) => void;
  isLoading: boolean;
}

const ChatInput = ({ onSendMessage, isLoading }: ChatInputProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <div className="bg-[#1a1d24] p-4">
      <form onSubmit={handleSubmit} className="max-w-4xl mx-auto">
        <div className="flex items-center space-x-4">
          <input
            type="text"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            placeholder="What's on your mind?"
            className="flex-1 bg-[#2d3139] text-gray-200 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-dark"
            disabled={isLoading}
          />
          <button
            type="button"
            className="text-gray-400 hover:text-white transition-colors disabled:opacity-50"
            disabled={isLoading}
          >
            <Mic className="w-5 h-5" />
          </button>
          <button
            type="button"
            className="text-gray-400 hover:text-white transition-colors disabled:opacity-50"
            disabled={isLoading}
          >
            <Phone className="w-5 h-5" />
          </button>
          <button
            type="submit"
            className="bg-ocean-dark text-white p-2 rounded-lg hover:bg-ocean transition-colors disabled:opacity-50"
            disabled={!message.trim() || isLoading}
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </form>
    </div>
  );
};

export default ChatInput;