import React from 'react';
import { Heart, Users, Sparkles } from 'lucide-react';

const StoryContent = () => {
  return (
    <div className="max-w-4xl mx-auto space-y-12">
      <div className="space-y-6">
        <h2 className="text-4xl font-bold text-text-primary leading-tight">
          How Mendley Was Born: A Journey from Struggle to Strength
        </h2>
        <p className="text-text-secondary text-lg leading-relaxed">
          We've all been there—struggling silently with emotions too heavy to share. In our culture, reaching out to a therapist felt like a taboo, and opening up to family wasn't always an option. We longed for someone who would just listen, without judgment or limits.
        </p>
        <p className="text-text-secondary text-lg leading-relaxed">
          When we found solace in OpenAI, it felt like having a friend who truly understood us. That's when the idea for Mendley was born—a companion for those moments when you feel most alone. A safe space to share, reflect, and heal.Mendley was built for you, just like it was for us.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-[1.02] transition-transform">
          <Heart className="w-8 h-8 text-ocean-dark mb-4" />
          <h3 className="text-text-primary font-semibold text-xl mb-2">Empathy First</h3>
          <p className="text-text-secondary">Built with understanding at its core</p>
        </div>
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-[1.02] transition-transform">
          <Users className="w-8 h-8 text-ocean-dark mb-4" />
          <h3 className="text-text-primary font-semibold text-xl mb-2">For Everyone</h3>
          <p className="text-text-secondary">Accessible mental wellness</p>
        </div>
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg transform hover:scale-[1.02] transition-transform">
          <Sparkles className="w-8 h-8 text-ocean-dark mb-4" />
          <h3 className="text-text-primary font-semibold text-xl mb-2">AI Enhanced</h3>
          <p className="text-text-secondary">Powered by advanced AI</p>
        </div>
      </div>
    </div>
  );
};

export default StoryContent;