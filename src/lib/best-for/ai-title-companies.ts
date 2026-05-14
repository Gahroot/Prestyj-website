import { createBestForPage } from "@/lib/content-factory";
import type { IconName } from "@/lib/content-factory";
import type { BestForPageContent } from "./types";

export const aiTitleCompanies: BestForPageContent = createBestForPage({
  slug: "ai-title-companies",
  niche: {
    name: "Title Companies",
    shortName: "Title Cos.",
    description:
      "Title insurance and settlement services companies handling property title searches, examinations, and closings",
  },
  meta: {
    title: "Best AI for Title Companies",
    description:
      "The best AI platform for title companies. Automate title search, order entry, closing coordination, and wire fraud prevention. Modernize your title operations with AI agents.",
    keywords: [
      "AI for title companies",
      "title insurance AI",
      "AI title search automation",
      "closing coordination AI",
      "wire fraud prevention AI",
      "title production automation",
    ],
  },
  hero: {
    badge: "For Title Companies",
    headlineAccent: "Title Companies",
    subheadline:
      "Modernize title production with AI that automates order entry, assists with title examination, prevents wire fraud, and keeps every closing on track — without adding headcount.",
    pattern: "BEST_AI_FOR",
  },
  whyBestFor: [
    {
      icon: "FileText" as IconName,
      title: "Purpose-Built for Title Production Workflows",
      description:
        "Prestyj understands the title production lifecycle: order intake, title search, examination, commitment preparation, and closing coordination. AI is trained on title-specific tasks, not generic office automation.",
    },
    {
      icon: "Zap" as IconName,
      title: "Automated Order Entry from Emails & PDFs",
      description:
        "AI reads incoming order requests from emails, PDFs, and web forms — extracting property details, client information, and special instructions automatically. Eliminate manual data entry and reduce order intake time by 80%.",
    },
    {
      icon: "Search" as IconName,
      title: "AI-Assisted Title Search & Examination",
      description:
        "AI scans county records, prior title policies, and chain-of-title documents to flag potential issues: liens, encumbrances, boundary disputes, and ownership gaps. Examiners review AI findings instead of starting from scratch.",
    },
    {
      icon: "Shield" as IconName,
      title: "Built-In Wire Fraud Detection & Prevention",
      description:
        "AI monitors wire instructions for red flags: last-minute changes, suspicious email domains, and unusual routing numbers. Protect your clients and your reputation with automated fraud alerts.",
    },
    {
      icon: "MessageSquare" as IconName,
      title: "Seamless Client Communication Without Portals",
      description:
        "Buyers, sellers, lenders, and agents get updates via text and email — no portal logins required. AI answers routine questions about closing timelines, document requirements, and wire instructions automatically.",
    },
    {
      icon: "TrendingUp" as IconName,
      title: "Scales Examiner Capacity Without Hiring",
      description:
        "Handle 3x the order volume with the same examiner team. AI handles intake, preliminary research, and client communication so examiners focus on complex title issues and clearance.",
    },
  ],
  painPoints: [
    {
      problem: "Examiners spending hours on manual data entry",
      solution:
        "AI extracts order details from emails, PDFs, and forms automatically. Examiners receive pre-populated order files and can focus on title analysis instead of typing.",
    },
    {
      problem: "Order intake bottleneck slowing production",
      solution:
        "AI processes incoming orders 24/7. No more backlog on Monday mornings or after holidays. Orders flow into production instantly, keeping your pipeline moving.",
    },
    {
      problem: "Wire fraud threats increasing every year",
      solution:
        "AI monitors all wire communications for fraud indicators and alerts your team to suspicious changes. Add a critical security layer without slowing down closings.",
    },
    {
      problem: "Closing coordination is a communication nightmare",
      solution:
        "AI coordinates with all parties — buyers, sellers, agents, lenders — sending reminders, collecting documents, and confirming appointments. Everyone stays informed without constant phone tag.",
    },
    {
      problem: "Can't take on more volume without more staff",
      solution:
        "AI scales your existing team's capacity by automating intake, research, and communication. Grow revenue without the overhead of hiring and training new examiners.",
    },
  ],
  comparison: {
    headers: ["Feature", "Prestyj", "Alanna.ai", "Qualia Clear"],
    rows: [
      {
        feature: "AI Order Entry",
        prestyj: "Email & PDF data extraction",
        others: "Limited or manual intake",
      },
      {
        feature: "Title Search Assistance",
        prestyj: "AI flags liens & chain issues",
        others: "Basic document retrieval",
      },
      {
        feature: "Wire Fraud Detection",
        prestyj: "Real-time AI monitoring & alerts",
        others: "Manual verification only",
      },
      {
        feature: "Client Communication",
        prestyj: "AI text & email, no portals",
        others: "Portal-based or manual",
      },
      {
        feature: "Scalability",
        prestyj: "3x volume, same team",
        others: "Linear staffing required",
      },
      {
        feature: "Closing Coordination",
        prestyj: "Automated multi-party scheduling",
        others: "Calendar integration only",
      },
    ],
    includeCommonRows: true,
  },
  faq: [
    {
      question: "How are title companies using AI?",
      answer:
        "Leading title companies use AI to automate order intake from emails and PDFs, assist with preliminary title searches, detect wire fraud, coordinate closing communications, and answer routine client questions. AI reduces manual work by 60-80% while improving accuracy and security.",
    },
    {
      question: "Can AI automate title searches?",
      answer:
        "AI can automate the initial data gathering phase of title searches: pulling property records, identifying prior liens, and flagging potential chain-of-title issues. Human examiners still review complex findings, but AI eliminates hours of manual record retrieval and preliminary analysis.",
    },
    {
      question: "What's the best AI for title production?",
      answer:
        "The best title production AI integrates order intake, search assistance, examination support, and client communication in one platform. Prestyj is built specifically for title workflows, not generic document processing, so it understands the nuances of title commitments, exceptions, and clearance requirements.",
    },
    {
      question: "How does AI prevent wire fraud?",
      answer:
        "Prestyj's AI monitors wire instruction communications for fraud indicators: sudden changes to routing numbers, suspicious sender domains, unusual timing, and deviations from verified contact information. When red flags are detected, AI immediately alerts your team before any funds are transferred.",
    },
    {
      question: "Will AI replace title examiners?",
      answer:
        "No. AI augments examiners by handling repetitive data entry, preliminary research, and routine communication. Examiners focus on complex title issues, judgment calls, and client relationships — the high-value work that requires human expertise. Most title companies see examiner productivity increase 2-3x with AI support.",
    },
    {
      question: "How do I get started with AI in my title company?",
      answer:
        "Start with order intake automation — it's the highest-ROI, lowest-risk entry point. Once you see the time savings, expand to client communication and search assistance. Prestyj integrates with most title production software and can be deployed in 1-2 weeks with minimal disruption.",
    },
  ],
  cta: {
    headline: "Modernize Your Title Operations",
    subheadline:
      "See how Prestyj automates order entry, assists with title examination, and protects against wire fraud. Book a demo designed for title companies.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote: "No credit card required. See results in minutes.",
  },
});
