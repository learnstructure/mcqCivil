import React from 'react';
import { CheckCircle2, XCircle } from 'lucide-react';

export default function TestQuestion({
  serialno,
  question,
  optionA,
  optionB,
  optionC,
  optionD,
  correct,
  selectedAnswer,
  onSelectAnswer,
  isSubmitted,
}) {
  const options = [
    { key: 'a', label: 'A', text: optionA },
    { key: 'b', label: 'B', text: optionB },
    { key: 'c', label: 'C', text: optionC },
    { key: 'd', label: 'D', text: optionD },
  ];

  return (
    <div
      id={`test-q-${serialno}`}
      className={`glass-card rounded-2xl p-5 sm:p-6 transition-all duration-200 ${
        isSubmitted
          ? selectedAnswer === correct
            ? 'border-emerald-500/40 bg-emerald-50/20 dark:bg-emerald-950/10'
            : selectedAnswer
            ? 'border-rose-500/40 bg-rose-50/20 dark:bg-rose-950/10'
            : 'border-amber-500/40 bg-amber-50/10 dark:bg-amber-950/10'
          : ''
      }`}
    >
      <div className="flex items-start gap-3 mb-4">
        <span
          className={`flex-shrink-0 w-8 h-8 rounded-xl font-bold text-sm flex items-center justify-center ${
            isSubmitted
              ? selectedAnswer === correct
                ? 'bg-emerald-500 text-white'
                : 'bg-rose-500 text-white'
              : selectedAnswer
              ? 'bg-sky-600 text-white'
              : 'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300'
          }`}
        >
          {serialno}
        </span>
        <h3 className="text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100 pt-0.5 leading-relaxed">
          {question}
        </h3>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-3">
        {options.map((opt) => {
          const isSelected = selectedAnswer === opt.key;
          const isCorrect = correct === opt.key;

          let btnStyle =
            'border-slate-200 dark:border-slate-800 bg-slate-50/60 dark:bg-slate-900/40 text-slate-700 dark:text-slate-300 hover:border-sky-300 dark:hover:border-slate-700';
          let badgeStyle =
            'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-400';

          if (!isSubmitted) {
            if (isSelected) {
              btnStyle =
                'border-sky-500 bg-sky-50 dark:bg-sky-950/50 text-sky-900 dark:text-sky-200 ring-2 ring-sky-500/40 font-medium';
              badgeStyle = 'bg-sky-600 text-white';
            }
          } else {
            if (isCorrect) {
              btnStyle =
                'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/50 text-emerald-900 dark:text-emerald-200 ring-2 ring-emerald-500 font-semibold';
              badgeStyle = 'bg-emerald-500 text-white';
            } else if (isSelected && !isCorrect) {
              btnStyle =
                'border-rose-500 bg-rose-50 dark:bg-rose-950/50 text-rose-900 dark:text-rose-200 ring-2 ring-rose-500';
              badgeStyle = 'bg-rose-500 text-white';
            }
          }

          return (
            <button
              key={opt.key}
              type="button"
              disabled={isSubmitted}
              onClick={() => onSelectAnswer(serialno, opt.key)}
              className={`w-full text-left p-3.5 rounded-xl border transition-all flex items-start gap-3 disabled:cursor-default ${btnStyle}`}
            >
              <span
                className={`flex-shrink-0 w-6 h-6 rounded-lg text-xs flex items-center justify-center font-bold transition-colors ${badgeStyle}`}
              >
                {opt.label}
              </span>
              <span className="text-sm flex-1 pt-0.5">{opt.text}</span>
              {isSubmitted && isCorrect && (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              )}
              {isSubmitted && isSelected && !isCorrect && (
                <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {isSubmitted && (
        <div className="mt-2 text-xs font-medium text-slate-500 dark:text-slate-400 flex items-center justify-between">
          <span>
            {selectedAnswer === correct ? (
              <span className="text-emerald-600 dark:text-emerald-400 font-semibold">✓ Correct</span>
            ) : selectedAnswer ? (
              <span className="text-rose-600 dark:text-rose-400 font-semibold">✗ Incorrect (Your answer: {selectedAnswer.toUpperCase()})</span>
            ) : (
              <span className="text-amber-600 dark:text-amber-400 font-semibold">⚠ Not Answered</span>
            )}
          </span>
          <span className="text-slate-700 dark:text-slate-300">
            Correct Option: <strong className="text-emerald-600 dark:text-emerald-400">{correct.toUpperCase()}</strong>
          </span>
        </div>
      )}
    </div>
  );
}
