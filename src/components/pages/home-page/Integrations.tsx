import Image from "next/image";
import Link from "next/link";
import { SectionLabel } from "../../ui/SectionLabel";
import { ScrollReveal } from "../../shared/ScrollReveal";

type IntegrationIcon = {
  name: string;
  slug: string;
  icon: string;
  url: string;
};

const rowOne: IntegrationIcon[] = [
  { name: "Facebook", slug: "facebook", icon: "/intregation-icons/facebook-com-logo.png", url: "https://www.facebook.com" },
  { name: "Stripe", slug: "stripe", icon: "/intregation-icons/stripe-com-logo.png", url: "https://stripe.com" },
  { name: "Zapier", slug: "zapier", icon: "/intregation-icons/zapier-com-logo.png", url: "https://zapier.com" },
  { name: "Make", slug: "make", icon: "/intregation-icons/make-com-logo.png", url: "https://www.make.com" },
  { name: "Shopify", slug: "shopify", icon: "/intregation-icons/shopify-com-logo.png", url: "https://www.shopify.com" },
  { name: "Mailchimp", slug: "mailchimp", icon: "/crm-icons/mailchimp-com-logo.png", url: "https://mailchimp.com" },
  { name: "Klaviyo", slug: "klaviyo", icon: "/crm-icons/klaviyo-com-logo.png", url: "https://www.klaviyo.com" },
  { name: "ActiveCampaign", slug: "activecampaign", icon: "/crm-icons/activecampaign-com-logo.png", url: "https://www.activecampaign.com" },
];

const rowTwo: IntegrationIcon[] = [
  { name: "Slack", slug: "slack", icon: "/intregation-icons/slack-com-logo.png", url: "https://slack.com" },
  { name: "HubSpot", slug: "hubspot", icon: "/crm-icons/hubspot-com-logo.png", url: "https://www.hubspot.com" },
  { name: "Salesforce", slug: "salesforce", icon: "/crm-icons/saleforce-com-logo.png", url: "https://www.salesforce.com" },
  { name: "ClickUp", slug: "clickup", icon: "/crm-icons/clickup-com-logo.png", url: "https://clickup.com" },
  { name: "Monday", slug: "monday", icon: "/crm-icons/monday-com-logo.png", url: "https://monday.com" },
  { name: "Calendly", slug: "calendly", icon: "/crm-icons/calendly-com-logo.png", url: "https://calendly.com" },
  { name: "Typeform", slug: "typeform", icon: "/crm-icons/typeform-ie-logo.png", url: "https://www.typeform.com" },
  { name: "Zendesk", slug: "zendesk", icon: "/crm-icons/zendesk-com-logo.png", url: "https://www.zendesk.com" },
];

function IntegrationCard({ item }: { item: IntegrationIcon }) {
  return (
    <Link
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      aria-label={`Visit ${item.name}`}
      className="group card-smooth relative flex w-32 shrink-0 flex-col items-center gap-3 overflow-hidden rounded-2xl border border-line bg-white px-4 py-5 hover:-translate-y-1.5 hover:border-green/40 hover:shadow-[0_24px_45px_-22px_rgba(125,194,67,0.32)]"
    >
      <span
        aria-hidden
        className="pointer-events-none absolute -bottom-12 -right-12 h-32 w-32 rounded-full bg-green/12 blur-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
      />
      <span className="relative flex h-14 w-14 items-center justify-center rounded-xl bg-mist card-smooth-icon group-hover:bg-white group-hover:ring-1 group-hover:ring-green/30 group-hover:shadow-[0_0_16px_rgba(125,194,67,0.28)] animate-icon-bump">
        <Image
          src={item.icon}
          alt={item.name}
          width={44}
          height={44}
          className="h-9 w-9 object-contain"
        />
      </span>
      <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-navy/70 transition-colors duration-300 group-hover:text-navy font-display">
        {item.name}
      </span>
    </Link>
  );
}

export default function Integrations() {
  return (
    <section id="integrations" className="py-14 sm:py-20 px-5 sm:px-8 bg-white">
      <div className="container">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
          <ScrollReveal>
            <SectionLabel className="justify-center mb-4">Integrations</SectionLabel>
          </ScrollReveal>
          <ScrollReveal>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-navy tracking-tight leading-tight mb-4">
              Integrates With The Tools
              <br className="hidden sm:block" />
              You Already Use.
            </h2>
          </ScrollReveal>
          <ScrollReveal>
            <p className="text-base text-ink-soft leading-relaxed">
              OpsROI connects into the stack you already run. No forced
              migrations, no data silos, just seamless workflows.
            </p>
          </ScrollReveal>
        </div>
      </div>

      {/* Two-row scrolling marquee */}
      <div className="space-y-4">
        <div
          className="marquee-wrap mx-auto max-w-6xl overflow-hidden py-4"
          data-lenis-prevent
        >
          <div className="marquee-track">
            {[...rowOne, ...rowOne].map((item, i) => (
              <IntegrationCard key={`r1-${item.slug}-${i}`} item={item} />
            ))}
          </div>
        </div>

        <div
          className="marquee-wrap mx-auto max-w-6xl overflow-hidden py-4"
          data-lenis-prevent
        >
          <div className="marquee-track marquee-reverse">
            {[...rowTwo, ...rowTwo].map((item, i) => (
              <IntegrationCard key={`r2-${item.slug}-${i}`} item={item} />
            ))}
          </div>
        </div>
      </div>

      {/* Footer note */}
      <div className="container mt-10">
        <ScrollReveal>
          <p className="text-center text-[12px] font-semibold uppercase tracking-[0.16em] text-ink-soft/70 font-display">
            Plus 30+ more via Zapier and Make
          </p>
        </ScrollReveal>
      </div>
    </section>
  );
}
