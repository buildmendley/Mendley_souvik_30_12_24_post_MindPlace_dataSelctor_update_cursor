import React, { useState, useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle } from 'lucide-react';
import { loadAllMemories } from '../../utils/storage';
import MemoryCard from './MemoryCard';

const MemoryList = () => {
  const navigate = useNavigate();
  const [searchTerm, setSearchTerm] = useState('');
  const [emotionFilter, setEmotionFilter] = useState('');
  const [timeFilter, setTimeFilter] = useState('');

  const memories = loadAllMemories();

  const filteredMemories = useMemo(() => {
    return memories.filter(memory => {
      // Search filter
      const searchMatch = !searchTerm || 
        memory.analysis.headline.toLowerCase().includes(searchTerm.toLowerCase()) ||
        memory.analysis.keyInsight.toLowerCase().includes(searchTerm.toLowerCase()) ||
        memory.tags?.some(tag => tag.toLowerCase().includes(searchTerm.toLowerCase()));

      // Emotion filter
      const emotionMatch = !emotionFilter ||
        memory.analysis.emotions.some(e => e.name.toLowerCase() === emotionFilter.toLowerCase());

      // Time filter
      let timeMatch = true;
      if (timeFilter) {
        const now = Date.now();
        const memoryTime = memory.timestamp;
        const diff = now - memoryTime;
        
        switch (timeFilter) {
          case 'today':
            timeMatch = diff < 86400000; // 24 hours
            break;
          case 'week':
            timeMatch = diff < 604800000; // 7 days
            break;
          case 'month':
            timeMatch = diff < 2592000000; // 30 days
            break;
          case 'year':
            timeMatch = diff < 31536000000; // 365 days
            break;
        }
      }

      return searchMatch && emotionMatch && timeMatch;
    });
  }, [memories, searchTerm, emotionFilter, timeFilter]);

  if (memories.length === 0) {
    return (
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center">
        <MessageCircle className="w-12 h-12 text-ocean-dark mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">No memories yet</h3>
        <p className="text-gray-600 mb-6">Start a conversation with Ana to create your first memory</p>
        <button
          onClick={() => navigate('/ana')}
          className="bg-ocean-dark text-white px-6 py-3 rounded-xl hover:bg-ocean transition"
        >
          Chat with Ana
        </button>
      </div>
    );
  }

  return (
    <div className="grid gap-6">
      {filteredMemories.map((memory) => (
        <MemoryCard
          key={memory.id}
          memory={memory}
          onClick={() => navigate(`/memories/${memory.id}`)}
        />
      ))}
    </div>
  );
};

export default MemoryList;