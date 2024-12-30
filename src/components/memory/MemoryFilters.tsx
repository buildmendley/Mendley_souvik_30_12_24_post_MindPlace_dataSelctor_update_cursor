import React from 'react';

const MemoryFilters = () => {
  return (
    <div className="flex items-center gap-4 mb-8">
      <div className="relative flex-1">
        <input
          type="text"
          placeholder="Search memories..."
          className="w-full bg-white/10 text-white placeholder-white/60 px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20"
        />
      </div>

      <select className="bg-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20">
        <option value="">All Emotions</option>
        <option value="joy">Joy</option>
        <option value="sadness">Sadness</option>
        <option value="fear">Fear</option>
        <option value="anger">Anger</option>
      </select>

      <select className="bg-white/10 text-white px-4 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-white/20">
        <option value="">All Time</option>
        <option value="today">Today</option>
        <option value="week">This Week</option>
        <option value="month">This Month</option>
        <option value="year">This Year</option>
      </select>
    </div>
  );
};

export default MemoryFilters;