import React from 'react';
import { Search } from 'lucide-react';
import JournalEntry from './JournalEntry';
import { useJournalStore } from '../../stores/journalStore';

interface JournalSidebarProps {
  selectedEntryId: string | null;
  onEntrySelect: (id: string) => void;
}

const JournalSidebar = ({ selectedEntryId, onEntrySelect }: JournalSidebarProps) => {
  const entries = useJournalStore(state => state.entries);
  const [searchTerm, setSearchTerm] = React.useState('');

  const filteredEntries = entries.filter(entry =>
    entry.content.toLowerCase().includes(searchTerm.toLowerCase()) ||
    entry.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-4 h-[calc(100vh-240px)] flex flex-col">
      <div className="mb-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
          <input
            type="text"
            placeholder="Search entries..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2 bg-gray-50 rounded-lg focus:outline-none focus:ring-2 focus:ring-ocean-dark/50"
          />
        </div>
      </div>

      <div className="flex-1 overflow-y-auto space-y-2">
        {filteredEntries.map((entry) => (
          <JournalEntry
            key={entry.id}
            entry={entry}
            isSelected={entry.id === selectedEntryId}
            onClick={() => onEntrySelect(entry.id)}
          />
        ))}
      </div>
    </div>
  );
};

export default JournalSidebar;