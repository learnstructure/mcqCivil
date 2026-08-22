import React, { useState, useEffect, useMemo } from 'react';
import { useLocation } from 'react-router-dom';
import confetti from 'canvas-confetti';
import { 
  ALL_SUBJECTS, 
  TECHNICAL_SUBJECTS, 
  GK_SUBJECTS 
} from '@/data/subjects';
import { 
  submitQuestionContribution, 
  fetchContributionsWithCache, 
  computeLeaderboard 
} from '@/services/firebase';
import { 
  Heart, 
  Award, 
  Trophy, 
  CheckCircle2, 
  Sparkles, 
  Send, 
  BookOpen, 
  Globe, 
  HelpCircle, 
  Eye, 
  Code2, 
  Copy, 
  Check, 
  RefreshCw, 
  User, 
  GraduationCap, 
  Flame, 
  MessageSquareQuote,
  Clock,
  Search,
  Filter,
  Layers,
  X
} from 'lucide-react';

export default function ContributePage() {
  const [subjectSlug, setSubjectSlug] = useState('som');
  const [question, setQuestion] = useState('');
  const [optionA, setOptionA] = useState('');
  const [optionB, setOptionB] = useState('');
  const [optionC, setOptionC] = useState('');
  const [optionD, setOptionD] = useState('');
  const [ans, setAns] = useState('A');
  const [explanation, setExplanation] = useState('');
  const [contributorName, setContributorName] = useState('');
  const [contributorCollege, setContributorCollege] = useState('');
  const [contributorEmail, setContributorEmail] = useState('');

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const location = useLocation();
  const isExportUrl = location.pathname === '/community/export';

  // Leaderboard & Contributions state
  const [contributions, setContributions] = useState([]);
  const [isLoadingContributions, setIsLoadingContributions] = useState(true);
  const [activeTab, setActiveTab] = useState(isExportUrl ? 'export' : 'contribute'); // 'contribute' | 'browse' | 'leaderboard' | 'export'

  useEffect(() => {
    if (isExportUrl) {
      setActiveTab('export');
    }
  }, [isExportUrl]);

  // Browse Questions Filter state
  const [browseSubject, setBrowseSubject] = useState('all');
  const [browseSearch, setBrowseSearch] = useState('');
  const [userAnswers, setUserAnswers] = useState({}); // { [questionId]: 'A' | 'B' | 'C' | 'D' }

  // Admin Export state
  const [copiedExport, setCopiedExport] = useState(false);

  useEffect(() => {
    document.title = 'Community Question Hub & Hall of Fame | Civil Engineering MCQ';
    loadContributions();
  }, []);

  const loadContributions = async (force = false) => {
    setIsLoadingContributions(true);
    try {
      const data = await fetchContributionsWithCache(force);
      setContributions(data);
    } catch (err) {
      console.error(err);
    } finally {
      setIsLoadingContributions(false);
    }
  };

  const currentSubject = useMemo(() => {
    return ALL_SUBJECTS.find(s => s.slug === subjectSlug) || ALL_SUBJECTS[0];
  }, [subjectSlug]);

  const leaderboard = useMemo(() => {
    return computeLeaderboard(contributions);
  }, [contributions]);

  // Filtered list for the Browse tab
  const filteredBrowseContributions = useMemo(() => {
    return contributions.filter((item) => {
      const matchesSubject = browseSubject === 'all' || item.subjectSlug === browseSubject;
      const q = browseSearch.toLowerCase().trim();
      const matchesSearch = !q || 
        item.question?.toLowerCase().includes(q) || 
        item.contributorName?.toLowerCase().includes(q) ||
        item.contributorCollege?.toLowerCase().includes(q) ||
        item.subjectTitle?.toLowerCase().includes(q);

      return matchesSubject && matchesSearch;
    });
  }, [contributions, browseSubject, browseSearch]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage('');

    if (!question.trim()) {
      setErrorMessage('Please enter the question statement.');
      return;
    }
    if (!optionA.trim() || !optionB.trim() || !optionC.trim() || !optionD.trim()) {
      setErrorMessage('Please provide all 4 options (A, B, C, D).');
      return;
    }
    if (!ans) {
      setErrorMessage('Please select the correct answer.');
      return;
    }

    setIsSubmitting(true);
    try {
      await submitQuestionContribution({
        subjectSlug,
        subjectTitle: currentSubject.title,
        question,
        optionA,
        optionB,
        optionC,
        optionD,
        ans,
        explanation,
        contributorName: contributorName || 'Anonymous',
        contributorCollege,
        contributorEmail,
      }, contributions);

      // Confetti celebration
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
          colors: ['#0284c7', '#10b981', '#f59e0b', '#ec4899']
        });
      } catch (e) {
        // ignore
      }

      setSubmitSuccess(true);
      // Reset question inputs but keep contributor info for next question
      setQuestion('');
      setOptionA('');
      setOptionB('');
      setOptionC('');
      setOptionD('');
      setExplanation('');
      setAns('A');

      // Refresh list
      loadContributions(true);
    } catch (err) {
      console.error(err);
      setErrorMessage(err.message || 'Failed to submit question. Please check your internet connection.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleSelectOption = (questionId, selectedOpt) => {
    setUserAnswers((prev) => ({
      ...prev,
      [questionId]: selectedOpt
    }));
  };

  // Generate JavaScript Code for Admin Export
  const exportCodeString = useMemo(() => {
    const questionsBySubject = {};
    contributions.forEach(c => {
      if (!questionsBySubject[c.subjectSlug]) {
        questionsBySubject[c.subjectSlug] = [];
      }
      questionsBySubject[c.subjectSlug].push({
        question: c.question,
        optionA: c.optionA,
        optionB: c.optionB,
        optionC: c.optionC,
        optionD: c.optionD,
        correct: (c.ans || c.correct || 'A').toLowerCase(),
        contributor: (c.contributorName && c.contributorName !== 'Anonymous') ? c.contributorName : undefined,
        explanation: c.explanation || undefined,
      });
    });

    return JSON.stringify(questionsBySubject, null, 2);
  }, [contributions]);

  const handleCopyExport = () => {
    navigator.clipboard.writeText(exportCodeString);
    setCopiedExport(true);
    setTimeout(() => setCopiedExport(false), 2500);
  };

  return (
    <div className="max-w-6xl mx-auto px-4 sm:px-6 py-8 space-y-10 animate-fadeIn">
      
      {/* Header Banner */}
      <div className="text-center space-y-3 max-w-3xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-700 dark:text-rose-300 text-xs font-semibold">
          <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500 animate-pulse" />
          <span>Community Driven • 100% Free for Everyone</span>
        </div>
        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-slate-900 dark:text-white">
          Community Question Hub & <span className="text-gradient">Hall of Fame</span>
        </h1>
        <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
          Help fellow engineering students prepare for Nepal Engineering Council (NEC) licensing, PSC Loksewa, and MSc Entrance exams. Add questions from your past exams, college tests, or textbooks.
        </p>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-4">
          <button
            onClick={() => { setActiveTab('contribute'); setSubmitSuccess(false); }}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'contribute'
                ? 'bg-sky-600 text-white shadow-md shadow-sky-600/25 scale-105'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Send className="w-4 h-4" />
            <span>Submit Question</span>
          </button>

          <button
            onClick={() => setActiveTab('browse')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'browse'
                ? 'bg-teal-600 text-white shadow-md shadow-teal-600/25 scale-105'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <BookOpen className="w-4 h-4" />
            <span>Browse Contributed Qs ({contributions.length})</span>
          </button>

          <button
            onClick={() => setActiveTab('leaderboard')}
            className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all flex items-center gap-2 ${
              activeTab === 'leaderboard'
                ? 'bg-amber-500 text-white shadow-md shadow-amber-500/25 scale-105'
                : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
            }`}
          >
            <Trophy className="w-4 h-4 text-amber-300" />
            <span>Top Contributors ({leaderboard.length})</span>
          </button>

          {isExportUrl && (
            <button
              onClick={() => setActiveTab('export')}
              className={`px-3 py-2 rounded-xl text-xs font-semibold transition-all flex items-center gap-1.5 ${
                activeTab === 'export'
                  ? 'bg-purple-600 text-white shadow-md shadow-purple-600/25'
                  : 'bg-slate-100 dark:bg-slate-800 text-slate-500 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
              title="Admin: Export Contributed Questions to Code"
            >
              <Code2 className="w-3.5 h-3.5" />
              <span>Admin Export Code</span>
            </button>
          )}
        </div>
      </div>

      {/* ========================================================= */}
      {/* TAB 1: CONTRIBUTE FORM & LIVE PREVIEW */}
      {/* ========================================================= */}
      {activeTab === 'contribute' && (
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          
          {/* Left Form (7 cols) */}
          <div className="lg:col-span-7 glass-card rounded-3xl p-6 sm:p-8 space-y-6">
            
            {submitSuccess ? (
              <div className="text-center py-10 space-y-4 animate-fadeIn">
                <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white">
                  Thank You for Your Contribution!
                </h3>
                <p className="text-sm text-slate-600 dark:text-slate-400 max-w-md mx-auto">
                  Your question has been saved and your contributor stats have been updated in the Hall of Fame.
                </p>
                <div className="pt-4 flex flex-wrap justify-center gap-3">
                  <button
                    onClick={() => setSubmitSuccess(false)}
                    className="px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-bold text-xs sm:text-sm shadow-md transition"
                  >
                    Submit Another Question
                  </button>
                  <button
                    onClick={() => setActiveTab('browse')}
                    className="px-5 py-2.5 rounded-xl bg-teal-600 hover:bg-teal-500 text-white font-bold text-xs sm:text-sm shadow-md transition"
                  >
                    View Contributed Questions
                  </button>
                  <button
                    onClick={() => setActiveTab('leaderboard')}
                    className="px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 text-slate-700 dark:text-slate-300 font-bold text-xs sm:text-sm transition"
                  >
                    View Hall of Fame
                  </button>
                </div>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-5">
                
                <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                  <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                    <Sparkles className="w-4 h-4 text-sky-500" />
                    <span>Question Details</span>
                  </h3>
                  <span className="text-xs text-slate-400">Step 1 of 2</span>
                </div>

                {/* Subject Selector */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Target Subject <span className="text-rose-500">*</span>
                  </label>
                  <select
                    value={subjectSlug}
                    onChange={(e) => setSubjectSlug(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-sky-500"
                  >
                    <optgroup label="Technical Civil Engineering">
                      {TECHNICAL_SUBJECTS.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.title}
                        </option>
                      ))}
                    </optgroup>
                    <optgroup label="PSC Loksewa Nepal GK">
                      {GK_SUBJECTS.map((s) => (
                        <option key={s.slug} value={s.slug}>
                          {s.title}
                        </option>
                      ))}
                    </optgroup>
                  </select>
                </div>

                {/* Question Statement */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Question Statement <span className="text-rose-500">*</span>
                  </label>
                  <textarea
                    rows={3}
                    required
                    placeholder="Enter the complete question text..."
                    value={question}
                    onChange={(e) => setQuestion(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-sky-500 resize-y"
                  />
                </div>

                {/* 4 Options Grid */}
                <div className="space-y-2">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400">
                    Options & Correct Answer (Click radio to select correct answer) <span className="text-rose-500">*</span>
                  </label>

                  <div className="space-y-2">
                    {[
                      { key: 'A', val: optionA, setVal: setOptionA },
                      { key: 'B', val: optionB, setVal: setOptionB },
                      { key: 'C', val: optionC, setVal: setOptionC },
                      { key: 'D', val: optionD, setVal: setOptionD },
                    ].map((opt) => (
                      <div
                        key={opt.key}
                        onClick={() => setAns(opt.key)}
                        className={`flex items-center gap-2.5 p-2 rounded-xl border cursor-pointer transition ${
                          ans === opt.key
                            ? 'border-emerald-500 bg-emerald-50/60 dark:bg-emerald-950/40'
                            : 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/50 hover:bg-slate-100 dark:hover:bg-slate-800'
                        }`}
                      >
                        <div className={`w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold transition ${
                          ans === opt.key
                            ? 'bg-emerald-500 text-white shadow-sm'
                            : 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300'
                        }`}>
                          {opt.key}
                        </div>
                        <input
                          type="text"
                          required
                          placeholder={`Option ${opt.key}...`}
                          value={opt.val}
                          onChange={(e) => opt.setVal(e.target.value)}
                          onClick={(e) => e.stopPropagation()}
                          className="flex-1 bg-transparent border-none text-slate-900 dark:text-white text-sm outline-none"
                        />
                        {ans === opt.key && (
                          <span className="text-[11px] font-bold text-emerald-600 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/80">
                            Correct
                          </span>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optional Explanation / Reference */}
                <div className="space-y-1.5">
                  <label className="block text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1">
                    <MessageSquareQuote className="w-3.5 h-3.5 text-slate-400" />
                    <span>Explanation / Reference (Optional)</span>
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Formula: σ = My/I, or IS 456:2000 Clause 26.5.1"
                    value={explanation}
                    onChange={(e) => setExplanation(e.target.value)}
                    className="w-full px-3.5 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                {/* Contributor Profile */}
                <div className="pt-2 space-y-3 border-t border-slate-100 dark:border-slate-800">
                  <div className="flex items-center justify-between">
                    <h4 className="text-xs font-bold uppercase tracking-wider text-slate-600 dark:text-slate-400 flex items-center gap-1.5">
                      <User className="w-3.5 h-3.5 text-sky-500" />
                      <span>Contributor Credit (For Hall of Fame)</span>
                    </h4>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    <input
                      type="text"
                      placeholder="Your Name (e.g. Bibek Sharma)"
                      value={contributorName}
                      onChange={(e) => setContributorName(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-sky-500"
                    />
                    <input
                      type="text"
                      placeholder="College / Campus (e.g. IOE Pulchowk)"
                      value={contributorCollege}
                      onChange={(e) => setContributorCollege(e.target.value)}
                      className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-sky-500"
                    />
                  </div>

                  <input
                    type="email"
                    placeholder="Email address (optional, kept strictly private)"
                    value={contributorEmail}
                    onChange={(e) => setContributorEmail(e.target.value)}
                    className="w-full px-3 py-2 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs outline-none focus:ring-2 focus:ring-sky-500"
                  />
                </div>

                {errorMessage && (
                  <div className="p-3 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-200 dark:border-rose-800 text-rose-600 dark:text-rose-400 text-xs font-semibold">
                    {errorMessage}
                  </div>
                )}

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-3.5 rounded-2xl bg-sky-600 hover:bg-sky-500 active:scale-[0.99] text-white font-bold text-sm shadow-lg shadow-sky-600/25 transition flex items-center justify-center gap-2 disabled:opacity-50"
                >
                  {isSubmitting ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>Submitting Question...</span>
                    </>
                  ) : (
                    <>
                      <Send className="w-4 h-4" />
                      <span>Submit Question to Database</span>
                    </>
                  )}
                </button>

              </form>
            )}

          </div>

          {/* Right Live Preview & Stats (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            
            {/* Live MCQ Preview Card */}
            <div className="glass-card rounded-3xl p-5 sm:p-6 space-y-3 border-2 border-dashed border-sky-300 dark:border-sky-800/80">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800 text-xs text-sky-600 dark:text-sky-400 font-bold uppercase tracking-wider">
                <span className="flex items-center gap-1">
                  <Eye className="w-4 h-4" />
                  <span>Live Practice Preview</span>
                </span>
                <span className="px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-[10px]">
                  {currentSubject.shortTitle}
                </span>
              </div>

              <div className="space-y-3">
                <p className="text-sm font-semibold text-slate-900 dark:text-white leading-relaxed">
                  {question || 'Your question will appear here as you type...'}
                </p>

                <div className="grid grid-cols-1 gap-2 pt-1">
                  {[
                    { key: 'A', text: optionA },
                    { key: 'B', text: optionB },
                    { key: 'C', text: optionC },
                    { key: 'D', text: optionD },
                  ].map((opt) => (
                    <div
                      key={opt.key}
                      className={`p-2.5 rounded-xl border text-xs flex items-center gap-2.5 transition ${
                        ans === opt.key
                          ? 'border-emerald-500/60 bg-emerald-50/50 dark:bg-emerald-950/30 text-slate-900 dark:text-white font-medium'
                          : 'border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300'
                      }`}
                    >
                      <span className={`w-5 h-5 rounded-full flex items-center justify-center font-bold text-[10px] ${
                        ans === opt.key ? 'bg-emerald-500 text-white' : 'bg-slate-200 dark:bg-slate-800'
                      }`}>
                        {opt.key}
                      </span>
                      <span>{opt.text || `Option ${opt.key}`}</span>
                    </div>
                  ))}
                </div>

                {explanation && (
                  <div className="p-2.5 rounded-xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/60 text-amber-800 dark:text-amber-300 text-xs">
                    <strong>Note:</strong> {explanation}
                  </div>
                )}

                {/* Contributor Credit Badge Preview */}
                <div className="pt-2 flex items-center gap-2 text-[11px] text-slate-500 dark:text-slate-400">
                  <GraduationCap className="w-3.5 h-3.5 text-sky-500" />
                  <span>
                    Contributed by <strong>{contributorName || 'Your Name'}</strong>
                    {contributorCollege && ` • ${contributorCollege}`}
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Community Stats Card */}
            <div className="glass-card rounded-3xl p-5 space-y-4">
              <div className="flex items-center justify-between">
                <h4 className="font-bold text-sm text-slate-900 dark:text-white flex items-center gap-2">
                  <Flame className="w-4 h-4 text-amber-500" />
                  <span>Community Contributions</span>
                </h4>
                <button
                  onClick={() => loadContributions(true)}
                  className="p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
                  title="Refresh"
                >
                  <RefreshCw className={`w-3.5 h-3.5 ${isLoadingContributions ? 'animate-spin' : ''}`} />
                </button>
              </div>

              <div className="grid grid-cols-2 gap-3 text-center">
                <div 
                  onClick={() => setActiveTab('browse')}
                  className="p-3 rounded-2xl bg-teal-50 dark:bg-teal-950/50 border border-teal-100 dark:border-teal-900/40 cursor-pointer hover:scale-105 transition"
                >
                  <div className="text-2xl font-extrabold text-teal-600 dark:text-teal-400">
                    {contributions.length}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Browse Questions &rarr;
                  </div>
                </div>
                <div 
                  onClick={() => setActiveTab('leaderboard')}
                  className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/50 border border-amber-100 dark:border-amber-900/40 cursor-pointer hover:scale-105 transition"
                >
                  <div className="text-2xl font-extrabold text-amber-600 dark:text-amber-400">
                    {leaderboard.length}
                  </div>
                  <div className="text-[11px] text-slate-500 dark:text-slate-400 font-medium">
                    Hall of Fame &rarr;
                  </div>
                </div>
              </div>

              <div className="flex justify-between items-center text-xs pt-1">
                <button
                  type="button"
                  onClick={() => setActiveTab('browse')}
                  className="font-bold text-teal-600 dark:text-teal-400 hover:underline"
                >
                  Browse Submitted Qs &rarr;
                </button>
                <button
                  type="button"
                  onClick={() => setActiveTab('leaderboard')}
                  className="font-bold text-amber-600 dark:text-amber-400 hover:underline"
                >
                  View Leaderboard &rarr;
                </button>
              </div>
            </div>

          </div>

        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 2: BROWSE ALL CONTRIBUTED QUESTIONS */}
      {/* ========================================================= */}
      {activeTab === 'browse' && (
        <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
          
          {/* Controls: Search & Filter */}
          <div className="glass-card rounded-3xl p-5 space-y-4">
            
            <div className="flex flex-col sm:flex-row gap-3">
              {/* Search Bar */}
              <div className="relative flex-1">
                <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-3.5" />
                <input
                  type="text"
                  placeholder="Search contributed questions, contributors, college..."
                  value={browseSearch}
                  onChange={(e) => setBrowseSearch(e.target.value)}
                  className="w-full pl-10 pr-9 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm outline-none focus:ring-2 focus:ring-teal-500"
                />
                {browseSearch && (
                  <button
                    onClick={() => setBrowseSearch('')}
                    className="absolute right-3 top-3 text-slate-400 hover:text-slate-600"
                  >
                    <X className="w-4 h-4" />
                  </button>
                )}
              </div>

              {/* Subject Filter Dropdown */}
              <div className="sm:w-64">
                <select
                  value={browseSubject}
                  onChange={(e) => setBrowseSubject(e.target.value)}
                  className="w-full px-3 py-2.5 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-xs sm:text-sm outline-none focus:ring-2 focus:ring-teal-500"
                >
                  <option value="all">All Subjects ({contributions.length})</option>
                  <optgroup label="Technical Civil Engineering">
                    {TECHNICAL_SUBJECTS.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                  </optgroup>
                  <optgroup label="PSC Loksewa Nepal GK">
                    {GK_SUBJECTS.map((s) => (
                      <option key={s.slug} value={s.slug}>
                        {s.title}
                      </option>
                    ))}
                  </optgroup>
                </select>
              </div>

              <button
                onClick={() => loadContributions(true)}
                className="px-3.5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-700 dark:text-slate-300 text-xs font-semibold flex items-center justify-center gap-1.5 transition"
                title="Refresh latest questions"
              >
                <RefreshCw className={`w-3.5 h-3.5 ${isLoadingContributions ? 'animate-spin' : ''}`} />
                <span className="hidden sm:inline">Refresh</span>
              </button>
            </div>

            <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1 pt-1 border-t border-slate-100 dark:border-slate-800">
              <span>
                Showing <strong>{filteredBrowseContributions.length}</strong> contributed questions
              </span>
              <button
                onClick={() => { setActiveTab('contribute'); setSubmitSuccess(false); }}
                className="font-bold text-teal-600 dark:text-teal-400 hover:underline flex items-center gap-1"
              >
                <Send className="w-3 h-3" />
                <span>Submit a new question</span>
              </button>
            </div>

          </div>

          {/* Question List */}
          {isLoadingContributions ? (
            <div className="glass-card rounded-3xl p-12 text-center text-slate-500 dark:text-slate-400 space-y-3">
              <RefreshCw className="w-8 h-8 animate-spin text-teal-500 mx-auto" />
              <p className="text-sm font-semibold">Loading contributed questions...</p>
            </div>
          ) : filteredBrowseContributions.length === 0 ? (
            <div className="glass-card rounded-3xl p-12 text-center text-slate-500 dark:text-slate-400 space-y-3">
              <BookOpen className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
              <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
                {browseSearch || browseSubject !== 'all'
                  ? 'No questions matched your filter.'
                  : 'No contributed questions yet.'}
              </p>
              <p className="text-xs max-w-sm mx-auto">
                Be the first engineering student to contribute a question and appear on the Hall of Fame!
              </p>
              <button
                onClick={() => { setActiveTab('contribute'); setSubmitSuccess(false); }}
                className="px-4 py-2 rounded-xl bg-teal-600 text-white font-bold text-xs shadow-md transition"
              >
                Submit the First Question
              </button>
            </div>
          ) : (
            <div className="space-y-4">
              {filteredBrowseContributions.map((mcq, idx) => {
                const userChoice = userAnswers[mcq.id];
                const isAnswered = Boolean(userChoice);
                const isCorrect = isAnswered && userChoice === mcq.ans;

                return (
                  <div
                    key={mcq.id || idx}
                    className="glass-card rounded-2xl p-5 sm:p-6 space-y-4 transition hover:shadow-lg"
                  >
                    {/* Header: Subject & Contributor Tag */}
                    <div className="flex flex-wrap items-center justify-between gap-2 pb-2 border-b border-slate-100 dark:border-slate-800 text-xs">
                      <span className="px-2.5 py-0.5 rounded-lg bg-teal-100 dark:bg-teal-950/80 text-teal-700 dark:text-teal-300 font-bold text-[11px]">
                        {mcq.subjectTitle || mcq.subjectSlug}
                      </span>

                      <div className="flex items-center gap-1.5 text-slate-500 dark:text-slate-400 text-xs">
                        <GraduationCap className="w-3.5 h-3.5 text-sky-500" />
                        <span>
                          Contributed by <strong className="text-slate-700 dark:text-slate-200">{mcq.contributorName || 'Anonymous'}</strong>
                          {mcq.contributorCollege && ` • ${mcq.contributorCollege}`}
                        </span>
                      </div>
                    </div>

                    {/* Question Statement */}
                    <h3 className="text-sm sm:text-base font-semibold text-slate-900 dark:text-white leading-relaxed">
                      <span className="text-teal-600 dark:text-teal-400 font-bold mr-1.5">Q{idx + 1}.</span>
                      {mcq.question}
                    </h3>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 pt-1">
                      {[
                        { key: 'A', text: mcq.optionA },
                        { key: 'B', text: mcq.optionB },
                        { key: 'C', text: mcq.optionC },
                        { key: 'D', text: mcq.optionD },
                      ].map((opt) => {
                        const isThisOptionChosen = userChoice === opt.key;
                        const isThisOptionCorrect = mcq.ans === opt.key;

                        let optClasses = 'border-slate-200 dark:border-slate-800 bg-slate-50/50 dark:bg-slate-950/40 hover:bg-slate-100 dark:hover:bg-slate-800/80 text-slate-700 dark:text-slate-200';
                        let badgeClasses = 'bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-300';

                        if (isAnswered) {
                          if (isThisOptionCorrect) {
                            optClasses = 'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 font-semibold';
                            badgeClasses = 'bg-emerald-500 text-white';
                          } else if (isThisOptionChosen && !isThisOptionCorrect) {
                            optClasses = 'border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200 line-through opacity-75';
                            badgeClasses = 'bg-rose-500 text-white';
                          }
                        }

                        return (
                          <button
                            key={opt.key}
                            type="button"
                            onClick={() => handleSelectOption(mcq.id, opt.key)}
                            className={`p-3 rounded-xl border text-xs sm:text-sm text-left flex items-center gap-2.5 transition ${optClasses}`}
                          >
                            <span className={`w-6 h-6 rounded-full flex items-center justify-center font-bold text-xs flex-shrink-0 transition ${badgeClasses}`}>
                              {opt.key}
                            </span>
                            <span className="flex-1">{opt.text}</span>
                            {isAnswered && isThisOptionCorrect && (
                              <CheckCircle2 className="w-4 h-4 text-emerald-500 flex-shrink-0" />
                            )}
                          </button>
                        );
                      })}
                    </div>

                    {/* Explanation */}
                    {isAnswered && (
                      <div className="p-3 rounded-xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-800 text-xs space-y-1 animate-fadeIn">
                        <div className="font-bold flex items-center gap-1 text-emerald-600 dark:text-emerald-400">
                          <CheckCircle2 className="w-3.5 h-3.5" />
                          <span>Correct Answer: Option {mcq.ans}</span>
                        </div>
                        {mcq.explanation ? (
                          <p className="text-slate-600 dark:text-slate-300">
                            <strong>Explanation:</strong> {mcq.explanation}
                          </p>
                        ) : (
                          <p className="text-slate-400 text-[11px]">No additional explanation provided.</p>
                        )}
                      </div>
                    )}

                  </div>
                );
              })}
            </div>
          )}

        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 3: HALL OF FAME / TOP CONTRIBUTORS LEADERBOARD */}
      {/* ========================================================= */}
      {activeTab === 'leaderboard' && (
        <div className="space-y-8 animate-fadeIn max-w-4xl mx-auto">
          
          {/* Podium Top 3 */}
          {leaderboard.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-4">
              
              {/* Rank 2 (Silver) */}
              {leaderboard[1] && (
                <div className="glass-card rounded-3xl p-5 text-center space-y-2 border border-slate-300 dark:border-slate-700 sm:order-1 sm:mt-6">
                  <div className="w-12 h-12 rounded-2xl bg-slate-200 dark:bg-slate-700 text-slate-700 dark:text-slate-200 flex items-center justify-center mx-auto text-lg font-extrabold shadow-md">
                    🥈 2
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {leaderboard[1].name}
                  </h3>
                  {leaderboard[1].college && (
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {leaderboard[1].college}
                    </p>
                  )}
                  <div className="pt-1">
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs">
                      {leaderboard[1].count} Questions
                    </span>
                  </div>
                </div>
              )}

              {/* Rank 1 (Gold - Elevated) */}
              {leaderboard[0] && (
                <div className="glass-card rounded-3xl p-6 text-center space-y-2 border-2 border-amber-400 dark:border-amber-500 bg-gradient-to-b from-amber-50/60 to-white dark:from-amber-950/30 dark:to-slate-900 sm:order-2 shadow-xl shadow-amber-500/10">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-tr from-amber-400 to-yellow-300 text-amber-950 flex items-center justify-center mx-auto text-xl font-extrabold shadow-lg shadow-amber-500/30">
                    👑 1
                  </div>
                  <h3 className="font-extrabold text-slate-900 dark:text-white text-lg">
                    {leaderboard[0].name}
                  </h3>
                  {leaderboard[0].college && (
                    <p className="text-xs font-medium text-amber-700 dark:text-amber-400">
                      {leaderboard[0].college}
                    </p>
                  )}
                  <div className="pt-2">
                    <span className="px-3.5 py-1.5 rounded-full bg-amber-500 text-white font-extrabold text-xs shadow-md shadow-amber-500/20">
                      {leaderboard[0].count} Questions Contributed
                    </span>
                  </div>
                </div>
              )}

              {/* Rank 3 (Bronze) */}
              {leaderboard[2] && (
                <div className="glass-card rounded-3xl p-5 text-center space-y-2 border border-amber-700/30 dark:border-amber-800/50 sm:order-3 sm:mt-8">
                  <div className="w-12 h-12 rounded-2xl bg-amber-100 dark:bg-amber-950 text-amber-800 dark:text-amber-400 flex items-center justify-center mx-auto text-lg font-extrabold shadow-md">
                    🥉 3
                  </div>
                  <h3 className="font-bold text-slate-900 dark:text-white text-base">
                    {leaderboard[2].name}
                  </h3>
                  {leaderboard[2].college && (
                    <p className="text-xs text-slate-500 dark:text-slate-400">
                      {leaderboard[2].college}
                    </p>
                  )}
                  <div className="pt-1">
                    <span className="px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs">
                      {leaderboard[2].count} Questions
                    </span>
                  </div>
                </div>
              )}

            </div>
          )}

          {/* Full Leaderboard Table */}
          <div className="glass-card rounded-3xl p-6 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <h3 className="font-bold text-slate-900 dark:text-white text-base flex items-center gap-2">
                <Trophy className="w-5 h-5 text-amber-500" />
                <span>All Hall of Fame Contributors</span>
              </h3>
              <span className="text-xs text-slate-500 dark:text-slate-400">
                {leaderboard.length} Contributors
              </span>
            </div>

            {leaderboard.length === 0 ? (
              <div className="text-center py-12 text-slate-500 dark:text-slate-400 space-y-3">
                <Trophy className="w-12 h-12 text-slate-300 dark:text-slate-600 mx-auto" />
                <p className="text-base font-semibold">Be the First Contributor!</p>
                <p className="text-xs max-w-sm mx-auto">
                  Submit a question from your subject and your name will appear at the top of the Hall of Fame.
                </p>
                <button
                  onClick={() => setActiveTab('contribute')}
                  className="px-4 py-2 rounded-xl bg-sky-600 text-white font-bold text-xs shadow-md transition"
                >
                  Submit a Question Now
                </button>
              </div>
            ) : (
              <div className="divide-y divide-slate-100 dark:divide-slate-800/80">
                {leaderboard.map((user) => (
                  <div
                    key={user.name}
                    className="py-3.5 flex items-center justify-between gap-4 hover:bg-slate-50/50 dark:hover:bg-slate-800/40 px-2 rounded-xl transition"
                  >
                    <div className="flex items-center gap-3 min-w-0">
                      <div className="w-8 h-8 rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 font-bold text-xs flex items-center justify-center flex-shrink-0">
                        #{user.rank}
                      </div>
                      <div className="min-w-0">
                        <div className="font-bold text-sm text-slate-900 dark:text-white truncate">
                          {user.name}
                        </div>
                        <div className="text-xs text-slate-500 dark:text-slate-400 truncate">
                          {user.college || 'Engineering Contributor'}
                        </div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 flex-shrink-0">
                      <span className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold border ${user.badgeColor}`}>
                        {user.badge}
                      </span>
                      <span className="font-extrabold text-sm text-sky-600 dark:text-sky-400">
                        {user.count} Qs
                      </span>
                    </div>
                  </div>
                ))}
              </div>
            )}
          </div>

        </div>
      )}

      {/* ========================================================= */}
      {/* TAB 4: ADMIN CODE EXPORT (FOR OPTION A SYNC) */}
      {/* ========================================================= */}
      {activeTab === 'export' && (
        <div className="space-y-6 animate-fadeIn max-w-4xl mx-auto">
          
          <div className="glass-card rounded-3xl p-6 sm:p-8 space-y-4">
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div>
                <h3 className="font-bold text-base text-slate-900 dark:text-white flex items-center gap-2">
                  <Code2 className="w-5 h-5 text-purple-500" />
                  <span>Admin: Export Questions to Code (`src/data/`)</span>
                </h3>
                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                  Copy and merge approved crowdsourced questions permanently into your static codebase anytime.
                </p>
              </div>

              <button
                onClick={handleCopyExport}
                className="px-4 py-2 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-bold text-xs shadow-md transition flex items-center gap-1.5"
              >
                {copiedExport ? <Check className="w-4 h-4" /> : <Copy className="w-4 h-4" />}
                <span>{copiedExport ? 'Copied JSON!' : 'Copy Code'}</span>
              </button>
            </div>

            <div className="relative">
              <pre className="p-4 rounded-2xl bg-slate-950 text-slate-200 text-xs font-mono overflow-x-auto max-h-96">
                {exportCodeString}
              </pre>
            </div>
          </div>

        </div>
      )}

    </div>
  );
}
