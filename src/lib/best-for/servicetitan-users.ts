import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const servicetitanUsers: BestForPageContent = createBestForPage({
  slug: "servicetitan-users",
  niche: {
    name: "ServiceTitan Users",
    shortName: "ServiceTitan",
    description:
      "Service businesses using ServiceTitan CRM looking for AI-powered call handling and automated dispatch",
  },
  meta: {
    title: "AI Automation for ServiceTitan Users | Prestyj",
    description:
      "Supercharge your ServiceTitan workflow with AI that answers calls, qualifies jobs, and books directly into your dispatch board. 24/7 automation built for ServiceTitan.",
    keywords: [
      "AI automation for ServiceTitan",
      "ServiceTitan AI integration",
      "ServiceTitan automated dispatch",
      "AI call handling ServiceTitan",
      "ServiceTitan appointment booking AI",
    ],
  },
  hero: {
    badge: "Built for ServiceTitan",
    headlineAccent: "Your ServiceTitan Dispatch Board",
    subheadline:
      "Stop paying for answering services that take messages. AI qualifies every call, books into ServiceTitan, and dispatches your crew—automatically.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Calendar" as IconName,
      title: "Direct Dispatch Board Booking",
      description:
        "AI books appointments directly into your ServiceTitan dispatch board. No manual data entry, no callback delays—jobs appear ready to assign.",
    },
    {
      icon: "Users" as IconName,
      title: "Customer Record Sync",
      description:
        "AI recognizes existing customers from ServiceTitan and updates their records. New customers get created automatically with all call details captured.",
    },
    {
      icon: "Zap" as IconName,
      title: "Smart Job Type Routing",
      description:
        "AI identifies the job type and routes to the right technician availability. Emergency repairs get priority; maintenance calls fill your schedule efficiently.",
    },
    {
      icon: "Clock" as IconName,
      title: "Real-Time Availability Integration",
      description:
        "AI reads your ServiceTitan calendar in real-time. Customers get accurate time slots; you get a fully optimized schedule with zero double-booking.",
    },
  ],
  painPoints: [
    {
      problem: "Manually entering call details into ServiceTitan dispatch board",
      solution:
        "AI captures caller information and creates jobs directly in ServiceTitan. Your CSRs focus on complex issues instead of data entry.",
    },
    {
      problem: "After-hours calls go to voicemail or generic answering service",
      solution:
        "AI handles after-hours calls with full ServiceTitan context. Emergency calls get booked immediately; routine requests appear on the board by morning.",
    },
    {
      problem: "Peak season call volume overwhelms your office staff",
      solution:
        "AI scales instantly during busy seasons. Whether you get 20 calls or 200, every caller gets qualified and booked without wait times.",
    },
    {
      problem: "Callbacks create 4-12 hour delays in booking appointments",
      solution:
        "AI books appointments during the first call. Customers get immediate confirmation; your schedule fills faster than competitors still playing phone tag.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj + ServiceTitan", "ServiceTitan Alone", "Answering Service + ServiceTitan"],
    rows: [
      {
        feature: "After-Hours Coverage",
        prestyj: "24/7 with full ServiceTitan integration",
        others: "Voicemail / Manual message entry required",
      },
      {
        feature: "Dispatch Board Integration",
        prestyj: "Direct job creation, real-time",
        others: "Manual entry / Takes messages only",
      },
      {
        feature: "Customer Recognition",
        prestyj: "Automatic lookup and record update",
        others: "Manual search / No CRM access",
      },
      {
        feature: "Job Qualification",
        prestyj: "AI asks ServiceTitan-specific questions",
        others: "Manual CSR process / Generic message-taking",
      },
      {
        feature: "Peak Volume Handling",
        prestyj: "Unlimited capacity, instant response",
        others: "Limited by staff / Overflow to voicemail",
      },
      {
        feature: "Response Time",
        prestyj: "Under 60 seconds",
        others: "Varies / Message callback delay",
      },
      {
        feature: "Cost at Scale",
        prestyj: "Fixed cost, unlimited calls",
        others: "Salary increases / Per-call fees add up",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does Prestyj integrate with ServiceTitan?",
      answer:
        "Prestyj connects to ServiceTitan via API. AI reads your customer database for recognition, checks real-time availability, and creates jobs directly on your dispatch board. Setup takes minutes with your ServiceTitan credentials.",
    },
    {
      question: "Can AI handle existing customers vs. new customers?",
      answer:
        "AI automatically recognizes existing customers by phone number or address, pulls their service history from ServiceTitan, and updates their record. New customers get created with complete contact and job details.",
    },
    {
      question: "What job types can AI book into ServiceTitan?",
      answer:
        "AI can book any job type you configure—emergency repairs, maintenance, installations, estimates. You control which job types AI handles autonomously vs. which require CSR review.",
    },
    {
      question: "Does it work with ServiceTitan's scheduling and dispatch?",
      answer:
        "Yes. AI reads your ServiceTitan calendar to offer accurate time slots, books appointments that respect technician zones and skills, and can prioritize emergency calls based on your dispatch rules.",
    },
    {
      question: "What happens if a caller wants to speak to a person?",
      answer:
        "AI seamlessly transfers to your team with full call context visible in ServiceTitan. The caller doesn't repeat themselves; your CSR sees exactly what was discussed and picks up where AI left off.",
    },
  ],
  cta: {
    headline: "Supercharge Your ServiceTitan",
    subheadline:
      "Turn every call into a booked job—automatically. See how AI + ServiceTitan eliminates phone tag and fills your dispatch board 24/7.",
    buttonText: "Book a Demo",
    footnote: "No credit card required. Built for service businesses on ServiceTitan.",
  },
});
