import React from 'react';
import { Heart, MessageCircle, Share2 } from 'lucide-react';
import { motion } from 'framer-motion';

const posts = [
  {
    id: 1,
    author: {
      name: 'Sarah Chen',
      avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150&h=150&fit=crop'
    },
    content: "Just completed my first week of mindfulness practice with Mendley. The difference in my anxiety levels is remarkable! 🧘‍♀️✨",
    likes: 124,
    comments: 18,
    timeAgo: '2 hours ago'
  },
  {
    id: 2,
    author: {
      name: 'Michael Torres',
      avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop'
    },
    content: "Grateful for this community. Your stories of resilience inspire me every day. Together, we're stronger! 💪",
    likes: 89,
    comments: 12,
    timeAgo: '4 hours ago'
  },
  {
    id: 3,
    author: {
      name: 'Emma Wilson',
      avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=150&h=150&fit=crop'
    },
    content: "Today's breakthrough: learned to identify my triggers and manage them effectively. Small steps, big impact! 🌟",
    likes: 156,
    comments: 24,
    timeAgo: '6 hours ago'
  }
];

const CommunityFeed = () => {
  return (
    <div className="space-y-6">
      {posts.map((post, index) => (
        <motion.div
          key={post.id}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: index * 0.1 }}
          className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg"
        >
          <div className="flex items-center gap-4 mb-4">
            <img
              src={post.author.avatar}
              alt={post.author.name}
              className="w-12 h-12 rounded-full object-cover"
            />
            <div>
              <h3 className="font-semibold text-text-primary">{post.author.name}</h3>
              <p className="text-sm text-text-secondary">{post.timeAgo}</p>
            </div>
          </div>

          <p className="text-text-primary mb-4">{post.content}</p>

          <div className="flex items-center gap-6 text-text-secondary">
            <button className="flex items-center gap-2 hover:text-ocean-dark transition">
              <Heart className="w-5 h-5" />
              {post.likes}
            </button>
            <button className="flex items-center gap-2 hover:text-ocean-dark transition">
              <MessageCircle className="w-5 h-5" />
              {post.comments}
            </button>
            <button className="flex items-center gap-2 hover:text-ocean-dark transition">
              <Share2 className="w-5 h-5" />
              Share
            </button>
          </div>
        </motion.div>
      ))}
    </div>
  );
};

export default CommunityFeed;