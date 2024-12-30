import React from 'react';
import { Brain, TrendingUp } from 'lucide-react';
import { motion } from 'framer-motion';

const EmoTrack = () => {
  return (
    <motion.div 
      whileHover={{ scale: 1.02 }}
      className="relative h-full overflow-hidden rounded-2xl"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1579546929518-9e396f3cc809?auto=format&fit=crop&w=800&q=80" 
          alt="Background" 
          className="w-full h-full object-cover opacity-80"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-purple-500/80 to-pink-500/80 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-4 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <Brain className="w-6 h-6 text-white" />
          <h3 className="font-semibold text-white">EmoTrack</h3>
        </div>
        
        <div className="flex flex-wrap gap-3">
          {['Joy', 'Peace', 'Growth'].map((emotion, index) => (
            <div 
              key={index}
              className="bg-white/20 backdrop-blur-sm rounded-full px-3 py-1 text-sm text-white"
            >
              {emotion}
            </div>
          ))}
        </div>

        <div className="flex items-center gap-2 text-white/90">
          <TrendingUp className="w-4 h-4" />
          <span className="text-sm">Positive trend this week</span>
        </div>
      </div>
    </motion.div>
  );
};

export default EmoTrack;