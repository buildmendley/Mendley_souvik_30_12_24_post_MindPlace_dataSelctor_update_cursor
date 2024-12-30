import React from 'react';
import { MessageCircle, AtSign, Book } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const FeatureCards = () => {
  const navigate = useNavigate();

  return (
    <div className="grid grid-cols-3 gap-6 mt-6">
      <div 
        onClick={() => navigate('/ana')}
        className="bg-gradient-to-br from-pink-50/90 to-pink-100/90 rounded-2xl p-6 backdrop-blur-sm border border-white/50 shadow-lg hover:scale-[1.02] transition-transform cursor-pointer"
      >
        <div className="bg-gradient-to-br from-pink-400 to-pink-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg">
          <MessageCircle className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-pink-900 text-xl font-semibold mb-2">Ana</h3>
        <p className="text-pink-800/90">Your all time friend</p>
      </div>

      <div 
        onClick={() => navigate('/mind-palace')}
        className="bg-gradient-to-br from-violet-50/90 to-violet-100/90 rounded-2xl p-6 backdrop-blur-sm border border-white/50 shadow-lg hover:scale-[1.02] transition-transform cursor-pointer"
      >
        <div className="bg-gradient-to-br from-violet-400 to-violet-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg">
          <AtSign className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-violet-900 text-xl font-semibold mb-2">Mind Palace</h3>
        <p className="text-violet-800/90">Where you reflect yourself</p>
      </div>

      <div 
        onClick={() => navigate('/journal')}
        className="bg-gradient-to-br from-emerald-50/90 to-emerald-100/90 rounded-2xl p-6 backdrop-blur-sm border border-white/50 shadow-lg hover:scale-[1.02] transition-transform cursor-pointer"
      >
        <div className="bg-gradient-to-br from-emerald-400 to-emerald-600 w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-lg">
          <Book className="w-6 h-6 text-white" />
        </div>
        <h3 className="text-emerald-900 text-xl font-semibold mb-2">Journal</h3>
        <p className="text-emerald-800/90">AI powered journal to keep you going</p>
      </div>
    </div>
  );
};

export default FeatureCards;