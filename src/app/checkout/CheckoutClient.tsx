"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import { ChevronLeft, ShieldCheck, Check } from "lucide-react";
import { getPlan, formatUSD } from "@/src/lib/plans";
import CheckoutForm from "./CheckoutForm";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY ?? ""
);

export default function CheckoutClient({ planKey }: { planKey: string }) {
  const plan = useMemo(() => getPlan(planKey), [planKey]);
  const [visibleFeatures, showAll] = useState(false);

  const displayedFeatures = visibleFeatures
    ? plan.features
    : plan.features.slice(0, 8);
  const hiddenCount = plan.features.length - displayedFeatures.length;

  return (
    <main className="min-h-screen bg-navy-deep text-white pt-24 pb-24">
      {/* Ambient glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-24 -translate-x-1/2 h-[420px] w-[900px] rounded-full bg-green/8 blur-[160px]"
      />

      <div className="relative mx-auto max-w-6xl px-5 sm:px-6 lg:px-8">
        {/* Back link */}
        <Link
          href="/pricing"
          className="inline-flex items-center gap-1.5 text-xs font-bold uppercase tracking-[0.14em] text-white/60 hover:text-white transition-colors font-display"
        >
          <ChevronLeft className="h-4 w-4" />
          Back to pricing
        </Link>

        {/* Heading */}
        <div className="mt-8 mb-10">
          <span className="inline-flex items-center rounded-full border border-green/30 bg-green/10 px-4 py-1.5 text-[11px] font-bold uppercase tracking-[0.18em] text-green font-display">
            Checkout
          </span>
          <h1 className="mt-5 text-4xl sm:text-5xl md:text-6xl font-bold tracking-tight leading-[1.05] text-white font-display">
            Start With <span className="text-green">{plan.name}.</span>
          </h1>
          <p className="mt-4 max-w-xl text-base text-white/70 leading-relaxed">
            Finish signing up in under a minute. You&apos;ll get login credentials
            by email the moment your account is provisioned.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-[1.35fr_1fr] gap-6 lg:gap-8 items-start">
          {/* LEFT: Form */}
          <Elements
            stripe={stripePromise}
            options={{
              appearance: {
                theme: "night",
                variables: {
                  colorPrimary: "#7DC243",
                  colorBackground: "#0B1D33",
                  colorText: "#ffffff",
                  colorDanger: "#f87171",
                  fontFamily: "Barlow, system-ui, sans-serif",
                  borderRadius: "12px",
                  fontSizeBase: "15px",
                },
              },
            }}
          >
            <CheckoutForm plan={plan} />
          </Elements>

          {/* RIGHT: Summary + benefits */}
          <aside className="space-y-4">
            {/* Selected plan card */}
            <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-navy/60 to-navy-deep p-6 backdrop-blur-sm">
              <div className="flex items-start gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-lg bg-green/15 text-green">
                  <ShieldCheck className="h-5 w-5" strokeWidth={1.8} />
                </span>
                <div>
                  <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-green font-display">
                    Selected Plan
                  </div>
                  <div className="mt-0.5 text-lg font-bold text-white font-display">
                    {plan.name}
                  </div>
                </div>
              </div>
              <div className="mt-3 text-sm text-white/70">{plan.tagline}</div>
              <div className="mt-5 flex items-baseline gap-1">
                <span className="text-4xl font-bold text-white tracking-tight font-display">
                  {formatUSD(plan.monthly)}
                </span>
                <span className="text-sm text-white/60 font-semibold">/month</span>
              </div>
              {plan.onboarding > 0 && (
                <div className="mt-1.5 text-sm text-white/70">
                  Onboarding:{" "}
                  <span className="text-green font-bold">
                    {formatUSD(plan.onboarding)}
                  </span>{" "}
                  one-time
                </div>
              )}
            </div>

            {/* What's included */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
              <div className="text-[10px] font-bold uppercase tracking-[0.18em] text-green mb-4 font-display">
                What&apos;s Included
              </div>
              <ul className="space-y-2.5">
                {displayedFeatures.map((f) => (
                  <li key={f} className="flex items-start gap-2.5 text-sm text-white/85">
                    <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-green/15">
                      <Check className="h-3 w-3 text-green" strokeWidth={3} />
                    </span>
                    {f}
                  </li>
                ))}
              </ul>
              {hiddenCount > 0 && (
                <button
                  type="button"
                  onClick={() => showAll(true)}
                  className="mt-3 text-[11px] font-semibold text-green hover:underline"
                >
                  +{hiddenCount} more feature{hiddenCount === 1 ? "" : "s"} included
                </button>
              )}
            </div>

            {/* Trust bullets */}
            <div className="rounded-2xl border border-white/10 bg-white/[0.02] p-6 backdrop-blur-sm">
              <ul className="space-y-2.5 text-sm text-white/85">
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-green shrink-0 mt-0.5" strokeWidth={2.5} />
                  Cancel any time. No contracts.
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-green shrink-0 mt-0.5" strokeWidth={2.5} />
                  Dedicated onboarding sprint
                </li>
                <li className="flex items-start gap-2.5">
                  <Check className="h-4 w-4 text-green shrink-0 mt-0.5" strokeWidth={2.5} />
                  A real human on the other end
                </li>
              </ul>
            </div>
          </aside>
        </div>
      </div>
    </main>
  );
}
