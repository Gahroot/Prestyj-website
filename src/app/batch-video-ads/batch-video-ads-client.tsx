"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Check,
  Clock,
  Film,
  Zap,
  Target,
  TrendingDown,
  Eye,
  Sparkles,
  Flame,
  Rocket,
  Star,
  Loader2,
  VolumeX,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BlurText from "@/components/ui/blur-text";
import ShinyText from "@/components/ui/shiny-text";
import CountUp from "@/components/ui/count-up";
import ClickSpark from "@/components/ui/click-spark";
import BorderGlow from "@/components/ui/border-glow";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { VideoCarousel } from "@/components/sections/video-carousel";
import { BatchAudienceSelector } from "@/components/sections/batch-video-ads/audience-selector";
import {
  HiddenCostTable,
  type HiddenCostRow,
} from "@/components/sections/batch-video-ads/hidden-cost-table";
import { AndromedaPOV } from "@/components/sections/batch-video-ads/andromeda-pov";
import { ExitIntentPopup } from "@/components/effects/exit-intent-popup";
import { cn } from "@/lib/utils";
import { BATCH_TIERS, type BatchTierId } from "@/lib/batch-tiers";

const GMB_REVIEWS_URL = "https://share.google/NDBtHySNKzPF0mTvG";
const VSL_VIMEO_ID = "1185604057";

const SAMPLE_VIDEOS = [
  "1182069557",
  "1182069871",
  "1173092805",
  "1173092688",
  "1173092572",
  "1171065337",
];

const TESTIMONIALS = [
  {
    quote:
      "300 Facebook video ads in less than 12 hours — nailed the scripts, edits, and hooks on every single one.",
    full: "I had an incredible experience working with Nolan. In less than 12 hours, he produced 300 Facebook video ads — and somehow managed to absolutely nail the scripts, edits, and hooks on every single one. If you're looking for someone who can deliver high-volume creative production without sacrificing quality, Nolan is the real deal.",
    author: "Randy Narciso",
    source: "Google Review",
    href: GMB_REVIEWS_URL,
  },
  {
    quote:
      "Saved me a ton of time making 300 versions of content for my Meta ads. Delivery was fast and straightforward.",
    full: "The service Nolan provided helped me save a ton of time making 300 versions of content for my meta ads. His delivery was fast and straight forward!",
    author: "Max Sherrod",
    source: "Google Review · Local Guide",
    href: GMB_REVIEWS_URL,
  },
  {
    quote: "If I could give them more than 5 stars I would.",
    full: "100% happy and will definitely be using their services in the future. If I could give them more than 5 stars I would.",
    author: "Verified client",
    source: "Client testimonial",
    href: null,
  },
];

type UITier = {
  id: BatchTierId;
  name: string;
  price: string;
  adCount: number;
  painPoints: number;
  tagline: string;
  highlights: string[];
  icon: React.ReactNode;
  popular?: boolean;
  sample?: boolean;
};

const TIERS: UITier[] = [
  {
    id: BATCH_TIERS.starter.id,
    name: BATCH_TIERS.starter.name,
    price: BATCH_TIERS.starter.priceLabel,
    adCount: BATCH_TIERS.starter.adCount,
    painPoints: BATCH_TIERS.starter.painPoints,
    tagline: BATCH_TIERS.starter.tagline,
    highlights: BATCH_TIERS.starter.highlights,
    icon: <Sparkles className="h-5 w-5" />,
    sample: true,
  },
  {
    id: "minimum",
    name: "Minimum",
    price: "$1,497",
    adCount: 300,
    painPoints: 3,
    tagline: "Test your first angles",
    icon: <Zap className="h-5 w-5" />,
    highlights: [
      "300 unique vertical video ads",
      "3 customer problems covered",
      "Multiple hooks, scripts & CTAs per problem",
      "1–2 business days",
      "Error revisions included",
    ],
  },
  {
    id: "pro",
    name: "Pro",
    price: "$2,497",
    adCount: 500,
    painPoints: 5,
    popular: true,
    tagline: "The sweet spot",
    icon: <Flame className="h-5 w-5" />,
    highlights: [
      "500 unique vertical video ads",
      "5 customer problems covered",
      "Multiple hooks, scripts & CTAs per problem",
      "1–2 business days",
      "Error revisions included",
      "Priority queue",
    ],
  },
  {
    id: "max",
    name: "Max",
    price: "$3,997",
    adCount: 1000,
    painPoints: 10,
    tagline: "Go wide, find winners fast",
    icon: <Rocket className="h-5 w-5" />,
    highlights: [
      "1000 unique vertical video ads",
      "10 customer problems covered",
      "Multiple hooks, scripts & CTAs per problem",
      "1–2 business days",
      "Error revisions included",
      "Priority queue",
      "Every angle covered",
    ],
  },
];

const HIDDEN_COST_ROWS: HiddenCostRow[] = [
  {
    feature: "Cost per ad variation (300+ batch)",
    prestyj: "$4–$5",
    agency: "$200–$2,000",
    ugc: "$75–$300",
    inHouse: "$60–$120",
  },
  {
    feature: "Cost per pain-point angle tested",
    prestyj: "$400–$500",
    agency: "$5K–$15K",
    ugc: "$1K–$3K",
    inHouse: "$2K–$4K loaded",
  },
  {
    feature: "Monthly all-in cost",
    prestyj: "$1,497–$3,997 per pack",
    agency: "$5K–$25K retainer",
    ugc: "$3K–$8K + product",
    inHouse: "$6K–$10K salary + benefits",
  },
  {
    feature: "Turnaround: footage → 300 ads",
    prestyj: "1–2 business days",
    agency: "4–8 weeks",
    ugc: "3–6 weeks",
    inHouse: "6–12 weeks",
  },
  {
    feature: "Customer problems covered in parallel",
    prestyj: "3–10",
    agency: "1–2",
    ugc: "1",
    inHouse: "1–2",
  },
  {
    feature: "Scripts written for you",
    prestyj: true,
    agency: false,
    ugc: false,
    inHouse: false,
  },
  {
    feature: "Hook A/B variation matrix",
    prestyj: true,
    agency: "upsell",
    ugc: false,
    inHouse: "manual",
  },
  {
    feature: "Looks like content, not an ad",
    prestyj: true,
    agency: false,
    ugc: true,
    inHouse: "sometimes",
  },
  {
    feature: "Calls in sick / quits / ghosts",
    prestyj: false,
    agency: true,
    ugc: true,
    inHouse: true,
  },
  {
    feature: "Built for modern ad platform volume",
    prestyj: true,
    agency: false,
    ugc: false,
    inHouse: false,
  },
  {
    feature: "Contract length",
    prestyj: "One-time pack, no renewal",
    agency: "3–12 mo retainer",
    ugc: "Per-creator deals",
    inHouse: "W2 / 6-mo ramp",
  },
];

const FAQS = [
  {
    q: "What do I actually have to do?",
    a: "Fill out the form, then wait for us to send you your scripts. When they arrive, prop up your phone, hit record, and read the whole script in one take — about 15–20 minutes. Selfie style, at home or in your car, wherever. You don't write anything, you don't plan anything, you don't have to know what a good hook looks like. You just read what we send. Send us back the one raw video file and we handle the rest.",
  },
  {
    q: "What's NOT included? Be specific.",
    a: "No media buying. No ad account management. No campaign setup inside Meta/TikTok/YouTube. No landing page builds. No copywriting outside the ad scripts. No paid actors or studio crew. No long-form / VSL editing. No analytics dashboards. You get the finished vertical ad files (9:16, captioned, ready to upload) and that's it — your media buyer or agency runs them. If you want media buying, we'll refer you.",
  },
  {
    q: "How does pricing actually work? Any hidden fees?",
    a: "Four pack sizes, one-time payment per pack: $497 (100 ads / 1 customer problem), $1,497 (300 ads / 3 customer problems), $2,497 (500 ads / 5 customer problems), $3,997 (1,000 ads / 10 customer problems). That's the entire invoice. No platform fees, no usage fees, no per-edit fees, no rush fees. Pay once per pack, get the files, done.",
  },
  {
    q: "How is this different from hiring a UGC creator?",
    a: "A UGC creator films themselves saying your script — usually 3–6 ads for $500–$1,500 each, 2–4 weeks later. We use YOUR face (or your founder's), write every script for you, and deliver 300–1,000 ads in 1–2 business days. UGC is a person. We're a creative system. UGC is great if you want a few polished pieces. We're built for the volume modern ad platforms now require.",
  },
  {
    q: "How is this different from a creative agency?",
    a: "Agencies bill $5K–$25K/month and ship 4–10 ads in that window. Math: $500–$2,000 per ad. We charge $4–$5 per ad and ship in 1–2 business days. The agency model was built for a world where one polished hero ad ran for 6 months. Today most ads burn out in 5–14 days. The economics broke. We're what replaced it.",
  },
  {
    q: "What if I mess up mid-recording?",
    a: "Don't stop. Just take a breath, say the line number again, and re-read it. We edit around the fumbles — that's part of the system. The whole point is that you don't have to be perfect, you just have to get through the script in one take.",
  },
  {
    q: "How fast is delivery, really?",
    a: "1–2 business days from when we receive your footage. Send footage Sunday and it's treated as a Monday start, delivered by end of day Tuesday. We're fast because the whole system is built for volume, not boutique hand-crafting.",
  },
  {
    q: "Why not just pay for polished production ads?",
    a: "Because nobody watches them. People can spot a produced ad in half a second and scroll past. A casual selfie video looks like another person on the feed — they stop, they listen, they hear your hook and your pitch. Same message, but the format earns the attention. You're still paying to be there and still targeting your audience, you just don't look like an advertiser.",
  },
  {
    q: "Why do I need this many variations?",
    a: "Hook testing alone needs 50+ variations to find what actually works. At 1 ad a day (what most teams manage) that's two months before you even know what hook lands. And if nobody gets past the hook, nobody ever hears your solution to their problems — no matter how good your offer is. Running every angle in parallel means you find what works in days, not months.",
  },
  {
    q: "Do you revise ads if I don't like them?",
    a: "Errors, yes — if something's wrong, we fix it. But this isn't a taste-based revision service. It's creative testing. You're buying volume and velocity to find what your market responds to. If you want boutique hand-crafted ads with guarantees, this isn't the right fit. If you want to stop guessing what works, it is.",
  },
  {
    q: "What results should I expect?",
    a: "Data. You'll get hundreds of angles running so you can see — not guess — which customer problems convert, which hooks hold attention, and which CTAs close. We don't promise CTRs, appointments, or ROAS. Those depend on your offer, audience, and spend. We promise you'll stop flying blind.",
  },
  {
    q: "What if I don't know what problems to focus on yet?",
    a: "The form walks you through it step by step. If you have a business, you already know what your customers complain about — we just help you structure it.",
  },
];

export function BatchVideoAdsClient() {
  const [loadingTier, setLoadingTier] = useState<BatchTierId | null>(null);
  const [checkoutError, setCheckoutError] = useState<string | null>(null);
  const [isMuted, setIsMuted] = useState(true);
  const [showVideoOverlay, setShowVideoOverlay] = useState(true);

  const handleUnmute = () => {
    setIsMuted(false);
    setShowVideoOverlay(false);
  };

  const startCheckout = async (tier: BatchTierId) => {
    setCheckoutError(null);
    setLoadingTier(tier);
    try {
      const res = await fetch("/api/checkout", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ tier }),
      });
      if (!res.ok) {
        throw new Error(`Checkout failed (${res.status})`);
      }
      const data = (await res.json()) as { url?: string };
      if (!data.url) throw new Error("Missing checkout URL");
      window.location.href = data.url;
    } catch (error) {
      console.error(error);
      setCheckoutError("We couldn't start checkout. Please try again in a moment.");
      setLoadingTier(null);
    }
  };

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative overflow-hidden pt-16">
        <div className="relative z-10 mx-auto max-w-6xl px-4 pt-4 pb-10 text-center sm:px-6 md:pt-6 md:pb-12 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="border-primary/50 text-primary mb-3">
              <ShinyText
                text="Sample the system — 100 ads for $497"
                speed={3}
                color="#b0b0b0"
                shineColor="#7058e3"
              />
            </Badge>
          </motion.div>

          <h1 className="font-heading text-foreground mb-4 text-2xl font-bold sm:text-3xl md:text-4xl lg:text-5xl">
            <BlurText
              text="100 video ads. $497."
              delay={60}
              animateBy="words"
              className="justify-center"
            />
            <BlurText
              text="Delivered in 24 hours."
              delay={60}
              animateBy="words"
              className="text-primary justify-center"
            />
          </h1>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="relative mx-auto mb-5 aspect-video w-full max-w-2xl overflow-hidden rounded-lg shadow-2xl"
          >
            <iframe
              src={`https://player.vimeo.com/video/${VSL_VIMEO_ID}?autoplay=1&muted=${isMuted ? "1" : "0"}&loop=0&background=0`}
              className="absolute inset-0 h-full w-full"
              frameBorder="0"
              allow="autoplay; fullscreen"
              allowFullScreen
              title="Batch video ads — how it works"
            />

            {showVideoOverlay && (
              <div
                onClick={handleUnmute}
                className="absolute inset-0 z-10 flex cursor-pointer items-center justify-center bg-black/40 backdrop-blur-[2px] transition-all hover:bg-black/30"
              >
                <div className="flex flex-col items-center gap-2 rounded-2xl border border-white/20 bg-white/10 p-4 shadow-2xl backdrop-blur-md md:p-6">
                  <div className="bg-primary/20 flex h-12 w-12 items-center justify-center rounded-full">
                    <VolumeX className="text-primary h-6 w-6" />
                  </div>
                  <p className="text-foreground font-heading text-base font-semibold">
                    Your Video Is Playing
                  </p>
                  <p className="text-muted-foreground text-sm">Click To Unmute</p>
                </div>
              </div>
            )}
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-muted-foreground mx-auto mb-3 max-w-3xl text-sm sm:text-base"
          >
            One recording session. We script, edit, and ship 100 vertical ads built to test on Meta,
            TikTok, and YouTube Shorts. For anyone running paid video ads.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col items-center justify-center gap-4 sm:flex-row"
          >
            <ClickSpark sparkColor="#7058e3" sparkCount={12} sparkRadius={28}>
              <Button size="lg" className="px-8 text-lg font-bold" asChild>
                <a href="#pricing">
                  Get 100 ads for $497
                  <Rocket className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </ClickSpark>
            <ClickSpark sparkColor="#5ee5b3" sparkCount={10} sparkRadius={25}>
              <Button size="lg" variant="outline" className="px-8 text-lg font-bold" asChild>
                <a href="#pricing">
                  See the 500-pack
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </ClickSpark>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="text-muted-foreground mt-10 flex flex-col items-center justify-center gap-8 sm:flex-row"
          >
            <div className="flex items-center gap-2">
              <CountUp to={300} duration={1.5} className="text-primary text-2xl font-bold" />
              <span className="text-primary text-2xl font-bold">+</span>
              <span className="text-sm">ads per batch</span>
            </div>
            <div className="bg-border hidden h-8 w-px sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-success text-2xl font-bold">1–2</span>
              <span className="text-sm">business days</span>
            </div>
            <div className="bg-border hidden h-8 w-px sm:block" />
            <div className="flex items-center gap-2">
              <span className="text-warning text-2xl font-bold">1</span>
              <span className="text-sm">recording session</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* TRUST STRIP */}
      <section className="border-border/50 bg-muted/10 border-y py-6">
        <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-3 px-4 text-sm sm:flex-row sm:gap-6">
          <div className="flex items-center gap-2">
            <div className="flex gap-0.5">
              {Array.from({ length: 5 }).map((_, i) => (
                <Star key={i} className="fill-success text-success h-4 w-4" />
              ))}
            </div>
            <span className="text-foreground font-semibold">Rated 5★ on Google</span>
          </div>
          <span className="text-muted-foreground hidden sm:inline">·</span>
          <a
            href={GMB_REVIEWS_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary inline-flex items-center gap-1 hover:underline"
          >
            Read reviews on Google
            <ArrowRight className="h-3.5 w-3.5" />
          </a>
        </div>
      </section>

      {/* AUDIENCE SELECTOR */}
      <BatchAudienceSelector />

      {/* HOW IT WORKS — simple explainer */}
      <section id="how" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll className="mb-16 text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-5xl">
              How This Works
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              You don&apos;t think about what to record. You don&apos;t write scripts. You show up
              and read what we send. Four steps.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-4">
            {[
              {
                step: "01",
                title: "Tell us about your business",
                body: "Fill out the form on this page. Business name, audience, customer problems, offer. Takes a few minutes.",
                icon: <Target className="h-7 w-7" />,
              },
              {
                step: "02",
                title: "We write your scripts",
                body: "We send you back a full script — every hook, body, and CTA already written. You don't write a single word.",
                icon: <Sparkles className="h-7 w-7" />,
              },
              {
                step: "03",
                title: "One-take recording",
                body: "Prop up your phone, read the script start to finish. ~15–20 minutes. One video file. That's it.",
                icon: <Film className="h-7 w-7" />,
              },
              {
                step: "04",
                title: "Hundreds of ads, 1–2 days later",
                body: "Send us the raw footage. We turn it into your full pack of ads — ready to launch and test every angle in parallel.",
                icon: <Rocket className="h-7 w-7" />,
              },
            ].map((item, i) => (
              <AnimateOnScroll key={item.step} delay={i * 0.1}>
                <BorderGlow borderRadius={18} innerClassName="p-8 h-full">
                  <div className="mb-4 flex items-center justify-between">
                    <span className="text-primary font-mono text-xs">{item.step}</span>
                    <div className="bg-primary/10 text-primary inline-flex h-12 w-12 items-center justify-center rounded-full">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="font-heading text-foreground mb-3 text-xl font-bold">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </BorderGlow>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="mt-12 text-center">
            <ClickSpark sparkColor="#7058e3" sparkCount={10} sparkRadius={25}>
              <Button size="lg" className="px-8 text-lg font-bold" asChild>
                <Link href="/book-demo">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </ClickSpark>
          </AnimateOnScroll>
        </div>
      </section>

      {/* THE MATH OF TRADITIONAL TESTING */}
      <section className="bg-muted/20 px-4 py-24">
        <div className="mx-auto max-w-5xl">
          <AnimateOnScroll className="mb-12 text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-5xl">
              The Math of Finding Ads That Convert
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
              Most businesses never find ads that convert — because the traditional way takes longer
              than the business can survive.
            </p>
          </AnimateOnScroll>

          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-2">
            <AnimateOnScroll>
              <BorderGlow borderRadius={18} innerClassName="p-8 h-full">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-destructive/10 text-destructive flex h-10 w-10 items-center justify-center rounded-full">
                    <Clock className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-foreground text-xl font-bold">
                    The traditional way
                  </h3>
                </div>
                <ul className="text-muted-foreground space-y-4">
                  <li className="flex items-start gap-3">
                    <TrendingDown className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>
                      Hook testing alone needs{" "}
                      <span className="text-foreground font-semibold">50+ variations</span> to find
                      what works.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingDown className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>
                      At 1 ad per day (what most teams manage), 50 hooks ={" "}
                      <span className="text-foreground font-semibold">2 months</span>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingDown className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>
                      A full 300-ad test set?{" "}
                      <span className="text-foreground font-semibold">~6 months</span> of daily
                      posting.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingDown className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>
                      And nobody hears the problems you solve, let alone your offer, if they scroll
                      past the hook.
                    </span>
                  </li>
                </ul>
              </BorderGlow>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <BorderGlow borderRadius={18} innerClassName="p-8 h-full">
                <div className="mb-4 flex items-center gap-3">
                  <div className="bg-success/10 text-success flex h-10 w-10 items-center justify-center rounded-full">
                    <Zap className="h-5 w-5" />
                  </div>
                  <h3 className="font-heading text-foreground text-xl font-bold">
                    Batch testing with us
                  </h3>
                </div>
                <ul className="text-muted-foreground space-y-4">
                  <li className="flex items-start gap-3">
                    <Check className="text-success mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>
                      Every hook, every customer problem, every angle tested{" "}
                      <span className="text-foreground font-semibold">in one go</span>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-success mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>
                      One 15–20 minute recording session →{" "}
                      <span className="text-foreground font-semibold">months of creative</span>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-success mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>
                      Find hooks that hold attention in{" "}
                      <span className="text-foreground font-semibold">days, not months</span>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-success mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>
                      Know exactly which customer problems convert — because you actually tested
                      them.
                    </span>
                  </li>
                </ul>
              </BorderGlow>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll className="text-center">
            <ClickSpark sparkColor="#7058e3" sparkCount={10} sparkRadius={25}>
              <Button size="lg" className="px-8 text-lg font-bold" asChild>
                <Link href="/book-demo">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </ClickSpark>
          </AnimateOnScroll>
        </div>
      </section>

      {/* ANDROMEDA / CREATIVE-AS-TARGETING POV */}
      <AndromedaPOV />

      {/* TESTIMONIALS */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll className="mb-12 text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-5xl">
              People Who&apos;ve Actually Done This
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Not stock quotes. Real clients who sent us their footage and got their batch back.
            </p>
          </AnimateOnScroll>

          <div className="mb-10 grid grid-cols-1 gap-6 md:grid-cols-3">
            {TESTIMONIALS.map((t, i) => (
              <AnimateOnScroll key={t.author} delay={i * 0.1}>
                <BorderGlow borderRadius={14} innerClassName="p-6 h-full flex flex-col">
                  <div className="mb-4 flex gap-1">
                    {Array.from({ length: 5 }).map((_, j) => (
                      <Star key={j} className="fill-success text-success h-5 w-5" />
                    ))}
                  </div>
                  <p className="text-foreground font-heading mb-3 text-lg font-semibold">
                    &ldquo;{t.quote}&rdquo;
                  </p>
                  <p className="text-muted-foreground mb-4 flex-1 text-sm">{t.full}</p>
                  <div className="border-border/50 border-t pt-4">
                    <p className="text-foreground text-sm font-semibold">{t.author}</p>
                    {t.href ? (
                      <a
                        href={t.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-primary text-xs hover:underline"
                      >
                        {t.source} →
                      </a>
                    ) : (
                      <p className="text-muted-foreground text-xs">{t.source}</p>
                    )}
                  </div>
                </BorderGlow>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="text-center">
            <a
              href={GMB_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary inline-flex items-center gap-1 text-sm hover:underline"
            >
              Read all reviews on Google
              <ArrowRight className="h-4 w-4" />
            </a>
          </AnimateOnScroll>
        </div>
      </section>

      {/* HIDDEN COST TABLE — us vs agency vs UGC vs in-house */}
      <div id="hidden-cost">
        <HiddenCostTable rows={HIDDEN_COST_ROWS} />
      </div>

      {/* NATIVE vs PRODUCTION */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll className="mb-16 text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-5xl">
              Why These Outperform Polished Production Ads
            </h2>
            <p className="text-muted-foreground mx-auto max-w-3xl text-lg">
              People can spot a produced ad in half a second. Once they do, they scroll. The whole
              game is earning the attention <em>before</em> they know it&apos;s an ad.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
            <AnimateOnScroll>
              <BorderGlow borderRadius={18} innerClassName="p-8 h-full">
                <Badge variant="outline" className="border-destructive/40 text-destructive mb-4">
                  Polished production ads
                </Badge>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-3">
                    <Eye className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Look like ads → scrolled past in under a second</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Eye className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Expensive crew, studio, edit passes — weeks per spot</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Eye className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>One or two angles tested, at most</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Eye className="text-destructive mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Audience never hears your hook, let alone your pitch</span>
                  </li>
                </ul>
              </BorderGlow>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <BorderGlow borderRadius={18} innerClassName="p-8 h-full">
                <Badge variant="outline" className="border-success/40 text-success mb-4">
                  Batch UGC-style ads
                </Badge>
                <ul className="text-muted-foreground space-y-3">
                  <li className="flex items-start gap-3">
                    <Check className="text-success mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>
                      Look like another creator on the feed — viewers stop and actually listen
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-success mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>15–20 min of casual selfie footage. No crew. No studio.</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-success mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Hundreds of angles tested in parallel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="text-success mt-0.5 h-5 w-5 flex-shrink-0" />
                    <span>Same message, same offer — but the format earns the attention</span>
                  </li>
                </ul>
              </BorderGlow>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={0.2}>
            <p className="text-muted-foreground mx-auto mt-10 max-w-3xl text-center">
              You&apos;re still paying to be there. You&apos;re still targeting your audience. You
              just don&apos;t <em>look</em> like an advertiser — so the message actually lands.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll className="mt-12 text-center">
            <ClickSpark sparkColor="#7058e3" sparkCount={10} sparkRadius={25}>
              <Button size="lg" className="px-8 text-lg font-bold" asChild>
                <Link href="/book-demo">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </ClickSpark>
          </AnimateOnScroll>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="bg-muted/20 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll className="mb-16 text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-5xl">
              What You Actually Get
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: <Target className="h-6 w-6" />,
                title: "Every angle in one shot",
                body: "Test every hook, body, and customer problem at the same time instead of guessing which to try first.",
              },
              {
                icon: <Zap className="h-6 w-6" />,
                title: "Winning hooks in days",
                body: "Stop waiting six months to find out what works. Your data comes back fast because you're running everything at once.",
              },
              {
                icon: <Film className="h-6 w-6" />,
                title: "Show up and read",
                body: "We send the scripts. You prop up your phone and read. One 15–20 minute session, one video file, zero thinking about what to say.",
              },
              {
                icon: <Eye className="h-6 w-6" />,
                title: "Looks like content, not ads",
                body: "Casual selfie footage earns attention the way polished production never will.",
              },
              {
                icon: <Sparkles className="h-6 w-6" />,
                title: "Customer problems that convert",
                body: "Find out which problems your audience actually cares about — without burning months on the wrong one.",
              },
              {
                icon: <Clock className="h-6 w-6" />,
                title: "1–2 business days",
                body: "Footage in, hundreds of finished ads out. No production bottleneck, no editing delays.",
              },
            ].map((benefit, i) => (
              <AnimateOnScroll key={benefit.title} delay={i * 0.05}>
                <BorderGlow borderRadius={18} innerClassName="p-6 h-full">
                  <div className="bg-primary/10 text-primary mb-4 inline-flex h-12 w-12 items-center justify-center rounded-full">
                    {benefit.icon}
                  </div>
                  <h3 className="font-heading text-foreground mb-2 text-lg font-bold">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">{benefit.body}</p>
                </BorderGlow>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="mt-12 text-center">
            <ClickSpark sparkColor="#7058e3" sparkCount={10} sparkRadius={25}>
              <Button size="lg" className="px-8 text-lg font-bold" asChild>
                <Link href="/book-demo">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </ClickSpark>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SAMPLES */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll className="mb-12 text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-5xl">
              See What You&apos;ll Actually Get
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Real ads from real batches. Each one built from a single 15–20 minute recording.
            </p>
          </AnimateOnScroll>

          <div className="px-4 md:px-16">
            <VideoCarousel videos={SAMPLE_VIDEOS} />
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll className="mb-16 text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-5xl">
              Pick Your Batch
            </h2>
            <p className="text-muted-foreground mx-auto max-w-2xl text-lg">
              Pick how many customer problems you want to test. The more angles you run, the faster
              you find what wins.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 md:grid-cols-4">
            {TIERS.map((tier, index) => (
              <AnimateOnScroll key={tier.id} delay={index * 0.1}>
                <BorderGlow
                  borderRadius={18}
                  innerClassName="p-8 pt-10 flex flex-col h-full relative"
                  className={cn(
                    "h-full",
                    tier.popular && "shadow-primary/20 shadow-xl md:scale-105",
                    tier.sample && "border-border/60",
                  )}
                >
                  {tier.popular && (
                    <span className="bg-primary text-primary-foreground absolute top-3 left-1/2 -translate-x-1/2 rounded-full px-3 py-1 text-xs font-bold tracking-wide whitespace-nowrap uppercase">
                      Most Popular
                    </span>
                  )}
                  {tier.sample && (
                    <span className="bg-muted text-muted-foreground border-border absolute top-3 left-1/2 -translate-x-1/2 rounded-full border px-2.5 py-0.5 text-[10px] font-semibold tracking-wide whitespace-nowrap uppercase">
                      Sample
                    </span>
                  )}

                  <div className="mb-2 flex items-center gap-2">
                    <div className="bg-primary/10 text-primary inline-flex h-8 w-8 items-center justify-center rounded-full">
                      {tier.icon}
                    </div>
                    <h3 className="font-heading text-foreground text-2xl font-bold">{tier.name}</h3>
                  </div>
                  <p className="text-muted-foreground mb-6 text-sm">{tier.tagline}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-foreground text-4xl font-bold">{tier.price}</span>
                      <span className="text-muted-foreground text-sm">one-time</span>
                    </div>
                    <p className="text-primary mt-2 text-sm font-semibold">
                      {tier.adCount} ads · {tier.painPoints} customer problems
                    </p>
                  </div>

                  <ul className="mb-8 flex-1 space-y-3">
                    {tier.highlights.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="text-success mt-0.5 h-5 w-5 flex-shrink-0" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <ClickSpark sparkColor="#7058e3" sparkCount={10} sparkRadius={25}>
                    <Button
                      size="lg"
                      variant={tier.popular ? "default" : "outline"}
                      className="w-full font-bold"
                      disabled={loadingTier !== null}
                      onClick={() => startCheckout(tier.id)}
                    >
                      {loadingTier === tier.id ? (
                        <>
                          <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                          Redirecting…
                        </>
                      ) : (
                        <>
                          Start {tier.name}
                          <ArrowRight className="ml-2 h-4 w-4" />
                        </>
                      )}
                    </Button>
                  </ClickSpark>
                </BorderGlow>
              </AnimateOnScroll>
            ))}
          </div>

          {checkoutError && (
            <p className="text-destructive mx-auto mt-6 max-w-xl text-center text-sm">
              {checkoutError}
            </p>
          )}

          <p className="text-muted-foreground mx-auto mt-10 max-w-2xl text-center text-xs">
            Secure checkout via Stripe. Batch Video Ads is an add-on to your AI marketing agent
            plan. Delivery in 1–2 business days from the moment we receive your footage. Revisions
            for errors only — this is ad creative testing, not boutique edit work.
          </p>
        </div>
      </section>

      {/* WHY NOT JUST START WITH 500 */}
      <section className="bg-muted/20 px-4 py-24">
        <div className="mx-auto max-w-6xl">
          <AnimateOnScroll className="mb-12 text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-5xl">
              Why not just start with 500?
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 items-stretch gap-8 md:grid-cols-2">
            <AnimateOnScroll>
              <BorderGlow borderRadius={18} innerClassName="p-6 md:p-8 h-full">
                <div className="overflow-x-auto">
                  <table className="w-full text-left text-sm">
                    <thead>
                      <tr className="border-border/60 border-b">
                        <th className="text-muted-foreground pr-4 pb-3 font-semibold">Tier</th>
                        <th className="text-muted-foreground pr-4 pb-3 font-semibold">Price</th>
                        <th className="text-muted-foreground pb-3 font-semibold">Cost per ad</th>
                      </tr>
                    </thead>
                    <tbody className="divide-border/40 divide-y">
                      <tr>
                        <td className="text-foreground py-3 pr-4">100 ads</td>
                        <td className="text-foreground py-3 pr-4 font-semibold">$497</td>
                        <td className="text-muted-foreground py-3">$4.97</td>
                      </tr>
                      <tr>
                        <td className="text-foreground py-3 pr-4">300 ads</td>
                        <td className="text-foreground py-3 pr-4 font-semibold">$1,497</td>
                        <td className="text-muted-foreground py-3">$4.99</td>
                      </tr>
                      <tr className="bg-primary/5">
                        <td className="text-foreground py-3 pr-4 font-semibold">
                          500 ads
                          <span className="bg-primary/15 text-primary ml-2 rounded-full px-2 py-0.5 text-[10px] font-bold tracking-wide uppercase">
                            Sweet spot
                          </span>
                        </td>
                        <td className="text-foreground py-3 pr-4 font-semibold">$2,497</td>
                        <td className="text-muted-foreground py-3">$4.99</td>
                      </tr>
                      <tr>
                        <td className="text-foreground py-3 pr-4">1,000 ads</td>
                        <td className="text-foreground py-3 pr-4 font-semibold">$3,997</td>
                        <td className="text-success py-3 font-semibold">$4.00</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </BorderGlow>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <BorderGlow
                borderRadius={18}
                innerClassName="p-6 md:p-8 h-full flex flex-col justify-center"
              >
                <h3 className="font-heading text-foreground mb-4 text-2xl font-bold md:text-3xl">
                  $497 is the cheapest way to see if our scripts work for your offer.
                </h3>
                <p className="text-muted-foreground mb-6 text-base leading-relaxed md:text-lg">
                  If they do, you&apos;ll want more angles fast. 500 is where most buyers end up —
                  same delivery time, more variations, lower cost per ad.
                </p>
                <div>
                  <a
                    href="#pricing"
                    className="text-primary inline-flex items-center gap-1 text-sm font-semibold hover:underline"
                  >
                    Jump to the 500-pack
                    <ArrowRight className="h-4 w-4" />
                  </a>
                </div>
              </BorderGlow>
            </AnimateOnScroll>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-24">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll className="mb-12 text-center">
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-5xl">
              Questions
            </h2>
          </AnimateOnScroll>

          <div className="space-y-4">
            {FAQS.map((item, index) => (
              <AnimateOnScroll key={item.q} delay={index * 0.05}>
                <details className="group bg-card border-border rounded-xl border">
                  <summary className="font-heading text-foreground flex cursor-pointer items-center justify-between gap-4 p-6 font-semibold">
                    <span>{item.q}</span>
                    <span className="text-primary transition group-open:rotate-180">▼</span>
                  </summary>
                  <div className="text-muted-foreground px-6 pb-6 leading-relaxed">{item.a}</div>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="bg-primary/5 px-4 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-5xl">
              Stop Guessing What Works
            </h2>
            <p className="text-muted-foreground mb-8 text-lg md:text-xl">
              One recording session. Hundreds of angles. Your winners found in days, not months.
            </p>
            <ClickSpark sparkColor="#7058e3" sparkCount={12} sparkRadius={28}>
              <Button
                size="lg"
                className="shadow-primary/25 rounded-lg px-12 py-7 text-lg font-bold shadow-lg"
                asChild
              >
                <Link href="/book-demo">
                  Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
            </ClickSpark>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SCROLL/EXIT-INTENT LEAD MAGNET */}
      <ExitIntentPopup />
    </main>
  );
}
