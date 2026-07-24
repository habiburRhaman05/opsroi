'use client';
import { useEffect, useRef, useState } from 'react';

export default function HowItWorks() {
  const stepsRef = useRef<HTMLDivElement>(null);
  const [inView, setInView] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect();
        }
      });
    }, { threshold: 0.35 });

    if (stepsRef.current) observer.observe(stepsRef.current);
    
    return () => observer.disconnect();
  }, []);

  return (
    <section id="why" className="section-alt how-it-works">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="section-head center mx-auto mb-10 md:mb-[52px]">
          <div className="eyebrow" style={{justifyContent: 'center'}}>How It Works</div>
          <h2>From first call to fully running, in three steps.</h2>
          <p>No lengthy onboarding or complicated setup. <br/>We map your agency around your sales and delivery process, <br/>build the systems, and keep everything running.</p>
        </div>

        <div className={`how-steps !grid !grid-cols-1 lg:!grid-cols-3 !gap-8 lg:!gap-10 mt-8 ${inView ? 'in-view' : ''}`} id="howSteps" ref={stepsRef}>
          <div className="how-steps-line hidden lg:block"><span></span></div>

          <div className="how-step flex flex-col h-full" style={{'--d': '0s'} as any}>
            <div className="how-step-marker shrink-0">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 4l14 7-14 7 3-7-3-7z" stroke="var(--green)" strokeWidth="1.8" strokeLinejoin="round"/></svg>
              <span className="how-step-num">01</span>
            </div>
            <div className="how-step-card !p-6 lg:!p-[26px_24px] flex-grow flex flex-col justify-start">
              <div className="founder-role">Step One</div>
              <h3>We map your agency</h3>
              <p>A short call to understand how your agency sells, delivers, and reports today - no assumptions about your niche.</p>
            </div>
          </div>

          <div className="how-step flex flex-col h-full" style={{'--d': '0.15s'} as any}>
            <div className="how-step-marker shrink-0">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="3" width="16" height="16" rx="4" stroke="var(--gold)" strokeWidth="1.8"/><path d="M3 9h16" stroke="var(--gold)" strokeWidth="1.8"/></svg>
              <span className="how-step-num">02</span>
            </div>
            <div className="how-step-card !p-6 lg:!p-[26px_24px] flex-grow flex flex-col justify-start">
              <div className="founder-role">Step Two</div>
              <h3>We build the systems</h3>
              <p>Your CRM, automations, and reporting get built and configured around that exact workflow.</p>
            </div>
          </div>

          <div className="how-step flex flex-col h-full" style={{'--d': '0.3s'} as any}>
            <div className="how-step-marker shrink-0">
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 3v4M11 15v4M3 11h4M15 11h4" stroke="var(--navy)" strokeWidth="1.8" strokeLinecap="round"/><circle cx="11" cy="11" r="4" stroke="var(--navy)" strokeWidth="1.8"/></svg>
              <span className="how-step-num">03</span>
            </div>
            <div className="how-step-card !p-6 lg:!p-[26px_24px] flex-grow flex flex-col justify-start">
              <div className="founder-role">Step Three</div>
              <h3>We keep it running</h3>
              <p>OpsROI stays on as your ops partner - maintaining, adjusting, and supporting as your agency grows.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
