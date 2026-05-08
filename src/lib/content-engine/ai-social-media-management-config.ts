import {
  Ban,
  Bot,
  Brain,
  Clock,
  Cog,
  CreditCard,
  Facebook,
  Instagram,
  Linkedin,
  Play,
  RefreshCw,
  Rocket,
  ShieldCheck,
  Target,
  Twitter,
  Youtube,
  Zap,
} from "lucide-react";

import type { ContentEnginePageConfig } from "./page-config";

export const aiSocialMediaManagementConfig: ContentEnginePageConfig = {
  hero: {
    badge: {
      icon: Bot,
      text: "AI Social Media Management \u00B7 Fully Autonomous",
    },
    headline: "AI Social Media Management",
    headlineAccent: "That Actually Runs Itself.",
    subhead:
      "Stop juggling schedulers, freelancers, and content calendars. Prestyj\u2019s AI social media management engine creates, publishes, and optimizes content across 7 platforms \u2014 with zero daily effort from you. From $1,997/mo.",
    subheadAccent:
      "Prestyj\u2019s AI social media management engine creates, publishes, and optimizes content across 7 platforms \u2014 with zero daily effort from you.",
    ctas: [
      {
        label: "See How It Works",
        href: "#how-it-works",
        variant: "default",
        eventName: "AISocialMediaManagementLeadIntent",
        eventLabel: "hero-see-how",
      },
      {
        label: "Book a Demo",
        href: "/book-demo",
        variant: "outline",
        eventName: "AISocialMediaManagementLeadIntent",
        eventLabel: "hero-book-demo",
      },
    ],
    videoSrc: "/videos/dfy-vsl.mp4",
    videoPoster: "/images/content-engine/vsl-poster.jpg",
    videoAriaLabel:
      "AI social media management engine demo \u2014 fully autonomous content across 7 platforms",
    platforms: [
      "Instagram",
      "Facebook",
      "TikTok",
      "YouTube",
      "LinkedIn",
      "Threads",
      "X",
    ],
  },

  problem: {
    headline: "Managing Social Media Shouldn\u2019t Be Your Full-Time Job.",
    subhead:
      "Every AI social media tool promises automation. Most just give you a faster way to do the work yourself.",
    pains: [
      {
        title:
          "Your \u201CAI social media tool\u201D still requires you to write the content.",
        detail:
          "Hootsuite, Buffer, Sprout Social \u2014 they\u2019re schedulers, not managers. You still write captions, design graphics, pick hashtags, and plan content. The \u201CAI\u201D is a text suggestion box you have to babysit.",
      },
      {
        title:
          "You\u2019re spending $3K\u2013$10K/mo on social media \u2014 and getting 30 posts.",
        detail:
          "Between the agency retainer, the Canva subscription, the scheduling tool, and the freelancer who ghosted last week \u2014 you\u2019re paying content-department prices for a trickle of posts that barely move the needle.",
      },
      {
        title:
          "Three different AI tools, and your social media still isn\u2019t automated.",
        detail:
          "One for copywriting. One for images. One for scheduling. You stitched together an \u201CAI workflow\u201D that still takes hours per week and breaks every time a platform changes its API.",
      },
      {
        title:
          "The moment you stop feeding the machine, everything grinds to a halt.",
        detail:
          "Skip a week of content and your reach drops 40%. Miss a few days of engagement and the algorithm buries you. Social media only works with consistency \u2014 but AI social media tools don\u2019t solve the consistency problem, they solve the scheduling problem.",
      },
    ],
  },

  solution: {
    headline: "AI Social Media Management, Fully Autonomous.",
    subhead:
      "Not a scheduler. Not an assistant. An AI management engine that plans, creates, publishes, and optimizes \u2014 without you opening a single app.",
    pillars: [
      {
        icon: Brain,
        title: "AI-Driven Content Strategy",
        description:
          "The engine builds a content calendar, writes captions, designs images, and publishes \u2014 all powered by AI that learns your brand voice and audience. No prompts to write, no templates to fill in.",
      },
      {
        icon: Zap,
        title: "Multi-Platform Autopilot",
        description:
          "Instagram, Facebook, TikTok, YouTube, LinkedIn, Threads, and X \u2014 all managed simultaneously. Different formats per platform, optimal posting times, and platform-native content. Zero manual work.",
      },
      {
        icon: Target,
        title: "Self-Optimizing Performance",
        description:
          "The AI tracks which posts perform best, rotates hooks and formats, doubles down on winning content types, and continuously improves your engagement \u2014 all without your input.",
      },
    ],
  },

  howItWorks: {
    headline: "From Demo to Fully Managed in 24 Hours.",
    subhead: "Three steps. Zero ongoing management.",
    steps: [
      {
        number: "01",
        icon: CreditCard,
        title: "Connect Your Accounts",
        description:
          "Pick your plan, grant account access, and share your brand details. The AI uses this to build your custom content engine.",
        highlight: "Day 0",
      },
      {
        number: "02",
        icon: Cog,
        title: "AI Builds Your Content Engine",
        description:
          "Brand kit, voice profile, prompt stack, platform connections \u2014 all wired up and publishing within 24 hours. No onboarding calls or content briefs needed.",
        highlight: "Live in 24h or setup fee refunded",
      },
      {
        number: "03",
        icon: Rocket,
        title: "It Manages. You Don\u2019t.",
        description:
          "Multiple accounts, 7 platforms, every single day. Content ships while you sleep. Your only touchpoint is a weekly digest email.",
        highlight: "Day 1 onward \u2014 fully autonomous",
      },
      {
        number: "04",
        icon: RefreshCw,
        title: "AI Optimization (Automatic)",
        description:
          "Hooks rotate. Formats evolve. Top-performing content gets amplified. The AI management engine improves itself without strategy calls or your involvement.",
        highlight: "Always optimizing",
      },
    ],
  },

  proofBar: {
    stats: [
      { value: "1,000+", label: "Posts managed per month" },
      { value: "7", label: "Platforms covered" },
      { value: "0", label: "Hours per week of your time" },
      { value: "24h", label: "From signup to first post" },
    ],
  },

  proofScreenshots: {
    headline: "Our AI Manages Our Own Social Media. See for Yourself.",
    subhead:
      "The same engine that manages your accounts manages ours. Nobody on our team opens the apps.",
    shots: [
      {
        src: "/images/content-engine/proof-1.webp",
        fallback: "/images/content-engine/proof-1.png",
        alt: "Prestyj brand Instagram \u2014 AI-managed daily posting",
        caption: "Our brand IG \u2014 managed by AI, posting daily.",
      },
      {
        src: "/images/content-engine/proof-2.webp",
        fallback: "/images/content-engine/proof-2.png",
        alt: "Founder personal LinkedIn powered by the same AI management engine",
        caption: "Founder personal LinkedIn \u2014 same engine, zero touch.",
      },
      {
        src: "/images/content-engine/proof-3.webp",
        fallback: "/images/content-engine/proof-3.png",
        alt: "Multi-platform AI content queue running autonomously",
        caption: "Multi-platform queue \u2014 running itself.",
      },
    ],
  },

  liveAccounts: {
    headline: "See AI Social Media Management",
    headlineAccent: "Running Live",
    subhead:
      "These aren\u2019t mockups. Every account is live, posting daily, managed entirely by AI \u2014 powered by the same engine you\u2019ll get.",
    accounts: [
      {
        platform: "Instagram",
        url: "https://www.instagram.com/prestyj_/",
        icon: Instagram,
        handle: "@prestyj_",
        description: "Daily reels, carousels & behind-the-scenes.",
      },
      {
        platform: "Facebook",
        url: "https://www.facebook.com/profile.php?id=61582824703610",
        icon: Facebook,
        handle: "Prestyj",
        description: "Long-form posts & community updates.",
      },
      {
        platform: "TikTok",
        url: "https://www.tiktok.com/@prestyj_",
        icon: Youtube,
        handle: "@prestyj_",
        description: "Short-form hooks & viral tests.",
      },
      {
        platform: "YouTube",
        url: "https://www.youtube.com/@prestyj_",
        icon: Youtube,
        handle: "@prestyj_",
        description: "Tutorials, breakdowns & case studies.",
      },
      {
        platform: "LinkedIn",
        url: "https://www.linkedin.com/company/prestyj/",
        icon: Linkedin,
        handle: "Prestyj",
        description: "B2B thought leadership & product updates.",
      },
      {
        platform: "Threads",
        url: "https://www.threads.net/@prestyj_",
        icon: Twitter,
        handle: "@prestyj_",
        description: "Conversational posts & engagement.",
      },
      {
        platform: "X",
        url: "https://x.com/prestyj_",
        icon: Twitter,
        handle: "@prestyj_",
        description: "Hot takes, threads & real-time updates.",
      },
    ],
  },

  liveFeed: {
    badgeIcon: Instagram,
    badgeText: "Live Feed",
    headline: "Managed by AI.",
    headlineAccent: "Published Automatically.",
    subhead:
      "Real posts, real engagement. Here\u2019s what the AI management engine published this week across Instagram and TikTok \u2014 with nobody at the wheel.",
    instagramPosts: [
      {
        embedUrl: "https://www.instagram.com/p/DIMpFIhymQC/embed/",
        label: "Instagram Post 1",
      },
      {
        embedUrl: "https://www.instagram.com/p/DII0Tz1yulB/embed/",
        label: "Instagram Post 2",
      },
      {
        embedUrl: "https://www.instagram.com/p/DH_3aVCyLBn/embed/",
        label: "Instagram Post 3",
      },
      {
        embedUrl: "https://www.instagram.com/p/DH0t9EySYgD/embed/",
        label: "Instagram Post 4",
      },
    ],
    instagramHandle: "@prestyj_",
    tiktokPosts: [
      {
        videoId: "7484649258628563240",
        url: "https://www.tiktok.com/@prestyj_/video/7484649258628563240",
        caption: "Prestyj TikTok 1",
      },
      {
        videoId: "7482870044902828832",
        url: "https://www.tiktok.com/@prestyj_/video/7482870044902828832",
        caption: "Prestyj TikTok 2",
      },
    ],
    tiktokHandle: "@prestyj_",
  },

  comparison: {
    headline: "Prestyj vs. Other AI Social Media Management Tools.",
    subhead:
      "Scheduling tools aren\u2019t management. See how the full-stack AI management engine compares.",
    rows: [
      {
        feature: "AI creates all content (copy, images, video)",
        prestyj: true,
        agency: "Sometimes",
        freelancer: false,
        inHouse: false,
      },
      {
        feature: "Autonomous publishing (no approval needed)",
        prestyj: true,
        agency: false,
        freelancer: false,
        inHouse: false,
      },
      {
        feature: "Posts per month",
        prestyj: "270\u20132,700",
        agency: "30\u201360",
        freelancer: "20\u201340",
        inHouse: "60\u2013120",
      },
      {
        feature: "Platforms managed simultaneously",
        prestyj: "Up to 7",
        agency: "2\u20133",
        freelancer: "1\u20132",
        inHouse: "2\u20133",
      },
      {
        feature: "Accounts per plan",
        prestyj: "Up to 3+",
        agency: "1",
        freelancer: "1",
        inHouse: "1\u20132",
      },
      {
        feature: "Self-optimizing content strategy",
        prestyj: true,
        agency: false,
        freelancer: false,
        inHouse: false,
      },
      {
        feature: "Weekend & holiday posting",
        prestyj: true,
        agency: false,
        freelancer: false,
        inHouse: false,
      },
      {
        feature: "Hours per week of your time",
        prestyj: "0",
        agency: "2\u20134",
        freelancer: "3\u20135",
        inHouse: "5\u201310",
      },
      {
        feature: "Monthly cost",
        prestyj: "$2K\u2013$5K",
        agency: "$5K\u2013$15K",
        freelancer: "$2K\u2013$8K",
        inHouse: "$8K\u2013$12K loaded",
      },
      {
        feature: "Hootsuite / Buffer / Sprout Social: they schedule, you create",
        prestyj: "Fully managed",
        agency: "N/A",
        freelancer: "You still create",
        inHouse: "You still create",
      },
    ],
  },

  faq: {
    headline: "Questions About AI Social Media Management.",
    subhead: "If yours isn\u2019t here, ask on the demo call.",
    faqs: [
      {
        question: "How is Prestyj different from Hootsuite, Buffer, or Sprout Social?",
        answer:
          "Those are scheduling tools \u2014 you still have to create every piece of content. Prestyj is an AI management engine that creates AND publishes the content. No writing, no designing, no scheduling. It\u2019s a full content department, not a calendar with an AI chatbot bolted on.",
      },
      {
        question: "Does the AI actually manage everything, or do I still need to supervise?",
        answer:
          "It manages everything autonomously. The AI writes captions, designs images, schedules posts, and publishes them across all your accounts. Most clients never touch the dashboard. If you want approval control, you can enable it \u2014 but the default is full autopilot.",
      },
      {
        question: "What does \u201CAI social media management\u201D actually mean in practice?",
        answer:
          "It means an AI engine plans your content calendar, creates every post (copy, design, and formatting), publishes to the right platform at the right time, tracks performance, and optimizes future content based on what works. Your only involvement is reading a 60-second weekly digest email.",
      },
      {
        question: "What if I don\u2019t like a post the AI published?",
        answer:
          "Remove it with one click from your weekly digest email. You can also tell the engine to avoid specific topics, tones, or content types going forward. The AI learns your preferences over time.",
      },
      {
        question: "Will the content sound like my brand or like a robot?",
        answer:
          "The AI is trained on your brand profile \u2014 your services, tone, audience, colors, and voice. Content reads like your business wrote it. You can update your brand profile anytime and the AI adapts immediately.",
      },
      {
        question: "Can I still post my own content alongside the AI?",
        answer:
          "Yes. Post natively anytime you want. Your organic posts layer on top of the AI\u2019s output. Many clients mix in project photos, personal updates, or time-sensitive content alongside the AI-managed posts.",
      },
      {
        question: "How fast can I get started?",
        answer:
          "24 hours from when you grant account access. The AI engine builds your brand profile, connects your platforms, and starts publishing. If we miss the 24-hour window, your setup fee is refunded.",
      },
      {
        question: "What happens if I want to cancel?",
        answer:
          "Cancel anytime. Month-to-month after setup. No long contracts, no cancellation fees, no retention calls. You keep all the content that was published.",
      },
      {
        question: "Is this the same as using ChatGPT to write social media posts?",
        answer:
          "No. ChatGPT writes text \u2014 you still need to design the images, format for each platform, schedule, and publish. Prestyj handles the entire pipeline from strategy to published post. It\u2019s management, not just generation.",
      },
      {
        question: "Will my accounts get flagged for AI content?",
        answer:
          "No. Volume is distributed across multiple accounts and 7 platforms. Each account posts at algorithm-safe rates with platform-native formats. The engine is designed for sustainable growth, not spam.",
      },
    ],
  },

  cta: {
    headline: "Stop Managing Social Media. Let AI Manage It Instead.",
    subhead:
      "Live in 24 hours. Fully autonomous. Cancel anytime. Your AI social media management engine runs itself from day one.",
    buttonLabel: "Book Your Demo",
    buttonHref: "/book-demo",
    eventName: "AISocialMediaManagementLeadIntent",
    eventLabel: "final-cta",
    footnote:
      "See the AI management engine running live before you commit.",
    sparkColor: "#7058e3",
  },

  pricing: {
    headline: "Pick Your AI Management Level.",
    subhead: "All-inclusive. Zero per-post fees. Zero time required.",
    tiers: [
      {
        id: "minimum",
        name: "Minimum Plan",
        tagline:
          "1 account managed by AI \u2014 more than most agencies ship manually.",
        setupFee: 1500,
        monthlyPrice: 1997,
        accounts: "1 account (brand OR personal)",
        postsTarget: "~270 posts/month",
        guarantee: "250 posts in 30 days or we credit the difference",
        highlights: [
          "1 account (brand OR personal)",
          "3 platforms",
          "~270 posts/month",
          "AI images, carousels, captions",
          "1 brand kit",
          "Weekly digest email",
          "Email support",
        ],
        cta: "Start with Minimum",
      },
      {
        id: "pro",
        name: "Pro Plan",
        tagline:
          "Brand + personal brand on full AI management.",
        setupFee: 2500,
        monthlyPrice: 2997,
        accounts: "2 accounts (brand + personal)",
        postsTarget: "~900 posts/month",
        guarantee: "750 posts in 30 days or we credit the difference",
        highlights: [
          "2 accounts (brand + personal)",
          "5 platforms each",
          "~900 posts/month",
          "AI images, carousels, short-form video",
          "Self-optimizing content engine",
          "Monthly performance report",
          "Direct Slack access",
        ],
        cta: "Get Pro \u2014 Most Popular",
        isPro: true,
      },
      {
        id: "max",
        name: "Max Plan",
        tagline:
          "3 accounts. Full AI management across every platform.",
        setupFee: 4500,
        monthlyPrice: 4997,
        accounts: "3 accounts (brand + personal + niche)",
        postsTarget: "~2,700 posts/month",
        guarantee: "2,250 posts in 30 days or we credit the difference",
        highlights: [
          "3 accounts (brand + personal + niche)",
          "All 7 platforms",
          "~2,700 posts/month",
          "Multi-brand kits",
          "Bi-weekly performance reviews",
          "Custom reporting dashboard",
          "Dedicated strategist",
        ],
        cta: "Get Max",
      },
    ],
    customCta: {
      headline:
        "Running 4+ accounts? Agency reselling? Multi-brand operator?",
      description:
        "We\u2019ll build something custom \u2014 your account count, your platforms, all managed by AI.",
      buttonLabel: "Talk to Us",
      href: "/book-demo",
      eventName: "AISocialMediaManagementLeadIntent",
      eventLabel: "pricing-custom",
    },
    addons: [
      {
        title: "AI Creator / Branded Persona",
        description:
          "We build and run a faceless or AI-persona account on top of your plan \u2014 another account on AI management.",
      },
      {
        title: "Engagement Layer",
        description:
          "DMs, comments, replies handled by AI. Full management extends beyond posting.",
      },
      {
        title: "Ad-Ready Repurposing",
        description:
          "Every post pre-cut and hook-tested for paid ads. AI-managed organic feeds your paid funnel.",
      },
    ],
    guarantees: [
      {
        icon: Clock,
        title: "Live in 24 hours",
        description:
          "From the moment you grant account access, or your setup fee is refunded.",
      },
      {
        icon: ShieldCheck,
        title: "Volume guarantee",
        description:
          "We hit your post count in 30 days, or we credit the shortfall to next month.",
      },
      {
        icon: Ban,
        title: "Cancel anytime",
        description:
          "Month-to-month after setup. No long contracts.",
      },
    ],
  },

  videoWalkthrough: {
    badgeIcon: Play,
    badgeText: "Watch the AI Management Engine",
    headline: "See AI Social Media Management in Action",
    subhead:
      "Walk through the AI management engine end-to-end \u2014 from setup to published posts across every platform, with no human involvement.",
    embedUrl: "https://www.loom.com/embed/PLACEHOLDER",
    iframeTitle:
      "AI social media management engine walkthrough \u2014 see fully autonomous content running live",
  },
};
