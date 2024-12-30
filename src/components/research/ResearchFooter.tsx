import React from 'react';
import { Mail } from 'lucide-react';

const ResearchFooter = () => {
  return (
    <footer className="bg-[#2A4365] text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <h4 className="text-lg font-semibold mb-4">Research Partners</h4>
            <div className="space-y-2">
              {['MIT Media Lab', 'Stanford AI Lab', 'Harvard Medical School'].map((partner) => (
                <div key={partner} className="text-blue-200">{partner}</div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Scientific Advisory Board</h4>
            <div className="space-y-2">
              {[
                'Dr. Sarah Chen - AI Ethics',
                'Dr. Michael Torres - Clinical Psychology',
                'Dr. Emma Wilson - Neuroscience'
              ].map((member) => (
                <div key={member} className="text-blue-200">{member}</div>
              ))}
            </div>
          </div>

          <div>
            <h4 className="text-lg font-semibold mb-4">Stay Updated</h4>
            <p className="text-blue-200 mb-4">
              Subscribe to receive the latest research updates
            </p>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder="Enter your email"
                className="px-4 py-2 rounded-lg bg-white/10 text-white placeholder:text-blue-200 flex-grow"
              />
              <button className="bg-[#48BB78] text-white px-4 py-2 rounded-lg hover:bg-[#38A169] transition">
                <Mail className="w-5 h-5" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ResearchFooter;