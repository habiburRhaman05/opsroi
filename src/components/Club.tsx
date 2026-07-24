"use client"
import { ClubGrid } from "./ClubGrid";
import { SectionLabel } from "./ui/SectionLabel";

const OPEN_SEATS: any[] = [
  { name: "TreeROI", trade: "Tree care", founder: "Chris Ruvalcaba", url: "https://treeroi.com" },
  { name: "RoofersROI", trade: "Roofing", url: "https://roofersroi.com" },
  { name: "ElectricalROI", trade: "Electrical", url: "https://electricalroi.com" },
  { name: "WashROI", trade: "Pressure washing", url: "https://washroi.com" },
  { name: "ContractorsROI", trade: "General trades", url: "https://contractorsroi.com" },
  { name: "PaintersROI", trade: "Painting", url: "https://paintersroi.com" },
  { name: "LandscapersROI", trade: "Landscaping", url: "https://landscapersroi.com" },
  { name: "RebuildROI", trade: "Restoration", url: "https://rebuildroi.com" },
];

export function Club() {
  return (
    <section className="pt-12 sm:pt-16 pb-12 sm:pb-16 bg-mist relative overflow-hidden">
      <div 
        className="absolute top-0 right-0 pointer-events-none w-[250px] md:w-[350px] z-0" 
        style={{ transform: 'translate(25%, -25%)', opacity: 0.06, filter: 'invert(1)' }}
      >
        <img src="/watermark.svg" alt="" className="w-full h-auto" aria-hidden="true" />
      </div>
      <div className="max-w-7xl mx-auto px-5 sm:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
          <div className="inline-flex items-center justify-center gap-3 mb-6">
           
             <SectionLabel className="justify-center">
The Club</SectionLabel>
           
          </div>
          
          <h2 className="font-bebas text-navy text-4xl sm:text-2xl md:text-4xl uppercase tracking-tight mb-6 leading-none">
            One founder per industry. The next slot has your trade on it.
          </h2>
          
          <p className="text-lg text-ink leading-relaxed">
            <span className="font-bold text-navy">1 industry live.</span>{" "}
            7 future builds currently in development. The moment a founder claims a seat, it&apos;s
            off the board for good - no second seat, ever.
          </p>
        </div>

        <ClubGrid openSeats={OPEN_SEATS} />
      </div>
    </section>
  );
}
