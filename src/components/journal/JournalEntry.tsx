import React from 'react';
import { formatDistanceToNow } from '../../utils/date';

interface JournalEntryProps {
  entry: {
    id: string;
    title: string;
    content: string;
    mood: string;
    timestamp: number;
  };
  isSelected: boolean;
  onClick: () => void;
}

const JournalEntry = ({ entry, isSelected, onClick }: JournalEntryProps) => {
  return (
    <div
      onClick={onClick}
      className={`
        p-4 rounded-lg cursor-pointer transition
        ${isSelected 
          ? 'bg-ocean-dark text-white' 
          : 'hover:bg-ocean-light/50'
        }
      `}
    >
      <div className="flex items-center justify-between mb-2">
        <span className="text-2xl">{entry.mood}</span>
        <span className={`text-sm ${isSelected ? 'text-white/80' : 'text-gray-500'}`}>
          {formatDistanceToNow(entry.timestamp)}
        </span>
      </div>
      <h3 className={`font-medium mb-1 ${isSelected ? 'text-white' : 'text-gray-900'}`}>
        {entry.title}
      </h3>
      <p className={`text-sm line-clamp-2 ${isSelected ? 'text-white/80' : 'text-gray-600'}`}>
        {entry.content}
      </p>
    </div>
  );
};

export default JournalEntry;