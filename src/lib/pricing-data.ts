import type { LucideIcon } from "lucide-react";
import {
  Megaphone,
  DollarSign,
  LayoutGrid,
  FileText,
  Globe,
  Database,
  Bot,
  Phone,
  PhoneIncoming,
  RotateCcw,
} from "lucide-react";

export type TierId = "minimum" | "pro" | "max";

export interface PricingTier {
  id: TierId;
  name: string;
  tagline: string;
  setupFee: number;
  monthlyPrice: number;
  adBudget: string;
  batchAds: string;
  highlights: string[];
  features: Record<string, boolean>;
  story: string;
  bestFor: string;
}

export interface PricingFeature {
  key: string;
  label: string;
  icon: LucideIcon;
  category: "marketing" | "ai" | "platform";
}

export interface PricingFAQ {
  question: string;
  answer: string;
}

export const featureCategories = {
  marketing: "Marketing & Ads",
  ai: "AI Agents",
  platform: "Platform",
} as const;

export const pricingTiers: PricingTier[] = [
  {
    id: "minimum",
    name: "Minimum",
    tagline: "Done-for-you ads and lead generation",
    setupFee: 3997,
    monthlyPrice: 1997,
    adBudget: "$1,000/mo included",
    batchAds: "300/mo",
    highlights: [
      "$1,000/mo ad budget included",
      "300 batch video ads/mo",
      "Landing page + CRM Sync",
      "Done-for-you ad management",
    ],
    features: {
      AD_MANAGEMENT: true,
      AD_BUDGET: true,
      BATCH_ADS: true,
      LANDING_PAGE: true,
      FULL_WEBSITE: false,
      CRM_SYNC: true,
      AI_CHAT_TEXT: false,
      AI_VOICE: false,
      AI_RECEPTIONIST: false,
      LEAD_REACTIVATION: false,
    },
    story:
      "You're a roofer who just started running ads. You need leads coming in and a landing page that converts. The Minimum plan gives you done-for-you ad management, 300 batch video ads a month, a conversion-optimized landing page, and CRM Sync to track every lead.",
    bestFor:
      "Solo operators and small crews getting started with digital marketing and lead generation.",
  },
  {
    id: "pro",
    name: "Pro",
    tagline: "Full AI workforce for serious growth",
    setupFee: 6997,
    monthlyPrice: 3497,
    adBudget: "$1,500/mo included",
    batchAds: "500/mo",
    highlights: [
      "$1,500/mo ad budget included",
      "500 batch video ads/mo",
      "AI chat, text & voice agents",
      "Full website + lead reactivation",
    ],
    features: {
      AD_MANAGEMENT: true,
      AD_BUDGET: true,
      BATCH_ADS: true,
      LANDING_PAGE: true,
      FULL_WEBSITE: true,
      CRM_SYNC: true,
      AI_CHAT_TEXT: true,
      AI_VOICE: true,
      AI_RECEPTIONIST: false,
      LEAD_REACTIVATION: true,
    },
    story:
      "You're running a window & door company with 2-3 crews. Leads are coming in from multiple sources but half go cold because nobody follows up fast enough. The Pro plan adds voice calling, a full website, higher ad budget, and lead reactivation — your AI agent works the phones and re-engages old leads automatically.",
    bestFor:
      "Growing service businesses ready to dominate their market with full AI-powered lead management.",
  },
  {
    id: "max",
    name: "Max",
    tagline: "Enterprise-grade AI marketing machine",
    setupFee: 9997,
    monthlyPrice: 5997,
    adBudget: "$2,000/mo included",
    batchAds: "1,000/mo",
    highlights: [
      "$2,000/mo ad budget included",
      "1,000 batch video ads/mo",
      "All AI agents + AI receptionist",
      "Full website + lead reactivation",
    ],
    features: {
      AD_MANAGEMENT: true,
      AD_BUDGET: true,
      BATCH_ADS: true,
      LANDING_PAGE: true,
      FULL_WEBSITE: true,
      CRM_SYNC: true,
      AI_CHAT_TEXT: true,
      AI_VOICE: true,
      AI_RECEPTIONIST: true,
      LEAD_REACTIVATION: true,
    },
    story:
      "You're running a multi-location roofing or HVAC operation. You need an AI receptionist handling inbound calls, outbound follow-ups, lead reactivation across your entire database, and a massive ad presence across your service areas. The Max plan is your complete AI marketing department.",
    bestFor:
      "Multi-location operations and established businesses wanting maximum lead flow and full AI automation.",
  },
];

export const pricingFeatures: PricingFeature[] = [
  { key: "AD_MANAGEMENT", label: "Ad Management", icon: Megaphone, category: "marketing" },
  { key: "AD_BUDGET", label: "Ad Budget Included", icon: DollarSign, category: "marketing" },
  { key: "BATCH_ADS", label: "Batch Video Ads", icon: LayoutGrid, category: "marketing" },
  { key: "LANDING_PAGE", label: "Landing Page", icon: FileText, category: "platform" },
  { key: "FULL_WEBSITE", label: "Full Website", icon: Globe, category: "platform" },
  { key: "CRM_SYNC", label: "CRM Sync", icon: Database, category: "platform" },
  { key: "AI_CHAT_TEXT", label: "AI Chat & Text Agent", icon: Bot, category: "ai" },
  { key: "AI_VOICE", label: "AI Voice Agent", icon: Phone, category: "ai" },
  { key: "AI_RECEPTIONIST", label: "AI Receptionist", icon: PhoneIncoming, category: "ai" },
  { key: "LEAD_REACTIVATION", label: "Lead Reactivation", icon: RotateCcw, category: "ai" },
];

export const pricingFaqs: PricingFAQ[] = [
  {
    question: "What does the setup fee cover?",
    answer:
      "The setup fee covers your complete onboarding: custom AI agent training on your business, landing page or website build, ad campaign creation, CRM configuration, calendar integration, and phone number provisioning. Everything is done-for-you — you're live within 7-10 business days.",
  },
  {
    question: "Can I upgrade my plan later?",
    answer:
      "Absolutely. You can upgrade at any time. We'll prorate your setup fee difference and switch you over seamlessly. Most clients who start on Minimum upgrade to Pro within 60 days once they see the ROI.",
  },
  {
    question: "What does the included ad budget cover?",
    answer:
      "Your ad budget is spent directly on Google and Meta ads targeting your service area. We manage everything — ad creation, targeting, optimization, and reporting. The budget listed is the minimum included; you can always add more to scale faster.",
  },
  {
    question: "Are there contracts or commitments?",
    answer:
      "No long-term contracts. All plans are month-to-month after the initial setup. We earn your business every month. That said, AI marketing compounds over time — the longer you run, the better your results get.",
  },
  {
    question: "What kind of results can I expect?",
    answer:
      "Results vary by market and budget, but our clients typically see their first booked appointments within the first week of going live. The AI agent responds to every lead in under 60 seconds, which alone can double your booking rate compared to manual follow-up.",
  },
  {
    question: "What industries do you work with?",
    answer:
      "We specialize in service businesses: roofing, HVAC, plumbing, windows & doors, solar, landscaping, and similar trades. Our AI agents are trained specifically for service industry conversations and objection handling.",
  },
  {
    question: "How long does onboarding take?",
    answer:
      "Most clients are fully live within 7-10 business days. This includes AI agent training, website/landing page setup, ad campaign launch, and CRM configuration. We handle everything — you just need to show up for a 30-minute kickoff call.",
  },
  {
    question: "What are batch video ads?",
    answer:
      "Batch video ads are professionally produced short-form video ads we create for your business. Each batch includes multiple ad variations optimized for different platforms and audiences. More ads means more creative variety, which improves ad performance over time.",
  },
];
