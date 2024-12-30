import React from 'react';
import { Check } from 'lucide-react';
import { Link } from 'react-router-dom';

const PricingSection = () => {
  return (
    <section id="pricing" className="py-20 px-4 sm:px-6 lg:px-8 max-w-2xl mx-auto">
      <div className="text-center mb-8">
        <h2 className="text-4xl font-bold text-text-primary mb-4">
          An affordable path to a better you
        </h2>
        <p className="text-text-secondary text-lg max-w-2xl mx-auto mb-8">
          Mendley is free to use. When you're ready to make the full commitment to your
          personal growth, Mendley Pro is the way to go.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-4">
        {/* Monthly Plan */}
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 text-center">
          <h3 className="text-lg font-semibold text-text-primary mb-2">Monthly</h3>
          <div className="text-2xl font-bold text-text-primary mb-4">
            $12.99<span className="text-sm font-normal text-text-secondary">/mo</span>
          </div>
          <Link
            to="/register"
            className="block w-full py-2 px-4 rounded-lg bg-white border-2 border-ocean hover:bg-ocean-light/50 text-text-primary font-medium transition text-sm"
          >
            Start Free Trial
          </Link>
        </div>

        {/* Annual Plan */}
        <div className="bg-white/95 backdrop-blur-sm rounded-lg p-6 text-center relative">
          <div className="absolute -top-2 right-2 bg-ocean-dark text-text-light px-2 py-0.5 rounded-full text-xs font-medium">
            SAVE 30%
          </div>
          <h3 className="text-lg font-semibold text-text-primary mb-2">Annual</h3>
          <div className="text-2xl font-bold text-text-primary mb-1">
            $8.99<span className="text-sm font-normal text-text-secondary">/mo</span>
          </div>
          <div className="text-xs text-text-muted mb-4">
            <span className="line-through">$155.99/yr</span>
            <span className="ml-2">$107.99/yr</span>
          </div>
          <Link
            to="/register"
            className="block w-full py-2 px-4 rounded-lg bg-ocean-dark hover:bg-ocean text-text-light font-medium transition text-sm"
          >
            Start Free Trial
          </Link>
        </div>
      </div>

      <div className="text-center mt-4">
        <span className="text-text-secondary text-xs inline-flex items-center">
          <Check className="w-3 h-3 mr-1" />
          Student and disability discounts available
        </span>
      </div>
    </section>
  );
};

export default PricingSection;