import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

const studies = [
  {
    id: 'anxiety',
    title: 'Reduced anxiety',
    content: 'Online Positive Affect Journaling was associated with decreased mental distress and increased well-being relative to baseline. PAJ was also associated with less depressive symptoms and anxiety after the first and second month, relative to usual care.',
    link: '#'
  },
  {
    id: 'depression',
    title: 'Reduced symptoms of depression',
    content: 'Studies show significant reduction in depressive symptoms through regular AI-assisted therapeutic interactions and journaling practices.',
    link: '#'
  },
  {
    id: 'memory',
    title: 'Increased working memory capacity',
    content: 'Research validates improvements in cognitive function and working memory through structured mindfulness and journaling exercises.',
    link: '#'
  }
];

const StudyAccordion = () => {
  const [openId, setOpenId] = useState('anxiety');

  return (
    <div className="space-y-4">
      {studies.map((study) => (
        <motion.div
          key={study.id}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-xl shadow-sm overflow-hidden"
        >
          <button
            onClick={() => setOpenId(openId === study.id ? '' : study.id)}
            className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-gray-50 transition"
          >
            <span className="font-medium text-text-primary">{study.title}</span>
            {openId === study.id ? (
              <ChevronUp className="w-5 h-5 text-ocean-dark" />
            ) : (
              <ChevronDown className="w-5 h-5 text-ocean-dark" />
            )}
          </button>

          <AnimatePresence>
            {openId === study.id && (
              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: 'auto', opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
              >
                <div className="px-6 pb-4">
                  <p className="text-text-secondary mb-4">{study.content}</p>
                  <a 
                    href={study.link}
                    className="text-ocean-dark hover:text-ocean transition-colors"
                  >
                    Read the study →
                  </a>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      ))}
    </div>
  );
};

export default StudyAccordion;