import React, { useState, useEffect } from 'react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

const navItems = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'design', label: 'Design' },
  { id: 'journey', label: 'Journey' },
  { id: 'contact', label: 'Contact' }
];

export default function Navbar() {
  const [activeSection, setActiveSection] = useState('home');
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      const sections = navItems.map(item => document.getElementById(item.id)).filter(Boolean);
      const scrollPosition = window.scrollY + 140;

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = sections[i];
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(section.id);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollTo = (id) => {
    setMobileMenuOpen(false);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'bg-[#080808]/85 backdrop-blur-md border-b border-white/10 py-3.5 shadow-2xl' 
          : 'bg-transparent py-5 border-b border-white/5'
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 sm:px-8 flex items-center justify-between">
        {/* Brand */}
        <a 
          href="#home" 
          onClick={(e) => { e.preventDefault(); scrollTo('home'); }}
          className="font-bold text-xl sm:text-2xl tracking-tighter text-[#f3f3ee] hover:text-[#c8f542] transition-colors flex items-center gap-2 group"
        >
          <span className="w-2.5 h-2.5 rounded-full bg-[#c8f542] group-hover:scale-125 transition-transform"></span>
          <span>Yahye Ahmed</span>
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-1 bg-[#121212]/90 border border-white/10 p-1.5 rounded-full backdrop-blur-lg shadow-inner">
          {navItems.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`px-4 py-1.5 rounded-full text-sm font-medium transition-all duration-200 relative ${
                  isActive 
                    ? 'text-[#11150a] bg-[#c8f542] font-semibold shadow-sm' 
                    : 'text-[#9c9c94] hover:text-[#f3f3ee] hover:bg-white/5'
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </nav>

        {/* CTA & Mobile Toggle */}
        <div className="flex items-center gap-3">
          <a
            href="#contact"
            onClick={(e) => { e.preventDefault(); scrollTo('contact'); }}
            className="hidden sm:inline-flex items-center gap-1.5 px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider bg-white/5 border border-white/15 text-[#f3f3ee] hover:bg-[#c8f542] hover:text-[#11150a] hover:border-[#c8f542] transition-all duration-200"
          >
            <span>Let’s talk</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </a>

          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
            className="md:hidden p-2.5 rounded-xl bg-white/5 border border-white/10 text-[#f3f3ee] hover:text-[#c8f542] transition-colors"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Drawer */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#0e0e0e]/95 backdrop-blur-2xl border-b border-white/10 px-6 py-6 transition-all duration-300">
          <div className="flex flex-col gap-2">
            {navItems.map((item) => (
              <button
                key={item.id}
                onClick={() => scrollTo(item.id)}
                className={`text-left px-4 py-3 rounded-xl text-base font-medium transition-colors ${
                  activeSection === item.id
                    ? 'bg-[#c8f542] text-[#11150a] font-semibold'
                    : 'text-[#9c9c94] hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </button>
            ))}
            <button
              onClick={() => scrollTo('contact')}
              className="mt-2 w-full py-3 rounded-xl text-center font-bold bg-[#c8f542] text-[#11150a] text-sm uppercase tracking-wider"
            >
              Let’s talk
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
