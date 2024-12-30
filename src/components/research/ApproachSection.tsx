import React from 'react';
import { motion } from 'framer-motion';

const ApproachSection = () => {
  return (
    <section className="py-16 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-4xl font-bold text-text-primary mb-6">
              Mendley's approach
            </h2>
            <p className="text-lg text-text-secondary">
              Mendley facilitates the development of consistent self-reflection practices, combining the benefits of structured journaling and AI-assisted dialogue.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <img
              src="https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=800&q=80"
              alt="Person journaling"
              className="rounded-2xl shadow-lg"
            />
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-light/20 to-ocean-dark/20 rounded-2xl" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ApproachSection;