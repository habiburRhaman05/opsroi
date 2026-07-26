import Link from 'next/link';

export default function StoryPage() {
  return (
    <main className="bg-white overflow-hidden">
      
      {/* 1. Hero Section (Solid Navy Style) */}
      <section className="relative pt-24 pb-20 sm:pt-40 sm:pb-40 bg-navy">
        <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center">
          <div className="inline-flex items-center justify-center gap-3  reveal-up is-revealed">
            <div className="eyebrow fade-in-up">Our Story</div>
          </div>
          
          <h1 className="font-sans font-bold leading-tight tracking-tight text-white   reveal-up is-revealed" style={{ transitionDelay: '0.1s' }}>
            Why we built <br className="hidden sm:block" />
            <span className="text-green">OpsROI.</span>
          </h1>
          
          <p className="mt-6 text-white/80 text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto reveal-up is-revealed" style={{ transitionDelay: '0.2s' }}>
            A simple frustration: running a business shouldn&apos;t require logging into eight different apps just to get one job done, start to finish.
          </p>
        </div>
      </section>

      {/* 2. Stats Band */}
      <section className="bg-white py-16 sm:py-24 border-b border-line relative z-20">
        <div className="max-w-6xl mx-auto px-5 sm:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-4 text-center md:divide-x divide-line">
            <div className="px-4 group cursor-default">
              <p className="text-4xl lg:text-5xl font-bold text-green font-bebas leading-none flex items-baseline justify-center gap-2 transition-transform duration-300 group-hover:scale-110">
                <span>4.5</span>
                <span className="text-navy text-lg font-sans font-semibold">days</span>
              </p>
              <p className="text-ink-soft text-xs sm:text-sm mt-4 uppercase tracking-widest font-bebas transition-colors duration-300 group-hover:text-navy">Avg time to live pipeline</p>
            </div>
            <div className="px-4 group cursor-default">
              <p className="text-4xl lg:text-5xl font-bold text-green font-bebas leading-none flex items-baseline justify-center gap-2 transition-transform duration-300 group-hover:scale-110">
                <span>96%</span>
              </p>
              <p className="text-ink-soft text-xs sm:text-sm mt-4 uppercase tracking-widest font-bebas transition-colors duration-300 group-hover:text-navy">Client retention rate</p>
            </div>
            <div className="px-4 group cursor-default">
              <p className="text-4xl lg:text-5xl font-bold text-green font-bebas leading-none flex items-baseline justify-center gap-2 transition-transform duration-300 group-hover:scale-110">
                <span>3.3x</span>
              </p>
              <p className="text-ink-soft text-xs sm:text-sm mt-4 uppercase tracking-widest font-bebas transition-colors duration-300 group-hover:text-navy">Client capacity growth</p>
            </div>
            <div className="px-4 group cursor-default">
              <p className="text-4xl lg:text-5xl font-bold text-green font-bebas leading-none flex items-baseline justify-center gap-2 transition-transform duration-300 group-hover:scale-110">
                <span>8-in-1</span>
              </p>
              <p className="text-ink-soft text-xs sm:text-sm mt-4 uppercase tracking-widest font-bebas transition-colors duration-300 group-hover:text-navy">Tools replaced</p>
            </div>
          </div>
        </div>
      </section>

      {/* 3. The Narrative (Z-Pattern Editorial Layout) */}
      <section className="py-24 sm:py-32 overflow-hidden">
        <div className="max-w-6xl mx-auto px-5 sm:px-8 space-y-32 relative">
          
          {/* The Vertical Timeline Track (Desktop only) */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-px bg-line -translate-x-1/2 z-0"></div>
          
          {/* Chapter 1 (Left aligned) */}
          <article className="grid md:grid-cols-2 gap-16 items-center relative z-10 group">
            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-mist border-2 border-green shadow-[0_0_0_8px_white] transition-transform duration-500 group-hover:scale-150 z-20"></div>
            
            <div className="relative">
              <span className="absolute -top-16 -left-12 text-[12rem] font-bebas font-bold text-black/5 leading-none select-none pointer-events-none">01</span>
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-bebas text-navy">The Problem Years</h2>
                <p className="mt-6 text-ink text-lg leading-relaxed">
                  Chris runs Monkey Man on a stack of disconnected tools: a CRM, a scheduling app, a payroll platform, and a spreadsheet holding the rest together. Follow-ups slip. Invoices go out late. Something has to change.
                </p>
              </div>
            </div>
            <div className="bg-mist p-10 rounded-3xl border border-line shadow-sm relative overflow-hidden">
              <div className="absolute top-0 left-0 w-2 h-full bg-green"></div>
              <p className="text-xl italic text-navy font-medium leading-relaxed">
                &quot;I wasn&apos;t trying to build a software company. I was trying to stop losing money to my own tool stack.&quot;
              </p>
              <p className="mt-6 text-green font-bold uppercase tracking-widest font-bebas text-sm">
                - Chris Ruvalcaba
              </p>
            </div>
          </article>

          {/* Chapter 2 (Right aligned) */}
          <article className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse relative z-10 group">
            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-mist border-2 border-green shadow-[0_0_0_8px_white] transition-transform duration-500 group-hover:scale-150 z-20"></div>

            <div className="md:order-2 relative">
              <span className="absolute -top-16 -right-12 text-[12rem] font-bebas font-bold text-black/5 leading-none select-none pointer-events-none">02</span>
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-bebas text-navy">The Build</h2>
                <p className="mt-6 text-ink text-lg leading-relaxed">
                  Rather than adopt another tool, Chris starts building the system he actually needs: one platform, one login, covering leads through invoicing.
                </p>
                <p className="mt-4 text-ink text-lg leading-relaxed">
                  None of the &quot;all-in-one&quot; platforms he tried actually were. They were built for agencies selling ad campaigns, not for a business that shows up to a job site with a truck and a crew.
                </p>
              </div>
            </div>
            <div className="md:order-1 relative rounded-3xl overflow-hidden shadow-2xl shadow-navy/10 border border-line transition-transform duration-500 hover:-translate-y-2">
              <img src="/opsroi-dashboard-demo.png" alt="OpsROI Unified Platform UI" className="w-full h-auto object-cover" />
            </div>
          </article>

          {/* Chapter 3 (Left aligned) */}
          <article className="grid md:grid-cols-2 gap-16 items-center relative z-10 group">
            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-mist border-2 border-green shadow-[0_0_0_8px_white] transition-transform duration-500 group-hover:scale-150 z-20"></div>

            <div className="relative">
              <span className="absolute -top-16 -left-12 text-[12rem] font-bebas font-bold text-black/5 leading-none select-none pointer-events-none">03</span>
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-bebas text-navy">Proof: TreeROI</h2>
                <p className="mt-6 text-ink text-lg leading-relaxed">
                  The internal system becomes TreeROI, a purpose-built CRM for tree care businesses - proven first on Chris&apos;s own business, then opened to other tree care operators.
                </p>
                <p className="mt-4 text-ink text-lg leading-relaxed">
                  It worked. Not in theory - in his own P&amp;L. That system became the first platform in what&apos;s now the OpsROI network.
                </p>
              </div>
            </div>
            <div className="bg-navy p-10 rounded-3xl text-white shadow-xl relative overflow-hidden flex flex-col justify-center min-h-[300px]">
              <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(125,194,67,0.3),transparent_60%)]"></div>
              <div className="relative z-10">
                <p className="text-5xl font-bold font-bebas text-gold mb-2">$5M+</p>
                <p className="text-white/80 font-medium uppercase tracking-widest font-bebas">Annual Revenue Managed</p>
              </div>
            </div>
          </article>

          {/* Chapter 4 (Right aligned) */}
          <article className="grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse relative z-10 group">
            {/* Timeline Dot */}
            <div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 rounded-full bg-mist border-2 border-green shadow-[0_0_0_8px_white] transition-transform duration-500 group-hover:scale-150 z-20"></div>

            <div className="md:order-2 relative">
              <span className="absolute -top-16 -right-12 text-[12rem] font-bebas font-bold text-black/5 leading-none select-none pointer-events-none">04</span>
              <div className="relative z-10">
                <h2 className="text-4xl sm:text-5xl font-bold uppercase tracking-tight font-bebas text-navy">The Network Opens</h2>
                <p className="mt-6 text-ink text-lg leading-relaxed">
                  Other trade operators saw what TreeROI did and asked the obvious question: <em className="text-navy font-bold">can I get that for my industry?</em>
                </p>
                <p className="mt-4 text-ink text-lg leading-relaxed">
                  OpsROI becomes the parent platform. The vertical model - one founder, one trade, one CRM - is born. Seats open for RoofersROI, ElectricalROI, WashROI, and more.
                </p>
              </div>
            </div>
            <div className="md:order-1 grid grid-cols-2 gap-4">
               <a href="https://treeroi.com" target="_blank" rel="noopener noreferrer" className="bg-white border border-line rounded-2xl p-6 text-center shadow-sm flex flex-col items-center justify-center aspect-square transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer">
                 <img src="/logos/TreeROI/TreeROI-1.png" alt="TreeROI" className="w-full max-w-[120px] h-auto object-contain" />
               </a>
               <a href="https://roofersroi.com" target="_blank" rel="noopener noreferrer" className="bg-white border border-line rounded-2xl p-6 text-center shadow-sm flex flex-col items-center justify-center aspect-square transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer">
                 <img src="/logos/RoofersROI/RoofersROI-1.png" alt="RoofersROI" className="w-full max-w-[140px] h-auto object-contain" />
               </a>
               <a href="https://contractorsroi.com" target="_blank" rel="noopener noreferrer" className="bg-white border border-line rounded-2xl p-6 text-center shadow-sm flex flex-col items-center justify-center aspect-square transition-transform hover:-translate-y-1 hover:shadow-md cursor-pointer">
                 <img src="/logos/ContractorsROI/ContractorsROI-1.png" alt="ContractorsROI" className="w-full max-w-[150px] h-auto object-contain" />
               </a>
               <div className="bg-white border border-line rounded-2xl p-6 text-center shadow-sm flex flex-col items-center justify-center aspect-square">
                 <p className="font-bebas text-2xl text-navy text-ink-soft">More...</p>
               </div>
            </div>
          </article>
        </div>
      </section>
      {/* 4. The Founder Statement */}
      <section className="bg-white py-32 sm:py-40 border-y border-line relative overflow-hidden">
        {/* Subtle decorative glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle,rgba(125,194,67,0.05)_0%,transparent_70%)] rounded-full pointer-events-none"></div>
        
        <div className="max-w-5xl mx-auto px-5 sm:px-8 text-center relative z-10">
          <span className="block text-[150px] leading-none text-green/10 font-serif font-black absolute -top-20 left-1/2 -translate-x-1/2 pointer-events-none select-none">&quot;</span>
          
          <blockquote className="text-3xl sm:text-4xl md:text-[2.75rem] leading-[1.35] font-sans font-bold text-navy tracking-tight relative">
            <span className=" font-normal">This is not an agency. This is not just software.</span><br className="hidden md:block" />
            <br className="hidden md:block" />
            It&apos;s the operating system <br/> I wish someone had handed me at $1M,
             <span className="text-green relative inline-block">built by somebody who&apos;s made the 2AM payroll call</span> and felt every one of these problems firsthand.
          </blockquote>
          
          <div className="mt-8 flex flex-col items-center justify-center gap-4 reveal-up is-revealed" style={{ transitionDelay: '0.2s' }}>
            <div className="w-16 h-16 rounded-full bg-mist border border-line shadow-sm flex items-center justify-center">
             <img src="./founder.webp" className='rounded-full' alt="" />
            </div>
            <div>
              <p className="text-navy font-bold text-lg">Chris Ruvalcaba</p>
              <p className="text-ink-soft text-sm uppercase tracking-widest font-bebas mt-1">Founder, OpsROI</p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. What We Believe / Founder Context */}
      <section className="bg-mist py-24 sm:py-32">
        <div className="max-w-7xl mx-auto px-5 sm:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
         
             <div className="inline-flex items-center justify-center gap-3  reveal-up is-revealed">
            <div className="eyebrow fade-in-up">The Principles</div>
          </div>
            <h2 className=" capitalize font-bebas text-navy">
         
              The same system productized
            </h2>
            <p className="text-ink text-lg leading-relaxed mt-6">
              TreeROI proved the model. Now the same engine powers a growing family of trade-specific platforms - each one built and owned by an operator in that industry.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-line hover:-translate-y-1 transition-transform duration-300">
              <span className="text-green font-bebas text-3xl">01.</span>
              <h3 className="text-xl font-bold font-bebas uppercase tracking-tight text-navy mt-4 mb-3">No Niche Lock-In</h3>
              <p className="text-ink leading-relaxed">We provide the universal engine; operators provide the industry expertise. The system scales to fit the specific needs of any trade.</p>
            </div>
            
            <div className="bg-white p-10 rounded-3xl shadow-sm border border-line hover:-translate-y-1 transition-transform duration-300">
              <span className="text-green font-bebas text-3xl">02.</span>
              <h3 className="text-xl font-bold font-bebas uppercase tracking-tight text-navy mt-4 mb-3">Built by Operators</h3>
              <p className="text-ink leading-relaxed">Software companies build for features. Operators build for outcomes. Every platform in our network is guided by someone doing the actual work.</p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-line hover:-translate-y-1 transition-transform duration-300">
              <span className="text-green font-bebas text-3xl">03.</span>
              <h3 className="text-xl font-bold font-bebas uppercase tracking-tight text-navy mt-4 mb-3">ROI Over Vanity</h3>
              <p className="text-ink leading-relaxed">We don&apos;t care about page views if they don&apos;t turn into booked jobs. Every tool in the platform is measured by its impact on the bottom line.</p>
            </div>

            <div className="bg-white p-10 rounded-3xl shadow-sm border border-line hover:-translate-y-1 transition-transform duration-300">
              <span className="text-green font-bebas text-3xl">04.</span>
              <h3 className="text-xl font-bold font-bebas uppercase tracking-tight text-navy mt-4 mb-3">One Seat, One Owner</h3>
              <p className="text-ink leading-relaxed">The vertical model works because it&apos;s focused. We partner with one driven operator per industry to own and build their specific CRM.</p>
            </div>
          </div>
          
          <div className="text-center mt-16">
            <Link href="/book" className="inline-flex items-center justify-center rounded-full bg-navy hover:bg-navy-deep text-white font-bold text-md tracking-widest px-8 py-4 font-bebas transition-all shadow-lg hover:shadow-xl">
              Book a Call
            </Link>
          </div>

        </div>
      </section>

    
      
    </main>
  );
}
