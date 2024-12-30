import React from 'react';
import NeuralParticle from './NeuralParticle';

interface NeuralNetworkProps {
  isListening: boolean;
  particleCount?: number;
}

const NeuralNetwork = ({ isListening, particleCount = 8 }: NeuralNetworkProps) => {
  return (
    <div className="absolute inset-0">
      {[...Array(particleCount)].map((_, i) => (
        <NeuralParticle 
          key={`neural-${i}`} 
          index={i}
          isListening={isListening}
        />
      ))}
    </div>
  );
};

export default NeuralNetwork;