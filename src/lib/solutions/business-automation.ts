import type { SolutionPageContent } from "./types";

export const businessAutomation: SolutionPageContent = {
  slug: "business-automation",
  meta: {
    title: "Business Automation | AI Workflow Automation for Service Businesses | Prestyj",
    description:
      "Eliminate manual busywork with AI-powered business automation. Automate workflows, streamline processes, and free your team to focus on revenue-generating activities.",
    keywords: [
      "business automation",
      "workflow automation",
      "task automation",
      "process optimization",
      "AI business automation",
      "automated workflows",
      "business process automation",
      "workflow optimization",
    ],
  },
  hero: {
    badge: "Business Automation AI",
    headline: "Your Business Operations on Autopilot.",
    headlineAccent: "Work Smarter, Not Harder.",
    subheadline:
      "Replace manual busywork with intelligent workflow automation. From follow-up sequences to appointment reminders, automate the repetitive tasks that drain your team's time.",
    stats: [
      { value: "15+", label: "hours saved per week", color: "success" },
      { value: "85%", label: "less admin overhead", color: "primary" },
      { value: "3x", label: "faster task completion", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Manual Processes Are Choking Your Business",
    subheadline: "Every hour spent on busywork is an hour lost on revenue-generating activities.",
    points: [
      {
        icon: "Clock",
        title: "Manual busywork consumes your day.",
        description:
          "Your team spends 15+ hours per week on repetitive administrative tasks—data entry, follow-ups, scheduling, reminders. This is time that could be spent closing deals or serving customers.",
        color: "warning",
      },
      {
        icon: "TrendingDown",
        title: "Inconsistent processes create chaos.",
        description:
          "Every team member handles tasks differently. One person follows up three times, another forgets entirely. This inconsistency leads to missed opportunities and frustrated customers.",
        color: "destructive",
      },
      {
        icon: "AlertCircle",
        title: "Staff overwhelmed with admin work.",
        description:
          "Your best people are buried in paperwork and repetitive tasks instead of doing what they do best. Burnout increases, morale drops, and turnover rises—all because of preventable busywork.",
        color: "primary",
      },
    ],
  },
  benefits: {
    headline: "Automate Your Way to Operational Excellence",
    subheadline: "Our AI-powered business automation handles the repetitive work so your team can focus on growth.",
    benefits: [
      {
        icon: "RefreshCw",
        title: "Automated Follow-Up Sequences",
        description:
          "Multi-step nurture sequences that run automatically. Email, SMS, and voicemail follow-ups that trigger based on lead behavior—no manual intervention required.",
      },
      {
        icon: "Calendar",
        title: "Smart Appointment Reminders",
        description:
          "Reduce no-shows by 70% with automated appointment reminders. SMS, email, and even voicemail reminders sent at optimal times before appointments.",
      },
      {
        icon: "Bot",
        title: "Consistent Processes, Every Time",
        description:
          "Standardize your workflows with automation. Every lead, customer, and task follows the same optimized process—no variation, no missed steps, no human error.",
      },
      {
        icon: "Target",
        title: "Intelligent Task Routing",
        description:
          "Tasks automatically route to the right person based on skills, availability, and workload. No more bottlenecks or confused handoffs.",
      },
      {
        icon: "BarChart3",
        title: "Process Optimization Insights",
        description:
          "AI analyzes your workflows and identifies bottlenecks, inefficiencies, and improvement opportunities. Continuous optimization without manual analysis.",
      },
      {
        icon: "Shield",
        title: "24/7 Operations Coverage",
        description:
          "Your automated workflows run around the clock. Leads get nurtured, reminders get sent, and tasks get processed—even when your team is offline.",
      },
    ],
  },
  objections: {
    headline: "Business Automation vs Manual Processes: The Truth",
    subheadline: "Common concerns about workflow automation—and the reality.",
    objections: [
      {
        objection: "Automation will make my business feel robotic and impersonal.",
        response:
          "The best automation feels invisible to customers. Our workflows use personalized messaging based on customer data, timing optimized for each individual, and seamless handoffs to humans when needed. Customers get faster, more consistent service—not robotic interactions.",
      },
      {
        objection: "My business processes are too complex to automate.",
        response:
          "Business automation isn't about automating everything overnight. We start with high-impact, repetitive tasks—follow-ups, reminders, data entry—and gradually expand. Most businesses see 60-70% of their repetitive work automated within 90 days.",
      },
      {
        objection: "My team will resist automation because they fear losing their jobs.",
        response:
          "Automation eliminates tedious work, not jobs. Your team gets freed from data entry and repetitive tasks to focus on high-value activities—building relationships, solving complex problems, and closing deals. Most teams embrace automation once they experience the freedom it provides.",
      },
      {
        objection: "I don't have the technical skills to set this up.",
        response:
          "That's exactly why we handle everything. We map your processes, configure your workflows, integrate your tools, and train your team. Most clients are fully operational within 2-3 weeks. You don't need to touch a line of code.",
      },
      {
        objection: "How is this different from automation tools I already use?",
        response:
          "Most automation tools require you to build workflows from scratch. Our AI learns your processes, suggests optimizations, and adapts based on results. Plus, we provide a unified platform that connects all your tools—CRM, email, SMS, calendar—in one intelligent system.",
      },
    ],
  },
  calculator: {
    headline: "Calculate Your Business Automation ROI",
    subheadline: "See how much time and money you could save with workflow automation.",
    inputs: {
      leads: {
        label: "Team size (admin hours/week lost to busywork)",
        placeholder: "e.g., 40",
        defaultValue: 40,
      },
      commission: {
        label: "Average hourly value ($)",
        placeholder: "e.g., 75",
        defaultValue: 75,
      },
    },
    reactivationRate: 0.7,
    conversionRate: 0.8,
    resultLabel: "Potential weekly savings with business automation",
  },
  faqs: [
    {
      question: "How long does it take to implement business automation?",
      answer:
        "Most businesses see their first automated workflows running within 1-2 weeks. Full implementation typically takes 4-6 weeks, depending on complexity. We start with quick wins—follow-up sequences, appointment reminders—and build from there.",
    },
    {
      question: "Will business automation work with my existing tools?",
      answer:
        "Yes. We integrate with 200+ popular business tools including CRMs (Salesforce, HubSpot, Zoho), calendars (Google, Outlook), communication platforms (email, SMS), and industry-specific software. If your tool has an API, we can connect to it.",
    },
    {
      question: "What specific workflows can I automate?",
      answer:
        "Common automations include: lead follow-up sequences, appointment reminders, quote/proposal delivery, customer onboarding, payment reminders, review requests, renewal notifications, and internal task routing. Almost any repetitive, rule-based process can be automated.",
    },
    {
      question: "How do I know which processes to automate first?",
      answer:
        "We help you identify high-impact opportunities through a process audit. Generally, the best candidates are tasks that are: repetitive, time-consuming, error-prone, and don't require complex human judgment. Follow-up sequences and appointment reminders are typically top priorities.",
    },
    {
      question: "What happens if something goes wrong with the automation?",
      answer:
        "Our system includes built-in monitoring, error handling, and alerts. If a workflow fails or produces unexpected results, you're notified immediately. You can pause any automation instantly and all actions are logged for review. Nothing happens without a trail.",
    },
    {
      question: "Can I customize the automated workflows?",
      answer:
        "Absolutely. You have full control over triggers, conditions, messaging, timing, and escalation rules. We build the initial workflows based on your processes, then you can adjust anything to match your exact needs.",
    },
    {
      question: "How do I get started with business automation?",
      answer:
        "Book a free demo and we'll analyze your current processes, identify automation opportunities, and show you exactly what's possible. No commitment required—just a clear picture of how much time and money you could save.",
    },
  ],
  cta: {
    headline: "Ready to Eliminate Manual Busywork?",
    subheadline:
      "Stop wasting hours on repetitive tasks. See how AI-powered business automation can transform your operations.",
    buttonText: "Book Your Free Demo",
    buttonHref: "/book-demo",
    footnote: "No commitment required. See the automation in action with your own workflows.",
  },
};

// Comparison data for the feature table
export const businessAutomationComparison = {
  headline: "AI Business Automation vs. Manual Processes",
  subheadline: "See why service businesses are switching to workflow automation.",
  features: [
    {
      feature: "Task Completion Speed",
      prestyj: "Instant to minutes",
      competitor: "Hours to days",
    },
    {
      feature: "Process Consistency",
      prestyj: "100% every time",
      competitor: "Varies by person",
    },
    {
      feature: "Follow-Up Reliability",
      prestyj: "Never misses a step",
      competitor: "27% never followed up",
    },
    {
      feature: "24/7 Operations",
      prestyj: true,
      competitor: false,
    },
    {
      feature: "Appointment Reminders",
      prestyj: "Automated multi-channel",
      competitor: "Manual calls/emails",
    },
    {
      feature: "Error Rate",
      prestyj: "Near zero",
      competitor: "Human error common",
    },
    {
      feature: "Scalability",
      prestyj: "Unlimited volume",
      competitor: "Limited by headcount",
    },
    {
      feature: "Process Visibility",
      prestyj: "Real-time dashboards",
      competitor: "Spreadsheets & guesswork",
    },
    {
      feature: "Optimization",
      prestyj: "AI-powered continuous",
      competitor: "Periodic manual review",
    },
    {
      feature: "Staff Focus",
      prestyj: "High-value activities",
      competitor: "Buried in admin",
    },
  ],
};
