import React from 'react';
import { Calendar } from 'lucide-react';

interface TimeRangeSelectorProps {
  value: { start: Date; end: Date };
  onChange: (range: { start: Date; end: Date }) => void;
}

const TimeRangeSelector = ({ value, onChange }: TimeRangeSelectorProps) => {
  const ranges = [
    { label: 'Last 7 days', days: 7 },
    { label: 'Last 14 days', days: 14 },
    { label: 'Last 30 days', days: 30 }
  ];

  const handleRangeClick = (days: number) => {
    const end = new Date();
    const start = new Date(Date.now() - days * 24 * 60 * 60 * 1000);
    onChange({ start, end });
  };

  return (
    <div className="flex items-center justify-center gap-4">
      <div className="flex items-center gap-2 bg-white rounded-lg shadow p-2">
        <Calendar className="w-5 h-5 text-ocean-dark" />
        <input
          type="date"
          value={value.start.toISOString().split('T')[0]}
          onChange={(e) => onChange({ ...value, start: new Date(e.target.value) })}
          className="border-none focus:outline-none text-sm"
        />
        <span className="text-gray-500">to</span>
        <input
          type="date"
          value={value.end.toISOString().split('T')[0]}
          onChange={(e) => onChange({ ...value, end: new Date(e.target.value) })}
          className="border-none focus:outline-none text-sm"
        />
      </div>

      <div className="flex gap-2">
        {ranges.map((range) => (
          <button
            key={range.days}
            onClick={() => handleRangeClick(range.days)}
            className="px-4 py-2 text-sm bg-white rounded-lg shadow hover:bg-ocean-light/50 transition"
          >
            {range.label}
          </button>
        ))}
      </div>
    </div>
  );
};

export default TimeRangeSelector;