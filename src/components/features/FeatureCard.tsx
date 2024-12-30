import React from 'react';
import { LucideIcon } from 'lucide-react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  image?: string;
}

const FeatureCard = ({ title, description, icon: Icon, image }: FeatureCardProps) => {
  return (
    <div className={`bg-white/95 backdrop-blur-sm rounded-2xl p-6 flex flex-col h-full shadow-lg ${image ? 'min-h-[400px]' : ''}`}>
      <div className="mb-4">
        <Icon className="w-8 h-8 text-ocean-dark" />
      </div>
      <h3 className="text-xl font-semibold text-text-primary mb-2">{title}</h3>
      <p className="text-text-secondary mb-6">{description}</p>
      {image && (
        <div className="mt-auto w-full rounded-xl overflow-hidden shadow-lg">
          <img src={image} alt={title} className="w-full h-auto object-cover" />
        </div>
      )}
    </div>
  );
};

export default FeatureCard;