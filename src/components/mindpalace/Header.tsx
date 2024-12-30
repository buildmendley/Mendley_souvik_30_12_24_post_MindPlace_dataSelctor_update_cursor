import React from 'react';
import { format } from 'date-fns';
import EmoTrack from './EmoTrack';
import WeeklyReport from './WeeklyReport';

interface HeaderProps {
  onEmoTrackClick: () => void;
}

const Header = ({ onEmoTrackClick }: HeaderProps) => {
  return (
    <div className="grid grid-cols-3 gap-6 mb-8">
      <div 
        onClick={onEmoTrackClick}
        className="transform transition-all duration-300 hover:-translate-y-1 cursor-pointer"
      >
        <EmoTrack />
      </div>
      
      <div className="flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-white">
            {format(new Date(), 'MMMM d, yyyy')}
          </h2>
          <p className="text-white/80">
            {format(new Date(), 'EEEE')}
          </p>
        </div>
      </div>

      <div className="transform transition-all duration-300 hover:-translate-y-1">
        <WeeklyReport />
      </div>
    </div>
  );
};

export default Header;