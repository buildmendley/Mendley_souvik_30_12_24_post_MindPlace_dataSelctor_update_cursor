import React from 'react';
import StoryContent from './StoryContent';
import StoryCTA from './StoryCTA';

const StorySection = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8">
      <StoryContent />
      <StoryCTA />
    </section>
  );
};

export default StorySection;