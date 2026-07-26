import { ScrollReveal } from "../../shared/ScrollReveal";

export function WhoIsItForHero() {
  return (
    <header className="relative overflow-hidden bg-gradient-to-br from-[#163C49] via-[#1D4E5F] to-[#12313C] pt-28 pb-16 sm:pt-36 sm:pb-24 lg:pt-[210px] lg:pb-36 text-white selection:bg-[#7DC243] selection:text-[#163C49]">
      {/* Watermark SVG */}
      <div 
        className="absolute top-0 right-0 pointer-events-none w-[150px] md:w-[250px] lg:w-[350px] z-0" 
        style={{ transform: 'translate(20%, -20%)', opacity: 0.05 }}
      >
        <img src="/watermark.svg" alt="" className="w-full h-auto" aria-hidden="true" />
      </div>

      {/* Glowing Background Radial Accents */}
      <div className="pointer-events-none absolute -top-40 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-gradient-to-b from-[#7DC243]/20 via-[#ECB84D]/10 to-transparent blur-[130px] rounded-full" />
      <div className="pointer-events-none absolute top-1/3 -right-40 w-96 h-96 bg-[#7DC243]/15 blur-[140px] rounded-full" />
      <div className="pointer-events-none absolute bottom-10 -left-40 w-96 h-96 bg-[#ECB84D]/15 blur-[140px] rounded-full" />

      {/* Subtle Grid Overlay */}
      <div 
        className="pointer-events-none absolute inset-0 opacity-[0.06] bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:24px_24px]"
      />

      <div className="relative max-w-4xl mx-auto px-5 sm:px-8 text-center z-10">
        <div className="eyebrow fade-in-up">Who Is It For</div>
        <h1 className="fade-in-up text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-[1.12] sm:leading-[1.2]" style={{ animationDelay: '0.1s' }}>
          Own the platform, <span className="text-[#7DC243] drop-shadow-sm">or have us build it for you.</span> Either way, there&apos;s a fit here.
        </h1>
        <p className="fade-in-up text-lg sm:text-xl text-slate-200 mt-6 max-w-2xl mx-auto leading-relaxed font-normal" style={{ animationDelay: '0.2s' }}>
          OpsROI works with contractor businesses two different ways. Find the one that matches where you are.
        </p>
      </div>
    </header>
  );
}
