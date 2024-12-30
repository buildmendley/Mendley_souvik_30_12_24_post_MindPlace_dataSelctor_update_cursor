import React from 'react';
import { CheckCircle } from 'lucide-react';

const metrics = [
  { label: 'User Satisfaction', traditional: 85, ai: 88 },
  { label: 'Treatment Adherence', traditional: 70, ai: 82 },
  { label: 'Symptom Improvement', traditional: 75, ai: 77 },
  { label: 'Cost Effectiveness', traditional: 65, ai: 92 },
  { label: 'Accessibility', traditional: 60, ai: 95 }
];

const ClinicalValidation = () => {
  return (
    <section id="validation" className="scroll-mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          Evidence-Based Outcomes
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Clinical trials and real-world data validating the effectiveness of AI-assisted mental health support
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-8">
        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-text-primary mb-6">
            Comparative Analysis
          </h3>
          
          <div className="space-y-4">
            {metrics.map((metric, index) => (
              <div key={index}>
                <div className="flex justify-between text-sm text-text-secondary mb-1">
                  <span>{metric.label}</span>
                  <div className="flex gap-4">
                    <span>Traditional: {metric.traditional}%</span>
                    <span className="text-ocean-dark">AI: {metric.ai}%</span>
                  </div>
                </div>
                <div className="h-2 bg-ocean-light/30 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-ocean-dark rounded-full"
                    style={{ width: `${metric.ai}%` }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
          <h3 className="text-xl font-semibold text-text-primary mb-6">
            Key Findings
          </h3>
          
          <div className="space-y-4">
            {[
              "24/7 availability increases engagement by 215%",
              "88% of users report improved coping strategies",
              "Reduced therapy costs by up to 75%",
              "Immediate support in 98% of crisis situations",
              "Consistent quality across all interactions"
            ].map((finding, index) => (
              <div key={index} className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-ocean-dark flex-shrink-0 mt-0.5" />
                <span className="text-text-secondary">{finding}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ClinicalValidation;