import React from 'react';
import TherapistCards from './TherapistCards';
import ImprovementStats from './ImprovementStats';

const StatsSection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold text-text-primary mb-4">
          Guided by Expertise and Experience
        </h2>
        <p className="text-2xl text-text-primary">
          A blend of professional insights and personal journeys to support positive change.
        </p>
      </div>
      
      <TherapistCards />
      
      <div className="mt-24 text-center">
        <h3 className="text-3xl font-bold text-text-primary mb-3">
          Empowering Change
        </h3>
        <p className="text-text-secondary mb-12">
          Real transformations through lived experiences and expert advice.
        </p>
        
        <ImprovementStats />
      </div>
    </section>
  );
};

export default StatsSection;