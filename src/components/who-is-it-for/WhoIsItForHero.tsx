import { ScrollReveal } from "../ScrollReveal";

export function WhoIsItForHero() {
  return (
    <header className="pt-20 md:pt-28 pb-12 md:pb-16 px-5 sm:px-8 max-w-7xl mx-auto text-center bg-white">
      <div className="max-w-3xl mx-auto">
        <ScrollReveal>
          <div className="inline-flex items-center gap-2 text-xs font-bold tracking-wide bg-green/10 border border-green/20 text-navy px-4 py-1.5 rounded-full mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-green animate-pulse" />
            Two Ways to Work With Us
          </div>
        </ScrollReveal>
        <ScrollReveal>
          <h1 className="text-navy text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.15]">
            Own the platform, <span className="text-green">or have us build it for you.</span> Either way, there&apos;s a fit here.
          </h1>
        </ScrollReveal>
        <ScrollReveal>
          <p className="text-lg text-ink-soft mt-6 max-w-xl mx-auto leading-relaxed font-medium">
            OpsROI works with contractor businesses two different ways. Find the one that matches where you are.
          </p>
        </ScrollReveal>
      </div>
    </header>
  );
}
