import type { SolutionPageContent } from "./types";

export const aiForTitleCompanies: SolutionPageContent = {
  slug: "ai-for-title-companies",
  meta: {
    title: "AI Agents for Title Companies | Automate Title Production",
    description:
      "AI-powered automation for title companies. Speed up title searches, automate order entry, prevent wire fraud, and close more files with fewer errors. Modernize your title operations.",
    keywords: [
      "AI for title companies",
      "title production automation",
      "AI title search",
      "wire fraud prevention AI",
      "title order automation",
      "title company technology",
    ],
  },
  hero: {
    badge: "AI for Title Companies",
    headline: "AI Agents for Title",
    headlineAccent: "Companies",
    subheadline:
      "Modernize your title operations with AI that accelerates searches, automates order entry, detects wire fraud, and closes more files with fewer errors. Deliver faster closings and happier clients.",
    stats: [
      { value: "$446M", label: "wire fraud stolen in 2023", color: "destructive" },
      { value: "67%", label: "faster title production", color: "success" },
      { value: "3.2x", label: "more files per examiner", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Title Production Is Still Stuck in the Past",
    subheadline:
      "Manual processes, fragmented systems, and escalating fraud threats are holding title companies back.",
    points: [
      {
        icon: "Clock",
        title: "Manual title search taking days",
        description:
          "Examiners manually search county records, tax databases, judgment records, and UCC filings for every file. A complex commercial search can take 3–5 business days. Meanwhile, clients expect 24–48 hour turnaround, and competitors with better technology are eating your lunch.",
        color: "destructive",
      },
      {
        icon: "FileText",
        title: "Order entry eating examiner time",
        description:
          "Your examiners spend 30–45 minutes per file on order entry: reading emails, extracting property details, retyping information into your production system, and creating file jackets. That's 4–6 hours daily on clerical work instead of title examination.",
        color: "warning",
      },
      {
        icon: "AlertTriangle",
        title: "Wire fraud threats escalating ($446M stolen in 2023)",
        description:
          "Cybercriminals target title companies with sophisticated Business Email Compromise attacks that redirect closing funds. The average wire fraud loss is $130,000 per incident, and title companies are increasingly held liable. Manual verification processes aren't fast or thorough enough.",
        color: "destructive",
      },
      {
        icon: "Users",
        title: "Closing coordination chaos",
        description:
          "Coordinating buyers, sellers, lenders, agents, and attorneys for closing requires dozens of emails, phone calls, and calendar checks. One missed communication delays closing, damages relationships, and can cost you the client's next transaction.",
        color: "primary",
      },
      {
        icon: "Layers",
        title: "Data re-entry across disconnected systems",
        description:
          "Order details get typed into your title production system, then retyped into your closing software, then retyped again into your accounting system, then copied into email templates. Every re-entry is a potential error and a waste of skilled staff time.",
        color: "warning",
      },
      {
        icon: "TrendingDown",
        title: "Scaling requires hiring more staff",
        description:
          "To handle 20% more volume, you need 20% more examiners, processors, and closers. But skilled title professionals are scarce and expensive. Your margins compress with every new hire, and training takes 6–12 months before they're fully productive.",
        color: "primary",
      },
    ],
  },
  benefits: {
    headline: "AI-Powered Title Production at Scale",
    subheadline:
      "Close more files, reduce errors, and protect against fraud—with the team you already have.",
    benefits: [
      {
        icon: "Search",
        title: "AI-Accelerated Title Search & Examination",
        description:
          "AI automatically searches county records, tax databases, judgment records, and UCC filings in minutes instead of days. It flags potential issues—liens, encumbrances, chain of title gaps—and presents findings in a structured report for examiner review.",
      },
      {
        icon: "FileText",
        title: "Automated Order Entry from Emails & PDFs",
        description:
          "AI reads incoming order emails, attached PDFs, and lender portals to extract property details, client information, and special instructions. It creates file jackets, populates your production system, and notifies the assigned examiner—all without manual data entry.",
      },
      {
        icon: "Shield",
        title: "Wire Fraud Detection & Prevention",
        description:
          "AI monitors wire instructions for anomalies: changed account numbers, suspicious sender domains, unusual timing, and language patterns consistent with BEC attacks. It flags high-risk wires for human verification before funds are transferred—protecting your clients and your E&O policy.",
      },
      {
        icon: "MessageSquare",
        title: "Streamlined Closing Coordination & Communication",
        description:
          "AI coordinates closing schedules across all parties, sends automated reminders, collects required documents, and updates stakeholders on file status. Closers spend their time on complex issues instead of playing phone tag and sending status emails.",
      },
      {
        icon: "Workflow",
        title: "Unified Document Processing Across Systems",
        description:
          "AI connects your title production system, closing software, accounting platform, and CRM so data flows automatically. Enter information once, and it populates everywhere. Eliminate re-entry errors and free your team for higher-value work.",
      },
      {
        icon: "TrendingUp",
        title: "Scale Production Without Adding Headcount",
        description:
          "AI handles the repetitive, time-consuming tasks that currently consume 60–70% of examiner and processor time. Your existing team closes 2–3x more files without working longer hours. Scale volume without scaling payroll proportionally.",
      },
    ],
  },
  objections: {
    headline: "Title Company Concerns About AI",
    subheadline: "Title professionals have valid concerns. Here's how we address them.",
    objections: [
      {
        objection: "AI can't handle the nuance of title search.",
        response:
          "AI doesn't replace title examiners—it augments them. AI handles the data gathering and initial analysis, presenting findings in a structured format for examiner review. Complex legal issues, judgment calls, and client communication remain in human hands. Examiners become reviewers and advisors, not data entry clerks.",
      },
      {
        objection: "Our title production software works fine.",
        response:
          "Your software manages files. AI automates the work inside those files. Prestyj integrates with ResWare, SoftPro, RamQuest, and other major title production platforms. You keep your existing systems; AI makes them dramatically more productive.",
      },
      {
        objection: "What about compliance and legal liability?",
        response:
          "AI is configured to comply with ALTA best practices, state-specific title regulations, and CFPB requirements. All AI actions are logged and auditable. Wire fraud detection adds a layer of protection that reduces—not increases—your liability exposure. Your underwriters and E&O carrier will appreciate the additional safeguards.",
      },
      {
        objection: "Our staff will resist AI adoption.",
        response:
          "We hear this from every title company—and within 30 days, the same staff members who were skeptical become the biggest advocates. Why? Because AI eliminates the tedious parts of their job (data entry, repetitive searches, status emails) and lets them focus on the skilled work they were trained to do. We provide comprehensive training and change management support.",
      },
    ],
  },
  calculator: {
    headline: "Calculate Your Title Company ROI with AI",
    subheadline: "See how AI automation impacts your title operation's capacity and profitability.",
    inputs: {
      leads: {
        label: "Files per month",
        placeholder: "e.g., 300",
        defaultValue: 300,
      },
      commission: {
        label: "Average revenue per file ($)",
        placeholder: "e.g., 1200",
        defaultValue: 1200,
      },
    },
    reactivationRate: 0.4,
    conversionRate: 0.04,
    resultLabel: "Additional annual revenue from AI-powered title production",
  },
  cta: {
    headline: "Modernize Your Title Operations with AI",
    subheadline:
      "Join title companies that are replacing manual processes with AI-powered automation. Close more files, reduce errors, prevent fraud, and deliver the fast, accurate service your clients expect.",
    buttonText: "Book a Demo",
    buttonHref: "/book-demo",
    footnote: "See AI title search, order entry, and wire fraud detection in action.",
  },
};
