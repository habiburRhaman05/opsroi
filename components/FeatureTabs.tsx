'use client';
import { useState } from 'react';
import Link from 'next/link';

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState('capture');

  return (
    <section id="product" className="section-alt feature-tabs">
      <div className="container">
        <div className="section-head center" style={{margin: '0 auto 36px'}}>
          <div className="eyebrow" style={{justifyContent: 'center'}}>Inside the Platform</div>
          <h2>One platform for every stage of the client relationship.</h2>
          <p>All the tools your agency needs to capture, run, and prove client work - in one place.</p>
        </div>

        <div className="tabs-wrap">
          <div className="tab-list" role="tablist">
            <button className={`tab-btn ${activeTab === 'capture' ? 'active' : ''}`} onClick={() => setActiveTab('capture')}>Capture</button>
            <button className={`tab-btn ${activeTab === 'nurture' ? 'active' : ''}`} onClick={() => setActiveTab('nurture')}>Nurture</button>
            <button className={`tab-btn ${activeTab === 'close' ? 'active' : ''}`} onClick={() => setActiveTab('close')}>Close</button>
            <button className={`tab-btn ${activeTab === 'report' ? 'active' : ''}`} onClick={() => setActiveTab('report')}>Report</button>
            <button className={`tab-btn ${activeTab === 'retain' ? 'active' : ''}`} onClick={() => setActiveTab('retain')}>Retain</button>
          </div>

          <div className="feature-panel">
            <div className={`tab-panel ${activeTab === 'capture' ? 'active' : ''}`} id="ftab-capture">
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
                  <Link href="#contact" className="btn btn-primary">Get Started Free &rarr;</Link>
                </div>
                <div className="feature-visual">
                  <div className="chat-bubble-tag"><div className="chat-bubble-avatar">OR</div>OpsROI &middot; Missed call</div>
                  <div className="chat-bubble">Sorry we missed your call! Want to book a time that works?</div>
                  <div className="visual-block" style={{width: '80%'}}></div>
                  <div className="visual-block" style={{width: '55%'}}></div>
                  <div className="visual-block" style={{width: '65%'}}></div>
                </div>
              </div>
            </div>

            {/* Other tabs follow the exact same pattern, I will add them here. */}
            <div className={`tab-panel ${activeTab === 'nurture' ? 'active' : ''}`} id="ftab-nurture">
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
                  <Link href="#contact" className="btn btn-primary">Get Started Free &rarr;</Link>
                </div>
                <div className="feature-visual">
                  <div className="chat-bubble-tag"><div className="chat-bubble-avatar">OR</div>Follow-up sequence</div>
                  <div className="chat-bubble">Still thinking it over? Here&apos;s what other agencies asked before switching.</div>
                  <div className="visual-block" style={{width: '70%'}}></div>
                  <div className="visual-block" style={{width: '50%'}}></div>
                  <div className="visual-block" style={{width: '60%'}}></div>
                </div>
              </div>
            </div>

            <div className={`tab-panel ${activeTab === 'close' ? 'active' : ''}`} id="ftab-close">
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
                  <Link href="#contact" className="btn btn-primary">Get Started Free &rarr;</Link>
                </div>
                <div className="feature-visual">
                  <div className="chat-bubble-tag"><div className="chat-bubble-avatar">OR</div>Deal won</div>
                  <div className="chat-bubble">Proposal signed - subaccount created and onboarding sequence started.</div>
                  <div className="visual-block" style={{width: '75%'}}></div>
                  <div className="visual-block" style={{width: '45%'}}></div>
                  <div className="visual-block" style={{width: '58%'}}></div>
                </div>
              </div>
            </div>

            <div className={`tab-panel ${activeTab === 'report' ? 'active' : ''}`} id="ftab-report">
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
                  <Link href="#contact" className="btn btn-primary">Get Started Free &rarr;</Link>
                </div>
                <div className="feature-visual">
                  <div className="chat-bubble-tag"><div className="chat-bubble-avatar">OR</div>Monthly report</div>
                  <div className="chat-bubble">Your dashboard updated - client retention is up 6% this month.</div>
                  <div className="visual-block" style={{width: '85%'}}></div>
                  <div className="visual-block" style={{width: '60%'}}></div>
                  <div className="visual-block" style={{width: '70%'}}></div>
                </div>
              </div>
            </div>

            <div className={`tab-panel ${activeTab === 'retain' ? 'active' : ''}`} id="ftab-retain">
              <div className="feature-panel-grid">
                <div>
                  <div className="feature-icon-badge"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 18c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="#ECB84D" strokeWidth="1.8" strokeLinecap="round"/><circle cx="11" cy="7" r="3.5" stroke="#ECB84D" strokeWidth="1.8"/></svg></div>
                  <h3>Keep clients longer, without extra headcount</h3>
                  <p className="feature-desc">Standing support, health alerts, and renewal reminders mean retention isn&apos;t riding on one person remembering to follow up.</p>
                  <ul className="feature-checklist">
                    <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#ECB84D"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Client health alerts</li>
                    <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#ECB84D"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Renewal &amp; upsell reminders</li>
                    <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#ECB84D"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Standing support team</li>
                    <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#ECB84D"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Client satisfaction surveys</li>
                    <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#ECB84D"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Escalation workflows</li>
                    <li><svg width="16" height="16" viewBox="0 0 16 16"><circle cx="8" cy="8" r="7" fill="#ECB84D"/><path d="M5 8l2 2 4-4.5" stroke="#fff" strokeWidth="1.6" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>Ongoing system tuning</li>
                  </ul>
                  <Link href="#contact" className="btn btn-primary">Get Started Free &rarr;</Link>
                </div>
                <div className="feature-visual">
                  <div className="chat-bubble-tag"><div className="chat-bubble-avatar">OR</div>Health alert</div>
                  <div className="chat-bubble">Riverside Dental hasn&apos;t opened their report in 20 days - flagged for outreach.</div>
                  <div className="visual-block" style={{width: '65%'}}></div>
                  <div className="visual-block" style={{width: '78%'}}></div>
                  <div className="visual-block" style={{width: '50%'}}></div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
