import React from 'react';
import { format } from 'date-fns';
import { Paperclip } from 'lucide-react';

interface JournalImageProps {
  src: string;
  timestamp: Date;
  onRemove: () => void;
}

const JournalImage = ({ src, timestamp, onRemove }: JournalImageProps) => {
  return (
    <div className="relative group">
      <div className="absolute -top-3 -left-3 z-10">
        <Paperclip className="w-6 h-6 text-gray-600 transform rotate-45" />
      </div>
      <div className="relative rounded-lg overflow-hidden border border-gray-200">
        <img 
          src={src} 
          alt="Journal entry" 
          className="w-full h-48 object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2">
          {format(timestamp, 'h:mm a')}
        </div>
        <button
          onClick={onRemove}
          className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
        >
          ×
        </button>
      </div>
    </div>
  );
};

export default JournalImage;