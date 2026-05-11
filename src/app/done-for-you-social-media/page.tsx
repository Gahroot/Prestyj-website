"use client";

import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { ContentEnginePageLayout } from "@/components/sections/content-engine/content-engine-page-layout";
import { ContentEngineResultsDashboard } from "@/components/sections/content-engine/results-dashboard";
import { defaultContentEngineConfig } from "@/lib/content-engine/defaults";
import { ExitIntentPopup } from "@/components/effects/exit-intent-popup";
import { BatchAudienceSelector } from "@/components/sections/batch-video-ads/audience-selector";
import {
  HiddenCostTable,
  type HiddenCostRow,
} from "@/components/sections/batch-video-ads/hidden-cost-table";
import {
  Briefcase,
  Building2,
  Mic,
  Users,
  Wrench,
} from "lucide-react";

const DFY_AUDIENCES = [
  {
    id: "coaches",
    label: "Coaches & Course Creators",
    icon: Mic,
    headline: "Your personal brand IS the offer. Run it like one.",
    pain: "You\u2019re posting twice a week at 11pm. Your buyers live on 5 platforms. The math doesn\u2019t work.",
    outcome: "Brand + personal page + niche \u2014 270\u20132,700 posts/month across IG, TikTok, YouTube, LinkedIn, Threads.",
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
    pain: "Your client\u2019s organic is dead. Their pixel is starving. CPMs climb every week.",
    outcome: "Daily multi-platform output that warms the pixel and pre-qualifies cold traffic before they hit your ads.",
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
    outcome: "One vendor. One dashboard. $1,997\u2013$4,997/month. Brand + leadership + niche accounts on autopilot.",
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
    headline: "White-label volume your team can\u2019t physically ship.",
    pain: "Your social team caps at 30 posts/client/month. You\u2019re losing pitches to agencies promising daily multi-platform.",
    outcome: "Per-client swarms at your margin. Stop telling clients \u2018content is coming\u2019 on every weekly.",
    bullets: [
      "Per-brand strategy + brand kit",
      "Volume your editors can\u2019t match",
      "Resell at your standard markup",
    ],
  },
  {
    id: "service",
    label: "Service Business Owners",
    icon: Wrench,
    headline: "Be the local brand customers actually see.",
    pain: "You hired a \u2018social media person\u2019 for $4K/month. They post twice a week. Your competitor posts daily and gets the call.",
    outcome: "Daily posts across IG, FB, TikTok, YouTube, LinkedIn. Local voice. Job-site footage repurposed automatically.",
    bullets: [
      "Local trust + authority compounding daily",
      "Job footage \u2192 multi-platform content",
      "Cheaper than a part-time hire",
    ],
  },
];

const DFY_HIDDEN_COST_ROWS: HiddenCostRow[] = [
  {
    feature: "Monthly all-in cost",
    prestyj: "$1,997\u2013$4,997",
    agency: "$5K\u2013$15K retainer",
    ugc: "$3K\u2013$8K/month",
    inHouse: "$6K\u2013$10K loaded",
  },
  {
    feature: "Posts shipped per month",
    prestyj: "270\u20132,700",
    agency: "30\u201360",
    ugc: "8\u201320",
    inHouse: "60\u2013120",
  },
  {
    feature: "Effective cost per post",
    prestyj: "$0.74\u2013$7.40",
    agency: "$83\u2013$500",
    ugc: "$150\u2013$1,000",
    inHouse: "$66\u2013$200",
  },
  {
    feature: "Platforms covered",
    prestyj: "Up to 7",
    agency: "2\u20133",
    ugc: "1\u20132",
    inHouse: "2\u20133",
  },
  {
    feature: "Accounts run in parallel",
    prestyj: "Up to 3+",
    agency: "1",
    ugc: "1",
    inHouse: "1\u20132",
  },
  {
    feature: "Setup time",
    prestyj: "24 hours",
    agency: "4\u20136 weeks",
    ugc: "2\u20134 weeks",
    inHouse: "6\u201312 weeks hire + ramp",
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
    agency: "3\u20136 mo onboard",
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
    agency: "6\u201312 mo",
    ugc: "Per-creator deals",
    inHouse: "W2 / severance",
  },
];

const PAGE_URL = "https://prestyj.com/done-for-you-social-media";

const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  name: "Prestyj Content Swarm — Done-For-You Social Media",
  description:
    "AI-powered done-for-you social media swarm running multiple accounts (brand, personal brand, and niche pages) across Instagram, Facebook, TikTok, YouTube, LinkedIn, Threads, and X. Live in 24 hours from account access. Up to 2,700+ posts/month with a volume guarantee.",
  provider: {
    "@type": "Organization",
    name: "PRESTYJ",
    url: "https://prestyj.com",
    logo: "https://prestyj.com/icon-512.png",
  },
  serviceType: [
    "Social Media Management",
    "AI Content Generation",
    "Done-For-You Social Media",
    "Multi-Account Social Media",
    "Personal Brand Management",
    "Multi-Platform Publishing",
    "Content Marketing Automation",
  ],
  areaServed: "United States",
  url: PAGE_URL,
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "USD",
    lowPrice: "1997",
    highPrice: "4997",
    offerCount: "3",
    availability: "https://schema.org/InStock",
  },
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Content Swarm Plans",
    itemListElement: [
      {
        "@type": "Offer",
        name: "Minimum Plan",
        price: "1997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Minimum Plan — 1 account, 3 platforms, ~270 posts/month",
        },
      },
      {
        "@type": "Offer",
        name: "Pro Plan",
        price: "2997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Pro Plan — 2 accounts, 5 platforms, ~900 posts/month",
        },
      },
      {
        "@type": "Offer",
        name: "Max Plan",
        price: "4997",
        priceCurrency: "USD",
        itemOffered: {
          "@type": "Service",
          name: "Max Plan — 3 accounts, 7 platforms, ~2,700 posts/month",
        },
      },
    ],
  },
};

export default function DoneForYouSocialMediaPage() {
  return (
    <>
      <SafeJsonLd data={serviceJsonLd} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          {
            name: "Done-For-You Social Media",
            url: PAGE_URL,
          },
        ]}
      />
      <FAQJsonLd faqs={defaultContentEngineConfig.faq.faqs} />
      <ContentEnginePageLayout
        config={defaultContentEngineConfig}
        afterProofBar={<ContentEngineResultsDashboard />}
        afterSolution={
          <BatchAudienceSelector
            eyebrow="Built For"
            headline="Pick Who You Are"
            subhead="Same swarm. Different angles. We bend to your category \u2014 not the other way around."
            audiences={DFY_AUDIENCES}
          />
        }
        afterComparison={
          <div id="hidden-cost">
            <HiddenCostTable
              eyebrow="Hidden Cost Breakdown"
              headline="The Real Monthly Cost \u2014 Including What Nobody Mentions"
              subhead="Per-post math, ramp time, weekends, turnover. The line items that quietly double your effective spend."
              rows={DFY_HIDDEN_COST_ROWS}
              columns={{
                prestyj: "PRESTYJ Swarm",
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
