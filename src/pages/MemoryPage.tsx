import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { ArrowLeft, Book, Calendar, Search } from 'lucide-react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import MemoryTabs from '../components/memory/MemoryTabs';
import MemorySidebar from '../components/memory/MemorySidebar';
import MemoryDetail from '../components/memory/MemoryDetail';
import JournalTab from '../components/memory/JournalTab';
import { loadAllMemories } from '../utils/storage';

const MemoryPage = () => {
  const navigate = useNavigate();
  const [selectedMemoryId, setSelectedMemoryId] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState('chat');
  const memories = loadAllMemories();

  React.useEffect(() => {
    if (memories.length > 0 && !selectedMemoryId && activeTab === 'chat') {
      setSelectedMemoryId(memories[0].id);
    }
  }, [memories, activeTab]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark">
      <DashboardHeader />
      <main className="max-w-[1600px] mx-auto px-6 py-8">
        {/* Header */}
        <div className="flex items-center justify-between mb-8">
          <div>
            <button
              onClick={() => navigate('/dashboard')}
              className="flex items-center text-white mb-4 hover:opacity-80 transition"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </button>
            <h1 className="text-3xl font-bold text-white">Memory Journal</h1>
            <p className="text-white/80">Your conversation history and insights</p>
          </div>
          
          <div className="flex items-center gap-4">
            <button className="bg-white/10 text-white p-2 rounded-lg hover:bg-white/20 transition">
              <Calendar className="w-5 h-5" />
            </button>
            <button className="bg-white/10 text-white p-2 rounded-lg hover:bg-white/20 transition">
              <Book className="w-5 h-5" />
            </button>
            <button className="bg-white/10 text-white p-2 rounded-lg hover:bg-white/20 transition">
              <Search className="w-5 h-5" />
            </button>
          </div>
        </div>

        <MemoryTabs activeTab={activeTab} onChange={setActiveTab} />

        {activeTab === 'chat' ? (
          <div className="grid grid-cols-12 gap-8">
            <div className="col-span-4">
              <MemorySidebar
                memories={memories}
                selectedMemoryId={selectedMemoryId}
                onMemorySelect={setSelectedMemoryId}
              />
            </div>

            <div className="col-span-8">
              <MemoryDetail memoryId={selectedMemoryId} />
            </div>
          </div>
        ) : (
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <JournalTab />
          </div>
        )}
      </main>
    </div>
  );
};

export default MemoryPage;