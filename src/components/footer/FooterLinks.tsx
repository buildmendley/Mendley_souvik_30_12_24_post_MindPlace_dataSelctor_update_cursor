import React from 'react';
import { Mail, Phone, MapPin } from 'lucide-react';

const FooterLinks = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 py-8">
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Contact Us</h3>
        <ul className="space-y-2">
          <li className="flex items-center gap-2 text-white/80">
            <Mail size={16} />
            <span>contact@mendley.com</span>
          </li>
          <li className="flex items-center gap-2 text-white/80">
            <Phone size={16} />
            <span>+1 (555) 123-4567</span>
          </li>
          <li className="flex items-center gap-2 text-white/80">
            <MapPin size={16} />
            <span>123 Wellness Street, CA 94105</span>
          </li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Quick Links</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-white/80 hover:text-white">About Us</a></li>
          <li><a href="#" className="text-white/80 hover:text-white">Our Services</a></li>
          <li><a href="#" className="text-white/80 hover:text-white">Blog</a></li>
          <li><a href="#" className="text-white/80 hover:text-white">FAQ</a></li>
        </ul>
      </div>
      
      <div>
        <h3 className="text-lg font-semibold mb-4 text-white">Legal</h3>
        <ul className="space-y-2">
          <li><a href="#" className="text-white/80 hover:text-white">Privacy Policy</a></li>
          <li><a href="#" className="text-white/80 hover:text-white">Terms of Service</a></li>
          <li><a href="#" className="text-white/80 hover:text-white">Cookie Policy</a></li>
        </ul>
      </div>
    </div>
  );
};

export default FooterLinks;