import React, { useState, useRef, useEffect } from 'react';
import { NavLink, Link, useLocation } from 'react-router-dom';
import { 
  ChevronDown, 
  Menu, 
  X, 
  BookOpen, 
  Globe, 
  Timer, 
  Download, 
  User, 
  Sparkles, 
  ExternalLink, 
  GraduationCap,
  Search
} from 'lucide-react';
import { TECHNICAL_SUBJECTS, GK_SUBJECTS } from '@/data/subjects';
import ThemeToggle from '@/components/ui/ThemeToggle';
import SoundToggle from '@/components/ui/SoundToggle';

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null); // 'technical' | 'gk' | null
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close menus on route change
  useEffect(() => {
    setMobileMenuOpen(false);
    setActiveDropdown(null);
  }, [location.pathname]);

  // Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event) {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navLinkClass = ({ isActive }) =>
    `px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 flex items-center gap-1.5 ${
      isActive
        ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40'
        : 'text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
    }`;

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-200/80 dark:border-slate-800 bg-white/80 dark:bg-[#090d16]/80 backdrop-blur-md transition-colors duration-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16" ref={dropdownRef}>
          
          {/* Brand Logo */}
          <Link to="/" className="flex items-center gap-2 group flex-shrink-0">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-tr from-sky-600 to-teal-500 flex items-center justify-center text-white shadow-md shadow-sky-500/20 group-hover:scale-105 transition-transform flex-shrink-0">
              <GraduationCap className="w-5 h-5" />
            </div>
            <div className="flex flex-col min-w-0">
              {/* Full name on mobile & xl+, abbreviated only on lg where nav links compete */}
              <div className="font-extrabold tracking-tight text-slate-900 dark:text-white leading-tight text-base">
                <span className="lg:hidden xl:inline">Civil Engineering <span className="text-sky-600 dark:text-sky-400">MCQ</span></span>
                <span className="hidden lg:inline xl:hidden">Civil Eng. <span className="text-sky-600 dark:text-sky-400">MCQ</span></span>
              </div>
              {/* Subtitle hidden on lg to save space, shown on mobile & xl+ */}
              <span className="lg:hidden xl:block text-[10px] font-semibold tracking-wider text-slate-500 dark:text-slate-400 whitespace-nowrap">
                Loksewa, NEC &amp; MSc Entrance Prep
              </span>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            
            {/* Technical MCQs Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveDropdown(prev => prev === 'technical' ? null : 'technical')}
                onMouseEnter={() => setActiveDropdown('technical')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 flex items-center gap-1.5 ${
                  activeDropdown === 'technical'
                    ? 'text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950/40'
                    : 'text-slate-700 dark:text-slate-200 hover:text-sky-600 dark:hover:text-sky-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <BookOpen className="w-4 h-4 text-sky-500" />
                <span>Technical MCQs</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'technical' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'technical' && (
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 mt-1 w-[480px] p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 grid grid-cols-2 gap-2 animate-fadeIn z-50"
                >
                  <div className="col-span-2 pb-2 mb-1 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      Civil Engineering Subjects ({TECHNICAL_SUBJECTS.length})
                    </span>
                    <span className="text-[11px] text-sky-600 dark:text-sky-400 font-medium">Instant answers & discussions</span>
                  </div>
                  {TECHNICAL_SUBJECTS.map((sub) => (
                    <Link
                      key={sub.slug}
                      to={`/${sub.slug}`}
                      className="flex flex-col p-2.5 rounded-xl hover:bg-sky-50 dark:hover:bg-slate-800/70 transition group"
                    >
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-sky-600 dark:group-hover:text-sky-400">
                        {sub.title}
                      </span>
                      <span className="text-[11px] text-slate-500 dark:text-slate-400">
                        {sub.rawQuestions.length} Questions
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* General Knowledge Dropdown */}
            <div className="relative">
              <button
                type="button"
                onClick={() => setActiveDropdown(prev => prev === 'gk' ? null : 'gk')}
                onMouseEnter={() => setActiveDropdown('gk')}
                className={`px-3 py-2 rounded-lg text-sm font-medium transition-colors duration-150 flex items-center gap-1.5 ${
                  activeDropdown === 'gk'
                    ? 'text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/40'
                    : 'text-slate-700 dark:text-slate-200 hover:text-emerald-600 dark:hover:text-emerald-400 hover:bg-slate-100 dark:hover:bg-slate-800/60'
                }`}
              >
                <Globe className="w-4 h-4 text-emerald-500" />
                <span>Loksewa GK</span>
                <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${activeDropdown === 'gk' ? 'rotate-180' : ''}`} />
              </button>

              {activeDropdown === 'gk' && (
                <div 
                  onMouseLeave={() => setActiveDropdown(null)}
                  className="absolute left-0 mt-1 w-[420px] p-4 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 flex flex-col gap-1 animate-fadeIn z-50"
                >
                  <div className="pb-2 mb-1 border-b border-slate-100 dark:border-slate-800 flex items-center justify-between">
                    <span className="text-xs font-bold uppercase tracking-wider text-slate-500 dark:text-slate-400">
                      PSC Loksewa Nepal GK ({GK_SUBJECTS.length})
                    </span>
                  </div>
                  {GK_SUBJECTS.map((sub) => (
                    <Link
                      key={sub.slug}
                      to={`/${sub.slug}`}
                      className="flex items-center justify-between p-2 rounded-xl hover:bg-emerald-50 dark:hover:bg-slate-800/70 transition group"
                    >
                      <span className="text-sm font-medium text-slate-800 dark:text-slate-200 group-hover:text-emerald-600 dark:group-hover:text-emerald-400">
                        {sub.title}
                      </span>
                      <span className="text-xs text-slate-500 dark:text-slate-400 font-mono">
                        {sub.rawQuestions.length} Qs
                      </span>
                    </Link>
                  ))}
                </div>
              )}
            </div>

            {/* Online Test Link */}
            <NavLink to="/test" className={navLinkClass}>
              <Timer className="w-4 h-4 text-amber-500" />
              <span>Online Test</span>
            </NavLink>

            {/* Downloads Link */}
            <NavLink to="/downloads" className={navLinkClass}>
              <Download className="w-4 h-4 text-purple-500" />
              <span>Downloads</span>
            </NavLink>

            {/* About / Contact Link */}
            <NavLink to="/contact" className={navLinkClass}>
              <User className="w-4 h-4 text-teal-500" />
              <span>About Me</span>
            </NavLink>

            {/* External StructureRealm Link */}
            <a
              href="https://structurerealm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-2.5 py-1.5 text-xs font-semibold rounded-lg bg-gradient-to-r from-sky-500/10 to-teal-500/10 hover:from-sky-500/20 hover:to-teal-500/20 text-sky-700 dark:text-sky-300 border border-sky-200 dark:border-sky-800 flex items-center gap-1 transition"
              title="Visit StructureRealm for Structural Engineering Tools & Blogs"
            >
              <Sparkles className="w-3.5 h-3.5 text-sky-500" />
              <span>StructureRealm</span>
              <ExternalLink className="w-3 h-3 opacity-70" />
            </a>

          </nav>

          {/* Action Buttons: Search, Sound, Theme, Mobile Menu */}
          <div className="flex items-center gap-1.5 sm:gap-2">
            <Link
              to="/search"
              title="Search Questions across all subjects"
              className="p-2 rounded-xl text-slate-700 dark:text-slate-300 hover:bg-slate-100 dark:hover:bg-slate-800 border border-slate-200 dark:border-slate-700 transition flex items-center gap-1.5 text-xs font-semibold"
            >
              <Search className="w-4 h-4 text-sky-500" />
              <span className="hidden md:inline">Search</span>
            </Link>

            <SoundToggle />
            <ThemeToggle />

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(prev => !prev)}
              type="button"
              className="lg:hidden p-2 rounded-xl text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
              aria-label="Open menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>

        </div>
      </div>

      {/* Mobile Drawer Navigation */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-200 dark:border-slate-800 bg-white/95 dark:bg-slate-900/95 backdrop-blur-lg px-4 pt-3 pb-6 max-h-[85vh] overflow-y-auto space-y-4 animate-fadeIn">
          
          <div className="flex flex-col space-y-1">
            <NavLink to="/" className={navLinkClass}>Home</NavLink>
            <NavLink to="/search" className={navLinkClass}>
              <Search className="w-4 h-4 text-sky-500" />
              <span>Search Questions</span>
            </NavLink>
            <NavLink to="/test" className={navLinkClass}>Online Test</NavLink>
            <NavLink to="/downloads" className={navLinkClass}>Free Downloads</NavLink>
            <NavLink to="/contact" className={navLinkClass}>About Me & Contact</NavLink>
            <a
              href="https://structurerealm.com"
              target="_blank"
              rel="noopener noreferrer"
              className="px-3 py-2 text-sm font-medium text-sky-600 dark:text-sky-400 flex items-center justify-between"
            >
              <span>StructureRealm.com</span>
              <ExternalLink className="w-4 h-4" />
            </a>
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Technical Civil Engineering
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {TECHNICAL_SUBJECTS.map((sub) => (
                <Link
                  key={sub.slug}
                  to={`/${sub.slug}`}
                  className="px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-sky-50 dark:hover:bg-slate-800 transition flex justify-between items-center"
                >
                  <span>{sub.title}</span>
                  <span className="text-xs text-slate-400">{sub.rawQuestions.length}</span>
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-2 border-t border-slate-100 dark:border-slate-800">
            <div className="text-xs font-bold uppercase tracking-wider text-slate-400 dark:text-slate-500 mb-2">
              Loksewa Nepal General Knowledge
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {GK_SUBJECTS.map((sub) => (
                <Link
                  key={sub.slug}
                  to={`/${sub.slug}`}
                  className="px-3 py-2 rounded-lg text-sm text-slate-700 dark:text-slate-300 hover:bg-emerald-50 dark:hover:bg-slate-800 transition flex justify-between items-center"
                >
                  <span>{sub.title}</span>
                  <span className="text-xs text-slate-400">{sub.rawQuestions.length}</span>
                </Link>
              ))}
            </div>
          </div>

        </div>
      )}
    </header>
  );
}
