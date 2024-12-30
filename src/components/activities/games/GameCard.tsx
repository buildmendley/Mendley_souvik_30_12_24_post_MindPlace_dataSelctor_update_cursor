import React from 'react';
import { LucideIcon } from 'lucide-react';

interface GameCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  isActive: boolean;
  onClick: () => void;
}

const GameCard = ({ title, description, icon: Icon, isActive, onClick }: GameCardProps) => {
  return (
    <button
      onClick={onClick}
      className={`
        w-full p-6 rounded-xl transition-all
        ${isActive 
          ? 'bg-ocean-dark text-white' 
          : 'bg-white/50 text-text-secondary hover:bg-white/80'
        }
      `}
    >
      <Icon className={`w-8 h-8 mb-3 ${isActive ? 'text-white' : 'text-ocean-dark'}`} />
      <h3 className={`text-lg font-semibold mb-2 ${isActive ? 'text-white' : 'text-text-primary'}`}>
        {title}
      </h3>
      <p className={`text-sm ${isActive ? 'text-white/80' : 'text-text-secondary'}`}>
        {description}
      </p>
    </button>
  );
};

export default GameCard;