"use client"
import { ClubGrid } from "./ClubGrid";
import { SectionLabel } from "../../ui/SectionLabel";

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
     
      <div className="container px-5 sm:px-8 relative z-10">
        <div className="text-center mb-16 max-w-3xl mx-auto">
        
           
             <SectionLabel className="justify-center">
The OpsROI Network</SectionLabel>
           
     
          
          <h2 className="font-bebas text-navy     mb-6 leading-none">
            One engine. A family of <br></br>trade-built CRMs.
          </h2>
          
          <p className="text-lg text-ink leading-relaxed">
            OpsROI is the engine underneath a growing network of niche, trade-specific CRMs, each one a purpose-built version of the platform for a single industry, built and owned by an operator who actually works in that trade. <span className="font-bold text-navy">TreeROI</span> is live today. The rest of the board is open.
          </p>
        </div>

        <ClubGrid openSeats={OPEN_SEATS} />
      </div>
    </section>
  );
}
