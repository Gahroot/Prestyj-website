import type { AlternativePageContent } from "./types";

export const boomtown: AlternativePageContent = {
  slug: "boomtown",
  type: "integration-partner",
  competitor: {
    name: "BoomTown",
    shortName: "BoomTown",
    pricing: "$1,000+/mo",
    website: "https://boomtownroi.com",
    description: "Enterprise real estate platform with CRM, lead generation, and AI texting",
  },
  meta: {
    title: "BoomTown Alternative | Add AI Speed to Your CRM | Prestyj",
    description:
      "Not replacing BoomTown? Add AI-powered instant lead response and database reactivation to your existing BoomTown setup. Keep your CRM, add the speed.",
    keywords: [
      "boomtown alternative",
      "boomtown AI",
      "boomtown integration",
      "boomtown lead response",
      "real estate CRM AI",
      "boomtown automation",
    ],
  },
  hero: {
    badge: "BoomTown Integration",
    headline: "Keep Your BoomTown CRM,",
    headlineAccent: "Add Instant AI Response",
    subheadline:
      "You don't need to replace BoomTown's powerful platform. Add sub-60-second AI response and dead lead reactivation while keeping the CRM and tools you already use.",
  },
  industryStats: [
    {
      stat: "47 sec",
      description: "average AI response time",
    },
    {
      stat: "78%",
      description: "of buyers choose first responder",
    },
    {
      stat: "$47K",
      description: "avg. recovered revenue from dead leads",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Full CRM Platform",
        prestyj: false,
        competitor: true,
        note: "BoomTown excels here—keep using it",
      },
      {
        feature: "Instant AI Lead Response",
        prestyj: true,
        competitor: "Limited",
        note: "Prestyj responds in under 60 seconds, 24/7",
      },
      {
        feature: "Lead Generation",
        prestyj: false,
        competitor: true,
        note: "BoomTown's strength—continue using it",
      },
      {
        feature: "Dead Lead Reactivation",
        prestyj: true,
        competitor: false,
        note: "Automatically revive your old BoomTown database",
      },
      {
        feature: "IDX Website",
        prestyj: false,
        competitor: true,
      },
      {
        feature: "AI Appointment Booking",
        prestyj: true,
        competitor: false,
        note: "Automatically books qualified leads to your calendar",
      },
      {
        feature: "24/7 Lead Engagement",
        prestyj: true,
        competitor: "Texting only",
        note: "Full conversation AI, not just templates",
      },
      {
        feature: "Simple Setup",
        prestyj: true,
        competitor: false,
        note: "BoomTown requires significant onboarding",
      },
    ],
    competitorPricing: {
      price: "$1,000+",
      period: "/month",
      note: "Enterprise platform with extensive features",
      pros: [
        "Comprehensive all-in-one platform",
        "Robust lead generation and IDX website",
        "Team management and collaboration",
        "Extensive training and support",
      ],
      cons: [
        "Complex setup and steep learning curve",
        "Enterprise-focused, overwhelming for small teams",
        "AI texting is template-based, not conversational",
        "Manual follow-up still required for dead leads",
      ],
    },
    prestyjPricing: {
      price: "Custom pricing",
      note: "Works alongside your BoomTown setup",
      pros: [
        "Instant AI response for all leads",
        "Dead lead reactivation campaigns",
        "24/7 conversational AI engagement",
        "Syncs appointments back to BoomTown",
      ],
      cons: [],
    },
  },
  whySwitch: [
    {
      icon: "Zap",
      title: "True Speed-to-Lead",
      description:
        "BoomTown is powerful but complex. When a lead comes in, Prestyj AI responds in under 60 seconds—before you even see the notification.",
    },
    {
      icon: "RefreshCw",
      title: "Revive Your Dead Database",
      description:
        "Thousands of leads sitting cold in BoomTown? AI can automatically re-engage them and identify who's ready to transact now.",
    },
    {
      icon: "MessageCircle",
      title: "Conversational AI, Not Templates",
      description:
        "BoomTown's AI texting uses templates. Prestyj has full conversations, qualifies leads, handles objections, and books appointments.",
    },
    {
      icon: "Clock",
      title: "Zero Learning Curve",
      description:
        "BoomTown takes weeks to master. Prestyj is done-for-you—AI handles everything while you focus on closing deals.",
    },
  ],
  whenCompetitorFits: [
    "You need lead generation and an IDX website",
    "You want an all-in-one enterprise platform",
    "You're running a large team that needs robust collaboration tools",
    "You have time to invest in learning a complex system",
    "You're already invested in the BoomTown ecosystem",
  ],
  whenPrestyjFits: [
    "You want to add instant AI response to your BoomTown leads",
    "You have dead leads in BoomTown that need reactivation",
    "You need 24/7 lead engagement without the complexity",
    "You're overwhelmed by BoomTown's features and want simplicity",
    "You want AI to handle qualification and booking automatically",
    "You're happy with BoomTown's CRM but want faster lead response",
  ],
  relatedResources: [
    {
      href: "/alternatives/follow-up-boss",
      title: "Prestyj + Follow Up Boss",
      description: "Add AI response to another leading CRM",
    },
    {
      href: "/solutions/lead-reactivation",
      title: "Lead Reactivation",
      description: "How we revive dead CRM databases",
    },
    {
      href: "/solutions/speed-to-lead",
      title: "Speed to Lead",
      description: "Why instant response wins deals",
    },
  ],
  cta: {
    headline: "Ready to Simplify Your Lead Response?",
    subheadline:
      "Keep BoomTown's CRM and lead gen. Add instant AI response and database reactivation without the complexity.",
    buttonText: "Book Your Free Demo",
    buttonHref: "/book-demo",
    footnote: "Works alongside your existing BoomTown setup. No migration required.",
  },
};
