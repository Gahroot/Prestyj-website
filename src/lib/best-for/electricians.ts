import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const electricians: BestForPageContent = createBestForPage({
  slug: "electricians",
  niche: {
    name: "Electricians",
    shortName: "Electricians",
    description: "Electrical contractors looking for AI-powered call handling, emergency dispatch, and job scheduling",
  },
  meta: {
    title: "AI Phone Answering for Electricians | Emergency Dispatch | Prestyj",
    description:
      "AI voice agents for electricians handle customer calls 24/7, qualify emergencies, schedule service calls, and integrate with job management software. Never miss an emergency call while on the job.",
    keywords: [
      "AI phone answering for electricians",
      "electrician answering service",
      "electrical contractor automation",
      "emergency dispatch AI",
      "AI for electricians",
      "electrician call handling",
      "electrical service scheduling AI",
      "electrician virtual receptionist",
      "automated electrical contractor calls",
      "electrician booking AI",
    ],
  },
  hero: {
    badge: "Electrical AI",
    headlineAccent: "Electricians",
    subheadline:
      "Emergency calls come while you're on jobs, with customers, or offline. AI answers every call, qualifies emergencies, schedules service, and keeps your calendar full—so you can focus on the work.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Zap" as IconName,
      title: "Never Miss an Emergency Call",
      description:
        "Electrical emergencies don't wait for convenient times. AI answers every call, identifies urgent situations (power outages, safety hazards), and reaches you immediately for true emergencies.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Schedule Service Calls 24/7",
      description:
      "Customers call evenings, weekends, and early mornings. AI books appointments, checks your availability, and confirms service calls—filling your schedule while you're off the clock.",
    },
    {
      icon: "Filter" as IconName,
      title: "Qualify Leads & Prioritize Jobs",
      description:
        "AI asks the right questions to understand the problem, location, and urgency. Qualified service calls go on your calendar. Tire-kickers get information. True emergencies reach you instantly.",
    },
    {
      icon: "PhoneCall" as IconName,
      title: "Professional Image, Always",
      description:
        "Customers get immediate, professional responses—never voicemail or unanswered phones. Quick responses build trust and increase the likelihood of winning the job.",
    },
  ],
  painPoints: [
    {
      problem: "Missing emergency calls while working on jobs",
      solution:
        "When you're with a customer or focused on work, you can't answer every call. AI qualifies each call—emergency service calls reach you immediately, routine requests get scheduled automatically.",
    },
    {
      problem: "Potential customers calling competitors when you don't answer",
      solution:
        "Electrical problems need fast solutions. When customers can't reach you, they call the next electrician. AI responds instantly, captures the job, and schedules service before they look elsewhere.",
    },
    {
      problem: "Time wasted on non-qualified calls",
      solution:
        "AI filters calls by asking about the problem, location, and timing. Non-emergencies get scheduled, information requests get answered, and only qualified jobs or true emergencies interrupt your work.",
    },
    {
      problem: "After-hours calls going to voicemail",
      solution:
        "Customers seeking emergency electrical service need immediate help. AI answers 24/7, assesses urgency, schedules next-day service for routine calls, and reaches you for true emergencies.",
    },
    {
      problem: "Difficult to answer phones while working",
      solution:
        "Working with electricity requires focus and safety. AI handles all incoming calls so you can give full attention to the job at hand. Review call summaries and return qualified leads when convenient.",
    },
    {
      problem: "Booking and scheduling takes time away from work",
      solution:
        "AI schedules appointments directly into your calendar, sends confirmations to customers, and manages rescheduling requests. Your calendar fills automatically while you focus on completing jobs.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI", "Traditional Approach"],
    rows: [
      {
        feature: "Missed Emergency Calls",
        prestyj: "Zero with instant escalation",
        others: "Go to voicemail, lost business",
      },
      {
        feature: "After-Hours Availability",
        prestyj: "24/7/365",
        others: "Voicemail or personal phone",
      },
      {
        feature: "Call Qualification",
        prestyj: "Automated screening",
        others: "Time spent on every call",
      },
      {
        feature: "Scheduling Efficiency",
        prestyj: "Direct to calendar",
        others: "Manual entry, phone tag",
      },
      {
        feature: "Emergency vs. Routine",
        prestyj: "AI categorizes, escalates appropriately",
        others: "All calls equal priority",
      },
      {
        feature: "Customer Response Time",
        prestyj: "Under 60 seconds",
        others: "Hours to days",
      },
      {
        feature: "Professional Image",
        prestyj: "Always answered, professional",
        others: "Voicemail, missed calls",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does AI identify emergency electrical calls?",
      answer:
        "AI asks targeted questions to assess urgency: Is there a power outage? Are there sparks or burning smells? Is this a safety hazard? Are lights flickering? Calls indicating safety issues, complete power loss, or fire hazards trigger immediate escalation to you based on your preferences.",
    },
    {
      question: "Can AI schedule service calls directly?",
      answer:
        "Yes. AI accesses your calendar, checks availability, books appointments, and sends confirmations to customers. Service calls appear on your schedule with full details about the problem, location, and contact information.",
    },
    {
      question: "Does this integrate with electrical contractor software?",
      answer:
        "Prestyj integrates with major trade contractor software including ServiceTitan, Housecall Pro, Jobber, and JobNimbus. Job details, customer information, and scheduling sync automatically with your existing workflow.",
    },
    {
      question: "What about non-emergency informational calls?",
      answer:
        "AI handles all routine inquiries: pricing estimates (for standard jobs), availability, service area questions, and general information. Customers get helpful answers without your time, and only qualified leads reach your phone.",
    },
    {
      question: "Can I still answer calls directly when I want?",
      answer:
        "Absolutely. You can answer calls anytime, and AI provides context before you connect. During times when you're busy or focused on work, AI handles all calls and routes true emergencies to you immediately.",
    },
    {
      question: "How does AI handle after-hours emergency pricing?",
      answer:
        "AI can communicate your after-hours rates and emergency service fees according to your pricing structure. Customers understand costs upfront, reducing disputes and ensuring you're compensated appropriately for emergency work.",
    },
    {
      question: "Can AI help with quote requests?",
      answer:
        "AI gathers information about the project, location, and scope of work. For simple jobs, AI may provide estimate ranges based on your standard pricing. For complex projects, AI collects all relevant details and schedules a formal quote visit, providing you with complete information.",
    },
    {
      question: "What if a customer needs to speak directly to the electrician?",
      answer:
        "AI seamlessly transfers calls when requested or when the situation requires your direct attention. Customers can always reach a person when needed, while routine calls are handled efficiently by AI.",
    },
  ],
  cta: {
    headline: "Never Miss Another Emergency Service Call",
    subheadline:
      "Capture every call, qualify emergencies, fill your schedule automatically, and maintain a professional image. Book a demo to see AI handling electrical contractor calls.",
    buttonText: "Book Your Demo",
    footnote: "Works with all major contractor software. No credit card required.",
  },
});
