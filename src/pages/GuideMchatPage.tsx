import React, { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import ChatContainer from '../components/mchat/layout/ChatContainer';
import ChatHeader from '../components/mchat/ChatHeader';
import MessageList from '../components/mchat/messages/MessageList';
import ChatInputArea from '../components/mchat/input/ChatInputArea';
import { useChat } from '../hooks/useChat';

const GuideMchatPage = () => {
  const location = useLocation();
  const initialMode = location.state?.mode || 'Guided Journey';
  const [mode] = useState(initialMode);
  const { messages, isLoading, sendMessage, startConversation } = useChat(mode);

  useEffect(() => {
    if (messages.length === 0) {
      startConversation();
    }
  }, [mode, startConversation]);

  return (
    <ChatContainer>
      <ChatHeader mode={mode} />
      <MessageList messages={messages} isLoading={isLoading} />
      <ChatInputArea 
        onSendMessage={sendMessage} 
        isLoading={isLoading}
        showEndSession={messages.length > 0}
      />
    </ChatContainer>
  );
};

export default GuideMchatPage;