import React from 'react';
import { MessageCircle, Brain, Heart, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const chatCards = [
  {
    icon: MessageCircle,
    title: 'Friend Chat',
    description: 'Have a casual conversation with Ana',
    color: 'from-pink-400 to-pink-600',
    bgColor: 'from-pink-50/90 to-pink-100/90',
    path: '/mchat'
  },
  {
    icon: Brain,
    title: 'Guided Journey',
    description: 'Structured support for specific challenges',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'from-purple-50/90 to-purple-100/90',
    path: '/guide_mchat'
  },
  {
    icon: Heart,
    title: 'Soul Space',
    description: 'Mindfulness and meditation companion',
    color: 'from-rose-400 to-rose-600',
    bgColor: 'from-rose-50/90 to-rose-100/90',
    path: '/soul-space'
  }
];

const ChatSection = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-ocean-dark p-3 rounded-xl">
          <MessageCircle className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Chat Experiences</h2>
          <p className="text-white/80">Different ways to connect with Ana</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {chatCards.map((card, index) => (
          <div
            key={index}
            onClick={() => navigate(card.path)}
            className={`
              bg-gradient-to-br ${card.bgColor}
              rounded-2xl p-6 backdrop-blur-sm
              border border-white/50 shadow-lg
              hover:scale-[1.02] transition-all duration-300
              cursor-pointer
            `}
          >
            <div className={`
              bg-gradient-to-br ${card.color}
              w-12 h-12 rounded-xl
              flex items-center justify-center mb-4
              shadow-lg
            `}>
              <card.icon className="w-6 h-6 text-white" />
            </div>
            
            <h3 className="text-xl font-semibold mb-2">{card.title}</h3>
            <p className="text-gray-600">{card.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ChatSection;