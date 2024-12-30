import React, { useState } from 'react';
import { Send, Mic, Phone } from 'lucide-react';
import EndSessionButton from './EndSessionButton';

interface ChatInputAreaProps {
  onSendMessage: (message: string) => void;
  isLoading?: boolean;
  showEndSession?: boolean;
}

const ChatInputArea = ({ onSendMessage, isLoading, showEndSession }: ChatInputAreaProps) => {
  const [message, setMessage] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (message.trim() && !isLoading) {
      onSendMessage(message.trim());
      setMessage('');
    }
  };

  return (
    <div className="bg-white border-t border-gray-100 p-4">
      <div className="max-w-4xl mx-auto">
        <form onSubmit={handleSubmit}>
          <div className="flex items-center gap-4">
            <input
              type="text"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 text-gray-900 placeholder-gray-600 px-4 py-3 rounded-xl focus:outline-none focus:ring-2 focus:ring-blue-400/50 border border-gray-200"
              disabled={isLoading}
            />
            <button
              type="submit"
              disabled={!message.trim() || isLoading}
              className="bg-blue-600 text-white p-3 rounded-xl hover:bg-blue-500 transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
            >
              <Send className="w-5 h-5" />
            </button>
          </div>
        </form>

        <div className="flex items-center justify-between mt-4">
          <div className="flex items-center gap-4">
            <button
              type="button"
              className="text-gray-600 hover:text-gray-800 transition-colors"
              disabled={isLoading}
            >
              <Mic className="w-5 h-5" />
            </button>
            <button
              type="button"
              className="text-gray-600 hover:text-gray-800 transition-colors"
              disabled={isLoading}
            >
              <Phone className="w-5 h-5" />
            </button>
          </div>

          {showEndSession && <EndSessionButton />}
        </div>
      </div>
    </div>
  );
};

export default ChatInputArea;