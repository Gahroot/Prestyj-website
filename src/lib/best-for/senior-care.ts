import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const seniorCare: BestForPageContent = createBestForPage({
  slug: "senior-care",
  niche: {
    name: "Senior Care Facilities",
    shortName: "Senior Care",
    description: "Senior care facilities and assisted living communities looking for AI-powered family communication and tour scheduling",
  },
  meta: {
    title: "AI Communication for Senior Care Facilities | Family Support | Prestyj",
    description:
      "AI voice agents for senior care handle family inquiries 24/7, schedule tours, manage communication, and support staff. Improve family satisfaction while reducing administrative burden.",
    keywords: [
      "AI phone answering for senior care",
      "senior living facility AI",
      "assisted living automation",
      "senior care communication AI",
      "AI for nursing homes",
      "senior care virtual receptionist",
      "assisted living tour scheduling AI",
      "senior care facility answering service",
      "elder care communication automation",
      "senior living AI assistant",
    ],
  },
  hero: {
    badge: "Senior Care AI",
    headlineAccent: "Senior Care Facilities",
    subheadline:
      "Families call day and night with questions about care, availability, and their loved ones. AI handles every inquiry, schedules tours, provides information, and connects families with staff—improving communication while reducing staff workload.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "PhoneCall" as IconName,
      title: "24/7 Family Communication",
      description:
        "Families call at all hours with questions and concerns. AI answers every call, provides information, takes messages, and connects urgent matters to on-call staff.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Schedule Tours Automatically",
      description:
      "Prospective resident families call to schedule visits. AI handles tour scheduling 24/7, checks availability, sends confirmations, and ensures your sales team never misses a qualified lead.",
    },
    {
      icon: "Heart" as IconName,
      title: "Compassionate, Professional Responses",
      description:
        "AI is trained for senior care contexts with appropriate tone and empathy. Families receive helpful, caring responses while urgent matters are escalated to staff immediately.",
    },
    {
      icon: "FileText" as IconName,
      title: "Information & FAQ Handling",
      description:
        "Frequently asked questions about services, pricing, amenities, and care levels are answered instantly. Staff time is preserved for meaningful resident and family interactions.",
    },
  ],
  painPoints: [
    {
      problem: "After-hours calls from concerned families",
      solution:
        "Families call evenings and weekends with questions about loved ones. AI answers professionally, provides information, takes messages, and reaches on-call staff for urgent matters requiring immediate attention.",
    },
    {
      problem: "Missing tour requests from prospective families",
      solution:
        "Families researching senior living call multiple facilities. AI answers instantly, answers questions about your community, and schedules tours—ensuring you don't lose qualified prospects to competitors with faster response.",
    },
    {
      problem: "Staff time spent on routine inquiries",
      solution:
        "Questions about pricing, services, amenities, availability, and care levels consume hours daily. AI handles all routine inquiries instantly, freeing staff for resident care and family relationship building.",
    },
    {
      problem: "Inconsistent information to callers",
      solution:
        "AI provides accurate, consistent information about your community, services, pricing, and availability. Every caller receives the same high-quality response regardless of when they call or who answers.",
    },
    {
      problem: "Missed calls during staff shifts or meals",
      solution:
        "Senior care facilities operate around the clock, but front desk coverage varies. AI ensures every call is answered, messages are taken, and urgent matters reach appropriate staff regardless of shift schedules.",
    },
    {
      problem: "Language barriers with some families",
      solution:
        "AI can handle multiple languages, ensuring families who aren't comfortable with English still receive excellent service and information about your community.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI", "Traditional Approach"],
    rows: [
      {
        feature: "After-Hours Availability",
        prestyj: "24/7/365",
        others: "Voicemail or on-call cell",
      },
      {
        feature: "Tour Scheduling",
        prestyj: "Automated, instant confirmation",
        others: "Business hours, phone tag",
      },
      {
        feature: "Inquiry Response Time",
        prestyj: "Under 60 seconds",
        others: "Hours to next business day",
      },
      {
        feature: "Information Accuracy",
        prestyj: "Consistent, updated",
        others: "Varies by staff knowledge",
      },
      {
        feature: "Message Taking",
        prestyj: "Complete, delivered immediately",
        others: "Scratch paper, delayed delivery",
      },
      {
        feature: "Staff Time on FAQs",
        prestyj: "Near zero",
        others: "2-4 hours daily",
      },
      {
        feature: "Urgent Call Escalation",
        prestyj: "Automatic to on-call staff",
        others: "Depends on who answers",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does AI handle sensitive senior care communications?",
      answer:
        "AI is trained specifically for senior care contexts with appropriate tone, empathy, and boundaries. For routine inquiries, AI provides helpful information and assistance. For sensitive situations or concerns requiring human judgment, AI takes detailed information and immediately connects the caller with appropriate staff.",
    },
    {
      question: "Can AI schedule facility tours for prospective families?",
      answer:
        "Yes. AI handles tour scheduling 24/7, checks availability, books appointments, and sends confirmations with visit information. Your admissions team receives complete details about prospective residents and their families before tours.",
    },
    {
      question: "How are urgent matters handled?",
      answer:
        "AI is trained to identify urgent situations—health emergencies, family concerns requiring immediate attention, safety issues—and escalates these calls immediately to on-call staff according to your protocols. Routine inquiries are handled efficiently without interruption.",
    },
    {
      question: "Does this work with multiple facility locations?",
      answer:
        "Yes. AI handles multi-location senior care operations, routing calls to the correct facility, providing location-specific information, and transferring between locations when needed. Families calling your main number are directed to the appropriate community.",
    },
    {
      question: "Can families speak to a person when needed?",
      answer:
        "Absolutely. AI seamlessly transfers calls to your staff when requested, providing full conversation context. For routine information and scheduling, many families appreciate instant 24/7 availability without navigating business hours or phone menus.",
    },
    {
      question: "What information can AI provide about services and pricing?",
      answer:
        "AI can answer questions about care levels, services offered, amenities, floor plans, dining options, activities, and pricing guidelines. For complex financial discussions or personalized care assessments, AI collects information and schedules appropriate consultations.",
    },
    {
      question: "How does this improve family satisfaction?",
      answer:
        "Families appreciate 24/7 availability, fast responses to questions, and easy tour scheduling. When their calls are answered quickly and professionally, they feel more confident in the care their loved ones receive. Staff can also spend more time on meaningful interactions rather than administrative tasks.",
    },
  ],
  cta: {
    headline: "Improve Family Communication, Reduce Staff Workload",
    subheadline:
      "Answer every call 24/7, capture every tour request, and free your staff to focus on resident care. Book a demo to see AI handling senior care communications.",
    buttonText: "Book Your Demo",
    footnote: "Designed for senior care sensitivity. No credit card required.",
  },
});
