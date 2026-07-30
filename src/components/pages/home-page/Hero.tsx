'use client';

import { useState, useCallback, useEffect } from 'react';
import { Play, X, ArrowRight } from 'lucide-react';
import { useBodyLock } from '@/src/hooks/useBodyLock';

export default function Hero() {
  const [modalOpen, setModalOpen] = useState(false);
  useBodyLock(modalOpen);

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
      <section
        id="home"
        className="relative overflow-hidden bg-navy-deep pt-32 pb-24 sm:pt-40 sm:pb-28 lg:pt-44 lg:pb-32 text-white selection:bg-green selection:text-navy-deep"
      >
        {/* Single restrained ambient glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute -left-40 top-0 -z-0 h-[520px] w-[900px] rounded-full bg-green/10 blur-[160px]"
        />

        {/* Brand watermark - bottom right corner */}
        <div
          aria-hidden
          className="pointer-events-none absolute -bottom-16 -right-16 -z-0 w-[280px] sm:w-[380px] lg:w-[460px] opacity-[0.06]"
        >
          <img src="/watermark.svg" alt="" className="h-auto w-full" />
        </div>

        <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-14 lg:grid-cols-12 lg:gap-16">
            {/* LEFT: copy */}
            <div className="lg:col-span-6">
              <span className="fade-in-up inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-white/80 font-display">
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-green" />
                For Proven Contractor Founders
              </span>

              <h1
                className="hero-title fade-in-up mt-7 text-4xl sm:text-5xl md:text-6xl lg:text-6xl font-bold tracking-tight leading-[1.05] text-white font-display"
                style={{ animationDelay: '0.08s' }}
              >
                You built the business.
                <br />
                Now own the <span className="text-green">software</span>
                <br />
                your industry runs on.
              </h1>

              <p
                className="fade-in-up mt-6 max-w-xl text-lg text-white/75 leading-relaxed"
                style={{ animationDelay: '0.16s' }}
              >
                We partner with $3M-$10M contractors to build the operating
                system their entire industry runs on.
              </p>

              <div
                className="fade-in-up mt-9 flex flex-col sm:flex-row items-start sm:items-center gap-4"
                style={{ animationDelay: '0.24s' }}
              >
                <a
                  href="#contact"
                  className="group inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-navy-deep transition-colors duration-200 hover:bg-green-deep hover:text-white font-display"
                >
                  Get Started
                  <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-0.5" />
                </a>

                <a
                  href="#platform"
                  className="inline-flex items-center justify-center rounded-full border border-white/20 px-7 py-3.5 text-sm font-bold uppercase tracking-[0.14em] text-white transition-colors duration-200 hover:border-white/50 hover:bg-white/5 font-display"
                >
                  Explore Platform
                </a>
              </div>

              <div
                className="fade-in-up mt-10 flex flex-wrap items-center gap-x-6 gap-y-2 text-[11px] uppercase tracking-[0.16em] text-white/40 font-display"
                style={{ animationDelay: '0.32s' }}
              >
                <span>No long-term contracts</span>
                <span aria-hidden className="h-1 w-1 rounded-full bg-white/25" />
                <span>Immediate setup</span>
                <span aria-hidden className="h-1 w-1 rounded-full bg-white/25" />
                <span>Any niche</span>
              </div>
            </div>

            {/* RIGHT: video preview */}
            <div
              className="fade-in-up relative lg:col-span-6"
              style={{ animationDelay: '0.32s' }}
            >
              {/* Soft halo */}
              <div
                aria-hidden
                className="pointer-events-none absolute -inset-8 rounded-[2.5rem] bg-green/12 blur-3xl"
              />
              <div
                aria-hidden
                className="pointer-events-none absolute -bottom-10 left-10 right-10 h-24 rounded-full bg-gold/10 blur-3xl"
              />

              {/* Frame */}
              <div className="relative rounded-[1.75rem] border border-white/10 bg-white/[0.03] p-2.5 shadow-[0_40px_120px_-20px_rgba(0,0,0,0.7)] backdrop-blur-sm">
                {/* Top meta strip */}
                <div className="flex items-center justify-between px-4 pt-1 pb-3">
                  <div className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 font-display">
                    <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-green" />
                    Product Tour
                  </div>
                  <div className="rounded-full border border-white/12 bg-navy-deep/60 px-2.5 py-0.5 text-[10px] font-bold text-white/80 font-display tracking-widest">
                    2:14
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => setModalOpen(true)}
                  className="group relative block w-full overflow-hidden rounded-2xl bg-navy-deep transition-transform duration-500 hover:-translate-y-0.5"
                  aria-label="Play product demo"
                >
                  <div className="relative aspect-[16/10] w-full">
                    <img
                      src="https://opsroi-delta.vercel.app/_next/image?url=https%3A%2F%2Fopsroi.com%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fassets.cdn.filesafe.space%252FaKNqKgojBfecmcYEpyvu%252Fmedia%252F6a4b39548a69aa2441a39fd2.png%26w%3D640%26q%3D75&w=384&q=75"
                      alt="OpsROI product dashboard preview"
                      className="h-full w-full object-cover"
                    />

                    {/* Contrast wash */}
                    <div className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/10 to-transparent" />

                    {/* Play button */}
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="relative flex h-20 w-20 items-center justify-center">
                        <span
                          aria-hidden
                          className="absolute inset-0 rounded-full border border-white/40 transition-transform duration-500 group-hover:scale-110"
                        />
                        <span
                          aria-hidden
                          className="absolute inset-2 rounded-full border border-white/25"
                        />
                        <span className="relative flex h-14 w-14 items-center justify-center rounded-full bg-white text-navy-deep shadow-2xl transition-all duration-300 group-hover:bg-green group-hover:text-navy-deep group-hover:scale-105">
                          <Play className="h-5 w-5 translate-x-0.5" fill="currentColor" />
                        </span>
                      </span>
                    </div>

                    {/* Caption bar */}
                    <div className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl border border-white/10 bg-navy-deep/70 px-4 py-2.5 backdrop-blur-md">
                      <span className="text-xs font-semibold text-white/90 font-display uppercase tracking-[0.14em]">
                        See OpsROI in Action
                      </span>
                      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-green font-display group-hover:translate-x-0.5 transition-transform">
                        Watch &rarr;
                      </span>
                    </div>
                  </div>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Video modal */}
      {modalOpen && (
        <div
          className="fixed inset-0 z-[300] flex items-center justify-center p-4 sm:p-8"
          style={{ background: 'rgba(8, 21, 39, 0.86)', backdropFilter: 'blur(6px)' }}
          onClick={closeModal}
        >
          <div className="relative w-full max-w-4xl" onClick={(e) => e.stopPropagation()}>
            <div className="mb-3 flex justify-end">
              <button
                onClick={closeModal}
                aria-label="Close modal"
                className="group inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm font-semibold text-white transition-colors hover:border-white/40 hover:bg-white/10"
              >
                <X className="h-4 w-4 transition-transform duration-200 group-hover:rotate-90" />
                Close
              </button>
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/10 shadow-[0_32px_80px_rgba(0,0,0,0.5)]">
              <div className="relative aspect-video w-full bg-black">
                <iframe
                  src=""
                  title="OpsROI Demo Video"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                  className="h-full w-full border-0"
                />
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
