import React, { useEffect } from 'react';
import { 
  Download, 
  FileText, 
  ExternalLink, 
  Send, 
  Mail, 
  BookOpen, 
  Sparkles,
  CheckCircle2
} from 'lucide-react';

const DOWNLOAD_ITEMS = [
  {
    title: 'Engineering Mechanics (Statics)',
    category: 'Mechanics',
    desc: 'Foundational lecture slides and conceptual notes for Engineering Mechanics Statics.',
    url: 'https://drive.google.com/file/d/1dt1YMSoPMS0HSOrQFlMuZENr7QBI3r6l/view?usp=drive_link',
  },
  {
    title: 'Engineering Mechanics: Solved Numericals',
    category: 'Mechanics',
    desc: 'Step-by-step solved problems on equilibrium, friction, centroids, and moment of inertia.',
    url: 'https://drive.google.com/file/d/1N0neJoR0aMfA4z8-U_27Vb4g0Ux8a6T-/view?usp=drive_link',
  },
  {
    title: 'Structure Analysis I (3rd Edition)',
    category: 'Structures',
    desc: 'Deflections, strain energy, influence lines, arches, cables, and three-hinged systems.',
    url: 'https://drive.google.com/file/d/1SkgHWT92jcPb1u7xwvrLSUz7pt1iH8LU/view?usp=drive_link',
  },
  {
    title: 'Structure Analysis II',
    category: 'Structures',
    desc: 'Indeterminate structures, slope deflection, moment distribution, and stiffness matrix method.',
    url: 'https://drive.google.com/file/d/1VjUJDK3eJDZF0XAVNc45Tiy70nGmfpz6/view?usp=drive_link',
  },
  {
    title: 'Design of Steel & Timber Structures (Lecture Slides)',
    category: 'Design',
    desc: 'Comprehensive lecture presentations covering IS 800:2007 steel connection and member design.',
    url: 'https://drive.google.com/file/d/1nA2it4O33zcBulbutDBs-G592MTt9lB1/view?usp=drive_link',
  },
  {
    title: 'Numericals on Steel & Timber Design',
    category: 'Design',
    desc: 'Solved exam questions on tension members, compression struts, columns, and purlin design.',
    url: 'https://drive.google.com/file/d/1BGC9G79He4CezT8QOjGmChWju4V4v2Hr/view?usp=drive_link',
  },
  {
    title: 'Design of RCC Structures (Based on IS 456:2000)',
    category: 'RCC',
    desc: 'Detailed lecture notes for singly/doubly reinforced beams, one-way/two-way slabs, and columns.',
    url: 'https://drive.google.com/file/d/1iGIrBuPMn06L4DYfwojaI2JLlmjnO9ac/view?usp=drive_link',
  },
  {
    title: 'Computational Techniques (Finite Element Method)',
    category: 'Computation',
    desc: 'Numerical methods, root finding, matrix operations, and FEM theory for structural engineers.',
    url: 'https://drive.google.com/file/d/1hvLRtgGD2RBHA2KDW1WcLdUU9ruoWDdP/view?usp=drive_link',
  },
  {
    title: 'Computational Techniques (Student Handout Version)',
    category: 'Computation',
    desc: 'Compact handout notes for fast revision before semester and competitive exams.',
    url: 'https://drive.google.com/file/d/1Z3iRwNjoSxvcNXQsTBz8eaMoOXvZMN88/view?usp=drive_link',
  },
  {
    title: 'Computational Techniques Solved Numericals',
    category: 'Computation',
    desc: 'Hand-solved numerical algorithms, interpolation, curve fitting, and differential equations.',
    url: 'https://drive.google.com/file/d/1m2CnNIl5GwIcpokgF3ldXLSErRuz1ld2/view?usp=drive_link',
  },
];

export default function DownloadsPage() {
  useEffect(() => {
    document.title = 'Free Civil Engineering Notes & Numericals | Civil Engineering MCQ';
  }, []);

  return (
    <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-12 space-y-10 animate-fadeIn">
      
      {/* Header */}
      <div className="text-center space-y-3 max-w-2xl mx-auto">
        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-purple-50 dark:bg-purple-950/60 border border-purple-200 dark:border-purple-800 text-purple-700 dark:text-purple-300 text-xs font-semibold">
          <Download className="w-4 h-4 text-purple-500" />
          <span>Open Education Resources</span>
        </div>
        <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 dark:text-white">
          Free Study Materials & Notes
        </h1>
        <p className="text-sm text-slate-600 dark:text-slate-400">
          Download free civil and structural engineering lecture notes, solved numericals, and exam slides.
        </p>
      </div>

      {/* Downloads Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-5">
        {DOWNLOAD_ITEMS.map((item, index) => (
          <div
            key={index}
            className="glass-card rounded-2xl p-5 sm:p-6 flex flex-col justify-between space-y-4 hover:shadow-xl transition-all duration-200 hover:-translate-y-1 group"
          >
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="px-2.5 py-1 rounded-lg text-[11px] font-bold uppercase tracking-wider bg-purple-100 dark:bg-purple-950/80 text-purple-700 dark:text-purple-300">
                  {item.category}
                </span>
                <FileText className="w-4 h-4 text-slate-400 group-hover:text-purple-500 transition-colors" />
              </div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white group-hover:text-purple-600 dark:group-hover:text-purple-400 transition-colors">
                {item.title}
              </h2>
              <p className="text-xs text-slate-600 dark:text-slate-400 leading-relaxed">
                {item.desc}
              </p>
            </div>

            <div className="pt-3 border-t border-slate-100 dark:border-slate-800/80">
              <a
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 w-full px-4 py-2.5 rounded-xl bg-purple-600 hover:bg-purple-500 text-white font-semibold text-xs shadow-md shadow-purple-600/20 transition hover:scale-[1.02] active:scale-[0.98]"
              >
                <span>Download from Google Drive</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {/* Support & Community Banner */}
      <div className="glass-card rounded-3xl p-6 sm:p-8 bg-gradient-to-r from-sky-500/10 via-purple-500/10 to-teal-500/10 border border-slate-200 dark:border-slate-800 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <h3 className="text-lg font-bold text-slate-900 dark:text-white">
            Need Help with Downloads or Have Questions?
          </h3>
          <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400">
            Join our discussion group on Telegram or reach out via email.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-3">
          <a
            href="https://t.me/civilengineering_structure"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-sky-500 hover:bg-sky-600 text-white text-xs font-semibold shadow-md transition"
          >
            <Send className="w-4 h-4" />
            <span>Join Telegram</span>
          </a>
          <a
            href="mailto:structurerealm@gmail.com"
            className="inline-flex items-center gap-2 px-4 py-2.5 rounded-xl bg-slate-800 hover:bg-slate-700 text-white text-xs font-semibold shadow-md transition"
          >
            <Mail className="w-4 h-4" />
            <span>Email Us</span>
          </a>
        </div>
      </div>

    </div>
  );
}
