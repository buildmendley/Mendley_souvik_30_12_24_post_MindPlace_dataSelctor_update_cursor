import React from 'react';
import { Star } from 'lucide-react';

interface Review {
  name: string;
  rating: number;
  text: string;
  image: string;
}

interface ReviewColumnProps {
  reviews: Review[];
  speed: number;
  delay: number;
}

const ReviewColumn = ({ reviews, speed, delay }: ReviewColumnProps) => {
  const duplicatedReviews = [...reviews, ...reviews]; // Duplicate for seamless loop

  return (
    <div className="relative h-[600px] overflow-hidden">
      <div 
        className="absolute animate-review-scroll"
        style={{ 
          animationDuration: `${speed}s`,
          animationDelay: `${delay}s`
        }}
      >
        {duplicatedReviews.map((review, index) => (
          <div
            key={`${review.name}-${index}`}
            className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mb-6 shadow-lg hover:scale-[1.02] transition-transform"
          >
            <div className="flex items-center mb-4">
              <img
                src={review.image}
                alt={review.name}
                className="w-12 h-12 rounded-full mr-4 object-cover"
              />
              <div>
                <h3 className="text-text-primary font-semibold">{review.name}</h3>
                <div className="flex items-center">
                  {Array.from({ length: review.rating }).map((_, i) => (
                    <Star
                      key={i}
                      className="w-4 h-4 text-yellow-400 fill-current"
                    />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-text-secondary">{review.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ReviewColumn;