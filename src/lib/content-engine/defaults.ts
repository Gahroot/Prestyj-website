import {
  Ban,
  Clock,
  Cog,
  CreditCard,
  Facebook,
  Instagram,
  Linkedin,
  Play,
  RefreshCw,
  Rocket,
  Share2,
  ShieldCheck,
  Sparkles,
  Target,
  Twitter,
  Users,
  Youtube,
} from "lucide-react";

import type { ContentEnginePageConfig } from "./page-config";

export const defaultContentEngineConfig: ContentEnginePageConfig = {
  hero: {
    badge: {
      icon: Sparkles,
      text: "Done-For-You Social Media \u00B7 Live in 24 Hours",
    },
    headline: "270\u20132,700 Posts/Month. 7 Platforms.",
    headlineAccent: "Live in 24 Hours.",
    subhead:
      "From $0.74 per post \u2014 vs $166/post at the average agency. Your brand, your personal page, your niche accounts. All on autopilot. From $1,997/mo.",
    subheadAccent: "All on autopilot.",
    ctas: [
      {
        label: "See 50 Posts Shipped in 24h",
        href: "#pricing",
        variant: "default",
        eventName: "ContentEngineLeadIntent",
        eventLabel: "hero-see-plans",
      },
      {
        label: "Compare Real Costs",
        href: "#hidden-cost",
        variant: "outline",
        eventName: "ContentEngineLeadIntent",
        eventLabel: "hero-hidden-cost",
      },
    ],
    videoSrc: "/videos/dfy-vsl.mp4",
    videoPoster: "/images/content-engine/vsl-poster.jpg",
    videoAriaLabel: "Done-for-you social media swarm demo video",
    platforms: ["Instagram", "Facebook", "TikTok", "YouTube", "LinkedIn", "Threads", "X"],
  },

  problem: {
    headline: "Posting Once a Day Won\u2019t Cut It in 2026.",
    subhead: "The math doesn\u2019t work with humans.",
    pains: [
      {
        title: "Your agency ships 30 posts/month for $5K.",
        detail: "$166 per post. You renew anyway.",
      },
      {
        title: "Your in-house hire burns out in 6 months.",
        detail: "$55K/year, gone the second something better appears.",
      },
      {
        title: "You\u2019re posting from your phone at 11pm.",
        detail: "Twice a week. Reach is flat.",
      },
      {
        title: "One account isn\u2019t enough anymore.",
        detail:
          "Your buyers live across 7 platforms and 3 personas. You\u2019re showing up on one.",
      },
    ],
  },

  solution: {
    headline: "The Content Is the Targeting.",
    subhead:
      "Every audience sees content built for them \u2014 because we run every account that matters.",
    pillars: [
      {
        icon: Users,
        title: "Multi-Account Swarm",
        description:
          "Your brand. Your personal page. Your niche accounts. Up to 3+ accounts, each on autopilot, each targeting a different buyer.",
      },
      {
        icon: Share2,
        title: "Native Across 7 Platforms",
        description:
          "IG, FB, TikTok, YouTube, LinkedIn, Threads, X. Formatted right for each. No square images on vertical platforms.",
      },
      {
        icon: Target,
        title: "Ad-Ready by Default",
        description:
          "Every post is hook-tested and ready to run as a paid ad. The same content that grows your organic powers your funnel.",
      },
    ],
  },

  howItWorks: {
    headline: "From Payment to Posting in 24 Hours.",
    subhead: "One link. The AI handles the rest.",
    steps: [
      {
        number: "01",
        icon: CreditCard,
        title: "Pay & Connect",
        description: "Pick a plan. Grant account access. We start the clock.",
        highlight: "Day 0",
      },
      {
        number: "02",
        icon: Cog,
        title: "AI Builds Your Engine",
        description:
          "Brand kit, voice, prompt stack, platform connections \u2014 wired up and live in 24 hours.",
        highlight: "Live in 24h or setup fee refunded",
      },
      {
        number: "03",
        icon: Rocket,
        title: "Posts Start Shipping",
        description: "Multiple accounts, 7 platforms, every single day. Algorithm-safe volume.",
        highlight: "Day 1 onward",
      },
      {
        number: "04",
        icon: RefreshCw,
        title: "Monthly Refresh + Reporting",
        description: "Hooks rotate. Avatars evolve. You see what\u2019s working.",
        highlight: "Always optimizing",
      },
    ],
  },

  proofBar: {
    stats: [
      { value: "24h", label: "Live from payment to first post" },
      { value: "3", label: "Accounts running in parallel" },
      { value: "7", label: "Platforms covered" },
      { value: "2,700+", label: "Posts shipped per month" },
    ],
  },

  proofScreenshots: {
    headline: "We Run This for Ourselves.",
    subhead: "Same swarm, shipping every day for Prestyj.",
    shots: [
      {
        src: "/images/content-engine/proof-1.webp",
        fallback: "/images/content-engine/proof-1.png",
        alt: "Prestyj brand Instagram \u2014 posting daily",
        caption: "Our brand IG \u2014 posting daily.",
      },
      {
        src: "/images/content-engine/proof-2.webp",
        fallback: "/images/content-engine/proof-2.png",
        alt: "Founder personal LinkedIn powered by the same content engine",
        caption: "Founder personal LinkedIn \u2014 same engine.",
      },
      {
        src: "/images/content-engine/proof-3.webp",
        fallback: "/images/content-engine/proof-3.png",
        alt: "Multi-platform content queue with 30+ posts per day",
        caption: "Multi-platform queue \u2014 30+ posts/day.",
      },
    ],
  },

  liveAccounts: {
    headline: "See Us Posting",
    headlineAccent: "Right Now",
    subhead:
      "These aren\u2019t mockups. Every account is live, posting daily, powered by the same engine you\u2019ll get.",
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
        icon: Youtube, // TikTok not in lucide; Youtube as generic video stand-in
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
        icon: Twitter, // Threads not in lucide; Twitter as text-first stand-in
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
    headline: "Fresh Off the",
    headlineAccent: "Content Engine",
    subhead:
      "Real posts, real engagement. Here\u2019s what the engine published this week across Instagram and TikTok.",
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
    headline: "Prestyj vs. Every Other Way to Post.",
    subhead: "Same job. Different math.",
    rows: [
      {
        feature: "Accounts managed",
        prestyj: "Up to 3+",
        agency: "1",
        freelancer: "1",
        inHouse: "1\u20132",
      },
      {
        feature: "Platforms covered",
        prestyj: "Up to 7",
        agency: "2\u20133",
        freelancer: "1\u20132",
        inHouse: "2\u20133",
      },
      {
        feature: "Brand + personal brand",
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
        feature: "Posts on weekends/holidays",
        prestyj: true,
        agency: false,
        freelancer: false,
        inHouse: false,
      },
      {
        feature: "Calls in sick",
        prestyj: true,
        agency: false,
        freelancer: false,
        inHouse: false,
      },
      {
        feature: "Live in 24 hours",
        prestyj: true,
        agency: false,
        freelancer: "sometimes",
        inHouse: false,
      },
      {
        feature: "Monthly cost (all-in)",
        prestyj: "$1,997\u2013$4,997",
        agency: "$5K\u2013$15K",
        freelancer: "$2K\u2013$8K",
        inHouse: "$8K\u2013$12K loaded",
      },
      {
        feature: "Effective cost per post",
        prestyj: "$0.74\u2013$7.40",
        agency: "$83\u2013$500",
        freelancer: "$50\u2013$400",
        inHouse: "$66\u2013$200",
      },
      {
        feature: "Setup time",
        prestyj: "24 hours",
        agency: "4\u20136 weeks",
        freelancer: "1\u20133 weeks",
        inHouse: "6\u201312 weeks to hire + ramp",
      },
      {
        feature: "Cancel anytime",
        prestyj: true,
        agency: false,
        freelancer: "sometimes",
        inHouse: false,
      },
    ],
  },

  faq: {
    headline: "Questions Founders Ask Before Buying.",
    subhead: "If yours isn\u2019t here, ask on the demo call.",
    faqs: [
      {
        question: "What does this actually cost vs an agency?",
        answer:
          "$1,997\u2013$4,997/month, all-in. The average social agency charges $5K\u2013$15K/month for 30\u201360 posts. That\u2019s $166\u2013$500 per post. We\u2019re $0.74\u2013$7.40 per post depending on tier. The cost math isn\u2019t close \u2014 and yes, that includes the AI image generation, multi-platform publishing, and the strategist.",
      },
      {
        question: "What\u2019s NOT included? Be specific.",
        answer:
          "No paid media buying or ad spend management. No influencer outreach. No community moderation outside the optional Engagement Layer add-on. No video shoots with talent on payroll \u2014 we use AI avatars, repurposed clips, and your existing assets. No SEO writing or long-form blog. No website work. If your buyer journey needs any of those, we\u2019ll tell you and refer out.",
      },
      {
        question: "How does this compare to Ocoya / Predis.ai / Buffer + a VA?",
        answer:
          "Tools schedule. You still have to make the content. We make the content AND post it natively to all 7 platforms with formatting baked in. A VA + Buffer setup runs ~$2K\u2013$4K/month for a fraction of the volume \u2014 and you manage the VA. We\u2019re a department; they\u2019re a stack you have to operate.",
      },
      {
        question: "How fast do you actually get this live?",
        answer:
          "24 hours from when you grant account access. If we miss it, your setup fee is refunded \u2014 in writing. Most clients see their first 30\u201350 posts shipped before the 24-hour mark.",
      },
      {
        question: 'What\u2019s an "account"?',
        answer:
          "A brand or persona on social. Your business page is one account. Your personal LinkedIn is another. Niche pages count too.",
      },
      {
        question: "Do you actually post for me, or do I have to?",
        answer: "We post. Native publishing across all 7 platforms. You don\u2019t open the apps.",
      },
      {
        question: "Won\u2019t this many posts get me shadowbanned?",
        answer:
          "No. Volume is split across multiple accounts and 7 platforms. Each account posts at algorithm-safe rates. That\u2019s the whole point of running a swarm.",
      },
      {
        question: "Is this AI slop?",
        answer:
          "No. Brand voice locked in week one. Avatar rotation, hook variation, platform-native formatting. Look at our feeds.",
      },
      {
        question: "Do I have to approve every post?",
        answer: "Optional. Most clients let it run. You get a weekly digest of what shipped.",
      },
      {
        question: "How is this different from Buffer/Hootsuite/Later?",
        answer: "Those schedule. We make the content AND post it. Tool vs. department.",
      },
      {
        question: "Can I cancel?",
        answer: "Yes. Month-to-month after setup. No long contracts.",
      },
      {
        question: "What if I run an agency / multiple brands?",
        answer:
          "That\u2019s the Custom plan. We\u2019ve built for agencies running 5+ brands. Talk to us.",
      },
      {
        question: "Does this work for my industry?",
        answer:
          "If your buyer is on social, yes. We\u2019ve built for B2B, e-com, coaches, services, and agencies.",
      },
    ],
  },

  cta: {
    headline: "See 50 Posts Shipped In Your First 24 Hours.",
    subhead: "Live in 24h or setup fee refunded. Cancel anytime. Talk to us before you renew with your agency.",
    buttonLabel: "Book a Demo",
    buttonHref: "/book-demo",
    eventName: "ContentEngineLeadIntent",
    eventLabel: "final-cta",
    footnote: "See it running live on our own accounts before you commit.",
    sparkColor: "#7058e3",
  },

  pricing: {
    headline: "Pricing That Embarrasses Your Agency.",
    subhead: "All-inclusive. No per-post fees. No surprise invoices.",
    tiers: [
      {
        id: "minimum",
        name: "Minimum Plan",
        tagline: "Get one account posting daily.",
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
          "Quarterly creative refresh",
          "Email support",
        ],
        cta: "Start with Minimum",
      },
      {
        id: "pro",
        name: "Pro Plan",
        tagline: "Brand + personal brand. The full swarm.",
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
          "Avatar rotation + hook A/B testing",
          "Monthly creative refresh + strategy call",
          "Direct Slack access",
        ],
        cta: "Get Pro \u2014 Most Popular",
        isPro: true,
      },
      {
        id: "max",
        name: "Max Plan",
        tagline: "3 accounts. Full omnichannel coverage.",
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
          "Bi-weekly strategy calls",
          "Custom reporting dashboard",
          "Dedicated strategist",
        ],
        cta: "Get Max",
      },
    ],
    customCta: {
      headline: "Running 4+ accounts? Agency reselling? Multi-brand operator?",
      description:
        "We\u2019ll build something custom \u2014 your account count, your platforms, your stack.",
      buttonLabel: "Book a Demo",
      href: "/book-demo",
      eventName: "ContentEngineLeadIntent",
      eventLabel: "pricing-custom",
    },
    addons: [
      {
        title: "AI Creator / Branded Persona",
        description: "We build and run a faceless or AI-persona account on top of your plan.",
      },
      {
        title: "Engagement Layer",
        description: "DMs, comments, replies handled by us.",
      },
      {
        title: "Ad-Ready Repurposing",
        description: "Every post pre-cut and hook-tested for paid ads.",
      },
    ],
    guarantees: [
      {
        icon: Clock,
        title: "Live in 24 hours",
        description: "From the moment you grant account access, or your setup fee is refunded.",
      },
      {
        icon: ShieldCheck,
        title: "Volume guarantee",
        description: "We hit your post count in 30 days, or we credit the shortfall to next month.",
      },
      {
        icon: Ban,
        title: "Cancel anytime",
        description: "Month-to-month after setup. No long contracts.",
      },
    ],
  },

  videoWalkthrough: {
    badgeIcon: Play,
    badgeText: "Watch the Engine Run",
    headline: "See It in Action",
    subhead:
      "Walk through the content engine end-to-end \u2014 from brief to published post across every platform.",
    embedUrl: "https://www.loom.com/embed/PLACEHOLDER",
    iframeTitle: "Content engine walkthrough \u2014 see the engine running live",
  },
};
