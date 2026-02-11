import type { AlternativePageContent } from "./types";
import { createAlternativePage } from "@/lib/content-factory";

export const blandAiAlt: AlternativePageContent = createAlternativePage({
  slug: "bland-ai",
  type: "direct-competitor",
  competitor: {
    name: "Bland.ai",
    shortName: "Bland.ai",
    pricing: "$0.09/min outbound, $0.04/min inbound, $15/phone number",
    website: "https://www.bland.ai",
    description: "Developer-focused AI voice calling platform",
  },
  meta: {
    title: "Best Bland.ai Alternative for Service Businesses | Prestyj",
    description:
      "Looking for a Bland.ai alternative? Prestyj offers done-for-you AI voice agents with industry-specific templates, human oversight, and flat pricing—no coding required.",
    keywords: [
      "bland.ai alternative",
      "bland ai alternatives",
      "ai voice calling alternative",
      "bland ai for business",
      "bland vs prestyj",
    ],
  },
  hero: {
    badge: "Bland.ai Alternative",
    subheadline:
      "Bland.ai is powerful but requires developers. Prestyj gives you the same AI voice capabilities with pre-built templates, industry-specific agents, and white-glove setup.",
  },
  industryStats: [
    {
      stat: "78%",
      description: "of customers choose the first business that responds to their inquiry",
    },
    {
      stat: "21x",
      description:
        "more likely to convert when responding within 5 minutes vs 30 minutes",
    },
    {
      stat: "40%",
      description: "of ad spend is wasted on leads that never get a fast response",
    },
    {
      stat: "34%",
      description: "increase in close rates our clients see from instant response",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Setup",
        prestyj: true,
        competitor: false,
        note: "Pre-built agents, no coding",
      },
      {
        feature: "Industry Templates",
        prestyj: true,
        competitor: false,
        note: "Real estate, HVAC, roofing, dental, etc.",
      },
      {
        feature: "Human Review",
        prestyj: true,
        competitor: false,
        note: "Optional human oversight on calls",
      },
      {
        feature: "Pricing Model",
        prestyj: "Flat monthly",
        competitor: "Per-minute billing",
        note: "Predictable costs",
      },
      {
        feature: "Lead Qualification",
        prestyj: "Built-in workflows",
        competitor: "You build it",
        note: "Out of the box",
      },
      {
        feature: "Calendar Booking",
        prestyj: true,
        competitor: false,
        note: "Direct to your calendar",
      },
      {
        feature: "CRM Integration",
        prestyj: "50+ integrations",
        competitor: "API only",
        note: "Follow Up Boss, ServiceTitan, etc.",
      },
      {
        feature: "Support",
        prestyj: "White-glove setup",
        competitor: "Self-serve / Discord",
        note: "We build for you",
      },
    ],
    competitorPricing: {
      price: "$0.09",
      period: "/min",
      note: "+ $15/month per phone number, plus usage-based billing can vary",
      pros: [
        "Powerful API for developers",
        "Flexible infrastructure",
        "Good for technical teams",
        "Self-hosting options",
      ],
      cons: [
        "Requires coding knowledge",
        "No pre-built templates",
        "Per-minute billing adds up",
        "Setup time is on you",
        "No industry-specific workflows",
      ],
    },
    prestyjPricingOverrides: {
      price: "Custom pricing",
      note: "Flat monthly fee based on volume. No per-minute surprises.",
      pros: [
        "Done-for-you setup",
        "Industry-specific templates",
        "Flat monthly pricing",
        "White-glove support",
        "Human oversight available",
        "50+ integrations out of the box",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Brain",
      title: "No Coding Required",
      description:
        "Bland.ai is great for developers. Prestyj is great for businesses who want AI agents that just work, without building everything from scratch.",
    },
    {
      icon: "Building2",
      title: "Industry-Specific Agents",
      description:
        "Pre-built for real estate, HVAC, roofing, dental, and more. Bland.ai is generic—you'd need to build industry workflows yourself.",
    },
    {
      icon: "DollarSign",
      title: "Predictable Flat Pricing",
      description:
        "Bland.ai charges per minute. Your bill spikes on high-call months. Prestyj is flat monthly—predictable and scalable.",
    },
    {
      icon: "HeartHandshake",
      title: "White-Glove Setup",
      description:
        "Bland.ai is DIY. Prestyj includes setup, customization, and ongoing support. We build your agents for you.",
    },
  ],
  whenCompetitorFits: [
    "You have an in-house development team",
    "You need full API control and custom infrastructure",
    "You want to self-host or build everything from scratch",
  ],
  whenPrestyjFits: [
    "You want AI agents working this week, not months",
    "You need industry-specific workflows out of the box",
    "You prefer flat pricing over per-minute billing",
    "You want support and setup included",
  ],
  relatedResources: [
    {
      href: "/blog/ai-voice-agent-pricing-guide",
      title: "AI Voice Agent Pricing Guide",
      description: "Compare pricing models across platforms",
    },
    {
      href: "/alternatives/vapi",
      title: "Vapi.ai Alternatives",
      description: "Developer platforms compared",
    },
    {
      href: "/best-for/real-estate-teams",
      title: "AI for Real Estate Teams",
      description: "Industry-specific solution",
    },
  ],
  cta: {
    headline: "Get AI Voice Agents Without the Development Work",
    subheadline:
      "Same capabilities as Bland.ai, with done-for-you setup and flat pricing. See it in action.",
    buttonText: "Book Demo",
    buttonHref: "/book-demo",
  },
});
