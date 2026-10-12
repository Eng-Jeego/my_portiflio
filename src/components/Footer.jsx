import React from 'react';
import { ArrowUp } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-white/10 bg-[#080808] relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-[#9c9c94]">
          © {currentYear} {personalInfo.name}. Designed &amp; developed in Mogadishu.
        </p>

        <button
          onClick={scrollToTop}
          className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-wider text-white/70 hover:text-[#c8f542] transition-colors"
        >
          <span>Back to top</span>
          <ArrowUp className="w-3.5 h-3.5" />
        </button>
      </div>
    </footer>
  );
}
