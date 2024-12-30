import React from 'react';
import { motion } from 'framer-motion';

interface ChatBubbleProps {
  content: string;
  isUser: boolean;
}

const ChatBubble = ({ content, isUser }: ChatBubbleProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className={`flex ${isUser ? 'justify-end' : 'justify-start'}`}
    >
      <div
        className={`
          max-w-[70%] p-4 rounded-xl
          ${isUser 
            ? 'bg-blue-600 text-white' 
            : 'bg-blue-50 text-blue-900'
          }
        `}
      >
        {content}
      </div>
    </motion.div>
  );
};

export default ChatBubble;