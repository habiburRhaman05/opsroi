import { ScrollReveal } from "../../shared/ScrollReveal";

export function AssetModel() {
  return (
    <section className="py-24 sm:py-32 px-5 sm:px-8 bg-white overflow-hidden relative">
      <div className="max-w-5xl mx-auto">
        <ScrollReveal>
          <div className="max-w-3xl mb-20">
            <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-navy leading-[1.15] mb-6">
              You&apos;re not buying software.<br />
              You&apos;re acquiring an asset that pays you.
            </h2>
            <p className="text-lg text-ink-soft leading-relaxed max-w-2xl">
              The math only works one way: the person who owns the platform for an industry captures the value of every business in it. That&apos;s the position we&apos;re offering — to one founder per trade.
            </p>
          </div>
        </ScrollReveal>

        <ScrollReveal>
          {/* Split Bar Graphic */}
          <div className="mb-16">
            <div className="flex h-16 sm:h-20 rounded-xl sm:rounded-2xl overflow-hidden shadow-lg border border-line/60">
              <div className="w-[75%] bg-[#325a1e] flex items-center px-4 sm:px-10">
                <span className="text-white font-bold text-xs sm:text-base tracking-wide">
                  You keep the majority of every sale
                </span>
              </div>
              <div className="w-[25%] bg-[#0f2830] flex items-center px-3 sm:px-8">
                <span className="text-white/90 font-semibold text-[10px] sm:text-sm tracking-wide">
                  We take a share
                </span>
              </div>
            </div>
            <div className="flex justify-between mt-4 px-2">
              <span className="text-ink-soft text-xs sm:text-sm font-medium">
                Your share — the market you own
              </span>
              <span className="text-ink-soft text-xs sm:text-sm font-medium">
                Our share — the platform we run
              </span>
            </div>
          </div>
        </ScrollReveal>

        <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
          <ScrollReveal delay={0.1}>
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 border border-line shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
              <div className="text-[11px] font-bold tracking-widest uppercase text-[#7DC243] mb-6">
                What you put in
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">A build investment</h3>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                A one-time investment to build your industry&apos;s platform — plus your own company as the first live proof. Exact figures depend on your vertical and scope; we cover them on the call.
              </p>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.2}>
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 border border-line shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-br from-[#7DC243]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="relative z-10">
                <div className="text-[11px] font-bold tracking-widest uppercase text-[#7DC243] mb-6">
                  What you get back
                </div>
                <h3 className="text-xl font-bold text-navy mb-2">The majority share</h3>
                <h4 className="text-2xl font-bold text-[#325a1e] mb-4">You keep more</h4>
                <p className="text-[15px] text-ink-soft leading-relaxed">
                  On every client you bring onto the platform, the larger share is yours. You built the trust; you earn the return. We take a partial profit to fund the platform.
                </p>
              </div>
            </div>
          </ScrollReveal>

          <ScrollReveal delay={0.3}>
            <div className="bg-white rounded-[2rem] p-8 lg:p-10 border border-line shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 h-full">
              <div className="text-[11px] font-bold tracking-widest uppercase text-[#7DC243] mb-6">
                What it becomes
              </div>
              <h3 className="text-xl font-bold text-navy mb-4">An asset, not income</h3>
              <p className="text-[15px] text-ink-soft leading-relaxed">
                A software platform that an entire industry runs on is worth more than any single contracting business — and it doesn&apos;t wear out, get rained out, or depend on your crews showing up.
              </p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>
  );
}
