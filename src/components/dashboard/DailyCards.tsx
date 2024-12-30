import React from 'react';
import { Sun, Moon } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const DailyCards = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-2 gap-6 mt-6">
      <button
        onClick={() => navigate('/daily-star')}
        className="bg-gradient-to-br from-amber-100/90 to-amber-200/90 rounded-2xl p-6 backdrop-blur-sm border border-white/50 shadow-lg text-left hover:scale-[1.02] transition-all duration-300"
      >
        <div className="bg-gradient-to-br from-amber-400 to-amber-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg">
          <Sun className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-amber-900 text-xl font-semibold mb-2">Morning Plan</h3>
        <p className="text-amber-800/90">Start your day with intention</p>
      </button>

      <button
        onClick={() => navigate('/daily-star')}
        className="bg-gradient-to-br from-blue-100/90 to-blue-200/90 rounded-2xl p-6 backdrop-blur-sm border border-white/50 shadow-lg text-left hover:scale-[1.02] transition-all duration-300"
      >
        <div className="bg-gradient-to-br from-blue-400 to-blue-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg">
          <Moon className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-blue-900 text-xl font-semibold mb-2">Evening Reflection</h3>
        <p className="text-blue-800/90">Review and reflect on your day</p>
      </button>
    </div>
  );
};

export default DailyCards;