import React from 'react';

const userAvatars = [
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=40&h=40&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=40&h=40&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=40&h=40&fit=crop&crop=faces',
  'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=40&h=40&fit=crop&crop=faces'
];

const ReviewSection = () => {
  return (
    <div className="flex items-center space-x-4">
      <div className="flex -space-x-3">
        {userAvatars.map((avatar, index) => (
          <img
            key={index}
            className="w-10 h-10 rounded-full border-2 border-white object-cover"
            src={avatar}
            alt={`User avatar ${index + 1}`}
          />
        ))}
      </div>
      <div className="text-white text-sm">
        <span className="font-bold text-lg">4.9/5</span> from over 1,000+ reviews
      </div>
    </div>
  );
};

export default ReviewSection;