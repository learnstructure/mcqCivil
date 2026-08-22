import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Timer, Zap, Globe, Award, Clock, ArrowRight, CheckCircle2 } from 'lucide-react';
import { TECHNICAL_SUBJECTS } from '@/data/subjects';

export default function TestPage() {
  useEffect(() => {
    document.title = 'Online MCQ Tests & Mocks | Civil Engineering MCQ';
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-12 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-amber-50 dark:bg-amber-950/60 border border-amber-200 dark:border-amber-800 text-amber-700 dark:text-amber-300 text-xs font-semibold">
          <Timer className="w-4 h-4 text-amber-500" />
          <span>Timed Examination Portal</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Online Practice Tests
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Simulate real exam pressure for Nepal Engineering Council license and PSC Loksewa exams.
        </p>
      </div>

      {/* Full Mock Test Card */}
      <section className="glass-card rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-amber-500/10 via-sky-500/5 to-transparent border border-amber-300/80 dark:border-amber-900/60 shadow-xl space-y-4">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div className="space-y-3 max-w-xl">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-amber-500 text-white shadow-md">
              <Award className="w-3.5 h-3.5" />
              <span>Comprehensive Mock Exam</span>
            </div>
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white">
              Full Civil Engineering Mock Test
            </h2>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              50 randomized questions sampled across all 11 technical civil engineering subjects. Exactly mimics the standard competitive examination pattern.
            </p>
            <div className="flex flex-wrap items-center gap-4 text-xs font-medium text-slate-700 dark:text-slate-300 pt-1">
              <span className="flex items-center gap-1.5">
                <Clock className="w-4 h-4 text-amber-500" />
                <strong>45 Minutes</strong>
              </span>
              <span className="flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-emerald-500" />
                <strong>50 Questions</strong>
              </span>
            </div>
          </div>

          <Link
            to="/test/civil"
            className="flex-shrink-0 inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-amber-600 hover:bg-amber-500 text-white font-bold text-sm shadow-xl shadow-amber-600/30 transition hover:scale-105 active:scale-95"
          >
            <span>Start Full Mock Exam</span>
            <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>

      {/* Quick Subject Tests Grid */}
      <section className="space-y-6">
        <div className="pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white">
            <Zap className="w-5 h-5 text-sky-500" />
            <h2>Quick Subject Tests (10 Mins • 15 Questions)</h2>
          </div>
          <span className="text-xs text-slate-500">Instant score & review</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {TECHNICAL_SUBJECTS.map((sub) => (
            <Link
              key={sub.slug}
              to={`/test/${sub.slug}`}
              className="glass-card rounded-2xl p-5 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group flex flex-col justify-between"
            >
              <div className="space-y-2">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                    Quick Test
                  </span>
                  <span className="text-[11px] font-mono px-2 py-0.5 rounded-md bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-400">
                    10 min
                  </span>
                </div>
                <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-sky-600 dark:group-hover:text-sky-400 transition-colors">
                  {sub.title}
                </h3>
              </div>

              <div className="mt-4 pt-3 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between text-xs font-semibold text-sky-600 dark:text-sky-400">
                <span>Start Test</span>
                <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* General Knowledge Test */}
      <section className="space-y-6">
        <div className="pb-2 border-b border-slate-200 dark:border-slate-800 flex items-center justify-between">
          <div className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white">
            <Globe className="w-5 h-5 text-emerald-500" />
            <h2>Loksewa Nepal General Knowledge Test</h2>
          </div>
          <span className="text-xs text-slate-500">10 Mins • 15 Questions</span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Link
            to="/test/gk"
            className="glass-card rounded-2xl p-5 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group flex items-center justify-between"
          >
            <div className="space-y-1">
              <span className="text-xs font-semibold uppercase tracking-wider text-emerald-600 dark:text-emerald-400">
                Loksewa PSC
              </span>
              <h3 className="text-base font-bold text-slate-900 dark:text-white group-hover:text-emerald-600 dark:group-hover:text-emerald-400 transition-colors">
                General Knowledge (Geography & Organizations)
              </h3>
              <p className="text-xs text-slate-500">15 randomized questions from Geography & UN/SAARC</p>
            </div>
            <div className="w-9 h-9 rounded-xl bg-emerald-100 dark:bg-emerald-950 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0 ml-3">
              <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
            </div>
          </Link>
        </div>
      </section>

    </div>
  );
}
