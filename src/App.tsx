import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import LoginPage from './pages/LoginPage';
import RegisterPage from './pages/RegisterPage';
import DashboardPage from './pages/DashboardPage';
import ResearchPage from './pages/ResearchPage';
import CommunityPage from './pages/CommunityPage';
import AnaPage from './pages/AnaPage';
import MchatPage from './pages/MchatPage';
import GuideMchatPage from './pages/GuideMchatPage';
import MchatAnaPage from './pages/MchatAnaPage';
import MemoryPage from './pages/MemoryPage';
import JournalPage from './pages/JournalPage';
import DiscoverPage from './pages/DiscoverPage';
import MindPalacePage from './pages/MindPalacePage';
import WeeklyReportPage from './pages/WeeklyReportPage';
import DailyStarPage from './pages/DailyStarPage';
import QuickRelaxPage from './components/activities/QuickRelaxPage';
import CalmingSongsPage from './components/activities/CalmingSongsPage';
import MindfulGamesPage from './components/activities/MindfulGamesPage';
import MoodTwistersPage from './components/activities/MoodTwistersPage';
import ProtectedRoute from './components/auth/ProtectedRoute';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/register" element={<RegisterPage />} />
        <Route path="/science" element={<ResearchPage />} />
        <Route path="/community" element={<CommunityPage />} />
        
        <Route path="/dashboard" element={<ProtectedRoute><DashboardPage /></ProtectedRoute>} />
        <Route path="/discover" element={<ProtectedRoute><DiscoverPage /></ProtectedRoute>} />
        <Route path="/journal" element={<ProtectedRoute><JournalPage /></ProtectedRoute>} />
        <Route path="/memories" element={<ProtectedRoute><MemoryPage /></ProtectedRoute>} />
        <Route path="/ana" element={<ProtectedRoute><AnaPage /></ProtectedRoute>} />
        <Route path="/mchat" element={<ProtectedRoute><MchatPage /></ProtectedRoute>} />
        <Route path="/guide_mchat" element={<ProtectedRoute><GuideMchatPage /></ProtectedRoute>} />
        <Route path="/mchat_ana" element={<ProtectedRoute><MchatAnaPage /></ProtectedRoute>} />
        <Route path="/mind-palace" element={<ProtectedRoute><MindPalacePage /></ProtectedRoute>} />
        <Route path="/weekly-report" element={<ProtectedRoute><WeeklyReportPage /></ProtectedRoute>} />
        <Route path="/daily-star" element={<ProtectedRoute><DailyStarPage /></ProtectedRoute>} />
        
        <Route path="/activities/quick-relax" element={<ProtectedRoute><QuickRelaxPage /></ProtectedRoute>} />
        <Route path="/activities/calming-songs" element={<ProtectedRoute><CalmingSongsPage /></ProtectedRoute>} />
        <Route path="/activities/mindful-games" element={<ProtectedRoute><MindfulGamesPage /></ProtectedRoute>} />
        <Route path="/activities/mood-twisters" element={<ProtectedRoute><MoodTwistersPage /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;