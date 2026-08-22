import React from 'react';

export default function QuestionNavigator({
  totalQuestions,
  answers,
  questions,
  isSubmitted,
}) {
  const scrollToQ = (serialno) => {
    const el = document.getElementById(`test-q-${serialno}`);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  };

  return (
    <div className="glass-card rounded-2xl p-4 sm:p-5 mb-6">
      <div className="flex items-center justify-between text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400 mb-3">
        <span>Question Palette</span>
        <span>Click to jump</span>
      </div>

      <div className="flex flex-wrap gap-2">
        {Array.from({ length: totalQuestions }).map((_, idx) => {
          const serialno = idx + 1;
          const userAns = answers[serialno];
          const correctAns = questions[idx]?.correct;

          let colorStyle =
            'bg-slate-100 dark:bg-slate-800 text-slate-700 dark:text-slate-300 border-slate-200 dark:border-slate-700';

          if (!isSubmitted) {
            if (userAns) {
              colorStyle = 'bg-sky-600 text-white border-sky-600 font-bold';
            }
          } else {
            if (userAns === correctAns) {
              colorStyle = 'bg-emerald-600 text-white border-emerald-600 font-bold';
            } else if (userAns) {
              colorStyle = 'bg-rose-600 text-white border-rose-600 font-bold';
            } else {
              colorStyle = 'bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 border-amber-300 dark:border-amber-800';
            }
          }

          return (
            <button
              key={serialno}
              type="button"
              onClick={() => scrollToQ(serialno)}
              className={`w-8 h-8 rounded-lg text-xs border flex items-center justify-center transition-all hover:scale-110 ${colorStyle}`}
              title={`Jump to Question ${serialno}`}
            >
              {serialno}
            </button>
          );
        })}
      </div>

      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex flex-wrap items-center gap-4 text-[11px] text-slate-500 dark:text-slate-400">
        {!isSubmitted ? (
          <>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-sky-600"></span>
              <span>Answered</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-slate-200 dark:bg-slate-700"></span>
              <span>Unanswered</span>
            </div>
          </>
        ) : (
          <>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-emerald-600"></span>
              <span>Correct</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-rose-600"></span>
              <span>Incorrect</span>
            </div>
            <div className="flex items-center gap-1.5">
              <span className="w-3 h-3 rounded bg-amber-200 dark:bg-amber-800"></span>
              <span>Skipped</span>
            </div>
          </>
        )}
      </div>
    </div>
  );
}
