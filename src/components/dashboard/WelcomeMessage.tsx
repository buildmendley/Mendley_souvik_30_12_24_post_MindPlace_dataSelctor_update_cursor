import React from 'react';
import { getUser } from '../../utils/auth';

const WelcomeMessage = () => {
  const user = getUser();
  const userName = user?.name || 'Friend';

  return (
    <div className="text-center mb-8">
      <h1 className="text-4xl font-bold text-text-primary mb-3">
        Welcome back, {userName}!
      </h1>
      <p className="text-text-secondary text-lg max-w-2xl mx-auto">
        Your emotional journey matters. Let's make today a step toward clarity, resilience, and balance.
      </p>
    </div>
  );
};

export default WelcomeMessage;