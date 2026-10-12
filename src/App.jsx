import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Design from './components/Design';
import Journey from './components/Journey';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="min-h-screen bg-[#080808] text-[#f3f3ee] selection:bg-[#c8f542] selection:text-[#11150a] relative">
      {/* Background ambient decorative effects */}
      <div className="fixed inset-0 pointer-events-none noise-overlay z-0" aria-hidden="true"></div>
      <div className="fixed inset-0 pointer-events-none grid-bg z-0" aria-hidden="true"></div>
      
      {/* Ambient Glowing Orbs */}
      <div 
        className="fixed -top-32 -right-32 w-96 h-96 rounded-full bg-[#3a4a12]/30 blur-[120px] pointer-events-none z-0 animate-drift"
        aria-hidden="true"
      ></div>
      <div 
        className="fixed bottom-10 -left-32 w-96 h-96 rounded-full bg-[#1c2a10]/25 blur-[120px] pointer-events-none z-0 animate-drift-delay"
        aria-hidden="true"
      ></div>

      {/* Main Content Layout */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-1">
          <Hero />
          <About />
          <Skills />
          <Projects />
          <Design />
          <Journey />
          <Contact />
        </main>
        <Footer />
      </div>
    </div>
  );
}
