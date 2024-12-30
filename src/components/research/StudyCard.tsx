import React from 'react';
import { ExternalLink } from 'lucide-react';

interface StudyCardProps {
  journal: string;
  title: string;
  authors: string;
  year: number;
  doi: string;
  quote: string;
}

const StudyCard = ({ journal, title, authors, year, doi, quote }: StudyCardProps) => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition">
      <div className="flex justify-between items-start mb-4">
        <div>
          <span className="text-sm font-semibold text-ocean">{journal}</span>
          <h3 className="text-lg font-semibold text-text-primary mt-1">{title}</h3>
        </div>
        <a 
          href={`https://doi.org/${doi}`}
          target="_blank"
          rel="noopener noreferrer"
          className="text-ocean-dark hover:text-ocean transition"
        >
          <ExternalLink className="w-5 h-5" />
        </a>
      </div>
      
      <p className="text-text-secondary mb-4 italic">"{quote}"</p>
      
      <div className="text-sm text-text-muted">
        {authors} ({year})
      </div>
    </div>
  );
};

export default StudyCard;