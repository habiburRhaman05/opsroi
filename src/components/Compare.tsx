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
    <section className="included-compare">
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

            <div className="included-row included-head">
              <span>Features</span>
              <span>Replaces</span>
              <span>Other tools</span>
              <span className="included-col-highlight" style={{ color: 'var(--gold)' }}>OpsROI</span>
            </div>

            {/* CRM & Pipeline Management */}
            <div className="included-row">
              <span className="included-feature">CRM &amp; Pipeline Management</span>
              <span className="included-replaces">
                <BrandLogo name="Salesforce" file="saleforce-com-logo.png" bg="#00A1E0" />
                <BrandLogo name="GoHighLevel" file="gohighlevel-com-logo.png" bg="#F9A825" />
               
              </span>
              <span className="included-cost">$99/month</span>
              <span className="included-col-highlight included-check">{CHECK}</span>
            </div>

            {/* Websites & Sales Funnels — placeholder text until icons uploaded */}
            <div className="included-row">
              <span className="included-feature">Websites &amp; Sales Funnels</span>
              <span className="included-replaces">
                <BrandLogo name="HubSpot" file="hubspot-com-logo.png" bg="#FF7A59" />
                <BrandLogo name="Monday.com" file="monday-com-logo.png" bg="#FF3D57" />
                
              </span>
              <span className="included-cost">$297/month</span>
              <span className="included-col-highlight included-check">{CHECK}</span>
            </div>

            {/* Forms, Surveys & Quizzes */}
            <div className="included-row">
              <span className="included-feature">Forms, Surveys &amp; Quizzes</span>
              <span className="included-replaces">
              <BrandLogo name="Salesflare" file="salesflare-com-logo.png" bg="#3AA1FF" />
                <BrandLogo name="Zoho CRM" file="zohocrm-in-logo.png" bg="#E42527" />
              </span>
              <span className="included-cost">$49/month</span>
              <span className="included-col-highlight included-check">{CHECK}</span>
            </div>

            {/* Workflow Automation */}
            <div className="included-row">
              <span className="included-feature">Workflow Automation</span>
              <span className="included-replaces">
                <BrandLogo name="Salesforce" file="saleforce-com-logo.png" bg="#00A1E0" />
                <BrandLogo name="Zoho CRM" file="zohocrm-in-logo.png" bg="#E42527" />

                {/* <BrandLogo name="GoHighLevel" file="gohighlevel-com-logo.png" bg="#F9A825" /> */}
              </span>
              <span className="included-cost">$169/month</span>
              <span className="included-col-highlight included-check">{CHECK}</span>
            </div>

            {/* Email & SMS Follow-Up */}
            <div className="included-row">
              <span className="included-feature">Email &amp; SMS Follow-Up</span>
              <span className="included-replaces">
           <BrandLogo name="Zoho CRM" file="zohocrm-in-logo.png" bg="#E42527" />
                <BrandLogo name="Monday.com" file="monday-com-logo.png" bg="#FF3D57" />

              </span>
              <span className="included-cost">$149/month</span>
              <span className="included-col-highlight included-check">{CHECK}</span>
            </div>

            {/* Booking & Missed-Call Text-Back */}
            <div className="included-row">
              <span className="included-feature">Booking &amp; Missed-Call Text-Back</span>
              <span className="included-replaces">
                 <BrandLogo name="Salesforce" file="saleforce-com-logo.png" bg="#00A1E0" />
                <BrandLogo name="GoHighLevel" file="gohighlevel-com-logo.png" bg="#F9A825" />
              </span>
              <span className="included-cost">$69/month</span>
              <span className="included-col-highlight included-check">{CHECK}</span>
            </div>

            {/* Client Subaccounts */}
            <div className="included-row">
              <span className="included-feature">Client Subaccounts</span>
              <span className="included-replaces">
                 <BrandLogo name="Zoho CRM" file="replicate-com-logo.png" bg="#E42527" />
                <BrandLogo name="Monday.com" file="monday-com-logo.png" bg="#FF3D57" />
              </span>
              <span className="included-cost">$99/month</span>
              <span className="included-col-highlight included-check">{CHECK}</span>
            </div>

            {/* White-Labeled ROI Dashboards */}
            <div className="included-row">
              <span className="included-feature">White-Labeled ROI Dashboards</span>
              <span className="included-replaces">
                 <BrandLogo name="Zoho CRM" file="system9-io-logo.png" bg="#E42527" />
                <BrandLogo name="harvey" file="harvey-ai-logo.png" bg="#FF3D57" />
              </span>
              <span className="included-cost">$199/month</span>
              <span className="included-col-highlight included-check">{CHECK}</span>
            </div>

            {/* Ongoing Ops Support Team */}
            <div className="included-row">
              <span className="included-feature">Ongoing Ops Support Team</span>
              <span className="included-replaces">
              <BrandLogo name="mail chimp" file="mailchimp-com-logo.png" bg="#E42527" />
                <BrandLogo name="Monday.com" file="monday-com-logo.png" bg="#FF3D57" />
              </span>
              <span className="included-cost">-</span>
              <span className="included-col-highlight included-check">{CHECK}</span>
            </div>

            {/* Total row */}
            <div className="included-row included-total">
              <span className="included-feature">Overall price</span>
              <span></span>
              <span className="included-cost included-cost-strike">$1,130+/month</span>
              <span className="included-col-highlight included-price">
                <span className="included-price-symbol">$</span>247<span className="included-price-per">/mo</span>
              </span>
            </div>

          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <Link href="#pricing" className="btn btn-primary" style={{ padding: '16px 36px', fontSize: '1.05rem' }}>
              See Full Pricing &amp; Plans &rarr;
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}