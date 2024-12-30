import React, { useState } from 'react';
import { Search } from 'lucide-react';
import MemoryCard from './MemoryCard';
import { Memory } from '../../types/memory';

interface MemorySidebarProps {
  memories: Memory[];
  selectedMemoryId: string | null;
  onMemorySelect: (id: string) => void;
}

const MemorySidebar = ({ memories, selectedMemoryId, onMemorySelect }: MemorySidebarProps) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [emotionFilter, setEmotionFilter] = useState('');

  const filteredMemories = memories.filter(memory => {
    const searchMatch = !searchTerm || 
      memory.analysis.headline.toLowerCase().includes(searchTerm.toLowerCase()) ||
      memory.analysis.keyInsight.toLowerCase().includes(searchTerm.toLowerCase());

    const emotionMatch = !emotionFilter ||
      memory.analysis.emotions.some(e => e.name.toLowerCase() === emotionFilter.toLowerCase());

    return searchMatch && emotionMatch;
  });

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 h-[calc(100vh-240px)] flex flex-col">
      {/* Search and Filters */}
      <div className="space-y-4 mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search memories..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-dark/50"
          />
        </div>

        <select
          value={emotionFilter}
          onChange={(e) => setEmotionFilter(e.target.value)}
          className="w-full px-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-dark/50"
        >
          <option value="">All Emotions</option>
          <option value="joy">Joy</option>
          <option value="sadness">Sadness</option>
          <option value="fear">Fear</option>
          <option value="anger">Anger</option>
        </select>
      </div>

      {/* Memory List */}
      <div className="flex-1 overflow-y-auto space-y-4">
        {filteredMemories.map((memory) => (
          <MemoryCard
            key={memory.id}
            memory={memory}
            isSelected={memory.id === selectedMemoryId}
            onClick={() => onMemorySelect(memory.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default MemorySidebar;