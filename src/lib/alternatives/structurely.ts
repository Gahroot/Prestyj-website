import type { AlternativePageContent } from "./types";
import {
  createAlternativePage,
  buildAlternativeFeature,
  STANDARD_FEATURES,
} from "@/lib/content-factory";

export const structurely: AlternativePageContent = createAlternativePage({
  slug: "structurely",
  type: "direct-competitor",
  competitor: {
    name: "Structurely",
    pricing: "$450/mo (250 leads)",
    website: "https://structurely.com",
    description:
      "AI assistant for real estate lead qualification and appointment setting",
  },
  meta: {
    title: "Best Structurely Alternative for Real Estate | Prestyj",
    description:
      "Looking for a Structurely alternative? Compare Prestyj vs Structurely: built-in CRM, lead reactivation, no per-lead limits. See why agents are switching.",
    keywords: [
      "structurely alternative",
      "structurely vs prestyj",
      "structurely competitors",
      "AI lead qualification",
      "real estate AI assistant",
    ],
  },
  hero: {
    badge: "Structurely Alternative",
    subheadline:
      "Both platforms offer AI-powered lead qualification. But if you're looking for lead reactivation and an all-in-one solution, there's a better option.",
  },
  industryStats: [
    {
      stat: "47 sec",
      description: "average Prestyj response time",
    },
    {
      stat: "23%",
      description: "of dead leads reactivate with proper outreach",
    },
    {
      stat: "80%",
      description: "of leads go cold due to slow response",
    },
  ],
  comparison: {
    features: [
      buildAlternativeFeature(STANDARD_FEATURES.AI_TEXT, true),
      buildAlternativeFeature(STANDARD_FEATURES.AI_VOICE, true),
      buildAlternativeFeature(
        STANDARD_FEATURES.BUILT_IN_CRM,
        false,
        "Structurely requires external CRM"
      ),
      {
        feature: "Lead Reactivation",
        prestyj: true,
        competitor: false,
        note: "Prestyj specializes in reviving dead leads",
      },
      {
        feature: "Per-Lead Limits",
        prestyj: false,
        competitor: true,
        note: "Structurely caps at 250 leads/mo on base plan",
      },
      buildAlternativeFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
      buildAlternativeFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
      {
        feature: "Done-For-You Setup",
        prestyj: true,
        competitor: false,
        note: "Prestyj handles everything for you",
      },
    ],
    competitorPricing: {
      price: "$450",
      period: "/month",
      note: "250 lead limit",
      pros: ["Established platform", "AI voice calling included"],
      cons: [
        "Per-lead caps on base plan",
        "No built-in CRM",
        "Limited to new lead response (no reactivation)",
      ],
    },
    prestyjPricingOverrides: {
      price: "Custom pricing",
      note: "Based on your needs",
      pros: [
        "Unlimited lead handling",
        "Built-in CRM included",
        "Lead reactivation included",
        "Done-for-you setup and management",
      ],
    },
  },
  whySwitch: [
    {
      icon: "RefreshCw",
      title: "Lead Reactivation Built-In",
      description:
        "Don't just respond to new leads—revive the thousands of dead leads already in your database. Prestyj specializes in done-for-you lead reactivation.",
    },
    {
      icon: "Database",
      title: "No Per-Lead Limits",
      description:
        "Structurely's base plan caps at 250 leads. Prestyj scales with your business without artificial limits.",
    },
    {
      icon: "Zap",
      title: "All-in-One Platform",
      description:
        "Built-in CRM means no juggling multiple tools or paying for separate integrations.",
    },
    {
      icon: "Users",
      title: "Done-For-You Service",
      description:
        "We don't just give you tools—we run your lead engagement for you. Set it and forget it.",
    },
  ],
  whenCompetitorFits: [
    "You only need to respond to new incoming leads",
    "You already have a CRM you're happy with",
    "You receive fewer than 250 leads per month",
    "You prefer to manage the AI yourself",
  ],
  whenPrestyjFits: [
    "You want to reactivate your existing dead leads (not just respond to new ones)",
    "You need an all-in-one platform with CRM included",
    "You receive more than 250 leads per month",
    "You want a done-for-you service that handles everything",
    "You want instant response AND long-term lead nurturing",
  ],
  relatedResources: [
    {
      href: "/alternatives/ylopo",
      title: "Prestyj vs Ylopo",
      description: "Compare to another AI lead platform",
    },
    {
      href: "/solutions/lead-reactivation",
      title: "Lead Reactivation",
      description: "Learn how we revive dead leads",
    },
    {
      href: "/results",
      title: "See Real Results",
      description: "Case studies from agents using Prestyj",
    },
  ],
  cta: {
    headline: "Ready to Do More Than Just Respond?",
    subheadline:
      "See how Prestyj reactivates your dead leads AND responds instantly to new ones. Book a demo to learn more.",
    buttonText: "Book Your Free Demo",
    buttonHref: "/book-demo",
    footnote:
      "No credit card required. See your lead reactivation potential in minutes.",
  },
});
