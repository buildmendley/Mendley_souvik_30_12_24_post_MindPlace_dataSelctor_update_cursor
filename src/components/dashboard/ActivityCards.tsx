import React from 'react';
import { Wind, Music, Gamepad, Sparkles } from 'lucide-react';
import { Link } from 'react-router-dom';

const activities = [
  {
    icon: <Wind className="w-6 h-6 text-white" />,
    title: 'Quick Relax',
    description: 'Simple breathing exercises & stretches',
    duration: '3-5 min',
    iconBg: 'bg-gradient-to-br from-purple-400 to-purple-600',
    cardBg: 'bg-gradient-to-br from-purple-50/90 to-purple-100/90',
    path: '/activities/quick-relax'
  },
  {
    icon: <Music className="w-6 h-6 text-white" />,
    title: 'Calming Songs',
    description: 'Curated peaceful melodies',
    duration: '∞ mins',
    iconBg: 'bg-gradient-to-br from-teal-400 to-teal-600',
    cardBg: 'bg-gradient-to-br from-teal-50/90 to-teal-100/90',
    path: '/activities/calming-songs'
  },
  {
    icon: <Gamepad className="w-6 h-6 text-white" />,
    title: 'Mindful Games',
    description: 'Engaging stress-relief activities',
    duration: '5-15 min',
    iconBg: 'bg-gradient-to-br from-indigo-400 to-indigo-600',
    cardBg: 'bg-gradient-to-br from-indigo-50/90 to-indigo-100/90',
    path: '/activities/mindful-games'
  },
  {
    icon: <Sparkles className="w-6 h-6 text-white" />,
    title: 'Mood Twisters',
    description: 'Positive mindset exercises',
    duration: '2-5 min',
    iconBg: 'bg-gradient-to-br from-rose-400 to-rose-600',
    cardBg: 'bg-gradient-to-br from-rose-50/90 to-rose-100/90',
    path: '/activities/mood-twisters'
  }
];

const ActivityCards = () => {
  return (
    <div className="mt-8">
      <h2 className="text-text-primary text-2xl font-semibold mb-4">Serene Sanctuary</h2>
      <p className="text-text-secondary mb-6">Find your moment of peace</p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {activities.map((activity, index) => (
          <Link
            key={index}
            to={activity.path}
            className={`${activity.cardBg} backdrop-blur-sm rounded-2xl p-6 shadow-lg hover:scale-[1.02] transition-all duration-300 border border-white/50`}
          >
            <div className={`${activity.iconBg} w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg`}>
              {activity.icon}
            </div>
            <h3 className="text-text-primary text-lg font-semibold mb-2">{activity.title}</h3>
            <p className="text-text-secondary text-sm mb-4">{activity.description}</p>
            <span className="text-text-muted text-sm">{activity.duration}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ActivityCards;