import type { SolutionPageContent } from "./types";

export const aiNoShowReduction: SolutionPageContent = {
  slug: "ai-no-show-reduction",
  meta: {
    title: "AI No-Show Reduction | Recover Lost Revenue from Missed Appointments | Prestyj",
    description:
      "Cut no-shows by up to 80% with AI-powered reminders, confirmation calls, and two-way rescheduling. Recover thousands in lost revenue from missed appointments. Built for medical, dental, home services, and real estate.",
    keywords: [
      "AI no-show reduction",
      "appointment reminder automation",
      "AI confirmation calls",
      "reduce patient no-shows",
      "dental no-show prevention",
      "medical appointment reminders AI",
      "two-way appointment rescheduling",
      "missed appointment recovery",
      "AI appointment confirmation",
      "automated patient reminders",
      "no-show reduction software",
      "AI scheduling for clinics",
    ],
  },
  hero: {
    badge: "AI No-Show Reduction Solution",
    headline: "Stop Losing Revenue to",
    headlineAccent: "Missed Appointments.",
    subheadline:
      "Every no-show costs you $150-$500 in lost time. AI sends smart reminders, makes confirmation calls, and reschedules in real-time—cutting no-shows by up to 80%. Built for medical, dental, home services, and real estate.",
    stats: [
      { value: "80%", label: "fewer no-shows", color: "success" },
      { value: "24/7", label: "AI confirmation calls", color: "primary" },
      { value: "5x", label: "ROI in month one", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Every No-Show Is Pure Lost Revenue",
    subheadline:
      "Empty appointment slots can't be recovered. Here's what's costing you thousands every month.",
    points: [
      {
        icon: "UserX",
        title: "15-30% of appointments don't show up",
        description:
          "Industry average no-show rates run 15% for medical, 20% for dental, and up to 30% for home services. That's an empty calendar slot that can't be resold or recovered.",
        color: "destructive",
      },
      {
        icon: "PhoneMissed",
        title: "Manual confirmation calls eat staff time",
        description:
          "Front desk teams spend 2-4 hours daily calling patients to confirm. Most calls go to voicemail. The ones that connect rarely change behavior anyway.",
        color: "warning",
      },
      {
        icon: "MessageSquare",
        title: "Generic text reminders get ignored",
        description:
          "One-way 'Don't forget your appointment' texts have a 95% ignore rate. Without two-way response capability, patients can't easily reschedule when conflicts come up.",
        color: "primary",
      },
      {
        icon: "DollarSign",
        title: "Empty slots can't be backfilled fast enough",
        description:
          "When a patient no-shows at 2pm, you have minutes—not hours—to fill that slot. Without automated waitlist outreach, that revenue is gone for good.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "AI That Actually Prevents No-Shows",
    subheadline:
      "Multi-touch, multi-channel reminders with two-way conversation and real-time rescheduling.",
    benefits: [
      {
        icon: "Bot",
        title: "AI Confirmation Calls",
        description:
          "AI calls patients 24-48 hours before their appointment with natural conversation. Confirms, reschedules, or flags cancellations—all without staff lifting a finger.",
      },
      {
        icon: "MessageSquare",
        title: "Smart Multi-Touch Reminders",
        description:
          "Personalized SMS and email reminders at optimal intervals: 7 days, 48 hours, 24 hours, and 2 hours before. AI adapts cadence based on patient history and risk score.",
      },
      {
        icon: "RefreshCw",
        title: "Two-Way Rescheduling",
        description:
          "Patients reply 'reschedule' and AI handles it instantly—offering open slots, confirming the new time, and updating your calendar. No phone tag, no friction.",
      },
      {
        icon: "Target",
        title: "No-Show Risk Scoring",
        description:
          "AI analyzes patient history, appointment type, time of day, and prior behavior to flag high-risk appointments. Apply extra confirmation touches where they matter most.",
      },
      {
        icon: "Workflow",
        title: "Automated Waitlist Backfill",
        description:
          "When a cancellation hits, AI immediately texts your waitlist with the open slot. First to confirm wins. Empty slots get filled in minutes, not hours.",
      },
      {
        icon: "Heart",
        title: "Missed Appointment Follow-Up",
        description:
          "When patients no-show anyway, AI follows up within hours to reschedule and recover the relationship—turning a lost appointment into a future booking.",
      },
    ],
  },
  calculator: {
    headline: "No-Show Loss Calculator",
    subheadline: "See how much revenue you're losing to missed appointments every month.",
    inputs: {
      leads: { label: "Appointments per month", placeholder: "400", defaultValue: 400 },
      commission: { label: "Average appointment value ($)", placeholder: "250", defaultValue: 250 },
    },
    reactivationRate: 0.2,
    conversionRate: 0.8,
    resultLabel: "Monthly revenue recovered with AI",
  },
  objections: {
    headline: "Common Concerns About AI No-Show Reduction",
    subheadline: "Real answers from practices and businesses already using AI to fight no-shows.",
    objections: [
      {
        objection: "Patients will be annoyed by AI calls",
        response:
          "Modern AI sounds genuinely human and only calls once with a clear purpose: confirm or reschedule. Patients consistently rate AI reminder calls higher than generic robocalls because they're conversational and actually solve scheduling conflicts on the spot.",
      },
      {
        objection: "We already send text reminders",
        response:
          "One-way text reminders are table stakes—and they're not enough. Our data shows practices using only basic SMS still see 15-25% no-shows. Adding AI confirmation calls and two-way rescheduling cuts that by another 60-80% on top of your existing texts.",
      },
      {
        objection: "HIPAA and compliance worry me",
        response:
          "Prestyj is HIPAA-compliant with BAA agreements, encrypted communications, and configurable PHI handling. AI never reveals diagnostic details—just appointment time, location, and confirmation prompts. Trusted by medical and dental practices nationwide.",
      },
      {
        objection: "Our scheduling system is too custom for AI to integrate",
        response:
          "Prestyj integrates with the major EHR, PMS, and scheduling platforms—Epic, Dentrix, Open Dental, ServiceTitan, Salesforce, and more. For custom systems, our API connects directly to your calendar so reschedules happen in real-time, no double entry.",
      },
    ],
  },
  cta: {
    headline: "Ready to Cut No-Shows by 80%?",
    subheadline:
      "Every empty appointment slot is revenue you'll never recover. Stop losing money to no-shows and start filling your calendar automatically.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote: "No commitment required. See how AI prevents no-shows in a 15-minute walkthrough.",
  },
};
