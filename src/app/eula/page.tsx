import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "EULA & Third-Party Integrations - OpsROI",
  description:
    "End User License Agreement and terms governing third-party integrations (QuickBooks, Zapier, Make, Airtable, ClickUp) available within the OpsROI platform.",
};

export default function EulaPage() {
  return (
    <>
      <main className="pt-24 md:pt-32 pb-16 md:pb-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low min-h-screen">
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] border border-outline-variant/40 shadow-ambient-shadow overflow-hidden">
          <div className="bg-surface-container-lowest px-8 py-8 md:px-14 md:py-10 text-center border-b border-outline-variant/40">
            <div className="text-label-caps font-label-caps uppercase text-green font-bold mb-4 tracking-widest">
              Legal
            </div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-primary text-4xl md:text-5xl">
              Third-Party Integrations & EULA
            </h1>
            <p className="text-sm text-primary/80 mt-4">
              Effective Date: July 30, 2026 &middot; Last Updated: July 30, 2026
            </p>
          </div>
          <div className="p-8 md:p-14">
            <p className="text-sm text-primary/80 mb-4">
              This page governs your use of any third-party integration made
              available within the OpsROI platform (the &quot;Services&quot;),
              including but not limited to <strong>QuickBooks</strong>,{" "}
              <strong>Zapier</strong>, <strong>Make</strong>,{" "}
              <strong>Airtable</strong>, and <strong>ClickUp</strong> (each, an
              &quot;Integration,&quot; collectively &quot;Integrations&quot;).
              It supplements, and is incorporated into, the OpsROI{" "}
              <a
                href="/terms-and-conditions"
                className="text-primary font-bold underline hover:text-opsroi-green transition-colors"
              >
                Terms of Service
              </a>{" "}
              and{" "}
              <a
                href="/privacy-policy"
                className="text-primary font-bold underline hover:text-opsroi-green transition-colors"
              >
                Privacy Policy
              </a>
              . Capitalized terms not defined here have the meaning given in
              the Terms of Service.
            </p>
            <p className="text-sm text-primary/80 mb-8">
              By connecting an Integration to your OpsROI account, you agree to
              this page in addition to the Terms of Service.
            </p>

            <h2 className="text-xl font-bold text-primary mt-0 mb-3">
              1. General Terms (All Integrations)
            </h2>

            <p className="text-sm text-primary/90 leading-relaxed mb-4">
              <strong>1.1. Your Choice.</strong> Integrations are optional. You
              choose whether to connect any Integration to your OpsROI account,
              and you may disconnect at any time from your account settings.
            </p>

            <p className="text-sm text-primary/90 leading-relaxed mb-4">
              <strong>1.2. Third-Party Responsibility.</strong> Each
              Integration is owned and operated by its respective third-party
              provider (e.g., Intuit for QuickBooks, Zapier Inc. for Zapier).
              OpsROI does not control, and is not responsible for, the
              availability, security, accuracy, or practices of any third-party
              provider. Your use of an Integration is also governed by that
              provider&apos;s own terms of service and privacy policy, which you
              are responsible for reviewing and which apply independently of
              this page.
            </p>

            <p className="text-sm text-primary/90 leading-relaxed mb-4">
              <strong>1.3. Authorization.</strong> You represent that you have
              the authority to connect any third-party account (e.g., your
              QuickBooks, Airtable, or ClickUp account) to OpsROI, and that
              doing so does not violate that provider&apos;s own terms.
            </p>

            <p className="text-sm text-primary/90 leading-relaxed mb-4">
              <strong>1.4. Data Flow.</strong> Connecting an Integration
              authorizes OpsROI to exchange data between your OpsROI account
              and the connected third-party service, solely to provide the
              features of that Integration. OpsROI does not sell data obtained
              through an Integration and does not use it for third-party
              advertising.
            </p>

            <p className="text-sm text-primary/90 leading-relaxed mb-4">
              <strong>1.5. No Third-Party IP Grant.</strong> Trademarks, logos,
              and product names of third-party providers belong to those
              providers. Nothing in this page or the Terms of Service grants
              you any rights in a third-party provider&apos;s intellectual
              property, and no Integration implies that provider&apos;s
              endorsement of OpsROI.
            </p>

            <p className="text-sm text-primary/90 leading-relaxed mb-4">
              <strong>1.6. Availability.</strong> OpsROI is not responsible for
              outages, rate limits, API changes, deprecations, or
              discontinuation of an Integration by its third-party provider, or
              for any resulting loss of functionality or data.
            </p>

            <p className="text-sm text-primary/90 leading-relaxed mb-4">
              <strong>1.7. Disclaimer.</strong> Data, calculations, or reports
              produced through an Integration (including financial summaries)
              are provided for informational purposes to support your use of
              the Services. They are not a substitute for professional
              accounting, tax, or legal advice, and you are responsible for
              independently verifying their accuracy.
            </p>

            <p className="text-sm text-primary/90 leading-relaxed mb-8">
              <strong>1.8. Limitation of Liability & Disclaimers.</strong> The
              disclaimers, limitation of liability, and indemnification
              provisions of the OpsROI Terms of Service apply in full to your
              use of any Integration.
            </p>

            <h2 className="text-xl font-bold text-primary mt-0 mb-3">
              2. QuickBooks Integration
            </h2>
            <p className="text-sm text-primary/80 mb-4">
              In addition to Section 1 above, the following applies
              specifically to the QuickBooks integration.
            </p>

            <p className="text-sm text-primary/90 leading-relaxed mb-4">
              <strong>2.1. Not Affiliated with Intuit.</strong> OpsROI is an
              independent third party. The QuickBooks integration is not
              developed, endorsed, or supported by Intuit Inc. Any issue with
              the integration should be directed to OpsROI at{" "}
              <a
                href="mailto:support@opsroi.com"
                className="text-primary font-bold underline hover:text-opsroi-green transition-colors"
              >
                support@opsroi.com
              </a>
              , not Intuit.
            </p>

            <p className="text-sm text-primary/90 leading-relaxed mb-4">
              <strong>2.2. Authorization via OAuth.</strong> The QuickBooks
              integration connects to your QuickBooks Online account using
              Intuit&apos;s OAuth 2.0 protocol. OpsROI accesses your QuickBooks
              data only after you expressly authorize the connection, and does
              not request, store, or have access to your QuickBooks account
              password.
            </p>

            <p className="text-sm text-primary/90 leading-relaxed mb-4">
              <strong>2.3. Data Accessed.</strong> Once connected, OpsROI may
              access and display QuickBooks data such as accounts,
              transactions, invoices, customers, and reports (including
              profit-and-loss and other financial summaries) within the OpsROI
              platform, solely to provide these features to you.
            </p>

            <p className="text-sm text-primary/90 leading-relaxed mb-4">
              <strong>2.4. Revocation.</strong> You may disconnect the
              QuickBooks integration at any time from your OpsROI account
              settings or from your QuickBooks account. Disconnecting will stop
              future data syncing and may disable related features.
            </p>

            <p className="text-sm text-primary/90 leading-relaxed mb-8">
              <strong>2.5. Compliance.</strong> Your use of the QuickBooks
              integration must comply with Intuit&apos;s applicable developer
              and API terms in addition to this page and the OpsROI Terms of
              Service.
            </p>

            <h2 className="text-xl font-bold text-primary mt-0 mb-3">
              Adding Future Integrations
            </h2>
            <p className="text-sm text-primary/90 leading-relaxed mb-8">
              This page is designed to cover additional Integrations as they
              become available (e.g., Zapier, Make, Airtable, ClickUp) under
              the General Terms in Section 1. A dedicated subsection will be
              added under Section 2 onward only where a specific
              Integration&apos;s provider requires additional disclosures (as
              QuickBooks does above).
            </p>

            <h2 className="text-xl font-bold text-primary mt-0 mb-3">
              Contact
            </h2>
            <p className="text-sm text-primary/90 leading-relaxed mb-4">
              Questions about this page or an Integration:
            </p>
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
