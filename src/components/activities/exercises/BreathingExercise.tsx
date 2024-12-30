import React, { useState, useEffect } from 'react';
import { Play, Pause, RefreshCw } from 'lucide-react';

const BreathingExercise = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [phase, setPhase] = useState<'inhale' | 'hold' | 'exhale'>('inhale');
  const [timer, setTimer] = useState(4);

  useEffect(() => {
    let interval: NodeJS.Timeout;
    
    if (isPlaying) {
      interval = setInterval(() => {
        setTimer((prev) => {
          if (prev === 0) {
            switch (phase) {
              case 'inhale':
                setPhase('hold');
                return 7;
              case 'hold':
                setPhase('exhale');
                return 8;
              case 'exhale':
                setPhase('inhale');
                return 4;
            }
          }
          return prev - 1;
        });
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [isPlaying, phase]);

  const togglePlay = () => setIsPlaying(!isPlaying);
  const reset = () => {
    setIsPlaying(false);
    setPhase('inhale');
    setTimer(4);
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-semibold text-text-primary mb-4">4-7-8 Breathing</h3>
      <div className="text-center py-12">
        <div className="mb-8">
          <div className="text-6xl font-bold text-ocean-dark mb-4">{timer}</div>
          <div className="text-xl text-text-secondary capitalize">{phase}</div>
        </div>
        <div className="flex justify-center gap-4">
          <button
            onClick={togglePlay}
            className="bg-ocean-dark text-white p-4 rounded-full hover:bg-ocean transition"
          >
            {isPlaying ? <Pause className="w-6 h-6" /> : <Play className="w-6 h-6" />}
          </button>
          <button
            onClick={reset}
            className="bg-gray-100 text-text-secondary p-4 rounded-full hover:bg-gray-200 transition"
          >
            <RefreshCw className="w-6 h-6" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default BreathingExercise;