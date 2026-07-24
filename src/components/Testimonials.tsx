'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTAr5xMz13YSMRgr-ItPClBQNUl0qJ0tU4W-GK01HN70g&s=10",
    quote: "We run a home services agency, not a tech company, and every CRM we tried before this made us feel like an edge case. OpsROI set up our pipeline in under a week and it just fit.",
    name: "Maria Keegan",
    role: "Founder, Ironclad Roofing Marketing",
    statNum: "4.5 days",
    statLabel: "to a fully running pipeline"
  },
  {
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLzFcxG7aql5oQdxFlo-VxiFZoVBuTuTVtLoyKAiOuzlI13euQ-b3xgaI&s=10",
    quote: "The ROI dashboards changed our client conversations completely. Instead of defending our invoice every month, clients open a link and see it themselves. Retention is up since we switched.",
    name: "Devon Park",
    role: "Managing Partner, Bloom Coaching Collective",
    statNum: "96%",
    statLabel: "client retention since switching"
  },
 
];

export default function Testimonials() {
  const [index, setIndex] = useState(0);

  const goTo = (i: number) => {
    const len = testimonials.length;
    setIndex((i + len) % len);
  };

  useEffect(() => {
    const timer = setInterval(() => goTo(index + 1), 5000);
    return () => clearInterval(timer);
  }, [index]);

  return (
    <section className="testi-dark">
      <div className="container">
        <h2 className="testi-heading">Why agencies choose OpsROI</h2>
        <p className="text-center text-white/70 text-sm sm:text-base max-w-2xl mx-auto leading-relaxed mb-12 -mt-4">
          Hear from the agencies and trades already running their operations <br/>on one platform — and what changed after they switched.
        </p>

        <div className="testi-3d-stage" id="testiStage" data-lenis-prevent>
          {testimonials.map((t, i) => {
            const len = testimonials.length;
            let d = i - index;
            d = ((d % len) + len) % len;
            if (d > len / 2) d -= len;
            
            return (
              <div className="testi-card" data-pos={d} key={i}>
                <div className="testi-photo">
                  <Image src={t.image} alt={t.name} fill sizes="(max-width: 768px) 100vw, 380px" />
                </div>
                <div className="testi-body">
                  <span className="testi-quote-mark">&ldquo;</span>
                  <p className="testi-quote">{t.quote}</p>
                  <div className="testi-name">{t.name}</div>
                  <div className="testi-role">{t.role}</div>
                  <div className="testi-stat">
                    <span className="testi-stat-num">{t.statNum}</span>
                    <span className="testi-stat-label">{t.statLabel}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <div className="testi-controls">
          <div className="testi-dots" id="testiDots">
            {testimonials.map((_, i) => (
              <button 
                key={i} 
                className={`testi-dot ${i === index ? 'is-active' : ''}`} 
                onClick={() => goTo(i)}
                aria-label={`Go to testimonial ${i + 1}`}
              ></button>
            ))}
          </div>
          <div className="testi-arrows">
            <button className="testi-arrow" onClick={() => goTo(index - 1)} aria-label="Previous testimonial">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M11 4l-6 5 6 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
            <button className="testi-arrow" onClick={() => goTo(index + 1)} aria-label="Next testimonial">
              <svg width="18" height="18" viewBox="0 0 18 18" fill="none"><path d="M7 4l6 5-6 5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
