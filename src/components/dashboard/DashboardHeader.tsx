import React from 'react';
import { Bell, LogOut, Book, Compass } from 'lucide-react';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
  return (
    <header className="bg-ocean-dark/95 backdrop-blur-sm py-3 px-6">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link to="/" className="text-text-light text-2xl font-bold hover:opacity-90 transition">
          Mendley
        </Link>

        <nav className="absolute left-1/2 -translate-x-1/2">
          <div className="flex space-x-8">
            <Link to="/dashboard" className="text-text-light font-medium">Dashboard</Link>
            <Link to="/memories" className="text-text-light/80 hover:text-text-light transition flex items-center gap-1">
              <Book className="w-4 h-4" />
              Memories
            </Link>
            <Link to="/discover" className="text-text-light/80 hover:text-text-light transition flex items-center gap-1">
              <Compass className="w-4 h-4" />
              Discover
            </Link>
          </div>
        </nav>

        <div className="flex items-center space-x-4">
          <button className="text-text-light/80 hover:text-text-light transition">
            <Bell className="w-5 h-5" />
          </button>
          <Link to="/" className="text-text-light/80 hover:text-text-light transition">
            <LogOut className="w-5 h-5" />
          </Link>
        </div>
      </div>
    </header>
  );
};

export default DashboardHeader;