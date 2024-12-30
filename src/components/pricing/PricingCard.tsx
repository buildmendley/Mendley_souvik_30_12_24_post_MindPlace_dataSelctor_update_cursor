import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

interface PricingCardProps {
  title: string;
  price: number;
  period: string;
  features: string[];
  featured?: boolean;
  originalPrice?: number;
  discountedYearlyPrice?: number;
  savePercent?: number;
}

const PricingCard = ({
  title,
  price,
  period,
  features,
  featured = false,
  originalPrice,
  discountedYearlyPrice,
  savePercent
}: PricingCardProps) => {
  return (
    <div
      className={`
        rounded-2xl p-8 shadow-lg
        ${featured 
          ? 'bg-white/95 backdrop-blur-lg border-2 border-ocean relative' 
          : 'bg-white/90 backdrop-blur-sm'
        }
      `}
    >
      {featured && savePercent && (
        <div className="absolute -top-4 right-4 bg-ocean-dark text-text-light px-3 py-1 rounded-full text-sm font-medium">
          SAVE {savePercent}%
        </div>
      )}
      
      <h3 className="text-xl font-semibold text-text-primary mb-5">{title}</h3>
      
      <div className="mb-6">
        <div className="flex items-baseline">
          <span className="text-4xl font-bold text-text-primary">${price}</span>
          <span className="text-text-secondary ml-2">/{period}</span>
        </div>
        {originalPrice && discountedYearlyPrice && (
          <div className="mt-2 text-text-muted text-sm">
            <span className="line-through">${originalPrice}/yr</span>
            <span className="ml-2">${discountedYearlyPrice}/yr</span>
          </div>
        )}
      </div>

      <ul className="space-y-4 mb-8">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-text-secondary">
            <Check className="w-5 h-5 mr-3 text-ocean" />
            {feature}
          </li>
        ))}
      </ul>

      <Link
        to="/register"
        className={`
          w-full py-3 px-6 rounded-lg font-medium transition block text-center
          ${featured 
            ? 'bg-ocean-dark text-text-light hover:bg-ocean' 
            : 'bg-white text-text-primary border-2 border-ocean hover:bg-ocean-light/50'
          }
        `}
      >
        Start Free Trial
      </Link>
    </div>
  );
};

export default PricingCard;