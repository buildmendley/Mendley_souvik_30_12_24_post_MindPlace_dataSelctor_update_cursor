import React from 'react';
import { Users } from 'lucide-react';
import { motion } from 'framer-motion';

const groups = [
  {
    name: "Anxiety Support",
    members: 1250,
    image: "https://images.unsplash.com/photo-1516302752625-fcc3c50ae61f?w=150&h=150&fit=crop"
  },
  {
    name: "Mindfulness Practice",
    members: 890,
    image: "https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=150&h=150&fit=crop"
  },
  {
    name: "Stress Management",
    members: 765,
    image: "https://images.unsplash.com/photo-1506126969912-22e45a376c3e?w=150&h=150&fit=crop"
  }
];

const CommunityGroups = () => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-text-primary mb-4">Popular Groups</h2>
      
      <div className="space-y-4">
        {groups.map((group, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-center gap-4"
          >
            <img
              src={group.image}
              alt={group.name}
              className="w-12 h-12 rounded-lg object-cover"
            />
            
            <div className="flex-grow">
              <h3 className="font-medium text-text-primary">{group.name}</h3>
              <div className="flex items-center gap-1 text-sm text-text-secondary">
                <Users className="w-4 h-4" />
                <span>{group.members.toLocaleString()} members</span>
              </div>
            </div>

            <button className="px-4 py-2 bg-ocean-light/30 text-ocean-dark rounded-lg hover:bg-ocean-light transition text-sm">
              Join
            </button>
          </motion.div>
        ))}
      </div>

      <button className="w-full mt-4 bg-ocean-dark text-white py-2 rounded-lg hover:bg-ocean transition">
        Explore All Groups
      </button>
    </div>
  );
};

export default CommunityGroups;