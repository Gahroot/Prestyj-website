import type { ComparePageData, CompareMetadata } from "../types";
import { createComparePage } from "@/lib/content-factory";

export const answeringServiceCompareData: ComparePageData = createComparePage({
  slug: "prestyj-vs-answering-service",
  competitorName: "Traditional Answering Service",
  hero: {
    badge: "Comparison Guide",
    title: "AI Sales Agent vs Answering Service:",
    titleAccent: "Which Actually Books Jobs?",
    subtitle:
      "Answering services take messages. AI takes action. Compare the real differences in cost, speed, and revenue impact for your business.",
    description: "",
    keyStats: [
      {
        value: "60s",
        label: "AI response time",
      },
      {
        value: "4+ hrs",
        label: "avg callback delay",
      },
      {
        value: "80%",
        label: "callers don't leave voicemail",
      },
      {
        value: "24/7",
        label: "AI availability",
      },
    ],
  },
  pricing: {
    prestyj: {
      price: "Custom pricing",
      priceSubtext: "Tailored to your volume",
      features: [
        { text: "24/7/365 availability", included: true },
        { text: "Instant lead qualification", included: true },
        { text: "Direct appointment booking", included: true },
        { text: "Unlimited simultaneous calls", included: true },
        { text: "CRM integration included", included: true },
      ],
    },
    competitor: {
      price: "$200-1,000+",
      priceSubtext: "/month + per-minute fees",
      features: [
        { text: "Limited hours (some 24/7)", included: true },
        { text: "Message taking only", included: false },
        { text: "No appointment booking", included: false },
        { text: "Queue-based (hold times)", included: false },
        { text: "Manual CRM entry required", included: false },
      ],
    },
  },
  features: [
    {
      feature: "Response Time",
      prestyj: "Under 60 seconds",
      competitor: "30 sec - 3 min (hold time)",
    },
    {
      feature: "Lead Qualification",
      prestyj: true,
      competitor: false,
      note: "Answering services only take messages",
    },
    {
      feature: "Appointment Booking",
      prestyj: true,
      competitor: false,
      note: "AI books directly into your calendar",
    },
    {
      feature: "Simultaneous Call Handling",
      prestyj: "Unlimited",
      competitor: "Limited by staff on shift",
    },
    {
      feature: "CRM Integration",
      prestyj: true,
      competitor: "Manual entry",
      note: "Prestyj syncs automatically",
    },
    {
      feature: "Emergency Triage",
      prestyj: true,
      competitor: "Basic (reads script)",
      note: "AI intelligently routes emergencies",
    },
    {
      feature: "Follow-Up Sequences",
      prestyj: true,
      competitor: false,
    },
    {
      feature: "Call Recording & Analytics",
      prestyj: true,
      competitor: "Varies",
    },
    {
      feature: "Multilingual Support",
      prestyj: true,
      competitor: "Limited",
    },
    {
      feature: "Consistent Quality",
      prestyj: "Always consistent",
      competitor: "Varies by operator",
    },
  ],
  whySwitch: {
    title: "Why Businesses Switch from Answering Services to AI",
    description:
      "The gap between taking a message and booking a job is where revenue dies.",
    reasons: [
      {
        icon: "Zap",
        title: "From Message-Taking to Job-Booking",
        description:
          "Answering services hand you a callback list. AI hands you a booked calendar. The difference is immediate revenue vs. phone tag that never converts.",
      },
      {
        icon: "Clock",
        title: "Eliminate the Callback Gap",
        description:
          "The average callback takes 4+ hours. By then, the homeowner has already hired someone else. AI qualifies and books in the same conversation.",
      },
      {
        icon: "DollarSign",
        title: "Stop Paying Per Minute for Messages",
        description:
          "Per-minute billing adds up fast—especially during peak seasons. AI handles unlimited calls at a flat rate, so busy days don't blow your budget.",
      },
      {
        icon: "TrendingUp",
        title: "Consistent Quality at Scale",
        description:
          "Human operators have bad days, high turnover, and inconsistent scripts. AI delivers the same quality on call #1 and call #1,000.",
      },
    ],
  },
  relatedResources: [
    {
      title: "AI Receptionist ROI by Industry",
      description:
        "See the revenue impact across HVAC, plumbing, legal, and more.",
      href: "/blog/ai-receptionist-roi-by-industry",
      linkText: "Read the analysis",
    },
    {
      title: "Home Services Solution",
      description:
        "Built specifically for contractors and home service businesses.",
      href: "/solutions/home-services",
      linkText: "Explore the solution",
    },
    {
      title: "AI vs Human Receptionist Cost Comparison",
      description: "Full cost breakdown for 2026.",
      href: "/blog/ai-receptionist-vs-human-cost-2026",
      linkText: "Compare costs",
    },
  ],
  cta: {
    title: "Ready to Replace Your Answering Service?",
    titleAccent: "Replace",
    description:
      "See how AI qualifies leads and books appointments in real-time—instead of taking messages.",
    buttonText: "Book Your Demo",
    buttonHref: "/book-demo",
    disclaimer:
      "No commitment required. Compare AI side-by-side with your current answering service.",
  },
});

export const answeringServiceMetadata: CompareMetadata = {
  slug: "prestyj-vs-answering-service",
  competitorName: "Traditional Answering Service",
  title:
    "Prestyj vs Answering Service: AI Lead Qualification vs Message Taking | 2026 Comparison",
  description:
    "Compare AI sales agents to traditional answering services. See why businesses switch from message-taking to automated lead qualification and appointment booking.",
  keywords: [
    "AI vs answering service",
    "best AI alternatives to answering services",
    "AI receptionist vs answering service",
    "automated answering service alternative",
    "AI call handling vs receptionist",
  ],
};
