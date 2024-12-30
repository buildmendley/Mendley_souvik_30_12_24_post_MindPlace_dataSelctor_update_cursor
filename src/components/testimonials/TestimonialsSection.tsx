import React from 'react';
import PhoneMockup from './PhoneMockup';
import TestimonialBubble from './TestimonialBubble';

const testimonials = [
  {
    text: "Simply life-changing.",
    author: "John Miller",
    role: "Mental Health Specialist",
    image: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&fit=crop&w=150&q=80",
    position: 'left' as const
  },
  {
    text: "This is a game-changer.",
    author: "Aditi Rao",
    role: "Mental Wellness Expert",
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&fit=crop&w=150&q=80",
    position: 'right' as const
  },
  {
    text: "I'm a big believer in Mendley",
    author: "Ramesh Patel",
    role: "Life Coach",
    image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&fit=crop&w=150&q=80",
    position: 'left' as const
  },
  {
    text: "Incredibly intuitive and impactful.",
    author: "Emily Carter",
    role: "Therapist",
    image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?auto=format&fit=crop&w=150&q=80",
    position: 'right' as const
  }
];

const TestimonialsSection = () => {
  return (
    <section className="relative py-12 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative">
          {/* Background Circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/5 backdrop-blur-sm rounded-full"></div>
          
          <div className="relative grid grid-cols-3 gap-6 items-center">
            {/* Left Testimonials */}
            <div className="space-y-8">
              {testimonials.slice(0, 2).map((testimonial, index) => (
                <TestimonialBubble 
                  key={index} 
                  {...testimonial} 
                  delay={index * 200}
                />
              ))}
            </div>

            {/* Center Phone */}
            <div className="flex justify-center">
              <PhoneMockup />
            </div>

            {/* Right Testimonials */}
            <div className="space-y-8">
              {testimonials.slice(2).map((testimonial, index) => (
                <TestimonialBubble 
                  key={index} 
                  {...testimonial} 
                  delay={(index + 2) * 200}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;