import React, { useEffect } from 'react';
import { 
  User, 
  GraduationCap, 
  Briefcase, 
  FileText, 
  Code2, 
  Mail, 
  ExternalLink, 
  Send,
  Sparkles,
  BookOpen
} from 'lucide-react';

export default function AboutPage() {
  useEffect(() => {
    document.title = 'About Me & Contact | Civil Engineering MCQ';
  }, []);

  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 animate-fadeIn">
      
      {/* Profile Header Card */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 relative overflow-hidden bg-gradient-to-br from-sky-500/10 via-teal-500/5 to-transparent border border-slate-200 dark:border-slate-800 space-y-6">
        <div className="flex flex-col sm:flex-row items-start sm:items-center gap-6">
          <div className="w-20 h-20 rounded-2xl bg-gradient-to-tr from-sky-600 to-teal-500 text-white flex items-center justify-center font-extrabold text-3xl shadow-xl shadow-sky-600/30 flex-shrink-0">
            AM
          </div>
          <div className="space-y-1">
            <div className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-wider text-sky-600 dark:text-sky-400">
              <GraduationCap className="w-4 h-4" />
              <span>Structural & Civil Engineer • Researcher</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900 dark:text-white">
              Abinash Mandal
            </h1>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
              PhD Student in Structural Engineering at <strong>University of Nevada, Reno</strong>
            </p>
          </div>
        </div>

        <p className="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
          Hello! I'm <strong>Abinash Mandal</strong>, a structural engineer from <strong>Nepal</strong> passionate about advancing structural engineering through innovation, scientific computation, and open-access education. My research focuses on leveraging <strong>machine learning</strong>, <strong>deep learning</strong>, and <strong>computational mechanics</strong> to design resilient and high-performance structural systems.
        </p>

        {/* Social Links */}
        <div className="flex flex-wrap items-center gap-3 pt-2">
          <a
            href="https://www.linkedin.com/in/abinash-mandal-90132b238/"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-600 hover:bg-blue-500 text-white text-xs font-semibold shadow-md transition"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z"/>
            </svg>
            <span>LinkedIn Profile</span>
          </a>
          <a
            href="https://www.facebook.com/abinash.mandal.37"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-600 text-white text-xs font-semibold shadow-md transition"
          >
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M12 2.04C6.5 2.04 2 6.53 2 12.06C2 17.06 5.66 21.21 10.44 21.96V14.96H7.9V12.06H10.44V9.85C10.44 7.34 11.93 5.96 14.22 5.96C15.31 5.96 16.45 6.15 16.45 6.15V8.62H15.19C13.95 8.62 13.56 9.39 13.56 10.18V12.06H16.34L15.89 14.96H13.56V21.96A10 10 0 0 0 22 12.06C22 6.53 17.5 2.04 12 2.04Z"/>
            </svg>
            <span>Facebook</span>
          </a>
          <a
            href="https://structurerealm.com"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-slate-800 dark:bg-slate-700 hover:bg-slate-700 text-white text-xs font-semibold shadow-md transition"
          >
            <Sparkles className="w-4 h-4 text-sky-400" />
            <span>StructureRealm.com</span>
          </a>
        </div>
      </div>

      {/* Professional Experience */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-slate-800">
          <Briefcase className="w-5 h-5 text-sky-500" />
          <h2>Professional Background</h2>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="glass-card rounded-2xl p-5 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Structural Engineer
              </h3>
              <span className="text-xs font-mono text-sky-600 dark:text-sky-400 bg-sky-50 dark:bg-sky-950 px-2.5 py-1 rounded-lg">
                2019 – 2025
              </span>
            </div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Bric Consult Pvt. Ltd., Lalitpur, Nepal
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Involved in the structural analysis and detailed seismic design of RCC and steel buildings and bridges in Nepal, ensuring compliance with Nepal National Building Code (NBC) and IS standards.
            </p>
          </div>

          <div className="glass-card rounded-2xl p-5 space-y-2">
            <div className="flex flex-wrap items-center justify-between gap-1">
              <h3 className="text-base font-bold text-slate-900 dark:text-white">
                Lecturer in Civil & Structural Engineering
              </h3>
              <span className="text-xs font-mono text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950 px-2.5 py-1 rounded-lg">
                2023 – 2025
              </span>
            </div>
            <div className="text-xs font-semibold text-slate-500 dark:text-slate-400">
              Himalaya College of Engineering, Lalitpur, Nepal
            </div>
            <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              Taught undergraduate courses including Engineering Mechanics, Strength of Materials, Theory of Structures I & II, Design of Steel Structures, and Computational Techniques (FEM).
            </p>
          </div>
        </div>
      </section>

      {/* Research Publications */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-slate-800">
          <FileText className="w-5 h-5 text-purple-500" />
          <h2>Research Publications</h2>
        </div>

        <div className="space-y-3">
          <div className="glass-card rounded-2xl p-5 space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
              Predicting Compressive Strength of Concrete Using Advanced Machine Learning Techniques: A Combined Dataset Approach
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Mandal, A. (2025). <em>Asian Journal of Civil Engineering (Springer)</em>.
            </p>
            <div className="pt-2 flex flex-wrap gap-2">
              <a
                href="https://doi.org/10.1007/s42107-024-01247-x"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
              >
                <span>View on Springer DOI</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
              <span className="text-slate-300 dark:text-slate-700">•</span>
              <a
                href="https://rdcu.be/d5GEn"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-emerald-600 dark:text-emerald-400 hover:underline"
              >
                <span>Read Full Article (SharedIt)</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>

          <div className="glass-card rounded-2xl p-5 space-y-2">
            <h3 className="text-sm sm:text-base font-bold text-slate-900 dark:text-white leading-snug">
              Effect of change in rise/span ratio on performance of open thin cylindrical shells
            </h3>
            <p className="text-xs text-slate-600 dark:text-slate-400">
              Mandal, A., & Joshi, H. R. (2020). <em>Proceedings of the 8th IOE Graduate Conference</em>.
            </p>
            <div className="pt-2">
              <a
                href="http://conference.ioe.edu.np/ioegc8/papers/ioegc-8-089-80122.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline"
              >
                <span>Download IOE Paper PDF</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Open Source Software */}
      <section className="space-y-4">
        <div className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white pb-2 border-b border-slate-200 dark:border-slate-800">
          <Code2 className="w-5 h-5 text-teal-500" />
          <h2>Open-Source Computational Libraries</h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="glass-card rounded-2xl p-5 space-y-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">FEM2D</h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-teal-100 dark:bg-teal-950 text-teal-700 dark:text-teal-300">v0.2.1</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                An open-source Python library for finite element structural analysis of 2D frame and truss structures.
              </p>
            </div>
            <a
              href="https://doi.org/10.5281/zenodo.20990850"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-teal-600 dark:text-teal-400 hover:underline pt-3"
            >
              <span>Zenodo DOI Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>

          <div className="glass-card rounded-2xl p-5 space-y-2 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between">
                <h3 className="text-base font-bold text-slate-900 dark:text-white">StructDyn</h3>
                <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-sky-100 dark:bg-sky-950 text-sky-700 dark:text-sky-300">v0.7.4</span>
              </div>
              <p className="text-xs text-slate-600 dark:text-slate-400 mt-1">
                An open-source Python package for structural dynamics analysis, modal extraction, and time-history earthquake simulation.
              </p>
            </div>
            <a
              href="https://doi.org/10.5281/zenodo.18676816"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 text-xs font-semibold text-sky-600 dark:text-sky-400 hover:underline pt-3"
            >
              <span>Zenodo DOI Repository</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          </div>
        </div>
      </section>

      {/* Get in Touch / Contact Form */}
      <section className="glass-card rounded-3xl p-6 sm:p-8 space-y-6 border border-slate-200 dark:border-slate-800">
        <div className="space-y-1">
          <div className="flex items-center gap-2 font-bold text-lg text-slate-900 dark:text-white">
            <Mail className="w-5 h-5 text-sky-500" />
            <h2>Send a Message / Inquire</h2>
          </div>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Have questions about questions, suggestions for the platform, or research collaboration? Send me a message below.
          </p>
        </div>

        <form
          action="https://formsubmit.co/abinashmandal33486@gmail.com"
          method="POST"
          className="space-y-4"
        >
          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Your Email
            </label>
            <input
              type="email"
              name="email"
              required
              placeholder="engineer@example.com"
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-sky-500 transition"
            />
          </div>

          <div>
            <label className="block text-xs font-semibold text-slate-700 dark:text-slate-300 mb-1">
              Your Message or Feedback
            </label>
            <textarea
              name="name"
              rows={4}
              required
              placeholder="Type your message, suggestion, or question..."
              className="w-full px-4 py-3 rounded-xl border border-slate-200 dark:border-slate-700 bg-white dark:bg-slate-900 text-slate-900 dark:text-white text-sm outline-none focus:ring-2 focus:ring-sky-500 transition"
            />
          </div>

          {/* FormSubmit Configuration */}
          <input type="hidden" name="_captcha" value="false" />
          <input type="hidden" name="_next" value="https://civilengineering-mcq.web.app/thanks" />

          <button
            type="submit"
            className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-r from-sky-600 to-teal-600 hover:from-sky-500 hover:to-teal-500 text-white font-semibold text-sm shadow-lg shadow-sky-600/25 transition hover:scale-105 active:scale-95"
          >
            <Send className="w-4 h-4" />
            <span>Send Message</span>
          </button>
        </form>
      </section>

    </div>
  );
}
