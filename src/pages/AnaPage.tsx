import React from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import OpenMindSection from '../components/ana/OpenMindSection';
import HandholdStepsSection from '../components/ana/HandholdStepsSection';

const AnaPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-6 py-8 space-y-12">
        <OpenMindSection />
        <HandholdStepsSection />
      </main>
    </div>
  );
};

export default AnaPage;