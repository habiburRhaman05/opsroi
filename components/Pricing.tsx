import Link from 'next/link';

export default function Pricing() {
  return (
    <section id="pricing">
      <div className="container">
        <div className="section-head center" style={{margin: '0 auto 52px'}}>
          <div className="eyebrow" style={{justifyContent: 'center'}}>Pricing</div>
          <h2>Straightforward pricing, whatever you run.</h2>
          <p>No niche upcharge, no per-client tax on subaccounts. Pick the tier that matches your agency&apos;s size.</p>
        </div>
        <div className="pricing-grid" data-stagger="fade">
          <div className="price-card">
            <div className="price-tier-name">Growth</div>
            <div className="price-tier-desc">For solo operators and small agencies getting their first real CRM in place.</div>
            <div className="price-amount"><span className="num">$2,950</span><span className="per">/ month</span></div>
            <ul className="price-features">
              <li><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Up to 5 client subaccounts</li>
              <li><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Core CRM &amp; pipelines</li>
              <li><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Standard automations</li>
              <li><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Email support</li>
            </ul>
            <Link href="#contact" className="btn btn-ghost" style={{width: '100%'}}>Get Started</Link>
          </div>
          <div className="price-card featured">
            <div className="price-badge">Most Popular</div>
            <div className="price-tier-name">Pro</div>
            <div className="price-tier-desc">For agencies running multiple client accounts who need reporting and automation to scale.</div>
            <div className="price-amount"><span className="num">$4,995</span><span className="per">/ month</span></div>
            <ul className="price-features">
              <li><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Up to 25 client subaccounts</li>
              <li><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>White-labeled ROI dashboards</li>
              <li><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Advanced workflow automation</li>
              <li><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Priority support</li>
              <li><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Guided onboarding &amp; setup</li>
            </ul>
            <Link href="#contact" className="btn btn-primary" style={{width: '100%'}}>Get Started</Link>
          </div>
          <div className="price-card">
            <div className="price-tier-name">Elite</div>
            <div className="price-tier-desc">For larger agencies that need unlimited scale and a dedicated ops partner.</div>
            <div className="price-amount"><span className="num">$7,495</span><span className="per">/ month</span></div>
            <ul className="price-features">
              <li><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Unlimited client subaccounts</li>
              <li><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Custom reporting builds</li>
              <li><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Dedicated ops partner</li>
              <li><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Custom automation builds</li>
              <li><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Same-day support</li>
            </ul>
            <Link href="#contact" className="btn btn-ghost" style={{width: '100%'}}>Talk to Us</Link>
          </div>
        </div>
      </div>
    </section>
  );
}
