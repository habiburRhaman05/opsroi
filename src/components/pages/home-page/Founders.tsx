import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { SectionLabel } from "../../ui/SectionLabel";
import { ScrollReveal } from "../../shared/ScrollReveal";

export default function Founders() {
  return (
    <section
      id="founders"
      className="relative overflow-hidden bg-mist py-16 sm:py-24 px-5 sm:px-8"
    >
      <div className="container relative">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <ScrollReveal>
            <SectionLabel className="justify-center mb-4">Our Founder</SectionLabel>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight">
              Why We Built OpsROI.
            </h2>
          </ScrollReveal>
        </div>

        {/* Founder card */}
        <ScrollReveal>
          <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2rem] bg-navy-deep text-white shadow-[0_30px_80px_-40px_rgba(15,43,53,0.6)]">
            {/* Ambient glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-24 -right-24 h-[380px] w-[380px] rounded-full bg-green/12 blur-3xl"
            />
            {/* Watermark */}
            <div
              aria-hidden
              className="pointer-events-none absolute -bottom-16 -right-16 w-[320px] opacity-[0.05]"
            >
              <img src="/watermark.svg" alt="" className="h-auto w-full" />
            </div>

            <div className="relative grid grid-cols-1 md:grid-cols-[240px_1fr] lg:grid-cols-[280px_1fr]">
              {/* Photo panel */}
              <div className="relative bg-navy p-8 md:p-10 flex items-center justify-center">
                <div className="relative aspect-square w-40 sm:w-48 md:w-full md:max-w-[220px]">
                  <div
                    aria-hidden
                    className="absolute inset-0 rounded-full bg-green/25 blur-2xl"
                  />
                  <div className="relative h-full w-full overflow-hidden rounded-full ring-4 ring-white/10 shadow-[0_20px_50px_-15px_rgba(0,0,0,0.5)]">
                    <Image
                      src="/founder.webp"
                      alt="Chris Ruvalcaba"
                      fill
                      sizes="(min-width: 1024px) 220px, (min-width: 768px) 200px, 192px"
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Content panel */}
              <div className="relative p-8 sm:p-10 lg:p-12">
                <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-green mb-3 font-display">
                  Founder &amp; Owner
                </div>
                <h3 className="text-2xl sm:text-3xl font-bold text-white tracking-tight leading-tight">
                  Chris Ruvalcaba
                </h3>

                <p className="mt-5 text-base leading-relaxed text-white/75">
                  Chris started in tree care, running Monkey Man on a stack of
                  tools that never quite talked to each other. Follow-ups slipped.
                  Invoices went out late. Hours never added up. So he built the
                  system he actually needed, one platform from lead to invoice,
                  and used it on his own business. That system became TreeROI,
                  the first platform in the OpsROI network.
                </p>

                <Link
                  href="/our-story"
                  className="group mt-7 inline-flex items-center gap-2 text-xs font-bold uppercase tracking-[0.14em] text-green hover:text-white transition-colors font-display"
                >
                  Read The Full Story
                  <ArrowRight className="h-3.5 w-3.5 transition-transform duration-200 group-hover:translate-x-0.5" />
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
