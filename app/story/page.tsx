"use client";
import { useEffect } from "react";
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import Link from 'next/link';

export default function StoryPage() {

  useEffect(() => {
    // FAQ
    const faqs = document.querySelectorAll('.faq-question');
    const handleFaq = (e: any) => {
      const q = e.currentTarget;
      const item = q.closest('.faq-item');
      if (!item) return;
      const wasOpen = item.classList.contains('open');
      document.querySelectorAll('.faq-item').forEach((i: any) => i.classList.remove('open'));
      if (!wasOpen) item.classList.add('open');
    };
    faqs.forEach((q: any) => q.addEventListener('click', handleFaq));

    // Tabs
    const tabs = document.querySelectorAll('.feature-tabs .tab-btn');
    const handleTab = (e: any) => {
      const btn = e.currentTarget;
      const tab = btn.dataset.ftab;
      const scope = btn.closest('.feature-tabs');
      if (!scope) return;
      scope.querySelectorAll('.tab-btn').forEach((b: any) => b.classList.remove('active'));
      scope.querySelectorAll('.tab-panel').forEach((p: any) => p.classList.remove('active'));
      btn.classList.add('active');
      const panel = document.getElementById('ftab-' + tab);
      if (panel) panel.classList.add('active');
    };
    tabs.forEach((t: any) => t.addEventListener('click', handleTab));

    return () => {
      faqs.forEach((q: any) => q.removeEventListener('click', handleFaq));
      tabs.forEach((t: any) => t.removeEventListener('click', handleTab));
    };
  }, []);

  return (
    <>
      <Header />
      <main>
        
<section className="page-hero">
  <div className="hero-glow hero-glow--a"></div>
  <div className="hero-glow hero-glow--b"></div>
  <div className="container">
    {/* <div className="page-breadcrumb fade-in-up"><a href="/">Home</a> <span className="sep">/</span> Story</div> */}
    <h1 className="fade-in-up" style={{ animationDelay: '0.08s' }}>Why we built OpsROI.</h1>
    <p className="lede fade-in-up" style={{ animationDelay: '0.16s' }}>A simple frustration: agencies are great at getting clients results, but drown in the operations required to prove it.</p>
  </div>
</section>


<section style={{ paddingTop: '76px' }}>
  <div className="container">
    <div className="section-head center " style={{ margin: '0 auto 40px', maxWidth: '720px' }}>
      <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Story</div>
      <h2>Built by agency operators, for agency operators.</h2>
    </div>
    <div  style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--ink-soft)' }}>
      <p>OpsROI started after years of watching agencies win great clients and then lose them - not from bad work, but from operations that couldn't keep up: messy CRMs, missed follow-ups, and reporting that never quite proved the value being delivered.</p>
      <p>Every "agency CRM" we tried before this assumed we sold one specific thing - marketing, or coaching, or home services - and made us bend our process to fit their template. So we built the platform we wished we'd had: one that's built around how agencies actually operate, not around any single industry's playbook.</p>
      <p>No niche requirement, no rebuilding your process from scratch. Just the systems, structure, and support to turn client work into a clear, visible return - whoever your clients happen to be.</p>
    </div>
  </div>
</section>


<section className="section-alt">
  <div className="container">
    <div className="section-head center " style={{ margin: '0 auto 52px' }}>
      <div className="eyebrow" style={{ justifyContent: 'center' }}>What We Believe</div>
      <h2>The principles behind how we build.</h2>
    </div>
    <div className="grid-3" data-stagger>
      <div className="platform-card " >
        <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l2 5 5 .5-4 3.5 1.2 5-4.2-2.7L7 15l1-5-4-3.5 5-.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg></div>
        <h3>No Niche Lock-In</h3>
        <p>We don't ask what kind of agency you are before we help you. If you manage client accounts and need to prove results, we fit.</p>
      </div>
      <div className="platform-card " >
        <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M2 8h18" stroke="currentColor" strokeWidth="1.8"/></svg></div>
        <h3>Built by Operators</h3>
        <p>Every workflow in OpsROI exists because someone on our team hit the exact problem it solves while running client ops themselves.</p>
      </div>
      <div className="platform-card " >
        <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8"/><path d="M11 6v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
        <h3>ROI Over Vanity Metrics</h3>
        <p>Dashboards should answer one question for your client: is this working? Everything we report ties back to that.</p>
      </div>
    </div>
  </div>
</section>


<section>
  <div className="container">
    <div className="stat-band ">
      <div className="stat">
        <span className="num">4.5 days</span>
        <span className="label">average time to a live pipeline</span>
      </div>
      <div className="stat">
        <span className="num">96%</span>
        <span className="label">client retention after switching</span>
      </div>
      <div className="stat">
        <span className="num">3.3x</span>
        <span className="label">more client accounts, same headcount</span>
      </div>
      <div className="stat">
        <span className="num">8-in-1</span>
        <span className="label">tools replaced by one platform</span>
      </div>
    </div>
  </div>
</section>


<section id="founders" className="section-alt">
  <div className="container">
    <div className="section-head center " style={{ margin: '0 auto 52px' }}>
      <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Founder</div>
      <h2>The person behind the platform</h2>
    </div>

    <div className="founder-card-premium ">
      <div className="founder-photo-premium">
        <div className="photo-glow"></div>
        <div className="photo-inner">
          <img src="https://opsroi.com/_next/image?url=https%3A%2F%2Fassets.cdn.filesafe.space%2FaKNqKgojBfecmcYEpyvu%2Fmedia%2F6a4b39548a69aa2441a39fd2.png&w=640&q=75" alt="" />
        </div>
      </div>
      <div className="founder-content">
        <div className="founder-role">Founder &amp; Owner</div>
        <h3>Chris Ruvalcaba</h3>
        <p>Chris founded OpsROI after years of watching agencies win great clients and then lose them - not from bad work, but from operations that couldn't keep up: messy CRMs, missed follow-ups, and reporting that never quite proved the value being delivered.</p>
        <p style={{ marginTop: '14px' }}>OpsROI is his answer to that gap - a CRM and client-ops platform any agency can plug into, regardless of who their clients are. No niche requirement, no rebuilding your process from scratch. Just the systems, structure, and support to turn client work into a clear, visible return.</p>
      </div>
    </div>
  </div>
</section>





      </main>
      <Footer />
    </>
  );
}
