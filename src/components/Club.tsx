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
    <section className="py-24 sm:py-32 bg-mist relative">
      <div className="max-w-7xl mx-auto px-5 sm:px-8">
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
            7 seats still open. The moment a founder claims one, it&apos;s
            off the board for good - no second seat, ever.
          </p>
        </div>

        <ClubGrid openSeats={OPEN_SEATS} />
      </div>
    </section>
  );
}
