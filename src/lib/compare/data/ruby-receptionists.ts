import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage, buildCompareFeature, STANDARD_FEATURES } from "@/lib/content-factory";

export const rubyReceptionistsCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-ruby-receptionists",
  competitorName: "Ruby Receptionists",
  hero: {
    badge: "Receptionist Comparison",
    title: "Prestyj vs Ruby Receptionists:",
    titleAccent: "AI Flat-Fee vs Premium Human Receptionists",
    subtitle:
      "Ruby Receptionists is the gold standard for live, human virtual receptionists — friendly Portland-trained agents who pick up every call. Prestyj is a flat-fee AI sales agent built for real estate teams and home services operators. Here's the honest, side-by-side breakdown.",
    description: "",
    keyStats: [
      { value: "$319-$899/mo", label: "Ruby's per-minute plans" },
      { value: "$1,997+/mo", label: "Prestyj all-in flat fee" },
      { value: "15 min", label: "Prestyj setup vs days of onboarding" },
    ],
  },
  stats: [
    {
      value: "$319-$899/mo",
      label: "Ruby plan range",
      description: "50–200 receptionist minutes/month; overages run ~$3–$5 per additional minute",
    },
    {
      value: "$3-$5/min",
      label: "Ruby overage rate",
      description: "Chatty callers and long discovery calls compound quickly past your tier",
    },
    {
      value: "22+ years",
      label: "Ruby has been in business since 2003",
      description:
        "One of the original human virtual receptionist brands; deep legal-industry roots",
    },
    {
      value: "78%",
      label: "of buyers work with first responder",
      description:
        "Speed-to-lead matters; both Ruby and Prestyj answer fast — the cost difference is the spread",
    },
  ],
  pricing: {
    prestyj: {
      price: "$1,997",
      priceSubtext: "/month flat all-in",
      features: [
        { text: "Unlimited minutes — no per-minute overages", included: true },
        { text: "24/7/365 coverage with no after-hours upcharge", included: true },
        { text: "Real estate / home services scripts built in", included: true },
        { text: "Native CRM sync (FUB, kvCore, ServiceTitan, HubSpot)", included: true },
        { text: "TCPA + fair housing guardrails built in", included: true },
        { text: "Live in 15 minutes — no onboarding meetings", included: true },
      ],
    },
    competitor: {
      price: "$319-$899",
      priceSubtext: "/month + per-minute overages",
      features: [
        { text: "100% human, Portland-trained receptionists", included: true },
        { text: "Warm, empathetic, brand-friendly tone", included: true },
        { text: "Bilingual options + Clio / Salesforce / HubSpot integrations", included: true },
        { text: "24/7 coverage is an add-on, not standard", included: false },
        { text: "Per-minute model — chatty callers blow the budget", included: false },
        { text: "Limited to your tier's included minutes", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Pricing model",
      prestyj: "Flat monthly all-in",
      competitor: "Tiered + per-minute overages",
      note: "Ruby tiers: ~$319 (50 min), ~$599 (100 min), ~$899 (200 min); overages ~$3-$5/min",
    },
    {
      feature: "Cost per added minute",
      prestyj: "$0 (unlimited)",
      competitor: "$3-$5 over tier",
      note: "A single 15-minute discovery call past your tier can add $45-$75",
    },
    {
      feature: "After-hours / weekend coverage",
      prestyj: "Included 24/7/365",
      competitor: "Available as add-on",
      note: "Ruby's premium 24/7 plans cost more than the standard business-hours plans",
    },
    {
      feature: "Time to live",
      prestyj: "15 minutes",
      competitor: "2-7 days onboarding",
      note: "Ruby onboarding includes script intake, call handling preferences, and team training",
    },
    buildCompareFeature(STANDARD_FEATURES.AI_VOICE, true, "Ruby uses humans, not AI voice agents"),
    buildCompareFeature(STANDARD_FEATURES.RESPONSE_24_7, true),
    buildCompareFeature(
      STANDARD_FEATURES.BUILT_IN_CRM,
      "Native: FUB, kvCore, Sierra, HubSpot, ServiceTitan",
      "Native: Clio, Salesforce, HubSpot",
    ),
    buildCompareFeature(STANDARD_FEATURES.APPOINTMENT_BOOKING, true),
    {
      feature: "Industry specialization",
      prestyj: "Real estate + home services",
      competitor: "Law firms + professional services",
      note: "Ruby's brand is deepest in legal; Prestyj's is deepest in real estate and trades",
    },
    {
      feature: "Simultaneous call handling",
      prestyj: "Unlimited",
      competitor: "Limited by staffing",
      note: "Ruby can only answer as many concurrent calls as receptionists are available",
    },
    {
      feature: "Consistency call-to-call",
      prestyj: "100% identical script delivery",
      competitor: "Varies by receptionist",
      note: "Human warmth is the upside; human variability is the trade-off",
    },
    {
      feature: "Compliance guardrails (TCPA / fair housing)",
      prestyj: "Built into every script",
      competitor: "Receptionist training-dependent",
    },
    {
      feature: "Spanish-language calls",
      prestyj: "Included",
      competitor: "Bilingual add-on",
    },
    {
      feature: "Support model",
      prestyj: "Dedicated success manager",
      competitor: "Account manager + customer success",
    },
  ],
  whySwitch: {
    title: "Why Operators Choose Prestyj Over Ruby Receptionists",
    description:
      "Ruby is excellent at what they do — friendly humans answering your phone. The question is whether human warmth is worth the per-minute math at your call volume. For most real estate teams and home services operators running 500+ minutes/month, it isn't.",
    reasons: [
      {
        icon: "DollarSign",
        title: "Predictable Flat Fee, Not Per-Minute Math",
        description:
          "Ruby's tiered model means a chatty seller lead, a 20-minute insurance question, or a holiday call surge can blow your monthly budget. Prestyj is one flat number — you can forecast a year out without re-running spreadsheets.",
      },
      {
        icon: "Clock",
        title: "True 24/7/365 With No Upcharge",
        description:
          "Ruby's standard plans cover business hours; 24/7 coverage costs more. Prestyj answers at 2am Sunday with the same script it uses at 10am Tuesday — emergencies, after-hours leads, and weekend showings included.",
      },
      {
        icon: "Target",
        title: "Built for Real Estate and Home Services, Not Law Firms",
        description:
          "Ruby's strength is professional services and legal intake. Prestyj is purpose-built for real estate qualification (buyer/seller/investor), home services dispatch (emergency triage, ServiceTitan/Housecall Pro routing), and fair-housing-compliant language.",
      },
      {
        icon: "HeartHandshake",
        title: "Consistency at Scale",
        description:
          "Ruby's receptionists are warm — but quality varies between them. Prestyj delivers the exact same qualification flow on call 1 and call 1,000, with every call recorded, transcribed, and synced to your CRM automatically.",
      },
    ],
  },
  relatedResources: [
    {
      title: "Prestyj vs Smith.ai",
      description: "The other major hybrid receptionist comparison",
      href: "/compare/prestyj-vs-smith-ai",
      linkText: "Read comparison",
    },
    {
      title: "AI vs Human ISA & Answering Services",
      description: "Traditional human-staffed services vs AI voice agents",
      href: "/alternatives/human-isa",
      linkText: "See comparison",
    },
    {
      title: "AI Receptionist vs Human Cost (2026)",
      description: "Real cost math: AI vs human receptionists at volume",
      href: "/blog/ai-receptionist-vs-human-cost-2026",
      linkText: "Read the breakdown",
    },
  ],
  cta: {
    title: "Same Speed-to-Lead. Half the Cost. Twice the Coverage.",
    description:
      "Ruby's humans are wonderful. They're also expensive at volume and capped by tier. Prestyj books appointments around the clock for a flat fee — see it live with your phone number in 15 minutes.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    disclaimer:
      "Hear your real estate or home services AI agent answer a real call. No commitment, no onboarding meeting.",
  },
});

export const rubyReceptionistsCompareMetadata: CompareMetadata = {
  slug: "prestyj-vs-ruby-receptionists",
  competitorName: "Ruby Receptionists",
  title: "Prestyj vs Ruby Receptionists: AI Flat-Fee vs Premium Humans (2026 Comparison)",
  description:
    "Compare Prestyj and Ruby Receptionists for AI voice agents and virtual receptionists. Ruby is $319–$899/mo per-minute human service. Prestyj is flat-fee, 24/7 AI, live in 15 minutes. Real numbers inside.",
  keywords: [
    "Ruby Receptionists alternative",
    "Ruby Receptionists vs Prestyj",
    "Prestyj vs Ruby Receptionists",
    "Ruby Receptionists pricing",
    "Ruby Receptionists review",
    "Ruby Receptionists competitors",
    "AI receptionist vs human receptionist",
    "virtual receptionist comparison",
    "Ruby Receptionists real estate",
    "Ruby Receptionists law firm alternative",
  ],
};
