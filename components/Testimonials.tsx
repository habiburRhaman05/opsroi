'use client';
import { useEffect, useState } from 'react';
import Image from 'next/image';

const testimonials = [
  {
    image: "https://cdn.prod.website-files.com/693317e747432cd054b3bdc6/695c39198d03b01b176e33f6_carrie-lupoli.avif",
    quote: "We run a home services agency, not a tech company, and every CRM we tried before this made us feel like an edge case. OpsROI set up our pipeline in under a week and it just fit.",
    name: "Maria Keegan",
    role: "Founder, Ironclad Roofing Marketing",
    statNum: "4.5 days",
    statLabel: "to a fully running pipeline"
  },
  {
    image: "https://cdn.prod.website-files.com/693317e747432cd054b3bdc6/695c39191a2208a9be6f5054_justin-welsh.avif",
    quote: "The ROI dashboards changed our client conversations completely. Instead of defending our invoice every month, clients open a link and see it themselves. Retention is up since we switched.",
    name: "Devon Park",
    role: "Managing Partner, Bloom Coaching Collective",
    statNum: "96%",
    statLabel: "client retention since switching"
  },
  {
    image: "https://cdn.prod.website-files.com/693317e747432cd054b3bdc6/695c39198d03b01b176e33f6_carrie-lupoli.avif",
    quote: "We scaled from 12 to 40 client accounts without hiring an ops person, because OpsROI already was one. Subaccounts alone saved us a full-time hire.",
    name: "Talia Reyes",
    role: "CEO, Talent Bridge Recruiting",
    statNum: "3.3x",
    statLabel: "client accounts, same headcount"
  }
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

        <div className="testi-3d-stage" id="testiStage" data-lenis-prevent>
          {testimonials.map((t, i) => {
            const len = testimonials.length;
            let d = i - index;
            d = ((d % len) + len) % len;
            if (d > len / 2) d -= len;
            
            return (
              <div className="testi-card" data-pos={d} key={i}>
                <div className="testi-photo">
                  <Image src={t.image} alt={t.name} width={64} height={64} />
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
