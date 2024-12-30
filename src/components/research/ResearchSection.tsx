import React from 'react';
import { motion } from 'framer-motion';
import StudyAccordion from './StudyAccordion';
import ProcessSteps from './ProcessSteps';
import ResultsSection from './ResultsSection';
import ApproachSection from './ApproachSection';

const ResearchSection = () => {
  return (
    <div className="space-y-32">
      {/* AI Benefits Section */}
      <section className="py-16 bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              The positive effects of conversational AI are being studied now
            </h2>
            <p className="text-lg text-text-secondary">
              Recent research supports the effectiveness of conversational agents in mental health care.
            </p>
          </motion.div>

          <StudyAccordion />
        </div>
      </section>

      {/* Approach Section */}
      <ApproachSection />

      {/* Results Section */}
      <ResultsSection />

      {/* Process Section */}
      <section className="py-16 bg-white/95">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold text-text-primary mb-4">
              Our process
            </h2>
            <p className="text-lg text-text-secondary">
              Mendley collaborates with mental health professionals to integrate principles from evidence-based modalities
            </p>
          </motion.div>

          <ProcessSteps />
        </div>
      </section>
    </div>
  );
};

export default ResearchSection;