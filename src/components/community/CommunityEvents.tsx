import React from 'react';
import { Calendar, Users } from 'lucide-react';
import { motion } from 'framer-motion';

const events = [
  {
    title: "Mindfulness Workshop",
    date: "Mar 15",
    time: "2:00 PM EST",
    attendees: 45
  },
  {
    title: "Anxiety Support Group",
    date: "Mar 17",
    time: "6:30 PM EST",
    attendees: 28
  },
  {
    title: "Stress Management Session",
    date: "Mar 20",
    time: "1:00 PM EST",
    attendees: 32
  }
];

const CommunityEvents = () => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-text-primary mb-4">Upcoming Events</h2>
      
      <div className="space-y-4">
        {events.map((event, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="flex items-center gap-4 p-4 bg-ocean-light/20 rounded-lg"
          >
            <div className="bg-ocean-dark text-white p-3 rounded-lg">
              <Calendar className="w-5 h-5" />
            </div>
            
            <div className="flex-grow">
              <h3 className="font-medium text-text-primary">{event.title}</h3>
              <p className="text-sm text-text-secondary">
                {event.date} at {event.time}
              </p>
            </div>

            <div className="flex items-center gap-1 text-sm text-ocean-dark">
              <Users className="w-4 h-4" />
              <span>{event.attendees}</span>
            </div>
          </motion.div>
        ))}
      </div>

      <button className="w-full mt-4 bg-ocean-dark text-white py-2 rounded-lg hover:bg-ocean transition">
        View All Events
      </button>
    </div>
  );
};

export default CommunityEvents;