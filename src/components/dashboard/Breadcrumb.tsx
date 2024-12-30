import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Home } from 'lucide-react';

const Breadcrumb = () => {
  return (
    <div className="flex items-center space-x-2 text-text-secondary mb-6">
      <Link to="/" className="hover:text-ocean-dark transition flex items-center">
        <Home className="w-4 h-4 mr-1" />
        Home
      </Link>
      <ChevronRight className="w-4 h-4" />
      <span className="text-ocean-dark">Dashboard</span>
    </div>
  );
};

export default Breadcrumb;