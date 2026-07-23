export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head center" style={{margin: '0 auto 52px'}}>
          <div className="eyebrow" style={{justifyContent: 'center'}}>Platform</div>
          <h2>Your all-in-one solution for business growth</h2>
          <p>From first setup to day-to-day running, OpsROI covers the full operational stack behind your client work.</p>
        </div>
        <div className="grid-3" id="platformGrid" data-stagger>

          {/* ── Original 6 cards ── */}
          <div className="platform-card">
            <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M2 8h18" stroke="currentColor" strokeWidth="1.8"/></svg></div>
            <h3>CRM Build &amp; Setup</h3>
            <p>Pipelines, custom fields, and subaccounts configured around how your agency actually sells and delivers - ready to use from day one.</p>
          </div>

          <div className="platform-card">
            <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 19l5-6 4 4 7-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <h3>Workflow Automation</h3>
            <p>Lead routing, follow-up sequences, and internal task automation so nothing falls through the cracks between sales and delivery.</p>
          </div>

          <div className="platform-card">
            <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8"/><path d="M11 6v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
            <h3>Client Reporting &amp; ROI Dashboards</h3>
            <p>Automated, white-labeled reports that show clients exactly what their spend is producing - updated without manual work.</p>
          </div>

          <div className="platform-card">
            <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 18c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="11" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.8"/></svg></div>
            <h3>Client Subaccount Management</h3>
            <p>Every client gets their own clean, organized workspace - set up, maintained, and supported so your team doesn&apos;t have to.</p>
          </div>

          <div className="platform-card">
            <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l2 5 5 .5-4 3.5 1.2 5-4.2-2.7L7 15l1-5-4-3.5 5-.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg></div>
            <h3>Sales &amp; Intake Systems</h3>
            <p>Booking pages, forms, and intake flows that feed clean data straight into your CRM - no manual re-entry.</p>
          </div>

          <div className="platform-card">
            <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M2 11h18M11 2v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
            <h3>Ongoing Support</h3>
            <p>A standing team you can reach when something needs to change - new pipeline, new automation, new report.</p>
          </div>

          {/* ── 5 New feature cards ── */}
          <div className="platform-card">
            <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M6.5 3h9a1.5 1.5 0 011.5 1.5v4A1.5 1.5 0 0115.5 10h-2l-2.5 3V10H6.5A1.5 1.5 0 015 8.5v-4A1.5 1.5 0 016.5 3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M5 14a6 6 0 0012 0" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg></div>
            <h3>AI Receptionist</h3>
            <p>Never miss an inbound call. Our AI receptionist answers, qualifies, and routes leads 24/7 — creating CRM contacts automatically on every call.</p>
          </div>

          <div className="platform-card">
            <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4.5 3.5h4l1.5 4-2.5 1.5a11 11 0 005 5L14 11.5l4 1.5v4a1.5 1.5 0 01-1.5 1.5C7 18.5 3.5 8 3.5 5A1.5 1.5 0 014.5 3.5z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/></svg></div>
            <h3>Call Tracking</h3>
            <p>Know exactly which campaign drove every call. Full recording, transcription, and attribution tied directly to your CRM records.</p>
          </div>

          <div className="platform-card">
            <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="8" cy="7" r="3" stroke="currentColor" strokeWidth="1.7"/><path d="M3 19c0-3.3 2.2-6 5-6h2" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><circle cx="16" cy="14" r="2.5" stroke="currentColor" strokeWidth="1.7"/><path d="M13.5 19c0-2.5 1.1-4.5 2.5-4.5s2.5 2 2.5 4.5" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/></svg></div>
            <h3>HR &amp; Payroll</h3>
            <p>Time tracking, payroll processing, and staff onboarding all inside the same system as your client work — no extra platform needed.</p>
          </div>

          <div className="platform-card">
            <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="3" y="4" width="16" height="12" rx="2" stroke="currentColor" strokeWidth="1.7"/><path d="M3 18h16" stroke="currentColor" strokeWidth="1.7" strokeLinecap="round"/><path d="M9 9l4 2-4 2V9z" fill="currentColor"/></svg></div>
            <h3>Team Training</h3>
            <p>Build SOPs, video courses, and quizzes directly inside your platform so your team stays consistent — no PDF chasing required.</p>
          </div>

          <div className="platform-card">
            <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M14 3H6a1 1 0 00-1 1v14a1 1 0 001 1h10a1 1 0 001-1V6l-3-3z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round"/><path d="M14 3v4h4M8 13h6M8 10h3" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg></div>
            <h3>E-Sign &amp; Docs</h3>
            <p>Send proposals and contracts clients can sign from any device in seconds. Tracks in the CRM automatically — no more email chains for signatures.</p>
          </div>

        </div>
      </div>
    </section>
  );
}
