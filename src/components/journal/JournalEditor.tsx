import React, { useState, useRef, useEffect } from 'react';
import { Mic, Image, Send, Paperclip } from 'lucide-react';
import { useJournalStore } from '../../stores/journalStore';
import { format } from 'date-fns';

const moods = ['😊 Great', '😐 Okay', '😔 Not Great'];

interface JournalImage {
  src: string;
  timestamp: string;
}

interface JournalEditorProps {
  selectedEntryId: string | null;
}

const JournalEditor = ({ selectedEntryId }: JournalEditorProps) => {
  const { addEntry, updateEntry, getEntry } = useJournalStore();
  const selectedEntry = selectedEntryId ? getEntry(selectedEntryId) : null;

  const [mood, setMood] = useState(selectedEntry?.mood || moods[0]);
  const [content, setContent] = useState(selectedEntry?.content || '');
  const [images, setImages] = useState<JournalImage[]>(selectedEntry?.images || []);
  const fileInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (selectedEntry) {
      setMood(selectedEntry.mood);
      setContent(selectedEntry.content);
      setImages(selectedEntry.images || []);
    } else {
      setMood(moods[0]);
      setContent('');
      setImages([]);
    }
  }, [selectedEntry]);

  const handleSave = () => {
    const title = content.split('\n')[0] || 'Untitled Entry';
    const timestamp = Date.now();
    
    if (selectedEntryId) {
      updateEntry(selectedEntryId, {
        title,
        content,
        mood,
        images,
        timestamp
      });
    } else {
      addEntry({
        id: crypto.randomUUID(),
        title,
        content,
        mood,
        images,
        timestamp,
        lastModified: timestamp
      });
    }
  };

  const handleImageUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (!files) return;

    Array.from(files).forEach(file => {
      const reader = new FileReader();
      reader.onloadend = () => {
        setImages(prev => [...prev, {
          src: reader.result as string,
          timestamp: new Date().toISOString()
        }]);
      };
      reader.readAsDataURL(file);
    });

    event.target.value = '';
  };

  const removeImage = (index: number) => {
    setImages(prev => prev.filter((_, i) => i !== index));
  };

  const handleVoiceClick = () => {
    console.log('Voice recording clicked');
  };

  return (
    <div className="space-y-6">
      <div>
        <label className="block text-gray-700 mb-2">How are you feeling today?</label>
        <div className="flex gap-4">
          {moods.map((m) => (
            <button
              key={m}
              onClick={() => setMood(m)}
              className={`
                px-4 py-2 rounded-lg border-2 transition
                ${mood === m 
                  ? 'border-ocean-dark bg-ocean-light/50' 
                  : 'border-ocean hover:bg-ocean-light/50'
                }
                text-gray-700
              `}
            >
              {m}
            </button>
          ))}
        </div>
      </div>

      {images.length > 0 && (
        <div className="grid grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative group">
              <div className="absolute -top-3 -left-3 z-10">
                <Paperclip className="w-6 h-6 text-gray-600 transform rotate-45" />
              </div>
              <div className="relative rounded-lg overflow-hidden border border-gray-200">
                <img 
                  src={image.src} 
                  alt={`Journal image ${index + 1}`} 
                  className="w-full h-48 object-cover"
                />
                <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white text-xs p-2">
                  {format(new Date(image.timestamp), 'h:mm a')}
                </div>
                <button
                  onClick={() => removeImage(index)}
                  className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition"
                >
                  ×
                </button>
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="relative">
        <label className="block text-gray-700 mb-2">What's on your mind?</label>
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          className="w-full h-[calc(100vh-600px)] p-4 rounded-xl border border-gray-200 focus:border-ocean focus:ring-1 focus:ring-ocean resize-none"
          placeholder="Write your thoughts here..."
        />
        
        <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between bg-white/80 backdrop-blur-sm rounded-lg p-2">
          <div className="flex items-center gap-4">
            <button
              onClick={handleVoiceClick}
              className="p-2 rounded-full hover:bg-ocean-light/50 transition"
              title="Voice recording"
            >
              <Mic className="w-5 h-5 text-ocean-dark" />
            </button>
            
            <label className="p-2 rounded-full hover:bg-ocean-light/50 transition cursor-pointer">
              <Image className="w-5 h-5 text-ocean-dark" />
              <input
                ref={fileInputRef}
                type="file"
                accept="image/jpeg,image/png,image/heic"
                multiple
                className="hidden"
                onChange={handleImageUpload}
              />
            </label>
          </div>

          <button
            onClick={handleSave}
            className="bg-ocean-dark text-white px-4 py-2 rounded-lg hover:bg-ocean transition flex items-center gap-2"
          >
            <Send className="w-4 h-4" />
            {selectedEntryId ? 'Update' : 'Save'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default JournalEditor;