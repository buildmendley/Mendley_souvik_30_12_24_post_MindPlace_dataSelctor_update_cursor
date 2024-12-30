import React from 'react';
import ReviewColumn from './ReviewColumn';

const reviews = [
  // Column 1
  [
    {
      name: "Sarah Chen",
      rating: 5,
      text: "Mendley has been a game-changer for my mental health journey. The AI companion feels incredibly understanding and supportive.",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop"
    },
    {
      name: "Michael Torres",
      rating: 5,
      text: "This app helped me develop better emotional awareness. The daily check-ins and guided reflections are invaluable.",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop"
    },
    {
      name: "Emma Wilson",
      rating: 4,
      text: "The personalized insights and progress tracking have helped me understand my emotional patterns better.",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop"
    }
  ],
  // Column 2
  [
    {
      name: "David Park",
      rating: 5,
      text: "As someone dealing with anxiety, having Mendley as a constant companion has been incredibly reassuring.",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=150&h=150&fit=crop"
    },
    {
      name: "Priya Sharma",
      rating: 5,
      text: "The AI's responses are thoughtful and help me process my emotions in a healthy way. Highly recommend!",
      image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=150&h=150&fit=crop"
    },
    {
      name: "James Cooper",
      rating: 4,
      text: "Great tool for maintaining emotional well-being. The interface is intuitive and the AI feels very natural.",
      image: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=150&h=150&fit=crop"
    }
  ],
  // Column 3
  [
    {
      name: "Lisa Martinez",
      rating: 5,
      text: "Mendley provides the perfect balance of support and guidance. It's like having a therapist in your pocket.",
      image: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=150&h=150&fit=crop"
    },
    {
      name: "Alex Johnson",
      rating: 5,
      text: "The daily journaling prompts are thoughtful and really help me dig deeper into my emotions.",
      image: "https://images.unsplash.com/photo-1507591064344-4c6ce005b128?w=150&h=150&fit=crop"
    },
    {
      name: "Nina Patel",
      rating: 5,
      text: "I appreciate how the AI remembers our previous conversations and builds upon them meaningfully.",
      image: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=150&h=150&fit=crop"
    }
  ]
];

const ReviewSection = () => {
  return (
    <section id="reviews" className="py-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold text-text-primary mb-4">
          What Our Users Say
        </h2>
        <p className="text-text-secondary text-lg">
          Join thousands of people who've found their path to emotional well-being with Mendley
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <ReviewColumn reviews={reviews[0]} speed={30} delay={0} />
        <ReviewColumn reviews={reviews[1]} speed={25} delay={-10} />
        <ReviewColumn reviews={reviews[2]} speed={35} delay={-5} />
      </div>
    </section>
  );
};

export default ReviewSection;