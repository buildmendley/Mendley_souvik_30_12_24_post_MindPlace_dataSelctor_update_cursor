import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface JournalImage {
  src: string;
  timestamp: Date;
}

interface JournalEntry {
  id: string;
  content: string;
  images: JournalImage[];
  createdAt: Date;
  updatedAt: Date;
}

interface JournalEntryState {
  entries: JournalEntry[];
  addEntry: (entry: Omit<JournalEntry, 'id' | 'createdAt' | 'updatedAt'>) => void;
  updateEntry: (id: string, updates: Partial<JournalEntry>) => void;
}

export const useJournalEntryStore = create<JournalEntryState>()(
  persist(
    (set) => ({
      entries: [],
      addEntry: (entry) => set((state) => ({
        entries: [
          {
            ...entry,
            id: crypto.randomUUID(),
            createdAt: new Date(),
            updatedAt: new Date(),
          },
          ...state.entries,
        ],
      })),
      updateEntry: (id, updates) => set((state) => ({
        entries: state.entries.map((entry) =>
          entry.id === id
            ? { ...entry, ...updates, updatedAt: new Date() }
            : entry
        ),
      })),
    }),
    {
      name: 'journal-entries',
    }
  )
);