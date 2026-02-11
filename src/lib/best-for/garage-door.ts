import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const garageDoor: BestForPageContent = createBestForPage({
  slug: "garage-door",
  niche: {
    name: "Garage Door Companies",
    shortName: "Garage Door",
    description: "Garage door service providers and installers seeking AI-powered phone answering and dispatch",
  },
  meta: {
    title: "AI Voice Agents for Garage Door Companies | Prestyj",
    description:
      "AI phone answering for garage door companies. Handle emergency calls 24/7, qualify repair vs. replacement, verify service area, and dispatch technicians. Never miss another $800-3,000 garage door job.",
    keywords: [
      "AI voice agents garage door",
      "AI answering service garage door companies",
      "automated lead response garage door",
      "garage door AI receptionist",
      "AI for garage door companies",
      "emergency garage door answering service",
      "garage door repair dispatch",
    ],
  },
  hero: {
    badge: "AI for Garage Door Companies",
    headlineAccent: "Garage Door Services",
    subheadline:
      "Cars trapped inside, doors won't open, security compromised—garage door emergencies need instant response. AI answers every call 24/7, triages emergencies, verifies service area, and dispatches technicians. Average job: $800-3,000.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "AlertTriangle" as IconName,
      title: "Capture Every Emergency Job",
      description:
        "Stuck garages are security emergencies. Customers call the first company that answers. AI responds instantly, qualifies urgency, and dispatches your on-call technician. Competitors with voicemail lose the job.",
    },
    {
      icon: "Globe" as IconName,
      title: "Service Area Verification",
      description:
        "AI confirms location before dispatching. Asks for address or zip code, cross-references your coverage map, and routes accordingly. No more sending technicians to jobs outside your territory.",
    },
    {
      icon: "Wrench" as IconName,
      title: "Job Qualification & Triage",
      description:
        "AI asks the right questions: problem type (spring, opener, panel, track), door size, material, urgency. Emergency calls (door won't open/close) dispatch immediately. Quotes and replacements scheduled appropriately.",
    },
    {
      icon: "Clock" as IconName,
      title: "24/7 Availability for Emergencies",
      description:
        "Garage door failures happen 24/7. AI is always on—every emergency call gets immediate response, qualification, and dispatch. No voicemail, no callbacks, no lost jobs to competitors.",
    },
    {
      icon: "Calendar" as IconName,
      title: "Schedule Quotes & Installations",
      description:
        "AI schedules non-emergency work: replacement estimates, new installations, opener upgrades, maintenance. Confirms appointments and sends reminders. Your calendar fills automatically.",
    },
    {
      icon: "DollarSign" as IconName,
      title: "High ROI on Captured Jobs",
      description:
        "Average garage door job: $800-3,000. Missing just 2-3 calls per month pays for your entire month of AI service. Most companies recover 15-25+ missed jobs monthly—pure profit improvement.",
    },
  ],
  painPoints: [
    {
      problem: "Emergency calls going to voicemail while customers call competitors",
      solution:
        "AI answers every emergency call immediately, 24/7. Qualifies the problem, confirms urgency, verifies service area, and dispatches your on-call technician within 60 seconds. Customers get help before they call your competition.",
    },
    {
      problem: "Technicians dispatched to jobs outside service area",
      solution:
        "AI asks for location upfront, verifies it's within your service area, and only then dispatches. No more wasted trips, no more angry technicians, no more unpaid drive time. Service area enforcement automated.",
    },
    {
      problem: "No way to distinguish true emergencies from quote requests",
      solution:
        "AI triages every call: door won't open, spring broken, car trapped = emergency dispatch. Replacements, new installations, maintenance = scheduled appointment. On-call technicians only woken up for true emergencies.",
    },
    {
      problem: "After-hours calls costing $50-100+ with answering services",
      solution:
        "Traditional answering services charge per minute and per call. AI provides unlimited 24/7 answering for one flat rate—no per-call fees, no per-minute charges. Scale your call volume without scaling your bill.",
    },
    {
      problem: "Phone ringing constantly while technicians are on jobs",
      solution:
        "AI handles unlimited simultaneous calls—no busy signals, no hold times. Every caller gets immediate response, qualification, and routing. Your technicians stay productive on jobs instead of answering phones.",
    },
    {
      problem: "Missed calls from customers needing immediate help",
      solution:
        "Customers with garage door emergencies don't leave voicemail—they call the next company. AI answers every call, qualifies urgency, and either dispatches emergency help or schedules prompt service. No more lost emergency revenue.",
    },
    {
      problem: "Difficulty scheduling replacement estimates around emergency dispatch",
      solution:
        "AI manages your calendar: emergency slots reserved for on-call, estimates and installations filled in available windows. Handles rescheduling, cancellations, and waitlist management automatically. Optimal technician scheduling.",
    },
    {
      problem: "Follow-up calls for quotes and appointment reminders taking staff time",
      solution:
        "AI handles quote follow-up calls, appointment confirmations, and reminder calls automatically. Technicians know their schedule, customers remember appointments, and your office staff is freed for other work.",
    },
    {
      problem: "No visibility into after-hours call volume and types",
      solution:
        "AI tracks every call: time, type (emergency vs. quote), location, job value, disposition. See exactly what's coming in after hours, which neighborhoods generate calls, and where to focus marketing efforts.",
    },
    {
      problem: "Weekend and holiday emergency coverage expensive or unavailable",
      solution:
        "AI provides 24/7/365 coverage at no extra charge—weekends, holidays, nights included. Emergency calls dispatched appropriately, quote requests scheduled for next business day. Consistent coverage without overtime costs.",
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
        prestyj: "Emergency vs. quote triage",
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
        feature: "Quote Scheduling",
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
      question: "Can AI accurately identify garage door emergencies?",
      answer:
        "Yes. AI asks targeted questions to identify urgency: Is the door stuck open or closed? Is your car trapped inside? Is this a security concern? Emergency indicators (broken springs, failed openers, off-track doors) trigger immediate dispatch to your on-call technician. Quote requests and new installations get scheduled appointments.",
    },
    {
      question: "How does service area verification work?",
      answer:
        "AI asks for the service address or zip code, cross-references it with your coverage map, and only dispatches technicians to jobs within your territory. Out-of-area callers are politely informed and referred elsewhere. Your technicians never make wasted trips.",
    },
    {
      question: "What happens during peak call periods?",
      answer:
        "Unlike human staff who can only handle one call at a time, AI handles unlimited simultaneous calls. Every caller gets immediate response, qualification, and appropriate routing—even during surges when you receive 50+ calls in a few hours. No busy signals, no hold times.",
    },
    {
      question: "How does AI know which technician to dispatch?",
      answer:
        "AI routes calls based on your on-call schedule, technician territories, and vehicle equipment. Emergency calls dispatch to the on-call technician. Quote requests and installations scheduled based on technician availability and location. We configure dispatch rules to match how your business operates.",
    },
    {
      question: "Can AI handle pricing questions?",
      answer:
        "AI provides general pricing ranges for common services (e.g., 'Most spring repairs run $150-350 depending on the door'). For accurate quotes on replacements and new installations, AI explains that technicians need to assess the job in person and schedules consultation. Transparent but manages expectations appropriately.",
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
      question: "What's the ROI for a garage door company?",
      answer:
        "Average garage door job: $800-3,000. Missing just 2-3 emergency calls per month costs you $1,600-9,000 in lost revenue. Most companies recover 15-25+ previously missed jobs monthly after implementing AI—pure revenue increase. Service pays for itself many times over.",
    },
  ],
  cta: {
    headline: "Stop Losing $800-3,000 Garage Door Jobs to Voicemail",
    subheadline:
      "AI answers every emergency call 24/7, qualifies the job, verifies service area, and dispatches technicians. Capture every emergency repair while scheduling replacements and installations automatically.",
    buttonText: "Book Your Demo",
    footnote: "24/7 emergency dispatch. Service area verification. Live in 1-2 weeks.",
  },
});
