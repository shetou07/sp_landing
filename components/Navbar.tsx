
import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IMAGES } from '../constants';

const Navbar: React.FC = () => {
  const location = useLocation();
  const isLanding = location.pathname === '/';

  if (isLanding) {
    return (
      <header className="w-full flex justify-center sticky top-0 z-50 bg-background-light/95 dark:bg-background-dark/95 backdrop-blur-sm border-b border-neutral-200 dark:border-neutral-800">
        <div className="layout-content-container flex flex-col max-w-[960px] flex-1">
          <div className="flex items-center justify-between px-4 sm:px-10 py-3">
            <Link to="/" className="flex items-center gap-3">
              <span className="material-symbols-outlined text-primary text-2xl">school</span>
              <h2 className="text-neutral-900 dark:text-white text-lg font-bold leading-tight tracking-tight">Student Pesa</h2>
            </Link>
            <div className="flex flex-1 justify-end gap-4 sm:gap-8 items-center">
              <nav className="hidden sm:flex items-center gap-9">
                <a className="text-neutral-900 dark:text-neutral-200 text-sm font-medium hover:text-primary transition-colors" href="#">About Us</a>
              </nav>
              <Link to="/help" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary text-[#0d1b0d] text-sm font-bold leading-normal tracking-[0.015em] hover:bg-green-400 transition-colors">
                <span className="truncate">Help/Support</span>
              </Link>
            </div>
          </div>
        </div>
      </header>
    );
  }

  return (
    <header className="w-full border-b border-[#e7f3e7] dark:border-white/10 bg-white dark:bg-surface-dark px-4 lg:px-10 py-3 sticky top-0 z-50">
      <div className="mx-auto max-w-7xl flex items-center justify-between whitespace-nowrap">
        <Link to="/" className="flex items-center gap-4 text-text-main dark:text-white">
          <div className="size-8 flex items-center justify-center bg-primary/20 rounded-md text-primary-content dark:text-primary">
            <span className="material-symbols-outlined">school</span>
          </div>
          <h2 className="text-text-main dark:text-white text-lg font-bold leading-tight tracking-tight">Student Pesa</h2>
        </Link>
        <div className="hidden lg:flex flex-1 justify-end gap-8">
          <nav className="flex items-center gap-9">
            <Link to="/dashboard" className="text-text-secondary hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors text-sm font-medium">Dashboard</Link>
            <Link to="/tickets" className="text-text-secondary hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors text-sm font-medium">Tickets</Link>
            <Link to="/contact" className="text-text-secondary hover:text-primary dark:text-gray-300 dark:hover:text-primary transition-colors text-sm font-medium">Contact</Link>
            <Link to="/help" className={`text-sm font-bold transition-colors ${location.pathname.startsWith('/help') ? 'text-primary' : 'text-text-secondary hover:text-primary dark:text-gray-300 dark:hover:text-primary'}`}>Help</Link>
          </nav>
          <div className="flex gap-3">
            <Link to="/tickets/new" className="flex min-w-[84px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-10 px-4 bg-primary hover:bg-green-400 transition-colors text-text-main text-sm font-bold shadow-sm">
              <span className="truncate">Submit a Ticket</span>
            </Link>
            <button className="flex size-10 items-center justify-center rounded-lg bg-[#e7f3e7] dark:bg-white/10 text-text-main dark:text-white hover:bg-green-100 dark:hover:bg-white/20 transition-colors">
              <span className="material-symbols-outlined text-[20px]">notifications</span>
            </button>
            <div className="size-10 rounded-full bg-cover bg-center border-2 border-primary/20" style={{backgroundImage: `url(${IMAGES.USER_AVATAR})`}}></div>
          </div>
        </div>
        <button className="flex size-10 lg:hidden cursor-pointer items-center justify-center rounded-lg bg-[#e7f3e7] dark:bg-white/10 text-text-main dark:text-white ml-auto">
          <span className="material-symbols-outlined text-[20px]">menu</span>
        </button>
      </div>
    </header>
  );
};

export default Navbar;
