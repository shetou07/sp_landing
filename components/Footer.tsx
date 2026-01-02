
import React from 'react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full bg-white dark:bg-surface-dark border-t border-gray-100 dark:border-white/10 mt-auto py-8">
      <div className="max-w-7xl mx-auto px-4 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex items-center gap-2">
          <div className="size-6 bg-primary/20 rounded flex items-center justify-center text-primary-content dark:text-primary">
            <span className="material-symbols-outlined text-[16px]">school</span>
          </div>
          <p className="text-sm font-semibold text-text-main dark:text-white">Student Pesa</p>
        </div>
        <div className="flex gap-6 text-sm text-text-secondary dark:text-gray-400">
          <a className="hover:text-primary transition-colors" href="#">Privacy Policy</a>
          <a className="hover:text-primary transition-colors" href="#">Terms of Service</a>
          <a className="hover:text-primary transition-colors" href="#">Cookie Policy</a>
        </div>
        <p className="text-xs text-gray-400">© 2026 Student Pesa. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
