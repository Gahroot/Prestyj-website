import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const sidingContractors: BestForPageContent = createBestForPage({
  slug: "siding-contractors",
  niche: {
    name: "Siding Contractors",
    shortName: "Siding Contractors",
    description: "Siding contractors and home exterior professionals seeking AI-powered lead response",
  },
  meta: {
    title: "AI Voice Agents for Siding Contractors | Prestyj",
    description:
      "AI voice and text agents for siding companies. Respond to leads in under 60 seconds, qualify jobs (vinyl, fiber cement, wood), and book consultations. High-ticket siding jobs demand instant response.",
    keywords: [
      "AI voice agents siding contractors",
      "AI answering service siding companies",
      "automated lead response siding",
      "siding AI receptionist",
      "AI for siding contractors",
      "vinyl siding lead response",
      "fiber cement siding answering service",
    ],
  },
  hero: {
    badge: "AI for Siding Contractors",
    headlineAccent: "Siding Contractors",
    subheadline:
      "Average siding job: $8,000-30,000. In competitive markets, speed wins. AI responds to every lead within 60 seconds, qualifies project scope, books consultations, and follows up automatically—while competitors are still returning voicemails.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Zap" as IconName,
      title: "Respond to Leads in Under 60 Seconds",
      description:
        "Homeowners request quotes from 3-5 contractors. The first to respond wins. AI answers every inquiry instantly, 24/7—capturing the lead while competitors are still returning voicemails.",
    },
    {
      icon: "Home" as IconName,
      title: "Qualify Siding Projects Accurately",
      description:
        "AI captures the details that matter: siding material (vinyl, fiber cement, wood, metal), square footage, story count, project scope, and timeline. Your sales team arrives prepared with accurate estimates.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Book Consultations Automatically",
      description:
        "AI schedules appointments directly into your calendar. Homeowners choose available time slots, receive confirmations, and get reminders. Your estimators show up to a full pipeline every day.",
    },
    {
      icon: "RefreshCw" as IconName,
      title: "Automated Follow-Up That Converts",
      description:
        "Most siding sales happen after 3-5 touchpoints. AI automatically follows up via text and voice, nurturing leads through your sales funnel without adding staff workload.",
    },
    {
      icon: "DollarSign" as IconName,
      title: "Protect Your High-Value Pipeline",
      description:
        "At $8K-30K per job, every missed call is expensive. AI ensures no opportunity falls through the cracks. Most contractors recover 5-10+ missed jobs monthly—pure revenue improvement.",
    },
    {
      icon: "Smartphone" as IconName,
      title: "Text & Voice in One Platform",
      description:
        "Meet customers where they are. AI handles both phone calls and text messages, providing consistent response times across all channels. Younger customers prefer text—AI accommodates both preferences seamlessly.",
    },
  ],
  painPoints: [
    {
      problem: "Leads going to competitors with faster response times",
      solution:
        "AI responds to every inquiry within 60 seconds, 24/7. When homeowners submit quote requests, they get immediate engagement—not a callback hours later. You're first in line while competitors chase.",
    },
    {
      problem: "Missed calls from homeowners requesting quotes",
      solution:
        "Siding leads call when they see your marketing—often during evenings and weekends. AI answers every call immediately, captures project details, and books consultations. No more lost leads to voicemail.",
    },
    {
      problem: "Inconsistent qualification information collected from leads",
      solution:
        "AI gathers the same structured data every time: material type, square footage, number of stories, existing condition, project timeline, and budget range. Your estimators arrive prepared with accurate quotes.",
    },
    {
      problem: "Follow-up falling through the cracks during busy season",
      solution:
        "AI automatically follows up on every lead: initial response, consultation reminders, quote follow-ups, and re-engagement of stale leads. Consistent nurturing without staff overhead.",
    },
    {
      problem: "No way to respond to after-hours quote requests",
      solution:
        "Homeowners browse for contractors nights and weekends. AI responds instantly, captures project details, and books consultations for the next available slot. You wake up to a calendar full of qualified appointments.",
    },
    {
      problem: "Difficulty tracking lead sources and campaign performance",
      solution:
        "AI tracks every lead: source, material interest, project value, appointment booked, and conversion status. See exactly which marketing channels deliver high-value siding leads and optimize your spend accordingly.",
    },
    {
      problem: "Sales team spending time on unqualified leads",
      solution:
        "AI filters out unqualified prospects before they reach your sales team: captures budget, timeline, project scope, and buying intent. Estimators only spend time on genuine opportunities with real potential.",
    },
    {
      problem: "Expensive receptionist or in-house staff cost",
      solution:
        "Traditional hiring costs $35,000-45,000 annually plus benefits. AI provides unlimited 24/7 response, qualification, and scheduling for a fraction of the cost—no sick days, no vacations, no training required.",
    },
    {
      problem: "Inability to handle surge in quote requests after marketing pushes",
      solution:
        "AI handles unlimited simultaneous calls and texts. Whether you get 10 leads or 100 leads after an ad campaign or direct mail drop, every inquiry gets immediate response and qualification.",
    },
    {
      problem: "Homeowners ghosting after requesting quotes",
      solution:
        "AI engages customers immediately in their preferred channel (voice or text), confirms consultations, sends reminders, and follows up if they miss appointments. Higher show-up rates and fewer wasted estimator trips.",
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
        prestyj: "3-5+ automated touchpoints",
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
      question: "Can AI handle siding-specific questions?",
      answer:
        "AI is configured to gather the information your estimators need: material type (vinyl, fiber cement, wood, metal), square footage, number of stories, existing condition, project scope, and timeline. It provides general guidance but saves technical assessments for your in-person consultations.",
    },
    {
      question: "How quickly does AI respond to quote requests?",
      answer:
        "AI responds within 60 seconds, 24/7. Whether a homeowner calls at 9 AM or 9 PM, submits a web form, or sends a text, they get immediate engagement. This speed-to-lead advantage is critical in competitive siding markets.",
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
      question: "How does AI handle different siding materials?",
      answer:
        "AI asks material-specific questions: vinyl (color, profile, insulation), fiber cement (brand, style, paint color match), wood (species, stain vs. paint), metal (type, finish). This ensures your estimators arrive knowing the project scope.",
    },
    {
      question: "Can AI distinguish between repair and full replacement projects?",
      answer:
        "Yes. AI asks qualifying questions to determine project scope: extent of damage, age of existing siding, homeowner goals, budget range. Repair leads get routed appropriately; full replacement projects receive priority scheduling for your sales team.",
    },
    {
      question: "What's the ROI for a siding contractor?",
      answer:
        "Average siding job: $8,000-30,000. Missing just 2-3 leads per month costs you $16,000-90,000 in lost revenue annually. Most contractors recover 5-10+ previously missed jobs monthly after implementing AI—pure revenue that pays for the service many times over.",
    },
  ],
  cta: {
    headline: "Stop Losing $8K-30K Siding Jobs to Slow Response Times",
    subheadline:
      "Homeowners contact 3-5 contractors. The first to respond wins. AI captures every lead in under 60 seconds, qualifies the project, and books consultations before your competition even returns the call.",
    buttonText: "Book Your Demo",
    footnote: "No credit card required. Live in 1-2 weeks. Perfect for siding contractors of all sizes.",
  },
});
