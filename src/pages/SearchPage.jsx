import React, { useState, useMemo, useEffect } from 'react';
import { useSearchParams, Link } from 'react-router-dom';
import { searchAllQuestions, TECHNICAL_SUBJECTS, GK_SUBJECTS } from '@/data/subjects';
import McqCard from '@/components/mcq/McqCard';
import { Search, X, BookOpen, Globe, Sparkles, Filter, ArrowRight } from 'lucide-react';

const SUGGESTIONS = [
  "Poisson's ratio",
  'Bending moment',
  'IS 456',
  'CPM', 'PERT',
  'SAARC',
  'Sagarmatha',
  'NPV',
  'Cement',
];

export default function SearchPage() {
  const [searchParams, setSearchParams] = useSearchParams();
  const initialQuery = searchParams.get('q') || '';
  const [query, setQuery] = useState(initialQuery);
  const [selectedCategory, setSelectedCategory] = useState('all'); // 'all' | 'technical' | 'gk'

  useEffect(() => {
    document.title = query
      ? `Search: "${query}" | Civil Engineering MCQ`
      : 'Search MCQs | Civil Engineering MCQ';
  }, [query]);

  const handleSearchChange = (val) => {
    setQuery(val);
    if (val.trim()) {
      setSearchParams({ q: val });
    } else {
      setSearchParams({});
    }
  };

  const results = useMemo(() => {
    const raw = searchAllQuestions(query, 100);
    if (selectedCategory === 'all') return raw;
    return raw.filter((item) => item.subjectCategory === selectedCategory);
  }, [query, selectedCategory]);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 py-8 space-y-8 animate-fadeIn">

      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-sky-50 dark:bg-sky-950/60 border border-sky-200 dark:border-sky-800 text-sky-700 dark:text-sky-300 text-xs font-semibold">
          <Search className="w-3.5 h-3.5 text-sky-500" />
          <span>Global Question Search</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Search All Questions
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Instantly search through 1,500+ questions across all 18 Technical Civil Engineering and Loksewa GK subjects.
        </p>
      </div>

      {/* Search Input Box */}
      <div className="glass-card rounded-3xl p-4 sm:p-6 space-y-4">
        <div className="relative flex items-center">
          <Search className="w-5 h-5 text-slate-400 absolute left-4 pointer-events-none" />
          <input
            type="text"
            autoFocus
            placeholder="Type any keyword (e.g. Poisson ratio, bending moment, theodolite, IS 456, SAARC)..."
            value={query}
            onChange={(e) => handleSearchChange(e.target.value)}
            className="w-full pl-12 pr-10 py-3.5 rounded-2xl bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white text-sm sm:text-base outline-none focus:ring-2 focus:ring-sky-500 focus:border-transparent transition"
          />
          {query && (
            <button
              onClick={() => handleSearchChange('')}
              className="absolute right-4 p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition"
            >
              <X className="w-5 h-5" />
            </button>
          )}
        </div>

        {/* Quick Suggestion Tags */}
        <div className="flex flex-wrap items-center gap-2 pt-1 text-xs">
          <span className="text-slate-500 font-medium">Popular:</span>
          {SUGGESTIONS.map((tag) => (
            <button
              key={tag}
              type="button"
              onClick={() => handleSearchChange(tag)}
              className="px-2.5 py-1 rounded-lg bg-slate-100 dark:bg-slate-800 hover:bg-sky-50 dark:hover:bg-sky-950 text-slate-600 dark:text-slate-300 hover:text-sky-600 dark:hover:text-sky-400 transition border border-slate-200/60 dark:border-slate-700/60"
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 pt-2 border-t border-slate-100 dark:border-slate-800 text-xs">
          <span className="text-slate-500 font-medium flex items-center gap-1">
            <Filter className="w-3.5 h-3.5" />
            <span>Category:</span>
          </span>
          <button
            onClick={() => setSelectedCategory('all')}
            className={`px-3 py-1 rounded-lg font-medium transition ${selectedCategory === 'all'
              ? 'bg-sky-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
          >
            All Subjects
          </button>
          <button
            onClick={() => setSelectedCategory('technical')}
            className={`px-3 py-1 rounded-lg font-medium transition ${selectedCategory === 'technical'
              ? 'bg-sky-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
          >
            Technical Civil ({TECHNICAL_SUBJECTS.length})
          </button>
          <button
            onClick={() => setSelectedCategory('gk')}
            className={`px-3 py-1 rounded-lg font-medium transition ${selectedCategory === 'gk'
              ? 'bg-emerald-600 text-white shadow-sm'
              : 'bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400 hover:bg-slate-200 dark:hover:bg-slate-700'
              }`}
          >
            Loksewa GK ({GK_SUBJECTS.length})
          </button>
        </div>
      </div>

      {/* Results Section */}
      <div className="space-y-4">
        {query.trim() && (
          <div className="flex items-center justify-between text-xs text-slate-500 dark:text-slate-400 px-1">
            <span>
              Found <strong className="text-sky-600 dark:text-sky-400">{results.length}</strong> matching questions for "<strong>{query}</strong>"
            </span>
          </div>
        )}

        {query.trim() === '' ? (
          <div className="glass-card rounded-2xl p-12 text-center text-slate-500 dark:text-slate-400 space-y-3">
            <Search className="w-10 h-10 text-slate-300 dark:text-slate-600 mx-auto" />
            <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
              Start typing to search questions
            </p>
            <p className="text-xs max-w-sm mx-auto">
              Search by formula name, engineering term, code provision, or keyword across all subjects.
            </p>
          </div>
        ) : results.length === 0 ? (
          <div className="glass-card rounded-2xl p-12 text-center text-slate-500 dark:text-slate-400 space-y-2">
            <p className="text-base font-semibold text-slate-700 dark:text-slate-300">
              No questions found matching "{query}"
            </p>
            <p className="text-xs">Try different keywords or browse subjects from the Home page.</p>
          </div>
        ) : (
          results.map((mcq, idx) => (
            <div key={`${mcq.subjectSlug}-${mcq.serialno}`} className="space-y-2">
              <div className="flex items-center justify-between px-1">
                <Link
                  to={`/${mcq.subjectSlug}`}
                  className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
                >
                  <span className="px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300 text-[11px] font-bold">
                    {mcq.subjectTitle}
                  </span>
                  <span>View All Subject Qs &rarr;</span>
                </Link>
              </div>
              <McqCard
                mcq={mcq}
                subjectSlug={mcq.subjectSlug}
                index={idx}
              />
            </div>
          ))
        )}
      </div>

    </div>
  );
}
