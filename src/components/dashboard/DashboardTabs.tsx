import React from 'react';
import { LayoutDashboard, BookOpen, LineChart } from 'lucide-react';

interface TabProps {
  active: string;
  onChange: (tab: string) => void;
}

const DashboardTabs = ({ active, onChange }: TabProps) => {
  const tabs = [
    { id: 'overview', label: 'Overview', icon: LayoutDashboard },
    { id: 'journal', label: 'Journal', icon: BookOpen },
    { id: 'progress', label: 'Progress', icon: LineChart },
  ];

  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-2 flex gap-2 mb-8 w-fit">
      {tabs.map(({ id, label, icon: Icon }) => (
        <button
          key={id}
          onClick={() => onChange(id)}
          className={`
            flex items-center gap-2 px-4 py-2 rounded-lg font-medium transition-all text-sm
            ${active === id 
              ? 'bg-ocean-dark text-text-light' 
              : 'text-text-secondary hover:bg-ocean-light/50'
            }
          `}
        >
          <Icon className="w-4 h-4" />
          {label}
        </button>
      ))}
    </div>
  );
};

export default DashboardTabs;