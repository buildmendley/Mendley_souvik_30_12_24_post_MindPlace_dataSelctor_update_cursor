import React from 'react';
import { Mail, Phone, Github, Twitter } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="relative bg-gradient-to-b from-ocean/90 to-ocean-dark/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold text-text-light mb-4">Contact</h3>
            <ul className="space-y-2">
              <li className="flex items-center gap-2 text-text-light/90">
                <Mail className="w-4 h-4" />
                <span>hello@mendley.com</span>
              </li>
              <li className="flex items-center gap-2 text-text-light/90">
                <Phone className="w-4 h-4" />
                <span>+1 (555) 123-4567</span>
              </li>
            </ul>
          </div>

          {/* Social Links */}
          <div className="flex items-center justify-center space-x-6">
            <a href="#" className="text-text-light/90 hover:text-text-light transition">
              <Github className="w-6 h-6" />
            </a>
            <a href="#" className="text-text-light/90 hover:text-text-light transition">
              <Twitter className="w-6 h-6" />
            </a>
          </div>

          {/* Legal Links */}
          <div className="text-right">
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-text-light/90 hover:text-text-light transition">
                  Privacy Policy
                </a>
              </li>
              <li>
                <a href="#" className="text-text-light/90 hover:text-text-light transition">
                  Terms of Service
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="mt-8 pt-8 border-t border-text-light/10 text-center text-text-light/80 text-sm">
          © {new Date().getFullYear()} Mendley. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;