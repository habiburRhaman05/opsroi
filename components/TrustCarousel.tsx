'use client';
import { useEffect, useRef, useState } from 'react';

const logos = [
  { name: 'Creative Studios', svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 19l7-7 3 3-7 7-3-3z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M18 13l-1.5-7.5L2 2l3.5 14.5L13 18l5-5z" stroke="currentColor" strokeWidth="2" strokeLinejoin="round"/><path d="M2 2l7.586 7.586" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> },
  { name: 'Home Services', svg: <svg viewBox="0 0 24 24" fill="none"><path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M9 22V12h6v10" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { name: 'Recruiting', svg: <svg viewBox="0 0 24 24" fill="none"><path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M23 21v-2a4 4 0 00-3-3.87" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M16 3.13a4 4 0 010 7.75" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { name: 'SaaS & Tech', svg: <svg viewBox="0 0 24 24" fill="none"><rect x="2" y="3" width="20" height="14" rx="2" stroke="currentColor" strokeWidth="2"/><path d="M8 21h8M12 17v4" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> },
  { name: 'Real Estate', svg: <svg viewBox="0 0 24 24" fill="none"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><circle cx="12" cy="10" r="3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { name: 'Marketing Agencies', svg: <svg viewBox="0 0 24 24" fill="none"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/></svg> },
  { name: 'Coaching & Consulting', svg: <svg viewBox="0 0 24 24" fill="none"><circle cx="12" cy="7" r="4" stroke="currentColor" strokeWidth="2"/><path d="M4 21v-2a4 4 0 014-4h8a4 4 0 014 4v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg> }
];

export default function TrustCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const [index, setIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(5);
  
  useEffect(() => {
    const handleResize = () => {
      let v = 5;
      if (window.innerWidth <= 980) v = 4;
      if (window.innerWidth <= 768) v = 3;
      if (window.innerWidth <= 480) v = 2;
      setVisibleSlides(v);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const maxIndex = Math.max(0, logos.length - visibleSlides);

  const goTo = (i: number) => {
    const safeIndex = Math.max(0, Math.min(i, maxIndex));
    setIndex(safeIndex);
    if (trackRef.current) {
      const slideWidth = (trackRef.current.children[0] as HTMLElement).offsetWidth;
      const gap = 20;
      trackRef.current.style.transform = `translateX(-${safeIndex * (slideWidth + gap)}px)`;
    }
  };

  return (
    <section className="trust-carousel-section">
      <div className="container">
        <div className="trust-header">
          <span className="trust-label">Built for Any Client-Based Business</span>
        </div>
        
        <div className="trust-slider-wrap">
          <button className="trust-arrow trust-prev" onClick={() => goTo(index - 1)} aria-label="Previous">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          
          <div className="trust-track-container" data-lenis-prevent>
            <div className="trust-track" id="trustTrack" ref={trackRef}>
              {logos.map((logo, i) => (
                <div className="trust-slide" key={i}>
                  <div className="trust-slide-inner" data-tooltip={logo.name}>
                    {logo.svg}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <button className="trust-arrow trust-next" onClick={() => goTo(index + 1)} aria-label="Next">
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
        
        <div className="trust-dots">
          {Array.from({ length: maxIndex + 1 }).map((_, i) => (
            <button 
              key={i} 
              className={`trust-dot ${i === index ? 'is-active' : ''}`} 
              onClick={() => goTo(i)}
            ></button>
          ))}
        </div>
      </div>
    </section>
  );
}
