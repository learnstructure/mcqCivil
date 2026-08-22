import React, { useState, useMemo, useEffect } from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { getSubjectBySlug } from '@/data/subjects';
import McqCard from '@/components/mcq/McqCard';
import ShareModal from '@/components/ui/ShareModal';
import { getSubjectProgressStats } from '@/services/progress';
import { isQuestionBookmarked } from '@/services/bookmarks';
import { 
  Search, 
  ChevronUp, 
  ChevronDown, 
  BookOpen, 
  Layers, 
  ArrowLeft, 
  Sparkles,
  Info,
  Star,
  Share2,
  CheckCircle2,
  RotateCcw
} from 'lucide-react';

export default function McqPage() {
  const { subject } = useParams();
  const [filterText, setFilterText] = useState('');
  const [jumpNumber, setJumpNumber] = useState('');
  const [onlySaved, setOnlySaved] = useState(false);
  const [isShareOpen, setIsShareOpen] = useState(false);

  const subjectData = useMemo(() => {
    return getSubjectBySlug(subject);
  }, [subject]);

  const questions = subjectData?.questions || [];

  // Subject Progress State
  const [progress, setProgress] = useState(() =>
    subjectData ? getSubjectProgressStats(subject, questions.length) : null
  );

  const reloadProgress = () => {
    if (subjectData) {
      setProgress(getSubjectProgressStats(subject, questions.length));
    }
  };

  useEffect(() => {
    reloadProgress();
    window.addEventListener('mcq_progress_updated', reloadProgress);
    window.addEventListener('mcq_bookmarks_updated', reloadProgress);
    return () => {
      window.removeEventListener('mcq_progress_updated', reloadProgress);
      window.removeEventListener('mcq_bookmarks_updated', reloadProgress);
    };
  }, [subject, questions.length]);

  // Update document title and meta description dynamically
  useEffect(() => {
    if (subjectData) {
      document.title = `${subjectData.title} MCQs | Civil Engineering MCQ`;
    }
  }, [subjectData]);

  // Count starred questions for this subject
  const savedCount = useMemo(() => {
    return questions.filter((q) => isQuestionBookmarked(q.id)).length;
  }, [questions, progress]);

  // Filter questions by text and saved status
  const filteredQuestions = useMemo(() => {
    let list = questions;
    if (onlySaved) {
      list = list.filter((q) => isQuestionBookmarked(q.id));
    }
    if (!filterText.trim()) return list;

    const q = filterText.toLowerCase();
    return list.filter(
      (item) =>
        item.question.toLowerCase().includes(q) ||
        item.optionA.toLowerCase().includes(q) ||
        item.optionB.toLowerCase().includes(q) ||
        item.optionC.toLowerCase().includes(q) ||
        item.optionD.toLowerCase().includes(q)
    );
  }, [questions, filterText, onlySaved, progress]);

  if (!subjectData) {
    return <Navigate to="/" replace />;
  }

  const handleJump = (e) => {
    e.preventDefault();
    const num = parseInt(jumpNumber, 10);
    if (!isNaN(num) && num >= 1 && num <= questions.length) {
      const el = document.getElementById(`q-${num}`);
      if (el) {
        el.scrollIntoView({ behavior: 'smooth', block: 'center' });
      }
    }
  };

  const scrollJump = (direction) => {
    window.scrollBy({
      top: direction * window.innerHeight * 4,
      behavior: 'smooth',
    });
  };

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8 animate-fadeIn">
      
      {/* Subject Header Banner */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden bg-gradient-to-br from-white via-sky-50/40 to-white dark:from-slate-900 dark:via-sky-950/20 dark:to-slate-900 border border-slate-200/80 dark:border-slate-800">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="space-y-2">
            <Link
              to="/"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline mb-1"
            >
              <ArrowLeft className="w-3.5 h-3.5" />
              <span>Back to All Subjects</span>
            </Link>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              {subjectData.title}
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 max-w-2xl leading-relaxed">
              {subjectData.description}
            </p>
          </div>

          <div className="flex sm:flex-col items-center sm:items-end justify-between gap-2 border-t sm:border-t-0 pt-3 sm:pt-0 border-slate-100 dark:border-slate-800">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full text-xs font-bold bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800">
                {questions.length} Questions
              </span>
              <button
                onClick={() => setIsShareOpen(true)}
                title="Share this subject"
                className="p-1.5 rounded-xl border border-slate-200 dark:border-slate-700 text-slate-500 hover:text-sky-600 hover:bg-slate-50 dark:hover:bg-slate-800 transition"
              >
                <Share2 className="w-3.5 h-3.5" />
              </button>
            </div>
            <Link
              to={`/test/${subject}`}
              className="text-xs font-semibold text-amber-600 dark:text-amber-400 hover:underline flex items-center gap-1"
            >
              <span>Take Timed Test &rarr;</span>
            </Link>
          </div>
        </div>

        {/* Live Subject Progress Meter */}
        {progress && (
          <div className="mt-5 pt-4 border-t border-slate-200/80 dark:border-slate-800/80 space-y-2">
            <div className="flex items-center justify-between text-xs font-semibold text-slate-700 dark:text-slate-300">
              <span className="flex items-center gap-1.5 text-emerald-600 dark:text-emerald-400">
                <CheckCircle2 className="w-4 h-4" />
                <span>
                  {progress.attempted} of {progress.total} answered ({progress.percentage}%)
                </span>
              </span>
              <span className="text-slate-500 dark:text-slate-400 font-normal">
                Accuracy: <strong className="text-slate-900 dark:text-white font-semibold">{progress.accuracy}%</strong> {progress.attempted > 0 && `(${progress.correct} correct)`}
              </span>
            </div>
            <div className="w-full bg-slate-100 dark:bg-slate-800 rounded-full h-2 overflow-hidden">
              <div
                className="bg-gradient-to-r from-sky-500 to-emerald-500 h-2 rounded-full transition-all duration-500"
                style={{ width: `${progress.percentage}%` }}
              />
            </div>
          </div>
        )}

        {/* Search, Filter & Jump Tools */}
        <div className="mt-5 pt-5 border-t border-slate-200/80 dark:border-slate-800/80 flex flex-col sm:flex-row gap-3">
          
          {/* Starred / All toggle */}
          <div className="flex items-center gap-1.5 p-1 rounded-2xl bg-slate-100 dark:bg-slate-800/80 border border-slate-200/80 dark:border-slate-700 self-start">
            <button
              onClick={() => setOnlySaved(false)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition ${
                !onlySaved
                  ? 'bg-white dark:bg-slate-900 text-slate-900 dark:text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-slate-900'
              }`}
            >
              All ({questions.length})
            </button>
            <button
              onClick={() => setOnlySaved(true)}
              className={`px-3 py-1.5 rounded-xl text-xs font-semibold transition flex items-center gap-1.5 ${
                onlySaved
                  ? 'bg-amber-500 text-white shadow-sm'
                  : 'text-slate-600 dark:text-slate-400 hover:text-amber-500'
              }`}
            >
              <Star className={`w-3 h-3 ${onlySaved ? 'fill-white' : ''}`} />
              <span>Starred ({savedCount})</span>
            </button>
          </div>

          {/* Question Filter Input */}
          <div className="relative flex-1">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder={`Search within ${subjectData.title}...`}
              value={filterText}
              onChange={(e) => setFilterText(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-sky-500"
            />
          </div>

          {/* Jump to Question Number */}
          <form onSubmit={handleJump} className="flex items-center gap-2">
            <input
              type="number"
              min="1"
              max={questions.length}
              placeholder={`Q# (1-${questions.length})`}
              value={jumpNumber}
              onChange={(e) => setJumpNumber(e.target.value)}
              className="w-28 px-3 py-2 rounded-xl text-xs sm:text-sm bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white outline-none focus:ring-2 focus:ring-sky-500"
            />
            <button
              type="submit"
              className="px-3.5 py-2 rounded-xl bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 dark:hover:bg-slate-600 text-white text-xs font-semibold transition"
            >
              Jump
            </button>
          </form>
        </div>
      </div>

      {/* MCQs List */}
      <div className="space-y-5">
        {filteredQuestions.length === 0 ? (
          <div className="glass-card rounded-2xl p-12 text-center text-slate-500 dark:text-slate-400 space-y-2">
            <Info className="w-8 h-8 text-slate-400 mx-auto" />
            <p className="text-base font-semibold">
              {onlySaved ? 'No starred questions in this subject yet' : 'No matching questions found'}
            </p>
            <p className="text-xs">
              {onlySaved
                ? 'Click the star (★) icon on any question to bookmark it here for quick revision.'
                : 'Try searching for different terms or clear the search filter.'}
            </p>
          </div>
        ) : (
          filteredQuestions.map((mcq, idx) => (
            <McqCard
              key={mcq.id || mcq.serialno}
              mcq={mcq}
              subjectSlug={subject}
              index={idx}
            />
          ))
        )}
      </div>

      {/* Floating Fast Jump Controls */}
      <aside aria-label="Page navigation controls" className="fixed bottom-6 left-6 z-30 flex flex-col gap-2">
        <button
          onClick={() => scrollJump(-1)}
          type="button"
          title="Jump ~20 questions backward"
          className="p-2.5 rounded-xl glass-panel shadow-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronUp className="w-5 h-5" />
        </button>
        <button
          onClick={() => scrollJump(1)}
          type="button"
          title="Jump ~20 questions forward"
          className="p-2.5 rounded-xl glass-panel shadow-lg border border-slate-200 dark:border-slate-800 text-slate-700 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition hover:scale-105 active:scale-95 cursor-pointer"
        >
          <ChevronDown className="w-5 h-5" />
        </button>
      </aside>

      {/* Subject Share Modal */}
      <ShareModal
        isOpen={isShareOpen}
        onClose={() => setIsShareOpen(false)}
        url={window.location.href}
        title={`Practise ${subjectData.title} MCQs (${questions.length} Questions) | Civil Engineering MCQ`}
      />

    </div>
  );
}
