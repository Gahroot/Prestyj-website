import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const flooringContractors: BestForPageContent = createBestForPage({
  slug: "flooring-contractors",
  niche: {
    name: "Flooring Contractors",
    shortName: "Flooring Contractors",
    description: "Flooring contractors and installers seeking AI-powered lead response and consultation scheduling",
  },
  meta: {
    title: "AI Voice Agents for Flooring Contractors | Prestyj",
    description:
      "AI voice and text agents for flooring companies. Respond to leads in under 60 seconds, qualify projects (hardwood, laminate, tile, carpet), and book in-home consultations. High-consideration purchases demand instant response.",
    keywords: [
      "AI voice agents flooring contractors",
      "AI answering service flooring companies",
      "automated lead response flooring",
      "flooring AI receptionist",
      "AI for flooring contractors",
      "hardwood flooring lead response",
      "tile flooring answering service",
      "carpet installation scheduling",
    ],
  },
  hero: {
    badge: "AI for Flooring Contractors",
    headlineAccent: "Flooring Contractors",
    subheadline:
      "Average flooring job: $3,000-15,000. These are high-consideration purchases where homeowners compare 3-5 contractors. Speed to lead wins the sale. AI responds instantly, qualifies project scope, books consultations, and follows up automatically.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Zap" as IconName,
      title: "First Response Wins the Job",
      description:
        "Homeowners contact multiple flooring contractors. The first to respond typically gets the in-home visit—and often the sale. AI answers every inquiry within 60 seconds, 24/7, capturing the advantage.",
    },
    {
      icon: "Layers" as IconName,
      title: "Qualify All Flooring Types",
      description:
        "AI captures project specifics: material (hardwood, laminate, vinyl plank, tile, carpet), square footage, number of rooms, subfloor condition, and timeline. Your consultants arrive prepared.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Book In-Home Consultations",
      description:
        "AI schedules appointments directly into your calendar. Homeowners choose available time slots, receive confirmations, and get reminders. Your consultants show up to a full pipeline every day.",
    },
    {
      icon: "RefreshCw" as IconName,
      title: "Nurture Leads Through the Buying Cycle",
      description:
        "Flooring purchases have long consideration cycles. AI automatically follows up via text and voice, keeping your brand top-of-mind while homeowners compare options and make decisions.",
    },
    {
      icon: "DollarSign" as IconName,
      title: "Protect Your High-Value Revenue",
      description:
        "At $3K-15K per job, every missed lead is costly. AI ensures no opportunity falls through the cracks. Most contractors recover 5-15+ missed jobs monthly—pure revenue improvement.",
    },
    {
      icon: "Smartphone" as IconName,
      title: "Meet Customers on Their Channel",
      description:
        "Younger demographics prefer text communication. AI handles both phone calls and text messages seamlessly, providing consistent, instant response across all channels. Higher engagement, better conversion.",
    },
  ],
  painPoints: [
    {
      problem: "Leads going to competitors with faster response times",
      solution:
        "AI responds to every inquiry within 60 seconds, 24/7. When homeowners request quotes, they get immediate engagement—not a callback hours later. You secure the first consultation while competitors chase.",
    },
    {
      problem: "Missed calls from homeowners seeking flooring estimates",
      solution:
        "Flooring leads call when browsing—often during evenings and weekends. AI answers every call immediately, captures project details, and books consultations. No more lost leads to voicemail.",
    },
    {
      problem: "Inconsistent project details collected from leads",
      solution:
        "AI gathers structured data every time: material type, square footage, number of rooms, subfloor condition, existing flooring removal needed, project timeline, and budget range. Consultants arrive with accurate estimates.",
    },
    {
      problem: "Long sales cycles require persistent follow-up",
      solution:
        "Flooring decisions take weeks. AI automatically follows up: initial engagement, consultation reminders, quote follow-ups, material arrival notifications, and re-engagement of stalled leads. Consistent nurturing without staff overhead.",
    },
    {
      problem: "No way to respond to after-hours quote requests",
      solution:
        "Homeowners browse for flooring nights and weekends. AI responds instantly, captures project details, and books consultations for the next available slot. You wake up to a calendar full of qualified appointments.",
    },
    {
      problem: "Difficulty tracking which marketing channels deliver best leads",
      solution:
        "AI tracks every lead: source, material interest, project value, appointment booked, and conversion status. See which channels deliver high-value flooring jobs and optimize your marketing spend accordingly.",
    },
    {
      problem: "Consultants spending time on unqualified leads",
      solution:
        "AI filters out unqualified prospects before they reach your consultants: captures budget, timeline, project scope, and buying intent. Your team only spends time on genuine opportunities with real potential.",
    },
    {
      problem: "Expensive receptionist or in-house staff cost",
      solution:
        "Traditional hiring costs $35,000-45,000 annually plus benefits. AI provides unlimited 24/7 response, qualification, and scheduling for a fraction of the cost—no sick days, no vacations, no training required.",
    },
    {
      problem: "Inability to handle surge in leads after marketing campaigns",
      solution:
        "AI handles unlimited simultaneous calls and texts. Whether you get 10 leads or 100 leads after an ad campaign or HomeShow promotion, every inquiry gets immediate response and qualification.",
    },
    {
      problem: "Homeowners ghosting after booking consultations",
      solution:
        "AI engages customers immediately, confirms appointments, sends reminders the day before, and follows up if they miss. Reschedules automatically when needed. Higher show-up rates and fewer wasted consultant trips.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI", "Traditional Approach"],
    rows: [
      {
        feature: "Response Time",
        prestyj: "Under 60 seconds",
        others: "Hours to days (or never)",
      },
      {
        feature: "After-Hours Lead Capture",
        prestyj: "24/7, books consultations",
        others: "Voicemail or missed",
      },
      {
        feature: "Project Qualification",
        prestyj: "Structured data collection",
        others: "Inconsistent or incomplete",
      },
      {
        feature: "Consultation Scheduling",
        prestyj: "Instant confirmation",
        others: "Callback required",
      },
      {
        feature: "Follow-Up Automation",
        prestyj: "Multi-touch nurture campaigns",
        others: "Manual or forgotten",
      },
      {
        feature: "Simultaneous Lead Handling",
        prestyj: "Unlimited",
        others: "Limited by staff capacity",
      },
      {
        feature: "Annual Cost",
        prestyj: "Fraction of staff cost",
        others: "$35,000-45,000+ for receptionist",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "Can AI handle flooring-specific questions?",
      answer:
        "AI is configured to gather the information your consultants need: material type (hardwood, laminate, vinyl plank, tile, carpet, stone), square footage, number of rooms, subfloor condition, removal needed, installation timeline, and budget range. It provides general guidance but saves technical recommendations for your in-home consultations.",
    },
    {
      question: "How quickly does AI respond to quote requests?",
      answer:
        "AI responds within 60 seconds, 24/7. Whether a homeowner calls at 9 AM or 9 PM, submits a web form, or sends a text, they get immediate engagement. This speed-to-lead advantage is critical in competitive flooring markets.",
    },
    {
      question: "Does AI integrate with my CRM and scheduling software?",
      answer:
        "Prestyj integrates with major CRM and scheduling platforms. Lead details, consultation appointments, and follow-up activities sync directly to your existing systems. No need to change your workflow—AI enhances it.",
    },
    {
      question: "What about customers who want to speak to a person?",
      answer:
        "AI seamlessly hands off to your team when requested, providing full conversation context. For after-hours calls, it captures all project details and books consultations for the next available slot. Most customers appreciate immediate response and knowing their appointment is confirmed.",
    },
    {
      question: "How does AI handle different flooring materials?",
      answer:
        "AI asks material-specific questions: hardwood (species, solid vs. engineered, stain preference), laminate (thickness, AC rating, underlayment), vinyl plank (SPC vs. WPC, thickness, installation method), tile (ceramic vs. porcelain, size, pattern), carpet (fiber type, padding, pile height). This ensures your consultants arrive prepared.",
    },
    {
      question: "Can AI handle measurement questions?",
      answer:
        "AI asks for rough square footage and number of rooms during qualification. For accurate measurements, AI explains that your consultants will measure during the in-home consultation and schedules the appointment. This sets proper expectations while moving the lead forward.",
    },
    {
      question: "How does AI follow up on long-cycle flooring purchases?",
      answer:
        "Flooring decisions often take weeks. AI automatically sends follow-up messages at strategic intervals: consultation reminders, quote follow-ups, material availability updates, and re-engagement for stalled leads. The persistent but polite follow-up keeps your brand top-of-mind without adding staff workload.",
    },
    {
      question: "What's the ROI for a flooring contractor?",
      answer:
        "Average flooring job: $3,000-15,000. Missing just 2-3 leads per month costs you $6,000-45,000 in lost revenue annually. Most contractors recover 5-15+ previously missed jobs monthly after implementing AI—pure revenue that pays for the service many times over.",
    },
  ],
  cta: {
    headline: "Stop Losing $3K-15K Flooring Jobs to Slow Response",
    subheadline:
      "Homeowners contact 3-5 flooring contractors. The first to respond usually gets the job. AI captures every lead in under 60 seconds, qualifies the project, and books consultations before your competition even returns the call.",
    buttonText: "Book Your Demo",
    footnote: "No credit card required. Live in 1-2 weeks. Perfect for flooring contractors of all sizes.",
  },
});
