"use client";
import { useEffect } from "react";
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import Link from 'next/link';

export default function ProductPage() {

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
    <>
      <Header />
      <main>
        
<section className="page-hero">
  <div className="hero-glow hero-glow--a"></div>
  <div className="hero-glow hero-glow--b"></div>
  <div className="container">
    {/* <div className="page-breadcrumb fade-in-up"><a href="/">Home</a> <span className="sep">/</span> Product</div> */}
    <h1 className="fade-in-up" style={{ animationDelay: '0.08s' }}>One platform for every stage of the client relationship.</h1>
    <p className="lede fade-in-up" style={{ animationDelay: '0.16s' }}>All the tools your agency needs to capture, run, and prove client work - in one place.</p>
  </div>
</section>





<section id="product-tabs" className="section-alt feature-tabs">
  <div className="container">
    <div className="section-head center " style={{ margin: '0 auto 36px' }}>
      <div className="eyebrow" style={{ justifyContent: 'center' }}>Inside the Platform</div>
      <h2>Every stage, covered.</h2>
      <p>From first touch to renewal - here's what OpsROI runs at each step.</p>
    </div>

    <div className="tabs-wrap">
      <div className="tab-list" role="tablist">
        <button className="tab-btn active" data-ftab="capture">Capture</button>
        <button className="tab-btn" data-ftab="nurture">Nurture</button>
        <button className="tab-btn" data-ftab="close">Close</button>
        <button className="tab-btn" data-ftab="report">Report</button>
        <button className="tab-btn" data-ftab="retain">Retain</button>
      </div>

      <div className="feature-panel">

        <div className="tab-panel active" id="ftab-capture">
          <div className="feature-panel-grid">
            <div>
              <div className="feature-icon-badge"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 4l14 7-14 7 3-7-3-7z" stroke="#7DC243" strokeWidth="1.8" strokeLinejoin="round"/></svg></div>
              <h3>Get more leads in the door</h3>
              <p className="feature-desc">Attract the right people, turn interest into leads, and keep your pipeline full - without a separate tool for every channel.</p>
              <ul className="feature-checklist">
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#7DC243"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Core CRM &amp; pipelines</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#7DC243"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Forms, surveys &amp; quizzes</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#7DC243"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Websites &amp; landing pages</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#7DC243"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Missed-call text-back</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#7DC243"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Chat widget / inbound DMs</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#7DC243"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Ad &amp; social lead sync</li>
              </ul>
              <a href="/contact" className="btn btn-primary">Get Started Free &rarr;</a>
            </div>
            <div className="feature-visual">
              <div className="chat-bubble-tag"><div className="chat-bubble-avatar">OR</div>OpsROI &middot; Missed call</div>
              <div className="chat-bubble">Sorry we missed your call! Want to book a time that works?</div>
              <div className="visual-block" style={{ width: '80%' }}></div>
              <div className="visual-block" style={{ width: '55%' }}></div>
              <div className="visual-block" style={{ width: '65%' }}></div>
            </div>
          </div>
        </div>

        <div className="tab-panel" id="ftab-nurture">
          <div className="feature-panel-grid">
            <div>
              <div className="feature-icon-badge"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 19l5-6 4 4 7-9" stroke="#ECB84D" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
              <h3>Keep leads warm, automatically</h3>
              <p className="feature-desc">Every lead gets followed up with - every time - without a rep having to remember to send it.</p>
              <ul className="feature-checklist">
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#ECB84D"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Email &amp; SMS sequences</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#ECB84D"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Lead scoring &amp; tagging</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#ECB84D"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Auto-routing to the right rep</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#ECB84D"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Task reminders for your team</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#ECB84D"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Multi-channel drip campaigns</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#ECB84D"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Calendar &amp; booking sync</li>
              </ul>
              <a href="/contact" className="btn btn-primary">Get Started Free &rarr;</a>
            </div>
            <div className="feature-visual">
              <div className="chat-bubble-tag"><div className="chat-bubble-avatar">OR</div>Follow-up sequence</div>
              <div className="chat-bubble">Still thinking it over? Here's what other agencies asked before switching.</div>
              <div className="visual-block" style={{ width: '70%' }}></div>
              <div className="visual-block" style={{ width: '50%' }}></div>
              <div className="visual-block" style={{ width: '60%' }}></div>
            </div>
          </div>
        </div>

        <div className="tab-panel" id="ftab-close">
          <div className="feature-panel-grid">
            <div>
              <div className="feature-icon-badge"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="4" width="18" height="14" rx="2" stroke="#1D4E5F" strokeWidth="1.8"/><path d="M2 8h18" stroke="#1D4E5F" strokeWidth="1.8"/></svg></div>
              <h3>Turn conversations into signed clients</h3>
              <p className="feature-desc">Proposals, contracts, and payment collection live next to the lead record, so nothing gets handled outside the CRM.</p>
              <ul className="feature-checklist">
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#1D4E5F"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Proposal &amp; e-signature</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#1D4E5F"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Invoicing &amp; payment links</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#1D4E5F"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Deal stage automation</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#1D4E5F"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Client onboarding forms</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#1D4E5F"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Subaccount auto-creation</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#1D4E5F"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Won/lost reason tracking</li>
              </ul>
              <a href="/contact" className="btn btn-primary">Get Started Free &rarr;</a>
            </div>
            <div className="feature-visual">
              <div className="chat-bubble-tag"><div className="chat-bubble-avatar">OR</div>Deal won</div>
              <div className="chat-bubble">Proposal signed - subaccount created and onboarding sequence started.</div>
              <div className="visual-block" style={{ width: '75%' }}></div>
              <div className="visual-block" style={{ width: '45%' }}></div>
              <div className="visual-block" style={{ width: '58%' }}></div>
            </div>
          </div>
        </div>

        <div className="tab-panel" id="ftab-report">
          <div className="feature-panel-grid">
            <div>
              <div className="feature-icon-badge"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="#7DC243" strokeWidth="1.8"/><path d="M11 6v5l3.5 2" stroke="#7DC243" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
              <h3>Prove the ROI, without the spreadsheet</h3>
              <p className="feature-desc">White-labeled dashboards update automatically, so clients see results the moment they log in - not once a month in an email.</p>
              <ul className="feature-checklist">
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#7DC243"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Live client dashboards</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#7DC243"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Automated monthly reports</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#7DC243"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>White-label branding</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#7DC243"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Attribution by channel</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#7DC243"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Custom KPI builder</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#7DC243"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Exportable client PDFs</li>
              </ul>
              <a href="/contact" className="btn btn-primary">Get Started Free &rarr;</a>
            </div>
            <div className="feature-visual">
              <div className="chat-bubble-tag"><div className="chat-bubble-avatar">OR</div>Monthly report</div>
              <div className="chat-bubble">Your dashboard updated - client retention is up 6% this month.</div>
              <div className="visual-block" style={{ width: '85%' }}></div>
              <div className="visual-block" style={{ width: '60%' }}></div>
              <div className="visual-block" style={{ width: '70%' }}></div>
            </div>
          </div>
        </div>

        <div className="tab-panel" id="ftab-retain">
          <div className="feature-panel-grid">
            <div>
              <div className="feature-icon-badge"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 18c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#ECB84D" strokeWidth="1.8" strokeLinecap="round"/><circle cx="11" cy="7" r="3.5" stroke="#ECB84D" strokeWidth="1.8"/></svg></div>
              <h3>Keep clients longer, without extra headcount</h3>
              <p className="feature-desc">Standing support, health alerts, and renewal reminders mean retention isn't riding on one person remembering to follow up.</p>
              <ul className="feature-checklist">
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#ECB84D"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Client health alerts</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#ECB84D"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Renewal &amp; upsell reminders</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#ECB84D"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Standing support team</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#ECB84D"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Client satisfaction surveys</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#ECB84D"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Escalation workflows</li>
                <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#ECB84D"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Ongoing system tuning</li>
              </ul>
              <a href="/contact" className="btn btn-primary">Get Started Free &rarr;</a>
            </div>
            <div className="feature-visual">
              <div className="chat-bubble-tag"><div className="chat-bubble-avatar">OR</div>Health alert</div>
              <div className="chat-bubble">Riverside Dental hasn't opened their report in 20 days - flagged for outreach.</div>
              <div className="visual-block" style={{ width: '65%' }}></div>
              <div className="visual-block" style={{ width: '78%' }}></div>
              <div className="visual-block" style={{ width: '50%' }}></div>
            </div>
          </div>
        </div>

      </div>
    </div>
  </div>
</section>


<section id="services">
  <div className="container">
    <div className="section-head center " style={{ margin: '0 auto 52px' }}>
      <div className="eyebrow" style={{ justifyContent: 'center' }}>Platform</div>
      <h2>Your all-in-one solution for business growth</h2>
      <p>From first setup to day-to-day running, OpsROI covers the full operational stack behind your client work.</p>
    </div>
    <div className="grid-3" data-stagger>
      <div className="platform-card " >
        <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M2 8h18" stroke="currentColor" strokeWidth="1.8"/></svg></div>
        <h3>CRM Build &amp; Setup</h3>
        <p>Pipelines, custom fields, and subaccounts configured around how your agency actually sells and delivers - ready to use from day one.</p>
      </div>
      <div className="platform-card " >
        <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 19l5-6 4 4 7-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
        <h3>Workflow Automation</h3>
        <p>Lead routing, follow-up sequences, and internal task automation so nothing falls through the cracks between sales and delivery.</p>
      </div>
      <div className="platform-card " >
        <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8"/><path d="M11 6v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
        <h3>Client Reporting &amp; ROI Dashboards</h3>
        <p>Automated, white-labeled reports that show clients exactly what their spend is producing - updated without manual work.</p>
      </div>
      <div className="platform-card " >
        <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 18c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="11" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.8"/></svg></div>
        <h3>Client Subaccount Management</h3>
        <p>Every client gets their own clean, organized workspace - set up, maintained, and supported so your team doesn't have to.</p>
      </div>
      <div className="platform-card " >
        <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l2 5 5 .5-4 3.5 1.2 5-4.2-2.7L7 15l1-5-4-3.5 5-.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg></div>
        <h3>Sales &amp; Intake Systems</h3>
        <p>Booking pages, forms, and intake flows that feed clean data straight into your CRM - no manual re-entry.</p>
      </div>
      <div className="platform-card " >
        <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M2 11h18M11 2v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
        <h3>Ongoing Support</h3>
        <p>A standing team you can reach when something needs to change - new pipeline, new automation, new report.</p>
      </div>
    </div>
  </div>
</section>


<section className="cta-section">
  <div className="container">
    <div className="cta-band-premium">
      <div className="cta-glow cta-glow-1"></div>
      <div className="cta-glow cta-glow-2"></div>

      <div className="cta-content">
        <h2 className="cta-title">Ready to see the platform on your own pipeline?</h2>
        <p className="cta-desc">Book a short call and we'll walk through what OpsROI would set up for your agency - no niche requirements, no long contracts.</p>
        <div className="cta-actions">
          <a href="/contact" className="btn btn-cta-premium">
            <span>Book a Call</span>
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </a>
        </div>
      </div>
    </div>
  </div>
</section>


      </main>
      <Footer />
    </>
  );
}
