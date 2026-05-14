import type { SolutionPageContent } from "./types";

export const aiCrmAutomation: SolutionPageContent = {
  slug: "ai-crm-automation",
  meta: {
    title: "AI CRM Automation | Eliminate Manual Data Entry Forever | Prestyj",
    description:
      "Stop wasting hours on CRM busywork. AI automatically logs calls, updates records, scores leads, manages your pipeline, and creates follow-up tasks—so your sales team sells instead of typing.",
    keywords: [
      "AI CRM automation",
      "automated CRM data entry",
      "AI lead scoring software",
      "automated pipeline management",
      "CRM automation for real estate",
      "sales CRM automation",
      "AI follow-up task creation",
      "automatic CRM updates",
      "Salesforce AI automation",
      "HubSpot AI automation",
      "real estate CRM AI",
      "home services CRM automation",
    ],
  },
  hero: {
    badge: "AI CRM Automation Solution",
    headline: "Your Sales Team Sells.",
    headlineAccent: "AI Handles The CRM.",
    subheadline:
      "Manual CRM updates eat 5+ hours per rep per week. Prestyj's AI automatically logs every call, updates every record, scores every lead, and schedules every follow-up—so your team focuses on closing, not typing. Built for real estate teams, home services, and sales organizations.",
    stats: [
      { value: "5+ hrs", label: "saved per rep weekly", color: "success" },
      { value: "100%", label: "CRM data captured", color: "primary" },
      { value: "0", label: "manual data entry", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Your CRM Is A Black Hole For Sales Time",
    subheadline:
      "Sales reps spend more time updating records than talking to prospects—and the data still isn't accurate.",
    points: [
      {
        icon: "Clock",
        title: "Reps waste 5+ hours weekly on data entry",
        description:
          "Logging calls, updating contact records, typing notes, moving deals between stages. Every hour spent in the CRM is an hour not spent selling. Across a 10-person team, that's 50+ hours of lost selling time every week.",
        color: "destructive",
      },
      {
        icon: "Database",
        title: "Half the data is missing or wrong",
        description:
          "Reps skip fields, forget to log calls, leave deals stuck in old stages. Your pipeline reports lie because the underlying data is incomplete. You can't manage what you can't measure—and you're not measuring accurately.",
        color: "warning",
      },
      {
        icon: "UserX",
        title: "Hot leads slip through the cracks",
        description:
          "Without consistent lead scoring, a $500K deal looks identical to a tire-kicker. Reps chase the wrong prospects while qualified buyers go cold. By the time anyone follows up, they've already signed with a competitor.",
        color: "destructive",
      },
      {
        icon: "History",
        title: "Follow-ups never happen on time",
        description:
          "Sales managers tell reps to \"follow up in 3 days\"—but no task gets created, no reminder fires, and the lead disappears. 80% of deals require 5+ touches, but most reps stop at 1-2 because there's no system tracking what's next.",
        color: "warning",
      },
    ],
  },
  benefits: {
    headline: "AI That Runs Your CRM Automatically",
    subheadline:
      "From the moment a lead enters your pipeline, AI captures, scores, updates, and schedules everything—no manual work required.",
    benefits: [
      {
        icon: "Bot",
        title: "Automatic Call & Email Logging",
        description:
          "Every call, text, and email is automatically transcribed, summarized, and logged to the right contact and deal record. Reps never type a note again. Full conversation history is searchable in seconds.",
      },
      {
        icon: "Target",
        title: "Real-Time AI Lead Scoring",
        description:
          "AI analyzes engagement signals, conversation sentiment, demographic data, and buying behavior to score every lead 0-100. Hot leads bubble to the top automatically so reps focus on prospects most likely to close.",
      },
      {
        icon: "Workflow",
        title: "Automated Pipeline Management",
        description:
          "AI moves deals between stages based on actual activity—not whether a rep remembered to update the record. Stuck deals get flagged. Won deals trigger handoff workflows. Your pipeline finally reflects reality.",
      },
      {
        icon: "Calendar",
        title: "Smart Follow-Up Task Creation",
        description:
          "After every interaction, AI creates the right next-step task: a call-back in 2 days, a contract send tomorrow, a check-in next week. Reps wake up to a prioritized task list—no more guessing what's next.",
      },
      {
        icon: "RefreshCw",
        title: "Continuous Data Enrichment",
        description:
          "AI auto-fills missing contact info, company details, property data, and social profiles. New leads enter your CRM fully enriched. Existing records get updated as new information surfaces—without anyone lifting a finger.",
      },
      {
        icon: "BarChart3",
        title: "Pipeline Intelligence & Forecasting",
        description:
          "Because the data is finally accurate, your forecasts finally work. AI surfaces at-risk deals, predicts close probability, and shows managers exactly where to coach. Real visibility into what's actually happening in the pipeline.",
      },
    ],
  },
  calculator: {
    headline: "CRM Time-Waste Calculator",
    subheadline: "See how much revenue you're losing to manual CRM work and missed follow-ups.",
    inputs: {
      leads: { label: "Leads in pipeline per month", placeholder: "300", defaultValue: 300 },
      commission: { label: "Average deal value ($)", placeholder: "8000", defaultValue: 8000 },
    },
    reactivationRate: 0.4,
    conversionRate: 0.25,
    resultLabel: "Additional monthly revenue with AI CRM automation",
  },
  objections: {
    headline: "Common Concerns About AI CRM Automation",
    subheadline: "Real answers for sales leaders evaluating AI for their CRM.",
    objections: [
      {
        objection: "We already use Salesforce/HubSpot—do we need to switch?",
        response:
          "No. Prestyj sits on top of your existing CRM—Salesforce, HubSpot, Follow Up Boss, kvCORE, ServiceTitan, and others. Your reps keep working in the tools they know. AI just handles the data entry, scoring, and follow-up tasks automatically in the background.",
      },
      {
        objection: "Won't AI lead scoring miss the nuance our reps catch?",
        response:
          "AI doesn't replace rep judgment—it surfaces signals reps miss. It tracks every email open, page visit, call sentiment, and response time across hundreds of leads simultaneously. Reps still make the final call, but they start their day with a prioritized list instead of a guess.",
      },
      {
        objection: "How accurate is automatic call logging really?",
        response:
          "Modern AI transcription is 95%+ accurate, and Prestyj generates structured summaries—not just raw transcripts. You get key topics, commitments made, objections raised, and next steps, all linked to the right contact and deal. Reps can edit anything, but most never need to.",
      },
      {
        objection: "Our team will resist another tool to learn",
        response:
          "There's nothing new to learn—that's the point. AI works invisibly inside the CRM your team already uses. Reps notice fewer fields to fill out and a better task list, not a new interface. Most teams see adoption hit 100% in week one because it removes work instead of adding it.",
      },
    ],
  },
  cta: {
    headline: "Ready to Get Your Sales Team Out of the CRM?",
    subheadline:
      "Every hour your reps spend updating records is an hour they're not closing deals. Let AI handle the busywork so your team can focus on selling.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote:
      "No CRM migration required. Works with Salesforce, HubSpot, Follow Up Boss, and more.",
  },
};
