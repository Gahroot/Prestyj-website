import { Clock, DollarSign, Users, Building2 } from "lucide-react";
import type { ComparePageData, CompareMetadata } from "../types";

export const structurelyCompareData: ComparePageData = {
  slug: "prestyj-vs-structurely",
  competitorName: "Structurely",
  hero: {
    badge: "Enterprise Comparison",
    title: "Prestyj vs Structurely",
    titleAccent: "Which Scales for Enterprise?",
    subtitle:
      "Structurely (Aisa Holmes) is popular with individual agents and small teams. But can it handle the demands of 50+ office franchise operations?",
    description: "",
  },
  stats: [
    {
      value: "$179-499",
      label: "Structurely monthly range",
    },
    {
      value: "30 seats",
      label: "max on Structurely's top tier",
    },
    {
      value: "225",
      label: "leads/month max on Build tier",
    },
    {
      value: "50+",
      label: "offices Prestyj serves",
    },
  ],
  pricing: {
    prestyj: {
      name: "Prestyj",
      price: "Custom pricing",
      priceSubtext: "Scaled for your operation",
      highlight: true,
      features: [
        { text: "Built for 50+ office operations", included: true },
        { text: "Unlimited leads and locations", included: true },
        { text: "Proprietary AI technology", included: true },
        { text: "Transparent billing, no surprises", included: true },
      ],
    },
    competitor: {
      name: "Structurely",
      price: "$179-499",
      priceSubtext: "/month or $3/lead pricing",
      features: [
        {
          text: "Good for small teams and individual agents",
          included: true,
        },
        {
          text: "57% reported response rate",
          included: true,
        },
        {
          text: "Max 30 seats, 225 leads/month on top tier",
          included: false,
        },
        {
          text: "AI shared with CINC platform",
          included: false,
        },
        {
          text: "Reported billing/cancellation issues",
          included: false,
        },
      ],
    },
  },
  features: [
    {
      feature: "Built for Enterprise Scale",
      prestyj: true,
      competitor: false,
      note: "Structurely targets agents handling 50-225 leads/month",
    },
    {
      feature: "Multi-Office Management",
      prestyj: true,
      competitor: false,
      note: "No documented enterprise features for 50+ office operations",
    },
    {
      feature: "AI Text Conversations",
      prestyj: true,
      competitor: true,
    },
    {
      feature: "AI Voice Assistants",
      prestyj: true,
      competitor: true,
    },
    {
      feature: "Proprietary AI Technology",
      prestyj: true,
      competitor: false,
      note: "Structurely AI is shared via CINC partnership",
    },
    {
      feature: "Predictable Billing",
      prestyj: true,
      competitor: false,
      note: "Users report billing issues including post-cancellation charges",
    },
    {
      feature: "Enterprise Support",
      prestyj: true,
      competitor: "Limited",
      note: "Reports of poor support responsiveness and ghosting",
    },
    {
      feature: "Portfolio-Level Reporting",
      prestyj: true,
      competitor: false,
    },
  ],
  whySwitch: {
    title: "Why Franchise Operations Choose Prestyj",
    description: "Key reasons enterprise operations outgrow Structurely",
    reasons: [
      {
        icon: Building2,
        title: "Built for Enterprise Scale",
        description:
          "Structurely's pricing tiers cap at 30 seats and 225 leads/month. Prestyj is architected for franchise operations handling thousands of leads across 50+ offices.",
      },
      {
        icon: Users,
        title: "Proprietary Technology",
        description:
          "Structurely's AI powers CINC's platform too—you're using shared technology. Prestyj's AI is built exclusively for your operation.",
      },
      {
        icon: DollarSign,
        title: "Reliable Billing",
        description:
          "Multiple reports of Structurely billing issues including $1,300+ charged after cancellation. Prestyj pricing is transparent with no billing surprises.",
      },
      {
        icon: Clock,
        title: "True Multi-Location Support",
        description:
          "Coordinate lead response across your entire portfolio with centralized dashboards, standardized workflows, and office-level accountability.",
      },
    ],
  },
  relatedResources: [
    {
      title: "Prestyj vs Conversica",
      description: "Compare enterprise AI platforms",
      href: "/compare/prestyj-vs-conversica",
      linkText: "Read comparison",
    },
    {
      title: "Structurely Alternative",
      description: "Full alternative analysis",
      href: "/alternatives/structurely",
      linkText: "View analysis",
    },
    {
      title: "Best for Franchises",
      description: "Why franchise operations choose Prestyj",
      href: "/best-for/real-estate-franchises",
      linkText: "Learn more",
    },
  ],
  cta: {
    title: "Ready to Scale Beyond Structurely?",
    description:
      "Book a demo to see how Prestyj handles enterprise-scale lead response across your entire franchise or regional network.",
    buttonText: "Book Your Enterprise Demo",
    buttonHref: "/book-demo",
    disclaimer: "See multi-office capabilities. No commitment required.",
  },
};

export const structurelyMetadata: CompareMetadata = {
  slug: "prestyj-vs-structurely",
  competitorName: "Structurely",
  title: "Prestyj vs Structurely: Enterprise Real Estate AI Comparison",
  description:
    "Compare Prestyj and Structurely for franchise and multi-office operations. Structurely focuses on small teams (50-225 leads/mo). See which scales for 50+ office brokerages.",
  keywords: [
    "Structurely alternative",
    "Structurely vs Prestyj",
    "Prestyj vs Structurely",
    "Structurely alternative enterprise",
    "Structurely franchise",
    "AI lead response comparison",
    "Structurely pricing",
    "Structurely review",
    "real estate AI chatbot",
    "Aisa Holmes alternative",
  ],
};
