import React from 'react';
import { ArrowDown, Code2, Terminal, Sparkles } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';
import image from "../assets/yahye.jpg";
export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="home" className="pt-32 pb-20 md:pt-44 md:pb-28 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
          
          {/* Hero Content */}
          <div className="lg:col-span-7 space-y-6">
            {/* Status Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs sm:text-sm text-[#f3f3ee]/90">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c8f542] opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-[#c8f542]"></span>
              </span>
              <span>{personalInfo.location} · {personalInfo.status}</span>
            </div>

            {/* Main Headline */}
            <h1 className="text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight leading-[1.05] text-[#f3f3ee]">
              {personalInfo.name}
            </h1>

            {/* Sub-role */}
            <p className="text-xl sm:text-2xl font-semibold text-[#c8f542] tracking-tight">
              {personalInfo.role}
            </p>

            {/* Intro paragraph */}
            <p className="text-base sm:text-lg text-[#9c9c94] max-w-xl leading-relaxed font-normal">
              {personalInfo.bio}
            </p>

            {/* Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-2">
              <button
                onClick={() => scrollTo('projects')}
                className="px-6 py-3.5 rounded-full bg-[#c8f542] text-[#11150a] font-bold text-sm tracking-wide hover:shadow-[0_0_25px_rgba(200,245,66,0.4)] hover:scale-105 active:scale-95 transition-all duration-200"
              >
                View My Work
              </button>
              <button
                onClick={() => scrollTo('contact')}
                className="px-6 py-3.5 rounded-full bg-white/5 border border-white/15 text-[#f3f3ee] font-semibold text-sm tracking-wide hover:bg-white/10 hover:border-white/25 active:scale-95 transition-all duration-200"
              >
                Let’s Connect
              </button>
            </div>

            {/* Stats row */}
            <div className="pt-6 border-t border-white/10 grid grid-cols-3 gap-4 max-w-lg">
              {personalInfo.stats.map((stat, i) => (
                <div key={i} className="space-y-0.5">
                  <div className="text-2xl sm:text-3xl font-extrabold text-[#f3f3ee] tracking-tight font-display">
                    {stat.value}
                  </div>
                  <div className="text-xs text-[#9c9c94] uppercase tracking-wider font-medium">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Hero Visual */}
          <div className="lg:col-span-5 relative flex justify-center">
            {/* Visual Container */}
            <div className="relative w-full max-w-md">
              {/* Photo Card with Frame */}
              <div className="relative rounded-3xl overflow-hidden border border-white/15 bg-[#121212] shadow-2xl group">
                <img
                  src={image}
                  alt={`Portrait of ${personalInfo.name}`}
                  className="w-full h-[430px] sm:h-[480px] object-cover object-top filter grayscale contrast-110 group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#080808] via-transparent to-transparent opacity-80 pointer-events-none"></div>

                <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full bg-black/75 backdrop-blur-md border border-white/15 text-[11px] font-mono font-medium text-[#c8f542]">
                    YA — 2026
                  </span>
                  <span className="text-xs text-white/70 font-mono flex items-center gap-1.5 bg-black/60 backdrop-blur-md px-2.5 py-1 rounded-full border border-white/10">
                    <Sparkles className="w-3 h-3 text-[#c8f542]" /> Designer & Dev
                  </span>
                </div>
              </div>

              {/* Floating Code Snippet Card */}
              <div className="hidden sm:block absolute -bottom-6 -left-8 bg-[#111111]/95 backdrop-blur-xl border border-white/15 rounded-2xl p-4 shadow-2xl font-mono text-xs w-64 hover:-translate-y-1 transition-transform">
                <div className="flex items-center gap-1.5 pb-2.5 mb-2.5 border-b border-white/10 text-white/50 text-[10px]">
                  <span className="w-2 h-2 rounded-full bg-red-500/80"></span>
                  <span className="w-2 h-2 rounded-full bg-yellow-500/80"></span>
                  <span className="w-2 h-2 rounded-full bg-green-500/80"></span>
                  <span className="ml-2 text-white/70">craft.js</span>
                </div>
                <div className="space-y-1 text-white/80">
                  <p><span className="text-purple-400">const</span> yahye = &#123;</p>
                  <p className="pl-3">role: <span className="text-[#c8f542]">"full-stack"</span>,</p>
                  <p className="pl-3">design: <span className="text-[#c8f542]">"visual systems"</span>,</p>
                  <p className="pl-3">stack: [<span className="text-amber-300">"React"</span>, <span className="text-cyan-300">"Tailwind"</span>],</p>
                  <p className="pl-3">city: <span className="text-[#c8f542]">"Mogadishu"</span></p>
                  <p>&#125;;</p>
                </div>
              </div>

              {/* Floating Badge Tags */}
              <div className="absolute -top-4 -right-4 px-3 py-1.5 rounded-full bg-[#161616] border border-[#c8f542]/40 text-[#c8f542] text-xs font-mono shadow-lg flex items-center gap-1.5">
                <Code2 className="w-3.5 h-3.5" /> UI Systems
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
