"use client";

import type { ReactElement } from "react";
import { ExitIntentPopup } from "@/components/effects/exit-intent-popup";
import { BatchAudienceSelector } from "@/components/sections/batch-video-ads/audience-selector";
import {
  HiddenCostTable,
  type HiddenCostRow,
} from "@/components/sections/batch-video-ads/hidden-cost-table";
import { ContentEnginePageLayout } from "@/components/sections/content-engine/content-engine-page-layout";
import { ContentEngineResultsDashboard } from "@/components/sections/content-engine/results-dashboard";
import { CitationStatsSection } from "@/components/sections/citation-stats-section";
import { replaceAHireConfig } from "@/lib/content-engine/replace-a-hire-config";
import { Briefcase, Building2, Mic, Users, Wrench } from "lucide-react";

const AUDIENCES = [
  {
    id: "coaches",
    label: "Coaches & Course Creators",
    icon: Mic,
    headline: "Your personal brand IS the offer. Run it like one.",
    pain: "You’re posting twice a week at 11pm. Your buyers live on 5 platforms. The math doesn’t work.",
    outcome:
      "Brand + personal page + niche — 270–2,700 posts/month across IG, TikTok, YouTube, LinkedIn, Threads.",
    bullets: [
      "Founder-personality content at scale",
      "Authority hooks tested across 7 platforms",
      "Same content powers organic + paid",
    ],
  },
  {
    id: "media-buyers",
    label: "Media Buyers",
    icon: Users,
    headline: "Organic feeds your pixel. We keep it fed.",
    pain: "Your client’s organic is dead. Their pixel is starving. CPMs climb every week.",
    outcome:
      "Daily multi-platform output that warms the pixel and pre-qualifies cold traffic before they hit your ads.",
    bullets: [
      "Native posts your retargeting can chase",
      "Hook A/B testing before paid spend",
      "Cross-channel signal for Advantage+",
    ],
  },
  {
    id: "cmos",
    label: "CMOs & Heads of Growth",
    icon: Briefcase,
    headline: "Replace 3 vendors with one swarm.",
    pain: "Social agency: $12K. Content shop: $8K. Personal-brand ghostwriter: $5K. Three contracts, three slack channels, one mediocre feed.",
    outcome:
      "One vendor. One dashboard. $1,997–$4,997/month. Brand + leadership + niche accounts on autopilot.",
    bullets: [
      "Consolidate brand + exec + niche",
      "Weekly reporting on what shipped",
      "Pricing your CFO will sign without escalation",
    ],
  },
  {
    id: "agencies",
    label: "Agency Owners",
    icon: Building2,
    headline: "White-label volume your team can’t physically ship.",
    pain: "Your social team caps at 30 posts/client/month. You’re losing pitches to agencies promising daily multi-platform.",
    outcome:
      "Per-client swarms at your margin. Stop telling clients ‘content is coming’ on every weekly.",
    bullets: [
      "Per-brand strategy + brand kit",
      "Volume your editors can’t match",
      "Resell at your standard markup",
    ],
  },
  {
    id: "service",
    label: "Service Business Owners",
    icon: Wrench,
    headline: "Be the local brand customers actually see.",
    pain: "You hired a ‘social media person’ for $4K/month. They post twice a week. Your competitor posts daily and gets the call.",
    outcome:
      "Daily posts across IG, FB, TikTok, YouTube, LinkedIn. Local voice. Job-site footage repurposed automatically.",
    bullets: [
      "Local trust + authority compounding daily",
      "Job footage → multi-platform content",
      "Cheaper than a part-time hire",
    ],
  },
];

const HIDDEN_COST_ROWS: HiddenCostRow[] = [
  {
    feature: "Monthly all-in cost",
    prestyj: "$1,997–$4,997",
    agency: "$5K–$15K retainer",
    ugc: "$3K–$8K/month",
    inHouse: "$6K–$10K loaded",
  },
  {
    feature: "Posts shipped per month",
    prestyj: "270–2,700",
    agency: "30–60",
    ugc: "8–20",
    inHouse: "60–120",
  },
  {
    feature: "Effective cost per post",
    prestyj: "$0.74–$7.40",
    agency: "$83–$500",
    ugc: "$150–$1,000",
    inHouse: "$66–$200",
  },
  {
    feature: "Platforms covered",
    prestyj: "Up to 7",
    agency: "2–3",
    ugc: "1–2",
    inHouse: "2–3",
  },
  {
    feature: "Accounts run in parallel",
    prestyj: "Up to 3+",
    agency: "1",
    ugc: "1",
    inHouse: "1–2",
  },
  {
    feature: "Setup time",
    prestyj: "24 hours",
    agency: "4–6 weeks",
    ugc: "2–4 weeks",
    inHouse: "6–12 weeks hire + ramp",
  },
  {
    feature: "Hidden cost: management overhead",
    prestyj: "$0 (we run it)",
    agency: "$0 (they run it)",
    ugc: "~5 hrs/week briefing",
    inHouse: "~10 hrs/week managing",
  },
  {
    feature: "Hidden cost: weekends & holidays",
    prestyj: "posts anyway",
    agency: "goes dark",
    ugc: "goes dark",
    inHouse: "goes dark + PTO",
  },
  {
    feature: "Hidden cost: ramp / sick / quit",
    prestyj: "never",
    agency: "3–6 mo onboard",
    ugc: "per-creator churn",
    inHouse: "6 mo / $15K replace",
  },
  {
    feature: "Brand + personal brand + niche",
    prestyj: true,
    agency: false,
    ugc: false,
    inHouse: false,
  },
  {
    feature: "Contract length",
    prestyj: "Month-to-month",
    agency: "6–12 mo",
    ugc: "Per-creator deals",
    inHouse: "W2 / severance",
  },
];

export function AIContentDepartmentClient(): ReactElement {
  return (
    <>
      <ContentEnginePageLayout
        config={replaceAHireConfig}
        afterProofBar={
          <>
            <ContentEngineResultsDashboard />
            <CitationStatsSection
              statIds={[
                "social-dfy-real-loaded-cost",
                "social-agency-post-volume",
                "social-platform-cadence-short-form",
                "social-effective-cost-per-post",
              ]}
              eyebrow="Done-for-you social media benchmarks"
              title="Cite the economics behind the AI Content Department."
              description="Permanent statistics for buyers comparing done-for-you social media, managed social media services, in-house hires, and high-volume AI content operations."
              cta={{
                label: "See the social media statistics",
                href: "/statistics#done-for-you-social-media-economics",
              }}
              className="bg-muted/20 border-border/50 border-y"
            />
          </>
        }
        afterSolution={
          <BatchAudienceSelector
            eyebrow="Built For"
            headline="Pick Who You Are"
            subhead="Same AI agent. Different angles. We bend to your category — not the other way around."
            audiences={AUDIENCES}
          />
        }
        afterComparison={
          <div id="hidden-cost">
            <HiddenCostTable
              eyebrow="Hidden Cost Breakdown"
              headline="The Real Monthly Cost — Including What Nobody Mentions"
              subhead="Per-post math, ramp time, weekends, turnover. The line items that quietly double your effective spend."
              rows={HIDDEN_COST_ROWS}
              columns={{
                prestyj: "AI Content Department",
                agency: "Social Agency",
                ugc: "UGC Creator",
                inHouse: "In-House Hire",
              }}
            />
          </div>
        }
      />
      <ExitIntentPopup />
    </>
  );
}
