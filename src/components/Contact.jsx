import React, { useState } from 'react';
import { Mail, MapPin, Send, CheckCircle2, AlertCircle } from 'lucide-react';
import { GithubIcon, LinkedinIcon } from './SocialIcons';
import { personalInfo } from '../data/portfolioData';

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });
  const [status, setStatus] = useState({ type: '', text: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      setStatus({ type: 'error', text: 'Please complete every field.' });
      return;
    }

    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus({ type: 'error', text: 'Enter a valid email address.' });
      return;
    }

    setStatus({ type: 'success', text: 'Thanks! Launching your email client…' });

    const subject = encodeURIComponent(`Portfolio inquiry from ${name}`);
    const body = encodeURIComponent(`${message}\n\n— ${name} (${email})`);
    window.location.href = `mailto:${personalInfo.contacts.email}?subject=${subject}&body=${body}`;

    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section id="contact" className="py-24 border-t border-white/5 relative">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        {/* Section Heading */}
        <div className="mb-14">
          <p className="text-xs font-mono uppercase tracking-widest text-[#c8f542] mb-2">
            06 — Contact
          </p>
          <h2 className="text-3xl sm:text-5xl font-extrabold text-[#f3f3ee] tracking-tight max-w-3xl">
            Have a project in mind? Let’s build something great.
          </h2>
        </div>

        {/* 2-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16">
          {/* Left Info Column */}
          <div className="lg:col-span-5 space-y-8">
            <p className="text-base sm:text-lg text-[#9c9c94] leading-relaxed">
              Whether you need a full-stack application, a brand system, or a site that has to feel considered — write with context. I read every message.
            </p>

            <div className="space-y-4">
              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#121212] border border-white/10">
                <div className="p-2.5 rounded-lg bg-[#c8f542]/10 text-[#c8f542]">
                  <Mail className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#9c9c94] font-mono block">Email</span>
                  <a
                    href={`mailto:${personalInfo.contacts.email}`}
                    className="text-sm font-semibold text-white hover:text-[#c8f542] transition-colors"
                  >
                    {personalInfo.contacts.email}
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#121212] border border-white/10">
                <div className="p-2.5 rounded-lg bg-white/5 text-white">
                  <GithubIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#9c9c94] font-mono block">GitHub</span>
                  <a
                    href={personalInfo.contacts.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-[#c8f542] transition-colors"
                  >
                    github.com/Eng-Jeego
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#121212] border border-white/10">
                <div className="p-2.5 rounded-lg bg-white/5 text-white">
                  <LinkedinIcon className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#9c9c94] font-mono block">LinkedIn</span>
                  <a
                    href={personalInfo.contacts.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm font-semibold text-white hover:text-[#c8f542] transition-colors"
                  >
                    linkedin.com/in/yahyeahmed
                  </a>
                </div>
              </div>

              <div className="flex items-center gap-4 p-4 rounded-xl bg-[#121212] border border-white/10">
                <div className="p-2.5 rounded-lg bg-white/5 text-white">
                  <MapPin className="w-5 h-5" />
                </div>
                <div>
                  <span className="text-xs text-[#9c9c94] font-mono block">Location</span>
                  <p className="text-sm font-semibold text-white">
                    {personalInfo.location}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Form Column */}
          <div className="lg:col-span-7">
            <form onSubmit={handleSubmit} className="p-8 rounded-3xl bg-[#121212] border border-white/10 space-y-5 shadow-2xl">
              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#9c9c94] mb-2">
                  Name
                </label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="Your name"
                  className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-white/10 text-white placeholder-white/30 focus:border-[#c8f542] focus:outline-none focus:ring-1 focus:ring-[#c8f542] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#9c9c94] mb-2">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="you@domain.com"
                  className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-white/10 text-white placeholder-white/30 focus:border-[#c8f542] focus:outline-none focus:ring-1 focus:ring-[#c8f542] transition-colors"
                />
              </div>

              <div>
                <label className="block text-xs font-mono uppercase tracking-wider text-[#9c9c94] mb-2">
                  Message
                </label>
                <textarea
                  name="message"
                  rows="4"
                  value={formData.message}
                  onChange={handleChange}
                  placeholder="What are we building?"
                  className="w-full px-4 py-3 rounded-xl bg-[#080808] border border-white/10 text-white placeholder-white/30 focus:border-[#c8f542] focus:outline-none focus:ring-1 focus:ring-[#c8f542] transition-colors"
                ></textarea>
              </div>

              <button
                type="submit"
                className="w-full py-3.5 rounded-xl bg-[#c8f542] text-[#11150a] font-bold text-sm uppercase tracking-wider hover:opacity-90 active:scale-[0.99] transition-all flex items-center justify-center gap-2 shadow-lg shadow-[#c8f542]/20"
              >
                <span>Send message</span>
                <Send className="w-4 h-4" />
              </button>

              {status.text && (
                <div
                  className={`flex items-center gap-2 text-sm p-3 rounded-xl ${
                    status.type === 'error'
                      ? 'bg-rose-500/10 border border-rose-500/20 text-rose-400'
                      : 'bg-[#c8f542]/10 border border-[#c8f542]/20 text-[#c8f542]'
                  }`}
                >
                  {status.type === 'error' ? (
                    <AlertCircle className="w-4 h-4 shrink-0" />
                  ) : (
                    <CheckCircle2 className="w-4 h-4 shrink-0" />
                  )}
                  <span>{status.text}</span>
                </div>
              )}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
