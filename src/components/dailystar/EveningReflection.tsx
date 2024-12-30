import React from 'react';
import ChatContainer from '../mchat/layout/ChatContainer';
import ChatHeader from '../mchat/ChatHeader';
import MessageList from '../mchat/messages/MessageList';
import ChatInputArea from '../mchat/input/ChatInputArea';
import { useChat } from '../../hooks/useChat';

const EveningReflection = () => {
  const { messages, isLoading, sendMessage } = useChat('Evening Reflection');

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl overflow-hidden shadow-lg h-[600px]">
      <ChatHeader mode="Evening Reflection" />
      <MessageList messages={messages} isLoading={isLoading} />
      <ChatInputArea 
        onSendMessage={sendMessage} 
        isLoading={isLoading}
        showEndSession={messages.length > 0}
      />
    </div>
  );
};

export default EveningReflection;