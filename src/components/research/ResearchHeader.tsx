import React from 'react';
import { Brain, Award, BookOpen } from 'lucide-react';
import { motion } from 'framer-motion';

const ResearchHeader = () => {
  return (
    <div className="relative overflow-hidden bg-gradient-to-br from-ocean-light/50 via-ocean/50 to-ocean-dark/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl"
        >
          <h1 className="text-5xl font-bold mb-6 text-text-primary">
            The Science Behind Mendley
          </h1>
          <p className="text-xl text-text-secondary mb-8">
            Mendley integrates modern AI with proven therapeutic modalities and evidence-based practices to expedite personal transformation.
          </p>

          <div className="flex flex-wrap gap-4">
            {[
              { icon: Brain, text: "Research-Backed AI" },
              { icon: Award, text: "Clinically Validated" },
              { icon: BookOpen, text: "Peer-Reviewed Studies" }
            ].map((badge, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-4 py-2 rounded-full text-text-primary"
              >
                <badge.icon className="w-5 h-5" />
                <span className="text-sm font-medium">{badge.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ResearchHeader;