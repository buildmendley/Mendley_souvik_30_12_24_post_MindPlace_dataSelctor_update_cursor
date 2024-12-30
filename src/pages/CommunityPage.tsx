import React from 'react';
import Navbar from '../components/Navbar';
import CommunityHeader from '../components/community/CommunityHeader';
import CommunityFeed from '../components/community/CommunityFeed';
import ArticlesSection from '../components/community/ArticlesSection';
import CommunityGroups from '../components/community/CommunityGroups';
import Footer from '../components/footer/Footer';

const CommunityPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark">
      <Navbar />
      <CommunityHeader />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CommunityFeed />
        </div>
        <div className="space-y-8">
          <ArticlesSection />
          <CommunityGroups />
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default CommunityPage;