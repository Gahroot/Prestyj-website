import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const gymsAndFitnessCenters: BestForPageContent = createBestForPage({
  slug: "gyms-and-fitness-centers",
  niche: {
    name: "Gyms and Fitness Centers",
    shortName: "Gyms & Fitness",
    description: "Gyms and fitness centers looking for AI-powered membership intake, class booking, and member support",
  },
  meta: {
    title: "AI Phone Answering for Gyms & Fitness Centers | Boost Signups | Prestyj",
    description:
      "AI voice agents for gyms handle membership inquiries, class bookings, and tour scheduling 24/7. Capture more signups, reduce staff workload, and never miss a prospective member call again.",
    keywords: [
      "AI phone answering for gyms",
      "gym membership AI",
      "fitness center automated booking",
      "gym class booking AI",
      "AI for gyms",
      "gym receptionist automation",
      "gym answering service",
      "fitness center AI",
      "automated gym membership sales",
      "gym tour scheduling AI",
    ],
  },
  hero: {
    badge: "Gym & Fitness AI",
    headlineAccent: "Gyms and Fitness Centers",
    subheadline:
      "Prospective members call outside staffed hours. AI answers every inquiry, books tours, schedules classes, and handles membership questions 24/7—so your staff can focus on training and member experience.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Users" as IconName,
      title: "Capture Every Membership Inquiry",
      description:
        "People call about memberships early morning, late night, and during off-hours. AI answers every call, collects contact info, answers questions, and schedules tours—before they visit a competitor.",
    },
    {
      icon: "Calendar" as IconName,
      title: "24/7 Class Booking & Scheduling",
      description:
        "Members book classes anytime without calling during business hours. AI checks availability, reserves spots, sends confirmations, and manages waitlists automatically.",
    },
    {
      icon: "PhoneCall" as IconName,
      title: "Reduce Front Desk Workload",
      description:
        "AI handles routine inquiries: hours, pricing, class schedules, amenities questions. Your team focuses on member service, tours, and check-ins instead of answering the same questions repeatedly.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Higher Tour Show Rates",
      description:
        "AI sends automated reminders before scheduled tours, confirms appointments, and reschedules if needed. Show rates increase by 40% when AI manages confirmations.",
    },
  ],
  painPoints: [
    {
      problem: "Missed calls from prospective members = lost revenue",
      solution:
        "Each missed membership opportunity costs $500-$1,500+ in annual revenue. AI answers every call, qualifies prospects, and schedules tours automatically. No more lost leads to voicemail.",
    },
    {
      problem: "Staff tied up answering routine questions",
      solution:
        "Questions about hours, pricing, class schedules, and amenities consume hours daily. AI handles all routine inquiries instantly, freeing staff for higher-value work like tours and member engagement.",
    },
    {
      problem: "Class booking requires staff time and coordination",
      solution:
        "Members call or visit to book classes, check availability, and manage schedules. AI handles all class bookings, cancellations, and waitlist management 24/7 without staff involvement.",
    },
    {
      problem: "No-shows for scheduled facility tours",
      solution:
        "AI sends reminder calls and texts before tours, confirms appointments, and reschedules if plans change. Show rates increase significantly, and staff time isn't wasted on empty tour slots.",
    },
    {
      problem: "New member onboarding and paperwork questions",
      solution:
        "AI answers questions about membership options, enrollment processes, and required documentation. Prospects arrive informed and ready to sign, shortening the sales process.",
    },
    {
      problem: "After-hours inquiries go unanswered until next day",
      solution:
        "Fitness inquiries happen around the clock—early birds before 6am, night owls after 10pm. AI responds instantly, collects information, and ensures fast follow-up while interest is high.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI", "Traditional Approach"],
    rows: [
      {
        feature: "Missed Calls",
        prestyj: "Zero (answers every call)",
        others: "30-50% outside staffed hours",
      },
      {
        feature: "Tour Scheduling",
        prestyj: "24/7, instant confirmation",
        others: "Business hours only",
      },
      {
        feature: "Class Booking",
        prestyj: "Automated, any time",
        others: "Phone or in-person only",
      },
      {
        feature: "Inquiry Response Time",
        prestyj: "Under 60 seconds",
        others: "Hours to next business day",
      },
      {
        feature: "Tour Show Rate",
        prestyj: "40% higher with reminders",
        others: "No-show rate 30-50%",
      },
      {
        feature: "Staff Time on Routine Questions",
        prestyj: "Near zero",
        others: "2-4 hours daily",
      },
      {
        feature: "Waitlist Management",
        prestyj: "Automated fill alerts",
        others: "Manual or none",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does AI handle gym membership inquiries?",
      answer:
        "AI answers every call, asks qualifying questions about fitness goals, explains membership options, collects contact information, and schedules facility tours. Inquiry details and conversation context are shared with your team for seamless follow-up.",
    },
    {
      question: "Can AI manage class bookings and schedules?",
      answer:
        "Yes. AI accesses your class schedule in real-time, checks availability, books member reservations, manages cancellations, and handles waitlists automatically. Members can book via voice call or text without accessing a separate app.",
    },
    {
      question: "Does this integrate with gym management software?",
      answer:
        "Prestyj integrates with major gym and fitness management systems including ABC Fitness, Mindbody, Glofox, Zen Planner, and EZFacility. Member data, class schedules, and tour bookings sync automatically.",
    },
    {
      question: "What about questions about personal training?",
      answer:
        "AI answers basic questions about personal training packages, pricing, and trainer availability. For detailed consultations, AI collects prospect information and schedules a call or meeting with a trainer directly.",
    },
    {
      question: "Can members still speak to a human if needed?",
      answer:
        "Absolutely. AI seamlessly transfers calls to your staff when requested, providing full conversation context. For routine questions and bookings, most members prefer instant automated service over waiting on hold.",
    },
    {
      question: "How does AI handle membership cancellations or freezes?",
      answer:
        "AI can process standard requests like membership freezes or cancellations according to your policies. For complex situations or payment issues, AI transfers to staff with full documentation of the conversation.",
    },
    {
      question: "What about multiple gym locations?",
      answer:
        "AI handles multi-location operations seamlessly, routing calls to the correct location, providing location-specific information (hours, amenities, class schedules), and transferring between locations when needed.",
    },
  ],
  cta: {
    headline: "Stop Losing $500-$1,500+ Per Missed Membership Inquiry",
    subheadline:
      "Capture every prospect, book more tours, and give your staff time to focus on member experience. Book a demo to see AI handling gym calls.",
    buttonText: "Book Your Demo",
    footnote: "Works with all major gym management systems. No credit card required.",
  },
});
