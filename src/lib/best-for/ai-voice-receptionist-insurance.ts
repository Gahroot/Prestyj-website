import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const aiVoiceReceptionistInsurance: BestForPageContent = createBestForPage({
  slug: "ai-voice-receptionist-insurance",
  niche: {
    name: "AI Voice Receptionist for Insurance",
    shortName: "Insurance Receptionist",
    description:
      "Insurance agencies, brokerages, and carriers handling high call volumes needing 24/7 intelligent phone handling and policy inquiry routing.",
  },
  meta: {
    title: "AI Voice Receptionist for Insurance | 24/7 Phone Coverage | Prestyj",
    description:
      "AI voice receptionist for insurance agencies and carriers. Handle policy inquiries, claims intake, quote routing, and callback scheduling 24/7. Reduce missed calls by 95%, save $8,000-12,000/month on receptionist costs.",
    keywords: [
      "AI voice receptionist for insurance",
      "insurance phone answering service AI",
      "automated insurance receptionist",
      "AI insurance call handling",
      "insurance claims intake automation",
      "24/7 insurance call receptionist",
      "AI policy inquiry handling",
      "insurance callback scheduling AI",
      "insurance lead qualification AI",
      "multi-policy customer AI",
    ],
  },
  hero: {
    badge: "Insurance AI Voice",
    headlineAccent: "Stop Losing Calls. Start Handling 10x More.",
    subheadline:
      "High call volume. Complex policies. Multi-policy customers. AI handles calls 24/7, qualifies inquiries, routes to the right person, and schedules callbacks—while you focus on closing business and handling claims.",
    pattern: "AI_AGENTS_BUILT_FOR",
  },
  whyBestFor: [
    {
      icon: "Phone" as IconName,
      title: "Never Miss a Call Again",
      description:
        "Every inbound call rings directly to your AI receptionist. 24/7/365 availability means no missed leads at 6 PM, no dropped calls on weekends, no prospects calling competitors because you didn't answer.",
    },
    {
      icon: "Zap" as IconName,
      title: "Intelligent Call Handling for Insurance",
      description:
        "AI understands insurance workflows: policy inquiries, claims intake, quote requests, callback scheduling. It asks the right questions (coverage type, policy number, issue nature) and routes appropriately—not a generic voice menu.",
    },
    {
      icon: "Clock" as IconName,
      title: "Save $8,000-12,000/Month on Staff",
      description:
        "Replace a $3,500-5,000/month receptionist with AI at a fraction of the cost. No salary, no benefits, no training, no turnover. Savings scale: one AI receptionist covers what takes 2-3 humans to handle.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Multi-Policy Customer Handling",
      description:
        "Insurance customers often have auto, home, life, and commercial policies. AI pulls up all policies, understands the customer's total insurance picture, can discuss cross-sell opportunities, and routes to your best agents.",
    },
  ],
  painPoints: [
    {
      problem: "High call volume overwhelms your team during business hours",
      solution:
        "AI handles unlimited concurrent calls. Morning rush, quote deadline crunch, seasonal peaks—AI answers every call simultaneously with the same quality. No queue, no dropped calls, no customer frustration.",
    },
    {
      problem: "After-hours calls go to voicemail and prospects call competitors",
      solution:
        "AI receptionist works 24/7. Evening policy questions, weekend claims intake, holiday inquiries—all handled immediately. Callers expect live conversation, not voicemail. AI delivers 24/7 live experience.",
    },
    {
      problem: "Difficult to handle complex policy questions and multi-policy customers",
      solution:
        "AI is configured for insurance workflows. It pulls policy details, identifies all active coverage, asks discovery questions about the specific policy issue, and routes to the right specialist with full context.",
    },
    {
      problem: "Receptionist turnover means constant retraining and inconsistent call handling",
      solution:
        "AI never leaves, never has a bad day, never needs training. Consistent, professional, knowledgeable call handling every single time. Your brand voice stays the same.",
    },
    {
      problem: "Claims intake requires detailed information gathering but happens sporadically",
      solution:
        "AI is built for claims intake: loss date/time/location, parties involved, injuries/damages, coverage verification. Walks callers through intake systematically, captures complete information, escalates critical claims immediately.",
    },
    {
      problem: "Lead response is slow and quote requests pile up during busy periods",
      solution:
        "AI qualifies quote requests in real-time: coverage type, current carrier, policy expiration, budget range. Schedules qualified prospects directly on agent calendars. No backlog, instant routing, faster close.",
    },
  ],
  comparison: {
    headers: ["Factor", "Prestyj AI Receptionist", "Human Receptionist"],
    rows: [
      {
        feature: "Availability",
        prestyj: "24/7/365 (never takes time off)",
        others: "40-50 hrs/week (business hours only)",
      },
      {
        feature: "Concurrent Call Capacity",
        prestyj: "Unlimited (100s simultaneously)",
        others: "1-2 calls per receptionist",
      },
      {
        feature: "Policy Inquiry Handling",
        prestyj: "Instant policy lookup and routing",
        others: "Manual check, likely need callback",
      },
      {
        feature: "Claims Intake Quality",
        prestyj: "Structured data capture (100% complete)",
        others: "Notes (incomplete, handwriting issues)",
      },
      {
        feature: "Multi-Policy Customer Service",
        prestyj: "All policies visible, cross-sell aware",
        others: "Limited visibility, no context",
      },
      {
        feature: "Quote Routing Speed",
        prestyj: "Immediate (qualified = instant routing)",
        others: "Hours/days (depends on availability)",
      },
      {
        feature: "Monthly Cost",
        prestyj: "$800-1,200 (fraction of salary)",
        others: "$3,500-5,000+ salary + benefits",
      },
      {
        feature: "Training & Onboarding",
        prestyj: "Configured once, continuous improvement",
        others: "2-4 weeks, ongoing training needed",
      },
      {
        feature: "Turnover Impact",
        prestyj: "Zero disruption",
        others: "Complete restart every 12-24 months",
      },
      {
        feature: "Call Recording & Audit",
        prestyj: "Automatic (compliance-ready)",
        others: "Manual (often incomplete)",
      },
    ],
  },
  faq: [
    {
      question: "How does AI understand insurance policy questions?",
      answer:
        "Prestyj AI is configured with insurance domain knowledge: policy types (auto, home, life, commercial, specialty), coverage areas, typical customer questions, claim scenarios. It understands coverage options, knows the difference between coverage types, and routes accordingly. It's an insurance-trained receptionist, not a generic voice menu.",
    },
    {
      question: "Can AI pull up customer policy information during calls?",
      answer:
        "Yes. AI integrates with your agency management system (AMS) or policy database. When a customer provides their policy number or name, AI retrieves all active policies, coverage details, renewal dates, and payment status. This context helps AI route efficiently and improves customer experience.",
    },
    {
      question: "How does AI handle claims intake calls?",
      answer:
        "AI is built for claims workflows. It captures essential details: loss date/time/location, parties involved (names, contact info), description of damages or injuries, current coverage, medical attention needed. For routine claims, AI completes intake. For serious situations (injuries, liability questions), AI flags for immediate adjuster escalation.",
    },
    {
      question: "What about callback scheduling? How does AI know agent availability?",
      answer:
        "AI integrates with your calendar system. It knows each agent's availability in real-time and can schedule callbacks or consultations directly on their calendar. Customers get booked immediately instead of waiting for a callback. Reduces missed appointments and no-shows.",
    },
    {
      question: "Can AI handle multi-policy customers asking about different coverages?",
      answer:
        "Yes. This is a key strength. Customer calls asking about auto coverage but you also have their home and life policies. AI sees all policies, understands the customer's total picture, can discuss cross-sell opportunities, and routes to the agent best positioned to help.",
    },
    {
      question: "How does AI route calls to the right person?",
      answer:
        "You define routing rules. Examples: claims go to claims team, quotes to sales, policy questions to service, complex multi-policy inquiries to your top relationship managers. AI learns who handles what best and routes accordingly.",
    },
    {
      question: "What about accent or language barrier concerns?",
      answer:
        "Prestyj AI voice is clear, professional, and easy to understand. It sounds like a knowledgeable receptionist, not a robot. For multilingual support, we configure AI with multiple language options. Calls can be routed based on customer preference.",
    },
    {
      question: "Is call recording compliant with insurance regulations?",
      answer:
        "Yes. All calls are recorded with proper disclosures. Recordings are stored securely, automatically transcribed, and available for compliance review. Audit trails are maintained for regulatory purposes. This supports your compliance and provides protection.",
    },
    {
      question: "How quickly can we get set up?",
      answer:
        "Most insurance agencies go live within 3-5 days. We handle: AI configuration for your specific call types, integration with your AMS or policy system, calendar syncing for scheduling, voicemail setup. Quick deployment means you start saving immediately.",
    },
    {
      question: "What happens if AI encounters something it can't handle?",
      answer:
        "Complex scenarios (unusual coverage questions, irate callers) are flagged and transferred to your team immediately with full call context. Your team gets better-informed calls, and AI learns from each escalation.",
    },
  ],
  cta: {
    headline: "Stop Losing Calls. Start Saving $10K+/Month.",
    subheadline:
      "See how AI voice receptionist transforms your insurance operation: 24/7 availability, never miss a lead, handle 10x more calls, reduce costs. Book a demo to see real insurance workflows in action.",
    buttonText: "See AI Receptionist Demo",
    footnote:
      "Watch real insurance scenarios: policy inquiry, claims intake, quote routing. No credit card required.",
  },
});
