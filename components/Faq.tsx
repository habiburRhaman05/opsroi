'use client';
import { useState } from 'react';

const faqs = [
  {
    q: "Do we need to fit a specific niche to use OpsROI?",
    a: "No. OpsROI is built around how agencies operate - pipelines, subaccounts, and reporting - not around any single industry's playbook. Marketing, coaching, creative, home services, recruiting, or anything else with client accounts is a fit."
  },
  {
    q: "How long does setup actually take?",
    a: "Most agencies are fully live in 4-5 business days. We map your current sales and delivery process on a short call, then build your CRM, automations, and reporting around it."
  },
  {
    q: "Can we migrate from our current CRM?",
    a: "Yes. We handle migration of contacts, pipelines, and history as part of onboarding, so your team isn't stuck re-entering data from scratch."
  },
  {
    q: "What does client subaccount management include?",
    a: "Every client gets their own clean, organized workspace inside your account - set up, maintained, and supported so your team never has to manually stand one up."
  },
  {
    q: "Is there a long-term contract?",
    a: "No. All plans are month-to-month. If OpsROI isn't the right fit, you can cancel anytime."
  },
  {
    q: "What kind of support do we get after setup?",
    a: "A real, standing team you can reach when something needs to change - a new pipeline, a new automation, a new report - not a ticket queue."
  }
];

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq">
      <div className="container">
        <div className="section-head center" style={{margin: '0 auto 44px'}}>
          <div className="eyebrow" style={{justifyContent: 'center'}}>FAQ</div>
          <h2>Questions agencies ask before switching.</h2>
        </div>
        <div className="faq-list">
          {faqs.map((faq, i) => (
            <div className={`faq-item ${openIndex === i ? 'open' : ''}`} key={i}>
              <button className="faq-question" onClick={() => toggle(i)}>
                {faq.q} 
                <svg className="faq-icon" width="18" height="18" viewBox="0 0 18 18">
                  <path d="M9 2v14M2 9h14" stroke="#1D4E5F" strokeWidth="2" strokeLinecap="round"/>
                </svg>
              </button>
              <div className="faq-answer"><p>{faq.a}</p></div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
