import React from 'react';
import { ChevronLeft } from 'lucide-react';
import { Link, useLocation } from 'react-router-dom';

interface AuthLayoutProps {
  children: React.ReactNode;
  title: string;
}

const AuthLayout = ({ children, title }: AuthLayoutProps) => {
  const location = useLocation();
  
  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark">
      <div className="max-w-md mx-auto pt-12 px-4">
        <nav className="flex items-center mb-8">
          <Link 
            to="/" 
            className="text-text-light hover:text-white flex items-center gap-2 transition"
          >
            <ChevronLeft className="w-5 h-5" />
            Back to Home
          </Link>
          <div className="ml-auto text-text-light">
            {location.pathname === '/register' ? (
              <Link to="/login" className="hover:text-white transition">
                Sign In
              </Link>
            ) : (
              <Link to="/register" className="hover:text-white transition">
                Create Account
              </Link>
            )}
          </div>
        </nav>
        
        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-xl">
          <h1 className="text-2xl font-bold text-text-primary mb-6">{title}</h1>
          {children}
        </div>
      </div>
    </div>
  );
};

export default AuthLayout;