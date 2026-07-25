import { Check, X, ShieldCheck, Award, Rocket, Megaphone, CircleDollarSign, TrendingDown, Clock, Zap } from "lucide-react";
import { ScrollReveal } from "../../shared/ScrollReveal";
import { SectionLabel } from "../../ui/SectionLabel";

const FOR_YOU = [
  { icon: ShieldCheck, text: <>You run a <span className="font-extrabold text-navy">$3M-$10M</span> contracting business you built yourself.</> },
  { icon: Award, text: <>Your name carries weight in your trade - people call you for advice.</> },
  { icon: Rocket, text: <>You want an asset that outlives the trucks and the crews.</> },
  { icon: Megaphone, text: <>You&apos;ll run your own company on the platform, publicly.</> },
];

const NOT_FOR_YOU = [
  { icon: CircleDollarSign, text: <>You&apos;re looking for a passive investment you never touch.</> },
  { icon: TrendingDown, text: <>You haven&apos;t operated at scale in your industry.</> },
  { icon: Clock, text: <>You want software but not the responsibility of leading a market.</> },
  { icon: Zap, text: <>You need to be pressured into a decision.</> },
];

export function StraightTalk() {
  return (
    <section id="fit" className="py-24 sm:py-32 bg-white relative">
      <div className="container px-5 sm:px-8">
        <div className="relative">
          
          <div className="text-center mb-16 relative z-10">
            <ScrollReveal>
              <div className="inline-flex items-center justify-center gap-3 mb-6">
                {/* <span className="w-8 h-px "></span> */}
                 <SectionLabel className="justify-center">Straight Talk</SectionLabel>
              </div>
            </ScrollReveal>
            <ScrollReveal delay={100}>
              <h2 className="  text-navy  mx-auto font-bebas ">
                We don&apos;t work with everyone. <br className="hidden sm:block" /> Here&apos;s the honest filter.
              </h2>
            </ScrollReveal>
          </div>

          <div className="grid md:grid-cols-2 gap-8 lg:gap-12 relative z-10">
            {/* Left Column (For You) */}
            <ScrollReveal delay={200}>
              <div className="bg-[#F4FBF0] h-full p-8 rounded-3xl border border-green/20 shadow-[0_10px_40px_-15px_rgba(125,194,67,0.15)] flex flex-col">
                <h3 className="text-xl font-bold text-navy flex items-center gap-4 pb-6 border-b border-line mb-6">
                  <span className="w-12 h-12 rounded-full bg-green/10 flex items-center justify-center shrink-0">
                    <Check className="w-6 h-6 text-green" strokeWidth={3} />
                  </span>
                  This is for you if...
                </h3>
                <ul className="space-y-6 flex-1">
                  {FOR_YOU.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <li key={i} className="flex gap-4 items-start">
                        <span className="mt-0.5 flex w-8 h-8 rounded-full bg-green/5 items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-green" strokeWidth={2} />
                        </span>
                        <span className="text-[15px] leading-relaxed text-ink font-medium">{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </ScrollReveal>

            {/* Right Column (Not For You) */}
            <ScrollReveal delay={300}>
              <div className="bg-red-50 h-full p-8 rounded-3xl border border-red-500/15 shadow-[0_10px_40px_-15px_rgba(239,68,68,0.1)] flex flex-col">
                <h3 className="text-xl font-bold text-navy flex items-center gap-4 pb-6 border-b border-line mb-6">
                  <span className="w-12 h-12 rounded-full bg-red-500/10 flex items-center justify-center shrink-0">
                    <X className="w-6 h-6 text-red-500" strokeWidth={3} />
                  </span>
                  This isn&apos;t for you if...
                </h3>
                <ul className="space-y-6 flex-1">
                  {NOT_FOR_YOU.map((item, i) => {
                    const Icon = item.icon;
                    return (
                      <li key={i} className="flex gap-4 items-start opacity-90">
                        <span className="mt-0.5 flex w-8 h-8 rounded-full bg-red-500/5 items-center justify-center shrink-0">
                          <Icon className="w-4 h-4 text-red-400" strokeWidth={2} />
                        </span>
                        <span className="text-[15px] leading-relaxed text-ink">{item.text}</span>
                      </li>
                    );
                  })}
                </ul>
              </div>
            </ScrollReveal>
          </div>

        </div>
      </div>
    </section>
  );
}
