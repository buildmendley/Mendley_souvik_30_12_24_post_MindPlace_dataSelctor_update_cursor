import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import EndSessionModal from '../modals/EndSessionModal';
import { saveMemory, loadChatHistory } from '../../../utils/storage';
import { analyzeChatSession } from '../../../utils/analysis';

const EndSessionButton = () => {
  const navigate = useNavigate();
  const [showConfirmation, setShowConfirmation] = useState(false);

  const handleEndSession = () => {
    setShowConfirmation(true);
  };

  const confirmEndSession = async () => {
    try {
      const chatHistory = loadChatHistory();
      if (chatHistory?.messages && chatHistory.messages.length > 0) {
        // Analyze the chat session
       //SOUVIK// const analysis = await analyzeChatSession(chatHistory.messages);
        
        // Save to memory
       //SOUVIK saveMemory(chatHistory.mode, chatHistory.messages, analysis);
      }
      
      navigate('/mchat_ana');
    } catch (error) {
      console.error('Error saving chat memory:', error);
      navigate('/mchat_ana');
    }
  };

  const cancelEndSession = () => {
    setShowConfirmation(false);
  };

  return (
    <>
      <button
        onClick={handleEndSession}
        className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
      >
        End Session
      </button>

      {showConfirmation && (
        <EndSessionModal
          onConfirm={confirmEndSession}
          onCancel={cancelEndSession}
        />
      )}
    </>
  );
};

export default EndSessionButton;