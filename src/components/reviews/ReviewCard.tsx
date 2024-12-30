import React from 'react';
import { Star } from 'lucide-react';

interface ReviewCardProps {
  author: string;
  avatar: string;
  rating: number;
  date: string;
  content: string;
}

const ReviewCard = ({ author, avatar, rating, date, content }: ReviewCardProps) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 mb-6 transform transition-all hover:scale-[1.02] shadow-lg">
      <div className="flex items-center mb-4">
        <img
          src={avatar}
          alt={author}
          className="w-12 h-12 rounded-full mr-4"
        />
        <div>
          <h3 className="text-text-primary font-semibold">{author}</h3>
          <div className="flex items-center">
            {Array.from({ length: rating }).map((_, i) => (
              <Star
                key={i}
                className="w-4 h-4 text-yellow-400 fill-current"
              />
            ))}
            <span className="text-text-muted text-sm ml-2">{date}</span>
          </div>
        </div>
      </div>
      <p className="text-text-secondary">{content}</p>
    </div>
  );
};

export default ReviewCard;