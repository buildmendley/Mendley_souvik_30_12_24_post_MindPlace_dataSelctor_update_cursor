import React from 'react';
import { Brain, Book, PenLine } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const mindPalaceCards = [
  {
    icon: Book,
    title: 'Memory Journal',
    description: 'Review past conversations and insights',
    color: 'from-violet-400 to-violet-600',
    bgColor: 'from-violet-50/90 to-violet-100/90',
    path: '/memories'
  },
  {
    icon: PenLine,
    title: 'Journal',
    description: 'Express your thoughts and feelings',
    color: 'from-emerald-400 to-emerald-600',
    bgColor: 'from-emerald-50/90 to-emerald-100/90',
    path: '/journal'
  }
];

const MindPalaceSection = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-ocean-dark p-3 rounded-xl">
          <Brain className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Mind Palace</h2>
          <p className="text-white/80">Your personal space for reflection</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {mindPalaceCards.map((card, index) => (
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

export default MindPalaceSection;