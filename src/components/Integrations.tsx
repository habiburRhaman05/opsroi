import Image from 'next/image';
import Link from 'next/link';

const integrationIcons = [
  {
    name: "Facebook",
    slug: "facebook",
    icon: "/intregation-icons/facebook-com-logo.png",
    url: "https://www.facebook.com",
  },
  {
    name: "Slack",
    slug: "slack",
    icon: "/intregation-icons/slack-com-logo.png",
    url: "https://slack.com",
  },
  {
    name: "Stripe",
    slug: "stripe",
    icon: "/intregation-icons/stripe-com-logo.png",
    url: "https://stripe.com",
  },
  {
    name: "Zapier",
    slug: "zapier",
    icon: "/intregation-icons/zapier-com-logo.png",
    url: "https://zapier.com",
  },
  {
    name: "Make",
    slug: "make",
    icon: "/intregation-icons/make-com-logo.png",
    url: "https://www.make.com",
  },
  {
    name: "Shopify",
    slug: "shopify",
    icon: "/intregation-icons/shopify-com-logo.png",
    url: "https://www.shopify.com",
  },
];

export default function Integrations() {
  return (
    <section className="integrations-bar">
      <div className="container">
        <div className="integrations-title">Integrates With Your Favorite Tools</div>
      </div>

      <div className="marquee-wrap mx-auto max-w-4xl overflow-hidden" data-lenis-prevent>
        <div className="marquee-track">
          {/* Rendered twice back-to-back so the -50% keyframe loop is seamless. */}
          {[...integrationIcons, ...integrationIcons].map((item, i) => (
            <Link
              key={`${item.slug}-${i}`}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`Visit ${item.name}`}
              className="group flex w-28 shrink-0 flex-col items-center gap-3 rounded-2xl border border-line bg-white px-4 py-5 shadow-sm transition-all duration-300 ease-out  hover:border-green hover:shadow-xl hover:shadow-green/15 focus-visible:-translate-y-1.5 focus-visible:border-green focus-visible:shadow-xl focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-green/40"
            >
              <span className="flex h-12 w-12 items-center justify-center rounded-xl bg-mist transition-transform duration-300 ease-out group-hover:scale-110 group-hover:-rotate-3">
                <Image
                  src={item.icon}
                  alt={item.name}
                  width={40}
                  height={40}
                  className="h-8 w-8 object-contain"
                />
              </span>
              <span className="text-xs font-semibold text-ink-soft transition-colors duration-300 group-hover:text-navy">
                {item.name}
              </span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
