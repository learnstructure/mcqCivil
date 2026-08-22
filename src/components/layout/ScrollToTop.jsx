import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import { ArrowUp } from 'lucide-react';

export default function ScrollToTop({ children }) {
  const location = useLocation();
  const [showButton, setShowButton] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 400) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <>
      {children}
      {showButton && (
        <button
          onClick={scrollToTop}
          type="button"
          aria-label="Scroll to top"
          title="Scroll to top"
          className="fixed bottom-6 right-6 z-40 p-3 rounded-full bg-sky-600 hover:bg-sky-500 text-white shadow-xl shadow-sky-600/30 transition-all duration-200 hover:scale-110 focus:outline-none focus:ring-2 focus:ring-sky-400"
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}
    </>
  );
}
