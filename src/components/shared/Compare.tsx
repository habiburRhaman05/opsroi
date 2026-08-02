"use client"
import Link from 'next/link';
import Image from 'next/image';

function BrandLogo({ name, file, bg }: { name: string; file: string; bg: string }) {
  return (
   
      <Image
        src={`/crm-icons/${file}`}
        alt={name}
        width={28}
        height={28}
        style={{ objectFit: 'contain', borderRadius: 4 }}
      />
    
  );
}

const CHECK = (
  <svg width="18" height="18" viewBox="0 0 16 16">
    <circle cx="8" cy="8" r="8" fill="var(--green)"/>
    <path d="M4.5 8.5l2 2 4.5-5" stroke="#fff" strokeWidth="1.8" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Compare() {
  return (
    <section id="compare" className="included-compare">
      <div className="container">
        <div className="section-head center" style={{ margin: '0 auto 48px', maxWidth: '600px' }}>
          <div className="eyebrow" style={{ justifyContent: 'center' }}>Compare</div>
          <h2 style={{ fontSize: '2.8rem', marginBottom: '16px' }}>What&apos;s included with OpsROI</h2>
          <p style={{ fontSize: '1.1rem', lineHeight: '1.6' }}>
            Everything you&apos;d normally stitch together from six different tools - built into one platform, one login, one bill.
          </p>
        </div>

        <div className="included-card">
          <div className="included-table-wrap">

           {/* CRM & Pipeline Management */}
<div className="included-row">
  <span className="included-feature">CRM &amp; Pipeline Management</span>
  <span className="included-replaces">
    <BrandLogo name="Salesforce" file="saleforce-com-logo.png" bg="#00A1E0" />
    <BrandLogo name="HubSpot CRM" file="hubspot-com-logo.png" bg="#FF7A59" />
  </span>
  <span className="included-cost">$99/month</span>
  <span className="included-col-highlight included-check">{CHECK}</span>
</div>

{/* Forms, Surveys & Quizzes */}
<div className="included-row">
  <span className="included-feature">Forms, Surveys &amp; Quizzes</span>
  <span className="included-replaces">
    <BrandLogo name="Typeform" file="typeform-ie-logo.png" bg="#262627" />
    <BrandLogo name="Jotform" file="jotform-com-logo.png" bg="#FF6100" />
  </span>
  <span className="included-cost">$49/month</span>
  <span className="included-col-highlight included-check">{CHECK}</span>
</div>

{/* Workflow Automation */}
<div className="included-row">
  <span className="included-feature">Workflow Automation</span>
  <span className="included-replaces">
    <BrandLogo name="Zapier" file="zapier-com-logo.png" bg="#FF4F00" />
    <BrandLogo name="Make" file="make-com-logo.png" bg="#6C63FF" />
  </span>
  <span className="included-cost">$169/month</span>
  <span className="included-col-highlight included-check">{CHECK}</span>
</div>

{/* Email & SMS Follow-Up */}
<div className="included-row">
  <span className="included-feature">Email &amp; SMS Follow-Up</span>
  <span className="included-replaces">
    <BrandLogo name="ActiveCampaign" file="activecampaign-com-logo.png" bg="#356AE6" />
    <BrandLogo name="Klaviyo" file="klaviyo-com-logo.png" bg="#006B5F" />
  </span>
  <span className="included-cost">$149/month</span>
  <span className="included-col-highlight included-check">{CHECK}</span>
</div>

{/* Booking & Missed-Call Text-Back */}
<div className="included-row">
  <span className="included-feature">Booking &amp; Missed-Call Text-Back</span>
  <span className="included-replaces">
    <BrandLogo name="Calendly" file="calendly-com-logo.png" bg="#006BFF" />
    <BrandLogo name="GoHighLevel" file="gohighlevel-com-logo.png" bg="#F9A825" />
  </span>
  <span className="included-cost">$69/month</span>
  <span className="included-col-highlight included-check">{CHECK}</span>
</div>

{/* Client Subaccounts */}
<div className="included-row">
  <span className="included-feature">Client Subaccounts</span>
  <span className="included-replaces">
    <BrandLogo name="GoHighLevel" file="gohighlevel-com-logo.png" bg="#F9A825" />
    <BrandLogo name="ClickUp" file="clickup-com-logo.png" bg="#7B68EE" />
  </span>
  <span className="included-cost">$99/month</span>
  <span className="included-col-highlight included-check">{CHECK}</span>
</div>

{/* White-Labeled ROI Dashboards */}
<div className="included-row">
  <span className="included-feature">White-Labeled ROI Dashboards</span>
  <span className="included-replaces">
    <BrandLogo name="AgencyAnalytics" file="agencyanalytics-com-logo.png" bg="#2A6DF4" />
    <BrandLogo name="Databox" file="databox-com-logo.png" bg="#3B82F6" />
  </span>
  <span className="included-cost">$199/month</span>
  <span className="included-col-highlight included-check">{CHECK}</span>
</div>

{/* Ongoing Ops Support Team */}
<div className="included-row">
  <span className="included-feature">Ongoing Ops Support Team</span>

  <span className="included-replaces">
    <BrandLogo
      name="Zendesk"
      file="zendesk-com-logo.png"
      bg="#03363D"
    />
    <BrandLogo
      name="Intercom"
      file="intercom-com-logo.png"
      bg="#1F8DED"
    />
  </span>

  <span className="included-cost">$500+/month</span>

  <span className="included-col-highlight included-check">
    {CHECK}
  </span>
</div>

          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="/book-a-demo" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
              Book a Demo &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}