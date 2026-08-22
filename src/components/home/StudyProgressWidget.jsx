import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Link } from 'react-router-dom';
import { 
  Target, 
  Flame, 
  RotateCcw, 
  CheckCircle2, 
  Star, 
  Sparkles
} from 'lucide-react';
import { getOverallProgressStats, resetUserProgress, getSubjectProgressStats } from '@/services/progress';
import { getBookmarksCount } from '@/services/bookmarks';
import { TECHNICAL_SUBJECTS, GK_SUBJECTS } from '@/data/subjects';

export default function StudyProgressWidget() {
  const [stats, setStats] = useState(getOverallProgressStats());
  const [bookmarksCount, setBookmarksCount] = useState(getBookmarksCount());
  const [showResetConfirm, setShowResetConfirm] = useState(false);

  const reloadStats = () => {
    setStats(getOverallProgressStats());
    setBookmarksCount(getBookmarksCount());
  };

  useEffect(() => {
    reloadStats();
    window.addEventListener('mcq_progress_updated', reloadStats);
    window.addEventListener('mcq_bookmarks_updated', reloadStats);
    return () => {
      window.removeEventListener('mcq_progress_updated', reloadStats);
      window.removeEventListener('mcq_bookmarks_updated', reloadStats);
    };
  }, []);

  const handleReset = () => {
    resetUserProgress();
    setShowResetConfirm(false);
    reloadStats();
  };

  // Get active subjects user has practiced
  const allSubjects = [...TECHNICAL_SUBJECTS, ...GK_SUBJECTS];
  const activeSubjects = allSubjects
    .map((sub) => {
      const p = getSubjectProgressStats(sub.slug, sub.questions ? sub.questions.length : sub.count);
      return { ...sub, ...p };
    })
    .filter((s) => s.attempted > 0)
    .slice(0, 4);

  return (
    <section className="glass-card rounded-2xl p-4 sm:p-5 bg-gradient-to-br from-white via-sky-50/40 to-white dark:from-slate-900 dark:via-sky-950/20 dark:to-slate-900 border border-sky-100 dark:border-sky-900/60 shadow-md animate-fadeIn space-y-3.5">
      
      {/* Compact Header */}
      <div className="flex items-center justify-between gap-3 pb-3 border-b border-slate-100 dark:border-slate-800/80">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-xl bg-sky-500 text-white flex items-center justify-center shadow-sm flex-shrink-0">
            <Target className="w-4 h-4" />
          </div>
          <h2 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white flex items-center gap-2">
            <span>Study Progress</span>
            <span className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-emerald-50 text-emerald-600 dark:bg-emerald-950/60 dark:text-emerald-400 border border-emerald-200/80 dark:border-emerald-800">
              {stats.totalAttempted > 0 ? 'Active' : 'Live'}
            </span>
          </h2>
        </div>

        <Link
          to="/search?saved=true"
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-xl bg-amber-500 hover:bg-amber-600 text-white text-xs font-bold shadow-sm transition flex-shrink-0"
        >
          <Star className="w-3.5 h-3.5 fill-white text-white" />
          <span>Starred Qs ({bookmarksCount}) &rarr;</span>
        </Link>
      </div>

      {/* Main Stats Grid */}
      <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
        
        {/* Total Solved */}
        <div className="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Solved</span>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-xl sm:text-2xl font-extrabold text-slate-900 dark:text-white">
              {stats.totalAttempted}
            </span>
            <span className="text-[10px] text-slate-400">/ 1,100+</span>
          </div>
          <div className="mt-1 text-[10px] text-emerald-600 dark:text-emerald-400 font-medium flex items-center gap-1">
            <CheckCircle2 className="w-3 h-3 flex-shrink-0" />
            <span>{stats.totalCorrect} correct</span>
          </div>
        </div>

        {/* Overall Accuracy */}
        <div className="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Accuracy</span>
          <div className="mt-1 flex items-baseline gap-1">
            <span className={`text-xl sm:text-2xl font-extrabold ${
              stats.totalAttempted === 0
                ? 'text-slate-400'
                : stats.accuracy >= 75
                ? 'text-emerald-600 dark:text-emerald-400'
                : stats.accuracy >= 50
                ? 'text-amber-500'
                : 'text-sky-600 dark:text-sky-400'
            }`}>
              {stats.accuracy}%
            </span>
          </div>
          <div className="mt-1.5 w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
            <div
              className="bg-emerald-500 h-1.5 rounded-full transition-all duration-500"
              style={{ width: `${stats.accuracy}%` }}
            />
          </div>
        </div>

        {/* Solved Today */}
        <div className="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Today</span>
          <div className="mt-1 flex items-baseline gap-1">
            <span className="text-xl sm:text-2xl font-extrabold text-sky-600 dark:text-sky-400">
              {stats.answeredToday}
            </span>
            <span className="text-[10px] text-slate-400">questions</span>
          </div>
          <span className="mt-1 text-[10px] text-slate-400">
            {stats.answeredToday > 0 ? 'Today\'s solved' : 'No practice yet'}
          </span>
        </div>

        {/* Daily Streak */}
        <div className="p-3 rounded-xl bg-white/90 dark:bg-slate-900/90 border border-slate-100 dark:border-slate-800 shadow-xs flex flex-col justify-between">
          <span className="text-[11px] font-medium text-slate-500 dark:text-slate-400">Day Streak</span>
          <div className="mt-1 flex items-center gap-1.5">
            <Flame className={`w-5 h-5 flex-shrink-0 ${stats.streak > 0 ? 'text-amber-500 animate-pulse' : 'text-slate-300 dark:text-slate-600'}`} />
            <span className={`text-xl sm:text-2xl font-extrabold ${stats.streak > 0 ? 'text-amber-500' : 'text-slate-400'}`}>
              {stats.streak} {stats.streak === 1 ? 'day' : 'days'}
            </span>
          </div>
          <span className="mt-1 text-[10px] text-slate-400">
            {stats.streak > 0 ? 'Active streak' : 'Build daily habit'}
          </span>
        </div>

      </div>

      {/* Active Subjects Progress Mini-Bars */}
      {activeSubjects.length > 0 && (
        <div className="space-y-2 pt-1 border-t border-slate-100 dark:border-slate-800/80">
          <span className="text-[11px] font-semibold text-slate-600 dark:text-slate-300">
            Subject Breakdown:
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {activeSubjects.map((sub) => (
              <Link
                key={sub.slug}
                to={`/${sub.slug}`}
                className="p-2.5 rounded-xl bg-white/80 dark:bg-slate-900/80 border border-slate-100 dark:border-slate-800 hover:border-sky-300 dark:hover:border-sky-700 transition group flex flex-col gap-1"
              >
                <div className="flex items-center justify-between text-xs">
                  <span className="font-semibold text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400 transition truncate max-w-[190px]">
                    {sub.title}
                  </span>
                  <span className="text-[10px] text-slate-500 dark:text-slate-400 font-medium">
                    {sub.attempted}/{sub.total} ({sub.accuracy}%)
                  </span>
                </div>
                <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-1.5 overflow-hidden">
                  <div
                    className="bg-gradient-to-r from-sky-500 to-emerald-500 h-1.5 rounded-full transition-all duration-500"
                    style={{ width: `${sub.percentage}%` }}
                  />
                </div>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Compact Reset Option */}
      {stats.totalAttempted > 0 && (
        <div className="pt-2 flex justify-end">
          <button
            onClick={() => setShowResetConfirm(true)}
            title="Reset your practice history"
            className="inline-flex items-center gap-1 text-[11px] text-slate-400 hover:text-rose-500 dark:hover:text-rose-400 transition cursor-pointer"
          >
            <RotateCcw className="w-3 h-3" />
            <span>Reset Progress</span>
          </button>
        </div>
      )}

      {/* Reset Confirmation Modal */}
      {showResetConfirm &&
        createPortal(
          <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn">
            <div className="bg-white dark:bg-slate-900 p-5 rounded-2xl max-w-sm w-full border border-slate-200 dark:border-slate-800 space-y-3 shadow-2xl">
              <h3 className="font-bold text-sm text-slate-900 dark:text-white">
                Reset Your Study Progress?
              </h3>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                This resets your solved questions count, accuracy score, and daily streak back to zero.
              </p>
              <div className="flex items-center justify-end gap-2 pt-1">
                <button
                  onClick={() => setShowResetConfirm(false)}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold text-slate-600 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 transition cursor-pointer"
                >
                  Cancel
                </button>
                <button
                  onClick={handleReset}
                  className="px-3 py-1.5 rounded-xl text-xs font-semibold text-white bg-rose-600 hover:bg-rose-500 transition shadow-sm cursor-pointer"
                >
                  Reset
                </button>
              </div>
            </div>
          </div>,
          document.body
        )}

    </section>
  );
}
