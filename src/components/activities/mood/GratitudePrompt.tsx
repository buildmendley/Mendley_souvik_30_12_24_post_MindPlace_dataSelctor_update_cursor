import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface GratitudePromptProps {
  prompt: string;
  onSubmit: (response: string) => void;
}

const GratitudePrompt = ({ prompt, onSubmit }: GratitudePromptProps) => {
  const [response, setResponse] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (response.trim()) {
      onSubmit(response);
      setResponse('');
    }
  };

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg">
      <h3 className="text-xl font-semibold text-text-primary mb-4">{prompt}</h3>
      
      <form onSubmit={handleSubmit} className="space-y-4">
        <textarea
          value={response}
          onChange={(e) => setResponse(e.target.value)}
          placeholder="Write your thoughts here..."
          className="w-full h-32 p-4 rounded-lg border border-ocean-light focus:border-ocean-dark focus:ring-1 focus:ring-ocean-dark resize-none"
        />
        
        <button
          type="submit"
          className="flex items-center gap-2 bg-ocean-dark text-white px-6 py-3 rounded-lg hover:bg-ocean transition"
        >
          <Send className="w-4 h-4" />
          Save Response
        </button>
      </form>
    </div>
  );
};

export default GratitudePrompt;