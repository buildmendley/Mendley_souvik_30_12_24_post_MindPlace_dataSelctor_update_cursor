import React, { useState } from 'react';
import { ChevronRight, ChevronLeft } from 'lucide-react';

const stretches = [
  {
    name: "Neck Rolls",
    duration: "30 seconds",
    instructions: [
      "Sit up straight with your shoulders relaxed",
      "Slowly roll your head in a circular motion",
      "Do 5 rotations clockwise, then counter-clockwise",
      "Keep movements gentle and slow"
    ]
  },
  {
    name: "Shoulder Stretch",
    duration: "30 seconds",
    instructions: [
      "Roll your shoulders backwards 5 times",
      "Roll your shoulders forwards 5 times",
      "Squeeze shoulders up to ears, hold, release",
      "Repeat 3 times"
    ]
  },
  {
    name: "Wrist Flexor",
    duration: "30 seconds",
    instructions: [
      "Extend your arm with palm up",
      "Gently pull fingers back with other hand",
      "Hold for 15-30 seconds",
      "Repeat with other hand"
    ]
  }
];

const StretchExercise = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextStretch = () => {
    setCurrentIndex((prev) => (prev + 1) % stretches.length);
  };

  const prevStretch = () => {
    setCurrentIndex((prev) => (prev - 1 + stretches.length) % stretches.length);
  };

  const currentStretch = stretches[currentIndex];

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
      <h3 className="text-2xl font-semibold text-text-primary mb-6">Quick Stretches</h3>
      
      <div className="relative">
        <div className="mb-8">
          <div className="flex justify-between items-center mb-4">
            <h4 className="text-xl font-medium text-ocean-dark">{currentStretch.name}</h4>
            <span className="text-text-secondary">{currentStretch.duration}</span>
          </div>
          
          <ul className="space-y-3">
            {currentStretch.instructions.map((instruction, index) => (
              <li key={index} className="flex items-start gap-3 text-text-secondary">
                <span className="w-6 h-6 bg-ocean-light rounded-full flex items-center justify-center flex-shrink-0 text-ocean-dark font-medium">
                  {index + 1}
                </span>
                {instruction}
              </li>
            ))}
          </ul>
        </div>

        <div className="flex justify-between">
          <button
            onClick={prevStretch}
            className="flex items-center gap-2 text-ocean-dark hover:text-ocean transition"
          >
            <ChevronLeft className="w-5 h-5" />
            Previous
          </button>
          <button
            onClick={nextStretch}
            className="flex items-center gap-2 text-ocean-dark hover:text-ocean transition"
          >
            Next
            <ChevronRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StretchExercise;