import React from 'react';
import DashboardHeader from '../components/dashboard/DashboardHeader';
import WelcomeMessage from '../components/dashboard/WelcomeMessage';
import OverviewTab from '../components/dashboard/tabs/OverviewTab';
import Breadcrumb from '../components/dashboard/Breadcrumb';

const DashboardPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-6 py-8">
        <Breadcrumb />
        <WelcomeMessage />
        <OverviewTab />
      </main>
    </div>
  );
};

export default DashboardPage;