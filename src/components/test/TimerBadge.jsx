import React from 'react';
import { Timer as TimerIcon, Send, AlertTriangle } from 'lucide-react';

export default function TimerBadge({
  minutes,
  seconds,
  answeredCount,
  totalQuestions,
  onSubmit,
  isSubmitted,
}) {
  const isUrgent = minutes === 0 && seconds <= 60;
  const progressPercent = Math.round((answeredCount / totalQuestions) * 100);

  if (isSubmitted) return null;

  return (
    <div className="sticky top-20 z-30 mb-6 glass-panel rounded-2xl p-4 shadow-xl border border-slate-200/90 dark:border-slate-800 flex flex-wrap items-center justify-between gap-4 animate-fadeIn">
      
      {/* Time Display */}
      <div className="flex items-center gap-3">
        <div
          className={`w-11 h-11 rounded-xl flex items-center justify-center transition-colors ${
            isUrgent
              ? 'bg-rose-500 text-white animate-pulse'
              : 'bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400'
          }`}
        >
          {isUrgent ? <AlertTriangle className="w-6 h-6" /> : <TimerIcon className="w-6 h-6" />}
        </div>
        <div>
          <div className="text-xs font-semibold uppercase tracking-wider text-slate-500 dark:text-slate-400">
            Time Remaining
          </div>
          <div
            className={`text-xl font-bold font-mono ${
              isUrgent
                ? 'text-rose-600 dark:text-rose-400'
                : 'text-slate-900 dark:text-white'
            }`}
          >
            {String(minutes).padStart(2, '0')} : {String(seconds).padStart(2, '0')}
          </div>
        </div>
      </div>

      {/* Answered Progress */}
      <div className="flex-1 min-w-[160px] max-w-xs hidden sm:block">
        <div className="flex justify-between text-xs text-slate-600 dark:text-slate-400 mb-1.5 font-medium">
          <span>Answered Progress</span>
          <span>{answeredCount} / {totalQuestions} ({progressPercent}%)</span>
        </div>
        <div className="w-full h-2 bg-slate-200 dark:bg-slate-800 rounded-full overflow-hidden">
          <div
            className="h-full bg-gradient-to-r from-sky-500 to-emerald-500 rounded-full transition-all duration-300"
            style={{ width: `${progressPercent}%` }}
          />
        </div>
      </div>

      {/* Submit Button */}
      <button
        type="button"
        onClick={onSubmit}
        className="px-6 py-2.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-white font-semibold text-sm shadow-md shadow-emerald-600/20 flex items-center gap-2 transition hover:scale-105 active:scale-95"
      >
        <Send className="w-4 h-4" />
        <span>Submit Test</span>
      </button>

    </div>
  );
}
