import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, PenLine } from 'lucide-react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import JournalSidebar from '../components/journal/JournalSidebar';
import JournalEditor from '../components/journal/JournalEditor';

const JournalPage = () => {
  const [selectedEntryId, setSelectedEntryId] = useState<string | null>(null);

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <Link 
              to="/dashboard" 
              className="flex items-center text-white mb-4 hover:opacity-80 transition"
            >
              <ArrowLeft className="w-5 h-5 mr-2" />
              Back to Dashboard
            </Link>
            <h1 className="text-3xl font-bold text-white">Journal</h1>
            <p className="text-white/80">Record your thoughts and reflections</p>
          </div>
          
          <button
            onClick={() => setSelectedEntryId(null)}
            className="bg-white/10 text-white px-4 py-2 rounded-lg hover:bg-white/20 transition"
          >
            New Entry
          </button>
        </div>

        <div className="grid grid-cols-12 gap-8">
          <div className="col-span-4">
            <JournalSidebar
              selectedEntryId={selectedEntryId}
              onEntrySelect={setSelectedEntryId}
            />
          </div>

          <div className="col-span-8">
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
              <div className="flex items-center gap-3 mb-8">
                <div className="bg-ocean-dark p-3 rounded-xl">
                  <PenLine className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">
                    {selectedEntryId ? 'Edit Entry' : 'New Entry'}
                  </h2>
                  <p className="text-gray-600">Express yourself freely</p>
                </div>
              </div>

              <JournalEditor selectedEntryId={selectedEntryId} />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default JournalPage;