"use client";
import Header from '@/src/components/layout/Header';
import Footer from '@/src/components/layout/Footer';
import Link from 'next/link';
import Compare from "@/src/components/shared/Compare";
import Pricing from "@/src/components/shared/Pricing";

export default function PricingPage() {
  return (

      <main>
        
<section className="page-hero relative overflow-hidden">
  {/* Watermark SVG */}
  <div 
    className="absolute top-0 right-0 pointer-events-none w-[150px] md:w-[250px] lg:w-[350px] z-0" 
    style={{ transform: 'translate(20%, -20%)', opacity: 0.05 }}
  >
    <img src="/watermark.svg" alt="" className="w-full h-auto" aria-hidden="true" />
  </div>

  <div className="hero-glow hero-glow--a"></div>
  <div className="hero-glow hero-glow--b"></div>
  <div className="container relative z-10">
     <div className="eyebrow fade-in-up">Pricing</div>
    {/* <div className="page-breadcrumb fade-in-up"><a href="/">Home</a> <span className="sep">/</span> Pricing</div> */}
    <h1 className="fade-in-up" style={{ animationDelay: '0.08s' }}>Straightforward pricing, whatever you run.</h1>
    <p className="lede fade-in-up" style={{ animationDelay: '0.16s' }}>No niche upcharge, no per-client tax on subaccounts. Pick the tier that matches your business&apos;s size &mdash; agency or trade.</p>
  </div>
</section>


<Pricing hideHeader={true} />


{/* <Compare/> */}

      </main>
   
  );
}
