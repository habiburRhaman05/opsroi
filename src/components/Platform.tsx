"use client";

import { useState } from "react";

import { MODULES, SUBSET, CATS, type ModuleKey } from "../lib/modules";
import { ICON_MAP } from "../lib/icons";
import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./ui/SectionLabel";
import { Modal } from "./Modal";

function ModuleCard({ moduleKey }: { moduleKey: ModuleKey }) {
  const [name, desc] = MODULES[moduleKey];
  const Icon = ICON_MAP[moduleKey];
  return (
    <div className="p-6 sm:p-8 bg-white rounded-3xl border border-line hover:border-line-dark hover:shadow-lg hover:-translate-y-1 transition-all duration-300">
      <div className="w-10 h-10 rounded-xl bg-green/10 text-green flex items-center justify-center mb-5">
        <Icon />
      </div>
      <h3 className="text-lg font-bold text-navy mb-2">{name}</h3>
      <p className="text-sm text-ink-soft leading-relaxed">{desc}</p>
    </div>
  );
}

function ModalCategory({
  title,
  keys,
}: {
  title: string;
  keys: ModuleKey[];
}) {
  return (
    <div className="mb-8">
      <div className="flex items-center gap-3 text-[11px] font-bold tracking-widest uppercase text-green mb-4">
        <span>{title}</span>
        <span className="flex-1 h-px bg-line" />
      </div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {keys.map((key) => {
          const [name, desc] = MODULES[key];
          const Icon = ICON_MAP[key];
          return (
            <div
              key={key}
              className="flex gap-4 items-start bg-white border border-line rounded-2xl p-5"
            >
              <div className="w-10 h-10 shrink-0 rounded-xl bg-green/10 text-green flex items-center justify-center">
                <Icon />
              </div>
              <div>
                <h4 className="text-sm font-bold text-navy leading-tight mb-1">
                  {name}
                </h4>
                <p className="text-xs text-ink-soft leading-relaxed">
                  {desc}
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
              Seventeen connected modules - not ten apps duct-taped together.
              This is what your industry would run on.
            </p>
          </ScrollReveal>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {SUBSET.map((key) => (
            <ScrollReveal key={key}>
              <ModuleCard moduleKey={key} />
            </ScrollReveal>
          ))}
        </div>

        <div className="text-center">
          <button
            onClick={() => setModalOpen(true)}
            className="inline-flex items-center gap-2 bg-navy text-white px-8 py-3.5 rounded-full font-bold hover:bg-navy-light transition-all active:scale-95 shadow-lg shadow-navy/20"
          >
            See all 17 modules
            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>
          
        </div>
      </div>

     
    </section>
     <Modal open={modalOpen} onClose={() => setModalOpen(false)}>
        <SectionLabel className="mb-4">
           <span className="text-[11px] font-bold tracking-widest uppercase text-green">
             The Complete Platform
           </span>
        </SectionLabel>
        <h2 className="text-3xl font-bold text-navy tracking-tight mt-2">
          Everything inside the operating system
        </h2>
        <p className="text-ink-soft text-base mt-3 mb-10 leading-relaxed max-w-2xl">
          Seventeen modules across six areas of the business, the full system
          a founder owns and sells.
        </p>
        {CATS.map(([title, keys]) => (
          <ModalCategory key={title} title={title} keys={keys} />
        ))}
      </Modal>
  </>
  );
}