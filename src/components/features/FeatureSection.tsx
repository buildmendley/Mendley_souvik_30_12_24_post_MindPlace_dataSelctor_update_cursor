import React from 'react';
import FeatureHeader from './FeatureHeader';
import FeatureGrid from './FeatureGrid';

const FeatureSection = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <FeatureHeader />
      <FeatureGrid />
    </section>
  );
};

export default FeatureSection;