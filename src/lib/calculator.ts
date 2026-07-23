export type CalculatorItem = {
  n: string;
  b: string;
  p: number;
  iconKey: string;
};

export const SOFTWARE: CalculatorItem[] = [
  { n: "CRM & Pipeline", b: "Jobber Plus", p: 599, iconKey: "opportunity" },
  { n: "Phone & Inbox", b: "OpenPhone ×17", p: 391, iconKey: "conversations" },
  { n: "Reputation", b: "Podium", p: 399, iconKey: "marketing" },
  { n: "AI Receptionist", b: "AI answering", p: 199, iconKey: "callout" },
  { n: "Call Tracking", b: "CallRail", p: 50, iconKey: "logs" },
  { n: "HR & Payroll", b: "Gusto", p: 151, iconKey: "hr" },
  { n: "Training", b: "Trainual", p: 270, iconKey: "training" },
  { n: "Inventory", b: "Sortly", p: 149, iconKey: "inventory" },
  { n: "E-Sign & Docs", b: "DocuSign", p: 75, iconKey: "docusign" },
  { n: "Email Marketing", b: "Mailchimp", p: 68, iconKey: "mailchimp" },
  { n: "Website", b: "Wix", p: 39, iconKey: "wix" },
  { n: "Booking", b: "Acuity", p: 27, iconKey: "calendar" },
];

export const SERVICES: CalculatorItem[] = [
  { n: "SEO Management", b: "Local retainer", p: 1500, iconKey: "search" },
  { n: "Blog Content", b: "4 posts / mo", p: 800, iconKey: "pen" },
  { n: "Google Ads Mgmt", b: "Mgmt fee only", p: 750, iconKey: "googleads" },
  { n: "Meta Ads Mgmt", b: "Mgmt fee only", p: 500, iconKey: "meta" },
];

export type TierKey = "growth" | "pro" | "elite";

export const TIERS: Record<TierKey, { price: number; name: string }> = {
  growth: { price: 2950, name: "Marketing & Lead Gen · one platform" },
  pro: { price: 4995, name: "Marketing + Operations · one platform" },
  elite: { price: 7495, name: "Enterprise Growth · one platform" },
};

export const REPLACEMENT_FEATURES: CalculatorItem[] = [...SOFTWARE, ...SERVICES];
