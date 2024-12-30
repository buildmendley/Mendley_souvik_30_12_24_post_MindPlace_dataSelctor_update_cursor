import React from 'react';

const StoryImage = () => {
  return (
    <div className="relative">
      <div className="absolute inset-0 bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark opacity-10 rounded-2xl"></div>
      <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-xl">
        <img
          src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&fit=crop&w=800&q=80"
          alt="Team collaboration"
          className="w-full h-[500px] object-cover rounded-xl"
        />
        <div className="mt-6 grid grid-cols-3 gap-4">
          <img
            src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=300&q=80"
            alt="Team member 1"
            className="w-full h-32 object-cover rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=300&q=80"
            alt="Team member 2"
            className="w-full h-32 object-cover rounded-lg"
          />
          <img
            src="https://images.unsplash.com/photo-1596524430615-b46475ddff6e?auto=format&fit=crop&w=300&q=80"
            alt="Team member 3"
            className="w-full h-32 object-cover rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default StoryImage;