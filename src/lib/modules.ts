export type ModuleKey =
  | "contacts" | "opportunity" | "conversations" | "jobs"
  | "tasks" | "production" | "operations" | "callout"
  | "hr" | "training" | "inventory" | "fleet"
  | "vault" | "marketing" | "builder" | "admin"
  | "calendar" | "logs";

export type ModuleEntry = [string, string];

export const MODULES: Record<ModuleKey, ModuleEntry> = {
  contacts: ["Contacts", "Every customer, lead, and crew contact in one place"],
  opportunity: ["Opportunity", "Track leads and close deals through your pipeline"],
  conversations: ["Conversations", "Unified inbox, calls, texts, and email in one thread"],
  jobs: ["Jobs", "From quote to completion, every job tracked"],
  tasks: ["Task Management", "Assign, prioritize, and never drop a task again"],
  production: ["Production", "Schedule crews and track work in the field"],
  operations: ["Operations", "Run the daily engine of the whole business"],
  callout: ["Call Out Tracker", "Log call-outs and dispatch the right crew fast"],
  hr: ["Human Resources", "Centralize employee records and onboarding"],
  training: ["Training Module", "Get every crew member up to speed, fast"],
  inventory: ["Inventory Management", "Track stock, gear, and logistics in real time"],
  fleet: ["Fleet", "Manage trucks, equipment, and running costs"],
  vault: ["Vault", "Secure storage for documents and credentials"],
  marketing: ["Marketing", "Campaigns, SEO, and lead generation built in"],
  builder: ["Builder", "Build sites and pages without touching code"],
  admin: ["Administration", "Control users, roles, and platform settings"],
  calendar: ["Calendar", "Bookings and scheduling with automatic reminders"],
  logs: ["Logs", "A complete audit trail of everything that happens"],
};

export const SUBSET: ModuleKey[] = [
  "contacts", "opportunity", "jobs", "production",
  "marketing", "hr", "inventory", "admin",
];

export const CATS: [string, ModuleKey[]][] = [
  ["Sales & CRM", ["contacts", "opportunity", "conversations"]],
  ["Operations", ["jobs", "tasks", "production", "operations", "callout"]],
  ["People", ["hr", "training"]],
  ["Assets", ["inventory", "fleet", "vault"]],
  ["Marketing", ["marketing", "builder"]],
  ["Finance & Admin", ["admin", "calendar", "logs"]],
];

export const HERO_MOCK: ModuleKey[] = [
  "contacts", "opportunity", "jobs", "marketing", "hr", "fleet",
];
