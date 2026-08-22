import React from 'react';
import { Routes, Route, Navigate } from 'react-router-dom';
import Layout from '@/components/layout/Layout';

// Pages
import HomePage from '@/pages/HomePage';
import McqPage from '@/pages/McqPage';
import DiscussionPage from '@/pages/DiscussionPage';
import TestPage from '@/pages/TestPage';
import TestRunnerPage from '@/pages/TestRunnerPage';
import DownloadsPage from '@/pages/DownloadsPage';
import AboutPage from '@/pages/AboutPage';
import ThanksPage from '@/pages/ThanksPage';
import SearchPage from '@/pages/SearchPage';
import ContributePage from '@/pages/ContributePage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {/* Home */}
        <Route path="/" element={<HomePage />} />

        {/* Global Question Search */}
        <Route path="/search" element={<SearchPage />} />

        {/* Community & Question Contribution */}
        <Route path="/community" element={<ContributePage />} />
        <Route path="/community/export" element={<ContributePage />} />
        <Route path="/contribute" element={<Navigate to="/community" replace />} />

        {/* Tests */}
        <Route path="/test" element={<TestPage />} />
        <Route path="/test/:subject" element={<TestRunnerPage />} />

        {/* Downloads */}
        <Route path="/downloads" element={<DownloadsPage />} />

        {/* About / Contact / Thanks */}
        <Route path="/contact" element={<AboutPage />} />
        <Route path="/thanks" element={<ThanksPage />} />

        {/* Subject MCQ & Discussion */}
        <Route path="/:subject" element={<McqPage />} />
        <Route path="/:subject/:id" element={<DiscussionPage />} />

        {/* 404 Fallback */}
        <Route path="*" element={<NotFoundPage />} />
      </Route>
    </Routes>
  );
}
