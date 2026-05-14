import type { SolutionPageContent } from "./types";

export const aiAnsweringService: SolutionPageContent = {
  slug: "ai-answering-service",
  meta: {
    title: "AI Answering Service | Never Miss Another Call | Prestyj",
    description:
      "Replace your traditional answering service with AI that has natural conversations, qualifies callers, and books appointments 24/7. Built for small businesses, professional services, medical offices, and law firms.",
    keywords: [
      "AI answering service",
      "virtual receptionist AI",
      "24/7 AI phone answering",
      "AI answering service for small business",
      "AI receptionist for law firms",
      "medical office AI answering service",
      "dental office virtual receptionist",
      "AI call answering for professional services",
      "automated answering service",
      "AI phone agent for businesses",
      "after-hours answering service AI",
      "AI appointment booking service",
    ],
  },
  hero: {
    badge: "AI Answering Service",
    headline: "Never Miss Another Call.",
    headlineAccent: "Never Lose Another Customer.",
    subheadline:
      "Replace your traditional answering service with AI that has real conversations, qualifies callers, and books appointments 24/7. Built for small businesses, professional services, medical offices, and law firms that can't afford to miss a call.",
    stats: [
      { value: "24/7", label: "always available", color: "primary" },
      { value: "<5s", label: "answer time", color: "success" },
      { value: "70%", label: "lower cost vs human", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Every Missed Call Is a Missed Opportunity",
    subheadline:
      "Traditional answering services and voicemail are losing your business customers every single day.",
    points: [
      {
        icon: "PhoneMissed",
        title: "Calls go to voicemail after hours",
        description:
          "62% of new customer calls happen outside 9–5 business hours. When they hit voicemail, they hang up and call your competitor—who actually picks up the phone.",
        color: "destructive",
      },
      {
        icon: "DollarSign",
        title: "Human answering services are expensive",
        description:
          "Traditional services charge $1.50+ per minute and still just take messages. You're paying premium rates for someone to write down a name and number you'll call back hours later.",
        color: "warning",
      },
      {
        icon: "UserX",
        title: "Receptionists can't be everywhere at once",
        description:
          "Your front desk is helping a patient, on another line, or at lunch. Meanwhile, three new prospects are calling—and walking away when no one answers.",
        color: "primary",
      },
      {
        icon: "Clock",
        title: "Slow callbacks kill conversions",
        description:
          "Studies show conversion rates drop 80% when callbacks take more than 5 minutes. By the time your team returns the call, the prospect has already booked with someone else.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "An AI Answering Service That Actually Books Business",
    subheadline:
      "Natural conversations, intelligent qualification, and real appointments—not just messages.",
    benefits: [
      {
        icon: "Bot",
        title: "Natural Human-Like Conversations",
        description:
          "Callers can't tell they're talking to AI. Conversational language, real-time responses, and context awareness make every interaction feel like a friendly, knowledgeable receptionist.",
      },
      {
        icon: "Calendar",
        title: "Books Appointments Directly",
        description:
          "AI checks your calendar, offers available slots, and confirms bookings on the call—no callback required. Integrates with Google Calendar, Outlook, and your existing scheduling software.",
      },
      {
        icon: "Target",
        title: "Smart Caller Qualification",
        description:
          "AI asks the right questions to qualify leads, identify case types, gather insurance info, or route urgent matters appropriately. Your team only gets calls worth their time.",
      },
      {
        icon: "RefreshCw",
        title: "Unlimited Concurrent Calls",
        description:
          "Whether one caller or fifty call at once, AI handles them all simultaneously. No busy signals, no hold queues, no missed opportunities during peak hours.",
      },
      {
        icon: "Shield",
        title: "HIPAA-Ready & Compliant",
        description:
          "Built with privacy and compliance in mind. Suitable for medical, dental, and legal offices that handle sensitive caller information. Encrypted recordings and secure data handling.",
      },
      {
        icon: "BarChart3",
        title: "Full Call Transcripts & Analytics",
        description:
          "Every call recorded, transcribed, and summarized. See exactly what callers asked, what AI said, and why a booking happened—or didn't. Continuous improvement built in.",
      },
    ],
  },
  objections: {
    headline: "Common Concerns About AI Answering Services",
    subheadline:
      "Honest answers for businesses considering replacing traditional answering services.",
    objections: [
      {
        objection: "My customers will know it's AI and hang up",
        response:
          "Modern AI voice technology is genuinely conversational—most callers don't realize they're talking to AI, and those who do don't care because they're getting helpful, immediate answers. We can also disclose AI upfront if you prefer. What matters to callers is fast, accurate help, not who delivers it.",
      },
      {
        objection: "AI can't handle the nuances of my industry",
        response:
          "Prestyj's AI is trained on your specific business: your services, your terminology, your scheduling rules, your intake process. It handles common questions, qualifies callers correctly, and intelligently escalates anything outside its scope to your team with full context.",
      },
      {
        objection: "What about emergencies or urgent calls?",
        response:
          "AI is built to recognize urgency. For medical offices, it can triage symptoms and route emergencies. For law firms, it identifies time-sensitive matters. For any business, you define escalation rules and AI follows them—forwarding to on-call staff, sending SMS alerts, or dispatching as needed.",
      },
      {
        objection: "Switching from our current answering service sounds painful",
        response:
          "It's not. We handle the setup—porting your number, training the AI on your business, integrating with your calendar and CRM. Most clients are live within 7 days and start seeing missed-call recovery from day one. You can run AI alongside your current service during transition.",
      },
    ],
  },
  calculator: {
    headline: "Missed Call Revenue Calculator",
    subheadline:
      "See how much new business you're losing to voicemail and slow callbacks every month.",
    inputs: {
      leads: { label: "Inbound calls per month", placeholder: "300", defaultValue: 300 },
      commission: { label: "Average customer value ($)", placeholder: "1500", defaultValue: 1500 },
    },
    reactivationRate: 0.35,
    conversionRate: 0.4,
    resultLabel: "Recoverable monthly revenue with AI answering",
  },
  cta: {
    headline: "Stop Missing Calls. Start Booking Business.",
    subheadline:
      "Every call your team misses is a customer your competitor wins. Hear Prestyj's AI answering service in action and see how natural it sounds.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote: "No commitment required. Hear a live AI demo answer a real call in under 60 seconds.",
  },
};
