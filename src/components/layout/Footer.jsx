import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Heart, ArrowUpRight, ShieldCheck, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-20 border-t border-slate-200 dark:border-slate-800 bg-white/50 dark:bg-slate-950/60 backdrop-blur-sm transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          
          {/* Brand Col */}
          <div className="space-y-4 md:col-span-1">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-sky-600 to-teal-500 flex items-center justify-center text-white">
                <GraduationCap className="w-5 h-5" />
              </div>
              <span className="font-extrabold text-base sm:text-lg text-slate-900 dark:text-white">
                Civil Engineering <span className="text-sky-600 dark:text-sky-400">MCQ</span>
              </span>
            </div>
            <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
              Comprehensive preparation platform for Nepal Engineering Council (NEC) licensing, PSC Loksewa, and MSc Entrance civil engineering examinations.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Practice & Exams
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li><Link to="/som" className="hover:text-sky-600 dark:hover:text-sky-400 transition">Strength of Materials</Link></li>
              <li><Link to="/structure" className="hover:text-sky-600 dark:hover:text-sky-400 transition">Structural Analysis</Link></li>
              <li><Link to="/rcc" className="hover:text-sky-600 dark:hover:text-sky-400 transition">RCC Design</Link></li>
              <li><Link to="/surveying" className="hover:text-sky-600 dark:hover:text-sky-400 transition">Surveying</Link></li>
              <li><Link to="/test" className="hover:text-sky-600 dark:hover:text-sky-400 transition font-medium text-amber-600 dark:text-amber-400">Online Mock Test</Link></li>
            </ul>
          </div>

          {/* General Knowledge */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Loksewa Nepal GK
            </h4>
            <ul className="space-y-2 text-xs text-slate-600 dark:text-slate-400">
              <li><Link to="/gk-geography" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Geography of Nepal</Link></li>
              <li><Link to="/gk-organization" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">UN, SAARC & BIMSTEC</Link></li>
              <li><Link to="/gk-natural-resources" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Natural Resources</Link></li>
              <li><Link to="/gk-periodic-plans" className="hover:text-emerald-600 dark:hover:text-emerald-400 transition">Periodic Plans</Link></li>
              <li><Link to="/downloads" className="hover:text-purple-600 dark:hover:text-purple-400 transition font-medium">Free Study Materials</Link></li>
            </ul>
          </div>

          {/* Platform & Author */}
          <div>
            <h4 className="text-xs font-bold uppercase tracking-wider text-slate-900 dark:text-white mb-3">
              Ecosystem
            </h4>
            <ul className="space-y-2.5 text-xs text-slate-600 dark:text-slate-400">
              <li>
                <a
                  href="https://structurerealm.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1 text-sky-600 dark:text-sky-400 font-semibold hover:underline"
                >
                  <span>StructureRealm.com</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
                <p className="text-[11px] text-slate-500 mt-0.5">Calculators, beam/column tools & blog</p>
              </li>
              <li>
                <Link to="/contact" className="flex items-center gap-1 hover:text-slate-900 dark:hover:text-white transition">
                  <Mail className="w-3.5 h-3.5" />
                  <span>About Abinash Mandal & Contact</span>
                </Link>
              </li>
            </ul>
          </div>

        </div>

        <div className="mt-10 pt-6 border-t border-slate-200 dark:border-slate-800/80 flex flex-col sm:flex-row items-center justify-between text-xs text-slate-500 dark:text-slate-400 gap-3">
          <p>© {currentYear} Civil Engineering MCQ. All rights reserved.</p>
          <p className="flex items-center gap-1">
            Built with <Heart className="w-3.5 h-3.5 text-rose-500 fill-rose-500" /> for Civil Engineering Students & Professionals in Nepal
          </p>
        </div>
      </div>
    </footer>
  );
}
