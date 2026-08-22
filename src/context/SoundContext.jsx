import React, { createContext, useContext, useState, useEffect } from 'react';

const SoundContext = createContext();

export function SoundProvider({ children }) {
  const [soundEnabled, setSoundEnabled] = useState(() => {
    const saved = localStorage.getItem('civil_mcq_sound');
    return saved !== null ? saved === 'true' : true;
  });

  useEffect(() => {
    localStorage.setItem('civil_mcq_sound', soundEnabled.toString());
  }, [soundEnabled]);

  const toggleSound = () => {
    setSoundEnabled(prev => !prev);
  };

  const playCorrectSound = () => {
    if (!soundEnabled) return;
    try {
      const audio = new Audio('/correctOption.wav');
      audio.volume = 0.6;
      audio.play().catch(() => {
        // Handle autoplay policy restriction silently
      });
    } catch {
      // Audio playback failed silently
    }
  };

  return (
    <SoundContext.Provider value={{ soundEnabled, toggleSound, playCorrectSound }}>
      {children}
    </SoundContext.Provider>
  );
}

export function useSound() {
  const context = useContext(SoundContext);
  if (!context) {
    throw new Error('useSound must be used within a SoundProvider');
  }
  return context;
}
