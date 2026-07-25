import { ScrollReveal } from "../../shared/ScrollReveal";

export function StillNotSure() {
  return (
    <section className="pb-24 px-5 sm:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        <ScrollReveal>
          <div className="flex items-center gap-4 max-w-2xl mx-auto mb-6">
            <span className="flex-1 h-px bg-line" />
            <span className="text-[11px] font-bold tracking-widest uppercase text-ink-soft">
              Still Not Sure?
            </span>
            <span className="flex-1 h-px bg-line" />
          </div>
        </ScrollReveal>
        
        <ScrollReveal>
          <p className="text-center text-lg text-ink-soft max-w-xl mx-auto leading-relaxed">
            Send us a note through the contact form, tell us where your business is today, and we&apos;ll tell you honestly which track fits.
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
