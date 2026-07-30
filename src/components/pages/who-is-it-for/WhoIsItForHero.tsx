import { PageHero } from "../../shared/PageHero";

export function WhoIsItForHero() {
  return (
    <PageHero
      eyebrow="Who Is It For"
      title={
        <>
          Own The Platform,{" "}
          <span className="text-green">Or Have Us Build It For You.</span>{" "}
          Either Way, There&apos;s A Fit Here.
        </>
      }
      description="OpsROI works with contractor businesses two different ways. Find the one that matches where you are."
      primaryCta={{ label: "Check If You're A Fit", href: "/book" }}
      secondaryCta={{ label: "See Pricing", href: "/pricing" }}
    />
  );
}
