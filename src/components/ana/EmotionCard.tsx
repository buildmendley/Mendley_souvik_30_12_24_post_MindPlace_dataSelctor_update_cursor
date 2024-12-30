import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface EmotionCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  bgGradient: string;
}

const EmotionCard = ({ title, description, icon: Icon, gradient, bgGradient }: EmotionCardProps) => {
  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className={`
        bg-gradient-to-br ${bgGradient}
        rounded-2xl p-6 backdrop-blur-sm
        border border-white/20 shadow-lg
        hover:shadow-xl transition-all duration-300
        cursor-pointer
      `}
    >
      <div className={`
        bg-gradient-to-br ${gradient}
        w-12 h-12 rounded-xl
        flex items-center justify-center mb-4
        shadow-lg
      `}>
        <Icon className="w-6 h-6 text-white" />
      </div>

      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-sm opacity-90">{description}</p>
    </motion.div>
  );
};

export default EmotionCard;