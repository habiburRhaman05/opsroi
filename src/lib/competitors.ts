export type Cell = boolean | string;

export type Competitor = {
  key: string;
  name: string;
  logo: string;
  tagline: string;
};

export const COMPETITORS: Competitor[] = [
  {
    key: "gohighlevel",
    name: "GoHighLevel",
    logo: "/crm-icons/gohighlevel-com-logo.png",
    tagline: "Agency all-in-one",
  },
  {
    key: "hubspot",
    name: "HubSpot",
    logo: "/crm-icons/hubspot-com-logo.png",
    tagline: "Marketing CRM",
  },
  {
    key: "salesforce",
    name: "Salesforce",
    logo: "/crm-icons/saleforce-com-logo.png",
    tagline: "Enterprise CRM",
  },
  {
    key: "activecampaign",
    name: "ActiveCampaign",
    logo: "/crm-icons/activecampaign-com-logo.png",
    tagline: "Marketing automation",
  },
];

export type FeatureRow = {
  feature: string;
  gohighlevel: Cell;
  hubspot: Cell;
  salesforce: Cell;
  activecampaign: Cell;
  opsroi: Cell;
};

export const ROWS: FeatureRow[] = [
  {
    feature: "CRM & Pipelines",
    gohighlevel: true,
    hubspot: true,
    salesforce: true,
    activecampaign: true,
    opsroi: true,
  },
  {
    feature: "Marketing & Lead Generation",
    gohighlevel: true,
    hubspot: true,
    salesforce: "Add On",
    activecampaign: true,
    opsroi: true,
  },
  {
    feature: "AI Receptionist, 24/7",
    gohighlevel: "Add On",
    hubspot: false,
    salesforce: false,
    activecampaign: false,
    opsroi: "Included",
  },
  {
    feature: "AI Estimates & Invoicing",
    gohighlevel: false,
    hubspot: "Quotes Only",
    salesforce: true,
    activecampaign: false,
    opsroi: true,
  },
  {
    feature: "Job Scheduling & Dispatch",
    gohighlevel: false,
    hubspot: false,
    salesforce: "Field Tier",
    activecampaign: false,
    opsroi: true,
  },
  {
    feature: "HR & Payroll",
    gohighlevel: false,
    hubspot: false,
    salesforce: false,
    activecampaign: false,
    opsroi: true,
  },
  {
    feature: "Inventory Management",
    gohighlevel: false,
    hubspot: false,
    salesforce: "Add On",
    activecampaign: false,
    opsroi: true,
  },
  {
    feature: "Document Signing",
    gohighlevel: "Limited",
    hubspot: "Add On",
    salesforce: "Add On",
    activecampaign: false,
    opsroi: "Full E-Sign",
  },
  {
    feature: "Client ROI Dashboards",
    gohighlevel: "Paid Tier",
    hubspot: "Enterprise",
    salesforce: true,
    activecampaign: false,
    opsroi: "Included",
  },
  {
    feature: "Done For You Setup",
    gohighlevel: false,
    hubspot: false,
    salesforce: false,
    activecampaign: false,
    opsroi: "Included",
  },
];

/** Score a Cell value: full match = 1, partial (string) = 0.5, missing = 0. */
export function scoreCell(v: Cell): number {
  if (v === true) return 1;
  if (v === false) return 0;
  return 0.5;
}

/** Compute a competitor's coverage score against ROWS (0.0 to 1.0). */
export function coverageScore(
  competitorKey: keyof Omit<FeatureRow, "feature">,
): { score: number; total: number; percent: number } {
  const score = ROWS.reduce((sum, r) => sum + scoreCell(r[competitorKey]), 0);
  const total = ROWS.length;
  return { score, total, percent: Math.round((score / total) * 100) };
}
