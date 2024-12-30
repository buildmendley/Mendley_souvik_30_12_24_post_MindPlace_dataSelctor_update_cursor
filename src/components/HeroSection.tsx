import React from 'react';
import { Link } from 'react-router-dom';
import ReviewSection from './ReviewSection';

const HeroSection = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
      <div className="grid grid-cols-12 gap-12 items-center">
        {/* Left section - 1/3 width */}
        <div className="col-span-12 lg:col-span-4 space-y-8">
          <h1 className="text-5xl font-bold text-text-primary leading-tight tracking-tight">
            Your Journey to Inner Peace Starts Here
          </h1>
          <p className="text-xl text-text-secondary leading-relaxed">
            Discover a personalized path to emotional well-being with Mendley's AI-powered guidance and supportive community.
          </p>
          
        </div>

        {/* Right section - 2/3 width */}
        <div className="col-span-12 lg:col-span-8 flex items-right justify-right">
          <div className="w-full max-w-3xl aspect-video">
            <video 
              className="w-full h-full object-cover rounded-2xl"
              autoPlay 
              loop 
              muted 
              playsInline
            >
              <source 
                src="https://cdn.dribbble.com/userupload/18198176/file/original-e0bdbc43949742b41619e341b989c611.mp4" 
                type="video/mp4" 
              />
              Your browser does not support the video tag.
            </video>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;