import React, { useEffect, useRef } from 'react';
import { useInView } from 'react-intersection-observer';

interface TestimonialBubbleProps {
  text: string;
  author: string;
  role: string;
  image: string;
  position: 'left' | 'right';
  delay?: number;
}

const TestimonialBubble = ({ text, author, role, image, position, delay = 0 }: TestimonialBubbleProps) => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div 
      ref={ref}
      className={`
        flex items-center gap-4 w-80
        ${position === 'right' ? 'flex-row-reverse' : ''}
        ${inView ? 'animate-fade-in opacity-100' : 'opacity-0'}
      `}
      style={{ 
        transitionDelay: `${delay}ms`,
        animationDelay: `${delay}ms`
      }}
    >
      <img 
        src={image} 
        alt={author} 
        className="w-12 h-12 rounded-full object-cover border-2 border-white/20 flex-shrink-0"
      />
      <div className="bg-ocean-dark p-6 rounded-2xl text-white backdrop-blur-sm flex-grow">
        <p className="font-semibold mb-2 text-lg">{text}</p>
        <p className="text-sm opacity-90">{author}</p>
        <p className="text-xs opacity-75">{role}</p>
      </div>
    </div>
  );
};

export default TestimonialBubble;