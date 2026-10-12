import React from 'react';
import { journeyTimeline } from '../data/portfolioData';

export default function Journey() {
  return (
    <section id="journey" className="py-24 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-[#c8f542] mb-2">
            05 — Path
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f3f3ee] tracking-tight mb-3">
            My Journey
          </h2>
          <p className="text-base sm:text-lg text-[#9c9c94] max-w-2xl">
            Not a corporate timeline — a record of learning, building, and raising the standard of the work.
          </p>
        </div>

        {/* Timeline List */}
        <div className="relative pl-6 sm:pl-8 border-l border-white/10 space-y-12 max-w-3xl">
          {journeyTimeline.map((step, idx) => (
            <div key={idx} className="relative group">
              {/* Timeline Indicator Dot */}
              <span className="absolute -left-[31px] sm:-left-[39px] top-1.5 w-3.5 h-3.5 rounded-full bg-[#161616] border-2 border-white/30 group-hover:border-[#c8f542] group-hover:bg-[#c8f542] transition-colors"></span>

              <span className="font-mono text-xs uppercase tracking-wider text-[#c8f542] mb-1 block">
                {step.phase}
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-[#f3f3ee] mb-2 group-hover:text-[#c8f542] transition-colors">
                {step.title}
              </h3>
              <p className="text-sm sm:text-base text-[#9c9c94] leading-relaxed">
                {step.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
