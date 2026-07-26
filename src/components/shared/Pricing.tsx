import Link from 'next/link';

export default function Pricing({ hideHeader = false }: { hideHeader?: boolean }) {
  return (
    <section id="pricing" className={`relative ${hideHeader ? 'pb-24 sm:pb-32 bg-transparent' : 'py-24 sm:py-32 bg-mist'}`}>
      <div className="max-w-7xl mx-auto px-5 sm:px-8">

        {/* Header Section */}
        {!hideHeader && (
          <div className="text-center mb-14 max-w-3xl mx-auto">
            <div className="inline-flex items-center justify-center gap-3 mb-6 reveal-up is-revealed">
              <span className="w-8 h-px bg-green"></span>
              <span className="text-green text-xs font-bold tracking-widest font-bebas uppercase">The Investment</span>
            </div>
            <h2 className="text-4xl sm:text-5xl md:text-6xl font-bold uppercase tracking-tight font-bebas text-navy mb-6 leading-none">
              What running on autopilot is worth.
            </h2>
            <p className="text-lg text-ink leading-relaxed">
              Compare this to the cost of a missed payroll run, a lost client, or the ops hire
              you haven&apos;t made yet. Pick the tier that matches where your business is now.
            </p>
          </div>
        )}

        {/* Comparison Strip */}
        {!hideHeader && (
          <div className="flex flex-col sm:flex-row items-stretch justify-center gap-4 mb-16 max-w-4xl mx-auto">
            <div className="flex-1 bg-white/60 border border-line rounded-2xl px-6 py-5 text-center">
              <p className="text-ink-soft text-xs uppercase tracking-widest font-bebas mb-1">Hiring an Ops Manager</p>
              <p className="text-navy text-2xl font-extrabold font-bebas">$65K+<span className="text-sm font-medium text-ink-soft">/yr</span></p>
            </div>
            <div className="flex items-center justify-center text-ink-soft text-sm font-medium px-2">vs</div>
            <div className="flex-1 bg-white/60 border border-line rounded-2xl px-6 py-5 text-center">
              <p className="text-ink-soft text-xs uppercase tracking-widest font-bebas mb-1">Stitching Together Tools</p>
              <p className="text-navy text-2xl font-extrabold font-bebas">$800+<span className="text-sm font-medium text-ink-soft">/mo</span></p>
            </div>
            <div className="flex items-center justify-center text-ink-soft text-sm font-medium px-2">vs</div>
            <div className="flex-1 bg-navy rounded-2xl px-6 py-5 text-center">
              <p className="text-green text-xs uppercase tracking-widest font-bebas mb-1">OpsROI</p>
              <p className="text-white text-2xl font-extrabold font-bebas">From $2,950<span className="text-sm font-medium text-white/70">/mo</span></p>
            </div>
          </div>
        )}

        {/* Pricing Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 lg:gap-10 items-stretch">

          {/* Card 1: Growth */}
          <div className="bg-white rounded-[2rem] p-8 sm:p-10 lg:p-12 border border-line shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col relative overflow-hidden">
            <div
              className="absolute top-0 right-0 pointer-events-none w-[150px] md:w-[180px] z-0"
              style={{ transform: 'translate(25%, -25%)', opacity: 0.04, filter: 'invert(1)' }}
            >
              <img src="/watermark.svg" alt="" className="w-full h-auto" aria-hidden="true" />
            </div>
            <div className="relative z-10 flex flex-col flex-1">
              <div className="text-3xl font-bold text-navy font-bebas tracking-wide uppercase mb-3">Growth</div>
              <div className="text-ink-soft text-[15px] mb-8 min-h-[48px]">
                Stop losing track of jobs in your head. Get the system in place before you scale.
              </div>
              <div className="mb-2">
                <span className="text-5xl font-extrabold text-navy tracking-tight font-bebas">$2,950</span>
                <span className="text-ink-soft ml-2 font-medium">/ month</span>
              </div>
              <p className="text-xs text-ink-soft mb-8">Cheaper than the tools you&apos;re stitching together now.</p>
              <ul className="space-y-5 mb-12 flex-1">
                {['Up to 5 client/job subaccounts', 'Core CRM & pipelines', 'Standard automations', 'Document signing', 'Email support'].map(f => (
                  <li key={f} className="flex items-start gap-3 text-ink font-medium">
                    <svg width="22" height="22" viewBox="0 0 18 18" className="shrink-0 mt-0.5"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full flex justify-center py-4 rounded-xl font-bold text-navy bg-mist hover:bg-[#e4eff3] transition-colors uppercase tracking-widest font-bebas text-xl">
                Get Growth
              </Link>
            </div>
          </div>

          {/* Card 2: Pro (Featured) */}
          <div className="bg-navy rounded-[2rem] p-8 sm:p-10 lg:p-12 shadow-2xl relative flex flex-col transform lg:-translate-y-4 border border-navy hover:border-[#22576b] transition-all duration-300 overflow-hidden">
            <div
              className="absolute top-0 right-0 pointer-events-none w-[150px] md:w-[180px] z-0"
              style={{ transform: 'translate(25%, -25%)', opacity: 0.04 }}
            >
              <img src="/watermark.svg" alt="" className="w-full h-auto" aria-hidden="true" />
            </div>
            <div className="absolute top-2 left-1/2 -translate-x-1/2 bg-gold text-navy text-xs font-extrabold tracking-widest uppercase px-5 py-2 rounded-full shadow-md">
              Most Popular
            </div>

            {/* Subtle glow effect inside the featured card */}
            <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,rgba(125,194,67,0.15),transparent_70%)] pointer-events-none rounded-[2rem]"></div>

            <div className="relative z-10 flex flex-col flex-1">
              <div className="text-3xl font-bold text-white font-bebas tracking-wide uppercase mb-3">Pro</div>
              <div className="text-white/70 text-[15px] mb-8 min-h-[48px]">
                Turn the chaos of multiple crews into one dashboard you actually trust.
              </div>
              <div className="mb-2">
                <span className="text-5xl font-extrabold text-gold tracking-tight font-bebas">$4,995</span>
                <span className="text-white/70 ml-2 font-medium">/ month</span>
              </div>
              <p className="text-xs text-white/60 mb-8">Less than one ops hire — with none of the training time.</p>
              <ul className="space-y-5 mb-12 flex-1">
                {['Up to 25 client/job subaccounts', 'White-labeled ROI dashboards', 'Advanced workflow automation', 'AI Estimates & AI Invoicing', 'HR & Payroll', 'Priority support', 'Guided onboarding & setup'].map(f => (
                  <li key={f} className="flex items-start gap-3 text-white font-medium">
                    <svg width="22" height="22" viewBox="0 0 18 18" className="shrink-0 mt-0.5"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full flex justify-center py-4 rounded-xl font-bold text-white bg-green hover:bg-green-deep transition-colors uppercase tracking-widest font-bebas text-xl shadow-lg shadow-green/20">
                Start My ROI
              </Link>
            </div>
          </div>

          {/* Card 3: Elite */}
          <div className="bg-white rounded-[2rem] p-8 sm:p-10 lg:p-12 border border-line shadow-sm hover:shadow-xl transition-shadow duration-300 flex flex-col relative overflow-hidden">
            <div
              className="absolute top-0 right-0 pointer-events-none w-[150px] md:w-[180px] z-0"
              style={{ transform: 'translate(25%, -25%)', opacity: 0.04, filter: 'invert(1)' }}
            >
              <img src="/watermark.svg" alt="" className="w-full h-auto" aria-hidden="true" />
            </div>
            <div className="relative z-10 flex flex-col flex-1">
              <div className="text-3xl font-bold text-navy font-bebas tracking-wide uppercase mb-3">Elite</div>
              <div className="text-ink-soft text-[15px] mb-8 min-h-[48px]">
                Stop being the bottleneck. Get a dedicated partner who runs ops so you don&apos;t have to.
              </div>
              <div className="mb-2">
                <span className="text-5xl font-extrabold text-navy tracking-tight font-bebas">$7,495</span>
                <span className="text-ink-soft ml-2 font-medium">/ month</span>
              </div>
              <p className="text-xs text-ink-soft mb-8">The cost of one bad week of chaos, prevented every month.</p>
              <ul className="space-y-5 mb-12 flex-1">
                {['Unlimited client subaccounts', 'Custom reporting builds', 'Dedicated ops partner', 'Custom automation builds', 'Same-day support'].map(f => (
                  <li key={f} className="flex items-start gap-3 text-ink font-medium">
                    <svg width="22" height="22" viewBox="0 0 18 18" className="shrink-0 mt-0.5"><path d="M4 9l3 3 7-7.5" stroke="#7DC243" strokeWidth="2.5" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    <span>{f}</span>
                  </li>
                ))}
              </ul>
              <Link href="/contact" className="w-full flex justify-center py-4 rounded-xl font-bold text-navy bg-mist hover:bg-[#e4eff3] transition-colors uppercase tracking-widest font-bebas text-xl">
                Scope My Setup
              </Link>
            </div>
          </div>

        </div>

        {/* Risk reversal line */}
        {!hideHeader && (
          <p className="text-center text-sm text-ink-soft mt-10">
            No long-term contract. Cancel anytime.
          </p>
        )}

      </div>
    </section>
  );
}