import React, { useState, useEffect } from 'react';
import { createPortal } from 'react-dom';
import { X, Check, Copy, Share2 } from 'lucide-react';

export default function SiteShareModal({ isOpen, onClose }) {
  const [copied, setCopied] = useState(false);

  const siteUrl = window.location.origin;
  const siteTitle = 'Civil Engineering MCQ | Free Loksewa, NEC & MSc Entrance Prep';
  const shareText = `Practise 1,100+ Civil Engineering & Loksewa GK MCQs with instant scoring and mock tests:`;

  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = 'hidden';

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      document.body.style.overflow = originalOverflow;
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const encodedUrl = encodeURIComponent(siteUrl);
  const encodedText = encodeURIComponent(`${shareText} ${siteUrl}`);

  const shareLinks = [
    {
      name: 'WhatsApp',
      icon: '💬',
      bg: 'bg-emerald-500 hover:bg-emerald-600',
      href: `https://api.whatsapp.com/send?text=${encodedText}`,
    },
    {
      name: 'Telegram',
      icon: '✈️',
      bg: 'bg-sky-500 hover:bg-sky-600',
      href: `https://t.me/share/url?url=${encodedUrl}&text=${encodeURIComponent(siteTitle)}`,
    },
    {
      name: 'Facebook',
      icon: 'f',
      bg: 'bg-blue-600 hover:bg-blue-700 font-bold',
      href: `https://www.facebook.com/sharer/sharer.php?u=${encodedUrl}`,
    },
    {
      name: 'Twitter / X',
      icon: '𝕏',
      bg: 'bg-black hover:bg-neutral-800 text-white font-bold',
      href: `https://twitter.com/intent/tweet?url=${encodedUrl}&text=${encodeURIComponent(shareText)}`,
    },
    {
      name: 'LinkedIn',
      icon: 'in',
      bg: 'bg-blue-700 hover:bg-blue-800 font-bold',
      href: `https://www.linkedin.com/sharing/share-offsite/?url=${encodedUrl}`,
    },
  ];

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(siteUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch {
      // Fallback
    }
  };

  const modalContent = (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fadeIn"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-md p-6 bg-white dark:bg-slate-900 rounded-2xl shadow-2xl border border-slate-200 dark:border-slate-800 text-slate-900 dark:text-white"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Header */}
        <div className="flex items-center justify-between pb-4 border-b border-slate-100 dark:border-slate-800">
          <div className="flex items-center gap-2 font-semibold text-lg">
            <Share2 className="w-5 h-5 text-sky-500" />
            <span>Share Platform</span>
          </div>
          <button
            onClick={onClose}
            className="p-1 rounded-lg text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800 transition"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        <p className="mt-3 text-sm text-slate-600 dark:text-slate-300">
          {siteTitle}
        </p>

        {/* Social Share Grid */}
        <div className="grid grid-cols-5 gap-3 my-6">
          {shareLinks.map((item) => (
            <a
              key={item.name}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-1.5 text-xs text-slate-600 dark:text-slate-400 hover:text-slate-900 dark:hover:text-white transition group"
            >
              <div className={`w-11 h-11 rounded-full flex items-center justify-center text-white text-lg shadow-md transition-transform group-hover:scale-110 ${item.bg}`}>
                {item.icon}
              </div>
              <span className="text-[11px] truncate max-w-[60px] text-center">{item.name}</span>
            </a>
          ))}
        </div>

        {/* Copy Link Input */}
        <div className="flex items-center gap-2 p-2 bg-slate-100 dark:bg-slate-800/80 rounded-xl border border-slate-200 dark:border-slate-700">
          <input
            type="text"
            readOnly
            value={siteUrl}
            className="flex-1 px-2 text-xs bg-transparent text-slate-700 dark:text-slate-300 outline-none truncate select-all"
          />
          <button
            onClick={handleCopy}
            className="flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium text-white bg-sky-600 hover:bg-sky-500 rounded-lg transition flex-shrink-0"
          >
            {copied ? (
              <>
                <Check className="w-3.5 h-3.5 text-emerald-300" />
                <span>Copied!</span>
              </>
            ) : (
              <>
                <Copy className="w-3.5 h-3.5" />
                <span>Copy</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );

  return createPortal(modalContent, document.body);
}
