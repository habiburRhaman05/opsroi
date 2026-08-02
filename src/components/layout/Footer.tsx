import Image from "next/image";
import Link from "next/link";
import { Mail, Phone, MapPin } from "lucide-react";

const platformLinks = [
  { label: "Explore Features", href: "/features" },
  { label: "Why OpsROI", href: "/why-opsroi" },
  { label: "Who It's For", href: "/who-its-for" },
  { label: "Book a Demo", href: "/book-a-demo" },
  { label: "Integrations", href: "/#integrations" },
];

const companyLinks = [
  { label: "Our Story", href: "/our-story" },
  { label: "FAQ", href: "/#faq" },
  { label: "Contact Us", href: "/contact" },
];

const legalLinks = [
  { label: "Privacy Policy", href: "/privacy-policy" },
  { label: "Terms & Conditions", href: "/terms-and-conditions" },
  { label: "Cookie Policy", href: "/cookie-policy" },
  { label: "Refund Policy", href: "/refund-policy" },
  { label: "EULA", href: "/eula" },
];

const socialLinks = [
  {
    label: "Facebook",
    href: "https://www.facebook.com/opsroi",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z" />
      </svg>
    ),
  },
  {
    label: "Instagram",
    href: "https://www.instagram.com/opsroi/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838a6.162 6.162 0 1 0 0 12.324 6.162 6.162 0 0 0 0-12.324zM12 16a4 4 0 1 1 0-8 4 4 0 0 1 0 8zm6.406-11.845a1.44 1.44 0 1 0 0 2.881 1.44 1.44 0 0 0 0-2.881z" />
      </svg>
    ),
  },
  {
    label: "YouTube",
    href: "https://www.youtube.com/@opsroi",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
      </svg>
    ),
  },
  {
    label: "X",
    href: "https://x.com/opsroi",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/company/opsroi/",
    icon: (
      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
        <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
      </svg>
    ),
  },
];

function ColumnHeading({ children }: { children: React.ReactNode }) {
  return (
    <div className="mb-6 flex items-center gap-2.5">
      <span className="h-px w-6 bg-green" />
      <h4 className="text-[11px] font-bold uppercase tracking-[0.18em] text-white font-display">
        {children}
      </h4>
    </div>
  );
}

function FooterLink({ href, label }: { href: string; label: string }) {
  return (
    <li>
      <Link
        href={href}
        className="group inline-flex items-center gap-2 text-[14px] text-white/65 hover:text-white transition-all"
      >
        <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">
          {label}
        </span>
      </Link>
    </li>
  );
}

export default function Footer() {
  return (
    <footer className="relative overflow-hidden bg-navy-deep text-white pt-16 sm:pt-20 pb-8">
      {/* Ambient glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/3 h-96 w-96 rounded-full bg-green/12 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute -bottom-24 -right-24 h-72 w-72 rounded-full bg-gold/8 blur-3xl"
      />
      {/* Top accent bar */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-0.5 bg-linear-to-r from-transparent via-green/60 to-transparent"
      />

      <div className="relative max-w-7xl mx-auto px-5 sm:px-8">
        {/* Main columns */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-8 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-2">
            <div className="mb-5">
              <Image
                src="/OpsROI-footer.webp"
                alt="OpsROI"
                width={140}
                height={40}
                className="h-auto w-35"
              />
            </div>
            <p className="text-[14px] text-white/70 leading-relaxed max-w-sm mb-6">
              The CRM and client ops platform designed specifically to turn your agency&apos;s client work into a clear, visible return.
            </p>

            {/* Contact chips */}
            <div className="flex flex-col gap-2.5 mb-6">
              <a
                href="mailto:support@opsroi.com"
                className="group inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[13px] text-white/80 hover:bg-white/8 hover:border-green/30 transition-colors"
              >
                <Mail className="h-3.5 w-3.5 text-green" strokeWidth={2.2} />
                <span className="font-semibold group-hover:text-white">
                  support@opsroi.com
                </span>
              </a>
              <a
                href="tel:+19714490660"
                className="group inline-flex w-fit items-center gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[13px] text-white/80 hover:bg-white/8 hover:border-green/30 transition-colors"
              >
                <Phone className="h-3.5 w-3.5 text-green" strokeWidth={2.2} />
                <span className="font-semibold group-hover:text-white">
                  +1 (971) 449-0660
                </span>
              </a>
              <div className="inline-flex w-fit items-start gap-2.5 rounded-full border border-white/10 bg-white/5 px-3.5 py-2 text-[13px] text-white/80">
                <MapPin className="h-3.5 w-3.5 text-green mt-0.5" strokeWidth={2.2} />
                <span className="font-semibold">
                  Lake Oswego, OR
                </span>
              </div>
            </div>

            {/* Social chips */}
            <div className="flex flex-wrap gap-2">
              {socialLinks.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={s.label}
                  className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-white/70 hover:bg-green/15 hover:border-green/40 hover:text-green hover:-translate-y-0.5 transition-all"
                >
                  {s.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Platform links */}
          <div>
            <ColumnHeading>Platform</ColumnHeading>
            <ul className="space-y-3">
              {platformLinks.map((l) => (
                <FooterLink key={l.href} href={l.href} label={l.label} />
              ))}
            </ul>
          </div>

          {/* Company links */}
          <div>
            <ColumnHeading>Company</ColumnHeading>
            <ul className="space-y-3">
              {companyLinks.map((l) => (
                <FooterLink key={l.href} href={l.href} label={l.label} />
              ))}
            </ul>
          </div>

          {/* Legal links */}
          <div>
            <ColumnHeading>Legal</ColumnHeading>
            <ul className="space-y-3">
              {legalLinks.map((l) => (
                <FooterLink key={l.href} href={l.href} label={l.label} />
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="text-[13px] text-white/50 font-semibold">
            &copy; 2026 OpsROI. All rights reserved.
          </div>
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5">
            <span className="relative flex h-2 w-2">
              <span className="absolute inset-0 rounded-full bg-green animate-ping opacity-75" />
              <span className="relative rounded-full bg-green h-2 w-2" />
            </span>
            <span className="text-[11px] font-bold uppercase tracking-[0.14em] text-white/75 font-display">
              Built by business owners, for business owners
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}
