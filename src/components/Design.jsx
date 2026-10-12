import React from 'react';
import { designWorks } from '../data/portfolioData';

export default function Design() {
  return (
    <section id="design" className="py-24 border-t border-white/5 relative bg-[#0a0a0a]/70">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-[#c8f542] mb-2">
            04 — Graphic design
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f3f3ee] tracking-tight mb-3">
            Visual work
          </h2>
          <p className="text-base sm:text-lg text-[#9c9c94] max-w-2xl">
            Identity, print, and digital campaigns — composition as a thinking tool, not decoration.
          </p>
        </div>

        {/* Masonry / Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {/* Item 1: Sahal Brand Identity */}
          <div className="rounded-2xl bg-[#121212] border border-white/10 p-6 flex flex-col justify-between hover:border-[#c8f542]/40 transition-all duration-300 group">
            <div className="bg-[#181d11] rounded-xl p-8 flex flex-col items-center justify-center text-center border border-white/5 min-h-[220px] mb-5">
              <span className="font-mono text-2xl font-black text-[#c8f542] tracking-widest mb-1">
                SA
              </span>
              <span className="text-xs font-mono tracking-widest text-white/70 uppercase">
                SAHAL
              </span>
              <span className="text-[10px] text-white/40 mt-3 font-mono">
                Identity System
              </span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#c8f542] uppercase tracking-wider block mb-1">
                Brand identity
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-[#c8f542] transition-colors">
                Sahal Visual System
              </h3>
              <p className="text-xs text-[#9c9c94] mt-1">
                Wordmark, grid, and color discipline.
              </p>
            </div>
          </div>

          {/* Item 2: Code & Form Poster */}
          <div className="rounded-2xl bg-[#121212] border border-white/10 p-6 flex flex-col justify-between hover:border-[#c8f542]/40 transition-all duration-300 group">
            <div className="bg-gradient-to-b from-[#1c1c1c] to-[#0d0d0d] rounded-xl p-6 border border-white/5 min-h-[220px] mb-5 flex flex-col justify-between">
              <p className="font-mono text-[10px] text-[#c8f542]">Mogadishu · 2026</p>
              <div>
                <h4 className="text-2xl font-black text-white leading-none tracking-tighter">
                  CODE<br />&amp; FORM
                </h4>
                <p className="text-[10px] text-white/50 mt-1">A night of systems, type, and product.</p>
              </div>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#c8f542] uppercase tracking-wider block mb-1">
                Editorial & Print
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-[#c8f542] transition-colors">
                Event Poster
              </h3>
              <p className="text-xs text-[#9c9c94] mt-1">
                Event poster with strict editorial type scale.
              </p>
            </div>
          </div>

          {/* Item 3: Social Media Campaign */}
          <div className="rounded-2xl bg-[#121212] border border-white/10 p-6 flex flex-col justify-between hover:border-[#c8f542]/40 transition-all duration-300 group">
            <div className="bg-[#151515] rounded-xl p-6 border border-white/5 min-h-[220px] mb-5 flex flex-col justify-between">
              <div className="flex items-center justify-between">
                <span className="w-2 h-2 rounded-full bg-[#c8f542]"></span>
                <span className="text-[10px] font-mono text-white/50">Drop 04</span>
              </div>
              <div>
                <p className="text-lg font-bold text-white leading-snug">
                  Quiet luxury<br />for daily wear.
                </p>
              </div>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#c8f542] uppercase tracking-wider block mb-1">
                Social media
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-[#c8f542] transition-colors">
                Campaign Visuals
              </h3>
              <p className="text-xs text-[#9c9c94] mt-1">
                Campaign frames for social product storytelling.
              </p>
            </div>
          </div>

          {/* Item 4: Logo Design */}
          <div className="rounded-2xl bg-[#121212] border border-white/10 p-6 flex flex-col justify-between hover:border-[#c8f542]/40 transition-all duration-300 group">
            <div className="bg-[#0f110c] rounded-xl p-8 border border-white/5 min-h-[220px] mb-5 flex flex-col items-center justify-center">
              <svg viewBox="0 0 120 120" className="w-20 h-20 text-[#c8f542]">
                <circle cx="60" cy="60" r="52" fill="none" stroke="currentColor" strokeWidth="2" opacity="0.3"/>
                <path d="M38 84 L60 32 L82 84 M48 68 H72" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="square"/>
              </svg>
              <span className="text-[10px] font-mono text-white/50 mt-3">Monogram</span>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#c8f542] uppercase tracking-wider block mb-1">
                Logo mark
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-[#c8f542] transition-colors">
                YA Geometric Mark
              </h3>
              <p className="text-xs text-[#9c9c94] mt-1">
                High-contrast, geometric and scalable identity.
              </p>
            </div>
          </div>

          {/* Item 5: Marketing Graphics (Wide on desktop) */}
          <div className="md:col-span-2 rounded-2xl bg-[#121212] border border-white/10 p-6 flex flex-col justify-between hover:border-[#c8f542]/40 transition-all duration-300 group">
            <div className="bg-gradient-to-r from-[#171a10] to-[#111111] rounded-xl p-8 border border-white/5 min-h-[220px] mb-5 flex flex-col justify-between">
              <span className="text-[10px] font-mono uppercase tracking-widest text-[#c8f542]">
                Launch sequence
              </span>
              <div>
                <h4 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight leading-tight">
                  Ship the product.<br />Keep the signal clean.
                </h4>
              </div>
              <div className="flex gap-4 pt-3 text-[11px] font-mono text-white/60">
                <span>01 Strategy</span>
                <span>02 Visual</span>
                <span>03 Motion</span>
              </div>
            </div>
            <div>
              <span className="text-[11px] font-mono text-[#c8f542] uppercase tracking-wider block mb-1">
                Product marketing
              </span>
              <h3 className="text-lg font-bold text-white group-hover:text-[#c8f542] transition-colors">
                Digital Launch Kit
              </h3>
              <p className="text-xs text-[#9c9c94] mt-1">
                Launch assets for cross-channel product release.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
