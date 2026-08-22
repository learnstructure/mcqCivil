import React from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import { useSound } from '@/context/SoundContext';

export default function SoundToggle({ className = '' }) {
  const { soundEnabled, toggleSound } = useSound();

  return (
    <button
      onClick={toggleSound}
      type="button"
      title={soundEnabled ? 'Mute sound effects' : 'Enable sound effects'}
      aria-label="Toggle sound effects"
      className={`p-2 rounded-xl transition-all duration-200 
        bg-slate-100 hover:bg-slate-200 text-slate-700 
        dark:bg-slate-800 dark:hover:bg-slate-700 dark:text-slate-300 
        border border-slate-200 dark:border-slate-700 focus:outline-none focus:ring-2 focus:ring-sky-500 ${className}`}
    >
      {soundEnabled ? (
        <Volume2 className="w-5 h-5 text-emerald-600 dark:text-emerald-400" />
      ) : (
        <VolumeX className="w-5 h-5 text-slate-400" />
      )}
    </button>
  );
}
