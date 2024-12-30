import React from 'react';
import { MessageCircle, AtSign, Book } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const features = [
  {
    icon: MessageCircle,
    title: "Ana",
    description: "Your AI companion for emotional support and guidance",
    gradient: "from-rose-400 to-pink-600",
    bgGradient: "from-rose-50/70 to-pink-100/70",
    hoverGradient: "from-rose-100/90 to-pink-200/90",
    textColor: "text-rose-900",
    textColorSecondary: "text-rose-800",
    delay: 0,
    path: "/ana"
  },
  {
    icon: AtSign,
    title: "Mind Palace",
    description: "Your personal sanctuary for mindfulness and reflection",
    gradient: "from-violet-400 to-purple-600",
    bgGradient: "from-violet-50/70 to-purple-100/70",
    hoverGradient: "from-violet-100/90 to-purple-200/90",
    textColor: "text-violet-900",
    textColorSecondary: "text-violet-800",
    delay: 0.1,
    path: "/mind-palace"
  },
  {
    icon: Book,
    title: "Journal",
    description: "AI-powered journaling for emotional growth",
    gradient: "from-teal-400 to-emerald-600",
    bgGradient: "from-teal-50/70 to-emerald-100/70",
    hoverGradient: "from-teal-100/90 to-emerald-200/90",
    textColor: "text-teal-900",
    textColorSecondary: "text-teal-800",
    delay: 0.2,
    path: "/journal"
  }
];

const HeroFeatures = () => {
  return (
    <div className="py-12">
      <div className="grid grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <Link key={index} to={feature.path}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ 
                scale: 1.03,
                transition: { duration: 0.2 }
              }}
              transition={{ duration: 0.5, delay: feature.delay }}
              className={`
                group cursor-pointer
                bg-gradient-to-br ${feature.bgGradient}
                hover:bg-gradient-to-br hover:${feature.hoverGradient}
                backdrop-blur-sm rounded-2xl p-8 
                border border-white/20
                shadow-lg hover:shadow-xl
                transition-all duration-300
              `}
            >
              <div className={`
                bg-gradient-to-br ${feature.gradient}
                w-12 h-12 rounded-xl 
                flex items-center justify-center mb-6 
                shadow-md group-hover:scale-110 
                transition-transform duration-300
              `}>
                <feature.icon className="w-6 h-6 text-white" />
              </div>
              
              <h2 className={`
                text-xl font-semibold mb-3 
                ${feature.textColor}
                group-hover:translate-y-[-2px]
                transition-transform duration-300
              `}>
                {feature.title}
              </h2>
              
              <p className={`
                ${feature.textColorSecondary}
                group-hover:translate-y-[-2px]
                transition-transform duration-300
              `}>
                {feature.description}
              </p>
            </motion.div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default HeroFeatures;