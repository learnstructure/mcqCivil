import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, XCircle, MessageSquare, Share2, Copy, Check } from 'lucide-react';
import { useSound } from '@/context/SoundContext';
import ShareModal from '@/components/ui/ShareModal';

export default function McqCard({ mcq, subjectSlug, index }) {
  const [selectedOption, setSelectedOption] = useState(null);
  const [copied, setCopied] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);
  const { playCorrectSound } = useSound();

  const handleSelectOption = (optKey) => {
    setSelectedOption(optKey);
    if (optKey === mcq.correct) {
      playCorrectSound();
    }
  };

  const handleCopyQuestion = async () => {
    const text = `Q${mcq.serialno}: ${mcq.question}\n(A) ${mcq.optionA}\n(B) ${mcq.optionB}\n(C) ${mcq.optionC}\n(D) ${mcq.optionD}`;
    try {
      await navigator.clipboard.writeText(text);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const options = [
    { key: 'a', label: 'A', text: mcq.optionA },
    { key: 'b', label: 'B', text: mcq.optionB },
    { key: 'c', label: 'C', text: mcq.optionC },
    { key: 'd', label: 'D', text: mcq.optionD },
  ];

  const shareUrl = `${window.location.origin}/${subjectSlug}/${mcq.id}`;

  return (
    <article
      id={`q-${mcq.serialno}`}
      className="glass-card rounded-2xl p-5 sm:p-6 transition-all duration-200 hover:shadow-lg dark:hover:border-slate-700/80 group"
    >
      {/* Question Header */}
      <div className="flex items-start justify-between gap-3 mb-4">
        <div className="flex items-start gap-3">
          <span className="flex-shrink-0 flex items-center justify-center w-8 h-8 rounded-xl bg-sky-100 dark:bg-sky-950/60 text-sky-700 dark:text-sky-400 font-bold text-sm">
            {mcq.serialno}
          </span>
          <h3 className="text-base sm:text-lg font-medium text-slate-900 dark:text-slate-100 leading-relaxed pt-0.5">
            {mcq.question}
          </h3>
        </div>
      </div>

      {/* Options Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5 my-4">
        {options.map((opt) => {
          const isSelected = selectedOption === opt.key;
          const isCorrect = mcq.correct === opt.key;

          let optionStyle =
            'border-slate-200 dark:border-slate-800 hover:border-sky-300 dark:hover:border-slate-700 bg-slate-50/70 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300';
          let badgeStyle =
            'bg-slate-200 dark:bg-slate-800 text-slate-700 dark:text-slate-300';

          if (selectedOption !== null) {
            if (isCorrect) {
              optionStyle =
                'border-emerald-500 bg-emerald-50 dark:bg-emerald-950/40 text-emerald-950 dark:text-emerald-200 ring-1 ring-emerald-500 animate-pulseCorrect';
              badgeStyle = 'bg-emerald-500 text-white font-bold';
            } else if (isSelected) {
              optionStyle =
                'border-rose-500 bg-rose-50 dark:bg-rose-950/40 text-rose-950 dark:text-rose-200 ring-1 ring-rose-500';
              badgeStyle = 'bg-rose-500 text-white font-bold';
            }
          }

          return (
            <button
              key={opt.key}
              type="button"
              onClick={() => handleSelectOption(opt.key)}
              className={`w-full text-left p-3.5 rounded-xl border transition-all duration-150 flex items-start gap-3 ${optionStyle}`}
            >
              <span
                className={`flex-shrink-0 w-6 h-6 rounded-lg text-xs flex items-center justify-center font-semibold transition-colors ${badgeStyle}`}
              >
                {opt.label}
              </span>
              <span className="text-sm font-normal flex-1 pt-0.5 leading-snug">
                {opt.text}
              </span>
              {selectedOption !== null && isCorrect && (
                <CheckCircle2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400 flex-shrink-0" />
              )}
              {selectedOption !== null && isSelected && !isCorrect && (
                <XCircle className="w-5 h-5 text-rose-500 flex-shrink-0" />
              )}
            </button>
          );
        })}
      </div>

      {/* Answer status alert if answered */}
      {selectedOption !== null && (
        <div
          className={`mt-3 p-3 rounded-xl text-xs flex items-center justify-between animate-fadeIn ${
            selectedOption === mcq.correct
              ? 'bg-emerald-100/70 dark:bg-emerald-950/40 text-emerald-800 dark:text-emerald-300 border border-emerald-200 dark:border-emerald-900'
              : 'bg-rose-100/70 dark:bg-rose-950/40 text-rose-800 dark:text-rose-300 border border-rose-200 dark:border-rose-900'
          }`}
        >
          <span>
            {selectedOption === mcq.correct
              ? '🎉 Correct answer! Well done.'
              : `❌ Incorrect. The correct option is (${mcq.correct.toUpperCase()}).`}
          </span>
          <span className="font-semibold text-[11px] uppercase tracking-wide">
            Correct: Option {mcq.correct.toUpperCase()}
          </span>
        </div>
      )}

      {/* Card Actions Footer */}
      <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800/80 flex flex-wrap items-center justify-between gap-2 text-xs text-slate-500 dark:text-slate-400">
        <Link
          to={`/${subjectSlug}/${mcq.id}`}
          state={{
            id: mcq.id,
            ques: mcq.question,
            quesno: mcq.serialno,
            ansA: mcq.optionA,
            ansB: mcq.optionB,
            ansC: mcq.optionC,
            ansD: mcq.optionD,
            correct: mcq.correct,
            path: `/${subjectSlug}`,
          }}
          className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-sky-50 dark:bg-sky-950/50 text-sky-700 dark:text-sky-300 hover:bg-sky-100 dark:hover:bg-sky-900/60 font-medium transition"
        >
          <MessageSquare className="w-3.5 h-3.5" />
          <span>Show Discussion / Comment</span>
        </Link>

        <div className="flex items-center gap-1">
          <button
            type="button"
            onClick={handleCopyQuestion}
            title="Copy question text"
            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition"
          >
            {copied ? <Check className="w-4 h-4 text-emerald-500" /> : <Copy className="w-4 h-4" />}
          </button>
          <button
            type="button"
            onClick={() => setIsShareOpen(true)}
            title="Share question"
            className="p-1.5 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-500 hover:text-slate-700 dark:hover:text-slate-300 transition"
          >
            <Share2 className="w-4 h-4" />
          </button>
        </div>
      </div>

      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        url={shareUrl}
        title={`Civil Engineering MCQ Q${mcq.serialno}: ${mcq.question}`}
      />
    </article>
  );
}
