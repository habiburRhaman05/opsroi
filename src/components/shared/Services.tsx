import Link from "next/link";
import { FEATURES } from "@/src/lib/features";

// Home landing preview: the first 6 features (HR & Payroll + AI Invoicing lead),
// sourced from the same content-package-aligned data as the /features page.
const HOME_FEATURES = FEATURES.slice(0, 6);

export default function Services() {
  return (
    <section id="services">
      <div className="container px-4 sm:px-6 lg:px-8">
        <div className="section-head center mx-auto mb-10 md:mb-[52px]">
          <div className="eyebrow" style={{ justifyContent: "center" }}>Platform</div>
          <h2>Your all-in-one solution for <br/> business growth</h2>
          <p>From first setup to day-to-day running, OpsROI covers the full operational stack behind your client work.</p>
        </div>

        <div
          className="grid-3 !grid !grid-cols-1 md:!grid-cols-2 lg:!grid-cols-3 !gap-6 lg:!gap-[26px]"
          id="platformGrid"
          data-stagger
        >
          {HOME_FEATURES.map((feature) => {
            const Icon = feature.icon;
            return (
              <div
                key={feature.id}
                className="platform-card !p-6 lg:!p-[34px_28px] h-full flex flex-col justify-start"
              >
                <div className="icon-mark">
                  <Icon width={22} height={22} strokeWidth={1.8} />
                </div>
                <h3>{feature.title}</h3>
                <p>{feature.tagline}</p>
              </div>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center md:mt-12">
          <Link href="/features" className="btn btn-primary">
            View More Features
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              style={{ marginLeft: 8 }}
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
}
