import React, { useState, useRef, useEffect } from 'react';
import { Eraser } from 'lucide-react';

const ZenGarden = () => {
  const [isDrawing, setIsDrawing] = useState(false);
  const [paths, setPaths] = useState<{ x: number; y: number }[][]>([]);
  const [currentPath, setCurrentPath] = useState<{ x: number; y: number }[]>([]);
  const canvasRef = useRef<HTMLDivElement>(null);

  const getCoordinates = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = canvasRef.current?.getBoundingClientRect();
    if (!rect) return { x: 0, y: 0 };
    return {
      x: e.clientX - rect.left,
      y: e.clientY - rect.top
    };
  };

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    const coords = getCoordinates(e);
    setIsDrawing(true);
    setCurrentPath([coords]);
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDrawing) return;
    const coords = getCoordinates(e);
    setCurrentPath(prev => [...prev, coords]);
  };

  const handleMouseUp = () => {
    if (currentPath.length > 0) {
      setPaths(prev => [...prev, currentPath]);
    }
    setIsDrawing(false);
    setCurrentPath([]);
  };

  const clearGarden = () => {
    setPaths([]);
    setCurrentPath([]);
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
      <div className="flex justify-between items-center mb-6">
        <h3 className="text-xl font-semibold text-text-primary">Zen Garden</h3>
        <button
          onClick={clearGarden}
          className="p-2 rounded-lg hover:bg-ocean-light/50 transition"
          aria-label="Clear garden"
        >
          <Eraser className="w-5 h-5 text-ocean-dark" />
        </button>
      </div>

      <div 
        ref={canvasRef}
        className="w-full aspect-square bg-ocean-light/30 rounded-lg cursor-crosshair overflow-hidden"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
      >
        <svg className="w-full h-full">
          {paths.map((path, index) => (
            <path
              key={index}
              d={`M ${path.map(p => `${p.x} ${p.y}`).join(' L ')}`}
              stroke="#06677D"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          ))}
          {currentPath.length > 0 && (
            <path
              d={`M ${currentPath.map(p => `${p.x} ${p.y}`).join(' L ')}`}
              stroke="#06677D"
              strokeWidth="3"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          )}
        </svg>
      </div>
      
      <p className="mt-4 text-sm text-text-secondary text-center">
        Draw patterns with your mouse to create a calming zen garden
      </p>
    </div>
  );
};

export default ZenGarden;