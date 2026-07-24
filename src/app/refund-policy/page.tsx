import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Refund Policy - OpsROI",
  description:
    "How billing, cancellation, and refunds work on OpsROI.",
};

export default function RefundPolicyPage() {
  return (
    <>
      <main className="pt-24 md:pt-32 pb-16 md:pb-24 px-margin-mobile md:px-margin-desktop bg-surface-container-low min-h-screen">
        <div className="max-w-4xl mx-auto bg-white rounded-[40px] border border-outline-variant/40 shadow-ambient-shadow overflow-hidden">
          <div className="bg-surface-container-lowest px-8 py-8 md:px-14 md:py-10 text-center border-b border-outline-variant/40">
            <div className="text-label-caps font-label-caps uppercase text-[#7fc42a] font-bold mb-4 tracking-widest">
              Legal
            </div>
            <h1 className="font-display-lg-mobile md:font-display-lg text-primary text-4xl md:text-5xl">
              Refund Policy
            </h1>
            <p className="text-sm text-primary/80 mt-4">
              Effective Date: July 14, 2025 &middot; Last Updated: July 14, 2025
            </p>
          </div>
          <div className="p-8 md:p-14">
          <p className="text-sm text-primary/80 mb-8">
            This Refund Policy applies to subscriptions to OpsROI, operated by OpsROI (&quot;OpsROI,&quot; &quot;we,&quot; &quot;us,&quot; &quot;our&quot;). It should be read together with our <a href="/terms-and-conditions" className="text-primary font-bold underline hover:text-opsroi-green transition-colors">Terms of Service</a>.
          </p>

          <h2 className="text-xl font-bold text-primary mt-0 mb-3">
            Billing
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-8">
            OpsROI subscriptions are billed month-to-month. Your payment method is charged automatically on each billing date until you cancel.
          </p>

          <h2 className="text-xl font-bold text-primary mt-0 mb-3">
            Cancellation
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-8">
            You may cancel your subscription at any time. Cancellation takes effect at the end of your current paid billing period. You retain full access through that period, with no early cutoff.
          </p>

          <h2 className="text-xl font-bold text-primary mt-0 mb-3">
            No Refunds
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            All fees are non-refundable, including for partial months, unused time, or early cancellation. We do not provide prorated refunds. This applies regardless of how much of the billing period you used.
          </p>
          <p className="text-sm text-primary/90 leading-relaxed mb-8">
            Exceptions apply only where required by applicable law.
          </p>

          <h2 className="text-xl font-bold text-primary mt-0 mb-3">
            Keeping Your Account After Cancellation
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-8">
            If you cancel, you may choose to retain your account in an inactive/archived state rather than deleting it, subject to any applicable retention fee or limitation we may establish at the time. A retained account remains subject to our Terms of Service.
          </p>

          <h2 className="text-xl font-bold text-primary mt-0 mb-3">
            Getting Your Data After Cancellation
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-4">
            Data export is not self-service. To request your data, submit a support ticket to <a href="mailto:support@opsroi.com" className="text-primary font-bold underline hover:text-opsroi-green transition-colors">support@opsroi.com</a>. Requests are processed manually.
          </p>
          <ul className="list-disc pl-5 space-y-1.5 text-sm text-primary/90 leading-relaxed mb-8">
            <li>Please note: due to system limitations, we may not be able to export every data type, field, or record. We do not guarantee complete data portability.</li>
            <li>Customer Data is retained for 90 days after cancellation (or deletion, if you choose not to retain your account), after which it may be deleted from active systems, subject to standard backup retention cycles.</li>
          </ul>

          <h2 className="text-xl font-bold text-primary mt-0 mb-3">
            Billing Errors
          </h2>
          <p className="text-sm text-primary/90 leading-relaxed mb-8">
            If you believe you were charged in error, contact <a href="mailto:support@opsroi.com" className="text-primary font-bold underline hover:text-opsroi-green transition-colors">support@opsroi.com</a> and we will review the charge. This does not constitute a general right to a refund but allows us to correct genuine billing mistakes.
          </p>

          <h2 className="text-xl font-bold text-primary mt-0 mb-3">
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
