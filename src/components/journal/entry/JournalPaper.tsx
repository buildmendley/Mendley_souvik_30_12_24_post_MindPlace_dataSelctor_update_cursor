import React from 'react';
import { format } from 'date-fns';

interface JournalPaperProps {
  content: string;
  onChange: (content: string) => void;
}

const JournalPaper = ({ content, onChange }: JournalPaperProps) => {
  const currentDate = format(new Date(), 'EEEE, MMMM d, yyyy h:mm a');

  return (
    <div className="bg-white rounded-lg shadow-lg p-6 min-h-[600px] relative">
      {/* Paper lines background */}
      <div 
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage: 'repeating-linear-gradient(transparent, transparent 31px, #e5e7eb 31px, #e5e7eb 32px)',
          backgroundPosition: '0 40px'
        }}
      />
      
      {/* Date header */}
      <div className="text-gray-600 mb-4 font-medium">
        {currentDate}
      </div>

      {/* Content area */}
      <textarea
        value={content}
        onChange={(e) => onChange(e.target.value)}
        className="w-full h-[calc(100%-60px)] bg-transparent resize-none focus:outline-none leading-8 relative z-10"
        style={{ lineHeight: '32px' }}
        placeholder="Start writing..."
      />
    </div>
  );
};

export default JournalPaper;