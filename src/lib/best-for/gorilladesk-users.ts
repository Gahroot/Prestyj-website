import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const gorilladeskUsers: BestForPageContent = createBestForPage({
  slug: "gorilladesk-users",
  niche: {
    name: "GorillaDesk Users",
    shortName: "GorillaDesk",
    description:
      "Pest control and lawn care businesses using GorillaDesk for scheduling, routing, and customer management",
  },
  meta: {
    title: "AI Lead Response for GorillaDesk Users | Prestyj",
    description:
      "Automate booking and lead response for your GorillaDesk-powered pest control or lawn care business. AI answers calls, qualifies jobs, and books into GorillaDesk — 24/7.",
    keywords: [
      "GorillaDesk AI integration",
      "AI for GorillaDesk",
      "GorillaDesk automated booking",
      "GorillaDesk AI receptionist",
      "pest control AI scheduling",
      "lawn care AI lead response",
    ],
  },
  hero: {
    badge: "Built for GorillaDesk",
    headlineAccent: "Your GorillaDesk Schedule",
    subheadline:
      "Stop missing pest control and lawn care leads. AI answers every call, qualifies the service request, and books directly into GorillaDesk — so your routes stay full and your customers stay happy.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Briefcase" as IconName,
      title: "Direct Job Booking",
      description:
        "AI creates jobs in GorillaDesk with complete customer details, pest type or lawn service needed, and scheduling preferences. Technicians see ready-to-execute jobs, not incomplete notes.",
    },
    {
      icon: "Map" as IconName,
      title: "Route-Optimized Scheduling",
      description:
        "AI considers your existing GorillaDesk routes when booking new appointments. New jobs fit into efficient routes instead of creating scattered, time-wasting detours.",
    },
    {
      icon: "Users" as IconName,
      title: "Recurring Customer Recognition",
      description:
        "AI recognizes existing GorillaDesk customers, references their service history, and can upsell or cross-sell based on past treatments. Quarterly pest contracts get renewed automatically.",
    },
    {
      icon: "Phone" as IconName,
      title: "Seasonal Demand Handling",
      description:
        "Spring ant season and summer mosquito peaks don't overwhelm AI. Every caller gets immediate qualification and booking while your team stays focused on treatments.",
    },
  ],
  painPoints: [
    {
      problem: "Missing calls while treating properties or driving between stops",
      solution:
        "AI answers every call while your technicians work. New leads get qualified and booked into GorillaDesk without pulling anyone off a job.",
    },
    {
      problem: "Seasonal spikes create scheduling chaos",
      solution:
        "AI scales instantly for busy seasons. Whether it's spring pest outbreaks or summer lawn surges, every caller gets an immediate appointment — no backlog, no lost leads.",
    },
    {
      problem: "Recurring customers calling to reschedule or add services",
      solution:
        "AI recognizes recurring GorillaDesk customers, accesses their service schedule, and handles rescheduling or add-ons in a single call — no manual calendar digging required.",
    },
    {
      problem: "After-hours emergency pest calls going to voicemail",
      solution:
        "AI handles after-hours calls 24/7. Urgent pest issues get booked for next-available slots; routine requests queue up for morning scheduling.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj + GorillaDesk", "GorillaDesk Alone", "Answering Service + GorillaDesk"],
    rows: [
      {
        feature: "Call Handling",
        prestyj: "24/7 automated, unlimited",
        others: "Business hours only / Message-taking",
      },
      {
        feature: "Job Creation",
        prestyj: "Direct in GorillaDesk, instant",
        others: "Manual entry / No system access",
      },
      {
        feature: "Customer Recognition",
        prestyj: "Automatic with service history",
        others: "Manual lookup / No database access",
      },
      {
        feature: "Route Awareness",
        prestyj: "Schedules to optimize routes",
        others: "Manual coordination / No routing logic",
      },
      {
        feature: "Recurring Job Management",
        prestyj: "AI handles rescheduling and upsells",
        others: "Manual changes / Message forwarding",
      },
      {
        feature: "Peak Season Capacity",
        prestyj: "Unlimited concurrent calls",
        others: "Limited by staff / Overflow to voicemail",
      },
      {
        feature: "Cost",
        prestyj: "Fixed monthly rate",
        others: "Staff time / Per-call fees",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does Prestyj integrate with GorillaDesk?",
      answer:
        "Prestyj connects to GorillaDesk via API. AI accesses your customer database, reads your route schedules, and creates jobs directly. Setup takes minutes with your GorillaDesk API credentials.",
    },
    {
      question: "Can AI handle different pest types and treatment requests?",
      answer:
        "Yes. AI asks targeted questions to identify the pest type, severity, and location. This information flows into the GorillaDesk job so technicians arrive prepared with the right equipment and chemicals.",
    },
    {
      question: "Does it work with GorillaDesk's recurring service schedules?",
      answer:
        "Absolutely. AI manages recurring customers seamlessly — rescheduling appointments, adding one-time treatments between regular visits, and confirming upcoming service dates.",
    },
    {
      question: "What about lawn care and landscape businesses?",
      answer:
        "Prestyj supports all service types in GorillaDesk — pest control, lawn care, landscaping, and more. AI asks service-specific questions and books accordingly.",
    },
    {
      question: "Can AI upsell additional services to existing customers?",
      answer:
        "Yes. When AI recognizes a GorillaDesk customer with a quarterly pest plan but no mosquito service, it can mention seasonal add-ons during the call. Upsell rules are fully configurable.",
    },
  ],
  cta: {
    headline: "Fill Every Route on Your GorillaDesk Board",
    subheadline:
      "Turn every call into a booked job. See how AI + GorillaDesk keeps your technicians busy and your routes optimized — 24/7.",
    buttonText: "Book a Demo",
    footnote: "No credit card required. Built for pest control and lawn care on GorillaDesk.",
  },
});
