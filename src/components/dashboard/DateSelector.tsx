import React, { useState } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { format, addDays, startOfWeek, isToday } from 'date-fns';

const DateSelector = () => {
  const navigate = useNavigate();
  const [selectedDate, setSelectedDate] = useState(new Date());
  
  // Get the start of the week for the selected date
  const getWeekDays = (date: Date) => {
    const start = startOfWeek(date, { weekStartsOn: 0 }); // Sunday as week start
    return Array.from({ length: 7 }, (_, i) => {
      const day = addDays(start, i);
      return {
        date: day,
        day: format(day, 'd'),
        label: format(day, 'EEEEE'), // First letter of day name
        active: format(day, 'yyyy-MM-dd') === format(selectedDate, 'yyyy-MM-dd'),
        isToday: isToday(day)
      };
    });
  };

  const [weekDays, setWeekDays] = useState(getWeekDays(selectedDate));

  const handlePrevDay = () => {
    const newDate = addDays(selectedDate, -1);
    setSelectedDate(newDate);
    setWeekDays(getWeekDays(newDate));
  };

  const handleNextDay = () => {
    const newDate = addDays(selectedDate, 1);
    setSelectedDate(newDate);
    setWeekDays(getWeekDays(newDate));
  };

  const handleDateClick = (date: Date) => {
    setSelectedDate(date);
    setWeekDays(getWeekDays(date));
  };

  return (
    <div className="flex justify-between items-start gap-8 mb-8">
      {/* Compact Calendar */}
      <div className="w-[400px]">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">
            {format(selectedDate, 'EEEE, MMM d')}
          </h2>
          <div className="flex gap-2">
            <button 
              onClick={handlePrevDay}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ChevronLeft className="w-5 h-5 text-gray-600" />
            </button>
            <button 
              onClick={handleNextDay}
              className="p-2 hover:bg-gray-100 rounded-lg transition"
            >
              <ChevronRight className="w-5 h-5 text-gray-600" />
            </button>
          </div>
        </div>
        
        <div className="flex justify-between">
          {weekDays.map(({ date, day, label, active, isToday }) => (
            <div
              key={day}
              className="flex flex-col items-center"
              onClick={() => handleDateClick(date)}
            >
              <span className="text-sm font-medium text-gray-500 mb-2">{label}</span>
              <div className={`
                w-10 h-10 flex items-center justify-center rounded-full text-sm
                transition-all duration-300 cursor-pointer relative
                ${active 
                  ? 'bg-gradient-to-r from-violet-500 to-purple-500 text-white font-medium shadow-lg' 
                  : 'text-gray-700 hover:bg-gray-100'
                }
                ${isToday && !active ? 'ring-2 ring-violet-500' : ''}
              `}>
                {day}
                {isToday && (
                  <span className="absolute -bottom-1 w-1 h-1 rounded-full bg-violet-500"></span>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Daily Star Section */}
      <button
        onClick={() => navigate('/daily-star')}
        className="bg-gradient-to-br from-violet-50 to-purple-50 backdrop-blur-sm rounded-2xl p-6 w-80 border border-white/50 shadow-lg hover:shadow-xl transition transform hover:scale-[1.02]"
      >
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-2xl font-semibold text-gray-800">Daily Star</h2>
          <div className="relative">
            <span className="absolute -top-1 -right-1 w-5 h-5 bg-purple-600 text-white text-xs rounded-full flex items-center justify-center font-bold">
              7
            </span>
            <span className="text-yellow-400 text-2xl">⭐</span>
          </div>
        </div>

        <p className="text-gray-600 mb-4">
          Complete your daily reflection to earn stars
        </p>

        <div className="space-y-3">
          <div className="flex justify-between items-center text-sm">
            <span className="font-medium text-gray-700">Current streak</span>
            <span className="text-purple-600 font-medium">7 days 🎉</span>
          </div>
          
          <div className="w-full h-2 bg-gray-100 rounded-full overflow-hidden">
            <div 
              className="h-full bg-gradient-to-r from-violet-500 to-purple-500 rounded-full"
              style={{ width: '70%' }}
            />
          </div>
        </div>
      </button>
    </div>
  );
};

export default DateSelector;