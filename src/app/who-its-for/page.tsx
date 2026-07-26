import { AssetModel } from "@/src/components/pages/who-is-it-for/AssetModel";
import { OwnershipTrack } from "@/src/components/pages/who-is-it-for/OwnershipTrack";
import { ServicesTrack } from "@/src/components/pages/who-is-it-for/ServicesTrack";
import { StillNotSure } from "@/src/components/pages/who-is-it-for/StillNotSure";
import { WhoIsItForHero } from "@/src/components/pages/who-is-it-for/WhoIsItForHero";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Who It's For - OpsROI",
  description:
    "Two ways to work with OpsROI: own your industry's platform as a founder, or have OpsROI build your AI receptionist, website, SEO, and ads directly.",
};

export default function WhoIsItForPage() {
  return (
    <main>
      <WhoIsItForHero />
      <OwnershipTrack />
      <ServicesTrack />
    
    </main>
  );
}