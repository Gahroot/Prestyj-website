import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const housecallProUsers: BestForPageContent = createBestForPage({
  slug: "housecall-pro-users",
  niche: {
    name: "Housecall Pro Users",
    shortName: "Housecall Pro",
    description:
      "Home service businesses using Housecall Pro for scheduling, dispatching, and customer management",
  },
  meta: {
    title: "AI Lead Response for Housecall Pro Users | Prestyj",
    description:
      "Automate lead response and appointment booking for your Housecall Pro-powered business. AI answers calls, qualifies jobs, and creates bookings in Housecall Pro — 24/7.",
    keywords: [
      "Housecall Pro AI integration",
      "AI for Housecall Pro",
      "Housecall Pro automated booking",
      "Housecall Pro AI receptionist",
      "Housecall Pro lead response",
      "AI appointment setting Housecall Pro",
    ],
  },
  hero: {
    badge: "Built for Housecall Pro",
    headlineAccent: "Your Housecall Pro Schedule",
    subheadline:
      "Stop missing calls on job sites. AI answers every lead, qualifies the job, and books directly into Housecall Pro — keeping your calendar full while you focus on the work.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Calendar" as IconName,
      title: "Direct Schedule Booking",
      description:
        "AI books appointments straight into your Housecall Pro calendar. Customers get confirmed time slots; your team sees new jobs without any manual data entry.",
    },
    {
      icon: "Users" as IconName,
      title: "Customer Record Sync",
      description:
        "AI recognizes returning customers from your Housecall Pro database and updates their records. New customers get created automatically with complete service details.",
    },
    {
      icon: "Briefcase" as IconName,
      title: "Service-Specific Qualification",
      description:
        "AI asks the right questions for each service type — plumbing diagnostics, HVAC maintenance, electrical troubleshooting. Job details flow into Housecall Pro ready for dispatch.",
    },
    {
      icon: "Phone" as IconName,
      title: "24/7 After-Hours Coverage",
      description:
        "Emergency calls at 10 PM? Weekend inquiries? AI handles them all, books into Housecall Pro, and your team sees the jobs first thing Monday morning.",
    },
  ],
  painPoints: [
    {
      problem: "Missing calls while on job sites or driving between appointments",
      solution:
        "AI handles every call while you're working. Leads get qualified and booked into Housecall Pro without pulling you off the ladder or away from a customer.",
    },
    {
      problem: "Spending evenings entering missed-call data into Housecall Pro",
      solution:
        "AI captures all caller information and creates jobs directly in Housecall Pro. When you finish your last appointment, your schedule is already updated.",
    },
    {
      problem: "Seasonal busy periods create scheduling backlogs",
      solution:
        "AI scales instantly during peak seasons. Whether it's summer AC repairs or winter heating emergencies, every caller gets immediate response and booking.",
    },
    {
      problem: "Can't afford a dedicated receptionist or office manager",
      solution:
        "AI provides professional call handling at a fraction of the cost. Small businesses compete with larger companies on responsiveness without the overhead.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj + Housecall Pro", "Housecall Pro Alone", "Answering Service + Housecall Pro"],
    rows: [
      {
        feature: "Call Coverage",
        prestyj: "24/7 automated answering",
        others: "Limited to business hours / Takes messages only",
      },
      {
        feature: "Job Creation",
        prestyj: "Direct to Housecall Pro, instant",
        others: "Manual entry after calls / No CRM access",
      },
      {
        feature: "Customer Recognition",
        prestyj: "Automatic database lookup",
        others: "Manual search required / No access",
      },
      {
        feature: "Booking Confirmation",
        prestyj: "Immediate, during first call",
        others: "Callback required / Message relay delay",
      },
      {
        feature: "Schedule Integration",
        prestyj: "Real-time Housecall Pro calendar sync",
        others: "Manual coordination / Generic scheduling",
      },
      {
        feature: "Scalability",
        prestyj: "Unlimited concurrent calls",
        others: "One at a time / Overflow to voicemail",
      },
      {
        feature: "Monthly Cost",
        prestyj: "Fixed rate, unlimited calls",
        others: "Your time / Per-minute charges",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does Prestyj integrate with Housecall Pro?",
      answer:
        "Prestyj connects to Housecall Pro via secure API. AI reads your customer database for caller recognition, checks real-time availability, and creates jobs directly in your schedule. Setup typically takes a few minutes with your Housecall Pro credentials.",
    },
    {
      question: "Can AI handle quote requests versus direct bookings?",
      answer:
        "Yes. AI can create estimate requests in Housecall Pro for jobs needing on-site quotes, or book direct appointments for standard services with known pricing. You control which service types need estimates versus direct booking.",
    },
    {
      question: "Does it work with multiple technicians on my team?",
      answer:
        "AI reads all technician calendars in Housecall Pro and routes jobs based on availability, skills, or service area. Multi-tech teams and specialized technicians are fully supported.",
    },
    {
      question: "What happens with emergency or after-hours calls?",
      answer:
        "AI handles emergency calls 24/7 with full Housecall Pro context. You configure whether after-hours bookings go into the next available slot or trigger an urgent notification. Routine requests appear on the schedule by morning.",
    },
    {
      question: "Will this work with Housecall Pro's online booking?",
      answer:
        "Yes. Prestyj complements your existing online booking. Phone callers get the same instant booking experience that your web visitors already have — and AI can handle the conversation to qualify the job before booking.",
    },
  ],
  cta: {
    headline: "Fill Your Housecall Pro Calendar Automatically",
    subheadline:
      "Turn every call into a booked job. See how AI + Housecall Pro keeps your schedule packed while you focus on the work that pays.",
    buttonText: "Book a Demo",
    footnote: "No credit card required. Built for service businesses on Housecall Pro.",
  },
});
