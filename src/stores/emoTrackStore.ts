import { create } from 'zustand';
import { persist } from 'zustand/middleware';

export interface Emotion {
  id: string;
  type: string;
  intensity: number;
  timestamp: Date;
}

interface EmoTrackState {
  emotions: Emotion[];
  addEmotion: (type: string, intensity: number) => void;
  getEmotionsInRange: (start: Date, end: Date) => Emotion[];
  getEmotionsForDate: (date: Date) => Emotion[];
}

export const useEmoTrackStore = create<EmoTrackState>()(
  persist(
    (set, get) => ({
      emotions: [],
      
      addEmotion: (type, intensity) => set(state => ({
        emotions: [
          ...state.emotions,
          {
            id: crypto.randomUUID(),
            type,
            intensity,
            timestamp: new Date()
          }
        ]
      })),

      getEmotionsInRange: (start, end) => {
        return get().emotions.filter(emotion => 
          emotion.timestamp >= start && emotion.timestamp <= end
        );
      },

      getEmotionsForDate: (date) => {
        const start = new Date(date);
        start.setHours(0, 0, 0, 0);
        const end = new Date(date);
        end.setHours(23, 59, 59, 999);
        
        return get().emotions.filter(emotion =>
          emotion.timestamp >= start && emotion.timestamp <= end
        );
      }
    }),
    {
      name: 'emotrack-storage'
    }
  )
);