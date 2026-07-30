import Pricing from "@/src/components/shared/Pricing";
import { PageHero } from "@/src/components/shared/PageHero";

export default function PricingPage() {
  return (
    <main>
      <PageHero
        eyebrow="Pricing"
        title={
          <>
            Straightforward Pricing,
            <br className="hidden sm:block" />
            <span className="text-green">Whatever You Run.</span>
          </>
        }
        description="No niche upcharge, no per client tax on subaccounts. Pick the tier that matches your business size, agency or trade."
        primaryCta={{ label: "Get A Quote", href: "/book" }}
      />

      <Pricing hideHeader={true} />
    </main>
  );
}
