import type { SolutionPageContent } from "./types";

export const aiWebChatWidget: SolutionPageContent = {
  slug: "ai-web-chat-widget",
  meta: {
    title: "AI Web Chat Widget | Convert Website Visitors 24/7 | Prestyj",
    description: "Turn website traffic into booked appointments. Our AI chat widget engages every visitor instantly, answers questions, qualifies leads, and books meetings—24/7. No more lost visitors or missed inquiries.",
    keywords: [
      "AI web chat widget",
      "website chatbot for lead generation",
      "AI chatbot for small business",
      "convert website visitors to leads",
      "24/7 website chat AI",
      "automated lead qualification chatbot",
      "AI appointment booking widget",
      "conversational AI for websites",
      "website visitor engagement AI",
      "live chat alternative AI",
      "AI sales assistant chatbot",
      "lead capture chat widget",
    ],
  },
  hero: {
    badge: "AI Web Chat Solution",
    headline: "Every Visitor Engaged.",
    headlineAccent: "Every Lead Captured.",
    subheadline: "98% of your website visitors leave without ever contacting you. AI chat engages them instantly, answers their questions, qualifies them as leads, and books appointments—all while you sleep.",
    stats: [
      { value: "24/7", label: "instant engagement", color: "primary" },
      { value: "3x", label: "more leads captured", color: "success" },
      { value: "<3s", label: "first response time", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Your Website Is Leaking Leads",
    subheadline: "Most visitors arrive ready to buy—and leave without ever talking to you.",
    points: [
      {
        icon: "UserX",
        title: "98% of visitors leave silently",
        description: "You spend thousands on ads and SEO to drive traffic, but the vast majority of visitors browse and bounce. Without engagement, every visitor is a wasted impression.",
        color: "destructive",
      },
      {
        icon: "Clock",
        title: "Contact forms are friction-heavy",
        description: "Visitors don't want to fill out a 6-field form and wait days for a reply. They want answers now. By the time you respond, they've already moved on to a competitor.",
        color: "warning",
      },
      {
        icon: "PhoneMissed",
        title: "After-hours visitors get nothing",
        description: "More than half of website traffic happens outside business hours. When your team is offline, your site goes dark—no answers, no engagement, no bookings.",
        color: "primary",
      },
      {
        icon: "DollarSign",
        title: "Live chat is expensive and inconsistent",
        description: "Hiring chat agents costs $40K+ per seat per year, and they still can't cover nights, weekends, or traffic spikes. Quality drops, response times slip, and leads slip through the cracks.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "AI Chat That Actually Converts",
    subheadline: "More than a chatbot—an always-on sales assistant trained on your business.",
    benefits: [
      {
        icon: "Zap",
        title: "Instant Visitor Engagement",
        description: "AI greets every visitor within seconds with a personalized message based on the page they're on. No waiting, no forms, no friction—just immediate conversation.",
      },
      {
        icon: "Bot",
        title: "Trained On Your Business",
        description: "AI learns your services, pricing, FAQs, policies, and brand voice. It answers questions accurately the way your best salesperson would, with zero hallucinations.",
      },
      {
        icon: "Target",
        title: "Smart Lead Qualification",
        description: "AI asks the right discovery questions to score leads in real time. Hot leads get fast-tracked to booking, casual browsers get nurtured—no more wasted sales calls.",
      },
      {
        icon: "Calendar",
        title: "Direct Calendar Booking",
        description: "Qualified visitors book appointments inside the chat. AI checks availability, confirms the meeting, and sends calendar invites automatically. Zero handoff required.",
      },
      {
        icon: "MessageSquare",
        title: "Seamless Human Handoff",
        description: "When a conversation needs a real person, AI hands off with full context—chat history, lead score, and intent—so your team picks up exactly where AI left off.",
      },
      {
        icon: "BarChart3",
        title: "Conversion Analytics Built-In",
        description: "Track every conversation, conversion path, and drop-off point. See which pages drive chats, which questions close deals, and where to optimize your funnel.",
      },
    ],
  },
  calculator: {
    headline: "Website Lead Recovery Calculator",
    subheadline: "See how much revenue your website is leaving on the table without AI chat.",
    inputs: {
      leads: { label: "Monthly website visitors", placeholder: "5000", defaultValue: 5000 },
      commission: { label: "Average customer value ($)", placeholder: "1500", defaultValue: 1500 },
    },
    reactivationRate: 0.05,
    conversionRate: 0.25,
    resultLabel: "Additional monthly revenue with AI chat",
  },
  objections: {
    headline: "Common Concerns About AI Chat Widgets",
    subheadline: "Real answers for businesses considering AI on their website.",
    objections: [
      {
        objection: "Visitors will know it's a bot and ignore it",
        response: "Modern AI sounds genuinely conversational—not the clunky scripted bots from 2018. More importantly, visitors don't care what's answering as long as the answers are fast and accurate. Speed and helpfulness beat human-vs-AI every time.",
      },
      {
        objection: "AI will give wrong answers and embarrass our brand",
        response: "Prestyj trains AI exclusively on your verified content—your website, FAQs, pricing, and policies. We use guardrails so AI never invents information. If it doesn't know, it gracefully escalates to a human instead of guessing.",
      },
      {
        objection: "We already have a contact form and email signup",
        response: "Forms convert at 1-3%. AI chat converts at 10-30% because it engages visitors at the moment of intent, answers their actual question, and removes the wait. Forms ask visitors to do work—chat does the work for them.",
      },
      {
        objection: "Setup will take months and disrupt our site",
        response: "Most clients are live within 7-14 days. Installation is a single line of code—no developers, no rebuild, no downtime. We handle the AI training, knowledge base, and tuning so your team doesn't lift a finger.",
      },
    ],
  },
  cta: {
    headline: "Ready to Convert Every Visitor?",
    subheadline: "Stop letting website traffic slip away. See how AI chat engages, qualifies, and books leads from your site—24/7, on autopilot.",
    buttonText: "Book Your Demo",
    buttonHref: "/book-demo",
    footnote: "No commitment required. See AI chat live on your website in under 10 minutes.",
  },
};
