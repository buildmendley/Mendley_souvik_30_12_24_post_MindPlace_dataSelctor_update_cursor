import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

interface Node {
  x: number;
  y: number;
  connections: number[];
}

const NeuralAnimation = () => {
  const [nodes, setNodes] = useState<Node[]>([]);
  
  useEffect(() => {
    const generateNodes = () => {
      const newNodes: Node[] = [];
      const rows = 5;
      const cols = 8;
      
      // Make the grid responsive
      const width = Math.min(window.innerWidth * 0.8, 800);
      const height = 400;
      
      for (let i = 0; i < rows; i++) {
        for (let j = 0; j < cols; j++) {
          const node: Node = {
            x: (width / (cols - 1)) * j,
            y: (height / (rows - 1)) * i,
            connections: []
          };
          
          const index = newNodes.length;
          if (j > 0) node.connections.push(index - 1);
          if (i > 0) node.connections.push(index - cols);
          
          newNodes.push(node);
        }
      }
      
      setNodes(newNodes);
    };

    generateNodes();
    window.addEventListener('resize', generateNodes);
    
    return () => window.removeEventListener('resize', generateNodes);
  }, []);

  return (
    <div className="w-full h-[400px] relative overflow-hidden">
      <svg className="w-full h-full" viewBox="0 0 800 400" preserveAspectRatio="xMidYMid meet">
        <g>
          {/* Connections */}
          {nodes.map((node, i) => 
            node.connections.map((connection, j) => (
              <motion.line
                key={`${i}-${j}`}
                x1={node.x}
                y1={node.y}
                x2={nodes[connection].x}
                y2={nodes[connection].y}
                stroke="#06677D"
                strokeWidth="1"
                initial={{ pathLength: 0, opacity: 0 }}
                animate={{ 
                  pathLength: [0, 1],
                  opacity: [0.1, 0.3, 0.1]
                }}
                transition={{
                  duration: 3,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay: Math.random() * 2
                }}
              />
            ))
          )}
          
          {/* Nodes */}
          {nodes.map((node, i) => (
            <motion.circle
              key={i}
              cx={node.x}
              cy={node.y}
              r="4"
              fill="#48B1BF"
              initial={{ scale: 0, opacity: 0 }}
              animate={{ 
                scale: [0.8, 1.2, 0.8],
                opacity: [0.4, 0.7, 0.4]
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
                delay: Math.random() * 2
              }}
            />
          ))}
        </g>
      </svg>
    </div>
  );
};

export default NeuralAnimation;