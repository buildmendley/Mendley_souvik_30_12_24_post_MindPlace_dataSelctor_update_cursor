import React from 'react';
import { Mic, Image, Save } from 'lucide-react';
import ImageUpload from './ImageUpload';

interface BottomNavProps {
  onImageUpload: (files: FileList) => void;
  onSave: () => void;
  onVoiceRecord: () => void;
}

const BottomNav = ({ onImageUpload, onSave, onVoiceRecord }: BottomNavProps) => {
  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-gray-200 px-4 py-3">
      <div className="max-w-4xl mx-auto flex items-center justify-between">
        <button
          onClick={onVoiceRecord}
          className="p-2 rounded-full hover:bg-gray-100 transition"
          title="Voice recording"
        >
          <Mic className="w-6 h-6 text-gray-600" />
        </button>

        <ImageUpload onImageUpload={onImageUpload} />

        <button
          onClick={onSave}
          className="bg-ocean-dark text-white px-6 py-2 rounded-lg hover:bg-ocean transition"
        >
          <Save className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
};

export default BottomNav;