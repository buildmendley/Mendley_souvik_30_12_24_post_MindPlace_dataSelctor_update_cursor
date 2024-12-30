import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Calendar, Brain, Star, Sparkles, Trophy } from 'lucide-react';
import { format, subDays } from 'date-fns';
import DashboardHeader from '../components/dashboard/DashboardHeader';

const WeeklyReportPage = () => {
  const today = new Date();
  const startDate = subDays(today, 7);

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark">
      <DashboardHeader />
      <main className="max-w-7xl mx-auto px-4 py-8">
        <Link 
          to="/mind-palace" 
          className="inline-flex items-center text-white mb-8 hover:opacity-80 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Mind Palace
        </Link>

        <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
          {/* Header */}
          <div className="mb-8">
            <h1 className="text-3xl font-bold text-gray-900">Weekly Report</h1>
            <p className="text-gray-600">
              {format(startDate, 'MMM d')} - {format(today, 'MMM d, yyyy')}
            </p>
          </div>

          <div className="space-y-8">
            {/* Headline */}
            <div className="bg-ocean-light/30 p-6 rounded-xl">
              <h3 className="text-xl font-semibold text-ocean-dark mb-2">Weekly Headline</h3>
              <p className="text-gray-700">A week of significant emotional growth and self-discovery</p>
            </div>

            {/* Analysis Points */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Brain className="w-6 h-6 text-ocean-dark" />
                Weekly Analysis
              </h3>
              <ul className="space-y-3">
                {[
                  "Showed consistent emotional regulation throughout challenging situations",
                  "Made progress in mindfulness practice with daily meditation sessions",
                  "Successfully implemented new coping strategies during stress",
                  "Demonstrated improved self-awareness in social interactions"
                ].map((point, index) => (
                  <li key={index} className="flex items-start gap-3 text-gray-700">
                    <span className="w-6 h-6 bg-ocean-light/50 rounded-full flex items-center justify-center flex-shrink-0 text-ocean-dark font-medium">
                      {index + 1}
                    </span>
                    {point}
                  </li>
                ))}
              </ul>
            </div>

            {/* Key Insights */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Star className="w-6 h-6 text-ocean-dark" />
                Key Insights
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  "Morning routines significantly impact daily mood",
                  "Social connections boost emotional resilience",
                  "Regular exercise helps maintain emotional balance",
                  "Mindful breaks improve stress management"
                ].map((insight, index) => (
                  <div key={index} className="bg-gray-50 p-4 rounded-xl">
                    <p className="text-gray-700">{insight}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Emotional Landscape */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Sparkles className="w-6 h-6 text-ocean-dark" />
                Emotional Landscape
              </h3>
              <div className="flex flex-wrap gap-3">
                {[
                  { emoji: "😊", name: "Joy", percentage: "45%" },
                  { emoji: "😌", name: "Calm", percentage: "30%" },
                  { emoji: "🤔", name: "Contemplative", percentage: "15%" },
                  { emoji: "😤", name: "Frustrated", percentage: "10%" }
                ].map((emotion, index) => (
                  <div key={index} className="bg-white shadow rounded-full px-4 py-2 flex items-center gap-2">
                    <span className="text-2xl">{emotion.emoji}</span>
                    <span className="text-gray-700">{emotion.name}</span>
                    <span className="text-ocean-dark font-medium">{emotion.percentage}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Theme Landscape */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4">Theme Landscape</h3>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                {[
                  "Personal Growth",
                  "Relationships",
                  "Work-Life Balance",
                  "Health & Wellness",
                  "Creativity",
                  "Learning"
                ].map((theme, index) => (
                  <div key={index} className="bg-ocean-light/30 p-4 rounded-xl text-center">
                    <p className="text-ocean-dark font-medium">{theme}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Weekly Wins */}
            <div>
              <h3 className="text-xl font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Trophy className="w-6 h-6 text-ocean-dark" />
                Weekly Wins
              </h3>
              <div className="space-y-4">
                {[
                  "Completed all daily meditation sessions",
                  "Maintained consistent exercise routine",
                  "Successfully handled a challenging work situation",
                  "Improved communication in relationships"
                ].map((win, index) => (
                  <div key={index} className="flex items-center gap-3 bg-green-50 p-4 rounded-xl">
                    <div className="w-8 h-8 bg-green-100 rounded-full flex items-center justify-center text-green-600">
                      🏆
                    </div>
                    <p className="text-gray-700">{win}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default WeeklyReportPage;