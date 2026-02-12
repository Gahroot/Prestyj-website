import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const plumbing: BestForPageContent = createBestForPage({
  slug: "plumbing",
  niche: {
    name: "Plumbing Companies",
    shortName: "Plumbing",
    description:
      "Plumbing contractors and emergency plumbing services seeking AI phone answering and dispatch",
  },
  meta: {
    title: "Plumbing AI Answering Service & Plumber Phone System | Prestyj",
    description:
      "AI phone answering for plumbing companies. Handle emergency calls 24/7, qualify jobs, verify service area, and dispatch to your technicians. Never miss a $400-2,000 emergency plumbing job.",
    keywords: [
      "plumbing AI answering service",
      "plumber phone system",
      "emergency plumbing answering service",
      "plumbing call answering",
      "AI dispatch for plumbers",
      "plumbing business phone system",
      "24/7 plumbing answering service",
    ],
  },
  hero: {
    badge: "Built for Plumbing Companies",
    headlineAccent: "Plumbing Contractors",
    subheadline:
      "Plumbing emergencies don't wait for business hours. AI answers every call 24/7, qualifies emergency vs. routine, verifies service area, and dispatches to technicians. Never miss another $400-2,000 emergency job.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "AlertTriangle" as IconName,
      title: "Capture Every Emergency Job",
      description:
        "Burst pipes, overflowing toilets, water heaters down—customers need help NOW. AI answers every emergency call immediately, qualifies urgency, and dispatches your on-call technician. Competitors with voicemail lose the job.",
    },
    {
      icon: "Globe" as IconName,
      title: "Service Area Verification",
      description:
        "AI confirms the job location is in your service area before dispatching. Asks for address or zip code, cross-references your coverage map, and routes accordingly. No more sending technicians to jobs outside your territory.",
    },
    {
      icon: "Wrench" as IconName,
      title: "Job Qualification & Triage",
      description:
        "AI asks the right questions: problem type, water damage, emergency timeline, property type. True emergencies (active leaks, no water, flooding) dispatch immediately. Routine jobs scheduled appropriately. Technicians arrive prepared.",
    },
    {
      icon: "Clock" as IconName,
      title: "24/7 Availability for True Emergencies",
      description:
        "Plumbing disasters happen at 2 AM, weekends, holidays. AI is always on—every emergency call gets immediate response, qualification, and dispatch. No voicemail, no callbacks, no lost jobs to competitors with live answering.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Routine Job Scheduling",
      description:
        "AI schedules non-emergency jobs directly into your calendar: fixture repairs, installations, maintenance, water heater replacements. Confirms appointment details and sends reminders. Technicians' schedules fill automatically.",
    },
    {
      icon: "DollarSign" as IconName,
      title: "High ROI on Captured Jobs",
      description:
        "Average emergency plumbing job: $400-2,000. Missing just 2-3 calls per month pays for your entire month of AI service. Most plumbing companies recover 10-20+ missed jobs monthly—pure profit improvement.",
    },
  ],
  painPoints: [
    {
      problem: "Emergency calls going to voicemail while customers call competitors",
      solution:
        "AI answers every emergency call immediately, 24/7. Qualifies the problem, confirms it's an emergency, verifies service area, and dispatches your on-call technician within 60 seconds. Customers get help before they call your competition.",
    },
    {
      problem: "Technicians dispatched to jobs outside service area",
      solution:
        "AI asks for location upfront, verifies it's within your service area, and only then dispatches. No more wasted trips, no more angry technicians, no more unpaid drive time. Service area enforcement automated.",
    },
    {
      problem: "No way to distinguish true emergencies from routine calls",
      solution:
        "AI triages every call: active leaks, flooding, no water, burst pipes = emergency dispatch. Leaky faucets, slow drains, fixture replacements = scheduled appointment. On-call technicians only woken up for true emergencies.",
    },
    {
      problem: "After-hours calls costing $50-100+ with answering services",
      solution:
        "Traditional answering services charge per minute and per call. AI provides unlimited 24/7 answering for one flat rate—no per-call fees, no per-minute charges. Scale your call volume without scaling your bill.",
    },
    {
      problem: "Phone ringing off the hook during peak hours (mornings, after storms)",
      solution:
        "AI handles unlimited simultaneous calls—no busy signals, no hold times. Every caller gets immediate response, qualification, and routing. Peak periods like weekday mornings and post-storm surges handled gracefully.",
    },
    {
      problem: "Missed calls from customers needing immediate help",
      solution:
        "Customers with plumbing emergencies don't leave voicemail—they call the next plumber. AI answers every call, qualifies urgency, and either dispatches emergency help or schedules prompt service. No more lost emergency revenue.",
    },
    {
      problem: "Difficulty scheduling routine jobs around emergency dispatch",
      solution:
        "AI manages your calendar: emergency slots reserved for on-call, routine appointments filled in available windows. Handles rescheduling, cancellations, and waitlist management automatically. Optimal technician scheduling.",
    },
    {
      problem: "Follow-up calls for quotes and appointment reminders taking staff time",
      solution:
        "AI handles quote follow-up calls, appointment confirmations, and reminder calls automatically. Technicians know their schedule, customers remember appointments, and your office staff freed for other work.",
    },
    {
      problem: "No visibility into after-hours call volume and types",
      solution:
        "AI tracks every call: time, type (emergency vs. routine), location, job value, disposition. See exactly what's coming in after hours, which neighborhoods generate calls, and where to focus marketing efforts.",
    },
    {
      problem: "Weekend and holiday emergency coverage expensive or unavailable",
      solution:
        "AI provides 24/7/365 coverage at no extra charge—weekends, holidays, nights included. Emergency calls dispatched appropriately, routine calls scheduled for next business day. Consistent coverage without overtime costs.",
    },
  ],
  comparison: {
    headers: ["Feature", "Prestyj AI", "Traditional Answering Service"],
    rows: [
      {
        feature: "Emergency Response",
        prestyj: "Under 60 seconds, 24/7",
        others: "5-15 minutes (if they answer)",
      },
      {
        feature: "Service Area Verification",
        prestyj: "Automated before dispatch",
        others: "Technician discovers on arrival",
      },
      {
        feature: "Job Qualification",
        prestyj: "Emergency vs. routine triage",
        others: "Takes message only",
      },
      {
        feature: "Pricing",
        prestyj: "Flat monthly rate",
        others: "$2-4 per minute + per-call fees",
      },
      {
        feature: "Simultaneous Call Handling",
        prestyj: "Unlimited",
        others: "Limited by staff size",
      },
      {
        feature: "Routine Job Scheduling",
        prestyj: "Books directly to calendar",
        others: "Message taking, no booking",
      },
      {
        feature: "Weekend/Holiday Coverage",
        prestyj: "Included at no extra charge",
        others: "Higher rates or unavailable",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "Can AI accurately identify plumbing emergencies?",
      answer:
        "Yes. AI asks targeted questions to identify urgency: Is water actively leaking? Is there flooding? Do you have ANY water running? Is this affecting multiple fixtures? Emergency indicators trigger immediate dispatch to your on-call technician. Non-emergencies get scheduled for the next available slot.",
    },
    {
      question: "How does service area verification work?",
      answer:
        "AI asks for the service address or zip code, cross-references it with your coverage map, and only dispatches technicians to jobs within your territory. Out-of-area callers are politely informed and referred elsewhere. Your technicians never make wasted trips.",
    },
    {
      question: "What happens during peak call periods like after storms?",
      answer:
        "Unlike human staff who can only handle one call at a time, AI handles unlimited simultaneous calls. Every caller gets immediate response, qualification, and appropriate routing—even during post-storm surges when you receive 50+ calls in an hour. No busy signals, no hold times.",
    },
    {
      question: "How does AI know which technician to dispatch?",
      answer:
        "AI routes calls based on your on-call schedule, technician territories, and skill sets. Emergency calls dispatch to the on-call technician. Routine jobs scheduled based on technician availability and location. We configure dispatch rules to match how your business operates.",
    },
    {
      question: "Can AI handle pricing questions and quotes?",
      answer:
        "AI provides general pricing ranges for common services (e.g., 'Most repairs run $200-500 depending on the issue'). For accurate quotes, AI explains that technicians need to assess the job in person and schedules consultation. Transparent but manages expectations appropriately.",
    },
    {
      question: "What about customers who insist on speaking to a person?",
      answer:
        "Customers can always request human transfer. In true emergencies, AI dispatches a technician immediately. For non-emergencies, AI takes a message and assures a callback during business hours. Most customers appreciate immediate response and knowing help is coming or scheduled.",
    },
    {
      question: "How does this integrate with our scheduling software?",
      answer:
        "Prestyj integrates with major field service management platforms: ServiceTitan, Housecall Pro, Jobber, and others. Jobs booked by AI sync directly to your calendar. Technician dispatch notes populate automatically. Call data feeds into your reporting.",
    },
    {
      question: "What's the ROI for a plumbing company?",
      answer:
        "Average emergency plumbing job: $400-2,000. Missing just 2-3 emergency calls per month costs you $800-6,000 in lost revenue. Most companies recover 10-20+ previously missed jobs monthly after implementing AI—pure revenue increase. Service pays for itself many times over.",
    },
  ],
  cta: {
    headline: "Stop Losing $400-2,000 Emergency Plumbing Jobs to Voicemail",
    subheadline:
      "AI answers every emergency call 24/7, qualifies the job, verifies service area, and dispatches technicians. Capture every emergency job while scheduling routine work automatically.",
    buttonText: "Book Your Demo",
    footnote: "24/7 emergency dispatch. Service area verification. Live in 1-2 weeks.",
  },
});
