import type { SolutionPageContent } from "./types";

export const salesAutomation: SolutionPageContent = {
  slug: "sales-automation",
  meta: {
    title: "Sales Automation | AI-Powered Pipeline Automation for Service Businesses | Prestyj",
    description:
      "Transform your sales process with AI-powered automation. From lead capture to booking, our automated sales pipeline eliminates manual follow-up and ensures no lead falls through the cracks.",
    keywords: [
      "sales automation",
      "automated sales pipeline",
      "AI sales automation",
      "sales process automation",
      "lead nurturing automation",
      "sales workflow automation",
    ],
  },
  hero: {
    badge: "Sales Automation AI",
    headline: "Your Sales Pipeline on Autopilot.",
    headlineAccent: "No Lead Left Behind.",
    subheadline:
      "Replace manual follow-up chaos with an intelligent automated sales pipeline. Capture, nurture, and convert leads 24/7—while you focus on closing deals.",
    stats: [
      { value: "351%", label: "more outreach capacity", color: "success" },
      { value: "50%", label: "faster sales cycles", color: "primary" },
      { value: "0", label: "leads lost to cracks", color: "warning" },
    ],
  },
  painPoints: {
    headline: "Manual Sales Processes Are Bleeding Revenue",
    subheadline: "Every day, leads slip away because your team can't keep up.",
    points: [
      {
        icon: "Clock",
        title: "Manual follow-up is unsustainable.",
        description:
          "Your sales team spends hours on repetitive outreach instead of closing. One rep can only meaningfully follow up with 20-30 leads per day. What about the other 200?",
        color: "warning",
      },
      {
        icon: "TrendingDown",
        title: "Inconsistent processes kill deals.",
        description:
          "Every rep follows up differently. Some leads get 5 touches, others get 1. This inconsistency means missed opportunities and unpredictable revenue.",
        color: "destructive",
      },
      {
        icon: "AlertCircle",
        title: "Leads fall through the cracks.",
        description:
          "Without a systematic process, 27% of leads never get a single follow-up. That's nearly a third of your marketing budget wasted on leads that go nowhere.",
        color: "primary",
      },
    ],
  },
  benefits: {
    headline: "Automate Your Way to More Closed Deals",
    subheadline: "Our AI-powered sales automation handles the entire pipeline—from first touch to booked appointment.",
    benefits: [
      {
        icon: "RefreshCw",
        title: "Automated Lead Nurturing",
        description:
          "Multi-touch sequences that adapt based on lead behavior. Email, SMS, and voicemail that feel personal—not robotic.",
      },
      {
        icon: "Bot",
        title: "Consistent Follow-Up, Every Time",
        description:
          "Every lead gets the same high-quality outreach sequence. No more dropped balls, no more guessing if someone followed up.",
      },
      {
        icon: "BarChart3",
        title: "Full Pipeline Visibility",
        description:
          "Real-time dashboards show exactly where every lead sits in your pipeline. Know your numbers, predict your revenue.",
      },
      {
        icon: "Target",
        title: "Intelligent Lead Scoring",
        description:
          "AI analyzes engagement signals and prioritizes your hottest leads. Focus your human effort where it matters most.",
      },
      {
        icon: "Calendar",
        title: "Automated Appointment Booking",
        description:
          "Qualified leads book directly into your calendar. No more back-and-forth scheduling headaches.",
      },
      {
        icon: "Shield",
        title: "24/7 Pipeline Coverage",
        description:
          "Your automated sales pipeline never sleeps. Leads get nurtured nights, weekends, and holidays.",
      },
    ],
  },
  objections: {
    headline: "Automated Sales vs Manual: The Truth",
    subheadline: "Common concerns about sales automation—and why they're wrong.",
    objections: [
      {
        objection: "Automation feels impersonal. My leads want human connection.",
        response:
          "The best automation doesn't replace humans—it amplifies them. Our AI handles initial outreach and qualification, then seamlessly hands off warm leads to your team. Leads get faster responses AND human expertise when it matters. Plus, personalized sequences based on lead data feel more relevant than generic manual outreach.",
      },
      {
        objection: "My sales process is too complex to automate.",
        response:
          "Sales automation isn't about replacing your entire process. It's about automating the repetitive 80% so your team can focus on the high-value 20%. We map your existing workflow and automate the touchpoints that don't require human judgment—initial outreach, follow-up reminders, nurturing sequences, and appointment scheduling.",
      },
      {
        objection: "What if the automation makes mistakes or sends wrong messages?",
        response:
          "Our AI uses sophisticated guardrails and approval workflows. You define the messaging, timing, and conditions. The system follows your rules precisely—and you have full visibility into every interaction. Plus, sentiment detection automatically pauses sequences if a lead responds negatively.",
      },
      {
        objection: "I don't have the technical skills to set this up.",
        response:
          "That's exactly why we handle everything. We integrate with your existing CRM, configure your sequences, and train your team. Most clients are fully operational within 2 weeks. You don't need to touch a line of code or learn a complex system.",
      },
      {
        objection: "How is this different from the CRM automation I already have?",
        response:
          "Most CRM automation is rule-based and static. Our AI adapts in real-time based on lead behavior, optimizes send times, and uses natural language to craft relevant messages. It's the difference between a mail merge and a conversation. Plus, we handle multi-channel orchestration (email, SMS, voicemail) in one unified workflow.",
      },
    ],
  },
  calculator: {
    headline: "Calculate Your Automation ROI",
    subheadline: "See how much revenue you're leaving on the table with manual processes.",
    inputs: {
      leads: {
        label: "New leads per month",
        placeholder: "e.g., 200",
        defaultValue: 200,
      },
      commission: {
        label: "Average deal value ($)",
        placeholder: "e.g., 5000",
        defaultValue: 5000,
      },
    },
    reactivationRate: 0.27,
    conversionRate: 0.12,
    resultLabel: "Potential additional revenue with automation",
  },
  faqs: [
    {
      question: "How long does it take to implement sales automation?",
      answer:
        "Most businesses are fully operational within 2-3 weeks. This includes CRM integration, sequence setup, team training, and testing. We handle the heavy lifting so you can focus on selling.",
    },
    {
      question: "Will sales automation work with my existing CRM?",
      answer:
        "Yes. We integrate with all major CRMs including Salesforce, HubSpot, Zoho, Pipedrive, and industry-specific platforms. If your CRM has an API, we can connect to it.",
    },
    {
      question: "Can I customize the automated messages?",
      answer:
        "Absolutely. You have full control over messaging, timing, and conditions. We help you craft sequences that match your brand voice and sales process. Nothing goes out without your approval.",
    },
    {
      question: "What happens when a lead responds?",
      answer:
        "Our AI handles initial responses and qualification, then alerts your team when a lead is warm and ready for human contact. You can also set up live transfer or instant notification for high-priority leads.",
    },
    {
      question: "How do you prevent leads from feeling 'sold to'?",
      answer:
        "Our sequences are designed to provide value first—market insights, helpful resources, and relevant content. We focus on building relationships, not just pushing for appointments. Leads engage because they're getting something useful.",
    },
    {
      question: "What's the typical ROI for sales automation?",
      answer:
        "Most clients see a 3-5x increase in lead engagement and 30-50% faster sales cycles. In dollar terms, businesses typically recover the cost of automation within the first 60 days through increased conversions.",
    },
  ],
  cta: {
    headline: "Ready to Put Your Sales Pipeline on Autopilot?",
    subheadline:
      "Stop losing leads to manual processes. See how AI-powered sales automation can transform your revenue.",
    buttonText: "Book Your Free Demo",
    buttonHref: "/book-demo",
    footnote: "No commitment required. See the automation in action with your own leads.",
  },
};

// Comparison data for the feature table
export const salesAutomationComparison = {
  headline: "Automated Sales Pipeline vs. Manual Sales Process",
  subheadline: "See why service businesses are switching to AI-powered sales automation.",
  features: [
    {
      feature: "Follow-Up Consistency",
      prestyj: "100% of leads followed up",
      competitor: "27% never contacted",
    },
    {
      feature: "Response Time",
      prestyj: "Instant",
      competitor: "Hours to days",
    },
    {
      feature: "24/7 Lead Nurturing",
      prestyj: true,
      competitor: false,
    },
    {
      feature: "Pipeline Visibility",
      prestyj: "Real-time dashboard",
      competitor: "Spreadsheets & guesswork",
    },
    {
      feature: "Lead Scoring & Prioritization",
      prestyj: "AI-powered",
      competitor: "Manual triage",
    },
    {
      feature: "Multi-Touch Sequences",
      prestyj: "Automated email, SMS, voicemail",
      competitor: "Ad-hoc outreach",
    },
    {
      feature: "Appointment Scheduling",
      prestyj: "Automated booking",
      competitor: "Manual coordination",
    },
    {
      feature: "Lead Tracking",
      prestyj: "Full journey visibility",
      competitor: "Lost in spreadsheets",
    },
    {
      feature: "Scalability",
      prestyj: "Unlimited leads",
      competitor: "Limited by team size",
    },
    {
      feature: "CRM Integration",
      prestyj: "Automatic sync",
      competitor: "Manual data entry",
    },
  ],
};
