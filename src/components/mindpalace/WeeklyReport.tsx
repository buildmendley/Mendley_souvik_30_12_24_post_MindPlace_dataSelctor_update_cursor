import React from 'react';
import { LineChart, BarChart, Calendar } from 'lucide-react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const WeeklyReport = () => {
  const navigate = useNavigate();

  return (
    <motion.button
      onClick={() => navigate('/weekly-report')}
      whileHover={{ scale: 1.02 }}
      className="relative w-full h-full overflow-hidden rounded-2xl text-left"
    >
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src="https://images.unsplash.com/photo-1550859492-d5da9d8e45f3?auto=format&fit=crop&w=800&q=80" 
          alt="Background" 
          className="w-full h-full object-cover opacity-60"
        />
        <div className="absolute inset-0 bg-gradient-to-br from-blue-500/80 to-cyan-500/80 mix-blend-multiply" />
      </div>

      {/* Content */}
      <div className="relative p-6 space-y-4 backdrop-blur-sm">
        <div className="flex items-center gap-3">
          <Calendar className="w-6 h-6 text-white" />
          <h3 className="font-semibold text-white">Weekly Report</h3>
        </div>

        <div className="grid grid-cols-2 gap-2">
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
            <LineChart className="w-5 h-5 text-white mb-1" />
            <span className="text-xs text-white">Mood Trends</span>
          </div>
          <div className="bg-white/20 backdrop-blur-sm rounded-lg p-2">
            <BarChart className="w-5 h-5 text-white mb-1" />
            <span className="text-xs text-white">Activity Impact</span>
          </div>
        </div>

        <div className="text-sm text-white/90">
          View your weekly insights
        </div>
      </div>
    </motion.button>
  );
};

export default WeeklyReport;