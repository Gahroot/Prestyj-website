import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const contractors: BestForPageContent = createBestForPage({
  slug: "contractors",
  niche: {
    name: "Contractors & Home Service Professionals",
    shortName: "Contractors",
    description: "General contractors, roofers, plumbers, electricians, and home service pros needing AI lead response",
  },
  meta: {
    title: "AI Receptionist for Contractors | Prestyj",
    description:
      "Done-for-you AI response for contractors and home service pros. Capture every lead, qualify projects, and schedule estimates 24/7. No more missed calls from potential customers.",
    keywords: [
      "AI receptionist for contractors",
      "contractor call answering",
      "home service lead response",
      "roofing AI assistant",
      "contractor appointment setting",
      "trades lead automation",
      "home service AI voice",
    ],
  },
  hero: {
    badge: "Built for Contractors",
    headlineAccent: "Contractors & Home Service Pros",
    subheadline:
      "You're on the job site—AI handles the phones. Capture every lead, qualify projects, and schedule estimates. Homeowners get instant responses while you focus on the work.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Phone" as IconName,
      title: "Never Miss a Lead While Working",
      description:
        "You can't answer calls when you're under a sink or on a roof. AI handles all incoming calls—no more choosing between the job and the phone.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Books Estimates Automatically",
      description:
        "AI qualifies projects and schedules estimate appointments directly onto your calendar. Homeowners commit time, reducing no-shows significantly.",
    },
    {
      icon: "MapPin" as IconName,
      title: "Service Area Qualification",
      description:
        "AI knows your service area and filters accordingly. Only qualified leads in your territory make it through—saving you from wild goose chases.",
    },
    {
      icon: "DollarSign" as IconName,
      title: "Cheaper Than a Receptionist",
      description:
        "A full-time receptionist costs $3-4K/month. Prestyj covers 24/7 response for a fraction—including after-hours that would otherwise go to voicemail.",
    },
  ],
  painPoints: [
    {
      problem: "Can't answer calls while on job sites",
      solution:
        "AI answers every call, every time. Homeowners get immediate responses whether you're framing, plumbing, or roofing—no more leads lost to voicemail.",
    },
    {
      problem: "Homeowners call multiple contractors—first to respond wins",
      solution:
        "AI responds instantly. While competitors are finishing jobs and returning calls hours later, you've already qualified the project and scheduled the estimate.",
    },
    {
      problem: "Hours wasted calling back unqualified leads",
      solution:
        "AI filters by project type, scope, location, and budget before you ever get involved. Review qualified opportunities instead of chasing everything.",
    },
    {
      problem: "After-hours calls go to voicemail—leads go cold",
      solution:
        "Many homeowners call after work or on weekends. AI handles all after-hours calls—capturing leads that would otherwise go to competitors who answer.",
    },
    {
      problem: "High customer acquisition costs",
      solution:
        "Every missed call is wasted marketing spend. AI captures every inbound lead, maximizing your return on advertising and word-of-mouth.",
    },
  ],
  comparison: {
    headers: ["Feature", "Prestyj AI", "Traditional Answering"],
    rows: [
      {
        feature: "Availability",
        prestyj: "24/7/365",
        others: "Business hours (if you're lucky)",
      },
      {
        feature: "Project Qualification",
        prestyj: "Detailed scope gathering",
        others: "Basic message taking",
      },
      {
        feature: "Scheduling",
        prestyj: "Books estimates directly",
        others: "Takes messages, you call back",
      },
      {
        feature: "Cost",
        prestyj: "Flat monthly, unlimited",
        others: "$3-4K/month for receptionist",
      },
      {
        feature: "Job Site Interruptions",
        prestyj: "Zero—AI handles calls",
        others: "Constant phone interruptions",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "Can AI qualify specific trade projects?",
      answer:
        "Yes. We train AI for your specific services: roofing, plumbing, electrical, HVAC, general contracting, landscaping, or any trade. Project-specific qualification flows are built for your business.",
    },
    {
      question: "What about emergency calls?",
      answer:
        "AI recognizes emergency situations and urgent requests, escalating them to you immediately via text or phone. Emergency jobs get priority routing.",
    },
    {
      question: "Does this work for service area filtering?",
      answer:
        "Yes. AI learns your service area and only qualifies leads within your territory. No more driving 45 minutes for a small job outside your range.",
    },
    {
      question: "Can AI handle estimate scheduling?",
      answer:
        "Yes. AI accesses your calendar, finds available estimate times, and books appointments directly. Homeowners show up having already committed—dramatically reducing no-shows.",
    },
    {
      question: "How much does this cost compared to hiring help?",
      answer:
        "A receptionist costs $3-4K/month plus benefits, and they still can't cover 24/7. Prestyj covers all calls for a fraction of the cost—with better qualification and scheduling.",
    },
  ],
  cta: {
    headline: "Capture Every Home Service Lead—24/7",
    subheadline:
      "See how contractors use AI to respond instantly, qualify projects, and book more estimates. Schedule a demo to see AI trained for your trade.",
    buttonText: "Book Your Demo",
    footnote: "Trade-trained. Service area aware. Live in 1-2 weeks.",
  },
});
