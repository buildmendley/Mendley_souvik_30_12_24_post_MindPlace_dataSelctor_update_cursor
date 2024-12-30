import React from 'react';
import DateSelector from '../DateSelector';
import HeroFeatures from '../HeroFeatures';
import ActivityCards from '../ActivityCards';

const OverviewTab = () => {
  return (
    <div className="space-y-8 animate-fade-in">
      <DateSelector />
      <HeroFeatures />
      <ActivityCards />
    </div>
  );
};

export default OverviewTab;