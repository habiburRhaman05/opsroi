import Image from 'next/image';

export default function Founders() {
  return (
    <section id="founders">
      <div className="container">
        <div className="section-head center" style={{margin: '0 auto 52px'}}>
          <div className="eyebrow" style={{justifyContent: 'center'}}>Our Founders</div>
          <h2>Why we built OpsROI</h2>
          <p>OpsROI started with a simple frustration: agencies are great at getting clients results, but drown in the operations required to prove it. We built the platform we wished we&apos;d had.</p>
        </div>

        <div className="founder-card-premium">
          <div className="founder-photo-premium">
            <div className="photo-glow"></div>
            <div className="photo-inner">
              <Image src="https://opsroi.com/_next/image?url=https%3A%2F%2Fassets.cdn.filesafe.space%2FaKNqKgojBfecmcYEpyvu%2Fmedia%2F6a4b39548a69aa2441a39fd2.png&w=640&q=75" alt="Chris Ruvalcaba" width={320} height={320} />
            </div>
          </div>
          <div className="founder-content">
            <div className="founder-role">Founder &amp; Owner</div>
            <h3>Chris Ruvalcaba</h3>
            <p>Chris founded OpsROI after years of watching agencies win great clients and then lose them - not from bad work, but from operations that couldn&apos;t keep up: messy CRMs, missed follow-ups, and reporting that never quite proved the value being delivered.</p>
            <p style={{marginTop: '14px'}}>OpsROI is his answer to that gap - a CRM and client-ops platform any agency can plug into, regardless of who their clients are. No niche requirement, no rebuilding your process from scratch. Just the systems, structure, and support to turn client work into a clear, visible return.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
