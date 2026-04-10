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
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import BlurText from "@/components/ui/blur-text";
import ShinyText from "@/components/ui/shiny-text";
import CountUp from "@/components/ui/count-up";
import ClickSpark from "@/components/ui/click-spark";
import BorderGlow from "@/components/ui/border-glow";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { GetAdsLeadForm } from "@/components/get-ads/lead-form";
import { cn } from "@/lib/utils";

type TierId = "minimum" | "pro" | "max";

type BatchTier = {
  id: TierId;
  name: string;
  price: string;
  adCount: number;
  painPoints: number;
  tagline: string;
  highlights: string[];
  icon: React.ReactNode;
  popular?: boolean;
};

const TIERS: BatchTier[] = [
  {
    id: "minimum",
    name: "Minimum",
    price: "$1,497",
    adCount: 300,
    painPoints: 3,
    tagline: "Test your first angles",
    icon: <Zap className="w-5 h-5" />,
    highlights: [
      "300 unique ad scripts",
      "3 pain points tested",
      "Hook, body & CTA variations",
      "24-hour turnaround*",
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
    icon: <Flame className="w-5 h-5" />,
    highlights: [
      "500 unique ad scripts",
      "5 pain points tested",
      "Hook, body & CTA variations",
      "24-hour turnaround*",
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
    icon: <Rocket className="w-5 h-5" />,
    highlights: [
      "1000 unique ad scripts",
      "10 pain points tested",
      "Hook, body & CTA variations",
      "24-hour turnaround*",
      "Error revisions included",
      "Priority queue",
      "Full-spectrum angle coverage",
    ],
  },
];

const FAQS = [
  {
    q: "What do I actually have to do?",
    a: "Fill out the form, then wait for us to send you your scripts. When they arrive, prop up your phone, hit record, and read the whole script in one take — about 15–20 minutes. Selfie style, at home or in your car, wherever. You don't write anything, you don't plan anything, you don't have to know what a good hook looks like. You just read what we send. Send us back the one raw video file and we handle the rest.",
  },
  {
    q: "What if I mess up mid-recording?",
    a: "Don't stop. Just take a breath, say the line number again, and re-read it. We edit around the fumbles — that's part of the system. The whole point is that you don't have to be perfect, you just have to get through the script in one take.",
  },
  {
    q: "How fast is 24 hours really?",
    a: "24 hours from when we receive your footage. Weekends count as Monday — so if you send footage Sunday, it's considered delivered Monday and due by end of day Tuesday. We're fast because the whole system is built for volume, not boutique hand-crafting.",
  },
  {
    q: "Why not just pay for polished production ads?",
    a: "Because nobody watches them. People can spot a produced ad in half a second and scroll past. A casual selfie video looks like another person on the feed — they stop, they listen, they hear your hook and your pitch. Same message, but the format earns the attention. You're still paying to be there and still targeting your audience, you just don't look like an advertiser.",
  },
  {
    q: "Why do I need this many variations?",
    a: "Hook testing alone needs 50+ variations to find what actually works. At 1 ad a day (what most teams manage) that's two months before you even know what hook lands. And if nobody gets past the hook, nobody ever hears your solution to their pain points — no matter how good your offer is. Batch testing runs every angle in parallel so you find your winners in the first week of spend instead of the sixth month.",
  },
  {
    q: "Do you revise ads if I don't like them?",
    a: "Errors, yes — if something's wrong, we fix it. But this isn't a taste-based revision service. It's creative testing. You're buying volume and velocity to find what your market responds to. If you want boutique hand-crafted ads with guarantees, this isn't the right fit. If you want to stop guessing what works, it is.",
  },
  {
    q: "What results should I expect?",
    a: "Data. You'll get hundreds of angles running so you can see — not guess — which pain points convert, which hooks hold attention, and which CTAs close. We don't promise CTRs, appointments, or ROAS. Those depend on your offer, audience, and spend. We promise you'll stop flying blind.",
  },
  {
    q: "What if I don't know all my pain points yet?",
    a: "The form walks you through it step by step. If you have a business, you already know what your customers complain about — we just help you structure it.",
  },
];

export function BatchVideoAdsClient() {
  const [selectedPainPoints, setSelectedPainPoints] = useState<number | undefined>(undefined);
  const [selectedAdCount, setSelectedAdCount] = useState<number>(500);

  const scrollToForm = (adCount: number, painPoints: number) => {
    setSelectedAdCount(adCount);
    setSelectedPainPoints(painPoints);
    setTimeout(() => {
      document.getElementById("lead-form")?.scrollIntoView({ behavior: "smooth" });
    }, 50);
  };

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="relative min-h-[85vh] flex items-center justify-center pt-16 overflow-hidden">
        <div className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
              <ShinyText
                text="BATCH VIDEO ADS"
                speed={3}
                color="#b0b0b0"
                shineColor="#7058e3"
              />
            </Badge>
          </motion.div>

          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold text-foreground mb-6">
            <BlurText
              text="Your Ad Creative Testing,"
              delay={60}
              animateBy="words"
              className="justify-center"
            />
            <BlurText
              text="Running in 24 Hours*"
              delay={60}
              animateBy="words"
              className="justify-center text-primary"
            />
          </h1>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="text-lg sm:text-xl text-muted-foreground max-w-3xl mx-auto mb-4"
          >
            We write your scripts. You read them in one take — 15–20 minutes,
            selfie style. We turn that one recording into{" "}
            <span className="text-foreground font-semibold">
              hundreds of ads that look like content, not ads
            </span>{" "}
            — so people actually watch past the hook.
          </motion.p>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="text-xs text-muted-foreground/70 max-w-2xl mx-auto mb-8"
          >
            *24 hours from when we receive your footage. Footage received Sunday counts as Monday — delivered by end of day Tuesday.
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <ClickSpark sparkColor="#7058e3" sparkCount={12} sparkRadius={28}>
              <Button size="lg" className="text-lg px-8 font-bold" asChild>
                <a href="#pricing">
                  See Pricing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </ClickSpark>
            <ClickSpark sparkColor="#5ee5b3" sparkCount={10} sparkRadius={25}>
              <Button
                size="lg"
                variant="outline"
                className="text-lg px-8 font-bold"
                asChild
              >
                <a href="#lead-form">
                  Start My Batch
                  <Rocket className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </ClickSpark>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            className="mt-16 flex flex-col sm:flex-row items-center justify-center gap-8 text-muted-foreground"
          >
            <div className="flex items-center gap-2">
              <CountUp to={300} duration={1.5} className="text-2xl font-bold text-primary" />
              <span className="text-2xl font-bold text-primary">+</span>
              <span className="text-sm">ads per batch</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="flex items-center gap-2">
              <CountUp to={24} duration={1.5} className="text-2xl font-bold text-success" />
              <span className="text-2xl font-bold text-success">hr</span>
              <span className="text-sm">turnaround*</span>
            </div>
            <div className="hidden sm:block w-px h-8 bg-border" />
            <div className="flex items-center gap-2">
              <span className="text-2xl font-bold text-warning">1</span>
              <span className="text-sm">recording session</span>
            </div>
          </motion.div>
        </div>
      </section>

      {/* HOW IT WORKS — simple explainer */}
      <section id="how" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              How This Works
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              You don&apos;t think about what to record. You don&apos;t write scripts.
              You show up and read what we send. Four steps.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                step: "01",
                title: "Tell us about your business",
                body: "Fill out the form on this page. Business name, audience, pain points, offer. Takes a few minutes.",
                icon: <Target className="w-7 h-7" />,
              },
              {
                step: "02",
                title: "We write your scripts",
                body: "We send you back a full script — every hook, body, and CTA already written. You don't write a single word.",
                icon: <Sparkles className="w-7 h-7" />,
              },
              {
                step: "03",
                title: "One-take recording",
                body: "Prop up your phone, read the script start to finish. ~15–20 minutes. One video file. That's it.",
                icon: <Film className="w-7 h-7" />,
              },
              {
                step: "04",
                title: "Hundreds of ads, 24 hours later",
                body: "Send us the raw footage. We turn it into your full batch of ads — ready to launch and test every angle in parallel.",
                icon: <Rocket className="w-7 h-7" />,
              },
            ].map((item, i) => (
              <AnimateOnScroll key={item.step} delay={i * 0.1}>
                <BorderGlow borderRadius={18} innerClassName="p-8 h-full">
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-primary">{item.step}</span>
                    <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary">
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-xl font-heading font-bold text-foreground mb-3">
                    {item.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">{item.body}</p>
                </BorderGlow>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="mt-12 text-center">
            <ClickSpark sparkColor="#7058e3" sparkCount={10} sparkRadius={25}>
              <Button size="lg" className="text-lg px-8 font-bold" asChild>
                <a href="#pricing">
                  Pick My Batch
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </ClickSpark>
          </AnimateOnScroll>
        </div>
      </section>

      {/* THE MATH OF TRADITIONAL TESTING */}
      <section className="py-24 px-4 bg-muted/20">
        <div className="max-w-5xl mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              The Math of Finding a Winning Ad
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              Most businesses never find their winning ad — because the traditional
              way takes longer than the business can survive.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
            <AnimateOnScroll>
              <BorderGlow borderRadius={18} innerClassName="p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 text-destructive flex items-center justify-center">
                    <Clock className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground">
                    The traditional way
                  </h3>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <TrendingDown className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>
                      Hook testing alone needs{" "}
                      <span className="text-foreground font-semibold">50+ variations</span> to
                      find what works.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingDown className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>
                      At 1 ad per day (what most teams manage), 50 hooks ={" "}
                      <span className="text-foreground font-semibold">2 months</span>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingDown className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>
                      A full 300-ad test set?{" "}
                      <span className="text-foreground font-semibold">~6 months</span> of daily
                      posting.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <TrendingDown className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>
                      And nobody hears your pain points or offer if they scroll past the hook.
                    </span>
                  </li>
                </ul>
              </BorderGlow>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <BorderGlow borderRadius={18} innerClassName="p-8 h-full">
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-full bg-success/10 text-success flex items-center justify-center">
                    <Zap className="w-5 h-5" />
                  </div>
                  <h3 className="font-heading font-bold text-xl text-foreground">
                    Batch testing with us
                  </h3>
                </div>
                <ul className="space-y-4 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>
                      Every hook, every pain point, every angle tested{" "}
                      <span className="text-foreground font-semibold">in one go</span>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>
                      One 15–20 minute recording session →{" "}
                      <span className="text-foreground font-semibold">months of creative</span>.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>
                      Find your winning hooks in the{" "}
                      <span className="text-foreground font-semibold">first week of spend</span>
                      , not the sixth month.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>
                      Know exactly which pain points convert — because you actually tested them.
                    </span>
                  </li>
                </ul>
              </BorderGlow>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll className="text-center">
            <ClickSpark sparkColor="#7058e3" sparkCount={10} sparkRadius={25}>
              <Button size="lg" className="text-lg px-8 font-bold" asChild>
                <a href="#pricing">
                  Start Finding My Winners
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </ClickSpark>
          </AnimateOnScroll>
        </div>
      </section>

      {/* NATIVE vs PRODUCTION */}
      <section className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Why These Outperform Polished Production Ads
            </h2>
            <p className="text-muted-foreground text-lg max-w-3xl mx-auto">
              People can spot a produced ad in half a second. Once they do, they scroll.
              The whole game is earning the attention <em>before</em> they know it&apos;s an ad.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <AnimateOnScroll>
              <BorderGlow borderRadius={18} innerClassName="p-8 h-full">
                <Badge variant="outline" className="mb-4 border-destructive/40 text-destructive">
                  Polished production ads
                </Badge>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Look like ads → scrolled past in under a second</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Expensive crew, studio, edit passes — weeks per spot</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>One or two angles tested, at most</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Eye className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                    <span>Audience never hears your hook, let alone your pitch</span>
                  </li>
                </ul>
              </BorderGlow>
            </AnimateOnScroll>

            <AnimateOnScroll delay={0.1}>
              <BorderGlow borderRadius={18} innerClassName="p-8 h-full">
                <Badge variant="outline" className="mb-4 border-success/40 text-success">
                  Batch UGC-style ads
                </Badge>
                <ul className="space-y-3 text-muted-foreground">
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>
                      Look like another creator on the feed — viewers stop and actually listen
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>
                      15–20 min of casual selfie footage. No crew. No studio.
                    </span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>Hundreds of angles tested in parallel</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                    <span>
                      Same message, same offer — but the format earns the attention
                    </span>
                  </li>
                </ul>
              </BorderGlow>
            </AnimateOnScroll>
          </div>

          <AnimateOnScroll delay={0.2}>
            <p className="text-center text-muted-foreground mt-10 max-w-3xl mx-auto">
              You&apos;re still paying to be there. You&apos;re still targeting your audience.
              You just don&apos;t <em>look</em> like an advertiser — so the message actually
              lands.
            </p>
          </AnimateOnScroll>

          <AnimateOnScroll className="mt-12 text-center">
            <ClickSpark sparkColor="#7058e3" sparkCount={10} sparkRadius={25}>
              <Button size="lg" className="text-lg px-8 font-bold" asChild>
                <a href="#pricing">
                  Get My Ads Running
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </ClickSpark>
          </AnimateOnScroll>
        </div>
      </section>

      {/* BENEFITS */}
      <section className="py-24 px-4 bg-muted/20">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              What You Actually Get
            </h2>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                icon: <Target className="w-6 h-6" />,
                title: "Every angle in one shot",
                body: "Test every hook, body, and pain point at the same time instead of guessing which to try first.",
              },
              {
                icon: <Zap className="w-6 h-6" />,
                title: "Winning hooks in days",
                body: "Stop waiting six months to find out what works. Your data comes back fast because you're running everything at once.",
              },
              {
                icon: <Film className="w-6 h-6" />,
                title: "Show up and read",
                body: "We send the scripts. You prop up your phone and read. One 15–20 minute session, one video file, zero thinking about what to say.",
              },
              {
                icon: <Eye className="w-6 h-6" />,
                title: "Looks like content, not ads",
                body: "Casual selfie footage earns attention the way polished production never will.",
              },
              {
                icon: <Sparkles className="w-6 h-6" />,
                title: "Pain points that convert",
                body: "Find out which problems your audience actually cares about — without burning months on the wrong one.",
              },
              {
                icon: <Clock className="w-6 h-6" />,
                title: "24-hour turnaround*",
                body: "Footage in, scripts out in a day. No production bottleneck, no editing delays.",
              },
            ].map((benefit, i) => (
              <AnimateOnScroll key={benefit.title} delay={i * 0.05}>
                <BorderGlow borderRadius={18} innerClassName="p-6 h-full">
                  <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                    {benefit.icon}
                  </div>
                  <h3 className="font-heading font-bold text-lg text-foreground mb-2">
                    {benefit.title}
                  </h3>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {benefit.body}
                  </p>
                </BorderGlow>
              </AnimateOnScroll>
            ))}
          </div>

          <AnimateOnScroll className="mt-12 text-center">
            <ClickSpark sparkColor="#7058e3" sparkCount={10} sparkRadius={25}>
              <Button size="lg" className="text-lg px-8 font-bold" asChild>
                <a href="#pricing">
                  See Pricing
                  <ArrowRight className="ml-2 h-5 w-5" />
                </a>
              </Button>
            </ClickSpark>
          </AnimateOnScroll>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-4">
        <div className="max-w-6xl mx-auto">
          <AnimateOnScroll className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Pick Your Batch
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Pick how many pain points you want to test. The more angles you run, the
              faster you find what wins.
            </p>
          </AnimateOnScroll>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {TIERS.map((tier, index) => (
              <AnimateOnScroll key={tier.id} delay={index * 0.1}>
                <BorderGlow
                  borderRadius={18}
                  innerClassName="p-8 pt-10 flex flex-col h-full relative"
                  className={cn(
                    "h-full",
                    tier.popular && "shadow-xl shadow-primary/20 md:scale-105"
                  )}
                >
                  {tier.popular && (
                    <span className="absolute top-3 left-1/2 -translate-x-1/2 bg-primary text-primary-foreground text-xs font-bold uppercase tracking-wide px-3 py-1 rounded-full whitespace-nowrap">
                      Most Popular
                    </span>
                  )}

                  <div className="flex items-center gap-2 mb-2">
                    <div className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/10 text-primary">
                      {tier.icon}
                    </div>
                    <h3 className="text-2xl font-heading font-bold text-foreground">
                      {tier.name}
                    </h3>
                  </div>
                  <p className="text-sm text-muted-foreground mb-6">{tier.tagline}</p>

                  <div className="mb-6">
                    <div className="flex items-baseline gap-2">
                      <span className="text-4xl font-bold text-foreground">{tier.price}</span>
                      <span className="text-sm text-muted-foreground">one-time</span>
                    </div>
                    <p className="text-sm text-primary font-semibold mt-2">
                      {tier.adCount} ads · {tier.painPoints} pain points
                    </p>
                  </div>

                  <ul className="space-y-3 flex-1 mb-8">
                    {tier.highlights.map((feature) => (
                      <li key={feature} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-success flex-shrink-0 mt-0.5" />
                        <span className="text-foreground text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>

                  <ClickSpark sparkColor="#7058e3" sparkCount={10} sparkRadius={25}>
                    <Button
                      size="lg"
                      variant={tier.popular ? "default" : "outline"}
                      className="w-full font-bold"
                      onClick={() => scrollToForm(tier.adCount, tier.painPoints)}
                    >
                      Start {tier.name}
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </ClickSpark>
                </BorderGlow>
              </AnimateOnScroll>
            ))}
          </div>

          <p className="text-center text-xs text-muted-foreground mt-10 max-w-2xl mx-auto">
            *24 hours from when we receive your footage. Weekends: footage received Sunday
            counts as Monday — delivered by end of day Tuesday. Revisions for errors only —
            this is ad creative testing, not boutique edit work.
          </p>
        </div>
      </section>

      {/* FORM */}
      <section className="py-12 px-4 bg-muted/20">
        <div className="max-w-5xl mx-auto text-center mb-4">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Start Your Batch
            </h2>
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
              Tell us about your business and we&apos;ll start writing your{" "}
              <span className="text-primary font-semibold">{selectedAdCount} ads</span>.
            </p>
          </AnimateOnScroll>
        </div>
        <GetAdsLeadForm
          adCount={selectedAdCount}
          lockedPainPointCount={selectedPainPoints}
        />
      </section>

      {/* FAQ */}
      <section className="py-24 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Questions
            </h2>
          </AnimateOnScroll>

          <div className="space-y-4">
            {FAQS.map((item, index) => (
              <AnimateOnScroll key={item.q} delay={index * 0.05}>
                <details className="group bg-card border border-border rounded-xl">
                  <summary className="cursor-pointer p-6 font-heading font-semibold text-foreground flex items-center justify-between gap-4">
                    <span>{item.q}</span>
                    <span className="transition group-open:rotate-180 text-primary">▼</span>
                  </summary>
                  <div className="px-6 pb-6 text-muted-foreground leading-relaxed">
                    {item.a}
                  </div>
                </details>
              </AnimateOnScroll>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-4 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Stop Guessing What Works
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              One recording session. Hundreds of angles. Your winners found in days, not
              months.
            </p>
            <ClickSpark sparkColor="#7058e3" sparkCount={12} sparkRadius={28}>
              <Button
                size="lg"
                className="font-bold text-lg px-12 py-7 rounded-lg shadow-lg shadow-primary/25"
                asChild
              >
                <Link href="#pricing">
                  Pick My Batch
                  <ArrowRight className="w-5 h-5 ml-2" />
                </Link>
              </Button>
            </ClickSpark>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
