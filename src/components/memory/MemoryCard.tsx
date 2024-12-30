import React from 'react';
import { Calendar, Clock } from 'lucide-react';
import { formatDistanceToNow } from '../../utils/date';

interface MemoryCardProps {
  memory: {
    id: string;
    timestamp: number;
    analysis: {
      headline: string;
      keyInsight: string;
      emotions: Array<{ emoji: string; name: string }>;
    };
    tags?: string[];
  };
  onClick: () => void;
}

const MemoryCard = ({ memory, onClick }: MemoryCardProps) => {
  return (
    <div
      className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 hover:shadow-lg transition cursor-pointer"
      onClick={onClick}
    >
      <div className="flex items-start justify-between mb-4">
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-2">
            {memory.analysis.headline}
          </h3>
          <div className="flex items-center gap-4 text-sm text-gray-600">
            <div className="flex items-center gap-1">
              <Calendar className="w-4 h-4" />
              <span>{new Date(memory.timestamp).toLocaleDateString()}</span>
            </div>
            <div className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              <span>{formatDistanceToNow(memory.timestamp)}</span>
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          {memory.analysis.emotions.slice(0, 3).map((emotion, index) => (
            <span key={index} className="text-2xl" title={emotion.name}>
              {emotion.emoji}
            </span>
          ))}
        </div>
      </div>
      
      <p className="text-gray-700 line-clamp-2 mb-4">
        {memory.analysis.keyInsight}
      </p>

      <div className="flex flex-wrap gap-2">
        {memory.tags?.map((tag, index) => (
          <span
            key={index}
            className="bg-ocean-light/30 text-ocean-dark px-3 py-1 rounded-full text-sm"
          >
            {tag}
          </span>
        ))}
      </div>
    </div>
  );
};

export default MemoryCard;