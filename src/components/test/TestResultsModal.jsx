import React, { useEffect } from 'react';
import { createPortal } from 'react-dom';
import { Trophy, CheckCircle2, XCircle, AlertCircle, RotateCcw, ArrowLeft, Award, X } from 'lucide-react';
import confetti from 'canvas-confetti';
import { Link } from 'react-router-dom';

export default function TestResultsModal({
  score,
  totalQuestions,
  incorrectCount,
  unansweredCount,
  onRetake,
  onClose,
  subjectTitle,
}) {
  const percentage = Math.round((score / totalQuestions) * 100);

  // Lock body scroll while modal is open
  useEffect(() => {
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, []);

  useEffect(() => {
    if (percentage >= 60) {
      try {
        confetti({
          particleCount: 80,
          spread: 70,
          origin: { y: 0.6 },
        });
      } catch {
        // Fallback
      }
    }
  }, [percentage]);

  let statusBadge = {
    title: 'Outstanding Performance!',
    desc: 'You have demonstrated excellent mastery in this subject.',
    color: 'text-emerald-500',
    bg: 'bg-emerald-50 dark:bg-emerald-950/50 border-emerald-200 dark:border-emerald-900',
  };

  if (percentage < 40) {
    statusBadge = {
      title: 'Keep Practicing!',
      desc: 'Review the explanations below and try practicing more questions.',
      color: 'text-rose-500',
      bg: 'bg-rose-50 dark:bg-rose-950/50 border-rose-200 dark:border-rose-900',
    };
  } else if (percentage < 60) {
    statusBadge = {
      title: 'Good Effort!',
      desc: 'You are on the right track. A bit more revision will boost your score.',
      color: 'text-amber-500',
      bg: 'bg-amber-50 dark:bg-amber-950/50 border-amber-200 dark:border-amber-900',
    };
  } else if (percentage < 80) {
    statusBadge = {
      title: 'Great Score!',
      desc: 'Solid understanding of the core civil engineering concepts.',
      color: 'text-sky-500',
      bg: 'bg-sky-50 dark:bg-sky-950/50 border-sky-200 dark:border-sky-900',
    };
  }

  const modalContent = (
    <div className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm animate-fadeIn overflow-y-auto">
      <div className="relative w-full max-w-lg p-6 sm:p-8 bg-white dark:bg-slate-900 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white text-center space-y-6 my-auto">
        
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 p-1.5 rounded-xl text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          aria-label="Close"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Header Badge */}
        <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gradient-to-tr from-sky-500 to-emerald-500 text-white shadow-xl shadow-sky-500/20 mx-auto">
          <Trophy className="w-9 h-9" />
        </div>

        <div>
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            {subjectTitle} • Test Results
          </span>
          <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white mt-1">
            {score} <span className="text-lg font-normal text-slate-500">/ {totalQuestions}</span>
          </h2>
          <div className="text-lg font-bold text-sky-600 dark:text-sky-400 mt-0.5">
            {percentage}% Score
          </div>
        </div>

        {/* Status Box */}
        <div className={`p-4 rounded-2xl border ${statusBadge.bg} text-left space-y-1`}>
          <div className={`text-sm font-bold flex items-center gap-1.5 ${statusBadge.color}`}>
            <Award className="w-4 h-4" />
            <span>{statusBadge.title}</span>
          </div>
          <p className="text-xs text-slate-600 dark:text-slate-300">
            {statusBadge.desc}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-3 gap-3">
          <div className="p-3 rounded-2xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-100 dark:border-emerald-900/60 text-center">
            <div className="flex items-center justify-center text-emerald-600 dark:text-emerald-400 mb-1">
              <CheckCircle2 className="w-4 h-4" />
            </div>
            <div className="text-lg font-bold text-emerald-700 dark:text-emerald-300">{score}</div>
            <div className="text-[11px] text-emerald-600 dark:text-emerald-400 font-medium">Correct</div>
          </div>

          <div className="p-3 rounded-2xl bg-rose-50 dark:bg-rose-950/40 border border-rose-100 dark:border-rose-900/60 text-center">
            <div className="flex items-center justify-center text-rose-600 dark:text-rose-400 mb-1">
              <XCircle className="w-4 h-4" />
            </div>
            <div className="text-lg font-bold text-rose-700 dark:text-rose-300">{incorrectCount}</div>
            <div className="text-[11px] text-rose-600 dark:text-rose-400 font-medium">Wrong</div>
          </div>

          <div className="p-3 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-100 dark:border-amber-900/60 text-center">
            <div className="flex items-center justify-center text-amber-600 dark:text-amber-400 mb-1">
              <AlertCircle className="w-4 h-4" />
            </div>
            <div className="text-lg font-bold text-amber-700 dark:text-amber-300">{unansweredCount}</div>
            <div className="text-[11px] text-amber-600 dark:text-amber-400 font-medium">Skipped</div>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col sm:flex-row gap-3 pt-2">
          <button
            type="button"
            onClick={onClose}
            className="flex-1 py-3 px-4 rounded-xl bg-sky-600 hover:bg-sky-500 text-white font-semibold text-sm shadow-md shadow-sky-600/20 transition cursor-pointer"
          >
            Review All Answers
          </button>
          
          <button
            type="button"
            onClick={onRetake}
            className="py-3 px-4 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 font-semibold text-sm transition flex items-center justify-center gap-2 cursor-pointer"
          >
            <RotateCcw className="w-4 h-4" />
            <span>Retake</span>
          </button>
        </div>

        <div>
          <Link
            to="/test"
            className="inline-flex items-center gap-1 text-xs text-slate-500 hover:text-slate-800 dark:hover:text-slate-300 transition"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Test Selection Hub</span>
          </Link>
        </div>

      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
