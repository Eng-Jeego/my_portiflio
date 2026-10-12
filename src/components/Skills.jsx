import React, { useState } from 'react';
import { skillCategories } from '../data/portfolioData';

const categories = [
  { id: 'frontend', label: 'Frontend' },
  { id: 'backend', label: 'Backend' },
  { id: 'database', label: 'Database' },
  { id: 'other', label: 'Other & Design' }
];

export default function Skills() {
  const [activeTab, setActiveTab] = useState('frontend');

  const currentSkills = skillCategories[activeTab] || [];

  return (
    <section id="skills" className="py-24 border-t border-white/5 relative bg-[#0b0b0b]/60">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="mb-12">
          <p className="text-xs font-mono uppercase tracking-widest text-[#c8f542] mb-2">
            02 — Skills
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f3f3ee] tracking-tight">
            A focused stack. Used with intent.
          </h2>
        </div>

        {/* Tab Controls */}
        <div className="flex flex-wrap gap-2.5 mb-10 pb-4 border-b border-white/10">
          {categories.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-5 py-2.5 rounded-full text-sm font-semibold transition-all duration-200 ${
                activeTab === tab.id
                  ? 'bg-[#c8f542] text-[#11150a] shadow-md shadow-[#c8f542]/20'
                  : 'bg-white/5 border border-white/10 text-[#9c9c94] hover:text-[#f3f3ee] hover:bg-white/10'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Skills Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {currentSkills.map((skill, index) => (
            <div
              key={skill.name}
              className="p-6 rounded-2xl bg-[#121212] border border-white/10 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-2">
                  <h3 className="text-xl font-bold text-[#f3f3ee] group-hover:text-[#c8f542] transition-colors">
                    {skill.name}
                  </h3>
                  <span className="font-mono text-xs text-[#9c9c94]">
                    {skill.level}%
                  </span>
                </div>
                <p className="text-sm text-[#9c9c94] mb-6 leading-relaxed">
                  {skill.desc}
                </p>
              </div>

              {/* Skill Bar */}
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-[#a6d823] to-[#c8f542] rounded-full transition-all duration-1000 ease-out group-hover:brightness-110"
                  style={{ width: `${skill.level}%` }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
