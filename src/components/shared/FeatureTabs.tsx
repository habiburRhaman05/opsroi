"use client";

import { useState } from "react";
import Link from "next/link";
import type { LucideIcon } from "lucide-react";
import {
  Inbox,
  MessagesSquare,
  Handshake,
  PhoneIncoming,
  Users,
  BarChart3,
  HeartHandshake,
  Check,
  ArrowRight,
} from "lucide-react";

type Accent = "green" | "gold" | "navy";

const ACCENT: Record<Accent, { badge: string; check: string; frame: string }> = {
  green: { badge: "bg-green/12 text-green-deep", check: "bg-green", frame: "from-green/12" },
  gold: { badge: "bg-gold/15 text-gold", check: "bg-gold", frame: "from-gold/15" },
  navy: { badge: "bg-navy/10 text-navy", check: "bg-navy", frame: "from-navy/10" },
};

type Tab = {
  id: string;
  label: string;
  icon: LucideIcon;
  accent: Accent;
  heading: string;
  desc: string;
  checklist: string[];
  visual: string;
};

/* Stage-by-stage content, sourced from opsroi-full-content-package (2).md
   · "Inside the Platform" + Features breakdown. Edit copy here. */
const TABS: Tab[] = [
  {
    id: "capture",
    label: "Capture",
    icon: Inbox,
    accent: "green",
    heading: "Get more leads in the door",
    desc: "Attract the right people, turn interest into leads, and keep your pipeline full - without a separate tool for every channel.",
    checklist: [
      "Core CRM & pipelines",
      "Forms, surveys & quizzes",
      "Websites & landing pages",
      "Missed-call text-back",
      "Chat widget / inbound DMs",
      "Ad & social lead sync",
    ],
    visual: "/image/1-capture-visual.png",
  },
  {
    id: "nurture",
    label: "Nurture",
    icon: MessagesSquare,
    accent: "gold",
    heading: "Keep leads warm, automatically",
    desc: "Every lead gets followed up with - every time - without a rep having to remember to send it.",
    checklist: [
      "Email & SMS sequences",
      "Lead scoring & tagging",
      "Auto-routing to the right rep",
      "Task reminders for your team",
      "Multi-channel drip campaigns",
      "Calendar & booking sync",
    ],
    visual: "/image/2-nurture-visual.png",
  },
  {
    id: "close",
    label: "Close",
    icon: Handshake,
    accent: "navy",
    heading: "Turn conversations into signed clients",
    desc: "Proposals, contracts, and payment collection live next to the lead record, so nothing gets handled outside the CRM.",
    checklist: [
      "Proposal & e-signature",
      "Invoicing & payment links",
      "Deal stage automation",
      "Client onboarding forms",
      "Subaccount auto-creation",
      "Won/lost reason tracking",
    ],
    visual: "/image/3-close-visual.png",
  },
  {
    id: "communicate",
    label: "Communicate",
    icon: PhoneIncoming,
    accent: "green",
    heading: "Never miss the phone",
    desc: "Every inbound call gets answered, qualified, and logged - 24/7 - so a missed call never turns into a lost job.",
    checklist: [
      "24/7 AI call answering",
      "Automatic lead qualification",
      "Smart routing to the right rep",
      "Call recording & transcription",
      "Campaign attribution on the record",
      "Missed-call text-back",
    ],
    visual: "/image/6-communicate-visual.svg",
  },
  {
    id: "team",
    label: "Run Your Team",
    icon: Users,
    accent: "gold",
    heading: "Manage the people doing the work",
    desc: "Time tracking, payroll, training, and inventory in the same system as the client work - no second platform.",
    checklist: [
      "Time tracking by job / client",
      "Payroll processing",
      "Staff onboarding & SOPs",
      "Video courses & quizzes",
      "Real-time inventory levels",
      "Material cost → invoicing",
    ],
    visual: "/image/7-team-visual.svg",
  },
  {
    id: "report",
    label: "Report",
    icon: BarChart3,
    accent: "green",
    heading: "Prove the ROI, without the spreadsheet",
    desc: "White-labeled dashboards update automatically, so clients see results the moment they log in - not once a month in an email.",
    checklist: [
      "Live client dashboards",
      "Automated monthly reports",
      "White-label branding",
      "Attribution by channel",
      "Custom KPI builder",
      "Exportable client PDFs",
    ],
    visual: "/image/4-report-visual.png",
  },
  {
    id: "retain",
    label: "Retain",
    icon: HeartHandshake,
    accent: "navy",
    heading: "Keep clients longer, without extra headcount",
    desc: "Standing support, health alerts, and renewal reminders mean retention isn't riding on one person remembering to follow up.",
    checklist: [
      "Client health alerts",
      "Renewal & upsell reminders",
      "Standing support team",
      "Client satisfaction surveys",
      "Escalation workflows",
      "Ongoing system tuning",
    ],
    visual: "/image/5-retain-visual.png",
  },
];

export default function FeatureTabs() {
  const [activeTab, setActiveTab] = useState("capture");

  return (
    <section id="product" className="section-alt feature-tabs relative overflow-hidden">
      <div 
        className="absolute top-0 right-0 pointer-events-none w-[250px] md:w-[350px] z-0" 
        style={{ transform: 'translate(25%, -25%)', opacity: 0.06, filter: 'invert(1)' }}
      >
        <img src="/watermark.svg" alt="" className="w-full h-auto" aria-hidden="true" />
      </div>
      <div className="container px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="section-head center mx-auto mb-8 md:mb-12">
          <div className="eyebrow" style={{ justifyContent: "center" }}>
            Inside the Platform
          </div>
          <h2>One platform for every stage of the client relationship.</h2>
          <p>
            All the tools your business needs to capture, run, and prove the work
            - in one place, whether that&apos;s a marketing campaign or a roof.
          </p>
        </div>

        <div className="tabs-wrap w-full">
          {/* Tab strip - scrollable on mobile */}
          <div
            className="tab-list flex snap-x flex-nowrap justify-start gap-2 overflow-x-auto scrollbar-hide pb-4 md:flex-wrap md:justify-center md:overflow-visible md:pb-0"
            role="tablist"
          >
            {TABS.map((tab) => (
              <button
                key={tab.id}
                className={`tab-btn shrink-0 snap-center whitespace-nowrap ${
                  activeTab === tab.id ? "active" : ""
                }`}
                onClick={() => setActiveTab(tab.id)}
                role="tab"
                aria-selected={activeTab === tab.id}
              >
                {tab.label}
              </button>
            ))}
          </div>

          <div className="feature-panel">
            {TABS.map((tab) => {
              const Icon = tab.icon;
              const accent = ACCENT[tab.accent];
              return (
                <div
                  key={tab.id}
                  className={`tab-panel ${activeTab === tab.id ? "active" : ""}`}
                  id={`ftab-${tab.id}`}
                >
                  <div className="feature-panel-grid grid grid-cols-1 items-center gap-8 lg:grid-cols-[1.1fr_1fr] lg:gap-12">
                    {/* Text side */}
                    <div>
                      <span
                        className={`mb-5 flex h-13 w-13 items-center justify-center rounded-2xl ${accent.badge}`}
                        style={{ width: 52, height: 52 }}
                      >
                        <Icon className="h-6 w-6" strokeWidth={1.8} />
                      </span>
                      <h3 className="text-[1.4rem] font-bold text-navy">
                        {tab.heading}
                      </h3>
                      <p className="mt-3 text-[1rem] leading-relaxed text-ink-soft">
                        {tab.desc}
                      </p>

                      <ul className="my-7 grid grid-cols-1 gap-x-6 gap-y-3 sm:grid-cols-2">
                        {tab.checklist.map((item) => (
                          <li
                            key={item}
                            className="flex items-start gap-2.5 text-[0.9rem] text-ink"
                          >
                            <span
                              className={`mt-0.5 flex h-[18px] w-[18px] shrink-0 items-center justify-center rounded-full ${accent.check}`}
                            >
                              <Check className="h-2.5 w-2.5 text-white" strokeWidth={3} />
                            </span>
                            {item}
                          </li>
                        ))}
                      </ul>

                      <Link
                        href="#contact"
                        className="btn btn-primary inline-flex"
                      >
                        Get Started Now
                        <ArrowRight className="h-4 w-4" />
                      </Link>
                    </div>

                    {/* Visual side: framed premium panel */}
                    <div
                      className={`relative overflow-hidden rounded-2xl border border-line bg-gradient-to-br ${accent.frame} to-mist p-4 shadow-[0_24px_60px_-30px_rgba(29,78,95,0.45)] sm:p-6`}
                    >
                      <div
                        className={`pointer-events-none absolute -right-14 -top-14 h-40 w-40 rounded-full bg-gradient-to-br ${accent.frame} to-transparent opacity-70 blur-2xl`}
                      />
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={tab.visual}
                        alt={`${tab.label} - ${tab.heading}`}
                        className="relative w-full rounded-xl"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
