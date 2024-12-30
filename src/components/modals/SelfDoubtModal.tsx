import React from 'react';
import { useNavigate } from 'react-router-dom';
import { X, Brain, Users, Crosshair, Heart, HelpCircle } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface SelfDoubtModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const doubtOptions = [
  {
    id: 'performance',
    title: 'Performance-Based Self-Doubt',
    description: 'Feeling unsure about your abilities or achievements',
    icon: Brain,
    mode: 'Performance-Based Self-Doubt',
    color: 'from-purple-400 to-purple-600',
    bgColor: 'bg-purple-50/50'
  },
  {
    id: 'social',
    title: 'Social Self-Doubt',
    description: 'Uncertainty in social situations or relationships',
    icon: Users,
    mode: 'Social Self-Doubt',
    color: 'from-blue-400 to-blue-600',
    bgColor: 'bg-blue-50/50'
  },
  {
    id: 'decision',
    title: 'Decision-Related Self-Doubt',
    description: 'Struggling with making choices or decisions',
    icon: Crosshair,
    mode: 'Decision-Related Self-Doubt',
    color: 'from-emerald-400 to-emerald-600',
    bgColor: 'bg-emerald-50/50'
  },
  {
    id: 'emotional',
    title: 'Emotional Self-Doubt',
    description: 'Questioning your feelings or emotional responses',
    icon: Heart,
    mode: 'Emotional Self-Doubt',
    color: 'from-rose-400 to-rose-600',
    bgColor: 'bg-rose-50/50'
  },
  {
    id: 'other',
    title: 'Something Else',
    description: 'Other forms of self-doubt or uncertainty',
    icon: HelpCircle,
    mode: 'Something Else Self-Doubt',
    color: 'from-amber-400 to-amber-600',
    bgColor: 'bg-amber-50/50'
  }
];

const SelfDoubtModal = ({ isOpen, onClose }: SelfDoubtModalProps) => {
  const navigate = useNavigate();

  const handleOptionClick = (mode: string) => {
    onClose();
    navigate('/guide_mchat', { state: { mode } });
  };

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
            className="bg-white rounded-2xl shadow-xl max-w-2xl w-full max-h-[90vh] overflow-hidden"
          >
            {/* Header */}
            <div className="p-6 border-b border-gray-100">
              <div className="flex items-center justify-between">
                <div>
                  <h2 className="text-2xl font-bold text-gray-900">Types of Self-Doubt</h2>
                  <p className="text-gray-600 mt-1">Understanding different forms of doubt</p>
                </div>
                <button
                  onClick={onClose}
                  className="text-gray-400 hover:text-gray-500 transition"
                >
                  <X className="w-6 h-6" />
                </button>
              </div>
            </div>

            {/* Options Grid */}
            <div className="p-6 overflow-y-auto max-h-[70vh]">
              <div className="grid gap-4">
                {doubtOptions.map((option) => (
                  <button
                    key={option.id}
                    onClick={() => handleOptionClick(option.mode)}
                    className={`w-full p-6 rounded-xl border border-gray-100 ${option.bgColor} hover:scale-[1.02] transition-transform text-left`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`p-3 rounded-lg bg-gradient-to-br ${option.color}`}>
                        <option.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <h3 className="font-semibold text-gray-900 mb-1">{option.title}</h3>
                        <p className="text-gray-600 text-sm">{option.description}</p>
                      </div>
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SelfDoubtModal;