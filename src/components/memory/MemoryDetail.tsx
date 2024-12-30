import React from 'react';
import { MessageCircle } from 'lucide-react';
import { loadMemory } from '../../utils/storage';
import AnalysisSection from '../mchat/analysis/AnalysisSection';
import ChatHistory from '../mchat/analysis/ChatHistory';

interface MemoryDetailProps {
  memoryId: string | null;
}

const MemoryDetail = ({ memoryId }: MemoryDetailProps) => {
  const memory = memoryId ? loadMemory(memoryId) : null;

  if (!memory) {
    return (
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 text-center">
        <MessageCircle className="w-12 h-12 text-ocean-dark mx-auto mb-4" />
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Select a memory</h3>
        <p className="text-gray-600">Choose a conversation from the list to view its details</p>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 h-[calc(100vh-240px)] overflow-y-auto">
      <div className="max-w-3xl mx-auto space-y-8">
        {/* Analysis Section */}
        <AnalysisSection analysis={memory.analysis} />

        {/* Chat History */}
        <ChatHistory messages={memory.messages} />
      </div>
    </div>
  );
};

export default MemoryDetail;