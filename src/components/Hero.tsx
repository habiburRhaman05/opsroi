'use client';

import { useEffect, useState, useCallback } from 'react';
import { Play, X, ArrowRight, CheckCircle2, Zap, ShieldCheck, Sparkles } from 'lucide-react';

const WORDS = ["Marketing Agencies.", "Coaching.", "Creative Studios.", "Home Services.", "Every Agency."];
const LONGEST_WORD = "Marketing Agencies.";
const DEMO_VIDEO_ID = "dQw4w9WgXcQ"; // Demo video ID

export default function Hero() {
  const [currentWord, setCurrentWord] = useState("");
  const [isDeleting, setIsDeleting] = useState(false);
  const [loopNum, setLoopNum] = useState(0);
  const [typingSpeed, setTypingSpeed] = useState(80);
  const [modalOpen, setModalOpen] = useState(false);

  // ── Typewriter effect ──
  useEffect(() => {
    let timer: NodeJS.Timeout;
    const handleType = () => {
      const i = loopNum % WORDS.length;
      const fullText = WORDS[i];

      setCurrentWord(
        isDeleting
          ? fullText.substring(0, currentWord.length - 1)
          : fullText.substring(0, currentWord.length + 1)
      );

      setTypingSpeed(isDeleting ? 40 : 90);

      if (!isDeleting && currentWord === fullText) {
        setTimeout(() => setIsDeleting(true), 2000);
      } else if (isDeleting && currentWord === '') {
        setIsDeleting(false);
        setLoopNum(loopNum + 1);
        setTypingSpeed(400);
      }
    };
    timer = setTimeout(handleType, typingSpeed);
    return () => clearTimeout(timer);
  }, [currentWord, isDeleting, loopNum, typingSpeed]);

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
      <section id="home" className="relative overflow-hidden bg-gradient-to-br from-[#163C49] via-[#1D4E5F] to-[#12313C] pt-[180px] pb-24 lg:pt-[210px] lg:pb-36 text-white selection:bg-[#7DC243] selection:text-[#163C49]">
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
            <div className="lg:col-span-7 flex flex-col items-start text-left space-y-6 lg:pr-4">
              
              {/* Feature Pill Badge */}
              <div className="inline-flex items-center gap-2.5 px-4 py-1.5 rounded-full bg-[#7DC243]/15 border border-[#7DC243]/35 text-[#7DC243] text-xs sm:text-sm font-semibold tracking-wide shadow-[0_0_20px_rgba(125,194,67,0.2)] backdrop-blur-md">
                <span className="flex h-2 w-2 relative">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7DC243] opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-[#7DC243]"></span>
                </span>
                <span className="text-[#7DC243]">AI-Powered OS</span>
                <span className="text-white/40">•</span>
                <span className="text-slate-100">Built for Modern Agencies</span>
              </div>

              {/* Main Headline */}
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-[1.12]">
                The{' '}
                <span className="text-[#7DC243] drop-shadow-sm">
                  AI-powered
                </span>{' '}
                business operating system{' '}
                <br className="hidden sm:inline" />
                <span className="inline-flex items-center text-slate-100 mt-1">
                  for{' '}
                  <span 
                    className="ml-2.5 text-[#ECB84D] underline decoration-[#ECB84D]/40 underline-offset-8 font-semibold inline-block"
                    style={{ minWidth: `${LONGEST_WORD.length}ch` }}
                  >
                    {currentWord}
                    <span className="animate-pulse text-[#ECB84D] ml-0.5">|</span>
                  </span>
                </span>
              </h1>

              {/* Subheadline Paragraph */}
              <p className="text-lg sm:text-xl text-slate-200 leading-relaxed max-w-2xl font-normal">
                One unified platform to manage pipelines, automate follow-ups with intelligent AI agents, and maximize ROI — custom tailored for your agency.
              </p>

              {/* CTA Action Buttons */}
              <div className="pt-2 flex flex-col sm:flex-row items-stretch sm:items-center gap-4 w-full sm:w-auto">
                <a
                  href="#contact"
                  className="group relative inline-flex items-center justify-center gap-3 px-8 py-4 rounded-xl font-extrabold text-[#163C49] bg-[#7DC243] hover:bg-[#6eb238] shadow-[0_4px_25px_rgba(125,194,67,0.4)] hover:shadow-[0_6px_35px_rgba(125,194,67,0.6)] hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 text-base"
                >
                  <span>Start 14-Day Free Trial</span>
                  <ArrowRight className="w-5 h-5 transition-transform duration-300 group-hover:translate-x-1" />
                </a>

                <a
                  href="#product"
                  className="inline-flex items-center justify-center gap-2 px-7 py-4 rounded-xl font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/20 hover:border-white/40 backdrop-blur-md transition-all duration-300 text-base shadow-sm"
                >
                  <Sparkles className="w-4 h-4 text-[#ECB84D]" />
                  <span>Explore Platform</span>
                </a>
              </div>

              {/* Trust Badges */}
              <div className="pt-4 grid grid-cols-1 sm:grid-cols-3 gap-3 w-full border-t border-white/15 text-xs sm:text-sm text-slate-200 font-medium">
                <div className="flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-[#7DC243] shrink-0" />
                  <span>No credit card required</span>
                </div>
                <div className="flex items-center gap-2">
                  <Zap className="w-4 h-4 text-[#ECB84D] shrink-0" />
                  <span>4–5 day complete setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <ShieldCheck className="w-4 h-4 text-[#7DC243] shrink-0" />
                  <span>Works for any niche</span>
                </div>
              </div>

            </div>

            {/* ─── RIGHT COLUMN: OpsROI Interactive Video Poster Card ─── */}
            <div className="lg:col-span-5 relative w-full">
              
              {/* Outer Glowing Border Frame */}
              <div className="relative group rounded-3xl p-3 bg-white/10 border border-white/20 shadow-[0_20px_50px_rgba(0,0,0,0.3)] backdrop-blur-2xl transition-all duration-500 hover:border-[#7DC243]/60 hover:shadow-[0_20px_50px_rgba(125,194,67,0.3)]">
                
                {/* Poster Box */}
                <div 
                  onClick={() => setModalOpen(true)}
                  className="relative aspect-[16/10] w-full rounded-2xl overflow-hidden bg-[#12313C] cursor-pointer group/poster shadow-inner"
                >
                  {/* High-tech SVG Dashboard Mockup Graphic */}
                  <svg viewBox="0 0 520 325" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full object-cover transition-transform duration-700 group-hover/poster:scale-105 opacity-90 group-hover/poster:opacity-100">
                    <rect width="520" height="325" fill="url(#hero-bg-grad)" />

                    {/* Tech Grid */}
                    <g opacity="0.08">
                      {Array.from({ length: 9 }).map((_, i) => (
                        <line key={`h${i}`} x1="0" y1={36 + i * 34} x2="520" y2={36 + i * 34} stroke="#fff" strokeWidth="1" />
                      ))}
                      {Array.from({ length: 13 }).map((_, i) => (
                        <line key={`v${i}`} x1={40 + i * 38} y1="0" x2={40 + i * 38} y2="325" stroke="#fff" strokeWidth="1" />
                      ))}
                    </g>

                    {/* Top Kanban Cards */}
                    <g transform="translate(20, 20)">
                      <rect width="115" height="92" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                      <rect x="12" y="12" width="70" height="6" rx="3" fill="#7DC243" />
                      <rect x="12" y="28" width="90" height="5" rx="2.5" fill="rgba(255,255,255,0.3)" />
                      <rect x="12" y="40" width="60" height="4" rx="2" fill="rgba(255,255,255,0.15)" />

                      <rect x="128" width="115" height="92" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                      <rect x="140" y="12" width="55" height="6" rx="3" fill="#ECB84D" />
                      <rect x="140" y="28" width="85" height="5" rx="2.5" fill="rgba(255,255,255,0.3)" />
                      <rect x="140" y="40" width="75" height="4" rx="2" fill="rgba(255,255,255,0.15)" />

                      <rect x="256" width="115" height="92" rx="10" fill="rgba(255,255,255,0.08)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                      <rect x="268" y="12" width="65" height="6" rx="3" fill="#7DC243" />
                      <rect x="268" y="28" width="80" height="5" rx="2.5" fill="rgba(255,255,255,0.3)" />
                    </g>

                    {/* Chart Area */}
                    <g transform="translate(20, 130)">
                      <rect width="351" height="175" rx="10" fill="rgba(22,60,73,0.7)" stroke="rgba(255,255,255,0.1)" strokeWidth="1" />
                      <path d="M 20 120 Q 80 80 140 100 T 260 40 T 330 20 L 330 140 L 20 140 Z" fill="url(#hero-chart-grad)" opacity="0.4" />
                      <path d="M 20 120 Q 80 80 140 100 T 260 40 T 330 20" stroke="#7DC243" strokeWidth="3" fill="none" strokeLinecap="round" />
                      
                      {/* Pulse Node */}
                      <circle cx="260" cy="40" r="6" fill="#7DC243" />
                      <circle cx="260" cy="40" r="12" fill="#7DC243" opacity="0.4" className="animate-ping" />
                    </g>

                    {/* Side Live Stat Widget */}
                    <g transform="translate(385, 20)">
                      <rect width="115" height="85" rx="10" fill="rgba(255,255,255,0.09)" stroke="rgba(125,194,67,0.4)" strokeWidth="1" />
                      <text x="14" y="26" fill="rgba(255,255,255,0.7)" fontSize="9" fontWeight="600" fontFamily="sans-serif">ROI GROWTH</text>
                      <text x="14" y="54" fill="#7DC243" fontSize="22" fontWeight="bold" fontFamily="sans-serif">+340%</text>

                      <rect y="98" width="115" height="85" rx="10" fill="rgba(255,255,255,0.09)" stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
                      <text x="14" y="124" fill="rgba(255,255,255,0.7)" fontSize="9" fontWeight="600" fontFamily="sans-serif">AUTO CLOSES</text>
                      <text x="14" y="152" fill="#ECB84D" fontSize="22" fontWeight="bold" fontFamily="sans-serif">94.8%</text>
                    </g>

                    <defs>
                      <linearGradient id="hero-bg-grad" x1="0" y1="0" x2="520" y2="325">
                        <stop offset="0%" stopColor="#163C49" />
                        <stop offset="50%" stopColor="#1D4E5F" />
                        <stop offset="100%" stopColor="#0F2B35" />
                      </linearGradient>
                      <linearGradient id="hero-chart-grad" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor="#7DC243" stopOpacity="0.6" />
                        <stop offset="100%" stopColor="#7DC243" stopOpacity="0" />
                      </linearGradient>
                    </defs>
                  </svg>

                  {/* Dark Gradient Overlay for Contrast */}
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0F2B35]/90 via-[#0F2B35]/30 to-transparent" />

                  {/* CENTER ANIMATED PLAY BUTTON */}
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative flex items-center justify-center">
                      {/* Pulse rings */}
                      <div className="absolute w-24 h-24 rounded-full bg-[#7DC243]/40 animate-ping" />
                      <div className="absolute w-20 h-20 rounded-full bg-[#7DC243]/30 animate-pulse" />
                      
                      {/* Glowing Play Icon Circle */}
                      <div className="relative w-16 h-16 sm:w-20 sm:h-20 rounded-full bg-[#7DC243] flex items-center justify-center text-[#163C49] shadow-[0_0_40px_rgba(125,194,67,0.85)] transition-all duration-300 group-hover/poster:scale-110 group-hover/poster:shadow-[0_0_55px_rgba(125,194,67,1)]">
                        <Play className="w-7 h-7 sm:w-8 sm:h-8 fill-[#163C49] translate-x-0.5" />
                      </div>
                    </div>
                  </div>

                  {/* Top Demo Label Pill */}
                  <div className="absolute top-4 left-4 inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#163C49]/90 border border-white/20 text-white text-xs font-semibold backdrop-blur-md shadow-lg">
                    <span className="w-2 h-2 rounded-full bg-[#7DC243] animate-pulse" />
                    <span>Interactive Product Tour</span>
                  </div>

                  {/* Bottom Watch Demo Bar */}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between px-4 py-2.5 rounded-xl bg-[#163C49]/90 border border-white/15 backdrop-blur-md text-xs sm:text-sm text-slate-100">
                    <span className="font-semibold text-white">See OpsROI in Action</span>
                    <span className="text-[#7DC243] font-bold flex items-center gap-1 group-hover/poster:translate-x-1 transition-transform">
                      Watch Demo (2 min) &rarr;
                    </span>
                  </div>

                </div>

                {/* Bottom Live Metrics Bar */}
                <div className="mt-3 grid grid-cols-3 gap-2 px-3 py-3 bg-[#163C49]/70 rounded-xl border border-white/10 text-center">
                  <div>
                    <div className="text-lg sm:text-xl font-extrabold text-white tracking-tight">14K+</div>
                    <div className="text-[11px] text-slate-300 font-medium">Agencies</div>
                  </div>
                  <div className="border-x border-white/15">
                    <div className="text-lg sm:text-xl font-extrabold text-[#7DC243] tracking-tight">97%</div>
                    <div className="text-[11px] text-slate-300 font-medium">Satisfaction</div>
                  </div>
                  <div>
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
          className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-[#0F2B35]/90 backdrop-blur-md animate-in fade-in duration-200"
          onClick={closeModal}
        >
          <div 
            className="relative w-full max-w-4xl rounded-2xl overflow-hidden bg-[#163C49] border border-white/20 shadow-2xl transition-all"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={closeModal}
              aria-label="Close modal"
              className="absolute top-3 right-3 sm:top-4 sm:right-4 z-20 p-2.5 rounded-full bg-[#12313C]/90 text-white hover:bg-[#7DC243] hover:text-[#163C49] border border-white/20 transition-all shadow-md group"
            >
              <X className="w-5 h-5 transition-transform group-hover:rotate-90" />
            </button>

            {/* Video iFrame Container */}
            <div className="relative aspect-video w-full bg-black">
              <iframe
                src={`https://www.youtube-nocookie.com/embed/${DEMO_VIDEO_ID}?autoplay=1&rel=0`}
                title="OpsROI Demo Video"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
                className="w-full h-full border-0"
              />
            </div>
          </div>
        </div>
      )}
    </>
  );
}


