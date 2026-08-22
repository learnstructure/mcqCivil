import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, ArrowLeft, Home } from 'lucide-react';

export default function ThanksPage() {
  useEffect(() => {
    document.title = 'Thank You | Civil Engineering MCQ';
  }, []);

  return (
    <div className="max-w-md mx-auto px-4 py-16 text-center space-y-6 animate-fadeIn">
      <div className="w-16 h-16 rounded-3xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-xl shadow-emerald-500/20">
        <CheckCircle2 className="w-10 h-10" />
      </div>

      <div className="space-y-2">
        <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
          Message Received!
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
          Thank you for reaching out. Your feedback or message has been forwarded and I will get back to you as soon as possible.
        </p>
      </div>

      <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to="/"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-sky-600 hover:bg-sky-500 text-white text-xs font-semibold shadow-md transition"
        >
          <Home className="w-4 h-4" />
          <span>Return to Homepage</span>
        </Link>
        <Link
          to="/test"
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl bg-slate-100 dark:bg-slate-800 hover:bg-slate-200 dark:hover:bg-slate-700 text-slate-800 dark:text-slate-200 text-xs font-semibold transition"
        >
          <span>Practice Online Test</span>
        </Link>
      </div>
    </div>
  );
}
