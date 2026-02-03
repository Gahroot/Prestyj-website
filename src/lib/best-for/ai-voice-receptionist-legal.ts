import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const aiVoiceReceptionistLegal: BestForPageContent = createBestForPage({
  slug: "ai-voice-receptionist-legal",
  niche: {
    name: "AI Voice Receptionist for Law Firms",
    shortName: "Legal Receptionist AI",
    description: "Solo practitioners, small partnerships, and specialized legal firms needing 24/7 client intake with case-type routing and confidentiality handling",
  },
  meta: {
    title: "AI Voice Receptionist for Law Firms | 24/7 Client Intake & Case Routing | Prestyj",
    description:
      "Never miss a client call again. AI voice receptionist handles intake, case-type routing, confidentiality screening, and emergency calls 24/7. Perfect for solo practices, personal injury, family law, and specialized firms.",
    keywords: [
      "AI receptionist for law firms",
      "legal intake automation",
      "AI phone system lawyers",
      "voice receptionist legal practice",
      "client intake AI",
      "case routing automation",
      "legal practice AI receptionist",
      "after-hours legal calls",
      "confidential client calls",
      "intake qualified leads legal",
    ],
  },
  hero: {
    badge: "AI Voice Receptionist",
    headlineAccent: "AI Voice Receptionist for Law Firms",
    subheadline:
      "Missed client calls cost cases. Our AI receptionist answers every call 24/7, qualifies intake, routes by case type, screens conflicts, and flags emergencies—so you never lose a client because the phones went unanswered.",
    pattern: "BEST_AI_FOR",
  },
  whyBestFor: [
    {
      icon: "PhoneOff" as IconName,
      title: "Never Miss a Client Call Again",
      description:
        "Solo practices and small firms can't afford a full-time receptionist, but every missed call is a potential case lost. AI answers immediately, 24/7—nights, weekends, holidays. Your competitors sleep; you capture every opportunity.",
    },
    {
      icon: "Workflow" as IconName,
      title: "Intelligent Case-Type Routing",
      description:
        "AI asks smart intake questions and routes calls to the right attorney or department: personal injury, family law, criminal, estate planning, etc. Automatic triage means urgent matters get priority and each case goes to the right specialist.",
    },
    {
      icon: "Lock" as IconName,
      title: "Confidentiality Built In",
      description:
        "Legal calls are sensitive. AI is trained to handle confidential client information securely, verify caller identity, and escalate sensitive matters appropriately. All conversations encrypted and compliant with attorney-client privilege standards.",
    },
    {
      icon: "AlertTriangle" as IconName,
      title: "Emergency Call Detection & Escalation",
      description:
        "Certain calls need immediate attorney response: restraining order requests, arrest updates, imminent threats. AI detects emergency language, flags calls as urgent, and ensures immediate escalation to you, even at 2am.",
    },
  ],
  painPoints: [
    {
      problem: "Missed after-hours client calls result in lost cases",
      solution:
        "AI answers every call, any time. A personal injury client calling at 10pm Saturday with a serious injury concern gets immediate intake qualification. That captured lead stays your client; a missed call goes to your competitor.",
    },
    {
      problem: "Shared receptionist can't handle confidential legal information",
      solution:
        "Legal calls require discretion. AI is trained for confidentiality, properly screens callers, and never mixes case details. Sensitive client calls are handled privately with full conversation security.",
    },
    {
      problem: "Complex intake takes 15-20 minutes per call",
      solution:
        "AI handles initial intake in 3-5 minutes: client name, contact, case type, urgency level, conflict screen basics. Only substantive matters go to you. Faster qualification means more capacity for real legal work.",
    },
    {
      problem: "No consistency in how calls are handled across staff",
      solution:
        "AI applies the same intake process, questions, and routing to every call. No variation based on who's answering. Consistent quality and data capture means better CRM integration and case management.",
    },
    {
      problem: "Conflict checks and client classification happen after intake",
      solution:
        "AI screens basic conflicts, identifies client type (new, returning, opposing party), and tags urgency during the initial call. You get pre-qualified, pre-screened calls ready for attorney review.",
    },
    {
      problem: "Paying for receptionist hours even when firm is slow",
      solution:
        "No per-hour staffing costs. AI works flat-rate, whether you get 10 calls or 100 calls this month. During slow periods, you save money; during busy seasons, you handle unlimited volume.",
    },
  ],
  comparison: {
    headers: ["Approach", "Prestyj AI Receptionist", "Traditional Receptionist or Answering Service"],
    rows: [
      {
        feature: "24/7 Availability",
        prestyj: "Full 24/7/365 coverage, no gaps",
        others: "Business hours only or costly after-hours service",
      },
      {
        feature: "Call Answer Time",
        prestyj: "Immediate (first ring)",
        others: "5-10 minutes (if answered at all)",
      },
      {
        feature: "Intake Quality",
        prestyj: "Consistent, detailed, structured data",
        others: "Varies by individual, incomplete notes",
      },
      {
        feature: "Case-Type Routing",
        prestyj: "Intelligent AI-driven triage",
        others: "Generic transfer or basic menus",
      },
      {
        feature: "Conflict Screening",
        prestyj: "Basic screening during call",
        others: "No screening (manual attorney review only)",
      },
      {
        feature: "Emergency Detection",
        prestyj: "AI flags urgent matters automatically",
        others: "Depends on staff judgment",
      },
      {
        feature: "Cost Structure",
        prestyj: "Flat monthly (unlimited calls)",
        others: "$2,000-4,000/month salary or $1-3/call answering service",
      },
      {
        feature: "Confidentiality Control",
        prestyj: "Enterprise encryption, secure by design",
        others: "Depends on provider's security",
      },
      {
        feature: "Scalability During Growth",
        prestyj: "Unlimited capacity, no hiring friction",
        others: "Hiring delays, training, turnover",
      },
    ],
    includeCommonRows: false,
  },
  faq: [
    {
      question: "How does AI handle sensitive client confidentiality?",
      answer:
        "All conversations are encrypted end-to-end and stored securely. AI is trained to handle confidential information properly: verifying caller identity, not repeating details unnecessarily, and flagging sensitive matters for secure escalation. Conversations are treated as privileged and compliant with attorney-client privilege standards.",
    },
    {
      question: "Can AI route calls based on our specific practice areas?",
      answer:
        "Yes, completely customized. We configure intake questions specific to your firm: personal injury, family law, criminal defense, estate planning, etc. AI learns your case types and routes incoming calls to the right attorney or department automatically.",
    },
    {
      question: "What happens if a client needs to speak with you immediately?",
      answer:
        "You control escalation rules. Emergency keywords (arrest, injury, restraining order, threat) trigger instant notification to you with the option to take the call immediately. For non-emergencies, AI completes intake and you return calls with full context.",
    },
    {
      question: "How does conflict screening work?",
      answer:
        "During intake, AI asks for basic caller/matter information and runs lightweight screening: Is this a returning client? Does the caller mention opposing parties or adverse relationships? AI flags potential conflicts for your human review. It's not a replacement for detailed conflicts checks, but it catches obvious red flags during intake.",
    },
    {
      question: "Do we get CRM integration and call logs?",
      answer:
        "Yes. Every call is logged with full transcript, caller information, case type, urgency flag, and routing decision. Integration with most legal practice management platforms (Clio, Rocket Matter, PracticePanther, etc.) is available. Calls sync as new matters or contacts automatically.",
    },
    {
      question: "What if we're a solo practice? Can AI handle our volume?",
      answer:
        "Perfect fit for solo practices. Whether you get 5 calls or 50 calls per week, AI handles them all identically. You get detailed intake summaries so you can return calls efficiently without re-qualifying. Scales from solo practice to multi-attorney firm without service degradation.",
    },
    {
      question: "How does this work during evenings and weekends?",
      answer:
        "AI answers every call 24/7. During business hours, you can take calls directly or have AI assist. Outside hours, AI handles full intake and either pages you (for emergencies) or queues the information for morning review. You decide the escalation rules.",
    },
    {
      question: "Can AI detect emergency situations in a legal context?",
      answer:
        "Yes. AI is trained to recognize legal emergencies: arrest updates, emergency protective order requests, imminent threats, family emergencies, serious injury situations. These trigger instant notifications and priority handling so you can respond appropriately.",
    },
  ],
  cta: {
    headline: "Never Miss Another Client Call. Ever.",
    subheadline:
      "See how legal firms use AI voice receptionist to capture every client intake, route intelligently, and handle confidential calls 24/7. Book a demo to see legal-specific intake in action.",
    buttonText: "See Legal Intake in Action",
    footnote: "Confidential, HIPAA-aware, practice-management integrated.",
  },
});
