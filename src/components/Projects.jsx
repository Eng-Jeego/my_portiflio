import React from 'react';
import { ExternalLink } from 'lucide-react';
import { GithubIcon } from './SocialIcons';
import { projects } from '../data/portfolioData';

// Mini visual browser mockups for each project type
function ProjectPreviewMock({ type }) {
  if (type === 'finance') {
    return (
      <div className="bg-[#0b101b] rounded-xl overflow-hidden border border-[#1e293b] p-4 text-xs font-sans h-full min-h-[240px] flex flex-col justify-center items-center relative">
        <div className="w-9 h-9 rounded-xl bg-[#059669]/20 border border-[#10b981]/30 flex items-center justify-center text-[#10b981] mb-2.5 shadow-lg shadow-[#10b981]/20">
          <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <rect width="20" height="14" x="2" y="5" rx="2" />
            <line x1="2" x2="22" y1="10" y2="10" />
          </svg>
        </div>
        <h4 className="font-bold text-white text-sm text-center">Sign in to your account</h4>
        <p className="text-[10px] text-slate-400 text-center mb-3">Take control of your personal finances and budgeting</p>

        <div className="w-full max-w-[210px] bg-[#111927]/90 rounded-xl p-3 border border-[#1e293b] space-y-2">
          <div>
            <div className="text-[8px] uppercase tracking-wider text-slate-400 font-mono mb-0.5">Email Address</div>
            <div className="h-6 rounded bg-[#0b101b] border border-slate-700/60 px-2 flex items-center text-[9px] text-slate-400">
              you@example.com
            </div>
          </div>
          <div>
            <div className="text-[8px] uppercase tracking-wider text-slate-400 font-mono mb-0.5">Password</div>
            <div className="h-6 rounded bg-[#0b101b] border border-slate-700/60 px-2 flex items-center text-[9px] text-slate-400">
              ••••••••
            </div>
          </div>
          <div className="h-6 rounded bg-[#059669] flex items-center justify-center text-[9px] font-bold text-white shadow-sm">
            Sign In
          </div>
        </div>
      </div>
    );
  }

  if (type === 'tourism') {
    return (
      <div className="bg-[#141710] rounded-xl overflow-hidden border border-white/10 p-3 text-xs font-sans h-full min-h-[220px] flex flex-col justify-between">
        <div>
          <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-white/70">
            <span className="font-bold text-[#c8f542]">Sahal Tours</span>
            <span className="text-[10px] text-white/50">Destinations · Book · Guides</span>
          </div>
          <div className="p-3 rounded-lg bg-white/5 border border-white/10 mb-3">
            <p className="text-[10px] text-[#c8f542] uppercase font-mono tracking-wider">Discover Somalia</p>
            <h4 className="font-bold text-white text-sm">Coast, culture, and curated stays.</h4>
          </div>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="p-2 rounded bg-white/5 border border-white/5 text-center">
            <p className="font-bold text-white text-[11px]">Liido Beach</p>
            <p className="text-[9px] text-white/50">Mogadishu</p>
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/5 text-center">
            <p className="font-bold text-white text-[11px]">Laas Geel</p>
            <p className="text-[9px] text-white/50">Hargeisa</p>
          </div>
          <div className="p-2 rounded bg-white/5 border border-white/5 text-center">
            <p className="font-bold text-white text-[11px]">Eyl Coast</p>
            <p className="text-[9px] text-white/50">Puntland</p>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'shop') {
    return (
      <div className="bg-[#121212] rounded-xl overflow-hidden border border-white/10 p-3 text-xs font-sans h-full min-h-[200px] flex flex-col justify-between">
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-white/70">
          <span className="font-bold tracking-widest text-[#f3f3ee]">ATELIER</span>
          <span className="text-[10px] text-white/50">Search · Cart (2)</span>
        </div>
        <div className="grid grid-cols-2 gap-2 my-auto">
          <div className="h-16 rounded bg-gradient-to-br from-white/10 to-white/5 border border-white/5 flex items-end p-1.5">
            <span className="text-[9px] text-white/60">Drop 01</span>
          </div>
          <div className="h-16 rounded bg-gradient-to-br from-white/10 to-white/5 border border-white/5 flex items-end p-1.5">
            <span className="text-[9px] text-white/60">Drop 02</span>
          </div>
        </div>
      </div>
    );
  }

  if (type === 'kanban') {
    return (
      <div className="bg-[#121212] rounded-xl overflow-hidden border border-white/10 p-3 text-xs font-sans h-full min-h-[200px]">
        <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-white/70">
          <span className="font-mono text-xs text-white/80">orbit-tasks</span>
          <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          <div className="space-y-1.5 bg-white/[0.02] p-1.5 rounded">
            <p className="text-[10px] text-white/40 font-mono">Backlog</p>
            <div className="h-6 rounded bg-white/10"></div>
            <div className="h-6 rounded bg-white/5"></div>
          </div>
          <div className="space-y-1.5 bg-white/[0.02] p-1.5 rounded">
            <p className="text-[10px] text-[#c8f542] font-mono">In Dev</p>
            <div className="h-6 rounded bg-[#c8f542]/20 border border-[#c8f542]/40"></div>
            <div className="h-6 rounded bg-white/10"></div>
          </div>
          <div className="space-y-1.5 bg-white/[0.02] p-1.5 rounded">
            <p className="text-[10px] text-white/40 font-mono">Done</p>
            <div className="h-6 rounded bg-white/10"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-[#121212] rounded-xl overflow-hidden border border-white/10 p-3 text-xs font-sans h-full min-h-[200px]">
      <div className="flex items-center justify-between pb-2 mb-3 border-b border-white/10 text-white/70">
        <span className="font-mono text-xs text-white/80">NORTH STUDIO</span>
        <span className="text-[10px] text-[#c8f542]">Agency v2</span>
      </div>
      <div className="p-3 bg-white/5 rounded border border-white/5 mb-3">
        <h4 className="font-bold text-white text-xs">Architecture for brands that move.</h4>
      </div>
      <div className="grid grid-cols-3 gap-1.5">
        <div className="h-10 rounded bg-white/10"></div>
        <div className="h-10 rounded bg-white/10"></div>
        <div className="h-10 rounded bg-white/10"></div>
      </div>
    </div>
  );
}

export default function Projects() {
  const featured = projects.find((p) => p.featured);
  const others = projects.filter((p) => !p.featured);

  return (
    <section id="projects" className="py-24 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-[#c8f542] mb-2">
            03 — Selected work
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f3f3ee] tracking-tight mb-3">
            Featured projects
          </h2>
          <p className="text-base sm:text-lg text-[#9c9c94] max-w-2xl">
            Interfaces and systems built end-to-end — from information architecture to working product.
          </p>
        </div>

        {/* Featured Big Card */}
        {featured && (
          <div className="mb-8 rounded-3xl bg-[#111111] border border-white/15 overflow-hidden p-6 sm:p-10 hover:border-[#c8f542]/40 transition-all duration-300 shadow-2xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              {/* Preview Window */}
              <div className="lg:col-span-6 rounded-2xl bg-[#080808] border border-white/10 p-3 shadow-inner">
                {/* Browser bar */}
                <div className="flex items-center gap-2 pb-2.5 mb-2.5 border-b border-white/10 text-white/40 text-[11px] font-mono">
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
                  <span className="w-2.5 h-2.5 rounded-full bg-white/20"></span>
                  <span className="ml-2 text-white/60">{featured.appUrl}</span>
                </div>
                <ProjectPreviewMock type={featured.previewType} />
              </div>

              {/* Description */}
              <div className="lg:col-span-6 space-y-4">
                <p className="font-mono text-xs uppercase tracking-wider text-[#c8f542]">
                  {featured.id} — {featured.category}
                </p>
                <h3 className="text-2xl sm:text-3xl font-extrabold text-[#f3f3ee]">
                  {featured.title}
                </h3>
                <p className="text-sm sm:text-base text-[#9c9c94] leading-relaxed">
                  {featured.description}
                </p>

                {/* Tech Badges */}
                <div className="flex flex-wrap gap-2 pt-2">
                  {featured.tags.map((tag) => (
                    <span
                      key={tag}
                      className="px-3 py-1 rounded-full text-xs font-medium bg-white/5 border border-white/10 text-[#f3f3ee]"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Buttons */}
                <div className="flex items-center gap-3 pt-3">
                  <a
                    href={featured.demoUrl}
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#c8f542] text-[#11150a] font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-opacity"
                  >
                    <span>Live Demo</span>
                    <ExternalLink className="w-3.5 h-3.5" />
                  </a>
                  <a
                    href={featured.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-white/15 text-[#f3f3ee] font-semibold text-xs uppercase tracking-wider hover:bg-white/10 transition-colors"
                  >
                    <GithubIcon className="w-3.5 h-3.5" />
                    <span>GitHub</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Other Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {others.map((proj) => (
            <div
              key={proj.id}
              className={`rounded-2xl bg-[#111111] border border-white/10 overflow-hidden p-6 hover:border-white/20 transition-all duration-300 flex flex-col justify-between ${
                proj.wide ? 'md:col-span-2 lg:col-span-1' : ''
              }`}
            >
              <div>
                {/* Browser frame preview */}
                <div className="rounded-xl bg-[#080808] border border-white/10 p-2.5 mb-5 shadow-inner">
                  <div className="flex items-center gap-1.5 pb-2 mb-2 border-b border-white/10 text-white/40 text-[10px] font-mono">
                    <span className="w-2 h-2 rounded-full bg-white/20"></span>
                    <span className="w-2 h-2 rounded-full bg-white/20"></span>
                    <span className="w-2 h-2 rounded-full bg-white/20"></span>
                    <span className="ml-2 text-white/50">{proj.appUrl}</span>
                  </div>
                  <ProjectPreviewMock type={proj.previewType} />
                </div>

                <p className="font-mono text-xs uppercase tracking-wider text-[#c8f542] mb-1">
                  {proj.id} — {proj.category}
                </p>
                <h3 className="text-xl font-bold text-[#f3f3ee] mb-2">
                  {proj.title}
                </h3>
                <p className="text-sm text-[#9c9c94] leading-relaxed mb-4">
                  {proj.description}
                </p>
              </div>

              <div>
                <div className="flex flex-wrap gap-1.5 mb-5">
                  {proj.tags.map((t) => (
                    <span
                      key={t}
                      className="px-2.5 py-0.5 rounded-md text-[11px] bg-white/5 border border-white/5 text-[#9c9c94]"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                <div className="flex items-center gap-2 pt-2 border-t border-white/10">
                  <a
                    href={proj.demoUrl}
                    className="flex-1 py-2 rounded-xl text-center text-xs font-semibold bg-[#c8f542] text-[#11150a] hover:opacity-90 transition-opacity"
                  >
                    Live Demo
                  </a>
                  <a
                    href={proj.githubUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-xl bg-white/5 border border-white/10 text-[#f3f3ee] hover:bg-white/10 transition-colors"
                    aria-label="GitHub Repository"
                  >
                    <GithubIcon className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
