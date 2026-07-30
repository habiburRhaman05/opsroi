import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Cookie Policy - OpsROI",
  description:
    "How OpsROI uses cookies and similar tracking technologies.",
};

export default function CookiePolicyPage() {
  return (
    <>
      <main className="pt-24 md:pt-32 pb-16 md:pb-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low min-h-screen">
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] border border-outline-variant/40 shadow-ambient-shadow overflow-hidden">
          <div className="bg-surface-container-lowest px-8 py-8 md:px-14 md:py-10 text-center border-b border-outline-variant/40">
            <div className="text-label-caps font-label-caps uppercase text-green font-bold mb-4 tracking-widest">
              Legal
            </div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-primary text-4xl md:text-5xl">
              Cookie Policy
            </h1>
            <p className="text-sm text-primary/80 mt-4">
              Effective Date: July 14, 2025 &middot; Last Updated: July 14, 2025
            </p>
          </div>
          <div className="p-8 md:p-14">
          <p className="text-sm text-primary/80 mb-8">
            This Cookie Policy explains how OpsROI, operating OpsROI (&quot;OpsROI,&quot; &quot;we,&quot; &quot;us&quot;), uses cookies and similar tracking technologies on our website and Services (www.opsroi.com and related domains).
          </p>

          <h2 className="text-xl font-bold text-primary mt-0 mb-3">
            1. What Are Cookies?
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            Cookies are small text files placed on your device when you visit a website. They help the site recognize your browser on return visits and can store preferences or other information.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-primary/90 leading-relaxed mb-4">
            <li><strong>First-party cookies</strong> are set by OpsROI directly.</li>
            <li><strong>Third-party cookies</strong> are set by other companies whose features appear on our site (e.g., analytics or embedded tools), and they can recognize your device across other websites too.</li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            2. Why We Use Cookies
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We use cookies to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-primary/90 leading-relaxed mb-4">
            <li>Operate core website and login functionality</li>
            <li>Remember your preferences and settings</li>
            <li>Understand how visitors use our website and Services (analytics)</li>
            <li>Measure and improve our marketing performance</li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            3. Types of Cookies We Use
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-primary/90 leading-relaxed mb-4">
            <li><strong>Essential cookies</strong> : required for the website and Services to function (e.g., login sessions, security). These cannot be disabled without affecting core functionality.</li>
            <li><strong>Performance &amp; functionality cookies</strong> : enhance your experience but are not strictly necessary. Disabling these may limit some features.</li>
            <li><strong>Analytics cookies</strong> : help us understand usage patterns so we can improve the Services.</li>
            <li><strong>Advertising cookies</strong> : used by us or third parties to measure marketing campaign performance.</li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            4. Clear GIFs / Web Beacons / Tracking Pixels
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We use tracking pixels (small, invisible images) in HTML emails to determine whether an email was opened and to measure the effectiveness of our communications. This information is tied to the recipient&apos;s engagement with a specific message.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            5. How to Control Cookies
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            You can manage cookies through your browser settings. Most browsers let you block or delete cookies, though this may limit some website functionality. You can also opt out of interest-based advertising through:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-primary/90 leading-relaxed mb-4">
            <li>Digital Advertising Alliance : aboutads.info/choices</li>
            <li>Network Advertising Initiative : optout.networkadvertising.org</li>
            <li>EU/UK visitors : youronlinechoices.eu</li>
          </ul>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            Opting out of targeted advertising does not stop all advertising. You will still see ads, just not tailored ones. Essential cookies cannot be opted out of through these tools, as they are required for the Services to function; you may still block them via browser settings at the risk of reduced functionality.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            6. Third-Party Services
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            Our Services may integrate with third parties (e.g., Stripe for payments, hosting and analytics providers) that may set their own cookies subject to their own privacy and cookie policies. We do not control these third-party cookies.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            7. Changes to This Policy
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We may update this Cookie Policy periodically to reflect changes in the cookies we use or for legal/operational reasons. Material changes will be posted here with an updated &quot;Last Updated&quot; date.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            Contact Us
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            <strong>OpsROI</strong>
            <br />
            Email:{" "}
            <a
              href="mailto:support@opsroi.com"
              className="text-primary font-bold underline hover:text-opsroi-green transition-colors"
            >
              support@opsroi.com
            </a>
          </p>
          </div>
        </div>
      </main>
    </>
  );
}
