"use client";
import { useEffect } from "react";
import Header from '@/src/components/Header';
import Footer from '@/src/components/Footer';
import Link from 'next/link';
import Compare from "@/src/components/Compare";
import Pricing from "@/src/components/Pricing";

export default function PricingPage() {

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
     <div className="eyebrow fade-in-up">Pricing</div>
    {/* <div className="page-breadcrumb fade-in-up"><a href="/">Home</a> <span className="sep">/</span> Pricing</div> */}
    <h1 className="fade-in-up" style={{ animationDelay: '0.08s' }}>Straightforward pricing, whatever you run.</h1>
    <p className="lede fade-in-up" style={{ animationDelay: '0.16s' }}>No niche upcharge, no per-client tax on subaccounts. Pick the tier that matches your agency's size.</p>
  </div>
</section>


<Pricing hideHeader={true} />


{/* <Compare/> */}

      </main>
   
  );
}
