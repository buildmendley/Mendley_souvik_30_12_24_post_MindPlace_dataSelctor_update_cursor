import React from 'react';
import { Wind, Music, Gamepad, Sparkles } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const quickStepsCards = [
  {
    icon: Wind,
    title: 'Quick Relax',
    description: 'Simple breathing exercises & stretches',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'from-purple-50/90 to-purple-100/90',
    path: '/activities/quick-relax'
  },
  {
    icon: Music,
    title: 'Calming Songs',
    description: 'Curated peaceful melodies',
    color: 'from-teal-400 to-teal-600',
    bgColor: 'from-teal-50/90 to-teal-100/90',
    path: '/activities/calming-songs'
  },
  {
    icon: Gamepad,
    title: 'Mindful Games',
    description: 'Engaging stress-relief activities',
    color: 'from-indigo-400 to-indigo-600',
    bgColor: 'from-indigo-50/90 to-indigo-100/90',
    path: '/activities/mindful-games'
  },
  {
    icon: Sparkles,
    title: 'Mood Twisters',
    description: 'Positive mindset exercises',
    color: 'from-rose-400 to-rose-600',
    bgColor: 'from-rose-50/90 to-rose-100/90',
    path: '/activities/mood-twisters'
  }
];

const QuickStepsSection = () => {
  const navigate = useNavigate();

  return (
    <section>
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-ocean-dark p-3 rounded-xl">
          <Sparkles className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-white">Quick Steps</h2>
          <p className="text-white/80">Activities to boost your mood</p>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
        {quickStepsCards.map((card, index) => (
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

export default QuickStepsSection;