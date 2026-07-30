import { Coins, TrendingUp, Building2 } from "lucide-react";
import { ScrollReveal } from "../../shared/ScrollReveal";

const BLOCKS = [
  {
    label: "What You Put In",
    title: "A Build Investment",
    body:
      "A one-time investment to build your industry's platform, plus your own company as the first live proof. Exact figures depend on your vertical and scope; we cover them on the call.",
    icon: Coins,
  },
  {
    label: "What You Get Back",
    title: "The Majority Share",
    body:
      "On every client you bring onto the platform, the larger share is yours. You built the trust, you earn the return. We take a partial profit to fund the platform.",
    icon: TrendingUp,
    featured: true,
  },
  {
    label: "What It Becomes",
    title: "An Asset, Not Income",
    body:
      "A software platform that an entire industry runs on is worth more than any single contracting business, and it doesn't wear out, get rained out, or depend on your crews showing up.",
    icon: Building2,
  },
];

export function AssetModel() {
  return (
    <section className="py-14 sm:py-20 px-5 sm:px-8 bg-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="max-w-3xl mb-14">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight text-navy leading-tight mb-6">
              You&apos;re Not Buying Software.
              <br />
              You&apos;re Acquiring An Asset That Pays You.
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed max-w-2xl">
              The math only works one way: the person who owns the platform for
              an industry captures the value of every business in it.
              That&apos;s the position we&apos;re offering, to one founder per
              trade.
            </p>
          </div>
        </ScrollReveal>

        {/* Split bar graphic */}
        <ScrollReveal>
          <div className="mb-14">
            <div className="flex h-16 sm:h-20 rounded-xl overflow-hidden border border-line/60">
              <div className="w-[75%] bg-green-deep flex items-center px-4 sm:px-10">
                <span className="text-white font-bold text-xs sm:text-sm uppercase tracking-[0.14em] font-display">
                  You Keep The Majority Of Every Sale
                </span>
              </div>
              <div className="w-[25%] bg-navy-deep flex items-center px-3 sm:px-6">
                <span className="text-white/90 font-bold text-[10px] sm:text-xs uppercase tracking-[0.14em] font-display">
                  We Take A Share
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-4 px-2">
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] text-ink-soft font-display">
                Your share, the market you own
              </span>
              <span className="text-[10px] sm:text-xs font-bold uppercase tracking-[0.14em] text-ink-soft font-display">
                Our share, the platform we run
              </span>
            </div>
          </div>
        </ScrollReveal>

        {/* Three-card grid */}
        <div className="grid md:grid-cols-3 gap-5 lg:gap-6 items-stretch">
          {BLOCKS.map((b) => {
            const Icon = b.icon;
            const isFeatured = b.featured;

            if (isFeatured) {
              return (
                <ScrollReveal key={b.title}>
                  <div className="relative flex h-full flex-col overflow-hidden rounded-2xl bg-navy-deep p-7 sm:p-8 text-white shadow-[0_30px_80px_-40px_rgba(15,43,53,0.6)]">
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -top-24 -right-24 h-56 w-56 rounded-full bg-green/22 blur-3xl"
                    />
                    <div
                      aria-hidden
                      className="pointer-events-none absolute -bottom-24 -left-16 h-48 w-48 rounded-full bg-gold/10 blur-3xl"
                    />

                    <span className="relative mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-green/15 border border-green/40 text-green">
                      <Icon className="h-5 w-5" strokeWidth={1.8} />
                    </span>
                    <div className="relative text-[10px] font-bold uppercase tracking-[0.18em] text-green mb-3 font-display">
                      {b.label}
                    </div>
                    <h3 className="relative text-xl font-bold text-white mb-4 leading-snug">
                      {b.title}
                    </h3>
                    <p className="relative text-[15px] text-white/80 leading-relaxed">
                      {b.body}
                    </p>
                  </div>
                </ScrollReveal>
              );
            }

            return (
              <ScrollReveal key={b.title}>
                <div className="group card-smooth flex h-full flex-col rounded-2xl border border-line bg-white p-7 sm:p-8 hover:-translate-y-0.5 hover:border-line/0 hover:shadow-[0_20px_40px_-18px_rgba(15,43,53,0.18)]">
                  <span className="mb-6 flex h-12 w-12 items-center justify-center rounded-xl bg-mist text-navy transition-colors duration-300 group-hover:bg-green group-hover:text-white">
                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                  </span>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-green-deep mb-3 font-display">
                    {b.label}
                  </div>
                  <h3 className="text-xl font-bold text-navy mb-4 leading-snug">
                    {b.title}
                  </h3>
                  <p className="text-[15px] text-ink-soft leading-relaxed">
                    {b.body}
                  </p>
                </div>
              </ScrollReveal>
            );
          })}
        </div>
      </div>
    </section>
  );
}
