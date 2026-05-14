import type { SolutionPageContent } from "./types";

export const aiEmailFollowUp: SolutionPageContent = {
  slug: "ai-email-follow-up",
  meta: {
    title: "AI Email Follow-Up | Automated Sequences That Convert Leads | Prestyj",
    description:
      "Stop losing leads to slow follow-up. AI sends personalized, perfectly timed email sequences that nurture every prospect until they convert. Built for real estate, home services, and B2B sales teams.",
    keywords: [
      "AI email follow-up automation",
      "automated email sequences for leads",
      "AI lead nurture for real estate",
      "personalized email automation B2B",
      "automated follow-up emails for sales",
      "AI email drip campaigns",
      "lead nurturing automation software",
      "real estate email follow-up system",
      "home services email automation",
      "B2B sales email sequences",
      "AI-powered email marketing",
      "automated prospect follow-up",
    ],
  },
  hero: {
    badge: "AI Email Follow-Up Solution",
    headline: "Every Lead Nurtured.",
    headlineAccent: "Every Email Personalized.",
    subheadline:
      "80% of sales require 5+ follow-ups, but most reps stop after 2. AI writes, personalizes, and sends perfectly timed email sequences that nurture every lead until they're ready to buy. Built for real estate, home services, and B2B sales teams.",
    stats: [
      { value: "5x", label: "more lead conversions", color: "success" },
      { value: "100%", label: "follow-up completion", color: "primary" },
      { value: "24/7", label: "automated nurture", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Your Follow-Up Game Is Killing Your Pipeline",
    subheadline:
      "Most leads never convert—not because they aren't interested, but because nobody followed up enough.",
    points: [
      {
        icon: "UserX",
        title: "Reps give up after 2 attempts",
        description:
          "44% of salespeople quit after one follow-up. But 80% of deals require 5+ touchpoints. Every lead you stop emailing is revenue handed to a more persistent competitor.",
        color: "destructive",
      },
      {
        icon: "Clock",
        title: "Manual follow-up doesn't scale",
        description:
          "Writing personalized emails to 50+ leads daily is impossible. So reps either send generic blasts that get ignored or skip follow-ups entirely. Either way, leads go cold.",
        color: "warning",
      },
      {
        icon: "TrendingDown",
        title: "Generic templates kill response rates",
        description:
          "Mass-blast templates feel like spam and tank your open rates. Without personalization based on each lead's interests, timing, and behavior, your emails hit the trash folder.",
        color: "primary",
      },
      {
        icon: "History",
        title: "Old leads sit forgotten in your CRM",
        description:
          "Thousands of leads from 6, 12, 24 months ago are sitting in your database with zero outreach. Many are ready to buy now—but you'll never know without consistent follow-up.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "AI Email Sequences That Actually Convert",
    subheadline:
      "Personalized at scale. Timed to perfection. Sent automatically until every lead responds or converts.",
    benefits: [
      {
        icon: "Sparkles",
        title: "Hyper-Personalized at Scale",
        description:
          "AI writes each email tailored to the lead's source, behavior, property interest, or business context. Every message feels one-to-one—even when sending thousands.",
      },
      {
        icon: "Workflow",
        title: "Multi-Step Sequences Built In",
        description:
          "5, 10, 20-touch sequences that adapt based on opens, clicks, and replies. AI knows when to follow up, when to switch tactics, and when to hand off to a human.",
      },
      {
        icon: "Calendar",
        title: "Perfect Send-Time Optimization",
        description:
          "AI analyzes when each lead opens emails and sends at the moment they're most likely to read. No more emails buried at 3am—every send hits the inbox at peak attention.",
      },
      {
        icon: "RefreshCw",
        title: "Database Reactivation on Autopilot",
        description:
          "Wake up cold leads sitting in your CRM. AI re-engages every old contact with relevant, timely outreach—turning forgotten lists into closed revenue.",
      },
      {
        icon: "Target",
        title: "Behavior-Triggered Outreach",
        description:
          "AI watches for buying signals—website visits, email opens, link clicks—and triggers the right follow-up at the right moment. Strike while the lead is hot.",
      },
      {
        icon: "BarChart3",
        title: "Continuous A/B Optimization",
        description:
          "AI tests subject lines, copy, CTAs, and send times across your sequences—then doubles down on what converts. Your follow-up gets smarter every week.",
      },
    ],
  },
  calculator: {
    headline: "Lead Conversion Recovery Calculator",
    subheadline: "See how much pipeline you're losing to weak follow-up.",
    inputs: {
      leads: { label: "New leads per month", placeholder: "150", defaultValue: 150 },
      commission: { label: "Average deal value ($)", placeholder: "5000", defaultValue: 5000 },
    },
    reactivationRate: 0.45,
    conversionRate: 0.25,
    resultLabel: "Additional monthly revenue with AI follow-up",
  },
  objections: {
    headline: "Common Concerns About AI Email Follow-Up",
    subheadline: "Real answers for sales leaders considering AI-powered email automation.",
    objections: [
      {
        objection: "AI emails will feel robotic and impersonal",
        response:
          "Modern AI writes in your brand's voice and personalizes every message using lead data—name, company, source, behavior, and context. Most recipients can't tell the difference, and reply rates often beat human-written emails because AI is more consistent and timely.",
      },
      {
        objection: "Won't this hurt our sender reputation or get flagged as spam?",
        response:
          "AI uses smart sending limits, domain warming, and engagement-based throttling to protect your deliverability. Because emails are personalized and behavior-triggered—not blasted—they consistently outperform mass campaigns on open rates and stay out of spam folders.",
      },
      {
        objection: "We already use Mailchimp / HubSpot / Salesforce sequences",
        response:
          "Traditional drip tools require you to write every email and build every sequence manually. AI generates the copy, personalizes per lead, optimizes send times, and adapts based on behavior. We integrate directly with HubSpot, Salesforce, and most major CRMs—enhancing your existing stack, not replacing it.",
      },
      {
        objection: "Our sales process is too custom for AI",
        response:
          "AI is trained on your sales playbook, ICP, value props, and tone. You define the strategy and approval rules; AI handles the volume. For high-touch deals, AI drafts emails for rep review. For volume outreach, it sends autonomously. You stay in control.",
      },
    ],
  },
  cta: {
    headline: "Ready to Convert Every Lead in Your Pipeline?",
    subheadline:
      "Stop letting leads slip through the cracks. Let AI follow up persistently, personally, and profitably—24/7, across every lead in your database.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote: "No commitment required. See AI write and send personalized follow-ups in real time.",
  },
};
