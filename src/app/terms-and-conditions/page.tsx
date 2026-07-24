import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - OpsROI",
  description:
    "The binding agreement between OpsROI LLC and businesses using an OpsROI-operated platform, including TreeROI.",
};

export default function TermsPage() {
  return (
    <>
      <header className="pt-36 md:pt-44 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-3xl">
          <div className="text-label-caps font-label-caps uppercase text-secondary mb-4">
            Legal
          </div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-primary text-4xl md:text-6xl">
            Terms of Service
          </h1>
          <p className="text-sm text-on-surface-variant mt-4">
            Effective Date: July 18, 2026 · Last Updated: July 18, 2026
          </p>
        </div>
      </header>

      <section className="pb-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-3xl mx-auto bg-white rounded-[40px] border border-outline-variant/40 shadow-ambient-shadow p-8 md:p-14">
          <p className="text-sm text-on-surface-variant mb-4">
            These Terms of Service (&quot;Terms&quot;) are a binding agreement
            between you (&quot;Customer,&quot; &quot;you&quot;) and{" "}
            <strong>OpsROI LLC</strong>, an Oregon limited liability company
            operating a family of software platforms for contractor-owned
            businesses, including <strong>TreeROI</strong> (&quot;we,&quot;
            &quot;us,&quot; &quot;our&quot;). By creating an account, accessing,
            or using an OpsROI Platform (the &quot;Services&quot;), you agree to
            these Terms. If you are agreeing on behalf of a business, you
            represent you have authority to bind that business.
          </p>
          <p className="text-sm text-on-surface-variant mb-8">
            If you do not agree, do not use the Services.
          </p>

          <h2 className="text-xl font-bold text-primary mt-0 mb-3">
            1. Definitions
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-on-surface leading-relaxed mb-4">
            <li>
              <strong>&quot;Services&quot;</strong> — the OpsROI Platform
              you&apos;ve subscribed to (for example, TreeROI), including its web
              application, booking calendar, SMS/email messaging tools,
              automations, and related features.
            </li>
            <li>
              <strong>&quot;Customer Data&quot;</strong> — data you or your End
              Customers submit to the Services, including contact lists, job
              records, messages, and payment references.
            </li>
            <li>
              <strong>&quot;End Customer&quot;</strong> — a customer or lead of
              yours that you manage within the Services (e.g., a homeowner
              requesting service).
            </li>
            <li>
              <strong>&quot;Customer Content&quot;</strong> — text, images,
              templates, and other material you upload or create within the
              Services.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            2. Eligibility &amp; Account Registration
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            You must be at least 18 years old and able to form a binding contract
            to use the Services. You agree to provide accurate registration
            information and keep it current. You are responsible for all activity
            under your account and for safeguarding your login credentials. Notify
            us immediately at{" "}
            <a
              href="mailto:support@treeroi.com"
              className="text-secondary underline hover:text-secondary/80"
            >
              support@treeroi.com
            </a>{" "}
            of any unauthorized access.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            3. Subscription, Fees, Billing &amp; Cancellation
          </h2>
          <h3 className="text-base font-bold text-primary mt-6 mb-2">
            3.1 Subscription
          </h3>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            The Services are offered as a paid subscription, billed on the plan
            and interval selected at signup. Some early customers may receive
            complimentary or discounted access at our sole discretion; this does
            not create an ongoing entitlement to free service.
          </p>
          <h3 className="text-base font-bold text-primary mt-6 mb-2">
            3.2 Payment Processing
          </h3>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            Payments are processed by Stripe. By subscribing, you authorize us
            (via Stripe) to charge your payment method on a recurring basis. You
            are responsible for keeping payment information current.
          </p>
          <h3 className="text-base font-bold text-primary mt-6 mb-2">
            3.3 Price Changes
          </h3>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            We may change subscription pricing with at least 30 days&apos; notice
            before your next billing cycle. Continued use after that date
            constitutes acceptance.
          </p>
          <h3 className="text-base font-bold text-primary mt-6 mb-2">
            3.4 Cancellation
          </h3>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            You may cancel at any time; cancellation takes effect at the end of
            the current billing period. No partial-period refunds unless required
            by law. See our{" "}
            <a
              href="/refund-policy"
              className="text-secondary underline hover:text-secondary/80"
            >
              Refund Policy
            </a>
            .
          </p>
          <h3 className="text-base font-bold text-primary mt-6 mb-2">
            3.5 Non-Payment
          </h3>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            We may suspend or terminate access for failed or overdue payment after
            reasonable notice.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            4. Customer Data &amp; Data Processing
          </h2>
          <h3 className="text-base font-bold text-primary mt-6 mb-2">
            4.1 Roles
          </h3>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            As between you and us, you are the <strong>data controller</strong>{" "}
            and we are the <strong>data processor</strong> with respect to End
            Customer personal data you submit to the Services. You are responsible
            for having a lawful basis to collect and share that data with us.
          </p>
          <h3 className="text-base font-bold text-primary mt-6 mb-2">
            4.2 Processing Instructions
          </h3>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            We process Customer Data only to provide, maintain, and support the
            Services, and as otherwise instructed by you or required by law.
          </p>
          <h3 className="text-base font-bold text-primary mt-6 mb-2">
            4.3 Data Processing Addendum
          </h3>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            A Data Processing Addendum (&quot;DPA&quot;), available on request,
            is incorporated into these Terms by reference and governs the
            processing of personal data.
          </p>
          <h3 className="text-base font-bold text-primary mt-6 mb-2">
            4.4 Security
          </h3>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            We maintain reasonable administrative, technical, and physical
            safeguards designed to protect Customer Data, consistent with
            industry practice.
          </p>
          <h3 className="text-base font-bold text-primary mt-6 mb-2">
            4.5 Data Export &amp; Deletion
          </h3>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            Upon termination, you may export Customer Data for a limited period
            as described in our{" "}
            <a
              href="/refund-policy"
              className="text-secondary underline hover:text-secondary/80"
            >
              Refund Policy
            </a>
            . After that period, we may delete Customer Data from active systems,
            subject to standard backup retention cycles.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            5. SMS &amp; Email Communications
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            <strong>5.1 You Are the Sender of Record.</strong> When you use the
            Services to send SMS, MMS, or email to End Customers,{" "}
            <strong>you</strong> — not OpsROI LLC — are the sender of record and
            are solely responsible for:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-on-surface leading-relaxed mb-4">
            <li>
              Obtaining valid, documented consent (opt-in) from each recipient
              before messaging them;
            </li>
            <li>
              Honoring opt-out requests (e.g., &quot;STOP&quot;) immediately and
              permanently;
            </li>
            <li>
              Complying with the Telephone Consumer Protection Act (TCPA), CAN-SPAM
              Act, CTIA guidelines, and all applicable carrier and messaging
              regulations;
            </li>
            <li>
              The content of messages you send, including accuracy and lawfulness.
            </li>
          </ul>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            <strong>5.2 Prohibited Content.</strong> You may not use the Services
            to send content prohibited by carrier rules, including but not limited
            to: Sex, Hate, Alcohol, Firearms, Tobacco (&quot;SHAFT&quot;) content,
            illegal debt collection, deceptive financial offers, or unsolicited
            marketing to numbers without consent.
          </p>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            <strong>5.3 Our Right to Suspend.</strong> We may suspend or terminate
            messaging features, or your account, immediately and without liability,
            if we reasonably believe you have violated this Section, carrier
            policies, or applicable law. Suspension for compliance reasons does not
            entitle you to a refund of the suspended period.
          </p>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            <strong>5.4 No Liability for Customer Misuse.</strong> We are not
            responsible for messages sent using your account credentials or
            Customer Content, and you agree to indemnify us as described in
            Section 13.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            6. Acceptable Use Policy
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            You agree not to use the Services to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-on-surface leading-relaxed mb-4">
            <li>Violate any law or third party&apos;s rights;</li>
            <li>
              Send unsolicited, fraudulent, or deceptive communications;
            </li>
            <li>
              Upload malicious code or attempt to breach system security;
            </li>
            <li>
              Scrape, resell, or sublicense the Services without our written
              consent;
            </li>
            <li>
              Store sensitive data types (e.g., health records, government ID
              numbers, full payment card numbers) unless expressly permitted in
              writing.
            </li>
          </ul>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            We may investigate and take action, including suspension, for
            suspected violations.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            7. Customer Responsibilities &amp; Warranties
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            You represent and warrant that:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-on-surface leading-relaxed mb-4">
            <li>
              You have all rights necessary to submit Customer Content and
              Customer Data to the Services;
            </li>
            <li>
              Your use of the Services complies with applicable law, including
              consumer protection and messaging/telemarketing laws;
            </li>
            <li>
              You will maintain accurate consent records for messaging and provide
              them to us upon request.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            8. Intellectual Property
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            <strong>8.1 Our IP.</strong> The Services, their software, design,
            and underlying technology are owned by OpsROI LLC and protected by
            intellectual property laws. These Terms grant you a limited,
            non-exclusive, non-transferable license to use the Services during
            your subscription — no ownership rights are transferred.
          </p>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            <strong>8.2 Your Content.</strong> You retain ownership of Customer
            Content and Customer Data. You grant us a limited license to host,
            process, and display it solely to provide the Services.
          </p>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            <strong>8.3 Feedback.</strong> If you provide suggestions or feedback,
            we may use it without obligation to you.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            9. Third-Party Services
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            The Services integrate with third parties (e.g., Stripe for payments,
            SMS/email carriers, Google services). Your use of those integrations
            is subject to the applicable third party&apos;s terms. We are not
            responsible for third-party service failures or policy changes outside
            our control.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            10. Confidentiality
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            Each party agrees to protect the other&apos;s non-public business
            information disclosed in connection with the Services using reasonable
            care, and to use it only for purposes of this agreement.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            11. Disclaimers
          </h2>
          <p className="text-xs text-on-surface-variant bg-surface-container border border-outline-variant rounded-xl p-5 mb-4">
            THE SERVICES ARE PROVIDED &quot;AS IS&quot; AND &quot;AS
            AVAILABLE.&quot; TO THE MAXIMUM EXTENT PERMITTED BY LAW, WE DISCLAIM
            ALL WARRANTIES, EXPRESS OR IMPLIED, INCLUDING MERCHANTABILITY, FITNESS
            FOR A PARTICULAR PURPOSE, AND NON-INFRINGEMENT. WE DO NOT GUARANTEE
            UNINTERRUPTED OR ERROR-FREE OPERATION, OR ANY SPECIFIC BUSINESS
            RESULTS FROM USING THE SERVICES.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            12. Limitation of Liability
          </h2>
          <p className="text-xs text-on-surface-variant bg-surface-container border border-outline-variant rounded-xl p-5 mb-4">
            TO THE MAXIMUM EXTENT PERMITTED BY LAW, OPSROI LLC WILL NOT BE LIABLE
            FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, OR PUNITIVE
            DAMAGES, OR LOST PROFITS, ARISING FROM YOUR USE OF THE SERVICES. OUR
            TOTAL AGGREGATE LIABILITY WILL NOT EXCEED THE AMOUNT YOU PAID US IN
            THE 12 MONTHS PRECEDING THE CLAIM.
          </p>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            Some jurisdictions do not allow these limitations; in that case, they
            apply to the maximum extent permitted.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            13. Indemnification
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            You agree to indemnify, defend, and hold harmless OpsROI LLC and its
            members, employees, and agents from any claims, damages, or expenses
            (including reasonable attorneys&apos; fees) arising from: (a) your
            violation of these Terms; (b) your messaging or data practices,
            including TCPA or consent violations; (c) Customer Content; or (d) your
            violation of any law or third-party right.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            14. Term, Suspension &amp; Termination
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            These Terms remain in effect while you maintain an active
            subscription. We may suspend or terminate your account for breach of
            these Terms, non-payment, or conduct that creates legal or security
            risk to us or others. You may terminate by canceling your subscription
            per Section 3.4. Sections that by their nature should survive
            termination (e.g., Sections 4, 8, 11, 12, 13, 17) will survive.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            15. Modifications to These Terms
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            We may update these Terms from time to time. Material changes will be
            notified via email or in-app notice at least 14 days before taking
            effect. Continued use after the effective date constitutes acceptance.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            16. Governing Law &amp; Dispute Resolution
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            These Terms are governed by the laws of the{" "}
            <strong>State of Oregon</strong>, without regard to conflict-of-law
            principles. Any dispute will be resolved in the state or federal
            courts located in <strong>Multnomah County, Oregon</strong>, and both
            parties consent to jurisdiction there.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            17. General Provisions
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-on-surface leading-relaxed mb-4">
            <li>
              <strong>Assignment.</strong> You may not assign these Terms without
              our written consent; we may assign them in connection with a merger,
              acquisition, or sale of assets.
            </li>
            <li>
              <strong>Severability.</strong> If any provision is unenforceable,
              the remaining provisions remain in effect.
            </li>
            <li>
              <strong>Entire Agreement.</strong> These Terms, along with the
              Privacy Policy and DPA, are the entire agreement between you and us
              regarding the Services.
            </li>
            <li>
              <strong>No Waiver.</strong> Failure to enforce a provision is not a
              waiver of it.
            </li>
            <li>
              <strong>Notices.</strong> Legal notices to us should be sent to{" "}
              <a
                href="mailto:support@opsroi.com"
                className="text-secondary underline hover:text-secondary/80"
              >
                support@opsroi.com
              </a>
              . Notices to you will be sent to your account email.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            18. Contact
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            <strong>OpsROI LLC</strong>
            <br />
            Fully Remote
Austin, TX & Global
            <br />
            Email:{" "}
            <a
              href="mailto:support@treeroi.com"
              className="text-secondary underline hover:text-secondary/80"
            >
              support@opsroi.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}