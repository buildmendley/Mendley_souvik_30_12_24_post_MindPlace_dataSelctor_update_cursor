import React from 'react';
import { ArrowDown } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const stats = [
  { condition: 'ADHD', improvement: '40%' },
  { condition: 'Grief', improvement: '52%' },
  { condition: 'Depression', improvement: '63%' },
  { condition: 'Anxiety', improvement: '62%' },
  { condition: 'Anger', improvement: '63%' }
];

const ImprovementStats = () => {
  const { ref, inView } = useInView({
    threshold: 0.2,
    triggerOnce: true
  });

  return (
    <div ref={ref} className="flex justify-center items-center gap-6 flex-wrap">
      {stats.map((stat, index) => (
        <div
          key={index}
          className={`
            w-48 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg 
            transform transition-all duration-500
            ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}
          `}
          style={{ transitionDelay: `${index * 100}ms` }}
        >
          <h4 className="text-text-primary font-semibold text-xl mb-4">
            {stat.condition}
          </h4>
          <ArrowDown className="w-8 h-8 text-ocean-dark mb-3" />
          <p className="text-ocean-dark font-bold">
            {stat.improvement} report improvement
          </p>
        </div>
      ))}
    </div>
  );
};

export default ImprovementStats;