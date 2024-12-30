import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import JournalPaper from '../components/journal/entry/JournalPaper';
import BottomNav from '../components/journal/entry/BottomNav';
import JournalImage from '../components/journal/entry/JournalImage';
import { useJournalEntryStore } from '../stores/journalEntryStore';

const JournalEntryPage = () => {
  const navigate = useNavigate();
  const [content, setContent] = useState('');
  const [images, setImages] = useState<{ src: string; timestamp: Date; }[]>([]);
  const addEntry = useJournalEntryStore((state) => state.addEntry);

  const handleImageUpload = (files: FileList) => {
    Array.from(files).forEach((file) => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages((prev) => [
          ...prev,
          { src: reader.result as string, timestamp: new Date() }
        ]);
      };
      reader.readAsDataURL(file);
    });
  };

  const handleSave = () => {
    addEntry({ content, images });
    navigate('/journal');
  };

  const handleVoiceRecord = () => {
    // Voice recording functionality would go here
    console.log('Voice recording not implemented');
  };

  const removeImage = (index: number) => {
    setImages((prev) => prev.filter((_, i) => i !== index));
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark p-6 pb-24">
      <div className="max-w-4xl mx-auto space-y-6">
        <JournalPaper 
          content={content} 
          onChange={setContent} 
        />

        {images.length > 0 && (
          <div className="grid grid-cols-3 gap-4">
            {images.map((image, index) => (
              <JournalImage
                key={index}
                src={image.src}
                timestamp={image.timestamp}
                onRemove={() => removeImage(index)}
              />
            ))}
          </div>
        )}
      </div>

      <BottomNav
        onImageUpload={handleImageUpload}
        onSave={handleSave}
        onVoiceRecord={handleVoiceRecord}
      />
    </div>
  );
};

export default JournalEntryPage;