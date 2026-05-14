import {
  Ban,
  BarChart3,
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
  Target,
  Twitter,
  Users,
  Volume2,
  Youtube,
} from "lucide-react";

import type { ContentEnginePageConfig } from "./page-config";

export const volumeContentEngineConfig: ContentEnginePageConfig = {
  hero: {
    badge: {
      icon: Volume2,
      text: "1,000+ Posts Per Month \u00B7 Done-For-You",
    },
    headline: "1,000+ Posts Per Month.",
    headlineAccent: "On Autopilot.",
    subhead:
      "Most businesses manage 30 posts/month. We ship 1,000+ across your brand, personal, and niche accounts \u2014 7 platforms, live in 24 hours. From $1,997/mo.",
    subheadAccent: "1,000+ across your brand",
    ctas: [
      {
        label: "See Plans",
        href: "#pricing",
        variant: "default",
        eventName: "1000PostsLeadIntent",
        eventLabel: "hero-see-plans",
      },
      {
        label: "Book a Demo",
        href: "/book-demo",
        variant: "outline",
        eventName: "1000PostsLeadIntent",
        eventLabel: "hero-book-demo",
      },
    ],
    videoSrc: "/videos/dfy-vsl.mp4",
    videoPoster: "/images/content-engine/vsl-poster.jpg",
    videoAriaLabel: "1,000 posts per month content engine demo video",
    platforms: ["Instagram", "Facebook", "TikTok", "YouTube", "LinkedIn", "Threads", "X"],
  },

  problem: {
    headline: "You\u2019re Not Even Close to Enough Posts.",
    subhead: "The posting frequency math is brutal \u2014 and humans can\u2019t keep up.",
    pains: [
      {
        title: "30 posts/month \u00D7 1 account = invisible.",
        detail:
          "Instagram\u2019s algorithm rewards volume. One post a day on a single account gets you 3% reach. You need 10\u00D7 that.",
      },
      {
        title: "7 platforms \u00D7 3 accounts = 630 posts/month minimum.",
        detail:
          "That\u2019s 21 posts every single day. No human or small team can sustain that for more than a week.",
      },
      {
        title: "You\u2019re paying $5K/month for 30 posts from an agency.",
        detail:
          "$166 per post. 1% of the volume you actually need. You\u2019re subsidizing their account managers, not your reach.",
      },
      {
        title: "Weekends, holidays, sick days \u2014 your feed goes dark.",
        detail:
          "Algorithms don\u2019t take days off. Every gap in posting is a gap in reach that takes weeks to rebuild.",
      },
    ],
  },

  solution: {
    headline: "Volume Is the Strategy.",
    subhead:
      "1,000+ posts/month isn\u2019t about spam \u2014 it\u2019s about showing up everywhere your buyer scrolls.",
    pillars: [
      {
        icon: BarChart3,
        title: "Algorithm-Safe Volume",
        description:
          "Posts split across multiple accounts and 7 platforms. Each account posts at safe rates. The swarm does the heavy lifting.",
      },
      {
        icon: Users,
        title: "Multi-Account Swarm",
        description:
          "Your brand, personal page, and niche accounts \u2014 each targeting a different buyer persona, each posting daily.",
      },
      {
        icon: Target,
        title: "Every Post Is Ad-Ready",
        description:
          "Hook-tested, platform-native content. What grows your organic also feeds your paid funnel.",
      },
    ],
  },

  howItWorks: {
    headline: "From Payment to 1,000 Posts/Month in 24 Hours.",
    subhead: "Volume that scales on day one.",
    steps: [
      {
        number: "01",
        icon: CreditCard,
        title: "Pay & Connect",
        description:
          "Pick your plan. Grant account access. The volume engine starts building immediately.",
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
        title: "Posts Start Shipping at Scale",
        description:
          "Multiple accounts, 7 platforms, every single day. 30\u201390+ posts per day from day one.",
        highlight: "Day 1 onward",
      },
      {
        number: "04",
        icon: RefreshCw,
        title: "Monthly Refresh + Reporting",
        description:
          "Hooks rotate. Avatars evolve. Volume stays consistent while content stays fresh.",
        highlight: "Always optimizing",
      },
    ],
  },

  proofBar: {
    stats: [
      { value: "1,000+", label: "Posts shipped per month" },
      { value: "24h", label: "Live from payment to first post" },
      { value: "7", label: "Platforms covered" },
      { value: "3+", label: "Accounts running in parallel" },
    ],
  },

  proofScreenshots: {
    headline: "1,000+ Posts/Month \u2014 Running Right Now.",
    subhead: "The same engine shipping for Prestyj, every single day.",
    shots: [
      {
        src: "/images/content-engine/proof-1.webp",
        fallback: "/images/content-engine/proof-1.png",
        alt: "Prestyj brand Instagram \u2014 posting daily at volume",
        caption: "Our brand IG \u2014 posting daily at volume.",
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
    headlineAccent: "at Volume",
    subhead:
      "These aren\u2019t mockups. Every account is live, posting daily at scale, powered by the same engine you\u2019ll get.",
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
    headline: "Fresh Off the",
    headlineAccent: "Volume Engine",
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
    headline: "How Do You Get to 1,000 Posts/Month?",
    subhead: "Only one path hits the number.",
    rows: [
      {
        feature: "Posts per month",
        prestyj: "270\u20132,700",
        agency: "30\u201360",
        freelancer: "20\u201340",
        inHouse: "60\u2013120",
      },
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
        feature: "Posts on weekends/holidays",
        prestyj: true,
        agency: false,
        freelancer: false,
        inHouse: false,
      },
      {
        feature: "Brand + personal brand",
        prestyj: true,
        agency: false,
        freelancer: false,
        inHouse: false,
      },
      {
        feature: "Volume guarantee",
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
        feature: "Monthly cost",
        prestyj: "$2K\u2013$5K",
        agency: "$5K\u2013$15K",
        freelancer: "$2K\u2013$8K",
        inHouse: "$8K\u2013$12K loaded",
      },
    ],
  },

  faq: {
    headline: "How Many Posts Is Enough? And Other Volume Questions.",
    subhead: "The answers founders need before signing up.",
    faqs: [
      {
        question: "How many posts per month do I actually need?",
        answer:
          "For a single account on one platform, 90\u2013120 posts/month (3\u20134/day) is the floor for meaningful reach. Add more accounts and platforms and you\u2019re at 500\u20131,000+ easily. Most businesses are nowhere close.",
      },
      {
        question: "Is 1,000 posts/month going to get me shadowbanned?",
        answer:
          "No. Volume is split across multiple accounts and 7 platforms. Each account posts at algorithm-safe rates (3\u20136 posts/day). That\u2019s the whole point of a content swarm \u2014 scale without triggering spam filters.",
      },
      {
        question: "What does posting frequency actually do for reach?",
        answer:
          "Every platform\u2019s algorithm rewards consistent, high-volume posting. More posts = more chances to hit the Explore page, get shared, and show up in feeds. Volume compounds over time.",
      },
      {
        question: "How are 1,000+ posts/month even possible?",
        answer:
          "AI generates brand-aligned content at scale \u2014 images, carousels, captions, hooks \u2014 and publishes natively across 7 platforms. The engine runs 24/7. No sick days, no creative blocks.",
      },
      {
        question: "What\u2019s the breakdown across accounts and platforms?",
        answer:
          "Example: 3 accounts \u00D7 7 platforms \u00D7 ~13 posts/day = ~2,700 posts/month. The Pro plan (2 accounts, 5 platforms) ships ~900. Even the Minimum (1 account, 3 platforms) hits ~270.",
      },
      {
        question: "Won\u2019t that much content all look the same?",
        answer:
          "No. Avatar rotation, hook A/B testing, and platform-native formatting ensure variety. Each post is built for its platform \u2014 square carousels on IG, vertical shorts on TikTok, text-first on X.",
      },
      {
        question: "Do I have to approve every post?",
        answer:
          "Optional. Most clients let it run on autopilot. You get a weekly digest of what shipped across all accounts and platforms.",
      },
      {
        question: "How fast can you get to 1,000 posts/month?",
        answer:
          "24 hours from when you grant account access. If we miss that window, your setup fee is refunded. Volume starts on day one.",
      },
      {
        question: "What if I need more than 1,000 posts?",
        answer:
          "The Max plan ships ~2,700 posts/month. For even higher volume or multi-brand setups, we build a custom plan. Talk to us.",
      },
      {
        question: "How is this different from a scheduling tool?",
        answer:
          "Buffer, Hootsuite, and Later schedule content you already have. We create AND publish the content. It\u2019s not a tool \u2014 it\u2019s a content department that never sleeps.",
      },
    ],
  },

  cta: {
    headline: "Ready to Hit 1,000+ Posts Per Month?",
    subhead:
      "Live in 24 hours. Volume guaranteed. Cancel anytime. See the engine running before you commit.",
    buttonLabel: "Book a Demo",
    buttonHref: "/book-demo",
    eventName: "1000PostsLeadIntent",
    eventLabel: "final-cta",
    footnote: "See 1,000+ posts/month running live before you commit.",
    sparkColor: "#7058e3",
  },

  pricing: {
    headline: "Pick Your Volume.",
    subhead: "All-inclusive. No per-post fees. Volume guaranteed.",
    tiers: [
      {
        id: "minimum",
        name: "Minimum Plan",
        tagline: "270 posts/month \u2014 more than most agencies ship in a quarter.",
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
        tagline: "900 posts/month \u2014 the volume sweet spot.",
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
        tagline: "2,700 posts/month \u2014 full omnichannel volume.",
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
      headline: "Need 5,000+ posts/month? Running an agency or multi-brand operation?",
      description:
        "We\u2019ll build something custom \u2014 your account count, your platforms, your volume target.",
      buttonLabel: "Book a Demo",
      href: "/book-demo",
      eventName: "1000PostsLeadIntent",
      eventLabel: "pricing-custom",
    },
    addons: [
      {
        title: "AI Creator / Branded Persona",
        description:
          "We build and run a faceless or AI-persona account on top of your plan \u2014 more accounts, more volume.",
      },
      {
        title: "Engagement Layer",
        description: "DMs, comments, replies handled by us. Volume meets interaction.",
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
    badgeText: "Watch the Volume Engine",
    headline: "See 1,000+ Posts/Month in Action",
    subhead:
      "Walk through the content engine end-to-end \u2014 from brief to published post across every platform.",
    embedUrl: "https://www.loom.com/embed/PLACEHOLDER",
    iframeTitle:
      "1,000 posts per month content engine walkthrough \u2014 see the engine running live",
  },
};
