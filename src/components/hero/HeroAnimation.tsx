import React from 'react';

const HeroAnimation = () => {
  return (
    <div className="w-full h-full rounded-2xl overflow-hidden">
      <video 
        className="w-full h-full object-cover"
        autoPlay 
        loop 
        muted 
        playsInline
      >
        <source 
          src="https://cdn.dribbble.com/userupload/16642885/file/original-6433de79a34f799bf4a634cbbdda7967.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroAnimation;