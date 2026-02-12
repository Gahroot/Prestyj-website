import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const voiceflow: AlternativePageContent = createAlternativePage({
  slug: "voiceflow",
  type: "direct-competitor",
  competitor: {
    name: "Voiceflow",
    shortName: "Voiceflow",
    pricing: "$0-100/mo + usage fees",
    website: "https://voiceflow.com",
    description: "Platform for building AI voice and chat agents with drag-and-drop flows",
  },
  meta: {
    title: "Voiceflow Alternative: Done-For-You AI Agents | Prestyj",
    description:
      "Looking for a Voiceflow alternative? Compare Prestyj vs Voiceflow: Prestyj deploys AI voice agents in hours, not weeks. No building, no coding, just results.",
    keywords: [
      "voiceflow alternative",
      "voiceflow competitor",
      "voiceflow pricing",
      "voiceflow vs prestyj",
      "ai voice agent platform alternative",
      "no-code voice AI alternative",
      "conversational AI platform",
      "voice agent builder alternative",
    ],
  },
  hero: {
    badge: "Voiceflow Alternative",
    subheadline:
      "Voiceflow is a powerful DIY platform—if you have weeks to build agents. Prestyj deploys done-for-you AI voice agents in hours, with engineering included.",
  },
  industryStats: [
    {
      stat: "Hours vs Weeks",
      description: "Prestyj deployment time vs DIY agent building",
    },
    {
      stat: "Included",
      description: "Prestyj engineering & setup vs DIY",
    },
    {
      stat: "$0",
      description: "Prestyj engineering costs",
    },
    {
      stat: "24/7",
      description: "Prestyj AI voice availability",
    },
  ],
  comparison: {
    features: [
      {
        feature: "Model",
        prestyj: "Done-for-you service",
        competitor: "DIY platform",
        note: "Voiceflow requires building agents yourself",
      },
      {
        feature: "Time to First Agent",
        prestyj: "Hours to days",
        competitor: "Weeks to months",
        note: "Voiceflow requires design, build, test, iterate",
      },
      {
        feature: "Engineering Required",
        prestyj: "Included",
        competitor: "You build it",
        note: "Voiceflow needs technical or design resources",
      },
      buildAlternativeFeature(STANDARD_FEATURES.AI_VOICE, true),
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      {
        feature: "Ongoing Management",
        prestyj: "We handle updates",
        competitor: "You maintain flows",
        note: "Voiceflow requires ongoing flow maintenance",
      },
      {
        feature: "Customization",
        prestyj: "We build to your needs",
        competitor: "You design everything",
        note: "Voiceflow offers more control if you have the skills",
      },
      {
        feature: "Setup Cost",
        prestyj: "Included in subscription",
        competitor: "Your time or hiring",
        note: "Voiceflow's hidden cost is engineering hours",
      },
      {
        feature: "Iterating",
        prestyj: "We optimize for you",
        competitor: "You redesign flows",
        note: "Improvements require Voiceflow work",
      },
    ],
    competitorPricing: {
      price: "$0-100",
      period: "/month + usage fees",
      note: "Per-message and per-minute charges on paid plans",
      pros: [
        "Powerful visual flow builder",
        "Complete control over agent logic",
        "Supports voice, chat, and IVR",
        "Strong community and templates",
        "Good for teams with technical resources",
      ],
      cons: [
        "Requires significant time investment",
        "Need technical or design skills",
        "Ongoing maintenance required",
        "Learning curve for complex flows",
        "Hidden cost of engineering time",
        "You're responsible for performance",
      ],
    },
    prestyjPricingOverrides: {
      price: "Custom",
      period: "based on usage",
      note: "Includes setup, engineering, and ongoing optimization",
      pros: [
        "Done-for-you deployment",
        "No technical skills required",
        "We handle maintenance",
        "Faster time to value",
        "Performance guaranteed",
        "Ongoing optimization included",
      ],
      cons: [
        "Less control over agent design",
        "Custom flows require our team",
        "Not a platform for builders",
      ],
    },
  },
  whySwitch: [
    {
      icon: "Zap",
      title: "Deploy in Hours, Not Weeks",
      description:
        "Voiceflow requires designing flows, testing, iterating—weeks of work. Prestyj deploys working AI agents in hours.",
    },
    {
      icon: "Puzzle",
      title: "No Engineering Required",
      description:
        "With Voiceflow, you need technical resources or the time to learn. Prestyj includes all engineering—you just provide the requirements.",
    },
    {
      icon: "TrendingUp",
      title: "We Optimize for Results",
      description:
        "Voiceflow agents perform only as well as you design them. Prestyj monitors performance and optimizes continuously.",
    },
    {
      icon: "Phone",
      title: "Focus on Your Business",
      description:
        "Stop managing conversation flows. Let Prestyj handle AI operations while you focus on customers and growth.",
    },
  ],
  whenCompetitorFits: [
    "You have technical resources and want full control",
    "You need to build and maintain multiple agent types",
    "You have the time to invest in learning the platform",
    "You want to build AI agents as a core competency",
    "You need visual debugging and flow inspection tools",
  ],
  whenPrestyjFits: [
    "You need results quickly without building yourself",
    "You don't have technical resources to dedicate",
    "You want guaranteed performance, not DIY responsibility",
    "You prefer done-for-you over DIY",
    "You want ongoing optimization included",
    "Your time is better spent on your core business",
  ],
  relatedResources: [
    {
      href: "/blog/done-for-you-ai-agents-guide",
      title: "Done-for-You AI Agents Guide",
      description: "When to buy vs build AI automation",
    },
    {
      href: "/blog/build-vs-buy-ai-sales-agents",
      title: "Build vs Buy for AI Sales Agents",
      description: "A CFO's guide to the decision",
    },
    {
      href: "/best-for/done-for-you-ai",
      title: "Done-for-You AI Solutions",
      description: "Why businesses choose managed AI",
    },
  ],
  cta: {
    headline: "Skip the DIY. Get Deployed AI Agents.",
    subheadline:
      "Stop spending weeks building flows that might not work. Get deployed AI voice agents in hours with engineering included.",
    buttonText: "Talk to AI Experts",
    buttonHref: "/book-demo",
    footnote: "No building required. Engineering included.",
  },
});
