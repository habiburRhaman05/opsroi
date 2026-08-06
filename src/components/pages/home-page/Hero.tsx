'use client';

import { useState, useCallback, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Play, X, ArrowRight } from 'lucide-react';

// Product tour asset: the poster is the first-frame still, shown while the
// video loads and whenever it is paused before playback starts.
const HERO_VIDEO_URL =
  'https://assets.cdn.filesafe.space/aKNqKgojBfecmcYEpyvu/media/6a744e8b888087201908606b.mp4';
const HERO_VIDEO_POSTER =
  'https://opsroi-delta.vercel.app/_next/image?url=https%3A%2F%2Fopsroi.com%2F_next%2Fimage%3Furl%3Dhttps%253A%252F%252Fassets.cdn.filesafe.space%252FaKNqKgojBfecmcYEpyvu%252Fmedia%252F6a4b39548a69aa2441a39fd2.png%26w%3D640%26q%3D75&w=384&q=75';

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const slotRef = useRef<HTMLDivElement>(null);
  // Playback state carried across the inline <-> mini-player move, which
  // re-mounts the <video> element and would otherwise restart it.
  const resumeRef = useRef<{ time: number; paused: boolean } | null>(null);
  const [playing, setPlaying] = useState(false);
  const [docked, setDocked] = useState(false);

  // Play inline, in place of the ambient preview loop: restart with sound.
  const playVideo = useCallback(() => {
    const video = videoRef.current;
    if (!video) return;
    setPlaying(true);
    video.loop = false;
    video.muted = false;
    video.currentTime = 0;
    void video.play();
  }, []);

  const stopVideo = useCallback(() => {
    const video = videoRef.current;
    resumeRef.current = null;
    setPlaying(false);
    setDocked(false);
    if (!video) return;
    video.muted = true;
    video.loop = true;
    video.currentTime = 0;
    void video.play();
  }, []);

  // Dock to a corner mini player once the hero player scrolls out of view,
  // and pop back into the section on the way up.
  useEffect(() => {
    if (!playing) {
      setDocked(false);
      return;
    }
    const slot = slotRef.current;
    if (!slot) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        const video = videoRef.current;
        // Leave a paused video where it is.
        if (!entry.isIntersecting && video?.paused) return;
        if (video) {
          resumeRef.current = { time: video.currentTime, paused: video.paused };
        }
        setDocked(!entry.isIntersecting);
      },
      { threshold: 0.35 },
    );
    observer.observe(slot);
    return () => observer.disconnect();
  }, [playing]);

  // Restore position/playback after the element is re-parented.
  useEffect(() => {
    const video = videoRef.current;
    const resume = resumeRef.current;
    if (!video || !resume) return;

    const apply = () => {
      video.currentTime = resume.time;
      if (!resume.paused) void video.play();
    };
    if (video.readyState >= 1) apply();
    else video.addEventListener('loadedmetadata', apply, { once: true });
    return () => video.removeEventListener('loadedmetadata', apply);
  }, [docked]);

  const renderPlayer = (mini: boolean) => (
    <div className={mini ? 'relative aspect-[16/10] w-full' : 'absolute inset-0'}>
      <video
        ref={videoRef}
        src={HERO_VIDEO_URL}
        poster={HERO_VIDEO_POSTER}
        autoPlay
        muted={!playing}
        loop={!playing}
        playsInline
        preload="metadata"
        controls={playing}
        onEnded={stopVideo}
        aria-label="OpsROI product tour"
        className="h-full w-full object-cover"
      />

      {/* Overlay: only while the ambient loop is showing */}
      {!playing && (
        <button
          type="button"
          onClick={playVideo}
          aria-label="Play product demo"
          className="absolute inset-0 block w-full cursor-pointer"
        >
          {/* Contrast wash */}
          <span className="absolute inset-0 bg-gradient-to-t from-navy-deep/80 via-navy-deep/10 to-transparent" />

          {/* Play button */}
          <span className="absolute inset-0 flex items-center justify-center">
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
          </span>

          {/* Caption bar */}
          <span className="absolute inset-x-4 bottom-4 flex items-center justify-between rounded-xl border border-white/10 bg-navy-deep/70 px-4 py-2.5 backdrop-blur-md">
            <span className="text-xs font-semibold text-white/90 font-display uppercase tracking-[0.14em]">
              See OpsROI in Action
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-green font-display group-hover:translate-x-0.5 transition-transform">
              Watch &rarr;
            </span>
          </span>
        </button>
      )}
    </div>
  );

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

                {/* Slot: holds the layout even while the video is docked */}
                <div
                  ref={slotRef}
                  className="group relative aspect-[16/10] w-full overflow-hidden rounded-2xl bg-navy-deep"
                >
                  {docked ? (
                    <div className="flex h-full w-full items-center justify-center px-6 text-center">
                      <span className="text-[11px] font-bold uppercase tracking-[0.18em] text-white/45 font-display">
                        Playing in mini player
                      </span>
                    </div>
                  ) : (
                    renderPlayer(false)
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Corner mini player — portalled out so the frame's backdrop-blur
          doesn't trap the fixed positioning */}
      {docked &&
        createPortal(
          <div className="pip-dock-in fixed bottom-5 right-5 z-[200] w-[240px] overflow-hidden rounded-xl border border-white/15 bg-navy-deep shadow-[0_24px_60px_rgba(0,0,0,0.6)] sm:w-[320px] lg:w-[360px]">
            <div className="flex items-center justify-between gap-3 px-3 py-2">
              <a
                href="#home"
                className="flex items-center gap-2 text-[10px] font-bold uppercase tracking-[0.18em] text-white/70 font-display transition-colors hover:text-white"
              >
                <span aria-hidden className="h-1.5 w-1.5 rounded-full bg-green" />
                Product Tour
              </a>
              <button
                type="button"
                onClick={stopVideo}
                aria-label="Close mini player"
                className="rounded-full p-1 text-white/60 transition-colors hover:bg-white/10 hover:text-white"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
            {renderPlayer(true)}
          </div>,
          document.body,
        )}
    </>
  );
}
