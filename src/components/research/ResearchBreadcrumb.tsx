import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const ResearchBreadcrumb = () => {
  return (
    <div className="bg-white/80 backdrop-blur-sm border-b border-ocean/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
        <div className="flex items-center space-x-2 text-text-secondary">
          <Link to="/" className="hover:text-ocean-dark transition flex items-center">
            <Home className="w-4 h-4 mr-1" />
            Home
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-ocean-dark">Science</span>
        </div>
      </div>
    </div>
  );
};

export default ResearchBreadcrumb;