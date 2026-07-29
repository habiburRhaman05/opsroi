import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - OpsROI",
  description:
    "How OpsROI LLC collects, uses, and protects information across our website and the platforms we operate.",
};

export default function PrivacyPage() {
  return (
    <>
      <main className="pt-24 md:pt-32 pb-16 md:pb-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low min-h-screen">
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] border border-outline-variant/40 shadow-ambient-shadow overflow-hidden">
          <div className="bg-surface-container-lowest px-8 py-8 md:px-14 md:py-10 text-center border-b border-outline-variant/40">
            <div className="text-label-caps font-label-caps uppercase text-green font-bold mb-4 tracking-widest">
              Legal
            </div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-primary text-4xl md:text-5xl">
              Privacy Policy
            </h1>
            <p className="text-sm text-primary/80 mt-4">
              Effective Date: July 14, 2025 &middot; Last Updated: July 14, 2025
            </p>
          </div>
          <div className="p-8 md:p-14">
          <h2 className="text-xl font-bold text-primary mt-0 mb-3">
            Overview
          </h2>
          <p className="text-sm text-primary/80 mb-4">
            This Privacy Policy explains how <strong>OpsROI</strong>, an
            Oregon limited liability company operating OpsROI (&quot;OpsROI,&quot; &quot;we,&quot;
            &quot;us,&quot; &quot;our&quot;), collects, uses, shares, and protects
            information through our website and CRM platform (the &quot;Services&quot;).
          </p>
          <p className="text-sm text-primary/80 mb-4">
            In short: we collect the information needed to operate the Services, we
            use it to provide those Services and meet legal obligations, and we do
            not sell personal information to third parties. The full details, along
            with your rights and choices, are set out below.
          </p>
          <p className="text-sm text-primary/80 mb-4">
            This Policy covers two categories of people:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-primary/80 leading-relaxed mb-4">
            <li>
              <strong>Customers</strong>: businesses (and their
              staff) who register for and use OpsROI.
            </li>
            <li>
              <strong>End Customers</strong>: the homeowners, leads, and clients
              that our Customers manage inside OpsROI.
            </li>
          </ul>
          <p className="text-sm text-primary/80 mb-8">
            If you are an End Customer and have questions about how a specific
            business uses your data, please contact that company
            directly. They control that relationship. We act as their service
            provider.
          </p>

          <h2 className="text-xl font-bold text-primary mt-0 mb-3">
            1. Information We Collect
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            From Customers (account holders):
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-primary/90 leading-relaxed mb-4">
            <li>Registration data: name, business name, email, phone, address, payment details (via Stripe)</li>
            <li>Account activity: login history, usage of features, support requests</li>
            <li>Content you upload: templates, notes, business information</li>
          </ul>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            From or about End Customers (submitted by our Customers):
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-primary/90 leading-relaxed mb-4">
            <li>Contact information: name, phone number, email, address</li>
            <li>Job and service history, booking details, messages exchanged</li>
            <li>Communication consent records (opt-in/opt-out status)</li>
          </ul>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            Automatically collected:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-primary/90 leading-relaxed mb-4">
            <li>Device and browser information, IP address, log data</li>
            <li>Cookies and similar tracking technologies (see Section 6)</li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            2. How We Use Information
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We use information to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-primary/90 leading-relaxed mb-4">
            <li>Provide, operate, and maintain the Services</li>
            <li>Process payments and manage subscriptions</li>
            <li>Send account, billing, and service-related communications</li>
            <li>Provide customer support</li>
            <li>Maintain security, prevent fraud, and enforce our Terms of Service</li>
            <li>Improve and develop the Services</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We do not sell End Customer personal data to third parties.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            3. Our Role As Data Processor
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            With respect to End Customer data that our Customers submit to OpsROI, our Customer is the data controller and we act as a data processor/service provider. We process that data only:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-primary/90 leading-relaxed mb-4">
            <li>To provide the Services to our Customer,</li>
            <li>Per our Customer&apos;s instructions, and</li>
            <li>As required by law.</li>
          </ul>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            Our Customers are responsible for having a lawful basis to collect, use, and share End Customer data with us, including obtaining necessary consents. A Data Processing Addendum governs this relationship in more detail.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            4. SMS &amp; Email Communications
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            OpsROI enables our Customers to send SMS, MMS, and email messages to their End Customers. Please note:
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            Sender Responsibility
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            Our Customer is the sender of record. OpsROI provides the messaging technology; the business using OpsROI is responsible for obtaining consent, honoring opt-outs, and complying with the Telephone Consumer Protection Act (TCPA), CAN-SPAM Act, and carrier requirements.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            Consent
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            By providing a phone number or email to one of our Customers, you consent to receive messages from that specific business, as described in their own privacy notice or opt-in language.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            Opting Out
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            To stop receiving SMS messages, reply STOP to any message. To stop receiving emails, use the unsubscribe link included in the email, or contact the business directly. Opt-out requests are processed promptly and are not shared across unrelated businesses.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            Message Frequency &amp; Rates
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            Message frequency varies. Message and data rates may apply.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            Support
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            For help with messages sent through OpsROI on behalf of a business, reply HELP to the message or contact that business. You may also reach us at <a href="mailto:support@opsroi.com" className="text-primary font-bold underline hover:text-opsroi-green transition-colors">support@opsroi.com</a> for platform-level concerns.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            Prohibited Use
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We prohibit use of the Services to send content violating carrier rules, including SHAFT content (Sex, Hate, Alcohol, Firearms, Tobacco), illegal debt collection, or unsolicited marketing without consent.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            5. How We Share Information
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We share information with:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-primary/90 leading-relaxed mb-4">
            <li>Service providers who support our operations, including: Stripe (payment processing), SMS/email carriers and delivery infrastructure providers, and cloud hosting providers</li>
            <li>Our Customers : the business using OpsROI can access the End Customer data they submitted</li>
            <li>Legal &amp; safety purposes : to comply with law, respond to legal process, or protect rights, property, or safety</li>
            <li>Business transfers : in connection with a merger, acquisition, or sale of assets, subject to this Policy or a materially similar one</li>
          </ul>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We do not sell personal information as defined under the CCPA/CPRA.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            6. Cookies &amp; Tracking Technologies
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We use cookies and similar technologies to operate our website and Services, remember preferences, and understand usage. See our Cookie Policy for full details on the types of cookies we use and how to manage your preferences.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            7. Third-Party Links
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            Our website and Services may contain links to third-party websites, integrations, or resources that are not operated by us (for example, links to payment processors, help articles, or partner tools). We do not control those third parties and are not responsible for their content, privacy practices, or the way they collect, use, or share information. This Policy applies only to information collected by OpsROI. We encourage you to review the privacy policies of any third-party site or service you visit or use.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            8. Data Security
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We maintain reasonable administrative, technical, and physical safeguards designed to protect information against unauthorized access, alteration, disclosure, or destruction. No method of transmission or storage is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            9. Data Retention
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We retain Customer and End Customer data for as long as the Customer account is active, and for a reasonable period afterward to comply with legal obligations, resolve disputes, and enforce agreements. Customers may request export or deletion of their data as described in our Terms of Service.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            10. Your Rights
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            Depending on your location, you may have rights to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-primary/90 leading-relaxed mb-4">
            <li>Access, correct, or delete your personal information</li>
            <li>Object to or restrict certain processing</li>
            <li>Request a copy of your data in a portable format</li>
            <li>Opt out of certain communications</li>
          </ul>
          
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            End Customers
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            To exercise these rights regarding data held by a specific business, contact that business directly, as they control the data. If you&apos;re unsure which business to contact, email us at <a href="mailto:support@opsroi.com" className="text-primary font-bold underline hover:text-opsroi-green transition-colors">support@opsroi.com</a> and we&apos;ll help route your request.
          </p>
          
          <p className="text-sm text-primary/90 leading-relaxed mb-2 font-semibold">
            Customers
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            Manage most account data directly within your OpsROI account, or email <a href="mailto:support@opsroi.com" className="text-primary font-bold underline hover:text-opsroi-green transition-colors">support@opsroi.com</a>.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            11. Children&apos;s Privacy
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            The Services are intended for business use and are not directed to children under 18. We do not knowingly collect personal information from children.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            12. International Users
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            The Services are hosted in the United States and intended for use by U.S.-based businesses. If you access the Services from outside the U.S., your information will be transferred to and processed in the U.S.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            13. Changes To This Policy
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            We may update this Privacy Policy from time to time. Material changes will be posted on this page with an updated &quot;Last Updated&quot; date, and where required, we will provide additional notice.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            14. Contact Us
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