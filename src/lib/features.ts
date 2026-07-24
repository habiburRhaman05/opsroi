import type { LucideIcon } from "lucide-react";
import {
  Database,
  Workflow,
  PhoneIncoming,
  PhoneCall,
  Calculator,
  ReceiptText,
  Users,
  Package,
  FileSignature,
  BarChart3,
  LayoutGrid,
  LifeBuoy,
  Inbox,
  MessagesSquare,
  Handshake,
  LineChart,
  HeartHandshake,
  Compass,
  Blocks,
  Rocket,
} from "lucide-react";

export type FeatureAccent = "green" | "gold" | "navy";

export type Feature = {
  id: string;
  icon: LucideIcon;
  accent: FeatureAccent;
  /** Bento tile size. Absent = compact 1×1. */
  layout?: "xl" | "wide";
  title: string;
  /** Short blurb shown on the card. */
  tagline: string;
  /** Longer intro paragraph shown in the detail modal. */
  overview: string;
  /** Optional numbered "how it works" steps shown in the modal. */
  howItWorks?: string[];
  /** Checklist bullets shown in the detail modal. */
  highlights: string[];
  /** Optional highlight stat shown in the detail modal. */
  stat?: { value: string; label: string };
};

/**
 * Every OpsROI feature, rendered as one flat grid on /features.
 * This is the primary edit surface — swap copy freely, the layout adapts.
 */
export const FEATURES: Feature[] = [
  {
    id: "hr-payroll",
    icon: Users,
    accent: "navy",
    layout: "xl",
    title: "HR & Payroll",
    tagline:
      "Hire, onboard, schedule, and run payroll for your whole team — in the same system as the work.",
    overview:
      "Run your team from the same platform you run your clients and jobs on. Track time by employee, job, or project, run payroll without exporting hours to a third tool, and give new hires a self-serve onboarding flow instead of a stack of paperwork.",
    howItWorks: [
      "A new hire is added and completes onboarding forms digitally.",
      "They're placed on the schedule and assigned to jobs or accounts.",
      "Hours are tracked automatically as work is logged.",
      "Payroll runs directly from those hours — no exporting.",
    ],
    highlights: [
      "Employee records & onboarding",
      "Time tracking by job / client",
      "Payroll processing",
      "Scheduling & shift management",
    ],
  },
  {
    id: "ai-invoicing",
    icon: ReceiptText,
    accent: "gold",
    layout: "wide",
    title: "AI Invoicing",
    tagline:
      "Turn a completed job into an accurate, itemized invoice in seconds — with a payment link attached.",
    overview:
      "The moment a job is marked complete, OpsROI generates an accurate invoice — line items, labor, materials, and taxes pulled straight from the job record — ready to send in seconds instead of built by hand at the end of a long day.",
    howItWorks: [
      "A job or deal is marked complete.",
      "OpsROI pulls time logged, materials used, and your rate card.",
      "An itemized invoice is drafted automatically.",
      "You review (or auto-send) and it goes out with a payment link.",
    ],
    highlights: [
      "Auto-generated from completed jobs",
      "Line-item accuracy from time & materials",
      "One-click send with payment link",
      "Editable before send — AI drafts, you approve",
    ],
  },
  {
    id: "crm-build",
    icon: Database,
    accent: "navy",
    title: "CRM Build & Setup",
    tagline:
      "Custom stages, fields, and subaccounts configured around how you actually sell and deliver.",
    overview:
      "We stand up a CRM shaped around your real sales and delivery process — not a generic template you have to bend to. Pipelines, stages, custom fields, and subaccounts are configured and ready to use from day one, so your team starts working instead of setting up.",
    highlights: [
      "Custom pipelines & deal stages",
      "Tailored fields for your workflow",
      "Client / job subaccounts",
      "Data migrated from your old CRM",
      "Live in 4–5 business days",
    ],
    stat: { value: "4.5 days", label: "average time to a live pipeline" },
  },
  {
    id: "workflow-automation",
    icon: Workflow,
    accent: "green",
    title: "Workflow Automation",
    tagline:
      "Lead routing, follow-up sequences, and internal task automation so nothing falls through the cracks.",
    overview:
      "Build the follow-up once and it runs on every client or job, every time. Drag-and-drop logic handles lead routing, multi-channel sequences, and internal task hand-offs — no developer required, and no rep left to remember it manually.",
    highlights: [
      "Drag-and-drop automation builder",
      "Email & SMS sequences",
      "Lead scoring & tagging",
      "Auto-routing to the right rep or crew",
      "Multi-channel drip campaigns",
    ],
    stat: { value: "8-in-1", label: "tools replaced by one platform" },
  },
  {
    id: "ai-receptionist",
    icon: PhoneIncoming,
    accent: "gold",
    title: "AI Receptionist",
    tagline:
      "Answers, qualifies, and routes every inbound call 24/7 — creating a CRM contact automatically.",
    overview:
      "Never miss an inbound call again. The AI receptionist picks up around the clock, qualifies the caller, answers common questions, and routes hot leads to the right rep or crew — logging a CRM contact automatically for every conversation.",
    highlights: [
      "24/7 call answering",
      "Automatic lead qualification",
      "Smart routing to the right rep or crew",
      "CRM contact created per call",
      "Missed-call text-back",
    ],
  },
  {
    id: "call-tracking",
    icon: PhoneCall,
    accent: "navy",
    title: "Call Tracking",
    tagline:
      "Know exactly which campaign or ad drove every call — recording, transcription, and attribution.",
    overview:
      "Tie every phone call back to the campaign or ad that earned it. Calls are recorded, transcribed, and attributed directly on the CRM record, so you can prove which channels actually drive revenue.",
    highlights: [
      "Call recording & transcription",
      "Per-campaign attribution",
      "Source tracking on the record",
      "Searchable call history",
    ],
  },
  {
    id: "ai-estimates",
    icon: Calculator,
    accent: "green",
    title: "AI Estimates",
    tagline:
      "Turn job details into an accurate, ready-to-send estimate in minutes — not days.",
    overview:
      "Describe the job or pull from a site visit, and OpsROI drafts pricing based on your rates, past jobs, and materials — so estimates go out same-day instead of “we'll get back to you.” AI drafts, you approve.",
    howItWorks: [
      "A rep logs job details from a call or site visit.",
      "OpsROI drafts pricing using your rate history and material costs.",
      "You review and adjust the draft.",
      "The estimate is sent — branded and e-sign ready.",
    ],
    highlights: [
      "AI-drafted pricing from job details",
      "Editable, branded templates",
      "Instant delivery with e-sign built in",
      "Approved estimates flow into scheduling",
    ],
  },
  {
    id: "inventory",
    icon: Package,
    accent: "green",
    title: "Inventory Management",
    tagline:
      "Track materials, equipment, and stock in real time — tied directly to jobs and invoices.",
    overview:
      "Know what's in stock, what's on a truck, and what's been used on a job — in real time, tied directly to the job or client record it belongs to, so nothing gets billed twice or forgotten.",
    howItWorks: [
      "Materials and equipment are logged into inventory with quantities.",
      "A crew pulls materials for a specific job.",
      "Inventory updates automatically as materials are used.",
      "The cost flows directly into that job's invoice.",
    ],
    highlights: [
      "Real-time stock levels",
      "Material tracking by job",
      "Low-stock alerts",
      "Auto-deduction tied to invoicing",
    ],
  },
  {
    id: "esign-docs",
    icon: FileSignature,
    accent: "navy",
    title: "Document Signing",
    tagline:
      "Contracts, proposals, and work orders — signed from any device in seconds, filed automatically.",
    overview:
      "Send contracts, proposals, and work orders that clients view and sign from any device, with every signature tracked automatically against the client or job record — no separate DocuSign or PandaDoc subscription.",
    howItWorks: [
      "A document is generated from a template.",
      "It's sent to the client via email or SMS link.",
      "The client views and signs from any device.",
      "The signed document is filed automatically, with a full audit trail.",
    ],
    highlights: [
      "Templated contracts & proposals",
      "Legally binding e-signatures",
      "Real-time status tracking",
      "Auto-filed to the record",
    ],
  },
  {
    id: "roi-dashboards",
    icon: BarChart3,
    accent: "green",
    title: "Reporting & ROI Dashboards",
    tagline:
      "Automated, white-labeled dashboards that show clients or ownership exactly what the work produced.",
    overview:
      "White-labeled dashboards update on their own, so clients or ownership see results the moment they log in — not once a month in an email you had to build by hand. Every number ties back to the one question that matters: is this working?",
    highlights: [
      "Live white-label dashboards",
      "Automated reports",
      "Attribution by channel",
      "Custom KPI builder",
      "Exportable client PDFs",
    ],
    stat: { value: "96%", label: "client retention after switching" },
  },
  {
    id: "subaccounts",
    icon: LayoutGrid,
    accent: "gold",
    title: "Client / Job Subaccounts",
    tagline:
      "Every client or job site gets its own clean, organized workspace — created automatically.",
    overview:
      "Each client or job gets an isolated, organized workspace that's created, maintained, and supported for you. New accounts spin up automatically when a deal closes, so onboarding is instant and nothing is shared by accident.",
    highlights: [
      "Isolated workspace per client / job",
      "Auto-creation on deal won",
      "Consistent setup every time",
      "Maintained & supported for you",
    ],
  },
  {
    id: "ongoing-support",
    icon: LifeBuoy,
    accent: "navy",
    title: "Ongoing Support",
    tagline:
      "A standing team you can reach when something needs to change — not a ticket queue.",
    overview:
      "You're never left holding a platform you can't adjust. A standing support team is on call to build the new pipeline, tweak the automation, or add the report — plus health alerts and renewal reminders so retention isn't riding on one person remembering to follow up.",
    highlights: [
      "Standing support team",
      "Client health alerts",
      "Renewal & upsell reminders",
      "Ongoing system tuning",
    ],
  },
];

export type PipelineStage = {
  id: string;
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
};

/**
 * The feature delivery pipeline — how a lead moves through OpsROI end to end,
 * on one shared record. Rendered as the pipeline section on /features.
 */
export const PIPELINE_STAGES: PipelineStage[] = [
  {
    id: "capture",
    icon: Inbox,
    step: "01",
    title: "Capture",
    description:
      "Leads and job requests land straight in the CRM — auto-tagged, routed, and never lost between tools.",
  },
  {
    id: "nurture",
    icon: MessagesSquare,
    step: "02",
    title: "Nurture",
    description:
      "Automated email & SMS sequences keep every lead warm, so the first callback is always yours.",
  },
  {
    id: "close",
    icon: Handshake,
    step: "03",
    title: "Close",
    description:
      "AI estimates, e-signatures, and payment links turn conversations into signed, paying work.",
  },
  {
    id: "report",
    icon: LineChart,
    step: "04",
    title: "Report",
    description:
      "White-labeled dashboards update automatically — clients see the ROI the moment they log in.",
  },
  {
    id: "retain",
    icon: HeartHandshake,
    step: "05",
    title: "Retain",
    description:
      "Health alerts, renewal reminders, and a standing support team keep clients longer, hands-off.",
  },
];

export type DeliveryStep = {
  id: string;
  icon: LucideIcon;
  step: string;
  title: string;
  description: string;
};

/**
 * How our team gets each feature live for you — the human, done-for-you side.
 * Rendered as the "how we deliver" section on /features.
 */
export const DELIVERY_STEPS: DeliveryStep[] = [
  {
    id: "map",
    icon: Compass,
    step: "01",
    title: "We map your business",
    description:
      "A short call to understand how you sell, deliver, and get paid today — no assumptions about your industry, niche, or crew size. We listen for your actual workflow, not fit you into ours.",
  },
  {
    id: "build",
    icon: Blocks,
    step: "02",
    title: "We build the systems",
    description:
      "Your CRM, automations, and reporting get built and configured around that exact workflow — pipelines named the way you think, fields that match your intake, dashboards showing the numbers you care about.",
  },
  {
    id: "run",
    icon: Rocket,
    step: "03",
    title: "We keep it running",
    description:
      "OpsROI stays on as your ops partner after launch — maintaining, adjusting, and supporting as you grow, add crew, add clients, or add a new service line. Not a one-time setup you're left to maintain alone.",
  },
];
