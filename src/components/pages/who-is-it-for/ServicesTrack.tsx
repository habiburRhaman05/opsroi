import Link from "next/link";
import { CheckCircle2, Ban } from "lucide-react";
import { ScrollReveal } from "../../shared/ScrollReveal";

const FOR_YOU = [
  "You run a contractor or home-service business tired of duct-taped software",
  "You want an AI receptionist so you stop losing jobs to missed calls",
  "You want a website, SEO, or ads that actually produce booked jobs",
  "You'd rather pay for outcomes than manage five different freelancers",
];

const NOT_FOR_YOU = [
  "You want the cheapest possible option regardless of quality",
  "You're not ready to invest in growth infrastructure yet",
  "You want a fully passive experience with zero involvement in strategy",
];

export function ServicesTrack() {
  return (
    <section className="pb-16 px-5 sm:px-8 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="bg-white rounded-[2rem] border border-line/60 shadow-[0_20px_40px_-15px_rgba(0,0,0,0.08)] p-8 sm:p-12 md:p-16">
            <div className="flex items-center gap-4 mb-6">
              <div className="w-8 h-8 flex items-center justify-center bg-[#1D4E5F] text-white rounded-full text-sm font-bold shrink-0">2</div>
              <h2 className="text-3xl md:text-4xl font-semibold text-navy tracking-tight">Get your growth systems built</h2>
            </div>
            <p className="text-base sm:text-lg text-ink-soft max-w-3xl mb-12 leading-relaxed">
              No equity, no partnership, just an AI receptionist, a website, SEO, or ads managed by the team that built TreeROI.
            </p>

            <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-[#1D4E5F] flex items-center gap-3">
                  <span className="w-2 h-2 bg-[#1D4E5F] rounded-full" />
                  This is for you if…
                </h3>
                <ul className="space-y-5">
                  {FOR_YOU.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-[15px] text-ink font-medium">
                      <CheckCircle2 className="w-5 h-5 text-[#7DC243] shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="space-y-6">
                <h3 className="text-lg font-bold text-ink-soft flex items-center gap-3">
                  <span className="w-2 h-2 bg-line rounded-full" />
                  This isn&apos;t for you if…
                </h3>
                <ul className="space-y-5">
                  {NOT_FOR_YOU.map((item, i) => (
                    <li key={i} className="flex gap-4 items-start text-[15px] text-ink-soft opacity-70">
                      <Ban className="w-5 h-5 text-line shrink-0 mt-0.5" strokeWidth={2} />
                      <span className="leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            <div className="flex flex-wrap items-center gap-4 mt-12 pt-10 border-t border-mist">
              <Link href="/contact#contact" className="bg-[#7DC243] hover:bg-[#6eb238] text-[#163C49] px-8 py-3.5 rounded-xl font-bold transition-all shadow-[0_4px_25px_rgba(125,194,67,0.4)] hover:shadow-[0_6px_35px_rgba(125,194,67,0.6)] active:scale-95 text-[15px]">
                Contact Us
              </Link>
              <Link href="/features" className="bg-white border border-line text-navy px-8 py-3.5 rounded-xl font-bold hover:bg-mist transition-all active:scale-95 text-[15px]">
                See What We Build
              </Link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
