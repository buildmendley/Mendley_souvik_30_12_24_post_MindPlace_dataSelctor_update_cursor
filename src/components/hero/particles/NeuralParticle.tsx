import React from 'react';
import { motion } from 'framer-motion';

interface NeuralParticleProps {
  index: number;
  isListening: boolean;
}

const NeuralParticle = ({ index, isListening }: NeuralParticleProps) => {
  // Create fixed paths for particles to follow
  const paths = [
    { start: { x: 150, y: 150 }, end: { x: 300, y: 200 } },
    { start: { x: 300, y: 150 }, end: { x: 150, y: 200 } },
    { start: { x: 200, y: 100 }, end: { x: 250, y: 300 } },
    { start: { x: 250, y: 150 }, end: { x: 200, y: 250 } },
    { start: { x: 180, y: 200 }, end: { x: 280, y: 180 } },
    { start: { x: 220, y: 160 }, end: { x: 180, y: 280 } },
    { start: { x: 260, y: 140 }, end: { x: 220, y: 260 } },
    { start: { x: 200, y: 180 }, end: { x: 260, y: 220 } },
  ];

  const path = paths[index % paths.length];

  return (
    <motion.div
      className="absolute w-2 h-2 bg-ocean rounded-full"
      initial={path.start}
      animate={isListening ? {
        x: [path.start.x, path.end.x, path.start.x],
        y: [path.start.y, path.end.y, path.start.y],
        opacity: [0.2, 0.8, 0.2],
        scale: [0.8, 1.2, 0.8],
      } : {
        x: path.start.x,
        y: path.start.y,
        opacity: 0,
      }}
      transition={{
        duration: 3,
        repeat: Infinity,
        ease: "easeInOut",
        delay: index * 0.2,
      }}
    />
  );
};

export default NeuralParticle;