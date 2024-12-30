import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Star, X } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

interface AchievementModalProps {
  isOpen: boolean;
  onClose: () => void;
  keyInsight: string;
}

const AchievementModal = ({ isOpen, onClose, keyInsight }: AchievementModalProps) => {
  const navigate = useNavigate();

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm p-4"
        >
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.9, opacity: 0 }}
            className="bg-white rounded-2xl shadow-xl max-w-lg w-full relative overflow-hidden"
          >
            {/* Sparkle Animation Background */}
            <div className="absolute inset-0 bg-gradient-to-br from-ocean-light/20 via-ocean/20 to-ocean-dark/20" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 transition-colors"
            >
              <X className="w-6 h-6" />
            </button>

            <div className="p-8 text-center relative z-10">
              {/* Star Animation */}
              <motion.div
                initial={{ rotate: -180, scale: 0 }}
                animate={{ rotate: 0, scale: 1 }}
                transition={{ type: "spring", duration: 1.5 }}
                className="w-20 h-20 mx-auto mb-6 text-yellow-400"
              >
                <Star className="w-full h-full fill-current" />
              </motion.div>

              <motion.h2
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.2 }}
                className="text-2xl font-bold text-gray-900 mb-4"
              >
                Session Complete!
              </motion.h2>

              <motion.div
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.4 }}
                className="bg-ocean-light/30 p-6 rounded-xl mb-6"
              >
                <p className="text-ocean-dark font-medium">Key Insight</p>
                <p className="text-gray-700 mt-2">{keyInsight}</p>
              </motion.div>

              <motion.button
                initial={{ y: 20, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.6 }}
                onClick={() => navigate('/ana')}
                className="bg-ocean-dark text-white px-8 py-3 rounded-xl hover:bg-ocean transition-colors"
              >
                Continue Your Journey
              </motion.button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default AchievementModal;