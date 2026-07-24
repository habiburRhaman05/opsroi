"use client"
import { ClubGrid } from "./ClubGrid";
import { ScrollReveal } from "./ScrollReveal";
import { SectionLabel } from "./ui/SectionLabel";




const OPEN_SEATS: any[] = [
  { name: "TreeROI",
  trade: "Tree care",
  founder: "Chris Ruvalcaba",
  url: "https://treeroi.com",},
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
    <section className="py-16 md:py-24 lg:py-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low">
  
      <div className="max-w-container-max mx-auto">
        <div className="text-center mb-12 md:mb-16">
          <ScrollReveal>
          <SectionLabel>

             The Club
          </SectionLabel>
            
          </ScrollReveal>
          <ScrollReveal delay={100}>
            <h2 className="font-headline-xl text-primary max-w-2xl mx-auto text-3xl sm:text-4xl md:text-5xl mb-6">
              One founder per industry. The next slot has your trade on it.
            </h2>
          </ScrollReveal>
          <ScrollReveal delay={200}>
            <p className="font-body-lg text-on-surface-variant">
              <span className="font-bold text-primary">1 industry live.</span>{" "}
              7 seats still open. The moment a founder claims one, it&apos;s
              off the board for good - no second seat, ever.
            </p>
          </ScrollReveal>
        </div>

        <ClubGrid
        
          openSeats={OPEN_SEATS}
        />
      </div>
    </section>
  );
}
