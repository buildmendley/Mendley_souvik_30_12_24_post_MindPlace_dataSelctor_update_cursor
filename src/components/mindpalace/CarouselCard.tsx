import React from 'react';
import { motion } from 'framer-motion';

interface CarouselCardProps {
  title: string;
  description: string;
  image: string;
  gradient: string;
  children: React.ReactNode;
}

const CarouselCard = ({ title, description, image, gradient, children }: CarouselCardProps) => {
  return (
    <motion.div
      initial={{ y: 0 }}
      animate={{ y: [-5, 5, -5] }}
      transition={{ 
        duration: 6,
        repeat: Infinity,
        ease: "easeInOut"
      }}
      whileHover={{ scale: 1.02 }}
      className={`
        ${gradient}
        bg-gradient-to-br backdrop-blur-sm rounded-xl overflow-hidden
        shadow-lg hover:shadow-xl transition-all duration-300
        transform hover:-translate-y-1
      `}
    >
      <div className="relative h-32 overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
        <img 
          src={image} 
          alt={title}
          className="w-full h-full object-cover"
        />
        <div className="absolute bottom-0 left-0 right-0 p-6 z-20">
          <h2 className="text-2xl font-bold text-white mb-1">{title}</h2>
          <p className="text-white/90 text-sm">{description}</p>
        </div>
      </div>

      <div className="p-6 bg-white/10 backdrop-blur-sm">
        {children}
      </div>
    </motion.div>
  );
};

export default CarouselCard;