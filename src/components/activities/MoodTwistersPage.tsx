import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Sparkles, ArrowLeft } from 'lucide-react';
import GratitudePrompt from './mood/GratitudePrompt';

const prompts = [
  "What's one small thing that brought you joy today?",
  "Name a challenge that helped you grow recently.",
  "Share a moment of kindness you witnessed or experienced.",
  "What's something you're looking forward to?",
  "Describe a personal strength you're grateful for."
];

const MoodTwistersPage = () => {
  const [currentPromptIndex, setCurrentPromptIndex] = useState(0);
  const [responses, setResponses] = useState<string[]>([]);

  const handleResponse = (response: string) => {
    setResponses([...responses, response]);
    setCurrentPromptIndex((prev) => (prev + 1) % prompts.length);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/dashboard" className="inline-flex items-center text-text-light mb-8 hover:opacity-80 transition">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </Link>

        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <div className="bg-ocean-dark p-3 rounded-xl">
              <Sparkles className="w-8 h-8 text-text-light" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-text-primary">Mood Twisters</h1>
              <p className="text-text-secondary">Positive mindset exercises</p>
            </div>
          </div>

          <GratitudePrompt 
            prompt={prompts[currentPromptIndex]}
            onSubmit={handleResponse}
          />

          {responses.length > 0 && (
            <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
              <h3 className="text-xl font-semibold text-text-primary mb-4">Your Journey</h3>
              <div className="space-y-4">
                {responses.map((response, index) => (
                  <div key={index} className="bg-ocean-light/30 p-4 rounded-lg">
                    <p className="font-medium text-ocean-dark mb-2">{prompts[index]}</p>
                    <p className="text-text-secondary">{response}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default MoodTwistersPage;