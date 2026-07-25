'use client';
import { useState } from 'react';
import { SectionLabel } from '../../ui/SectionLabel';

const faqs = [
  {
    q: "What kind of businesses does OpsROI work for?",
    a: "OpsROI works for any business that manages client accounts or job sites — marketing agencies, coaching firms, home-service trades, recruiting, creative studios, and more. Pipelines, subaccounts, scheduling, and reporting are configured around how you actually operate, not a template built for someone else."
  },
  {
    q: "How long does setup actually take?",
    a: "Most businesses are fully live in 4-5 business days. We map your current sales and delivery process on a short call, then build your CRM, automations, and reporting around it."
  },
  {
    q: "Can we migrate from our current CRM or field service software?",
    a: "Yes. We handle migration of contacts, pipelines, job history, and client records as part of onboarding, so your team isn't stuck re-entering data from scratch."
  },
  {
    q: "Do I need technical skills to use OpsROI?",
    a: "No. The platform is built to be run by an operator, not a developer. Setup is guided, and ongoing support is a standing team, not a ticket queue."
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
    <section id="faq" className="pt-24 pb-6 sm:pt-32 sm:pb-2 bg-white relative">
      <div className="container px-5 sm:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center gap-3 mb-6 reveal-up is-revealed">
            <SectionLabel className="justify-center">FAQ</SectionLabel>
          </div>
          <h2 className="text-4xl sm:text-4xl font-bold uppercase tracking-tight font-bebas text-navy">Questions agencies ask before switching.</h2>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <div key={i} className={`bg-mist border rounded-2xl overflow-hidden transition-all duration-300 ${isOpen ? 'border-green shadow-md shadow-navy/5' : 'border-line hover:border-navy/30'}`}>
                <button onClick={() => toggle(i)} className="w-full text-left px-6 py-2 sm:px-8 sm:py-6 flex items-center justify-between gap-6 focus:outline-none">
                  <h3 className={`font-bold text-lg sm:text-xl transition-colors pr-4 ${isOpen ? 'text-green' : 'text-navy'}`}>{faq.q}</h3>
                  <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 transition-transform duration-300 ${isOpen ? 'bg-green/10 text-green rotate-45' : 'bg-white border border-line text-navy'}`}>
                    <svg width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                      <path d="M7 1v12M1 7h12"/>
                    </svg>
                  </div>
                </button>
                <div className={`grid transition-all duration-300 ease-in-out ${isOpen ? 'grid-rows-[1fr] opacity-100' : 'grid-rows-[0fr] opacity-0'}`}>
                  <div className="overflow-hidden">
                    <p className="px-6 pb-6 sm:px-8 sm:pb-8 text-ink leading-relaxed">
                      {faq.a}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
