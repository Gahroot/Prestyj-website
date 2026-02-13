import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const jobberUsers: BestForPageContent = createBestForPage({
  slug: "jobber-users",
  niche: {
    name: "Jobber Users",
    shortName: "Jobber",
    description:
      "Small to mid-sized service businesses using Jobber for scheduling and customer management",
  },
  meta: {
    title: "AI Appointment Setting for Jobber Users | Prestyj",
    description:
      "Automate appointment booking for your Jobber-powered service business. AI answers calls, qualifies leads, and creates jobs in Jobber—24/7.",
    keywords: [
      "AI for Jobber",
      "Jobber AI integration",
      "Jobber automated booking",
      "AI appointment setting Jobber",
      "Jobber AI receptionist",
    ],
  },
  hero: {
    badge: "Built for Jobber",
    headlineAccent: "Your Jobber Workflow",
    subheadline:
      "Stop missing calls while you're on the job. AI answers every lead, books appointments into Jobber, and keeps your calendar full—even when you're busy.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Briefcase" as IconName,
      title: "Automatic Job Creation",
      description:
        "AI creates jobs directly in Jobber with all customer details, service description, and scheduling preferences. No manual entry when you get off the ladder.",
    },
    {
      icon: "Users" as IconName,
      title: "Client Record Management",
      description:
        "AI recognizes returning clients from your Jobber database and updates their records. New clients get added automatically with complete contact information.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Schedule Optimization",
      description:
        "AI reads your Jobber calendar in real-time to offer accurate availability. Book appointments that fit your route and maximize billable hours.",
    },
    {
      icon: "Phone" as IconName,
      title: "24/7 Lead Capture",
      description:
        "Service calls happen outside business hours. AI answers every call, captures job details, and books appointments—even at 7 PM when you're finishing your last job.",
    },
  ],
  painPoints: [
    {
      problem: "Missing calls while on job sites or driving between appointments",
      solution:
        "AI handles all incoming calls while you focus on the work. Leads get qualified and booked into Jobber without interrupting your day.",
    },
    {
      problem: "Spending evenings returning missed calls and booking jobs",
      solution:
        "AI handles booking during the day. When you finish your last appointment, your schedule is already filled—no evening admin work required.",
    },
    {
      problem: "Seasonal busy periods create booking backlogs",
      solution:
        "AI scales instantly during peak seasons. Spring lawn care rush or winter snow removal—every caller gets immediate response and booking.",
    },
    {
      problem: "Can't afford dedicated office staff as a small business",
      solution:
        "AI provides professional call handling at a fraction of receptionist cost. Compete with larger companies on customer service without the overhead.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj + Jobber", "Jobber Alone", "Answering Service + Jobber"],
    rows: [
      {
        feature: "Call Coverage",
        prestyj: "24/7 automated answering",
        others: "Limited to when you're available / Takes messages only",
      },
      {
        feature: "Job Creation",
        prestyj: "Direct to Jobber, instant",
        others: "Manual entry after calls / No CRM integration",
      },
      {
        feature: "Client Recognition",
        prestyj: "Automatic database lookup",
        others: "Manual search / No access to your data",
      },
      {
        feature: "Booking Confirmation",
        prestyj: "Immediate, during first call",
        others: "Callback required / Message relay delay",
      },
      {
        feature: "Schedule Integration",
        prestyj: "Real-time Jobber calendar sync",
        others: "Manual coordination / Generic time-taking",
      },
      {
        feature: "Scalability",
        prestyj: "Unlimited concurrent calls",
        others: "One call at a time / Overflow to voicemail",
      },
      {
        feature: "Cost Structure",
        prestyj: "Fixed monthly rate",
        others: "Time cost / Per-minute charges",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does AI integrate with my Jobber account?",
      answer:
        "Prestyj connects to Jobber via secure API. AI reads your client database, checks calendar availability, and creates jobs directly. Setup takes minutes with your Jobber login credentials.",
    },
    {
      question: "Can AI handle quote requests vs. booking jobs?",
      answer:
        "Yes. AI can create quote requests in Jobber for jobs needing on-site estimates, or book direct appointments for standard services with known pricing. You configure which services need quotes.",
    },
    {
      question: "What if I have multiple team members with separate calendars?",
      answer:
        "AI reads all team member calendars in Jobber and can route jobs based on service area, skills, or availability. Multi-person crews and specialized technicians are fully supported.",
    },
    {
      question: "Does it work for recurring service appointments?",
      answer:
        "Yes. AI can set up recurring jobs in Jobber—weekly lawn maintenance, monthly pest control, seasonal cleanings. Clients get consistent scheduling without repeated booking calls.",
    },
    {
      question: "What happens when my schedule is fully booked?",
      answer:
        "AI offers your next available slot or can add callers to a waitlist in Jobber. You control whether AI can extend hours, suggest alternate dates, or take priority emergency calls.",
    },
  ],
  cta: {
    headline: "Never Miss a Jobber Lead Again",
    subheadline:
      "Keep your calendar full while you're in the field. See how AI + Jobber turns every call into a booked job—automatically.",
    buttonText: "Book a Demo",
    footnote: "No credit card required. Perfect for service businesses on Jobber.",
  },
});
