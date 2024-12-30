import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface JournalImage {
  src: string;
  timestamp: Date;
}

interface JournalEntry {
  id: string;
  title: string;
  content: string;
  mood: string;
  images: JournalImage[];
  timestamp: number;
  lastModified: number;
}

interface JournalState {
  entries: JournalEntry[];
  addEntry: (entry: JournalEntry) => void;
  updateEntry: (id: string, updates: Partial<JournalEntry>) => void;
  deleteEntry: (id: string) => void;
  getEntry: (id: string) => JournalEntry | undefined;
}

export const useJournalStore = create<JournalState>()(
  persist(
    (set, get) => ({
      entries: [],
      addEntry: (entry) => set((state) => ({
        entries: [{ ...entry, lastModified: Date.now() }, ...state.entries]
      })),
      updateEntry: (id, updates) => set((state) => ({
        entries: state.entries.map(entry =>
          entry.id === id 
            ? { ...entry, ...updates, lastModified: Date.now() } 
            : entry
        )
      })),
      deleteEntry: (id) => set((state) => ({
        entries: state.entries.filter(entry => entry.id !== id)
      })),
      getEntry: (id) => get().entries.find(entry => entry.id === id)
    }),
    {
      name: 'journal-storage'
    }
  )
);