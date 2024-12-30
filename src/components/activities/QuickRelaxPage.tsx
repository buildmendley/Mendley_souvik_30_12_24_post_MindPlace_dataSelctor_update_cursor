import React from 'react';
import { Link } from 'react-router-dom';
import { Wind, ArrowLeft } from 'lucide-react';
import BreathingExercise from './exercises/BreathingExercise';
import StretchExercise from './exercises/StretchExercise';

const QuickRelaxPage = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/dashboard" className="inline-flex items-center text-text-light mb-8 hover:opacity-80 transition">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </Link>

        <div className="space-y-8">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-ocean-dark p-3 rounded-xl">
              <Wind className="w-8 h-8 text-text-light" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-text-primary">Quick Relax</h1>
              <p className="text-text-secondary">Simple breathing exercises & stretches</p>
            </div>
          </div>

          <BreathingExercise />
          <StretchExercise />
        </div>
      </div>
    </div>
  );
}

export default QuickRelaxPage;