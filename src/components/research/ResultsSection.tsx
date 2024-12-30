import React from 'react';
import { motion } from 'framer-motion';

const results = [
  { condition: 'Depression symptoms', improvement: 63 },
  { condition: 'Anxiety symptoms', improvement: 62 },
  { condition: 'Anger symptoms', improvement: 63 },
  { condition: 'Grief symptoms', improvement: 52 },
  { condition: 'ADHD symptoms', improvement: 40 }
];

const testimonials = [
  {
    quote: "I live with anxiety and depression. This app has helped me tremendously. Like others have said, it is often my go-to when I start to feel anxious.",
    author: "Jakala G"
  },
  {
    quote: "Mendley has improved everything in my life. My depression is getting better and I'm becoming more tolerant to handling relationships and situations that are challenging.",
    author: "Seth H"
  }
];

const ResultsSection = () => {
  return (
    <section className="py-16 bg-gradient-to-br from-ocean-light/10 via-transparent to-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl font-bold text-text-primary mb-4">
            Promising results
          </h2>
          <p className="text-lg text-text-secondary">
            We surveyed users who self-identified various mental health symptoms after 7 days on the platform.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          <div className="space-y-4">
            {results.map((result, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="bg-white/80 rounded-lg p-4"
              >
                <div className="flex justify-between items-center">
                  <span className="text-text-secondary">{result.condition}</span>
                  <span className="font-medium text-ocean-dark">
                    {result.improvement}% report improvement
                  </span>
                </div>
                <div className="mt-2 h-2 bg-ocean-light/30 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${result.improvement}%` }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8, delay: index * 0.1 }}
                    className="h-full bg-ocean-dark rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>

          <div className="space-y-6">
            {testimonials.map((testimonial, index) => (
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.5 + index * 0.2 }}
                className="bg-white/80 rounded-lg p-6"
              >
                <p className="text-text-secondary italic mb-4">"{testimonial.quote}"</p>
                <footer className="text-ocean-dark font-medium">— {testimonial.author}</footer>
              </motion.blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResultsSection;