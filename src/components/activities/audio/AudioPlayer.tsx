import React from 'react';
import { Play, Pause, Volume2, AlertCircle, Loader } from 'lucide-react';
import { useAudio } from './useAudio';
import AudioProgress from './AudioProgress';

interface AudioPlayerProps {
  src: string;
  title: string;
  artist?: string;
  duration?: string;
}

const AudioPlayer = ({ src, title, artist, duration }: AudioPlayerProps) => {
  const { 
    playing, 
    toggle, 
    setVolume, 
    error, 
    loading,
    currentTime,
    duration: audioDuration,
    seek
  } = useAudio(src);

  const handleVolumeChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setVolume(parseFloat(e.target.value));
  };

  if (error) {
    return (
      <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
        <div className="flex items-center gap-3 text-red-500">
          <AlertCircle className="w-5 h-5" />
          <p>Unable to load audio track. Please try again later.</p>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <div className="mb-4">
        <h4 className="text-lg font-semibold text-text-primary">{title}</h4>
        {artist && <p className="text-text-secondary text-sm">{artist}</p>}
      </div>

      <div className="space-y-4">
        <AudioProgress 
          currentTime={currentTime}
          duration={audioDuration}
          onSeek={seek}
        />

        <div className="flex items-center justify-between">
          <button
            onClick={toggle}
            disabled={loading}
            className="w-12 h-12 bg-ocean-dark text-white rounded-full flex items-center justify-center hover:bg-ocean transition disabled:opacity-50"
          >
            {loading ? (
              <Loader className="w-6 h-6 animate-spin" />
            ) : playing ? (
              <Pause className="w-6 h-6" />
            ) : (
              <Play className="w-6 h-6" />
            )}
          </button>

          <div className="flex items-center gap-2">
            <Volume2 className="w-5 h-5 text-ocean-dark" />
            <input
              type="range"
              min="0"
              max="1"
              step="0.1"
              defaultValue={0.7}
              onChange={handleVolumeChange}
              className="w-24"
              disabled={loading}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default AudioPlayer;