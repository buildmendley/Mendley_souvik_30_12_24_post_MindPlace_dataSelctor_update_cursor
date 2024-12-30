import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Gamepad, ArrowLeft } from 'lucide-react';
import GameContainer from './games/GameContainer';

const MindfulGamesPage = () => {
  const [activeGame, setActiveGame] = useState('memory');

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/dashboard" className="inline-flex items-center text-text-light mb-8 hover:opacity-80 transition">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </Link>

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="bg-ocean-dark p-3 rounded-xl">
              <Gamepad className="w-8 h-8 text-text-light" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-text-primary">Mindful Games</h1>
              <p className="text-text-secondary">Engaging stress-relief activities</p>
            </div>
          </div>

          <GameContainer 
            activeGame={activeGame}
            onGameChange={setActiveGame}
          />
        </div>
      </div>
    </div>
  );
};

export default MindfulGamesPage;