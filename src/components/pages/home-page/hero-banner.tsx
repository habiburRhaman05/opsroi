import React from 'react';
import { Zap, ArrowRight, CheckCircle2 } from 'lucide-react';

export default function HeroSection() {
  return (
    <section className="relative min-h-screen w-full bg-[#132A2F] flex items-center justify-center overflow-hidden font-sans">
      {/* Subtle Background Glows */}
      <div className="absolute top-0 left-0 w-[500px] h-[500px] bg-emerald-600/10 blur-[120px] rounded-full pointer-events-none -translate-x-1/2 -translate-y-1/2"></div>
      
      <div className="container mx-auto py-16 md:py-24 grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-8 items-center z-10 relative">
        
        {/* Left Column: Text Content */}
        <div className="max-w-xl">
          {/* Top Badge */}
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-teal-500/30 bg-teal-950/40 text-teal-100 text-xs sm:text-sm font-medium tracking-wide mb-8 backdrop-blur-sm shadow-sm">
            <Zap className="w-3.5 h-3.5 text-lime-400 fill-lime-400" />
            <span>AI-Powered - Built for Agencies</span>
          </div>

          {/* Heading */}
          <h1 className="text-4xl sm:text-5xl lg:text-[3.5rem] font-bold leading-[1.1] text-white mb-6 tracking-tight">
            The{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-400 to-yellow-400">
              AI-powered
            </span>
            <br />
            business operating
            <br />
            system
            <br />
            <span className="text-[#65DB43]">for Creative Studios.</span>
          </h1>

          {/* Paragraph */}
          <p className="text-teal-50/70 text-base sm:text-lg max-w-[90%] mb-10 leading-relaxed font-light">
            One platform to run pipelines, automate follow-up, and prove ROI - powered by AI, built for any agency.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center gap-4 mb-8">
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-6 py-3.5 rounded-full bg-gradient-to-b from-[#8DE741] to-[#69C22B] text-emerald-950 font-bold text-sm hover:scale-105 hover:shadow-[0_0_25px_rgba(101,219,67,0.3)] transition-all duration-300">
              Start 14 Day Free Trial
              <div className="bg-emerald-950 rounded-full p-1 shadow-inner">
                <ArrowRight className="w-3.5 h-3.5 text-[#8DE741]" />
              </div>
            </button>
            <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-full bg-white/5 border border-teal-600/40 text-white font-medium text-sm hover:bg-white/10 hover:border-teal-500/60 backdrop-blur-sm transition-all duration-300">
              See the platform &rarr;
            </button>
          </div>

          {/* Trust Checklist */}
          <div className="flex items-center gap-2 text-teal-100/50 text-xs sm:text-sm font-medium">
            <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            <span className="tracking-wide">No credit card &middot; 4-5 day setup &middot; Any niche</span>
          </div>
        </div>

        {/* Right Column: Dashboard Mockup */}
        <div className="relative w-full max-w-2xl mx-auto flex flex-col items-center">
          {/* Intense Glow Behind Mockup */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-[#65DB43]/20 blur-[100px] rounded-full pointer-events-none z-0"></div>
          
          {/* Mockup Window */}
          <div className="relative z-10 w-full bg-[#1F262B] rounded-xl border border-white/10 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden aspect-[4/3] flex flex-col backdrop-blur-md">
            
            {/* Window Top Bar */}
            <div className="flex items-center px-4 py-3 bg-[#171D21] border-b border-white/5 gap-2">
              <div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]"></div>
              <div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]"></div>
              <div className="ml-auto flex items-center justify-center w-48 h-6 bg-[#1F262B] rounded-md border border-white/5">
                 <div className="w-24 h-1.5 bg-white/10 rounded-full"></div>
              </div>
            </div>
            
            {/* Window Body */}
            <div className="flex flex-1 p-3 gap-3 overflow-hidden">
              {/* Thin Sidebar */}
              <div className="w-14 rounded-lg bg-[#171D21] border border-white/5 flex flex-col items-center py-4 gap-4">
                <div className="w-8 h-8 bg-gradient-to-br from-lime-400 to-emerald-600 rounded-md mb-2 shadow-lg"></div>
                {[...Array(6)].map((_, i) => (
                  <div key={i} className="w-6 h-6 rounded bg-white/5 hover:bg-white/10 transition-colors cursor-pointer"></div>
                ))}
              </div>

              {/* Main Content Area */}
              <div className="flex-1 flex flex-col gap-3">
                {/* Header Widget */}
                <div className="h-14 rounded-lg bg-[#171D21] border border-white/5 flex items-center px-4 justify-between">
                  <div className="w-32 h-3 bg-white/20 rounded-full"></div>
                  <div className="w-10 h-6 rounded-full bg-[#65DB43]/20 border border-[#65DB43]/30"></div>
                </div>

                {/* Dashboard Grid */}
                <div className="flex-1 grid grid-cols-3 gap-3">
                  
                  {/* Left Big Column */}
                  <div className="col-span-2 flex flex-col gap-3">
                    {/* Graph Widget */}
                    <div className="h-32 rounded-lg bg-[#171D21] border border-white/5 p-4 flex flex-col">
                      <div className="w-24 h-2.5 bg-white/20 rounded-full mb-4"></div>
                      <div className="flex-1 w-full bg-gradient-to-t from-[#65DB43]/10 to-transparent rounded-sm border-b border-[#65DB43]/30 relative">
                        <svg className="absolute inset-0 h-full w-full" preserveAspectRatio="none" viewBox="0 0 100 100">
                           <path d="M0,100 L0,80 Q25,50 50,70 T100,30 L100,100 Z" fill="rgba(101,219,67,0.1)" />
                           <path d="M0,80 Q25,50 50,70 T100,30" fill="none" stroke="#65DB43" strokeWidth="2" />
                        </svg>
                      </div>
                    </div>
                    {/* Circle Chart Widget */}
                    <div className="flex-1 rounded-lg bg-[#171D21] border border-white/5 flex items-center justify-center p-4">
                       <div className="relative w-24 h-24 rounded-full border-[6px] border-white/5 border-t-[#65DB43] border-r-[#65DB43] rotate-45 shadow-[0_0_15px_rgba(101,219,67,0.2)]">
                         <div className="absolute inset-0 m-auto w-12 h-12 rounded-full border-[6px] border-white/5 border-l-[#FFBD2E] -rotate-45"></div>
                       </div>
                    </div>
                  </div>

                  {/* Right Thin Column */}
                  <div className="col-span-1 rounded-lg bg-[#171D21] border border-white/5 p-4 flex flex-col gap-4">
                    <div className="w-20 h-2.5 bg-white/20 rounded-full mb-2"></div>
                    {[...Array(4)].map((_, i) => (
                      <div key={i} className="w-full flex items-center gap-2">
                        <div className="w-8 h-8 rounded bg-white/5 shrink-0"></div>
                        <div className="flex-1 flex flex-col gap-1.5">
                           <div className="w-full h-2 bg-white/10 rounded-full"></div>
                           <div className="w-2/3 h-1.5 bg-white/5 rounded-full"></div>
                        </div>
                      </div>
                    ))}
                  </div>

                </div>
              </div>
            </div>
          </div>

          {/* Variant Label */}
          <div className="mt-6 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-teal-100/50 text-xs font-medium tracking-wider backdrop-blur-sm z-10">
            Variant 1: Dark
          </div>
        </div>

      </div>
    </section>
  );
}