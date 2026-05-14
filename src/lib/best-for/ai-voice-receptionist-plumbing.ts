import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const aiVoiceReceptionistPlumbing: BestForPageContent = createBestForPage({
  slug: "ai-voice-receptionist-plumbing",
  niche: {
    name: "AI Voice Receptionist for Plumbing",
    shortName: "Plumbing Voice AI",
    description:
      "Plumbing companies needing intelligent call handling for emergency dispatch, after-hours coverage, and multi-truck scheduling operations",
  },
  meta: {
    title: "AI Voice Receptionist for Plumbing | Emergency Dispatch & After-Hours 24/7",
    description:
      "AI voice receptionist built for plumbing companies. Triage emergency calls, dispatch on-call technicians, handle multi-truck scheduling, and integrate with ServiceTitan and Jobber. Answer every call 24/7 and capture every emergency job.",
    keywords: [
      "AI voice receptionist plumbing",
      "plumbing AI phone answering",
      "plumbing emergency dispatch AI",
      "AI receptionist for plumbing companies",
      "plumbing call handling automation",
      "ServiceTitan plumbing AI",
      "Jobber AI integration",
      "plumbing after-hours answering AI",
    ],
  },
  hero: {
    badge: "Plumbing AI Voice Receptionist",
    headlineAccent: "AI Voice Receptionist for Plumbing",
    subheadline:
      "Handle burst pipes, sewer backups, and water heater failures with instant emergency triage and dispatch. Answer every call 24/7 with AI that understands plumbing workflows, routes to the right truck, and integrates with ServiceTitan and Jobber.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "AlertTriangle" as IconName,
      title: "Emergency Triage & Instant Dispatch",
      description:
        "AI identifies true plumbing emergencies (active flooding, sewer backup, gas leak, no water) in under 60 seconds. Emergencies dispatch to your on-call technician with full job details, customer address, and safety information. Non-emergencies get scheduled appropriately.",
    },
    {
      icon: "Wrench" as IconName,
      title: "Understands Plumbing Service Categories",
      description:
        "AI differentiates between drain cleaning, water heater repair, sewer line work, fixture installation, gas line service, and remodeling plumbing. It asks service-specific questions and routes to technicians with the right skills and equipment.",
    },
    {
      icon: "Clock" as IconName,
      title: "After-Hours Emergency Coverage Without the Callback Chain",
      description:
        "Burst pipe at midnight? AI answers immediately, provides safety instructions ('turn off the main water shutoff'), and dispatches your on-call tech in 30 seconds. No answering service taking messages. No technician calling back to voicemail. Instant response when it matters most.",
    },
    {
      icon: "Building2" as IconName,
      title: "Multi-Truck Fleet Coordination",
      description:
        "Running 3–15 trucks? AI knows which truck has which equipment (camera, jetter, snake, locator) and which technicians handle which services. It routes calls to the right truck based on geography, equipment needs, and schedule availability.",
    },
    {
      icon: "Database" as IconName,
      title: "ServiceTitan & Jobber Integration",
      description:
        "Jobs book directly into ServiceTitan or Jobber with complete customer info, issue description, priority level, and equipment requirements. Your dispatchers and technicians see new jobs in real-time with no manual data entry.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Commercial Account Priority Handling",
      description:
        "AI recognizes commercial accounts and provides white-glove treatment: priority scheduling, direct routing to your commercial team, multi-location service coordination, and preferred pricing recognition. Your commercial clients get the responsiveness they pay for.",
    },
  ],
  painPoints: [
    {
      problem: "Emergency calls at 2am go to voicemail—85% of callers hire whoever answers first",
      solution:
        "AI answers every call 24/7 instantly. For emergencies like burst pipes or sewer backups, AI dispatches your on-call tech in 30 seconds with full job details. Non-emergencies get booked for business hours. You never lose a $500–$1,500 emergency job to voicemail again.",
    },
    {
      problem: "After-hours answering services only take messages—you still need to call back",
      solution:
        "AI doesn't take messages—it triages, dispatches, and books. Emergency calls dispatch directly to on-call techs. Routine calls schedule into your calendar. No callback chain, no lost leads, no frustrated customers waiting hours for a return call.",
    },
    {
      problem: "Multi-truck dispatchers get overwhelmed during peak hours and miss calls",
      solution:
        "AI handles the phones so your dispatcher can focus on routing trucks and managing technicians. When 20 calls come in during the morning rush, AI answers all of them simultaneously, qualifies the issues, and books jobs. Your dispatcher sees new jobs in ServiceTitan without the phone chaos.",
    },
    {
      problem: "Wrong truck dispatched because receptionist didn't ask the right questions",
      solution:
        "AI asks service-specific questions: 'Is this a drain clog or sewer backup?', 'Do you need a camera inspection?', 'Gas or electric water heater?'. Based on answers, AI routes to the truck with the right equipment. Fewer wasted truck rolls, faster service, happier customers.",
    },
    {
      problem: "Commercial clients expect priority service but get the same queue as everyone else",
      solution:
        "AI identifies commercial accounts by phone number or company name and provides immediate priority handling: direct routing to your commercial team, preferred scheduling, and multi-property coordination. Your highest-value clients get the service level that keeps them loyal.",
    },
    {
      problem: "Seasonal surges (winter pipe bursts, spring backups) overwhelm part-time coverage",
      solution:
        "AI handles unlimited concurrent calls regardless of volume. When a cold snap causes 50 burst pipe calls in one morning, AI answers every one, provides immediate safety instructions, and dispatches emergencies in priority order. No seasonal hiring, no missed calls.",
    },
    {
      problem: "Customer information gets lost between answering service and dispatcher",
      solution:
        "AI captures complete job details during the call: customer name, address, phone, issue description, system type, urgency level, and special instructions. Everything flows directly into ServiceTitan or Jobber. Your dispatcher and technician have full context—nothing lost in translation.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI Voice Receptionist", "Traditional Answering Service"],
    rows: [
      {
        feature: "Emergency Dispatch",
        prestyj: "Immediate dispatch to on-call tech with job details",
        others: "Takes message, pages tech, hopes they call back",
      },
      {
        feature: "Concurrent Call Capacity",
        prestyj: "Unlimited (100+ simultaneous calls)",
        others: "Limited to operators on shift (5–15 typically)",
      },
      {
        feature: "Equipment-Specific Routing",
        prestyj: "Routes to right truck based on equipment/skill needs",
        others: "Generic message-taking, no routing intelligence",
      },
      {
        feature: "ServiceTitan/Jobber Integration",
        prestyj: "Direct two-way sync, auto job creation",
        others: "Message slips or email forwards, manual entry",
      },
      {
        feature: "Safety Instructions",
        prestyj: "Immediate safety guidance (shut off water, gas leak protocol)",
        others: "Takes message, no safety guidance provided",
      },
      {
        feature: "Customer History Access",
        prestyj: "Real-time access to past service records",
        others: "No CRM access—basic message only",
      },
      {
        feature: "Commercial Account Recognition",
        prestyj: "Auto-identifies, priority routing, VIP treatment",
        others: "Treats all callers identically",
      },
      {
        feature: "After-Hours Cost",
        prestyj: "Same flat rate, 24/7",
        others: "Per-minute surcharges, after-hours premium pricing",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does AI triage plumbing emergency calls?",
      answer:
        "AI asks targeted questions: 'Is there active flooding?', 'Can you shut off the water at the main?', 'Is this a sewer backup or a drain clog?', 'Do you smell gas?', 'What type of water heater—gas or electric?'. Based on answers, it categorizes: emergency (active flooding, gas leak, sewer backup into home) = immediate dispatch with safety instructions; urgent (no hot water, slow drains) = same-day; routine (estimates, maintenance) = scheduled. Gas leaks trigger immediate safety instructions before any dispatch.",
    },
    {
      question: "Does it work with both ServiceTitan and Jobber?",
      answer:
        "Yes. Prestyj integrates directly with ServiceTitan, Jobber, and other field service platforms. New jobs appear in your dispatch board in real-time with customer details, issue description, priority level, and equipment requirements. No manual data entry.",
    },
    {
      question: "How does AI dispatch to the right truck?",
      answer:
        "You configure equipment and skill mapping once: Truck 1 has camera + locator, Truck 2 has jetter + snake, Truck 3 is general repair. AI matches the job type to the right truck based on the caller's issue. Camera inspection? Routes to Truck 1. Main line blockage? Routes to Truck 2. AI considers geography and schedule too.",
    },
    {
      question: "What about after-hours emergency calls?",
      answer:
        "AI answers immediately 24/7. For emergencies, it provides safety instructions ('Turn off the main water shutoff located...'), gathers job details, and dispatches your on-call technician via text and phone call simultaneously. The tech gets customer address, issue description, and callback number. Non-emergencies get scheduled for the next business day.",
    },
    {
      question: "Can AI handle commercial plumbing accounts?",
      answer:
        "Yes. AI recognizes commercial callers by phone number or company name, accesses their service history and contract details, and routes directly to your commercial team. Multi-location commercial clients can request service at any property. Priority scheduling and SLA compliance are handled automatically.",
    },
    {
      question: "How much does a plumbing AI voice receptionist cost?",
      answer:
        "Most plumbing companies spend $400–$700/month for AI voice receptionist with 24/7 coverage, unlimited concurrent calls, emergency dispatch, and ServiceTitan/Jobber integration. At $400–$1,500 per emergency job, capturing just 1–2 missed emergencies per month pays for the entire service.",
    },
    {
      question: "What about multi-trade companies (plumbing + HVAC + electrical)?",
      answer:
        "AI routes calls based on the issue type: plumbing calls to plumbing dispatch, HVAC to HVAC team, electrical to electricians. Multi-trade companies get one AI system that intelligently sorts and routes each call to the correct department—no manual triage needed.",
    },
    {
      question: "How quickly can we be live?",
      answer:
        "Typical setup takes 5–7 business days: configure emergency triage logic, set up truck/equipment mapping, train on your services and pricing, connect ServiceTitan/Jobber, and test with sample calls. Most plumbing companies are fully operational within a week.",
    },
    {
      question: "What about repeat customers and service agreements?",
      answer:
        "AI recognizes returning customers by phone number, accesses their service history, and offers relevant services. For customers with maintenance agreements, AI tracks service dates and proactively offers scheduled maintenance. Your best customers get recognized and prioritized automatically.",
    },
  ],
  cta: {
    headline: "Stop Losing Emergency Plumbing Jobs to Voicemail",
    subheadline:
      "See how AI voice receptionist handles emergency triage, dispatches on-call techs, and captures every call 24/7. Your competitors answer the calls you miss—let's fix that.",
    buttonText: "Book a Demo",
    footnote:
      "ServiceTitan & Jobber integration included. Live in 5–7 business days. No annual contract.",
  },
});
