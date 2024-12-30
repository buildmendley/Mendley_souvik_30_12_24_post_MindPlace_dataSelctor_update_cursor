import React, { useState } from 'react';
import { X } from 'lucide-react';
import { motion } from 'framer-motion';
import TimeRangeSelector from '../components/emotrack/TimeRangeSelector';
import EmotionBarChart from '../components/emotrack/EmotionBarChart';
import EmotionPieChart from '../components/emotrack/EmotionPieChart';

// Sample data for demonstration
const sampleData = {
  emotions: [
    { date: '2024-03-20', dominantEmotion: 'joy', intensity: 8 },
    { date: '2024-03-21', dominantEmotion: 'joy', intensity: 7 },
    { date: '2024-03-22', dominantEmotion: 'sadness', intensity: 6 },
    { date: '2024-03-23', dominantEmotion: 'joy', intensity: 9 },
    { date: '2024-03-24', dominantEmotion: 'surprise', intensity: 7 },
    { date: '2024-03-25', dominantEmotion: 'joy', intensity: 8 },
    { date: '2024-03-26', dominantEmotion: 'joy', intensity: 9 }
  ],
  emotionColors: {
    joy: '#FFD93D',
    sadness: '#6C9BCF',
    anger: '#FF6B6B',
    fear: '#4F709C',
    surprise: '#98EECC'
  }
};

const EmoTrackPage = ({ onClose }: { onClose: () => void }) => {
  const [dateRange, setDateRange] = useState({
    start: new Date(Date.now() - 7 * 24 * 60 * 60 * 1000),
    end: new Date()
  });
  const [selectedDate, setSelectedDate] = useState<string>(sampleData.emotions[0].date);

  const selectedDayData = sampleData.emotions.find(d => d.date === selectedDate);

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="p-6 bg-gradient-to-br from-blue-50 to-purple-50 max-h-[80vh] overflow-y-auto"
    >
      {/* Header */}
      <div className="flex items-center justify-between mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Emotion Tracking</h2>
        <button 
          onClick={onClose}
          className="p-2 hover:bg-gray-100 rounded-full transition"
        >
          <X className="w-5 h-5" />
        </button>
      </div>

      {/* Date Range Selector */}
      <div className="mb-8">
        <TimeRangeSelector value={dateRange} onChange={setDateRange} />
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        {/* Bar Chart */}
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">Dominant Daily Emotions</h3>
          <EmotionBarChart 
            data={sampleData.emotions}
            colors={sampleData.emotionColors}
            onDateSelect={setSelectedDate}
          />
        </div>

        {/* Pie Chart */}
        <div className="bg-white p-4 rounded-xl shadow-lg">
          <h3 className="text-lg font-semibold mb-4">
            Emotion Distribution
            <span className="text-sm font-normal text-gray-500 ml-2">
              {new Date(selectedDate).toLocaleDateString()}
            </span>
          </h3>
          <EmotionPieChart 
            data={selectedDayData}
            colors={sampleData.emotionColors}
          />
        </div>
      </div>

      {/* Insights Section */}
      <div className="bg-white p-6 rounded-xl shadow-lg space-y-6">
        <h3 className="text-lg font-semibold">Insights for {new Date(selectedDate).toLocaleDateString()}</h3>
        
        {/* Emotional Landscape */}
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Emotional Landscape</h4>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-600">
              Primary emotion: <span className="font-medium">{selectedDayData?.dominantEmotion}</span> with intensity level {selectedDayData?.intensity}/10
            </p>
          </div>
        </div>

        {/* Triggering Points */}
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Triggering Points</h4>
          <ul className="bg-gray-50 p-4 rounded-lg space-y-2">
            <li className="text-gray-600">• Work-related stress peaks in morning hours</li>
            <li className="text-gray-600">• Social interactions in afternoon meetings</li>
            <li className="text-gray-600">• Evening relaxation activities</li>
          </ul>
        </div>

        {/* Actionable Items */}
        <div>
          <h4 className="font-medium text-gray-700 mb-2">Actionable Items</h4>
          <ul className="bg-gray-50 p-4 rounded-lg space-y-2">
            <li className="text-gray-600">• Schedule regular breaks during work hours</li>
            <li className="text-gray-600">• Practice mindfulness before meetings</li>
            <li className="text-gray-600">• Maintain evening relaxation routine</li>
          </ul>
        </div>
      </div>
    </motion.div>
  );
};

export default EmoTrackPage;