import Link from 'next/link';

export default function Cta() {
  return (
    <section className="cta-section">
      <div className="container">
        <div className="cta-band-premium">
          <div className="cta-glow cta-glow-1"></div>
          <div className="cta-glow cta-glow-2"></div>
          
          <div className="cta-content">
            <h2 className="cta-title">Ready to see what your agency&apos;s ops could look like?</h2>
            <p className="cta-desc">Book a short call and we&apos;ll walk through what OpsROI would set up for your agency - no niche requirements, no long contracts.</p>
            <div className="cta-actions">
              <Link href="#contact" className="btn btn-cta-premium">
                <span>Book a Call</span>
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
