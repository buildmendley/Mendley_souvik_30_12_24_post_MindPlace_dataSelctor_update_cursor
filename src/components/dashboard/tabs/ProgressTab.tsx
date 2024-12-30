import React from 'react';
import { Calendar, Target, TrendingUp } from 'lucide-react';

const ProgressTab = () => {
  return (
    <div className="space-y-6 animate-fade-in">
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
        <div className="flex items-center gap-3 mb-6">
          <Calendar className="w-6 h-6 text-ocean-dark" />
          <h2 className="text-2xl font-semibold text-text-primary">Weekly Progress</h2>
        </div>

        <div className="h-64 bg-gray-50 rounded-xl flex items-center justify-center">
          <p className="text-text-secondary">Progress chart will be displayed here</p>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6">
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <Target className="w-6 h-6 text-ocean-dark" />
            <h2 className="text-2xl font-semibold text-text-primary">Goals</h2>
          </div>
          
          <ul className="space-y-4">
            {['Mindful moments: 5/7 days', 'Journal entries: 3/5 completed', 'Reflection time: 2 hours'].map((goal) => (
              <li key={goal} className="flex items-center gap-2 text-text-secondary">
                <div className="w-2 h-2 rounded-full bg-ocean-dark" />
                {goal}
              </li>
            ))}
          </ul>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6">
          <div className="flex items-center gap-3 mb-6">
            <TrendingUp className="w-6 h-6 text-ocean-dark" />
            <h2 className="text-2xl font-semibold text-text-primary">Insights</h2>
          </div>
          
          <ul className="space-y-4">
            {[
              'Mood improved by 15% this week',
              'Most productive time: Morning',
              'Top emotion: Gratitude'
            ].map((insight) => (
              <li key={insight} className="flex items-center gap-2 text-text-secondary">
                <div className="w-2 h-2 rounded-full bg-ocean-dark" />
                {insight}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ProgressTab;