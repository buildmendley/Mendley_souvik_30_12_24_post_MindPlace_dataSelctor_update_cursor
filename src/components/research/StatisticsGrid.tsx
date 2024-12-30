import React from 'react';
import { TrendingUp } from 'lucide-react';

const stats = [
  {
    label: 'Symptom Improvement',
    value: '63%',
    description: 'Average reduction in anxiety symptoms'
  },
  {
    label: 'User Engagement',
    value: '89%',
    description: 'Weekly active user retention'
  },
  {
    label: 'Response Time',
    value: '<1min',
    description: 'Average time to first response'
  },
  {
    label: 'User Satisfaction',
    value: '4.8/5',
    description: 'Average user rating'
  }
];

const StatisticsGrid = () => {
  return (
    <div className="bg-white rounded-xl p-6 shadow-lg">
      <div className="flex items-center gap-2 mb-6">
        <TrendingUp className="w-6 h-6 text-[#48BB78]" />
        <h3 className="text-xl font-semibold text-[#2A4365]">Key Statistics</h3>
      </div>
      
      <div className="grid grid-cols-2 gap-6">
        {stats.map((stat, index) => (
          <div key={index} className="text-center p-4 bg-gray-50 rounded-lg">
            <div className="text-3xl font-bold text-[#2A4365] mb-1">{stat.value}</div>
            <div className="text-sm font-medium text-[#48BB78] mb-2">{stat.label}</div>
            <div className="text-xs text-gray-600">{stat.description}</div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default StatisticsGrid;