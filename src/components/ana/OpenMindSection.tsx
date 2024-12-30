import React from 'react';
import { MessageCircle } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { clearChatHistory } from '../../utils/storage';

const OpenMindSection = () => {
  const navigate = useNavigate();

  const handleFriendChat = () => {
    // Clear existing chat history before navigating
    clearChatHistory();
    // Navigate to Mchat with Friend Chat mode
    navigate('/mchat', { state: { mode: 'Friend Chat' } });
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8">Open Up Your Mind</h2>
      <div 
        onClick={handleFriendChat}
        className="bg-gradient-to-br from-rose-50/90 to-rose-100/90 rounded-2xl p-8 backdrop-blur-sm border border-white/20 shadow-lg hover:scale-[1.02] transition-all duration-300 cursor-pointer"
      >
        <div className="bg-gradient-to-br from-rose-400 to-rose-600 w-14 h-14 rounded-xl flex items-center justify-center mb-6 shadow-lg">
          <MessageCircle className="w-7 h-7 text-white" />
        </div>
        
        <h3 className="text-2xl font-semibold text-rose-900 mb-3">Friend Chat</h3>
        <p className="text-rose-800 mb-6">Have a heart-to-heart conversation with Ana, your AI companion who's always here to listen and support.</p>
      </div>
    </section>
  );
};

export default OpenMindSection;