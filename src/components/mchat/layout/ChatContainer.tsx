import React from 'react';

interface ChatContainerProps {
  children: React.ReactNode;
}

const ChatContainer = ({ children }: ChatContainerProps) => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark">
      <div className="max-w-[1200px] mx-auto h-screen p-4 flex flex-col">
        <div className="flex-1 flex flex-col bg-white/95 backdrop-blur-md shadow-xl rounded-xl overflow-hidden">
          {children}
        </div>
      </div>
    </div>
  );
};

export default ChatContainer;