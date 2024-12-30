import React, { useState } from 'react';
import { Send, Mic, Phone } from 'lucide-react';

const conversationStarters = [
  { id: 'surprise', text: 'Surprise me' },
  { id: 'lowpoints', text: 'Give me all details of the low points' },
  { id: 'fears', text: 'What fears holding me back' },
  { id: 'patterns', text: 'What are the patterns last 7 days' },
  { id: 'reflection', text: 'Give me potential reflection point' }
];

const ChatSection = () => {
  const [message, setMessage] = useState('');

  const handleStarterClick = (text: string) => {
    setMessage(text);
  };

  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 space-y-4">
      {/* Conversation Starters */}
      <div className="flex flex-wrap gap-2 justify-center">
        {conversationStarters.map((starter) => (
          <button
            key={starter.id}
            onClick={() => handleStarterClick(starter.text)}
            className="px-4 py-2 bg-white/20 hover:bg-white/30 rounded-full text-black text-sm transition"
          >
            {starter.text}
          </button>
        ))}
      </div>

      {/* Chat Input */}
      <div className="flex items-center gap-4">
        <button className="p-2 text-black hover:bg-white/20 rounded-full transition">
          <Mic className="w-5 h-5" />
        </button>
        
        <button className="p-2 text-black hover:bg-white/20 rounded-full transition">
          <Phone className="w-5 h-5" />
        </button>

        <input
          type="text"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          placeholder="Type your message..."
          className="flex-1 bg-white/20 text-black placeholder-white/60 px-4 py-2 rounded-xl focus:outline-none focus:ring-2 focus:ring-white/30"
        />

        <button 
          className="p-2 text-black hover:bg-white/20 rounded-full transition disabled:opacity-50"
          disabled={!message.trim()}
        >
          <Send className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default ChatSection;