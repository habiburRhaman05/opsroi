import Image from 'next/image';

import Link from 'next/link';

export default function Founders() {
  return (
    <section id="founders">
      <div className="container">
        <div className="section-head center" style={{margin: '0 auto 52px'}}>
          <div className="eyebrow" style={{justifyContent: 'center'}}>Our Founder</div>
          <h2>Why we built OpsROI</h2>
          <p>Chris Ruvalcaba started in tree care &mdash; running Monkey Man on a stack of tools that never quite talked to each other. So he built one platform that did it all, ran his own business on it, and then opened it up to every agency and trade tired of the same problem.</p>
        </div>

        <div className="founder-card-premium relative overflow-hidden">
          <div 
            className="absolute top-0 right-0 pointer-events-none w-[150px] md:w-[250px] z-0" 
            style={{ transform: 'translate(20%, -20%)', opacity: 0.05 }}
          >
            <img src="/watermark.svg" alt="" className="w-full h-auto" aria-hidden="true" />
          </div>
          <div className="founder-photo-premium relative z-10">
            <div className="photo-glow"></div>
            <div className="photo-inner">
              <Image src="/founder.webp"  alt='Chris Ruvalcaba' width={320} height={320} />
            </div>
          </div>
          <div className="founder-content relative z-10">
            <div className="founder-role">Founder &amp; Owner</div>
            <h3>Chris Ruvalcaba</h3>
            <p>Chris started in tree care &mdash; running Monkey Man on a stack of tools that never quite talked to each other: one for leads, one for scheduling, one for invoicing, one for payroll. Every handoff between them was a place things slipped: a follow-up that never went out, an invoice that went out late, a crew member whose hours didn&apos;t add up right at the end of the week.</p>
            <p style={{marginTop: '14px'}}>None of the &ldquo;all-in-one&rdquo; platforms he tried actually were. They were built for agencies selling ad campaigns, not for a business that shows up to a job site with a truck and a crew. So Chris built the system he actually needed &mdash; one platform to run Monkey Man from lead to invoice &mdash; and used it to run his own business. That system became TreeROI, the first platform in what&apos;s now the OpsROI network.</p>
            <p style={{marginTop: '14px'}}>
              <Link href="/story" className="text-green font-bold hover:text-green-deep transition-colors">
                Read the full story &rarr;
              </Link>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
