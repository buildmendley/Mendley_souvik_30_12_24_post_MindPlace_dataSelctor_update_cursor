import React from 'react';
import { Heart, Brain, MessageSquare, Lock, Target, LineChart } from 'lucide-react';
import FeatureCard from './FeatureCard';

const features = [
  {
    title: "AI-Powered Journaling",
    description: "Express yourself freely with our intelligent journaling companion that helps you process emotions and gain insights.",
    icon: Brain,
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    className: "col-span-1 row-span-2"
  },
  {
    title: "Emotional Support",
    description: "24/7 companion to help you navigate difficult emotions and celebrate victories.",
    icon: Heart,
    className: "col-span-1 row-span-1"
  },
  {
    title: "Guided Conversations",
    description: "Therapeutic dialogues that help you understand yourself better and develop coping strategies.",
    icon: MessageSquare,
    image: "https://images.unsplash.com/photo-1590650153855-d9e808231d41?auto=format&fit=crop&w=800&q=80",
    className: "col-span-1 row-span-2"
  },
  {
    title: "Progress Tracking",
    description: "Visual insights into your emotional journey with personalized analytics and mood patterns.",
    icon: LineChart,
    image: "https://images.unsplash.com/photo-1434494878577-86c23bcb06b9?auto=format&fit=crop&w=800&q=80",
    className: "col-span-1 row-span-2"
  },
  {
    title: "Private & Secure",
    description: "Bank-level encryption ensures your personal thoughts and feelings remain completely private.",
    icon: Lock,
    className: "col-span-1 row-span-1"
  },
  {
    title: "Personal Growth",
    description: "Set and achieve emotional wellness goals with structured guidance and support.",
    icon: Target,
    className: "col-span-1 row-span-1"
  }
];

const FeatureGrid = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min">
      {features.map((feature, index) => (
        <div key={index} className={feature.className}>
          <FeatureCard
            title={feature.title}
            description={feature.description}
            icon={feature.icon}
            image={feature.image}
          />
        </div>
      ))}
    </div>
  );
};

export default FeatureGrid;