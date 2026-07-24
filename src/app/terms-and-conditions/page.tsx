import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms and Conditions - OpsROI",
  description:
    "The terms of service that govern your use of the OpsROI platform.",
};

export default function TermsPage() {
  return (
    <>
      <main className="pt-24 md:pt-32 pb-16 md:pb-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low min-h-screen">
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] border border-outline-variant/40 shadow-ambient-shadow overflow-hidden">
          <div className="bg-surface-container-lowest px-8 py-8 md:px-14 md:py-10 text-center border-b border-outline-variant/40">
            <div className="text-label-caps font-label-caps uppercase text-[#7fc42a] font-bold mb-4 tracking-widest">
              Legal
            </div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-primary text-4xl md:text-5xl">
              Terms of Service
            </h1>
            <p className="text-sm text-primary/80 mt-4">
              Effective Date: July 14, 2025 &middot; Last Updated: July 14, 2025
            </p>
          </div>
          <div className="p-8 md:p-14">
          <p className="text-sm text-primary/80 mb-4">
            These Terms of Service (&quot;Terms&quot;) are a binding agreement between you (&quot;Customer,&quot; &quot;you&quot;) and OpsROI, an Oregon limited liability company operating the OpsROI platform (&quot;OpsROI,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;). By creating an account, accessing, or using OpsROI (the &quot;Services&quot;), you agree to these Terms. If you are agreeing on behalf of a business, you represent you have authority to bind that business.
          </p>
          <p className="text-sm text-primary/80 mb-8">
            If you do not agree, do not use the Services.
          </p>

          <h2 className="text-xl font-bold text-primary mt-0 mb-3">
            1. Definitions
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-primary/90 leading-relaxed mb-4">
            <li><strong>&quot;Services&quot;</strong>: the OpsROI CRM platform, including web application, booking calendar, SMS/email messaging tools, automations, and related features.</li>
            <li><strong>&quot;Customer Data&quot;</strong>: data you or your End Customers submit to the Services, including contact lists, job records, messages, and payment references.</li>
            <li><strong>&quot;End Customer&quot;</strong>: a customer or lead of yours that you manage within OpsROI.</li>
            <li><strong>&quot;Customer Content&quot;</strong>: text, images, templates, and other material you upload or create within the Services.</li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            2. Eligibility &amp; Account Registration
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            You must be at least 18 years old and able to form a binding contract to use the Services. You agree to provide accurate registration information and keep it current. You are responsible for all activity under your account and for safeguarding your login credentials. Notify us immediately at <a href="mailto:support@opsroi.com" className="text-primary font-bold underline hover:text-opsroi-green transition-colors">support@opsroi.com</a> of any unauthorized access.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            3. Subscription and Billing
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            3.1 Subscription
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            OpsROI is offered as a paid subscription, billed on the plan and interval selected at signup. Some early customers may receive complimentary or discounted access at our sole discretion; this does not create an ongoing entitlement to free service.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            3.2 Payment Processing
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            Payments are processed by Stripe. By subscribing, you authorize us (via Stripe) to charge your payment method on a recurring basis. You are responsible for keeping payment information current.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            3.3 Price Changes
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We may change subscription pricing with at least 30 days&apos; notice before your next billing cycle. Continued use after that date constitutes acceptance.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            3.4 Cancellation
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            You may cancel at any time; cancellation takes effect at the end of the current billing period. No partial-period refunds unless required by law.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            3.5 Non-Payment
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We may suspend or terminate access for failed or overdue payment after reasonable notice.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            4. Data Processing
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            4.1 Roles
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            As between you and us, you are the data controller and we are the data processor with respect to End Customer personal data you submit to the Services. You are responsible for having a lawful basis to collect and share that data with us.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            4.2 Processing Instructions
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We process Customer Data only to provide, maintain, and support the Services, and as otherwise instructed by you or required by law.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            4.3 Data Processing Addendum
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            A Data Processing Addendum (&quot;DPA&quot;) is incorporated into these Terms by reference and governs the processing of personal data.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            4.4 Security
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We maintain reasonable administrative, technical, and physical safeguards designed to protect Customer Data, consistent with industry practice.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            4.5 Data Export &amp; Deletion
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            Upon termination, you may export Customer Data for a reasonable period. After that period, we may delete Customer Data from active systems, subject to standard backup retention cycles.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            5. SMS &amp; Email Communications
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            5.1 You Are the Sender of Record
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            When you use OpsROI to send SMS, MMS, or email to End Customers, you, not OpsROI, are the sender of record and are solely responsible for: obtaining valid, documented consent (opt-in) from each recipient before messaging them; honoring opt-out requests (e.g., &quot;STOP&quot;) immediately and permanently; complying with the Telephone Consumer Protection Act (TCPA), CAN-SPAM Act, CTIA guidelines, and all applicable carrier and messaging regulations; and the content of messages you send, including accuracy and lawfulness.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            5.2 Prohibited Content
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            You may not use the Services to send content prohibited by carrier rules, including but not limited to: Sex, Hate, Alcohol, Firearms, Tobacco (&quot;SHAFT&quot;) content, illegal debt collection, deceptive financial offers, or unsolicited marketing to numbers without consent.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            5.3 Our Right to Suspend
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We may suspend or terminate messaging features, or your account, immediately and without liability, if we reasonably believe you have violated this Section, carrier policies, or applicable law. Suspension for compliance reasons does not entitle you to a refund of the suspended period.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            5.4 No Liability for Customer Misuse
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We are not responsible for messages sent using your account credentials or Customer Content, and you agree to indemnify us as described in Section 13.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            6. Acceptable Use Policy
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            You agree not to use the Services to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-primary/90 leading-relaxed mb-4">
            <li>Violate any law or third party&apos;s rights</li>
            <li>Send unsolicited, fraudulent, or deceptive communications</li>
            <li>Upload malicious code or attempt to breach system security</li>
            <li>Scrape, resell, or sublicense the Services without our written consent</li>
            <li>Store sensitive data types (e.g., health records, government ID numbers, full payment card numbers) unless expressly permitted in writing</li>
          </ul>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We may investigate and take action, including suspension, for suspected violations.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            7. Customer Responsibilities &amp; Warranties
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            You represent and warrant that:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-primary/90 leading-relaxed mb-4">
            <li>You have all rights necessary to submit Customer Content and Customer Data to the Services</li>
            <li>Your use of the Services complies with applicable law, including consumer protection and messaging/telemarketing laws</li>
            <li>You will maintain accurate consent records for messaging and provide them to us upon request</li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            8. Intellectual Property
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            8.1 Our IP
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            OpsROI, its software, design, and underlying technology are owned by OpsROI and protected by intellectual property laws. These Terms grant you a limited, non-exclusive, non-transferable license to use the Services during your subscription. No ownership rights are transferred.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            8.2 Your Content
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            You retain ownership of Customer Content and Customer Data. You grant us a limited license to host, process, and display it solely to provide the Services.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            8.3 Feedback
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            If you provide suggestions or feedback, we may use it without obligation to you.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            9. Third-Party Services
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            The Services integrate with third parties (e.g., Stripe for payments, SMS/email carriers, Google services). Your use of those integrations is subject to the applicable third party&apos;s terms. We are not responsible for third-party service failures or policy changes outside our control.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            10. Confidentiality
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            Each party agrees to protect the other&apos;s non-public business information disclosed in connection with the Services using reasonable care, and to use it only for purposes of this agreement.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            11. Disclaimers
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4 uppercase">
            The Services are provided &quot;as is&quot; and &quot;as available.&quot; To the maximum extent permitted by law, we disclaim all warranties, express or implied, including merchantability, fitness for a particular purpose, and non-infringement. We do not guarantee uninterrupted or error-free operation, or any specific business results from using the Services.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            12. Limitation of Liability
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4 uppercase">
            To the maximum extent permitted by law, OpsROI will not be liable for any indirect, incidental, special, consequential, or punitive damages, or lost profits, arising from your use of the Services. Our total aggregate liability will not exceed the amount you paid us in the 12 months preceding the claim.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            Some jurisdictions do not allow these limitations; in that case, they apply to the maximum extent permitted.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            13. Indemnification
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            You agree to indemnify, defend, and hold harmless OpsROI and its members, employees, and agents from any claims, damages, or expenses (including reasonable attorneys&apos; fees) arising from: (a) your violation of these Terms; (b) your messaging or data practices, including TCPA or consent violations; (c) Customer Content; or (d) your violation of any law or third-party right.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            14. Term and Termination
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            14.1 These Terms remain in effect while you maintain an active subscription.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            14.2 We may suspend or terminate your account for breach of these Terms, non-payment, or conduct that creates legal or security risk to us or others.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            14.3 You may terminate by canceling your subscription per Section 3.4.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            14.4 Sections that by their nature should survive termination (e.g., Sections 4, 8, 11, 12, 13, 17) will survive.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            15. Modifications to these Terms
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We may update these Terms from time to time. Material changes will be notified via email or in-app notice at least 14 days before taking effect. Continued use after the effective date constitutes acceptance.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            16. Governing Law &amp; Dispute Resolution
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            These Terms are governed by the laws of the State of Oregon, without regard to conflict-of-law principles. Any dispute will be resolved in the state or federal courts located in Multnomah County, Oregon, and both parties consent to jurisdiction there.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            17. General Provisions
          </h2>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-primary/90 leading-relaxed mb-4">
            <li><strong>Assignment.</strong> You may not assign these Terms without our written consent; we may assign them in connection with a merger, acquisition, or sale of assets.</li>
            <li><strong>Severability.</strong> If any provision is unenforceable, the remaining provisions remain in effect.</li>
            <li><strong>Entire Agreement.</strong> These Terms, along with the Privacy Policy and DPA, are the entire agreement between you and us regarding the Services.</li>
            <li><strong>No Waiver.</strong> Failure to enforce a provision is not a waiver of it.</li>
            <li><strong>Notices.</strong> Legal notices to us should be sent to <a href="mailto:support@opsroi.com" className="text-primary font-bold underline hover:text-opsroi-green transition-colors">support@opsroi.com</a>. Notices to you will be sent to your account email.</li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            18. Contact
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