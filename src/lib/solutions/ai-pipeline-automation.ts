import type { SolutionPageContent } from "./types";

export const aiPipelineAutomation: SolutionPageContent = {
  slug: "ai-pipeline-automation",
  meta: {
    title: "AI Pipeline Automation | Automate Your Entire Sales Pipeline | Prestyj",
    description: "Automate your entire sales pipeline with AI—from lead capture and qualification to nurturing, appointment setting, and follow-up. Built for sales teams, real estate brokerages, and home service companies.",
    keywords: [
      "AI sales pipeline automation",
      "automated lead qualification",
      "AI appointment setting",
      "sales pipeline software",
      "AI lead nurturing",
      "automated follow-up system",
      "AI for real estate brokerages",
      "sales automation for home services",
      "end-to-end sales automation",
      "AI SDR replacement",
      "automated sales workflow",
      "lead capture to close automation",
    ],
  },
  hero: {
    badge: "AI Pipeline Automation",
    headline: "Your Entire Sales Pipeline.",
    headlineAccent: "Fully Automated.",
    subheadline: "From the first lead capture to the final follow-up, AI runs your pipeline 24/7. Qualify leads, nurture prospects, book appointments, and close more deals—without adding headcount. Built for sales teams, real estate brokerages, and home service companies.",
    stats: [
      { value: "24/7", label: "pipeline coverage", color: "primary" },
      { value: "5x", label: "more qualified meetings", color: "success" },
      { value: "80%", label: "less manual follow-up", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Your Pipeline Is Leaking Revenue at Every Stage",
    subheadline: "Manual sales processes lose deals between every step—from lead to close.",
    points: [
      {
        icon: "PhoneMissed",
        title: "Leads go cold before anyone reaches them",
        description: "78% of buyers choose the company that responds first. When your reps take 4+ hours to follow up, you've already lost the deal to faster competitors.",
        color: "destructive",
      },
      {
        icon: "UserX",
        title: "Reps waste time on unqualified leads",
        description: "Without proper qualification, your sales team burns hours chasing tire-kickers instead of closing buyers. Quality leads get buried under the noise.",
        color: "warning",
      },
      {
        icon: "History",
        title: "Follow-up dies after the second touch",
        description: "It takes 8-12 touches to convert a lead, but most reps stop after 2. Thousands of deals sit dormant in your CRM because nobody's nurturing them.",
        color: "primary",
      },
      {
        icon: "Calendar",
        title: "Appointment setting eats your week",
        description: "Back-and-forth scheduling, no-shows, and reschedules consume 15+ hours per rep weekly—time that should be spent closing, not coordinating.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "End-to-End AI Pipeline Automation",
    subheadline: "Every stage of your sales pipeline running on autopilot—lead capture to closed-won.",
    benefits: [
      {
        icon: "Zap",
        title: "Instant Lead Capture & Response",
        description: "AI engages every new lead within seconds across SMS, email, and voice. No lead waits, no opportunity slips through the cracks.",
      },
      {
        icon: "Target",
        title: "Automated Qualification",
        description: "AI runs intelligent discovery conversations, scores leads against your ICP, and routes only sales-ready prospects to your reps. Your team only talks to buyers.",
      },
      {
        icon: "Heart",
        title: "Multi-Touch Lead Nurturing",
        description: "Long-cycle leads get personalized, contextual follow-up over weeks or months—automatically. AI keeps prospects warm until they're ready to buy.",
      },
      {
        icon: "Calendar",
        title: "Hands-Free Appointment Setting",
        description: "AI books qualified meetings directly into your reps' calendars based on availability, time zones, and lead priority. No coordination required.",
      },
      {
        icon: "RefreshCw",
        title: "Persistent Follow-Up Sequences",
        description: "AI executes 8-12+ touch sequences across channels, adapting messaging based on engagement. Stop losing deals to inconsistent follow-up.",
      },
      {
        icon: "Workflow",
        title: "Full CRM Integration",
        description: "Every interaction logged automatically. AI updates lead stages, triggers workflows, and hands off rich context to reps the moment a prospect is ready.",
      },
    ],
  },
  calculator: {
    headline: "Pipeline Revenue Calculator",
    subheadline: "See how much additional revenue full pipeline automation can capture.",
    inputs: {
      leads: { label: "Leads per month", placeholder: "500", defaultValue: 500 },
      commission: { label: "Average deal value ($)", placeholder: "5000", defaultValue: 5000 },
    },
    reactivationRate: 0.5,
    conversionRate: 0.25,
    resultLabel: "Additional monthly revenue with AI pipeline automation",
  },
  objections: {
    headline: "Common Concerns About Pipeline Automation",
    subheadline: "Real answers for sales leaders evaluating AI automation.",
    objections: [
      {
        objection: "AI will make our outreach feel impersonal",
        response: "Modern AI personalizes every message based on lead context, source, behavior, and conversation history—often more thoroughly than reps doing it manually. Prospects experience faster, more relevant communication, not robotic spam. Your reps still own the high-stakes conversations.",
      },
      {
        objection: "We'll lose control of our sales process",
        response: "You define the playbook, qualification criteria, messaging, and handoff rules. AI executes your process at scale with full transparency—every conversation, score, and action is logged. You gain more visibility into your pipeline, not less.",
      },
      {
        objection: "Our sales process is too custom for AI",
        response: "Prestyj is built around your existing workflow, not a templated one. We integrate with Salesforce, HubSpot, Follow Up Boss, and other CRMs, then configure AI to match your stages, qualification criteria, and rep handoff process exactly.",
      },
      {
        objection: "Won't this replace our sales reps?",
        response: "AI replaces the busywork, not the closers. Reps stop spending time on data entry, scheduling, and chasing cold leads—and start spending it on qualified conversations and closing deals. Most teams see rep productivity double without adding headcount.",
      },
    ],
  },
  cta: {
    headline: "Ready to Automate Your Entire Pipeline?",
    subheadline: "Stop losing deals to slow response times, weak follow-up, and manual scheduling. See how AI pipeline automation captures every lead and closes more revenue—without adding a single rep.",
    buttonText: "Book Your Demo",
    buttonHref: "/book-demo",
    footnote: "No commitment required. See full pipeline automation in action in under 30 minutes.",
  },
};
