"use client";

import { useState } from "react";
import { Plus } from "lucide-react";
import { SectionLabel } from "@/src/components/ui/SectionLabel";
import { ScrollReveal } from "@/src/components/shared/ScrollReveal";

const FAQS = [
  {
    question: "How long is the demo call?",
    answer:
      "About 15 to 20 minutes. Long enough to understand your setup and show you what OpsROI would look like running your business. Short enough to fit between meetings.",
  },
  {
    question: "Is there any cost or credit card required?",
    answer:
      "No. The call is free, there's nothing to sign, and we don't ask for a card. If it's not the right fit, we'll tell you and point you somewhere better.",
  },
  {
    question: "Why isn't there a pricing page?",
    answer:
      "Because a fixed price list would either overcharge simple setups or under-serve complex ones. A trades business with 30 crews needs something very different from a solo agency, and the price should reflect that. We'd rather quote what actually fits than post a number we'd have to caveat.",
  },
  {
    question: "Do I need to prepare anything?",
    answer:
      "No prep needed. It helps if you can loosely describe your current tool stack and where the biggest bottleneck is, but that's it. We'll do the mapping on the call.",
  },
  {
    question: "What happens after I submit this form?",
    answer:
      "You'll get an email within one business day with a couple of time options. Pick what works, and we'll take it from there. No auto-drip sequences, no chasing.",
  },
];

function pad(n: number) {
  return String(n + 1).padStart(2, "0");
}

export default function BookDemoFaq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section className="relative py-14 sm:py-20 px-5 sm:px-8 bg-white overflow-hidden">
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 right-1/4 h-96 w-96 rounded-full bg-green/6 blur-3xl"
      />

      <div className="relative container">
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
          <ScrollReveal>
            <SectionLabel className="justify-center mb-4">Before You Book</SectionLabel>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4 font-display uppercase">
              The Questions Everyone Asks First.
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-base text-ink-soft leading-relaxed">
              Quick answers to what most people want to know before filling out
              the form.
            </p>
          </ScrollReveal>
        </div>

        <div className="mx-auto max-w-3xl space-y-3">
          {FAQS.map((faq, i) => {
            const isOpen = openIndex === i;
            return (
              <ScrollReveal key={faq.question}>
                <div
                  className={`group card-smooth relative overflow-hidden rounded-2xl bg-white ${
                    isOpen
                      ? "ring-2 ring-green/40 shadow-[0_18px_40px_-20px_rgba(125,194,67,0.35)]"
                      : "ring-1 ring-line hover:ring-green/30 hover:shadow-[0_10px_30px_-18px_rgba(15,43,53,0.15)]"
                  }`}
                >
                  {isOpen && (
                    <span
                      aria-hidden
                      className="absolute inset-y-0 left-0 w-1 bg-linear-to-b from-green to-green-deep"
                    />
                  )}

                  <button
                    onClick={() => toggle(i)}
                    aria-expanded={isOpen}
                    className="w-full text-left px-6 py-5 sm:px-7 sm:py-6 flex items-start justify-between gap-5 focus:outline-none"
                  >
                    <div className="flex items-start gap-4 flex-1 min-w-0">
                      <span
                        className={`shrink-0 mt-0.5 inline-flex items-center justify-center rounded-lg px-2.5 py-1 text-[11px] font-bold tabular-nums font-display tracking-wider transition-colors duration-300 ${
                          isOpen
                            ? "bg-green text-navy-deep"
                            : "bg-mist text-ink-soft group-hover:bg-green/12 group-hover:text-green-deep"
                        }`}
                      >
                        {pad(i)}
                      </span>
                      <h3
                        className={`text-[15px] sm:text-base font-bold pr-2 leading-snug tracking-tight font-display uppercase transition-colors duration-300 ${
                          isOpen ? "text-navy" : "text-navy group-hover:text-green-deep"
                        }`}
                      >
                        {faq.question}
                      </h3>
                    </div>
                    <span
                      className={`flex h-9 w-9 shrink-0 items-center justify-center rounded-full transition-all duration-300 ${
                        isOpen
                          ? "bg-green text-navy-deep rotate-45 shadow-[0_0_15px_rgba(125,194,67,0.5)]"
                          : "bg-mist text-navy group-hover:bg-green group-hover:text-navy-deep"
                      }`}
                    >
                      <Plus className="h-4 w-4" strokeWidth={2.5} />
                    </span>
                  </button>
                  <div
                    className={`grid transition-all duration-300 ease-in-out ${
                      isOpen
                        ? "grid-rows-[1fr] opacity-100"
                        : "grid-rows-[0fr] opacity-0"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <div className="px-6 pb-6 sm:px-7 sm:pb-7 pl-16 sm:pl-19">
                        <p className="text-[15px] text-ink leading-relaxed">
                          {faq.answer}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
