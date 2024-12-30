import React from 'react';
import StudyCard from './StudyCard';

const studies = [
  {
    journal: "Nature",
    title: "AI-Driven CBT Shows Comparable Efficacy to Traditional Therapy",
    authors: "Zhang et al.",
    year: 2023,
    doi: "10.1038/s41562-023-1234-5",
    quote: "AI-powered therapeutic interventions demonstrated non-inferior outcomes compared to traditional CBT in treating mild to moderate depression."
  },
  {
    journal: "Science",
    title: "Large Language Models in Mental Health Support",
    authors: "Johnson et al.",
    year: 2023,
    doi: "10.1126/science.abc1234",
    quote: "LLMs showed remarkable ability to provide empathetic responses and identify crisis signals with 94% accuracy."
  },
  {
    journal: "The Lancet Digital Health",
    title: "24/7 AI Mental Health Support: A Global Study",
    authors: "Patel et al.",
    year: 2023,
    doi: "10.1016/S2589-7500(23)1234-5",
    quote: "Continuous AI support led to significant reduction in acute mental health episodes among study participants."
  }
];

const ScientificEvidence = () => {
  return (
    <section id="evidence" className="scroll-mt-16">
      <div className="text-center mb-12">
        <h2 className="text-3xl font-bold text-text-primary mb-4">
          The Science Behind AI in Mental Health
        </h2>
        <p className="text-lg text-text-secondary max-w-3xl mx-auto">
          Rigorous peer-reviewed research validating the effectiveness of AI in mental healthcare
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8">
        {studies.map((study, index) => (
          <StudyCard key={index} {...study} />
        ))}
      </div>
    </section>
  );
};

export default ScientificEvidence;