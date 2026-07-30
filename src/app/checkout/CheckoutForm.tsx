"use client";

import Link from "next/link";
import {
  CardNumberElement,
  CardExpiryElement,
  CardCvcElement,
  useStripe,
  useElements,
} from "@stripe/react-stripe-js";
import { Lock, CheckCircle2, AlertCircle } from "lucide-react";
import type { Plan } from "@/src/lib/plans";
import { formatUSD } from "@/src/lib/plans";
import { useForm } from "@/src/lib/useForm";
import {
  checkoutSchema,
  type CheckoutFormData,
} from "@/src/lib/validations/checkout";
import { toE164US } from "@/src/lib/validations/shared";
import FormField from "@/src/components/ui/FormField";
import Input from "@/src/components/ui/Input";
import PhoneInput from "@/src/components/ui/PhoneInput";

const CARD_STYLE = {
  base: {
    color: "#ffffff",
    fontFamily: "Barlow, system-ui, sans-serif",
    fontSize: "15px",
    fontWeight: "400",
    "::placeholder": { color: "rgba(255, 255, 255, 0.35)" },
    iconColor: "#7DC243",
  },
  invalid: { color: "#f87171", iconColor: "#f87171" },
};

export default function CheckoutForm({ plan }: { plan: Plan }) {
  const stripe = useStripe();
  const elements = useElements();

  const {
    isSubmitted,
    isSubmitting,
    submitError,
    handleSubmit,
    handleChange,
    handleBlur,
    getFieldError,
    hasError,
  } = useForm<CheckoutFormData>({
    schema: checkoutSchema,
    onSubmit: async (data) => {
      if (!stripe || !elements) {
        throw new Error("Payment is still loading. Please try again in a moment.");
      }
      const cardNumber = elements.getElement(CardNumberElement);
      if (!cardNumber) {
        throw new Error("Card details are not ready. Please refresh and try again.");
      }

      // 1. Create a PaymentMethod from the card details
      const { error: pmError, paymentMethod } = await stripe.createPaymentMethod({
        type: "card",
        card: cardNumber,
        billing_details: {
          name: data.businessName,
          email: data.workEmail,
          phone: toE164US(data.phone),
        },
      });

      if (pmError || !paymentMethod) {
        throw new Error(
          pmError?.message ?? "We couldn't process that card. Please try again."
        );
      }

      // 2. Register the org via CRM backend, which handles Stripe customer + subscription
      const registerUrl = process.env.NEXT_PUBLIC_CRM_REGISTER_ORG_URL;
      if (!registerUrl) {
        throw new Error("Checkout is not configured. Please contact support.");
      }

      const res = await fetch(registerUrl, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          businessName: data.businessName,
          workEmail: data.workEmail,
          phone: toE164US(data.phone),
          planId: plan.planId,
          paymentMethodId: paymentMethod.id,
        }),
      });

      const responseData = await res.json().catch(() => ({}));

      if (!res.ok) {
        throw new Error(
          responseData?.message ??
            responseData?.error ??
            `Registration failed (${res.status}). Please try again or contact support.`
        );
      }
    },
  });

  if (isSubmitted) {
    return (
      <div className="rounded-2xl border border-green/30 bg-navy/40 p-8 sm:p-10 backdrop-blur-sm text-center">
        <div className="mx-auto mb-5 flex h-14 w-14 items-center justify-center rounded-full bg-green/15">
          <CheckCircle2 className="h-7 w-7 text-green" strokeWidth={2} />
        </div>
        <h2 className="text-2xl sm:text-3xl font-bold text-white font-display">
          You&apos;re In. Welcome To OpsROI.
        </h2>
        <p className="mt-3 text-sm text-white/70 leading-relaxed max-w-md mx-auto">
          Your account is being provisioned right now. Login credentials will
          arrive in your inbox within a few minutes.
        </p>
        <Link
          href="/"
          className="mt-8 inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-3 text-xs font-bold uppercase tracking-[0.14em] text-navy-deep hover:bg-white transition-colors font-display"
        >
          Back to Home
        </Link>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      noValidate
      className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 sm:p-8 backdrop-blur-sm space-y-5"
    >
      <h2 className="text-lg font-bold text-white font-display mb-2 uppercase tracking-wide">
        Your Details &amp; Payment
      </h2>

      <FormField
        label="Business Name"
        htmlFor="businessName"
        required
        error={getFieldError("businessName")}
        variant="dark"
      >
        <Input
          id="businessName"
          name="businessName"
          type="text"
          placeholder="Sunset Tree Care"
          autoComplete="organization"
          error={hasError("businessName")}
          variant="dark"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FormField>

      <FormField
        label="Work Email"
        htmlFor="workEmail"
        required
        error={getFieldError("workEmail")}
        variant="dark"
      >
        <Input
          id="workEmail"
          name="workEmail"
          type="email"
          placeholder="you@company.com"
          autoComplete="email"
          error={hasError("workEmail")}
          variant="dark"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FormField>

      <FormField
        label="Phone"
        htmlFor="phone"
        required
        error={getFieldError("phone")}
        variant="dark"
      >
        <PhoneInput
          id="phone"
          name="phone"
          error={hasError("phone")}
          variant="dark"
          onChange={handleChange}
          onBlur={handleBlur}
        />
      </FormField>

      {/* Payment section */}
      <div className="pt-3">
        <div className="mb-3 flex items-center justify-between">
          <span className="text-xs font-bold text-white uppercase tracking-[0.14em] font-display">
            Payment
          </span>
          <span className="inline-flex items-center gap-1.5 text-[11px] text-white/60">
            <Lock className="h-3 w-3" />
            Secure payment
          </span>
        </div>

        <div className="mb-5 flex items-center gap-3">
          <span className="text-[10px] font-bold uppercase tracking-[0.16em] text-white/50 font-display">
            We Accept
          </span>
          <div className="flex items-center gap-2 opacity-80">
            <BrandBadge label="VISA" />
            <BrandBadge label="MC" />
            <BrandBadge label="AMEX" />
            <BrandBadge label="DISC" />
          </div>
        </div>

        <label className="block mb-5">
          <span className="mb-2 block text-xs font-bold text-white uppercase tracking-[0.14em] font-display">
            Card Number <span className="text-green">*</span>
          </span>
          <div className="rounded-xl border border-white/10 bg-navy/40 px-4 py-3.5 focus-within:border-green/50 focus-within:ring-1 focus-within:ring-green/20 transition-colors">
            <CardNumberElement
              options={{ style: CARD_STYLE, placeholder: "1234 1234 1234 1234" }}
            />
          </div>
        </label>

        <div className="grid grid-cols-2 gap-4">
          <label className="block">
            <span className="mb-2 block text-xs font-bold text-white uppercase tracking-[0.14em] font-display">
              Expiry <span className="text-green">*</span>
            </span>
            <div className="rounded-xl border border-white/10 bg-navy/40 px-4 py-3.5 focus-within:border-green/50 focus-within:ring-1 focus-within:ring-green/20 transition-colors">
              <CardExpiryElement
                options={{ style: CARD_STYLE, placeholder: "MM / YY" }}
              />
            </div>
          </label>
          <label className="block">
            <span className="mb-2 block text-xs font-bold text-white uppercase tracking-[0.14em] font-display">
              CVC <span className="text-green">*</span>
            </span>
            <div className="rounded-xl border border-white/10 bg-navy/40 px-4 py-3.5 focus-within:border-green/50 focus-within:ring-1 focus-within:ring-green/20 transition-colors">
              <CardCvcElement
                options={{ style: CARD_STYLE, placeholder: "CVC" }}
              />
            </div>
          </label>
        </div>
      </div>

      {submitError && (
        <div className="flex items-start gap-2.5 rounded-xl border border-red-500/40 bg-red-500/10 px-4 py-3">
          <AlertCircle className="h-4 w-4 text-red-400 shrink-0 mt-0.5" />
          <span className="text-sm text-red-300 leading-relaxed">
            {submitError}
          </span>
        </div>
      )}

      <button
        type="submit"
        disabled={isSubmitting || !stripe}
        className="group w-full inline-flex items-center justify-center gap-2 rounded-full bg-green px-7 py-4 text-sm font-bold uppercase tracking-[0.14em] text-navy-deep transition-colors hover:bg-green-deep hover:text-white disabled:opacity-60 disabled:cursor-not-allowed font-display"
      >
        {isSubmitting ? (
          <>
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle
                cx="12"
                cy="12"
                r="10"
                stroke="currentColor"
                strokeWidth="3"
                opacity="0.25"
              />
              <path
                d="M12 2a10 10 0 019.95 9"
                stroke="currentColor"
                strokeWidth="3"
                strokeLinecap="round"
              />
            </svg>
            Processing...
          </>
        ) : (
          <>Pay {formatUSD(plan.monthly)} /month</>
        )}
      </button>

      <p className="text-center text-[11px] text-white/50 leading-relaxed">
        <Lock className="inline h-3 w-3 mr-1 -mt-0.5" />
        Secured by Stripe. Cancel any time.
        <br />
        You won&apos;t be charged until your account is provisioned.
      </p>
    </form>
  );
}

function BrandBadge({ label }: { label: string }) {
  return (
    <span className="inline-flex h-5 items-center rounded-md border border-white/15 bg-white/5 px-1.5 text-[9px] font-bold text-white tracking-wider">
      {label}
    </span>
  );
}
