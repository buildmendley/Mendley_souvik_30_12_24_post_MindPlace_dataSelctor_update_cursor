import React from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, Brain, Zap } from 'lucide-react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import ChatSection from '../components/discover/ChatSection';
import MindPalaceSection from '../components/discover/MindPalaceSection';
import QuickStepsSection from '../components/discover/QuickStepsSection';

const DiscoverPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-white mb-3">Discover</h1>
          <p className="text-white/80 text-lg">Explore different ways to enhance your journey</p>
        </div>

        <div className="space-y-12">
          <ChatSection />
          <MindPalaceSection />
          <QuickStepsSection />
        </div>
      </main>
    </div>
  );
};

export default DiscoverPage;