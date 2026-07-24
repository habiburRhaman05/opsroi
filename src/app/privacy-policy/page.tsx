import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - OpsROI",
  description:
    "How OpsROI LLC collects, uses, and protects information across our website and the platforms we operate, including TreeROI.",
};

export default function PrivacyPage() {
  return (
    <>
      <header className="pt-36 md:pt-44 pb-16 px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        <div className="max-w-3xl">
          <div className="text-label-caps font-label-caps uppercase text-secondary mb-4">
            Legal
          </div>
          <h1 className="font-display-lg-mobile md:font-display-lg text-primary text-4xl md:text-6xl">
            Privacy Policy
          </h1>
          <p className="text-sm text-on-surface-variant mt-4">
            Effective Date: July 18, 2026 · Last Updated: July 18, 2026
          </p>
        </div>
      </header>

      <section className="pb-section-gap px-margin-mobile md:px-margin-desktop bg-surface-container-low">
        <div className="max-w-3xl mx-auto bg-white rounded-[40px] border border-outline-variant/40 shadow-ambient-shadow p-8 md:p-14">
          <p className="text-sm text-on-surface-variant mb-4">
            This Privacy Policy explains how <strong>OpsROI LLC</strong>, an
            Oregon limited liability company (&quot;OpsROI,&quot; &quot;we,&quot;{" "}
            &quot;us,&quot; &quot;our&quot;), collects, uses, shares, and protects
            information through our website and the software platforms we build
            and operate for contractor-owned businesses, including{" "}
            <strong>TreeROI</strong>, our first live platform, and additional
            industry platforms as they launch (together, the &quot;Services&quot;).
          </p>
          <p className="text-sm text-on-surface-variant mb-4">
            This Policy covers two categories of people:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-on-surface-variant leading-relaxed mb-4">
            <li>
              <strong>Customers</strong>: the contracting businesses (and their
              staff) who register for and use an OpsROI Platform, such as TreeROI.
            </li>
            <li>
              <strong>End Customers</strong>: the homeowners, leads, and clients
              that our Customers manage inside an OpsROI Platform.
            </li>
          </ul>
          <p className="text-sm text-on-surface-variant mb-8">
            If you are an End Customer and have questions about how a specific
            contractor business uses your data, please contact that company
            directly. They control that relationship. We act as their service
            provider.
          </p>

          <h2 className="text-xl font-bold text-primary mt-0 mb-3">
            1. Information We Collect
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            <strong>From Customers (account holders):</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-on-surface leading-relaxed mb-4">
            <li>
              Registration data: name, business name, email, phone, address,
              payment details (via Stripe)
            </li>
            <li>
              Account activity: login history, usage of features, support
              requests
            </li>
            <li>Content you upload: templates, notes, business information</li>
          </ul>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            <strong>From/about End Customers (submitted by our Customers):</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-on-surface leading-relaxed mb-4">
            <li>
              Contact information: name, phone number, email, address
            </li>
            <li>
              Job and service history, booking details, messages exchanged
            </li>
            <li>
              Communication consent records (opt-in/opt-out status)
            </li>
          </ul>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            <strong>Automatically collected:</strong>
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-on-surface leading-relaxed mb-4">
            <li>
              Device and browser information, IP address, log data
            </li>
            <li>
              Cookies and similar tracking technologies (see our{" "}
              <a
                href="/cookie-policy"
                className="text-secondary underline hover:text-secondary/80"
              >
                Cookie Policy
              </a>
              )
            </li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            2. How We Use Information
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            We use information to:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-on-surface leading-relaxed mb-4">
            <li>Provide, operate, and maintain the Services</li>
            <li>Process payments and manage subscriptions</li>
            <li>
              Send account, billing, and service-related communications
            </li>
            <li>Provide customer support</li>
            <li>
              Maintain security, prevent fraud, and enforce our{" "}
              <a
                href="/terms-and-conditions"
                className="text-secondary underline hover:text-secondary/80"
              >
                Terms of Service
              </a>
            </li>
            <li>Improve and develop the Services</li>
            <li>Comply with legal obligations</li>
          </ul>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            We do not sell End Customer personal data to third parties.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            3. Our Role as Data Processor
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            With respect to End Customer data that our Customers submit to an
            OpsROI Platform,{" "}
            <strong>
              our Customer is the data controller and we act as a data
              processor/service provider
            </strong>
            . We process that data only:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-on-surface leading-relaxed mb-4">
            <li>To provide the Services to our Customer,</li>
            <li>Per our Customer&apos;s instructions, and</li>
            <li>As required by law.</li>
          </ul>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            Our Customers are responsible for having a lawful basis to collect,
            use, and share End Customer data with us, including obtaining
            necessary consents. A Data Processing Addendum, available on
            request, governs this relationship in more detail.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            4. SMS &amp; Email Communications
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            Our Platforms enable our Customers to send SMS, MMS, and email
            messages to their End Customers. Please note:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-on-surface leading-relaxed mb-4">
            <li>
              <strong>Our Customer is the sender of record.</strong> The Platform
              provides the messaging technology; the contracting business using
              it is responsible for obtaining consent, honoring opt-outs, and
              complying with the Telephone Consumer Protection Act (TCPA),
              CAN-SPAM Act, and carrier requirements.
            </li>
            <li>
              <strong>Consent.</strong> By providing a phone number or email to
              one of our Customers, you consent to receive messages from that
              specific business, as described in their own privacy notice or
              opt-in language.
            </li>
            <li>
              <strong>Opting Out.</strong> To stop receiving SMS messages, reply{" "}
              <strong>STOP</strong> to any message. To stop receiving emails, use
              the unsubscribe link included in the email, or contact the business
              directly. Opt-out requests are processed promptly and are not
              shared across unrelated businesses.
            </li>
            <li>
              <strong>Message Frequency &amp; Rates.</strong> Message frequency
              varies. Message and data rates may apply.
            </li>
            <li>
              <strong>Support.</strong> For help with messages sent through an
              OpsROI Platform on behalf of a business, reply <strong>HELP</strong>{" "}
              to the message or contact that business. You may also reach us at{" "}
              <a
                href="mailto:support@treeroi.com"
                className="text-secondary underline hover:text-secondary/80"
              >
                support@treeroi.com
              </a>{" "}
              for platform-level concerns.
            </li>
            <li>
              <strong>Prohibited Use.</strong> We prohibit use of the Services to
              send content violating carrier rules, including SHAFT content (Sex,
              Hate, Alcohol, Firearms, Tobacco), illegal debt collection, or
              unsolicited marketing without consent.
            </li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            5. How We Share Information
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            We share information with:
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-on-surface leading-relaxed mb-4">
            <li>
              <strong>Service providers</strong> who support our operations,
              including Stripe (payment processing), SMS/email carriers and
              delivery infrastructure providers, and cloud hosting providers
            </li>
            <li>
              <strong>Our Customers</strong> — the business using the Platform
              can access the End Customer data they submitted
            </li>
            <li>
              <strong>Legal &amp; safety purposes</strong> — to comply with law,
              respond to legal process, or protect rights, property, or safety
            </li>
            <li>
              <strong>Business transfers</strong> — in connection with a merger,
              acquisition, or sale of assets, subject to this Policy or a
              materially similar one
            </li>
          </ul>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            We do not sell personal information as defined under the CCPA/CPRA.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            6. Cookies &amp; Tracking Technologies
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            We use cookies and similar technologies to operate our website and
            Services, remember preferences, and understand usage. See our{" "}
            <a
              href="/cookie-policy"
              className="text-secondary underline hover:text-secondary/80"
            >
              Cookie Policy
            </a>{" "}
            for full details on the types of cookies we use and how to manage
            your preferences.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            7. Data Security
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            We maintain reasonable administrative, technical, and physical
            safeguards designed to protect information against unauthorized
            access, alteration, disclosure, or destruction. No method of
            transmission or storage is 100% secure, and we cannot guarantee
            absolute security.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            8. Data Retention
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            We retain Customer and End Customer data for as long as the Customer
            account is active, and for a reasonable period afterward to comply
            with legal obligations, resolve disputes, and enforce agreements.
            Customers may request export or deletion of their data as described
            in our{" "}
            <a
              href="/terms-and-conditions"
              className="text-secondary underline hover:text-secondary/80"
            >
              Terms of Service
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            9. Your Rights
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            Depending on your location, you may have rights to access, correct,
            or delete your personal information; object to or restrict certain
            processing; request a copy of your data in a portable format; and
            opt out of certain communications.
          </p>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            <strong>End Customers:</strong> To exercise these rights regarding
            data held by a specific contracting business, contact that business
            directly, as they control the data. If you&apos;re unsure which
            business to contact, email us at{" "}
            <a
              href="mailto:support@treeroi.com"
              className="text-secondary underline hover:text-secondary/80"
            >
              support@treeroi.com
            </a>{" "}
            and we&apos;ll help route your request.
          </p>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            <strong>Customers:</strong> Manage most account data directly within
            your Platform account, or email{" "}
            <a
              href="mailto:support@treeroi.com"
              className="text-secondary underline hover:text-secondary/80"
            >
              support@treeroi.com
            </a>
            .
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            10. Children&apos;s Privacy
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            The Services are intended for business use and are not directed to
            children under 18. We do not knowingly collect personal information
            from children.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            11. International Users
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            The Services are hosted in the United States and intended for use by
            U.S.-based businesses. If you access the Services from outside the
            U.S., your information will be transferred to and processed in the
            U.S.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            12. Changes to This Policy
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            We may update this Privacy Policy from time to time. Material changes
            will be posted on this page with an updated &quot;Last Updated&quot;
            date, and where required, we will provide additional notice.
          </p>

          <h2 className="text-xl font-bold text-primary mt-10 mb-3">
            13. Contact Us
          </h2>
          <p className="text-sm text-on-surface leading-relaxed mb-4">
            <strong>OpsROI LLC</strong>
            <br />
            Oregon, USA
            <br />
            Email:{" "}
            <a
              href="mailto:support@treeroi.com"
              className="text-secondary underline hover:text-secondary/80"
            >
              support@treeroi.com
            </a>
          </p>
        </div>
      </section>
    </>
  );
}