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
  Calendar,
  MessageSquare,
  Bell,
  ClipboardList,
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
      "AI appointment agent + calendar",
      "Landing page + CRM Sync",
    ],
    features: {
      AD_MANAGEMENT: true,
      AD_BUDGET: true,
      BATCH_ADS: true,
      LANDING_PAGE: true,
      QUALIFICATION_FORM: false,
      FULL_WEBSITE: false,
      CRM_SYNC: true,
      CALENDAR_INTEGRATION: true,
      AI_APPOINTMENT_AGENT: true,
      AI_CHATBOT: false,
      AI_TEXTING: false,
      LEAD_REACTIVATION: false,
      AI_VOICE: false,
      AI_RECEPTIONIST: false,
    },
    story:
      "You're a growing real estate team running Facebook ads. Leads come in but half go cold because nobody responds fast enough. The Minimum plan gives you done-for-you ad management, 300 batch video ads a month, a conversion-optimized landing page, and an AI appointment agent that instantly responds to every lead in under 60 seconds, reminds prospects of their appointments, and follows up on no-shows automatically.",
    bestFor:
      "Small real estate teams and solo team leaders getting started with paid advertising and AI-powered lead follow-up.",
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
      "AI chatbot + texting agent",
      "Lead reactivation + full website",
    ],
    features: {
      AD_MANAGEMENT: true,
      AD_BUDGET: true,
      BATCH_ADS: true,
      LANDING_PAGE: true,
      QUALIFICATION_FORM: true,
      FULL_WEBSITE: true,
      CRM_SYNC: true,
      CALENDAR_INTEGRATION: true,
      AI_APPOINTMENT_AGENT: true,
      AI_CHATBOT: true,
      AI_TEXTING: true,
      LEAD_REACTIVATION: true,
      AI_VOICE: false,
      AI_RECEPTIONIST: false,
    },
    story:
      "You're a 10–20 agent brokerage running $3K–$5K/month in Facebook and YouTube ads. Leads pour in from multiple sources but half go cold before anyone follows up. The Pro plan adds an AI chatbot for your website, an AI texting agent that engages leads via SMS, a multi-step qualification form that routes buyers vs. sellers, and lead reactivation to re-engage your cold database automatically.",
    bestFor:
      "Mid-size real estate teams and brokerages running paid ads who need full AI-powered lead management across every channel.",
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
      "AI voice agent + receptionist",
      "Complete AI automation suite",
    ],
    features: {
      AD_MANAGEMENT: true,
      AD_BUDGET: true,
      BATCH_ADS: true,
      LANDING_PAGE: true,
      QUALIFICATION_FORM: true,
      FULL_WEBSITE: true,
      CRM_SYNC: true,
      CALENDAR_INTEGRATION: true,
      AI_APPOINTMENT_AGENT: true,
      AI_CHATBOT: true,
      AI_TEXTING: true,
      LEAD_REACTIVATION: true,
      AI_VOICE: true,
      AI_RECEPTIONIST: true,
    },
    story:
      "You're a multi-office brokerage or franchise operation doing $50M+. You need AI handling inbound lead response across all offices, an AI voice agent making outbound follow-ups to every new lead, lead reactivation across your entire database, and maximum ad volume across your markets. The Max plan is your complete AI marketing and lead conversion department.",
    bestFor:
      "Large brokerages, franchise operations, and PE-backed real estate platforms wanting enterprise-grade AI automation and maximum lead flow.",
  },
];

export const pricingFeatures: PricingFeature[] = [
  // Marketing & Ads
  { key: "AD_MANAGEMENT", label: "Ad Management", icon: Megaphone, category: "marketing" },
  { key: "AD_BUDGET", label: "Ad Budget Included", icon: DollarSign, category: "marketing" },
  { key: "BATCH_ADS", label: "Batch Video Ads", icon: LayoutGrid, category: "marketing" },
  // Platform
  { key: "LANDING_PAGE", label: "Landing Page", icon: FileText, category: "platform" },
  { key: "QUALIFICATION_FORM", label: "Multi-Step Qualification Form", icon: ClipboardList, category: "platform" },
  { key: "FULL_WEBSITE", label: "Full Website", icon: Globe, category: "platform" },
  { key: "CRM_SYNC", label: "CRM Sync", icon: Database, category: "platform" },
  { key: "CALENDAR_INTEGRATION", label: "Calendar Integration", icon: Calendar, category: "platform" },
  // AI Agents
  { key: "AI_APPOINTMENT_AGENT", label: "AI Appointment Agent", icon: Bell, category: "ai" },
  { key: "AI_CHATBOT", label: "AI Chatbot", icon: Bot, category: "ai" },
  { key: "AI_TEXTING", label: "AI Texting Agent", icon: MessageSquare, category: "ai" },
  { key: "LEAD_REACTIVATION", label: "Lead Reactivation", icon: RotateCcw, category: "ai" },
  { key: "AI_VOICE", label: "AI Voice Agent", icon: Phone, category: "ai" },
  { key: "AI_RECEPTIONIST", label: "AI Receptionist", icon: PhoneIncoming, category: "ai" },
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
      "We specialize in real estate teams and brokerages running paid advertising on Facebook, YouTube, and Google. Our AI agents are trained specifically for real estate conversations — qualifying buyers vs. sellers, handling objections, and booking appointments directly onto your agents' calendars.",
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
