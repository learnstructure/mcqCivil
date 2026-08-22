import React, { useState, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { 
  BookOpen, 
  Globe, 
  Timer, 
  Download, 
  Search, 
  ArrowRight, 
  Sparkles, 
  ExternalLink,
  CheckCircle2,
  CircleHelp,
  Award,
  Layers,
  LayoutGrid,
  Building2,
  Mountain,
  Compass,
  Boxes,
  Calculator,
  Briefcase,
  TrendingUp,
  PencilRuler,
  Scale,
  Users,
  Trees,
  CloudSun,
  FileText,
  Kanban,
  Landmark,
  X,
  MessageSquare
} from 'lucide-react';
import { 
  TECHNICAL_SUBJECTS, 
  GK_SUBJECTS, 
  getTotalQuestionsCount,
  searchAllQuestions
} from '@/data/subjects';
import McqCard from '@/components/mcq/McqCard';

// Map icon string names to Lucide icons
const ICON_MAP = {
  Layers,
  Grid: LayoutGrid,
  Building2,
  Mountain,
  Compass,
  Boxes,
  Calculator,
  Briefcase,
  TrendingUp,
  PencilRuler,
  Scale,
  Globe,
  Users2: Users,
  Trees,
  CloudSun,
  FileText,
  Kanban,
  Landmark,
};

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState('');
  const totalQuestions = getTotalQuestionsCount();

  // Search questions across all subjects
  const questionSearchResults = useMemo(() => {
    if (!searchQuery.trim()) return [];
    return searchAllQuestions(searchQuery, 6);
  }, [searchQuery]);

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 animate-fadeIn">
      
      {/* Hero Section */}
      <section className="text-center space-y-6 max-w-4xl mx-auto pt-4">
        
        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200/80 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-semibold">
          <Sparkles className="w-3.5 h-3.5 text-sky-500" />
          <span>Loksewa, NEC & MSc Entrance Competitive Exam Prep</span>
        </div>

        <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-slate-900 dark:text-white leading-[1.15]">
          <span className="text-gradient">Civil Engineering MCQ</span>
        </h1>

        <p className="text-base sm:text-lg text-slate-600 dark:text-slate-300 max-w-2xl mx-auto leading-relaxed">
          Comprehensive collection of Civil Engineering multiple choice questions and Loksewa Nepal General Knowledge with instant answers, scoring, community discussions, and timed mock tests.
        </p>

        {/* Global Question Search Bar */}
        <div className="max-w-2xl mx-auto relative pt-2 text-left">
          <div className="relative flex items-center shadow-lg shadow-slate-200/40 dark:shadow-none rounded-2xl">
            <Search className="w-5 h-5 text-sky-500 absolute left-4 pointer-events-none" />
            <input
              type="text"
              placeholder="Search 1,500+ questions (e.g. Poisson's ratio, bending moment, theodolite, cement, IS 456)..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-10 py-4 rounded-2xl bg-white dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-sm sm:text-base outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-4 p-1 text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
              >
                <X className="w-5 h-5" />
              </button>
            )}
          </div>

          {/* Live Question Search Results Dropdown / Preview */}
          {searchQuery.trim() && (
            <div className="mt-3 p-4 sm:p-5 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-2xl space-y-4 animate-fadeIn">
              <div className="flex items-center justify-between pb-2 border-b border-slate-100 dark:border-slate-800">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                  Question Results ({questionSearchResults.length} previewed)
                </span>
                <Link
                  to={`/search?q=${encodeURIComponent(searchQuery)}`}
                  className="text-xs font-bold text-sky-600 dark:text-sky-400 hover:underline flex items-center gap-1"
                >
                  <span>Open Full Search Page</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>

              {questionSearchResults.length === 0 ? (
                <div className="py-6 text-center text-xs text-slate-500 dark:text-slate-400">
                  No questions found matching "{searchQuery}". Try different keywords.
                </div>
              ) : (
                <div className="space-y-4 max-h-[480px] overflow-y-auto pr-1">
                  {questionSearchResults.map((mcq, idx) => (
                    <div key={`${mcq.subjectSlug}-${mcq.serialno}`} className="space-y-1">
                      <div className="flex items-center justify-between text-xs">
                        <span className="px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 font-bold text-[10px] uppercase">
                          {mcq.subjectTitle} • Q#{mcq.serialno}
                        </span>
                        <Link
                          to={`/${mcq.subjectSlug}`}
                          className="text-slate-400 hover:text-sky-600 text-[11px]"
                        >
                          Go to Subject &rarr;
                        </Link>
                      </div>
                      <McqCard
                        mcq={mcq}
                        subjectSlug={mcq.subjectSlug}
                        index={idx}
                      />
                    </div>
                  ))}
                  
                  <div className="text-center pt-2">
                    <Link
                      to={`/search?q=${encodeURIComponent(searchQuery)}`}
                      className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-sky-50 dark:bg-sky-950/60 text-sky-700 dark:text-sky-300 text-xs font-bold hover:bg-sky-100 transition"
                    >
                      <span>View all matching questions in full search page</span>
                      <ArrowRight className="w-3.5 h-3.5" />
                    </Link>
                  </div>
                </div>
              )}
            </div>
          )}
        </div>

        {/* Quick Highlights Bar */}
        <div className="flex flex-wrap items-center justify-center gap-3 pt-2 text-xs text-slate-600 dark:text-slate-400">
          <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
            <strong>18 Core Subjects</strong>
          </span>
          <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
            <strong>{totalQuestions}+ MCQs</strong>
          </span>
          <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-amber-500" />
            <strong>Timed Mock Exams</strong>
          </span>
          <span className="flex items-center gap-1 bg-slate-100 dark:bg-slate-800/80 px-3 py-1.5 rounded-xl border border-slate-200/80 dark:border-slate-800">
            <CheckCircle2 className="w-3.5 h-3.5 text-purple-500" />
            <strong>100% Free</strong>
          </span>
        </div>

      </section>

      {/* Migration Notice to structurerealm.com */}
      <section className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden border border-sky-200 dark:border-sky-900/60 bg-gradient-to-br from-sky-50/70 via-white to-teal-50/70 dark:from-slate-900 dark:via-slate-900/90 dark:to-sky-950/40">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div className="space-y-2 max-w-2xl">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-700 dark:text-sky-300">
              <Sparkles className="w-4 h-4 text-sky-500" />
              <span>Looking for Structural Calculators & Design Tools?</span>
            </div>
            <h2 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">
              Visit our partner portal StructureRealm.com
            </h2>
            <p className="text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              The structural engineering blogs, FEM beam/column calculators, numerical design tools, and machine learning modules have moved to our dedicated structural analysis platform.
            </p>
          </div>
          <a
            href="https://structurerealm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="flex-shrink-0 inline-flex items-center gap-2 px-5 py-3 rounded-2xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-lg shadow-sky-600/25 transition hover:scale-105 active:scale-95"
          >
            <span>Visit StructureRealm</span>
            <ExternalLink className="w-4 h-4" />
          </a>
        </div>
      </section>

      {/* Technical Subjects Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-sky-600 dark:text-sky-400 font-bold text-xs uppercase tracking-wider">
              <BookOpen className="w-4 h-4" />
              <span>Technical Civil Engineering</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              Core Engineering Subjects
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {TECHNICAL_SUBJECTS.length} Subjects available
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {TECHNICAL_SUBJECTS.map((sub) => {
            const IconComp = ICON_MAP[sub.icon] || BookOpen;
            return (
              <Link
                key={sub.slug}
                to={`/${sub.slug}`}
                className="glass-card rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-sky-100 dark:bg-sky-950/70 text-sky-600 dark:text-sky-400 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {sub.rawQuestions.length} Questions
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                      {sub.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                      {sub.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-sky-600 dark:text-sky-400">
                  <span>Practice MCQs</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* General Knowledge Section */}
      <section className="space-y-6">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-2 pb-2 border-b border-slate-200 dark:border-slate-800">
          <div>
            <div className="flex items-center gap-2 text-emerald-600 dark:text-emerald-400 font-bold text-xs uppercase tracking-wider">
              <Globe className="w-4 h-4" />
              <span>PSC Loksewa Nepal GK</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
              General Knowledge & Governance
            </h2>
          </div>
          <span className="text-xs text-slate-500 dark:text-slate-400">
            {GK_SUBJECTS.length} Subjects available
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-5">
          {GK_SUBJECTS.map((sub) => {
            const IconComp = ICON_MAP[sub.icon] || Globe;
            return (
              <Link
                key={sub.slug}
                to={`/${sub.slug}`}
                className="glass-card rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:shadow-xl hover:-translate-y-1 group flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="flex items-center justify-between">
                    <div className="w-10 h-10 rounded-xl bg-emerald-100 dark:bg-emerald-950/70 text-emerald-600 dark:text-emerald-400 flex items-center justify-center shadow-sm group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="px-2.5 py-1 rounded-full text-xs font-semibold bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300">
                      {sub.rawQuestions.length} Questions
                    </span>
                  </div>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                      {sub.title}
                    </h3>
                    <p className="text-xs text-slate-600 dark:text-slate-400 line-clamp-2 mt-1 leading-relaxed">
                      {sub.description}
                    </p>
                  </div>
                </div>

                <div className="mt-5 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex items-center justify-between text-xs font-semibold text-emerald-600 dark:text-emerald-400">
                  <span>Practice GK</span>
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Feature Action Cards Grid */}
      <section className="grid grid-cols-1 md:grid-cols-2 gap-6 pt-4">
        
        {/* Online Test Promo */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-amber-500/10 via-transparent to-transparent border border-amber-200 dark:border-amber-900/60 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-amber-500/20 text-amber-600 dark:text-amber-400 flex items-center justify-center">
              <Timer className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Take an Online Timed Test
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Test your speed and accuracy under real exam conditions. Choose between 10-minute subject quick mocks or a comprehensive 45-minute full test.
            </p>
          </div>
          <div>
            <Link
              to="/test"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-amber-600 hover:bg-amber-500 text-white font-semibold text-xs shadow-md shadow-amber-600/20 transition"
            >
              <span>Start Online Test</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

        {/* Free Downloads Promo */}
        <div className="glass-card rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-purple-500/10 via-transparent to-transparent border border-purple-200 dark:border-purple-900/60 flex flex-col justify-between space-y-4">
          <div className="space-y-2">
            <div className="w-12 h-12 rounded-2xl bg-purple-500/20 text-purple-600 dark:text-purple-400 flex items-center justify-center">
              <Download className="w-6 h-6" />
            </div>
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Free Lecture Notes & Slides
            </h3>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Download high quality university lecture notes, solved numericals on Steel, RCC, Mechanics, and Computational Techniques.
            </p>
          </div>
          <div>
            <Link
              to="/downloads"
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs shadow-md shadow-purple-600/20 transition"
            >
              <span>View Free Downloads</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
        </div>

      </section>

    </div>
  );
}
