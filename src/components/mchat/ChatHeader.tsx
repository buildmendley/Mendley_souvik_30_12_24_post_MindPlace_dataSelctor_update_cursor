import React from 'react';
import { X } from 'lucide-react';
import { Link } from 'react-router-dom';

interface ChatHeaderProps {
  mode: string;
}

const ChatHeader = ({ mode }: ChatHeaderProps) => {
  return (
    <div className="bg-ocean-dark/90 backdrop-blur-md border-b border-white/10">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <div className="flex flex-col">
            <h1 className="text-white text-2xl font-bold mb-1">Ana</h1>
            <div className="flex items-center space-x-2">
              <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse"></span>
              <span className="text-white/90 text-sm font-medium">{mode}</span>
            </div>
          </div>

          <Link 
            to="/ana" 
            className="text-white/80 hover:text-white transition-colors"
          >
            <X className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ChatHeader;