import React from 'react';
import { personalInfo, aboutPoints } from '../data/portfolioData';
import { Layers, Cpu, Palette, PenTool, Lightbulb, Sparkles } from 'lucide-react';

const icons = [Layers, Cpu, Palette, PenTool, Lightbulb, Sparkles];

export default function About() {
  return (
    <section id="about" className="py-24 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-[#c8f542] mb-2">
            01 — About
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f3f3ee] tracking-tight">
            Developer who designs. Designer who ships.
          </h2>
        </div>

        {/* 2-Column Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Text Intro */}
          <div className="lg:col-span-5 space-y-6 text-[#9c9c94] text-base sm:text-lg leading-relaxed">
            <p className="border-l-2 border-[#c8f542] pl-5 text-[#f3f3ee] font-medium">
              {personalInfo.extendedBio1}
            </p>
            <p className="pl-5">
              {personalInfo.extendedBio2}
            </p>
          </div>

          {/* Right Core Pillars */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {aboutPoints.map((point, index) => {
              const Icon = icons[index % icons.length];
              return (
                <div
                  key={point.num}
                  className="p-5 rounded-2xl bg-[#111111]/80 border border-white/10 hover:border-[#c8f542]/40 hover:bg-[#161616] transition-all duration-300 group"
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="font-mono text-xs text-[#c8f542] font-semibold">
                      {point.num}
                    </span>
                    <Icon className="w-4 h-4 text-[#9c9c94] group-hover:text-[#c8f542] transition-colors" />
                  </div>
                  <h3 className="text-lg font-bold text-[#f3f3ee] mb-1.5 group-hover:text-[#c8f542] transition-colors">
                    {point.title}
                  </h3>
                  <p className="text-sm text-[#9c9c94] leading-relaxed">
                    {point.desc}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
