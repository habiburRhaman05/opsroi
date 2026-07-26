"use client";

import { useState, useMemo } from "react";
import { FEATURES, type Feature } from "../../../lib/features";
import { ScrollReveal } from "../../shared/ScrollReveal";
import { SectionLabel } from "../../ui/SectionLabel";
import { Modal } from "../../shared/Modal";

const FEATURED_IDS = [
  "crm-build",
  "hr-payroll",
  "workflow-automation",
  "inventory",
  "ai-estimates-invoicing",
  "ai-receptionist",
  "email-marketing",
   "ongoing-support",
  
];

const MODAL_CATEGORIES = [
  {
    title: "Sales & CRM",
    ids: ["crm-build", "ai-receptionist", "phone-inbox", "subaccounts"]
  },
  {
    title: "Operations & Workflow",
    ids: ["workflow-automation", "booking-calendar", "inventory", "esign-docs"]
  },
  {
    title: "Finance & HR",
    ids: ["ai-estimates-invoicing", "hr-payroll", "training"]
  },
  {
    title: "Marketing & Growth",
    ids: ["website-builder", "email-marketing", "seo-management", "marketing-ads", "call-tracking", "roi-dashboards"]
  },
  {
    title: "Admin & Support",
    ids: ["ongoing-support"]
  }
];

function ModuleCard({ feature }: { feature: Feature }) {
  const Icon = feature.icon;
  return (
    <div className="group relative p-8 bg-white rounded-[2rem] border border-line shadow-sm hover:shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] hover:-translate-y-1 transition-all duration-500 overflow-hidden h-full flex flex-col">
      <div className="absolute inset-0 bg-gradient-to-br from-[#7DC243]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
      <div className="relative z-10">
        <div className="w-12 h-12 rounded-2xl bg-white shadow-[0_4px_20px_-5px_rgba(0,0,0,0.1)] border border-line/60 text-[#7DC243] flex items-center justify-center mb-6 group-hover:scale-110 group-hover:shadow-[0_8px_25px_-5px_rgba(125,194,67,0.3)] transition-all duration-500">
          <Icon className="w-6 h-6" />
        </div>
        <h3 className="text-xl font-bold text-navy mb-3 group-hover:text-[#7DC243] transition-colors duration-300">{feature.title}</h3>
        <p className="text-sm text-ink-soft leading-relaxed">{feature.tagline}</p>
      </div>
    </div>
  );
}

function ModalCategory({
  title,
  features,
}: {
  title: string;
  features: Feature[];
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 text-[11px] font-bold tracking-widest uppercase text-[#7DC243] mb-4">
        <span>{title}</span>
        <span className="flex-1 h-px bg-line" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {features.map((feature) => {
          const Icon = feature.icon;
          return (
            <div
              key={feature.id}
              className="flex gap-4 items-start bg-white border border-line rounded-2xl p-5"
            >
              <div className="w-10 h-10 shrink-0 rounded-xl bg-[#7DC243]/10 text-[#7DC243] flex items-center justify-center">
                <Icon />
              </div>
              <div>
                <h4 className="text-sm font-bold text-navy leading-tight mb-1">
                  {feature.title}
                </h4>
                <p className="text-xs text-ink-soft leading-relaxed">
                  {feature.tagline}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Platform() {
  const [modalOpen, setModalOpen] = useState(false);

  const featuredModules = useMemo(() => {
    return FEATURED_IDS.map(id => FEATURES.find(f => f.id === id)!).filter(Boolean);
  }, []);

  return (
  <>
    <section
      id="platform"
      className="pt-24 pb-12 sm:pb-16 sm:pt-32 px-5 sm:px-8 bg-white "
    >
      <div className="container">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <ScrollReveal>
            <SectionLabel className="justify-center mb-6" >
              The Platform You&apos;d Own
            </SectionLabel>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="font-extrabold text-navy tracking-tight leading-[1.15] mb-6">
              One operating system. <br className="hidden sm:block" />Every part of the business.
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-lg text-ink-soft leading-relaxed">
              Eighteen connected modules - not ten apps duct-taped together.
              This is what your industry would run on.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16 items-stretch">
          {featuredModules.map((feature) => (
            <ScrollReveal key={feature.id}>
              <ModuleCard feature={feature} />
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3.5 rounded-full font-bold hover:bg-navy-light transition-all active:scale-95 shadow-lg shadow-navy/20"
          >
            See all {FEATURES.length} modules
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          
        </div>
      </div>

     
    </section>
     <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <SectionLabel className="mb-4">
           <span className="text-[11px] font-bold tracking-widest uppercase text-[#7DC243]">
             The Complete Platform
           </span>
        </SectionLabel>
        <h2 className="text-3xl font-bold text-navy tracking-tight mt-2">
          Everything inside the operating system
        </h2>
        <p className="text-ink-soft text-base mt-3 mb-10 leading-relaxed max-w-2xl">
          Eighteen modules across five areas of the business, the full system
          a founder owns and sells.
        </p>
        {MODAL_CATEGORIES.map((category) => (
          <ModalCategory 
            key={category.title} 
            title={category.title} 
            features={category.ids.map(id => FEATURES.find(f => f.id === id)!).filter(Boolean)} 
          />
        ))}
      </Modal>
  </>
  );
}