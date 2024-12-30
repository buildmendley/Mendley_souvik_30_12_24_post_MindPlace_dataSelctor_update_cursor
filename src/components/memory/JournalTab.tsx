import React from 'react';
import { Book } from 'lucide-react';
import { useJournalStore } from '../../stores/journalStore';
import { format } from 'date-fns';

const JournalTab = () => {
  const entries = useJournalStore(state => state.entries);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <div className="bg-ocean-dark p-3 rounded-xl">
          <Book className="w-8 h-8 text-white" />
        </div>
        <div>
          <h2 className="text-2xl font-bold text-gray-900">Journal Entries</h2>
          <p className="text-gray-600">Your personal reflections and thoughts</p>
        </div>
      </div>

      {/* Entries List */}
      <div className="space-y-4">
        {entries.map((entry) => (
          <div 
            key={entry.id}
            className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg hover:shadow-xl transition"
          >
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-3">
                <span className="text-2xl">{entry.mood}</span>
                <div>
                  <h3 className="font-semibold text-gray-900">{entry.title}</h3>
                  <p className="text-sm text-gray-500">
                    {format(new Date(entry.timestamp), 'MMMM d, yyyy h:mm a')}
                  </p>
                </div>
              </div>
            </div>

            <p className="text-gray-700 mb-4 line-clamp-3">{entry.content}</p>

            {entry.images && entry.images.length > 0 && (
              <div className="grid grid-cols-4 gap-2">
                {entry.images.map((image, index) => (
                  <div key={index} className="relative aspect-square rounded-lg overflow-hidden">
                    <img 
                      src={image.src} 
                      alt={`Journal image ${index + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </div>
                ))}
              </div>
            )}
          </div>
        ))}

        {entries.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            <Book className="w-12 h-12 mx-auto mb-4 opacity-50" />
            <p>No journal entries yet</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default JournalTab;