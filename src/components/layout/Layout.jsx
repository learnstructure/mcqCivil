import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import ScrollToTop from './ScrollToTop';

export default function Layout() {
  return (
    <div className="min-h-screen flex flex-col bg-slate-50 dark:bg-[#090d16] text-slate-900 dark:text-slate-100 transition-colors duration-200">
      <ScrollToTop>
        <Navbar />
        <main className="flex-1">
          <Outlet />
        </main>
        <Footer />
      </ScrollToTop>
    </div>
  );
}
