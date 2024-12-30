import React from 'react';
import { MessageSquare, Brain, LineChart } from 'lucide-react';

const technologies = [
  {
    icon: MessageSquare,
    title: "Natural Language Processing",
    description: "Advanced NLP algorithms enable human-like conversations and emotional understanding",
    details: [
      "Sentiment analysis for emotion detection",
      "Context-aware responses",
      "Personalized communication style"
    ]
  },
  {
    icon: Brain,
    title: "Emotion Recognition",
    description: "AI-powered emotion detection and analysis for better support",
    details: [
      "Pattern recognition in text",
      "Emotional state tracking",
      "Crisis signal detection"
    ]
  },
  {
    icon: LineChart,
    title: "Predictive Analytics",
    description: "Data-driven insights for personalized mental health care",
    details: [
      "Behavioral pattern analysis",
      "Early warning system",
      "Treatment effectiveness tracking"
    ]
  }
];

const TechnologySection = () => {
  return (
    <section id="technology" className="scroll-mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          AI Technologies Advancing Mental Healthcare
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Cutting-edge AI technologies working together to provide comprehensive mental health support
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {technologies.map((tech, index) => (
          <div key={index} className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition">
            <div className="w-12 h-12 bg-ocean-dark rounded-lg flex items-center justify-center mb-4">
              <tech.icon className="w-6 h-6 text-text-light" />
            </div>
            
            <h3 className="text-xl font-semibold text-text-primary mb-2">
              {tech.title}
            </h3>
            
            <p className="text-text-secondary mb-4">
              {tech.description}
            </p>
            
            <ul className="space-y-2">
              {tech.details.map((detail, i) => (
                <li key={i} className="flex items-center text-sm text-text-secondary">
                  <div className="w-1.5 h-1.5 bg-ocean rounded-full mr-2" />
                  {detail}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default TechnologySection;