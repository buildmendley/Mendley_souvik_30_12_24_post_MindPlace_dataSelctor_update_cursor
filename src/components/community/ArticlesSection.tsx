import React from 'react';
import { BookOpen, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const articles = [
  {
    title: "The Impact of AI on Mental Health Support",
    author: "Dr. Sarah Chen",
    readTime: "5 min read",
    image: "https://images.unsplash.com/photo-1507146153580-69a1fe6d8aa1?w=150&h=150&fit=crop"
  },
  {
    title: "Machine Learning in Emotional Intelligence",
    author: "Prof. Michael Torres",
    readTime: "7 min read",
    image: "https://images.unsplash.com/photo-1620712943543-bcc4688e7485?w=150&h=150&fit=crop"
  },
  {
    title: "The Future of AI Therapy",
    author: "Dr. Emma Wilson",
    readTime: "4 min read",
    image: "https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=150&h=150&fit=crop"
  }
];

const ArticlesSection = () => {
  return (
    <div className="bg-white/95 backdrop-blur-sm rounded-xl p-6 shadow-lg">
      <h2 className="text-xl font-semibold text-text-primary mb-4">Latest Articles</h2>
      
      <div className="space-y-4">
        {articles.map((article, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group cursor-pointer"
          >
            <div className="flex items-center gap-4">
              <img
                src={article.image}
                alt={article.title}
                className="w-12 h-12 rounded-lg object-cover"
              />
              
              <div className="flex-grow">
                <h3 className="font-medium text-text-primary group-hover:text-ocean-dark transition">
                  {article.title}
                </h3>
                <div className="flex items-center gap-2 text-sm text-text-secondary">
                  <BookOpen className="w-4 h-4" />
                  <span>{article.readTime}</span>
                  <span>•</span>
                  <span>{article.author}</span>
                </div>
              </div>

              <ArrowRight className="w-5 h-5 text-ocean-dark opacity-0 group-hover:opacity-100 transition" />
            </div>
          </motion.div>
        ))}
      </div>

      <button className="w-full mt-4 bg-ocean-dark text-white py-2 rounded-lg hover:bg-ocean transition">
        View All Articles
      </button>
    </div>
  );
};

export default ArticlesSection;