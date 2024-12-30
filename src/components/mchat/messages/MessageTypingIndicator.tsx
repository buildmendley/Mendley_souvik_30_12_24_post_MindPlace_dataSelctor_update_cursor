import React from 'react';
import { motion } from 'framer-motion';

const MessageTypingIndicator = () => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      className="flex items-center gap-2 text-gray-600 px-4"
    >
      <span>Ana is typing</span>
      <motion.span
        animate={{ opacity: [0.4, 1, 0.4] }}
        transition={{ duration: 1.5, repeat: Infinity }}
      >
        ...
      </motion.span>
    </motion.div>
  );
};

export default MessageTypingIndicator;