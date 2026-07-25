import { PIPELINE_STAGES } from "@/src/lib/features";

export default function FeaturePipeline() {
  return (
    <section className="section-alt">
      <div className="container px-5 sm:px-6 lg:px-8">
        <div className="section-head center" style={{ margin: "0 auto 52px" }}>
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            One Record, Start to Finish
          </div>
          <h2>The feature delivery pipeline</h2>
          <p>
            Every feature above shares one thing - the same record. A lead becomes
            a contact, a contact becomes a job, and it moves through OpsROI end to
            end without re-entry or a gap between logins.
          </p>
        </div>

        <div className="relative">
          {/* Connecting line - desktop only, sits behind the icon circles */}
          <div
            className="pointer-events-none absolute left-[10%] right-[10%] top-7 hidden h-0.5 bg-gradient-to-r from-green/30 via-gold/50 to-green/30 lg:block"
            aria-hidden="true"
          />

          <div
            className="grid gap-10 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4"
            data-stagger
          >
            {PIPELINE_STAGES.map((stage) => {
              const Icon = stage.icon;
              return (
                <div
                  key={stage.id}
                  className="relative flex flex-col items-center text-center"
                >
                  <div className="relative z-10 mb-4 flex h-14 w-14 items-center justify-center rounded-full border-2 border-green bg-white shadow-[0_8px_24px_rgba(29,78,95,0.1)]">
                    <Icon className="h-6 w-6 text-navy" strokeWidth={1.8} />
                  </div>
                  <div className="text-[11px] font-bold uppercase tracking-widest text-green-deep">
                    Step {stage.step}
                  </div>
                  <h3 className="mt-1 text-lg font-bold text-navy">
                    {stage.title}
                  </h3>
                  <p className="mt-2 max-w-[30ch] text-sm leading-relaxed text-ink-soft">
                    {stage.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
