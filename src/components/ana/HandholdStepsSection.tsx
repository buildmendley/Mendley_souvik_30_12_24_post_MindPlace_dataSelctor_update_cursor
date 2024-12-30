import React from 'react';
import EmotionCard from './EmotionCard';
import { Brain, Cloud, Battery, Flame, Zap } from 'lucide-react';
import SelfDoubtModal from '../modals/SelfDoubtModal';
import { useSelfDoubtModal } from '../../hooks/useSelfDoubtModal';

const emotions = [
  {
    id: 'self-doubt',
    title: 'Self Doubt',
    description: 'Transform doubt into self-belief',
    icon: Brain,
    gradient: 'from-violet-400 to-purple-600',
    bgGradient: 'from-violet-50/90 to-purple-100/90'
  },
  {
    id: 'worry',
    title: 'Worry',
    description: 'Find peace in uncertain times',
    icon: Cloud,
    gradient: 'from-sky-400 to-blue-600',
    bgGradient: 'from-sky-50/90 to-blue-100/90'
  },
  {
    id: 'confidence',
    title: 'Low Confidence',
    description: 'Build lasting self-confidence',
    icon: Battery,
    gradient: 'from-emerald-400 to-teal-600',
    bgGradient: 'from-emerald-50/90 to-teal-100/90'
  },
  {
    id: 'burnout',
    title: 'Burn Out',
    description: 'Restore your energy and balance',
    icon: Flame,
    gradient: 'from-amber-400 to-orange-600',
    bgGradient: 'from-amber-50/90 to-orange-100/90'
  },
  {
    id: 'anger',
    title: 'Anger',
    description: 'Channel emotions positively',
    icon: Zap,
    gradient: 'from-rose-400 to-red-600',
    bgGradient: 'from-rose-50/90 to-red-100/90'
  }
];

const HandholdStepsSection = () => {
  const { isOpen, openModal, closeModal } = useSelfDoubtModal();

  const handleEmotionClick = (id: string) => {
    if (id === 'self-doubt') {
      openModal();
    }
  };

  return (
    <section>
      <h2 className="text-3xl font-bold text-white mb-8">Hand Hold Steps</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {emotions.map((emotion) => (
          <div key={emotion.id} onClick={() => handleEmotionClick(emotion.id)}>
            <EmotionCard {...emotion} />
          </div>
        ))}
      </div>

      <SelfDoubtModal isOpen={isOpen} onClose={closeModal} />
    </section>
  );
};

export default HandholdStepsSection;