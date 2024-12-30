import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { MessageCircle, ArrowLeft, Loader, Calendar, Clock } from 'lucide-react';
import { ChatAnalysis } from '../types/chat';
import { analyzeChatSession } from '../utils/analysis';
import { loadChatHistory, saveMemory } from '../utils/storage';
import AnalysisSection from '../components/mchat/analysis/AnalysisSection';
import ChatHistory from '../components/mchat/analysis/ChatHistory';
import AchievementModal from '../components/modals/AchievementModal';

const MchatAnaPage = () => {
  const navigate = useNavigate();
  const [analysis, setAnalysis] = useState<ChatAnalysis | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [showAchievement, setShowAchievement] = useState(false);
  const chatHistory = loadChatHistory();

  useEffect(() => {
    let isMounted = true;

    const analyzeChat = async () => {
      if (!chatHistory?.messages || chatHistory.messages.length === 0) {
        if (isMounted) {
          setError('No chat history found to analyze');
          setIsLoading(false);
        }
        return;
      }

      try {
        // Perform analysis only once
        const result = await analyzeChatSession(chatHistory.messages);
        
        if (isMounted) {
          setAnalysis(result);
          // Save memory only after successful analysis
          if (result && chatHistory.mode) {
            saveMemory(chatHistory.mode, chatHistory.messages, result);
          }
        }
      } catch (error) {
        console.error('Failed to analyze chat:', error);
        if (isMounted) {
          setError('Failed to analyze the conversation. Please try again.');
        }
      } finally {
        if (isMounted) {
          setIsLoading(false);
        }
      }
    };

    analyzeChat();

    // Cleanup function to prevent state updates if component unmounts
    return () => {
      isMounted = false;
    };
  }, []); // Empty dependency array to run only once

  if (isLoading) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg flex flex-col items-center justify-center min-h-[400px]">
            <Loader className="w-8 h-8 text-ocean-dark animate-spin mb-4" />
            <p className="text-gray-600 text-lg">Analyzing your conversation...</p>
          </div>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark p-8">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <p className="text-red-500 text-center mb-6">{error}</p>
            <div className="flex justify-center">
              <button
                onClick={() => navigate('/mchat')}
                className="bg-ocean-dark text-white px-6 py-3 rounded-xl hover:bg-ocean transition-colors"
              >
                Start New Chat
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-ocean-light via-ocean to-ocean-dark p-8">
      <div className="max-w-4xl mx-auto">
        <button
          onClick={() => navigate('/ana')}
          className="inline-flex items-center text-white mb-8 hover:opacity-80 transition"
        >
          <ArrowLeft className="w-5 h-5 mr-2" />
          Back to Ana
        </button>

        <div className="space-y-6">
          {/* Analysis Card */}
          <div className="bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg">
            <div className="flex items-center justify-between mb-8">
              <div className="flex items-center gap-4">
                <div className="bg-ocean-dark p-3 rounded-xl">
                  <MessageCircle className="w-8 h-8 text-white" />
                </div>
                <div>
                  <h1 className="text-3xl font-bold text-gray-900">Chat Analysis</h1>
                  <div className="flex items-center gap-4 mt-2 text-gray-600">
                    <div className="flex items-center gap-1">
                      <Calendar className="w-4 h-4" />
                      <span>{new Date().toLocaleDateString()}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="w-4 h-4" />
                      <span>{new Date().toLocaleTimeString()}</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {chatHistory?.mode && (
                <div className="bg-ocean-dark/10 px-4 py-2 rounded-full">
                  <span className="text-ocean-dark font-medium">{chatHistory.mode}</span>
                </div>
              )}
            </div>

            {analysis && <AnalysisSection analysis={analysis} />}
          </div>

          {/* Chat History */}
          {chatHistory && chatHistory.messages.length > 0 && (
            <ChatHistory messages={chatHistory.messages} />
          )}

          {/* Continue Button */}
          <div className="flex justify-center mt-8">
            <button
              onClick={() => setShowAchievement(true)}
              className="bg-ocean-dark text-white px-12 py-4 rounded-xl hover:bg-ocean transition-colors text-lg font-semibold"
            >
              Continue
            </button>
          </div>
        </div>

        <AchievementModal
          isOpen={showAchievement}
          onClose={() => setShowAchievement(false)}
          keyInsight={analysis?.keyInsight || 'Great progress on your journey!'}
        />
      </div>
    </div>
  );
};

export default MchatAnaPage;