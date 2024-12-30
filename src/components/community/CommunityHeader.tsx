import React from 'react';
import { Users, Heart, MessageCircle } from 'lucide-react';
import { motion } from 'framer-motion';

const CommunityHeader = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-ocean-light/50 via-ocean/50 to-ocean-dark/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center"
        >
          <h1 className="text-4xl font-bold text-text-primary mb-4">
            Join Our Growing Community
          </h1>
          <p className="text-xl text-text-secondary mb-8 max-w-2xl mx-auto">
            Connect with others on their mental wellness journey, share experiences, and grow together.
          </p>

          <div className="flex justify-center gap-8">
            {[
              { icon: Users, label: '10K+ Members' },
              { icon: Heart, label: '500+ Success Stories' },
              { icon: MessageCircle, label: '1K+ Daily Conversations' }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-text-primary"
              >
                <stat.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{stat.label}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default CommunityHeader;