export interface FAQItem {
  question: string;
  answer: string;
}

/**
 * Canonical FAQ list for Prestyj.
 *
 * Positioning: "We build AI agents for marketing & sales."
 * Industry-neutral. Used on the home page, /faq, and anywhere else FAQs
 * ship. Keep this list tight — it's a single source of truth.
 */
export const faqs: FAQItem[] = [
  {
    question: "What exactly do I get?",
    answer:
      "An AI agent (or set of agents) built for your marketing and sales workflows — engaging inbound leads, qualifying them, booking meetings, and following up — plus the integrations into your CRM, calendar, and ad platforms to make it run. We design, build, deploy, and maintain it. You get a working system, not a tool you have to figure out.",
  },
  {
    question: "Who is this for — and who isn't it for?",
    answer:
      "It's a fit if you already have lead flow (paid ads, website, inbound calls, or a database) and the bottleneck is response time, follow-up, or qualification — not lack of leads. It's not a fit if you're pre-revenue with no traffic, or if you're looking for a self-serve chatbot you'll configure yourself. We build done-for-you AI agents, not DIY software.",
  },
  {
    question: "How much does it cost?",
    answer:
      "Pricing depends on scope — how many agents, which channels (chat, SMS, email, voice), and the integrations involved. We publish current plans and starting prices at prestyj.com/pricing. On a demo we'll scope your use case and give you an exact number before you commit to anything.",
  },
  {
    question: "How do I get started — what happens after I book a demo?",
    answer:
      "You pick a time at prestyj.com/book-demo. On the call we walk through your funnel, identify where AI agents will move the needle, and show you exactly what we'd build. If it's a fit, we scope and quote on the call. If you move forward, onboarding starts immediately and most clients are live within 7–10 business days. If it's not a fit, we'll tell you.",
  },
  {
    question: "What if it doesn't work?",
    answer:
      "We run on month-to-month agreements after onboarding — no long-term lock-in. If the agent isn't performing, we iterate on it; if we can't make it work for your business, you can cancel. We'd rather lose a client than trap one in a contract. Specific guarantees (where offered) are spelled out in your signed agreement.",
  },
  {
    question: "Will my leads know they're talking to AI?",
    answer:
      "The agent replies as a named person on your team and the conversation feels natural and on-brand. Most leads don't ask; the ones who do are told honestly. Disclosure rules vary by jurisdiction and channel (notably for SMS and AI voice in some U.S. states and the EU), and we configure your agent to comply with whatever applies to you.",
  },
  {
    question: "How is this different from hiring a sales or marketing rep?",
    answer:
      "A rep works business hours, takes vacation, eventually leaves, and costs thousands per month in salary and management overhead. An AI agent works 24/7, responds in seconds, handles unlimited volume in parallel, and costs a fraction of a full-time hire. Most teams keep their humans for closing and relationship work — the AI handles the front-end repetition.",
  },
  {
    question: "Does it work with our CRM and other tools?",
    answer:
      "Yes. We integrate with the major CRMs (HubSpot, Salesforce, Pipedrive, and most industry-specific platforms), calendars (Google, Outlook), ad platforms (Google, Meta, TikTok), and communication channels (SMS, email, web chat, voice). If your tool has an API or webhook, we can connect to it.",
  },
  {
    question: "What happens when a lead asks something the agent can't answer?",
    answer:
      "It hands off cleanly. Your team gets notified with the full conversation context so a human can step in without the lead feeling dropped. The agent is designed to handle qualification and routine questions, not replace your team's expertise on the complex stuff.",
  },
  {
    question: "Is there a long-term contract?",
    answer:
      "No. Month-to-month after onboarding. We earn the renewal each month on results, not contracts.",
  },
];
