import { Clock, DollarSign, Zap, Users } from "lucide-react";
import type { ComparePageData, CompareMetadata } from "../types";

export const ylopoCompareData: ComparePageData = {
  slug: "prestyj-vs-ylopo",
  competitorName: "Ylopo",
  hero: {
    badge: "Comparison Guide",
    title: "Prestyj vs Ylopo ",
    titleAccent: "Which AI Sales Agent Is Right for You?",
    subtitle:
      "Both platforms offer AI-powered lead engagement for real estate professionals. Here's an honest comparison to help you make the right choice for your business.",
    description: "",
  },
  stats: [
    {
      value: "78%",
      label: "of buyers work with the first agent to respond",
    },
    {
      value: "80%",
      label: "of leads go cold due to slow response times",
    },
    {
      value: "$4k+/mo",
      label: "average cost of an ISA plus commission",
    },
  ],
  pricing: {
    prestyj: {
      name: "Prestyj",
      price: "Custom pricing",
      priceSubtext: "Tailored to your needs",
      highlight: true,
      features: [
        { text: "No required ad spend", included: true },
        { text: "Built-in CRM included", included: true },
        { text: "All-in-one platform", included: true },
      ],
    },
    competitor: {
      name: "Ylopo",
      price: "$395",
      priceSubtext: "/month + Required ad spend",
      features: [
        {
          text: "Additional ad spend required on top of monthly fee",
          included: false,
        },
        {
          text: "Separate CRM integration costs may apply",
          included: false,
        },
        {
          text: "AI trained on 50M+ conversations",
          included: true,
        },
      ],
    },
  },
  features: [
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
      feature: "24/7 Lead Response",
      prestyj: true,
      competitor: true,
    },
    {
      feature: "Built-in CRM",
      prestyj: true,
      competitor: false,
      note: "Ylopo requires separate CRM integration",
    },
    {
      feature: "Appointment Booking",
      prestyj: true,
      competitor: true,
    },
    {
      feature: "Lead Qualification",
      prestyj: true,
      competitor: true,
    },
    {
      feature: "No Ad Spend Required",
      prestyj: true,
      competitor: false,
      note: "Ylopo pricing requires additional ad spend",
    },
    {
      feature: "Calendar Integration",
      prestyj: true,
      competitor: true,
    },
  ],
  whySwitch: {
    title: "Why Agents Switch from Ylopo",
    description: "Key reasons real estate professionals choose Prestyj",
    reasons: [
      {
        icon: DollarSign,
        title: "Simpler Pricing Structure",
        description:
          "No required ad spend on top of monthly fees. Prestyj offers transparent, custom pricing tailored to your needs.",
      },
      {
        icon: Zap,
        title: "All-in-One Platform",
        description:
          "Built-in CRM eliminates the need for separate integrations. Everything you need in one place.",
      },
      {
        icon: Clock,
        title: "Faster Implementation",
        description:
          "Get up and running quickly without complex third-party CRM setup and configuration.",
      },
      {
        icon: Users,
        title: "Dedicated Support",
        description:
          "Personalized onboarding and ongoing support to ensure your success with the platform.",
      },
    ],
  },
  relatedResources: [
    {
      title: "AI vs Human ISA",
      description: "Compare AI agents to traditional inside sales agents",
      href: "/compare/prestyj-vs-isa",
      linkText: "Read comparison",
    },
    {
      title: "Why 80% of Leads Go Cold",
      description: "The data behind lead response times",
      href: "/blog/why-leads-go-cold",
      linkText: "Read article",
    },
    {
      title: "See Real Results",
      description: "Case studies from agents using Prestyj",
      href: "/results",
      linkText: "View results",
    },
  ],
  cta: {
    title: "Ready to See Prestyj in Action?",
    description:
      "Book a personalized demo to see how Prestyj can transform your lead management and help you close more deals.",
    buttonText: "Book Your Free Demo",
    buttonHref: "/book-demo",
    disclaimer: "No credit card required. See results in minutes.",
  },
};

export const ylopoMetadata: CompareMetadata = {
  slug: "prestyj-vs-ylopo",
  competitorName: "Ylopo",
  title: "Prestyj vs Ylopo: AI Sales Agent Comparison for Real Estate",
  description:
    "Compare Prestyj and Ylopo AI sales agents for real estate. See pricing, features, and why agents are switching. Ylopo costs $395/mo + ad spend. Find the best Ylopo alternative.",
  keywords: [
    "Ylopo alternative",
    "Ylopo vs Prestyj",
    "Prestyj vs Ylopo",
    "real estate AI comparison",
    "Ylopo pricing",
    "Ylopo review",
    "AI sales agent comparison",
    "real estate lead management",
    "best AI for real estate",
    "Ylopo competitor",
  ],
};
