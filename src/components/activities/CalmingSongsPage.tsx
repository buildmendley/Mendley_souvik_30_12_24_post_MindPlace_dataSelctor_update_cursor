import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Music, ArrowLeft } from 'lucide-react';
import AudioPlayer from './audio/AudioPlayer';
import { audioTracks } from './audio/audioTracks';

const CalmingSongsPage: React.FC = () => {
  const [selectedTrack, setSelectedTrack] = useState(0);

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark p-8">
      <div className="max-w-4xl mx-auto">
        <Link to="/dashboard" className="inline-flex items-center text-text-light mb-8 hover:opacity-80 transition">
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Dashboard
        </Link>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          <div className="flex items-center gap-4 mb-8">
            <div className="bg-ocean-dark p-3 rounded-xl">
              <Music className="w-8 h-8 text-text-light" />
            </div>
            <div>
              <h1 className="text-3xl font-bold text-text-primary">Calming Songs</h1>
              <p className="text-text-secondary">Curated peaceful melodies</p>
            </div>
          </div>

          <div className="space-y-6">
            {audioTracks.map((track, index) => (
              <div 
                key={index} 
                className={`${selectedTrack === index ? 'ring-2 ring-ocean-dark rounded-xl' : ''}`}
                onClick={() => setSelectedTrack(index)}
              >
                <AudioPlayer {...track} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default CalmingSongsPage;