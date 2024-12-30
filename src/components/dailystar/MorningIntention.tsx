import React, { useState } from 'react';
import { Send } from 'lucide-react';

const MorningIntention = () => {
  const [intention, setIntention] = useState('');

  const handleSave = () => {
    // Save intention logic here
    console.log('Saving intention:', intention);
  };

  return (
    <div className="bg-gradient-to-br from-amber-50/90 to-amber-100/90 rounded-2xl p-8 backdrop-blur-sm shadow-lg">
      <h2 className="text-2xl font-bold text-amber-900 mb-6">Set Your Intention</h2>
      
      <div className="space-y-6">
        <div>
          <label className="block text-amber-800 mb-2">What's your focus for today?</label>
          <textarea
            value={intention}
            onChange={(e) => setIntention(e.target.value)}
            className="w-full h-40 p-4 rounded-xl bg-white/50 border border-amber-200 focus:border-amber-400 focus:ring-1 focus:ring-amber-400 resize-none"
            placeholder="Write your morning intention here..."
          />
        </div>

        <button
          onClick={handleSave}
          className="flex items-center gap-2 bg-amber-600 text-white px-6 py-3 rounded-lg hover:bg-amber-700 transition"
        >
          <Send className="w-4 h-4" />
          Save Intention
        </button>
      </div>
    </div>
  );
};

export default MorningIntention;