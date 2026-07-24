import Link from "next/link";
import { CheckCircle2, Ban } from "lucide-react";
import { ScrollReveal } from "../ScrollReveal";

const FOR_YOU = [
  <>You run a <span className="font-bold text-white">$3M–$10M</span> contracting business you built yourself</>,
  "Your name carries weight in your trade, people call you for advice",
  "You want an asset that outlives the trucks and the crews",
  "You'll run your own company on the platform, publicly",
];

const NOT_FOR_YOU = [
  "You're looking for a passive investment you never touch",
  "You haven't operated at scale in your industry",
  "You want software but not the responsibility of leading a market",
  "You need to be pressured into a decision",
];

export function OwnershipTrack() {
  return (
    <section className="pb-16 px-5 sm:px-8 bg-white relative">
      <div className="max-w-6xl mx-auto">
        <ScrollReveal>
          <div className="relative bg-[#0d212b] text-white rounded-[2rem] p-8 sm:p-12 md:p-16 overflow-hidden shadow-2xl">
            {/* Background Glows */}
            <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-green/10 blur-[120px] rounded-full pointer-events-none -mt-32 -mr-32" />
            
            <div className="relative z-10">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-8 h-8 flex items-center justify-center bg-green text-navy rounded-full text-sm font-bold shrink-0">1</div>
                <h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight">Own your industry&apos;s platform</h2>
              </div>
              <p className="text-base sm:text-lg text-white/70 max-w-3xl mb-12 leading-relaxed">
                A founder partnership: you invest to build your industry&apos;s operating system, we build and run it, you sell it and keep the majority. One founder per industry.
              </p>

              <div className="grid md:grid-cols-2 gap-12 lg:gap-16">
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-green flex items-center gap-3">
                    <span className="w-2 h-2 bg-green rounded-full" />
                    This is for you if…
                  </h3>
                  <ul className="space-y-5">
                    {FOR_YOU.map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-[15px] text-white/90 font-medium">
                        <CheckCircle2 className="w-5 h-5 text-green shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="space-y-6">
                  <h3 className="text-lg font-bold text-white/50 flex items-center gap-3">
                    <span className="w-2 h-2 bg-white/30 rounded-full" />
                    This isn&apos;t for you if…
                  </h3>
                  <ul className="space-y-5">
                    {NOT_FOR_YOU.map((item, i) => (
                      <li key={i} className="flex gap-4 items-start text-[15px] text-white/50">
                        <Ban className="w-5 h-5 text-white/30 shrink-0 mt-0.5" strokeWidth={2} />
                        <span className="leading-relaxed">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="flex flex-wrap items-center gap-4 mt-12 pt-10 border-t border-white/10">
                <Link href="/apply#apply" className="bg-green hover:bg-green-deep text-navy px-8 py-3.5 rounded-xl font-bold transition-all shadow-md active:scale-95 text-[15px]">
                  Apply Now
                </Link>
                <Link href="/model" className="bg-transparent border border-white/20 text-white px-8 py-3.5 rounded-xl font-bold hover:bg-white/10 transition-all active:scale-95 text-[15px]">
                  Read the Full Model
                </Link>
              </div>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  );
}
