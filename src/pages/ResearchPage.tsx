import React from 'react';
import Navbar from '../components/Navbar';
import ResearchHeader from '../components/research/ResearchHeader';
import ResearchSection from '../components/research/ResearchSection';
import Footer from '../components/footer/Footer';

const ResearchPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark">
      <Navbar />
      <ResearchHeader />
      <ResearchSection />
      <Footer />
    </div>
  );
};

export default ResearchPage;