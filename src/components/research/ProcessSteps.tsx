import React from 'react';
import { motion } from 'framer-motion';

const steps = [
  {
    number: 1,
    title: 'Develop',
    description: 'We collaborate with mental health experts to translate their modality into an AI-powered module.'
  },
  {
    number: 2,
    title: 'Implement',
    description: 'Our team builds the technology and integrates it into the Mendley platform.'
  },
  {
    number: 3,
    title: 'Evaluate',
    description: 'We evaluate the results with our partners to continue to refine the efficacy.'
  }
];

const experts = [
  {
    name: 'Dr. Christine Cielo',
    specialty: 'Acceptance & Commitment',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'David Coates',
    specialty: 'Internal Family System',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80'
  },
  {
    name: 'Micha Tomoff',
    specialty: 'Positive Psychology',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80'
  }
];

const ProcessSteps = () => {
  return (
    <div className="space-y-16">
      <div className="grid gap-8 md:grid-cols-3">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
          >
            <div className="bg-ocean-light/30 w-12 h-12 rounded-full flex items-center justify-center mb-4">
              <span className="text-ocean-dark font-bold">{step.number}</span>
            </div>
            <h3 className="text-xl font-semibold text-text-primary mb-2">{step.title}</h3>
            <p className="text-text-secondary">{step.description}</p>
          </motion.div>
        ))}
      </div>

      <div className="grid gap-8 md:grid-cols-3">
        {experts.map((expert, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.2 }}
            className="text-center"
          >
            <div className="w-32 h-32 mx-auto mb-4 rounded-full overflow-hidden">
              <img
                src={expert.image}
                alt={expert.name}
                className="w-full h-full object-cover"
              />
            </div>
            <h4 className="font-semibold text-text-primary">{expert.specialty}</h4>
            <p className="text-text-secondary">{expert.name}</p>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default ProcessSteps;