export type PlanKey = "growth" | "pro" | "elite";

export type Plan = {
  key: PlanKey;
  name: string;
  tagline: string;
  monthly: number;
  onboarding: number;
  planId: string;
  features: string[];
};

export const PLANS: Record<PlanKey, Plan> = {
  growth: {
    key: "growth",
    name: "Growth",
    tagline: "Foundation Ops Platform",
    monthly: 2950,
    onboarding: 1475,
    planId: process.env.NEXT_PUBLIC_PLAN_ID_GROWTH ?? "",
    features: [
      "Up to 5 client/job subaccounts",
      "Core CRM & pipelines",
      "Standard automations",
      "Document signing",
      "Email support",
    ],
  },
  pro: {
    key: "pro",
    name: "Pro",
    tagline: "Scaling Ops Platform",
    monthly: 4995,
    onboarding: 2497,
    planId: process.env.NEXT_PUBLIC_PLAN_ID_PRO ?? "",
    features: [
      "Up to 25 client/job subaccounts",
      "White-labeled ROI dashboards",
      "Advanced workflow automation",
      "AI Estimates & AI Invoicing",
      "HR & Payroll",
      "Priority support",
      "Guided onboarding & setup",
    ],
  },
  elite: {
    key: "elite",
    name: "Elite",
    tagline: "Enterprise Growth Platform",
    monthly: 7495,
    onboarding: 3747,
    planId: process.env.NEXT_PUBLIC_PLAN_ID_ELITE ?? "",
    features: [
      "Everything in Pro",
      "Multi-location support",
      "Executive dashboards",
      "Leadership scorecards",
      "Dedicated Success Manager",
      "Monthly Executive Strategy Sessions",
      "Priority Support",
      "Custom workflow development",
    ],
  },
};

export function getPlan(key: string | null | undefined): Plan {
  if (key && key in PLANS) return PLANS[key as PlanKey];
  return PLANS.pro;
}

export function formatUSD(n: number): string {
  return `$${n.toLocaleString("en-US")}`;
}
