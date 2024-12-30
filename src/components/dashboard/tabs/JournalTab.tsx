import React from 'react';
import { PenLine, Send } from 'lucide-react';

const JournalTab = () => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 animate-fade-in">
      <div className="flex items-center gap-3 mb-6">
        <PenLine className="w-6 h-6 text-ocean-dark" />
        <h2 className="text-2xl font-semibold text-text-primary">Daily Journal</h2>
      </div>

      <div className="space-y-6">
        <div>
          <label className="block text-text-secondary mb-2">How are you feeling today?</label>
          <div className="flex gap-4">
            {['😊 Great', '😐 Okay', '😔 Not Great'].map((mood) => (
              <button
                key={mood}
                className="px-4 py-2 rounded-lg border-2 border-ocean hover:bg-ocean-light/50 text-text-primary transition"
              >
                {mood}
              </button>
            ))}
          </div>
        </div>

        <div>
          <label className="block text-text-secondary mb-2">What's on your mind?</label>
          <textarea
            className="w-full h-40 p-4 rounded-xl border border-gray-200 focus:border-ocean focus:ring-1 focus:ring-ocean resize-none"
            placeholder="Write your thoughts here..."
          />
        </div>

        <button className="flex items-center gap-2 bg-ocean-dark text-text-light px-6 py-3 rounded-lg hover:bg-ocean transition">
          <Send className="w-4 h-4" />
          Save Entry
        </button>
      </div>
    </div>
  );
};

export default JournalTab;