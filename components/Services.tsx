export default function Services() {
  return (
    <section id="services">
      <div className="container">
        <div className="section-head center" style={{margin: '0 auto 52px'}}>
          <div className="eyebrow" style={{justifyContent: 'center'}}>Platform</div>
          <h2>Your all-in-one solution for business growth</h2>
          <p>From first setup to day-to-day running, OpsROI covers the full operational stack behind your client work.</p>
        </div>
        <div className="grid-3" id="platformGrid">
          <div className="platform-card is-visible">
            <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M2 8h18" stroke="currentColor" strokeWidth="1.8"/></svg></div>
            <h3>CRM Build &amp; Setup</h3>
            <p>Pipelines, custom fields, and subaccounts configured around how your agency actually sells and delivers - ready to use from day one.</p>
          </div>
          <div className="platform-card is-visible">
            <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M3 19l5-6 4 4 7-9" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
            <h3>Workflow Automation</h3>
            <p>Lead routing, follow-up sequences, and internal task automation so nothing falls through the cracks between sales and delivery.</p>
          </div>
          <div className="platform-card is-visible">
            <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8"/><path d="M11 6v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
            <h3>Client Reporting &amp; ROI Dashboards</h3>
            <p>Automated, white-labeled reports that show clients exactly what their spend is producing - updated without manual work.</p>
          </div>
          <div className="platform-card is-visible">
            <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M4 18c0-3.9 3.1-7 7-7s7 3.1 7 7" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/><circle cx="11" cy="7" r="3.5" stroke="currentColor" strokeWidth="1.8"/></svg></div>
            <h3>Client Subaccount Management</h3>
            <p>Every client gets their own clean, organized workspace - set up, maintained, and supported so your team doesn&apos;t have to.</p>
          </div>
          <div className="platform-card is-visible">
            <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l2 5 5 .5-4 3.5 1.2 5-4.2-2.7L7 15l1-5-4-3.5 5-.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg></div>
            <h3>Sales &amp; Intake Systems</h3>
            <p>Booking pages, forms, and intake flows that feed clean data straight into your CRM - no manual re-entry.</p>
          </div>
          <div className="platform-card is-visible">
            <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M2 11h18M11 2v18" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
            <h3>Ongoing Support</h3>
            <p>A standing team you can reach when something needs to change - new pipeline, new automation, new report.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
