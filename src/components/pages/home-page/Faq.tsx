"use client";
import { useState } from "react";
import Link from "next/link";
import { Plus, ArrowRight, MessageCircleQuestion } from "lucide-react";
import { SectionLabel } from "../../ui/SectionLabel";
import { ScrollReveal } from "../../shared/ScrollReveal";

const faqs = [
  {
    question: "Why would I pay to build it instead of you funding it yourselves?",
    answer:
      "Because ownership follows investment. If we funded it, we'd own it and you'd be an employee of our platform. You put in the build so you come out owning the asset and keeping the majority of every sale. It's the difference between renting a truck and owning the fleet.",
  },
  {
    question: "What stops you from cutting me out and selling it yourselves?",
    answer:
      "We can't sell it the way you can, that's the entire point. We don't have your name, your reputation, or your industry's trust. The platform is only worth what it becomes in your market, and it only becomes that with you selling it. Our incentive is to keep you winning, because our share depends on it. It's all put in writing.",
  },
  {
    question: "Isn't this just a competitor to Jobber, ServiceTitan, or ArborGold?",
    answer:
      "Those are generalist tools built by people who've never run your business. Your platform is built around how your industry actually operates, sold by someone the industry already trusts. You're not competing on features, you're competing on being one of their own. That's a moat software can't copy.",
  },
  {
    question: "How much time does this take from me?",
    answer:
      "We run the platform, the fulfillment, and the technical work. Your job is the two things only you can do: run your company on it as proof, and open doors in your industry. If you want to be hands-on in sales, there's room. If you want to lend your name and network, that works too. We'll define the split on the call.",
  },
  {
    question: "What if my industry already has a platform in it?",
    answer:
      "One founder per industry. If your trade's seat is still open, you can be the one who owns it. Once it's taken, it's taken, we don't put two founders in the same market against each other. That's why the call matters: we find out fast whether your seat is available.",
  },
];

function pad(n: number) {
  return String(n + 1).padStart(2, "0");
}

export default function Faq() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const toggle = (i: number) => {
    setOpenIndex(openIndex === i ? null : i);
  };

  return (
    <section id="faq" className="relative py-14 sm:py-20 px-5 sm:px-8 bg-mist overflow-hidden">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-40 left-1/4 h-96 w-96 rounded-full bg-green/8 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-32 -right-32 h-72 w-72 rounded-full bg-gold/6 blur-3xl"
      />

      <div className="relative container">
        <div className="grid lg:grid-cols-[1fr_1.4fr] gap-10 lg:gap-14 items-start">
          {/* LEFT: heading + sticky CTA card */}
          <div className="lg:sticky lg:top-24 space-y-6">
            <ScrollReveal>
              <SectionLabel className="mb-4">FAQ</SectionLabel>
            </ScrollReveal>
            <ScrollReveal>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight uppercase font-display">
                Questions Founders Ask Before They Sign.
              </h2>
            </ScrollReveal>
            <ScrollReveal>
              <p className="text-[15px] text-ink-soft leading-relaxed max-w-md">
                The most common ones we hear on discovery calls. If yours isn&apos;t here, book a call and we&apos;ll answer it live.
              </p>
            </ScrollReveal>

            {/* Sticky CTA card */}
            <ScrollReveal>
              <div className="relative overflow-hidden rounded-2xl bg-linear-to-br from-navy-deep via-navy-deep to-[#0f3540] p-6 sm:p-7 text-white ring-2 ring-green/40 shadow-[0_30px_80px_-40px_rgba(15,43,53,0.6)] mt-2">
                <div
                  aria-hidden
                  className="pointer-events-none absolute -top-20 -right-20 h-52 w-52 rounded-full bg-green/25 blur-3xl animate-opsroi-glow"
                />
                <div className="relative">
                  <div className="mb-4 inline-flex h-11 w-11 items-center justify-center rounded-xl bg-green/20 border border-green/40 text-green shadow-[0_0_18px_rgba(125,194,67,0.35)]">
                    <MessageCircleQuestion className="h-5 w-5" strokeWidth={2} />
                  </div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-green font-display mb-2">
                    Still Have Questions
                  </div>
                  <h3 className="text-xl sm:text-2xl font-bold text-white font-display uppercase leading-tight mb-2">
                    Let&apos;s Talk It Through.
                  </h3>
                  <p className="text-[13px] text-white/70 leading-relaxed mb-5">
                    A 20-minute call to answer everything and see if your industry seat is still open.
                  </p>
                  <Link
                    href="/book"
                    className="group inline-flex items-center gap-2 rounded-xl bg-green px-5 py-3 text-[13px] font-bold uppercase tracking-[0.14em] text-navy-deep hover:bg-white transition-all font-display shadow-[0_0_20px_rgba(125,194,67,0.4)] hover:shadow-[0_0_30px_rgba(125,194,67,0.6)] hover:-translate-y-0.5"
                  >
                    Let&apos;s Talk
                    <ArrowRight className="h-4 w-4 transition-transform duration-200 group-hover:translate-x-1" />
                  </Link>
                </div>
              </div>
            </ScrollReveal>
          </div>

          {/* RIGHT: accordion */}
          <div className="space-y-3">
            {faqs.map((faq, i) => {
              const isOpen = openIndex === i;
              return (
                <ScrollReveal key={i}>
                  <div
                    className={`group card-smooth relative overflow-hidden rounded-2xl bg-white ${
                      isOpen
                        ? "ring-2 ring-green/40 shadow-[0_18px_40px_-20px_rgba(125,194,67,0.35)]"
                        : "ring-1 ring-line hover:ring-green/30 hover:shadow-[0_10px_30px_-18px_rgba(15,43,53,0.15)]"
                    }`}
                  >
                    {/* Left accent bar when open */}
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
                        {/* Numbered badge */}
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
      </div>
    </section>
  );
}
