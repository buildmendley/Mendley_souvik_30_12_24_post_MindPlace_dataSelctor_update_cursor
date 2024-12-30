import React from 'react';
import { Sparkles, Star, DollarSign, Users, LogIn, BookOpen } from 'lucide-react';
import { Link } from 'react-router-dom';
import { scrollToElement } from '../utils/scroll';

interface NavLinkProps {
  text: string;
  icon: React.ReactNode;
  to?: string;
  onClick?: () => void;
}

const NavLink = ({ text, icon, to, onClick }: NavLinkProps) => {
  if (to) {
    return (
      <Link
        to={to}
        className="text-text-secondary hover:text-ocean-dark px-3 py-2 rounded-md text-sm font-medium transition flex items-center space-x-1"
      >
        {icon}
        <span>{text}</span>
      </Link>
    );
  }

  return (
    <button
      onClick={onClick}
      className="text-text-secondary hover:text-ocean-dark px-3 py-2 rounded-md text-sm font-medium transition flex items-center space-x-1"
    >
      {icon}
      <span>{text}</span>
    </button>
  );
};

const Navbar = () => {
  return (
    <nav className="bg-white/90 backdrop-blur-md border-b border-ocean/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="flex-shrink-0">
            <Link to="/" className="text-text-primary text-2xl font-bold">
              Mendley
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-8">
            <NavLink text="Features" icon={<Sparkles className="w-4 h-4" />} onClick={() => scrollToElement('features')} />
            <NavLink text="Reviews" icon={<Star className="w-4 h-4" />} onClick={() => scrollToElement('reviews')} />
            <NavLink text="Pricing" icon={<DollarSign className="w-4 h-4" />} onClick={() => scrollToElement('pricing')} />
            <NavLink text="Science" icon={<BookOpen className="w-4 h-4" />} to="/science" />
            <NavLink text="Community" icon={<Users className="w-4 h-4" />} to="/community" />
          </div>
          
          <div className="flex items-center space-x-4">
            <Link to="/login" className="text-text-secondary hover:text-ocean-dark transition flex items-center space-x-1">
              <LogIn className="w-4 h-4" />
              <span>Login</span>
            </Link>
            <Link to="/register" className="bg-ocean-dark text-text-light px-4 py-2 rounded-lg font-medium hover:bg-ocean transition">
              Start Free Trial
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;