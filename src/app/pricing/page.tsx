"use client";
import { useEffect } from "react";
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import Link from 'next/link';

export default function PricingPage() {

  useEffect(() => {
    // FAQ
    const faqs = document.querySelectorAll('.faq-question');
    const handleFaq = (e: any) => {
      const q = e.currentTarget;
      const item = q.closest('.faq-item');
      if (!item) return;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach((i: any) => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    };
    faqs.forEach((q: any) => q.addEventListener('click', handleFaq));

    // Tabs
    const tabs = document.querySelectorAll('.feature-tabs .tab-btn');
    const handleTab = (e: any) => {
      const btn = e.currentTarget;
      const tab = btn.dataset.ftab;
      const scope = btn.closest('.feature-tabs');
      if (!scope) return;
      scope.querySelectorAll('.tab-btn').forEach((b: any) => b.classList.remove('active'));
      scope.querySelectorAll('.tab-panel').forEach((p: any) => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById('ftab-' + tab);
      if (panel) panel.classList.add('active');
    };
    tabs.forEach((t: any) => t.addEventListener('click', handleTab));

    return () => {
      faqs.forEach((q: any) => q.removeEventListener('click', handleFaq));
      tabs.forEach((t: any) => t.removeEventListener('click', handleTab));
    };
  }, []);

  return (

      <main>
        
<section className="page-hero">
  <div className="hero-glow hero-glow--a"></div>
  <div className="hero-glow hero-glow--b"></div>
  <div className="container">
    {/* <div className="page-breadcrumb fade-in-up"><a href="/">Home</a> <span className="sep">/</span> Pricing</div> */}
    <h1 className="fade-in-up" style={{ animationDelay: '0.08s' }}>Straightforward pricing, whatever you run.</h1>
    <p className="lede fade-in-up" style={{ animationDelay: '0.16s' }}>No niche upcharge, no per-client tax on subaccounts. Pick the tier that matches your agency's size.</p>
  </div>
</section>


<section id="pricing-plans" style={{ paddingTop: '76px' }}>
  <div className="container">
    <div className="pricing-grid" data-stagger="fade">
      <div className="price-card " >
        <div className="price-tier-name">Growth</div>
        <div className="price-tier-desc">For solo operators and small agencies getting their first real CRM in place.</div>
        <div className="price-amount"><span className="num">$2,950</span><span className="per">/ month</span></div>
        <ul className="price-features">
          <li><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Up to 5 client subaccounts</li>
          <li><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Core CRM &amp; pipelines</li>
          <li><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Standard automations</li>
          <li><svg width="18" height="18" viewBox="0 0 18 18"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Email support</li>
        </ul>
        <a href="/contact" className="btn btn-ghost" style={{ width: '100%' }}>Get Started</a>
      </div>
      <div className="price-card featured " >
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
        <a href="/contact" className="btn btn-primary" style={{ width: '100%' }}>Get Started</a>
      </div>
      <div className="price-card " >
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
        <a href="/contact" className="btn btn-ghost" style={{ width: '100%' }}>Talk to Us</a>
      </div>
    </div>
  </div>
</section>


<section className="included-compare">
  <div className="container">
    <div className="section-head center " style={{ margin: '0 auto 48px', maxWidth: '600px' }}>
      <div className="eyebrow" style={{ justifyContent: 'center' }}>Compare</div>
      <h2 style={{ fontSize: '2.8rem', marginBottom: '16px' }}>What's included with OpsROI</h2>
      <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>Everything you'd normally stitch together from six different tools - built into one platform, one login, one bill.</p>
    </div>

    <div className="included-card ">
      <div className="included-table-wrap">
        <div className="included-row included-head">
          <span>Features</span>
          <span>Replaces</span>
          <span>Other tools</span>
          <span className="included-col-highlight" style={{ color: 'var(--gold)' }}>OpsROI</span>
        </div>

        <div className="included-row">
          <span className="included-feature">CRM &amp; Pipeline Management</span>
          <span className="included-replaces"><i className="integration-dot" style={{ background: 'var(--green)' }}>HS</i><i className="integration-dot" style={{ background: 'var(--navy)' }}>PD</i></span>
          <span className="included-cost">$99/month</span>
          <span className="included-col-highlight included-check"><svg width="18" height="18" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="var(--green)"/><path d="M4.5 8.5l2 2 4.5-5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </div>
        <div className="included-row">
          <span className="included-feature">Websites &amp; Sales Funnels</span>
          <span className="included-replaces"><i className="integration-dot" style={{ background: 'var(--gold)' }}>CF</i><i className="integration-dot" style={{ background: 'var(--navy-deep)' }}>UB</i></span>
          <span className="included-cost">$297/month</span>
          <span className="included-col-highlight included-check"><svg width="18" height="18" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="var(--green)"/><path d="M4.5 8.5l2 2 4.5-5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </div>
        <div className="included-row">
          <span className="included-feature">Forms, Surveys &amp; Quizzes</span>
          <span className="included-replaces"><i className="integration-dot" style={{ background: 'var(--green-deep)' }}>TF</i><i className="integration-dot" style={{ background: 'var(--gold)' }}>GF</i></span>
          <span className="included-cost">$49/month</span>
          <span className="included-col-highlight included-check"><svg width="18" height="18" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="var(--green)"/><path d="M4.5 8.5l2 2 4.5-5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </div>
        <div className="included-row">
          <span className="included-feature">Workflow Automation</span>
          <span className="included-replaces"><i className="integration-dot" style={{ background: 'var(--navy)' }}>ZP</i><i className="integration-dot" style={{ background: 'var(--green)' }}>MK</i></span>
          <span className="included-cost">$169/month</span>
          <span className="included-col-highlight included-check"><svg width="18" height="18" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="var(--green)"/><path d="M4.5 8.5l2 2 4.5-5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </div>
        <div className="included-row">
          <span className="included-feature">Email &amp; SMS Follow-Up</span>
          <span className="included-replaces"><i className="integration-dot" style={{ background: 'var(--gold)' }}>MC</i><i className="integration-dot" style={{ background: 'var(--navy-deep)' }}>TW</i></span>
          <span className="included-cost">$149/month</span>
          <span className="included-col-highlight included-check"><svg width="18" height="18" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="var(--green)"/><path d="M4.5 8.5l2 2 4.5-5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </div>
        <div className="included-row">
          <span className="included-feature">Booking &amp; Missed-Call Text-Back</span>
          <span className="included-replaces"><i className="integration-dot" style={{ background: 'var(--green)' }}>CL</i><i className="integration-dot" style={{ background: 'var(--navy)' }}>CR</i></span>
          <span className="included-cost">$69/month</span>
          <span className="included-col-highlight included-check"><svg width="18" height="18" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="var(--green)"/><path d="M4.5 8.5l2 2 4.5-5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </div>
        <div className="included-row">
          <span className="included-feature">Client Subaccounts</span>
          <span className="included-replaces"><i className="integration-dot" style={{ background: 'var(--navy-deep)' }}>NT</i><i className="integration-dot" style={{ background: 'var(--gold)' }}>SS</i></span>
          <span className="included-cost">$99/month</span>
          <span className="included-col-highlight included-check"><svg width="18" height="18" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="var(--green)"/><path d="M4.5 8.5l2 2 4.5-5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </div>
        <div className="included-row">
          <span className="included-feature">White-Labeled ROI Dashboards</span>
          <span className="included-replaces"><i className="integration-dot" style={{ background: 'var(--green-deep)' }}>DS</i></span>
          <span className="included-cost">$199/month</span>
          <span className="included-col-highlight included-check"><svg width="18" height="18" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="var(--green)"/><path d="M4.5 8.5l2 2 4.5-5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </div>
        <div className="included-row">
          <span className="included-feature">Ongoing Ops Support Team</span>
          <span className="included-replaces"><span className="included-unique">Unique to OpsROI</span></span>
          <span className="included-cost">-</span>
          <span className="included-col-highlight included-check"><svg width="18" height="18" viewBox="0 0 16 16"><circle cx="8" cy="8" r="8" fill="var(--green)"/><path d="M4.5 8.5l2 2 4.5-5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg></span>
        </div>

        <div className="included-row included-total">
          <span className="included-feature">Starting at</span>
          <span></span>
          <span className="included-cost included-cost-strike">$1,130+/month</span>
          <span className="included-col-highlight included-price"><span className="included-price-symbol">$</span>2,950<span className="included-price-per">/mo</span></span>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '40px' }}>
        <a href="/contact" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>Talk to Us About Your Agency &rarr;</a>
      </div>
    </div>
  </div>
</section>

      </main>
   
  );
}
