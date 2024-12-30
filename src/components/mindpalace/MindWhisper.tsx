import React from 'react';
import { PenLine } from 'lucide-react';

const MindWhisper = () => {
  return (
    <div className="space-y-6">
      <textarea
        placeholder="Deep Insight of your Thought"
        className="w-full h-28 p-4 rounded-xl bg-white/10 border border-white/20 focus:border-white/40 focus:ring-1 focus:ring-white/40 resize-none text-white placeholder-white/60"
      />


    </div>
  );
}

export default MindWhisper;