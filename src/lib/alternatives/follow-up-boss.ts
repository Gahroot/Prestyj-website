import type { AlternativePageContent } from "./types";

export const followUpBoss: AlternativePageContent = {
  slug: "follow-up-boss",
  type: "integration-partner",
  competitor: {
    name: "Follow Up Boss",
    shortName: "FUB",
    pricing: "$69-499/mo",
    website: "https://followupboss.com",
    description: "Leading CRM for real estate teams and brokerages",
  },
  meta: {
    title: "Follow Up Boss Alternative | Supercharge FUB with AI | Prestyj",
    description:
      "Not looking to replace Follow Up Boss? Add AI-powered instant response and lead reactivation to your existing FUB setup. See how Prestyj complements your CRM.",
    keywords: [
      "follow up boss alternative",
      "FUB alternative",
      "follow up boss AI",
      "FUB integration",
      "real estate CRM AI",
      "follow up boss automation",
    ],
  },
  hero: {
    badge: "FUB Integration",
    headline: "Supercharge Your Follow Up Boss with",
    headlineAccent: "AI-Powered Lead Response",
    subheadline:
      "You don't need to replace Follow Up Boss. Add instant AI response and dead lead reactivation while keeping the CRM you already love.",
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
      stat: "23%",
      description: "dead leads reactivated with AI outreach",
    },
  ],
  comparison: {
    features: [
      {
        feature: "CRM & Contact Management",
        prestyj: false,
        competitor: true,
        note: "FUB excels at this—keep using it",
      },
      {
        feature: "Instant AI Lead Response",
        prestyj: true,
        competitor: false,
        note: "Add sub-60-second response to your FUB leads",
      },
      {
        feature: "Dead Lead Reactivation",
        prestyj: true,
        competitor: false,
        note: "Revive your cold FUB database automatically",
      },
      {
        feature: "24/7 Lead Engagement",
        prestyj: true,
        competitor: false,
        note: "AI responds nights and weekends",
      },
      {
        feature: "Pipeline Management",
        prestyj: false,
        competitor: true,
      },
      {
        feature: "Team Collaboration",
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
        feature: "Lead Qualification",
        prestyj: true,
        competitor: "Manual",
        note: "AI qualifies before handing off",
      },
    ],
    competitorPricing: {
      price: "$69-499",
      period: "/month",
      note: "Excellent CRM, limited automation",
      pros: [
        "Industry-leading CRM for real estate",
        "Excellent team collaboration features",
        "Robust pipeline management",
        "Wide integration ecosystem",
      ],
      cons: [
        "No built-in instant AI response",
        "Manual follow-up required",
        "Dead leads require manual outreach",
      ],
    },
    prestyjPricing: {
      price: "Custom pricing",
      note: "Integrates with your FUB",
      pros: [
        "Instant AI response for FUB leads",
        "Dead lead reactivation campaigns",
        "24/7 automated engagement",
        "Syncs appointments back to FUB",
      ],
      cons: [],
    },
  },
  whySwitch: [
    {
      icon: "Zap",
      title: "Instant Lead Response",
      description:
        "When a lead hits FUB, AI responds in under 60 seconds. No more speed-to-lead problems.",
    },
    {
      icon: "RefreshCw",
      title: "Revive Your Dead Database",
      description:
        "Those thousands of old leads in FUB? AI can re-engage them automatically and find the ones ready to transact now.",
    },
    {
      icon: "Clock",
      title: "24/7 Coverage",
      description:
        "AI handles nights, weekends, and holidays while you sleep. Every lead gets instant engagement.",
    },
    {
      icon: "Handshake",
      title: "Seamless Integration",
      description:
        "Prestyj works alongside FUB—qualified leads and booked appointments sync back to your CRM.",
    },
  ],
  whenCompetitorFits: [
    "You need a CRM for pipeline and contact management (keep using FUB!)",
    "You want team collaboration and assignment rules",
    "You need robust reporting and analytics",
    "Your team is already trained on FUB workflows",
  ],
  whenPrestyjFits: [
    "You want to add instant AI response to your FUB leads",
    "You have dead leads in FUB you want to reactivate",
    "You need 24/7 lead engagement without hiring staff",
    "You want AI to qualify leads before they hit your pipeline",
    "You're happy with FUB but want to supercharge it",
  ],
  relatedResources: [
    {
      href: "/alternatives/real-geeks",
      title: "Prestyj + Real Geeks",
      description: "Add AI response to Real Geeks",
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
    headline: "Ready to Supercharge Your Follow Up Boss?",
    subheadline:
      "Keep the CRM you love. Add the AI response speed you need. See how Prestyj integrates with Follow Up Boss.",
    buttonText: "Book Your Free Demo",
    buttonHref: "/book-demo",
    footnote: "Works alongside your existing FUB setup. No migration required.",
  },
};
