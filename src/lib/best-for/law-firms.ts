import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const lawFirms: BestForPageContent = createBestForPage({
  slug: "law-firms",
  niche: {
    name: "Law Firms & Legal Practices",
    shortName: "Law Firms",
    description: "Attorneys, legal practices, and law firms needing AI intake and lead response",
  },
  meta: {
    title: "AI Voice Intake for Law Firms | Prestyj",
    description:
      "Done-for-you AI receptionist for law firms. Capture new client inquiries 24/7, qualify cases, and schedule consultations. Bar-compliant, integrated with your practice management.",
    keywords: [
      "AI receptionist for law firms",
      "law firm intake automation",
      "legal AI voice assistant",
      "attorney receptionist service",
      "law firm call answering",
      "legal client intake automation",
      "AI for personal injury firms",
    ],
  },
  hero: {
    badge: "Built for Law Firms",
    headlineAccent: "Law Firms & Legal Practices",
    subheadline:
      "Never miss a potential client again. AI answers calls 24/7, qualifies cases, and books consultations—while staying compliant and integrating with your existing systems.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Shield" as IconName,
      title: "Bar-Compliant Intake",
      description:
        "Our AI understands legal ethics constraints. No legal advice, no guarantees—just professional intake that qualifies case types and connects prospects to attorneys.",
    },
    {
      icon: "Clock" as IconName,
      title: "Capture After-Hours Calls",
      description:
        "Legal emergencies don't follow business hours. AI responds immediately when potential clients call—evenings, weekends, holidays. No more lost intakes to voicemail.",
    },
    {
      icon: "Filter" as IconName,
      title: "Case Qualification",
      description:
        "AI gathers essential details: case type, incident date, location, injuries or damages. Qualified consultations get booked, non-viable inquiries are filtered out.",
    },
    {
      icon: "Zap" as IconName,
      title: "Integrates with Your Stack",
      description:
        "Clio, MyCase, PracticePanther, or custom CRM—we handle the integration. Intake data syncs automatically, consultations appear on your calendar.",
    },
  ],
  painPoints: [
    {
      problem: "Potential clients call after hours and reach voicemail",
      solution:
        "AI answers every call immediately, 24/7. When someone's in crisis or just had an accident, they get a human-like response—not a voicemail they may not leave a message on.",
    },
    {
      problem: "Staff spend hours on unqualified calls",
      solution:
        "AI filters and qualifies before your team ever gets involved. Case type, venue, damages—pre-qualified so your attorneys only spend time on viable cases.",
    },
    {
      problem: "Intake consistency varies across staff",
      solution:
        "AI follows the same intake script every time. Consistent questions, consistent data capture, consistent experience for every potential client.",
    },
    {
      problem: "High cost of after-hours answering services",
      solution:
        "Traditional services charge $2-4 per minute. Prestyj's AI handles unlimited calls for one flat monthly rate—often 80% less than human services.",
    },
    {
      problem: "Missed calls mean missed billable hours",
      solution:
        "Every answered call is a potential case. AI captures intakes your staff would miss, and faster response means higher conversion from prospect to client.",
    },
  ],
  comparison: {
    headers: ["Feature", "Prestyj AI", "Traditional Intake Services"],
    rows: [
      {
        feature: "Cost per Call",
        prestyj: "Unlimited, flat monthly",
        others: "$2-4 per minute",
      },
      {
        feature: "Response Time",
        prestyj: "Instant, 24/7",
        others: "During business hours only",
      },
      {
        feature: "Case Qualification",
        prestyj: "Built-in legal screening",
        others: "Basic message taking",
      },
      {
        feature: "Intake Consistency",
        prestyj: "Same script every time",
        others: "Varies by staff member",
      },
      {
        feature: "CRM Integration",
        prestyj: "Automatic sync",
        others: "Manual data entry required",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "Can AI intake work for my specific practice area?",
      answer:
        "Yes. We train AI for your specific case types: personal injury, family law, criminal defense, estate planning, employment law, or any practice. Case-specific qualification flows are built for your needs.",
    },
    {
      question: "Is AI intake compliant with bar rules?",
      answer:
        "Yes. Our AI is designed to handle intake, not provide legal advice. No guarantees of outcomes, no specific legal recommendations—just professional information gathering and connection to attorneys.",
    },
    {
      question: "What if a caller needs immediate legal advice?",
      answer:
        "AI recognizes urgent situations and emergency calls, escalating them immediately to on-call attorneys or providing appropriate emergency resources when required.",
    },
    {
      question: "Can AI integrate with Clio or other practice management?",
      answer:
        "Yes. We integrate with Clio, MyCase, PracticePanther, and others. New client data and consultation bookings sync automatically—no manual data entry required.",
    },
    {
      question: "How much does this cost compared to hiring intake staff?",
      answer:
        "One full-time intake coordinator costs $4K-6K/month salary plus benefits. Prestyj covers 24/7 intake for a fraction of that—with zero turnover, consistent quality, and after-hours coverage included.",
    },
  ],
  cta: {
    headline: "Never Miss a Potential Client Call Again",
    subheadline:
      "See how law firms use AI to capture more intakes, qualify better cases, and keep attorneys focused on billable work. Schedule a demo to see AI intake tailored to your practice.",
    buttonText: "Book Your Demo",
    footnote: "Bar-compliant. Practice-integrated. Live in 1-2 weeks.",
  },
});
