import React, { useState } from 'react';
import { motion } from 'framer-motion';

const ListeningAnimation = () => {
  const [isListening, setIsListening] = useState(false);
  const waveCount = 12;
  
  const startListening = () => setIsListening(true);
  const stopListening = () => setIsListening(false);

  return (
    <div className="relative w-full h-full bg-gradient-to-br from-white/50 to-white/30 flex items-center justify-center">
      {/* Central Orb */}
      <motion.div
        className="w-24 h-24 bg-ocean-dark rounded-full flex items-center justify-center shadow-lg relative"
        animate={{
          scale: isListening ? [1, 1.1, 1] : 1,
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="absolute inset-2 bg-gradient-to-br from-ocean to-ocean-dark rounded-full" />
      </motion.div>

      {/* Listening Waves */}
      <div className="absolute inset-0 flex items-center justify-center">
        {[...Array(waveCount)].map((_, i) => (
          <motion.div
            key={i}
            className="absolute border-2 border-ocean rounded-full"
            initial={{ width: 100, height: 100, opacity: 0 }}
            animate={{
              width: [100, 140 + i * 20],
              height: [100, 140 + i * 20],
              opacity: isListening ? [0.6, 0] : 0,
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              delay: i * 0.15,
              ease: "easeOut"
            }}
          />
        ))}
      </div>

      {/* Interaction Area */}
      <div 
        className="absolute inset-0 cursor-pointer"
        onMouseEnter={startListening}
        onMouseLeave={stopListening}
        onClick={() => setIsListening(!isListening)}
      />
    </div>
  );
};

export default ListeningAnimation;