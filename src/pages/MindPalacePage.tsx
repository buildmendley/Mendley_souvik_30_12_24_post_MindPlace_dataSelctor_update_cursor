import React, { useState } from 'react';
import { ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import Header from '../components/mindpalace/Header';
import Globe from '../components/mindpalace/Globe';
import ChatSection from '../components/mindpalace/ChatSection';
import EmoTrackPage from './EmoTrackPage';

const MindPalacePage = () => {
  const [showEmoTrack, setShowEmoTrack] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark">
      <DashboardHeader />
      <main className="px-4 py-8">
        <div className="max-w-7xl mx-auto">
          <Link 
            to="/dashboard" 
            className="flex items-center text-white mb-8 hover:opacity-80 transition"
          >
            <ArrowLeft className="w-5 h-5 mr-2" />
            Back to Dashboard
          </Link>

          {/* Welcome Message */}
          <div className="text-center mb-8">
            <h1 className="text-2xl font-bold text-white">
              Welcome to Your Mind Palace
            </h1>
          </div>

          {/* Header Section */}
          <Header onEmoTrackClick={() => setShowEmoTrack(true)} />

          {/* Main Content */}
          <div className="relative">
            {/* Background Globe */}
            <div className="fixed inset-0 z-0 flex items-center justify-center pointer-events-none">
              <div className="w-[800px] h-[800px] opacity-30">
                <Globe />
              </div>
            </div>

            {/* Chat Section */}
            <div className="relative z-10 max-w-3xl mx-auto">
              <ChatSection />
            </div>
          </div>
        </div>
      </main>

      {/* EmoTrack Modal */}
      {showEmoTrack && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl w-[800px] max-h-[80vh] overflow-hidden shadow-2xl">
            <EmoTrackPage onClose={() => setShowEmoTrack(false)} />
          </div>
        </div>
      )}
    </div>
  );
};

export default MindPalacePage;