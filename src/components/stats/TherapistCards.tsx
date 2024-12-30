import React from 'react';

const therapists = [
  {
    name: 'Raelen Agle',
    title: 'Nervous System Rebalancing',
    image: 'https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?auto=format&fit=crop&w=200&q=80',
    color: 'bg-rose-100'
  },
  {
    name: 'Micha Tomoff',
    title: 'Positive Psychology',
    image: 'https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=200&q=80',
    color: 'bg-blue-100'
  },
  {
    name: 'Dr. Christine Cielo',
    title: 'Acceptance & Commitment',
    image: 'https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=200&q=80',
    color: 'bg-orange-100'
  },
  {
    name: 'David Coates',
    title: 'Internal Family Systems',
    image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=200&q=80',
    color: 'bg-purple-100'
  },
  {
    name: 'Andrew Horn',
    title: 'My Father and Me',
    image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=200&q=80',
    color: 'bg-emerald-100'
  }
];

const TherapistCard = ({ therapist }: { therapist: typeof therapists[0] }) => (
  <div className="w-64 bg-white/95 backdrop-blur-sm rounded-2xl p-6 shadow-lg transform hover:scale-105 transition-all duration-300 flex flex-col items-center flex-shrink-0">
    <div className={`w-24 h-24 rounded-full overflow-hidden mb-4 ${therapist.color}`}>
      <img
        src={therapist.image}
        alt={therapist.name}
        className="w-full h-full object-cover"
      />
    </div>
    <h3 className="text-text-primary font-semibold text-lg text-center mb-2">
      {therapist.title}
    </h3>
    <p className="text-text-secondary text-center">
      {therapist.name}
    </p>
  </div>
);

const TherapistCards = () => {
  return (
    <div className="relative w-full overflow-hidden">
      <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-ocean to-transparent z-10" />
      <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-ocean to-transparent z-10" />
      
      <div className="flex gap-4 animate-float hover:pause-animation">
        {/* First set of cards */}
        {therapists.map((therapist, index) => (
          <TherapistCard key={`first-${index}`} therapist={therapist} />
        ))}
        {/* Duplicate set for seamless loop */}
        {therapists.map((therapist, index) => (
          <TherapistCard key={`second-${index}`} therapist={therapist} />
        ))}
      </div>
    </div>
  );
};

export default TherapistCards;