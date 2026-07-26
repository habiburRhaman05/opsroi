'use client';

import { useState, useCallback, useEffect } from 'react';
import { Play, X, ArrowRight, CheckCircle2, Zap, ShieldCheck, Sparkles } from 'lucide-react';
import { useBodyLock } from '@/src/hooks/useBodyLock';

const DEMO_VIDEO_ID = "dQw4w9WgXcQ"; // Demo video ID

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  useBodyLock(modalOpen);

  // ── Modal keyboard handler ──
  const closeModal = useCallback(() => setModalOpen(false), []);
  useEffect(() => {
    if (!modalOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [modalOpen, closeModal]);

  return (
    <>
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#163C49] via-[#1D4E5F] to-[#12313C] pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-[210px] lg:pb-36 text-white selection:bg-[#7DC243] selection:text-[#163C49]">
        {/* Watermark SVG */}
        <div 
          className="absolute top-0 right-0 pointer-events-none w-[150px] md:w-[250px] lg:w-[350px] z-0" 
          style={{ transform: 'translate(20%, -20%)', opacity: 0.05 }}
        >
          <img src="/watermark.svg" alt="" className="w-full h-auto" aria-hidden="true" />
        </div>

        {/* Glowing Background Radial Accents */}
        <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#7DC243]/20 via-[#ECB84D]/10 to-transparent blur-[130px] rounded-full" />
        <div className="pointer-events-none absolute top-1/3 -right-40 w-96 h-96 bg-[#7DC243]/15 blur-[140px] rounded-full" />
        <div className="pointer-events-none absolute bottom-10 -left-40 w-96 h-96 bg-[#ECB84D]/15 blur-[140px] rounded-full" />

        {/* Subtle Grid Overlay */}
        <div 
          className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
            
            {/* ─── LEFT COLUMN: Text Copy & CTAs ─── */}
            <div className="lg:col-span-7 flex flex-col items-center lg:items-start text-center lg:text-left space-y-6 lg:pr-4">
              
              {/* Feature Pill Badge */}
              <div className="fade-in-up inline-flex flex-wrap items-center justify-center gap-x-2.5 gap-y-1 px-4 py-1.5 rounded-full bg-[#7DC243]/15 border border-[#7DC243]/35 text-[#7DC243] text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(125,194,67,0.2)] backdrop-blur-md">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7DC243] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7DC243]"></span>
                </span>
                <span className="text-[#7DC243]">For Proven Contractor Founders</span>
              </div>

              {/* Main Headline */}
              <h1 className="fade-in-up text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.2]" style={{ animationDelay: '0.1s' }}>
                You built the business. <br className="hidden lg:block" />
                Now own the{' '}
                <span className="text-[#7DC243] drop-shadow-sm">
                  software your industry runs on.
                </span>
              </h1>

              {/* Subheadline Paragraph */}
              <p className="fade-in-up text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal mx-auto lg:mx-0" style={{ animationDelay: '0.2s' }}>
                OpsROI partners with contractors who&apos;ve already won, $3M to $10M operators with real credibility to build, launch, and own the operating system for their entire industry.
              </p>

              {/* CTA Action Buttons */}
              <div className="fade-in-up pt-2 flex flex-col sm:flex-row items-stretch sm:items-center justify-center lg:justify-start gap-4 w-full sm:w-auto" style={{ animationDelay: '0.3s' }}>
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-extrabold text-[#163C49] bg-[#7DC243] hover:bg-[#6eb238] shadow-[0_4px_25px_rgba(125,194,67,0.4)] hover:text-white hover:shadow-[0_6px_35px_rgba(125,194,67,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-base w-full sm:w-auto"
                >
                  <span>Get Started</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="#product"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 text-base shadow-sm w-full sm:w-auto"
                >
                  <Sparkles className="w-4 h-4 text-[#ECB84D]" />
                  <span>Explore Platform</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="fade-in-up pt-4 flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 sm:gap-6 w-full border-t border-white/15 text-xs sm:text-sm text-slate-200 font-medium" style={{ animationDelay: '0.4s' }}>
                <div className="flex items-center justify-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7DC243] shrink-0" />
                  <span>No long-term contracts</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <Zap className="w-4 h-4 text-[#ECB84D] shrink-0" />
                  <span>4-5 day complete setup</span>
                </div>
                <div className="flex items-center justify-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#7DC243] shrink-0" />
                  <span>Works for any niche</span>
                </div>
              </div>

            </div>

            {/* ─── RIGHT COLUMN: OpsROI Interactive Video Poster Card ─── */}
         <div className="fade-in-up lg:col-span-5 relative w-full" style={{ animationDelay: '0.2s' }}>

  {/* Ambient glow behind the whole card */}
  <div className="absolute -inset-6 bg-gradient-to-tr from-[#7DC243]/20 via-transparent to-[#ECB84D]/10 blur-3xl rounded-[2rem] opacity-70 pointer-events-none" />

  {/* Outer Glowing Border Frame */}
  <div className="relative group rounded-3xl p-3 bg-white/10 border border-white/20 shadow-[0_20px_60px_rgba(0,0,0,0.35)] backdrop-blur-2xl transition-all duration-500 hover:border-[#7DC243]/60 hover:shadow-[0_25px_70px_rgba(125,194,67,0.35)] hover:-translate-y-1">

    {/* Animated gradient border accent (top edge) */}
    <div className="absolute top-0 left-6 right-6 h-px bg-gradient-to-r from-transparent via-[#7DC243]/70 to-transparent" />

    {/* Poster Box */}
    <div
      onClick={() => setModalOpen(true)}
      className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#12313C] cursor-pointer group/poster shadow-inner"
    >
      {/* Dashboard mockup image */}
      <img
        className="w-full h-full object-cover scale-[1.02] transition-transform duration-700 group-hover/poster:scale-[1.06]"
        src="https://opsroi-delta.vercel.app/_next/image?url=https%3A%2F%2Fopsroi.com%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fassets.cdn.filesafe.space%252FaKNqKgojBfecmcYEpyvu%252Fmedia%252F6a4b39548a69aa2441a39fd2.png%26w%3D640%26q%3D75&w=384&q=75"
        alt="OpsROI product dashboard preview"
      />

      {/* Subtle diagonal shine sweep on hover */}
      <div className="absolute inset-0 opacity-0 group-hover/poster:opacity-100 transition-opacity duration-700">
        <div className="absolute -inset-y-10 -left-1/2 w-1/3 bg-gradient-to-r from-transparent via-white/10 to-transparent rotate-12 translate-x-0 group-hover/poster:translate-x-[250%] transition-transform duration-1000 ease-out" />
      </div>

      {/* Dark Gradient Overlay for Contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B35]/95 via-[#0F2B35]/25 to-[#0F2B35]/10" />

      {/* Fine grid texture overlay for a "tech dashboard" feel */}
      <div
        className="absolute inset-0 opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.5) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
        }}
      />

      {/* CENTER ANIMATED PLAY BUTTON */}
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative flex items-center justify-center">
          {/* Layered pulse rings */}
          <div className="absolute w-20 h-20 rounded-full bg-[#7DC243]/25 animate-ping [animation-duration:2.2s]" />
          <div className="absolute w-16 h-16 rounded-full bg-[#7DC243]/30 animate-pulse" />
          <div className="absolute w-16 h-16 rounded-full border border-[#7DC243]/40" />

          {/* Glowing Play Icon Circle */}
          <div className="relative w-16 h-16 rounded-full bg-gradient-to-br from-[#8FDA52] to-[#6BAE36] flex items-center justify-center text-[#163C49] shadow-[0_0_45px_rgba(125,194,67,0.9)] ring-4 ring-white/20 transition-all duration-300 group-hover/poster:scale-110 group-hover/poster:shadow-[0_0_60px_rgba(125,194,67,1)]">
            <Play className="w-6 h-6 fill-[#163C49] translate-x-0.5" />
          </div>
        </div>
      </div>

      {/* Top Demo Label Pill */}
      <div className="absolute top-3 sm:top-4 left-3 sm:left-4 inline-flex items-center gap-1.5 sm:gap-2 px-2.5 sm:px-3.5 py-1 sm:py-1.5 rounded-full bg-[#163C49]/90 border border-white/20 text-white text-[10px] sm:text-xs font-semibold backdrop-blur-md shadow-lg">
        <span className="relative flex h-2 w-2">
          <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7DC243] opacity-75" />
          <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7DC243]" />
        </span>
        <span className="hidden sm:inline">Interactive Product Tour</span>
        <span className="sm:hidden">Product Tour</span>
      </div>

      {/* Duration badge, top right */}
      <div className="absolute top-3 sm:top-4 right-3 sm:right-4 px-2 sm:px-2.5 py-0.5 sm:py-1 rounded-md bg-black/50 border border-white/15 text-white text-[10px] sm:text-[11px] font-semibold backdrop-blur-md tracking-wide">
        2:14
      </div>

      {/* Bottom Watch Demo Bar */}
      <div className="absolute bottom-3 sm:bottom-4 left-3 sm:left-4 right-3 sm:right-4 flex items-center justify-between px-3 sm:px-4 py-1.5 sm:py-2.5 rounded-xl bg-[#163C49]/90 border border-white/15 backdrop-blur-md text-[10px] sm:text-sm text-slate-100">
        <span className="font-semibold text-white truncate mr-2">See OpsROI in Action</span>
        <span className="text-[#7DC243] font-bold flex items-center gap-1 group-hover/poster:translate-x-1 transition-transform whitespace-nowrap">
          Watch Demo <span className="hidden sm:inline">(2 min)</span> &rarr;
        </span>
      </div>
    </div>

    {/* Bottom Live Metrics Bar */}
    <div className="mt-3 grid grid-cols-3 gap-1 sm:gap-2 px-2 sm:px-3 py-3 bg-[#163C49]/70 rounded-xl border border-white/10 text-center">
      <div className="transition-transform duration-300 hover:scale-105">
        <div className="text-lg sm:text-xl font-extrabold text-white tracking-tight">14K+</div>
        <div className="text-[11px] text-slate-300 font-medium">Agencies</div>
      </div>
      <div className="border-x border-white/15 transition-transform duration-300 hover:scale-105">
        <div className="text-lg sm:text-xl font-extrabold text-[#7DC243] tracking-tight">97%</div>
        <div className="text-[11px] text-slate-300 font-medium">Satisfaction</div>
      </div>
      <div className="transition-transform duration-300 hover:scale-105">
        <div className="text-lg sm:text-xl font-extrabold text-[#ECB84D] tracking-tight">$2.4M</div>
        <div className="text-[11px] text-slate-300 font-medium">Avg Impact</div>
      </div>
    </div>

  </div>
</div>

          </div>
        </div>
      </section>

      {/* ─── VIDEO MODAL OVERLAY ─── */}
      {modalOpen && (
        <div 
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-8"
          style={{ background: 'rgba(15, 43, 53, 0.82)', backdropFilter: 'blur(6px)' }}
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-4xl"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button - above video, top-right of wrapper */}
            <div className="flex justify-end mb-3">
              <button
                onClick={closeModal}
                aria-label="Close modal"
                className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-[#7DC243] text-white hover:text-[#163C49] border border-white/25 transition-all duration-200 shadow-lg text-sm font-semibold group"
              >
                <X className="w-4 h-4 transition-transform duration-200 group-hover:rotate-90" />
                <span>Close</span>
              </button>
            </div>

            {/* Video card */}
            <div className="rounded-2xl overflow-hidden border border-white/15 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src={``}
                  title="OpsROI Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="w-full h-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}


