import React from 'react';
import { Brain, PenTool } from 'lucide-react';
import GameCard from './GameCard';
import MemoryGame from './MemoryGame';
import ZenGarden from './ZenGarden';

const games = [
  {
    id: 'memory',
    title: 'Memory Match',
    description: 'Test your memory with this peaceful matching game',
    icon: Brain
  },
  {
    id: 'zen',
    title: 'Zen Garden',
    description: 'Create calming patterns in virtual sand',
    icon: PenTool
  }
];

interface GameContainerProps {
  activeGame: string;
  onGameChange: (gameId: string) => void;
}

const GameContainer = ({ activeGame, onGameChange }: GameContainerProps) => {
  return (
    <div className="space-y-8">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {games.map((game) => (
          <GameCard
            key={game.id}
            title={game.title}
            description={game.description}
            icon={game.icon}
            isActive={activeGame === game.id}
            onClick={() => onGameChange(game.id)}
          />
        ))}
      </div>

      <div className="min-h-[400px]">
        {activeGame === 'memory' && <MemoryGame />}
        {activeGame === 'zen' && <ZenGarden />}
      </div>
    </div>
  );
};

export default GameContainer;