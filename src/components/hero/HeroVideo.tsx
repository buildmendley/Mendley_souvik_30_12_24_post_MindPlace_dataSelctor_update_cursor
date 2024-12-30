import React from 'react';

const HeroVideo = () => {
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
          src="/videos/your-video.mp4" 
          type="video/mp4" 
        />
        Your browser does not support the video tag.
      </video>
    </div>
  );
};

export default HeroVideo;