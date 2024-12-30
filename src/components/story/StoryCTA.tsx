import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const StoryCTA = () => {
  return (
    <div className="mt-16 text-center">
      <Link
        to="/register"
        className="inline-flex items-center gap-2 bg-ocean-dark text-text-light px-8 py-4 rounded-lg font-semibold hover:bg-ocean transition text-lg shadow-lg group"
      >
        Begin Your Story
        <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
      </Link>
    </div>
  );
};

export default StoryCTA;