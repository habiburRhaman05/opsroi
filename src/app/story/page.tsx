"use client";
import { useEffect } from "react";
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
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
  
      <main>
        
<section className="page-hero">
  <div className="hero-glow hero-glow--a"></div>
  <div className="hero-glow hero-glow--b"></div>
  <div className="container">
    <h1 className="fade-in-up" style={{ animationDelay: '0.08s' }}>Why we built OpsROI.</h1>
    <p className="lede fade-in-up" style={{ animationDelay: '0.16s' }}>A simple frustration: running a business shouldn&apos;t require logging into eight different apps just to get one job done, start to finish.</p>
  </div>
</section>


<section style={{ paddingTop: '76px' }}>
  <div className="container">
    <div className="section-head center " style={{ margin: '0 auto 40px', maxWidth: '720px' }}>
      <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Story</div>
      <h2>Built by an operator, for operators.</h2>
    </div>
    <div style={{ maxWidth: '720px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--ink-soft)' }}>
      <p>Chris Ruvalcaba didn&apos;t start out building software. He started out running Monkey Man, a tree care business - quoting jobs, scheduling crews, chasing invoices, and doing payroll, all through a pile of tools that were never built to work together. A CRM for leads. A separate app for scheduling. A spreadsheet for inventory. A different login for payroll. Every handoff between them was a place things slipped: a follow-up that never went out, an invoice that went out late, a crew member whose hours didn&apos;t add up right at the end of the week.</p>
      
      <div style={{ margin: '20px 0', padding: '24px', borderLeft: '4px solid var(--accent)', background: 'var(--surface-container-low)', borderRadius: '0 12px 12px 0' }}>
        <p style={{ fontStyle: 'italic', color: 'var(--primary)', fontWeight: '500', fontSize: '1.15rem' }}>&quot;I wasn&apos;t trying to build a software company. I was trying to stop losing money to my own tool stack.&quot;</p>
        <p style={{ marginTop: '12px', fontWeight: 'bold' }}>- Chris Ruvalcaba, Founder</p>
      </div>

      <p>None of the &quot;all-in-one&quot; platforms he tried actually were. They were built for agencies selling ad campaigns, not for a business that shows up to a job site with a truck and a crew. So Chris built the system he actually needed - one platform to run Monkey Man from lead to invoice - and used it to run his own business.</p>
      <p>It worked. Not in theory - in his own P&amp;L. That system became <strong>TreeROI</strong>, the first platform in what&apos;s now the OpsROI network.</p>
      <p>Word got around. Other operators - in roofing, HVAC, electrical, landscaping, painting, restoration - saw what TreeROI did for a tree service business and asked the obvious question: <em>can I get that for my industry?</em></p>
      <p>That question is why OpsROI exists as a parent platform today: one proven engine, built once, now available to any agency or trade business - either through an existing vertical platform like TreeROI, or as a founder claiming an open seat and building their own.</p>
      <p>No niche requirement. No rebuilding your process from scratch. Just the systems, structure, and support to turn the work you&apos;re already doing into a clear, visible return - whoever your clients are, and whatever&apos;s in your truck.</p>
    </div>
  </div>
</section>

<section className="section-alt">
  <div className="container">
    <div className="section-head center" style={{ margin: '0 auto 52px' }}>
      <div className="eyebrow" style={{ justifyContent: 'center' }}>How We Got Here</div>
      <h2>From one business to a network.</h2>
    </div>
    
    <div style={{ maxWidth: '800px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>1</div>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>The Problem Years</h3>
          <p style={{ color: 'var(--ink-soft)', lineHeight: '1.6' }}>Chris runs Monkey Man on a stack of disconnected tools: a CRM, a scheduling app, a payroll platform, and a spreadsheet holding the rest together. Follow-ups slip. Invoices go out late. Something has to change.</p>
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>2</div>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>The Build</h3>
          <p style={{ color: 'var(--ink-soft)', lineHeight: '1.6' }}>Rather than adopt another tool, Chris starts building the system he actually needs: one platform, one login, covering leads through invoicing.</p>
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>3</div>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Proof: TreeROI</h3>
          <p style={{ color: 'var(--ink-soft)', lineHeight: '1.6' }}>The internal system becomes TreeROI, a purpose-built CRM for tree care businesses - proven first on Chris&apos;s own business, then opened to other tree care operators.</p>
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>4</div>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>The Network Opens</h3>
          <p style={{ color: 'var(--ink-soft)', lineHeight: '1.6' }}>Other trade operators start asking for the same thing in their industry. OpsROI becomes the parent platform, and the vertical model - one founder, one trade, one CRM - is born. Seats open for RoofersROI, ElectricalROI, WashROI, ContractorsROI, PaintersROI, LandscapersROI, and RebuildROI.</p>
        </div>
      </div>
      
      <div style={{ display: 'flex', gap: '24px', alignItems: 'flex-start' }}>
        <div style={{ width: '40px', height: '40px', borderRadius: '50%', background: 'var(--accent)', color: 'white', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0, fontWeight: 'bold' }}>5</div>
        <div>
          <h3 style={{ fontSize: '1.25rem', marginBottom: '8px' }}>Today</h3>
          <p style={{ color: 'var(--ink-soft)', lineHeight: '1.6' }}>OpsROI serves marketing agencies and trade businesses directly, while the network of vertical CRMs continues to grow, one claimed seat at a time.</p>
        </div>
      </div>
    </div>
  </div>
</section>

<section>
  <div className="container">
    <div className="section-head center " style={{ margin: '0 auto 52px' }}>
      <div className="eyebrow" style={{ justifyContent: 'center' }}>What We Believe</div>
      <h2>The principles behind how we build.</h2>
    </div>
    <div className="grid-3" data-stagger>
      <div className="platform-card " >
        <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M11 2l2 5 5 .5-4 3.5 1.2 5-4.2-2.7L7 15l1-5-4-3.5 5-.5z" stroke="currentColor" strokeWidth="1.5" strokeLinejoin="round"/></svg></div>
        <h3>No Niche Lock-In</h3>
        <p>We don&apos;t ask what kind of business you run before we help you. If you manage client accounts or job sites and need to prove results, we fit.</p>
      </div>
      <div className="platform-card " >
        <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><rect x="2" y="4" width="18" height="14" rx="2" stroke="currentColor" strokeWidth="1.8"/><path d="M2 8h18" stroke="currentColor" strokeWidth="1.8"/></svg></div>
        <h3>Built by Operators</h3>
        <p>Every workflow in OpsROI exists because someone on our team - or in our network - hit the exact problem it solves while actually running the work themselves.</p>
      </div>
      <div className="platform-card " >
        <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><circle cx="11" cy="11" r="8" stroke="currentColor" strokeWidth="1.8"/><path d="M11 6v5l3.5 2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round"/></svg></div>
        <h3>ROI Over Vanity Metrics</h3>
        <p>Dashboards should answer one question, for a client or for yourself: is this working? Everything we report ties back to that.</p>
      </div>
      <div className="platform-card " >
        <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><circle cx="9" cy="7" r="4" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
        <h3>One Seat, One Owner</h3>
        <p>Every vertical in the OpsROI network gets built by one founder who owns it and knows it cold - not a generic template stamped with a new logo.</p>
      </div>
      <div className="platform-card " >
        <div className="icon-mark"><svg width="22" height="22" viewBox="0 0 22 22" fill="none"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/><polyline points="22 4 12 14.01 9 11.01" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/></svg></div>
        <h3>Software That Keeps Working</h3>
        <p>A platform that&apos;s perfect on day one and unsupported on day ninety isn&apos;t actually solving the problem. Every OpsROI plan includes a standing team.</p>
      </div>
    </div>
  </div>
</section>


<section className="section-alt">
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


<section id="founders">
  <div className="container">
    <div className="section-head center " style={{ margin: '0 auto 52px' }}>
      <div className="eyebrow" style={{ justifyContent: 'center' }}>Our Founder</div>
      <h2>The person behind the platform</h2>
    </div>

    <div className="founder-card-premium ">
      <div className="founder-photo-premium">
        <div className="photo-glow"></div>
        <div className="photo-inner">
          <img src="https://opsroi.com/_next/image?url=https%3A%2F%2Fassets.cdn.filesafe.space%2FaKNqKgojBfecmcYEpyvu%2Fmedia%2F6a4b39548a69aa2441a39fd2.png&w=640&q=75" alt="Chris Ruvalcaba" />
        </div>
      </div>
      <div className="founder-content">
        <div className="founder-role">Founder &amp; Owner</div>
        <h3>Chris Ruvalcaba</h3>
        <p>Chris founded OpsROI after years of running a tree care business on tools that were never meant to work together - a CRM here, a scheduling app there, payroll somewhere else, and a spreadsheet holding the rest together. He built one platform to run his own business end to end, proved it out as TreeROI, and opened the same engine up to any agency or trade tired of the same problem.</p>
        <p style={{ marginTop: '14px' }}>OpsROI is his answer to that gap: a CRM and business-ops platform any agency or trade business can plug into, regardless of who their clients are or what&apos;s in their truck. No niche requirement, no rebuilding your process from scratch - just the systems, structure, and support to turn the work into a clear, visible return.</p>
      </div>
    </div>
  </div>
</section>

<section className="section-alt">
  <div className="container">
    <div className="section-head center" style={{ margin: '0 auto 40px', maxWidth: '720px' }}>
      <div className="eyebrow" style={{ justifyContent: 'center' }}>What&apos;s Next</div>
      <h2>A CRM for every trade, built by someone who&apos;s actually run it.</h2>
    </div>
    <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--ink-soft)' }}>
      <p>The goal isn&apos;t to be the biggest generic CRM on the market - it&apos;s to have a purpose-built platform, run by a real operator, in every trade that needs one. Every seat claimed on the network board makes that trade&apos;s businesses better served than a one-size-fits-all tool could ever manage.</p>
    </div>
  </div>
</section>

<section>
  <div className="container">
    <div className="section-head center" style={{ margin: '0 auto 40px', maxWidth: '720px' }}>
      <h2>From one business to a network.</h2>
    </div>
    <div style={{ maxWidth: '720px', margin: '0 auto', textAlign: 'center', fontSize: '1.05rem', lineHeight: '1.8', color: 'var(--ink-soft)' }}>
      <p style={{ marginBottom: '32px' }}>TreeROI proved the model. Now the same engine powers a growing family of trade-specific platforms - each one built and owned by an operator in that industry. Some seats are open right now.</p>
      <div style={{ display: 'flex', gap: '16px', justifyContent: 'center', flexWrap: 'wrap' }}>
        <Link href="#network" className="btn btn-primary">See the OpsROI Network &rarr;</Link>
        <Link href="#claim" className="btn btn-secondary">Claim Your Vertical &rarr;</Link>
      </div>
    </div>
  </div>
</section>

<section className="section-alt">
  <div className="container">
    <div className="cta-box center">
      <h2>Ready to see what this looks like for your business?</h2>
      <p>Book a short call and we&apos;ll walk through what OpsROI would set up for you.</p>
      <Link href="/contact" className="btn btn-primary" style={{ marginTop: '24px' }}>Book a Call</Link>
    </div>
  </div>
</section>

      </main>
    
  );
}
