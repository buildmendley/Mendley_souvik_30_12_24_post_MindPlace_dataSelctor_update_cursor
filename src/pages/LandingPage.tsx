import React from 'react';
import Navbar from '../components/Navbar';
import HeroSection from '../components/HeroSection';
import FeatureSection from '../components/features/FeatureSection';
import TestimonialsSection from '../components/testimonials/TestimonialsSection';
import StorySection from '../components/story/StorySection';
import StatsSection from '../components/stats/StatsSection';
import ReviewSection from '../components/reviews/ReviewSection';
import PricingSection from '../components/pricing/PricingSection';
import Footer from '../components/footer/Footer';

const LandingPage = () => {
  return (
    <div className="relative min-h-screen">
      <div className="bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark">
        <Navbar />
        <HeroSection />
        <FeatureSection />
        <TestimonialsSection />
        <StorySection />
        <StatsSection />
        <ReviewSection />
        <PricingSection />
        <Footer />
      </div>
    </div>
  );
};

export default LandingPage;