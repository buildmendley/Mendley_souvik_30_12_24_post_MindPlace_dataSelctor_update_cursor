import React from 'react';
import { Lightbulb, Sparkles, ListChecks } from 'lucide-react';
import { ChatAnalysis } from '../../../types/chat';

interface AnalysisSectionProps {
  analysis: ChatAnalysis;
}

const AnalysisSection = ({ analysis }: AnalysisSectionProps) => {
  return (
    <div className="space-y-6">
      {/* Headline */}
      <h2 className="text-2xl font-semibold text-gray-900">
        {analysis.headline}
      </h2>

      {/* Analysis */}
      <div className="bg-gray-50 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Lightbulb className="w-5 h-5 text-ocean-dark flex-shrink-0 mt-1" />
          <p className="text-gray-700 leading-relaxed">{analysis.analysis}</p>
        </div>
      </div>

      {/* Key Insight */}
      <div className="bg-ocean-dark/10 rounded-xl p-6">
        <div className="flex items-start gap-3">
          <Sparkles className="w-5 h-5 text-ocean-dark flex-shrink-0 mt-1" />
          <div>
            <h3 className="font-semibold text-gray-900 mb-2">Key Insight</h3>
            <p className="text-gray-700">{analysis.keyInsight}</p>
          </div>
        </div>
      </div>

      {/* Emotional Landscape */}
      <div>
        <h3 className="font-semibold text-gray-900 mb-3">Emotional Landscape</h3>
        <div className="flex flex-wrap gap-4">
          {analysis.emotions.map((emotion, index) => (
            <div
              key={index}
              className="flex items-center gap-2 bg-white rounded-full px-4 py-2 shadow-sm"
            >
              <span className="text-2xl">{emotion.emoji}</span>
              <span className="text-gray-700">{emotion.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* Suggestions */}
      <div>
        <div className="flex items-center gap-2 mb-3">
          <ListChecks className="w-5 h-5 text-ocean-dark" />
          <h3 className="font-semibold text-gray-900">Suggested Next Steps</h3>
        </div>
        <ul className="space-y-3">
          {analysis.suggestions.map((suggestion, index) => (
            <li
              key={index}
              className="flex items-center gap-3 text-gray-700"
            >
              <div className="w-2 h-2 bg-ocean-dark rounded-full" />
              {suggestion}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default AnalysisSection;