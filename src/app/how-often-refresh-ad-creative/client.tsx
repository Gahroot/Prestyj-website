"use client";

import { useState, useMemo } from "react";
import Link from "next/link";
import { ArrowRight, Calculator, TrendingDown, Activity } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import BorderGlow from "@/components/ui/border-glow";
import CountUp from "@/components/ui/count-up";

type Faq = { q: string; a: string };

const TIER_MAP = (monthlyNeed: number) => {
  if (monthlyNeed <= 300) return { name: "Minimum", price: "$1,497", count: 300 };
  if (monthlyNeed <= 500) return { name: "Pro", price: "$2,497", count: 500 };
  return { name: "Max", price: "$3,997", count: 1000 };
};

export function RefreshCadenceClient({ faqs }: { faqs: Faq[] }) {
  const [spend, setSpend] = useState(5000);
  const [activeCreatives, setActiveCreatives] = useState(5);

  const { fatigueDays, weeklyNeed, tier, severity } = useMemo(() => {
    // Simple fatigue model: spend per creative per day
    const dailySpend = spend / 30;
    const spendPerCreativePerDay = dailySpend / Math.max(activeCreatives, 1);
    // Rough heuristic: above $50/creative/day, fatigue starts in ~7 days; scales from there
    const base = 14;
    const pressure = spendPerCreativePerDay / 50;
    const fatigueDays = Math.max(2, Math.round(base / Math.max(pressure, 0.3)));
    // Weekly refresh need: enough to keep effective frequency-per-creative down
    const targetCreativePool = Math.max(10, Math.round(spend / 250)); // e.g. $5k → 20 creatives live
    const weeklyNeed = Math.max(
      2,
      Math.round((targetCreativePool - activeCreatives) / 2 + targetCreativePool / 4),
    );
    const tier = TIER_MAP(weeklyNeed * 4);
    const severity: "critical" | "warning" | "ok" =
      fatigueDays <= 5 ? "critical" : fatigueDays <= 10 ? "warning" : "ok";
    return { fatigueDays, weeklyNeed, tier, severity };
  }, [spend, activeCreatives]);

  const severityColor =
    severity === "critical"
      ? "text-destructive"
      : severity === "warning"
        ? "text-warning"
        : "text-success";

  return (
    <main className="min-h-screen">
      {/* HERO */}
      <section className="px-4 pt-24 pb-12">
        <div className="mx-auto max-w-5xl text-center">
          <Badge variant="outline" className="border-primary/50 text-primary mb-6">
            FREE CALCULATOR
          </Badge>
          <h1 className="font-heading text-foreground mb-6 text-4xl font-bold sm:text-5xl md:text-6xl">
            How Often Should You
            <span className="text-primary mt-2 block">Refresh Ad Creative?</span>
          </h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-lg md:text-xl">
            Spend determines cadence — not the calendar. Enter your numbers to see exactly when your
            current ads will fatigue and how much new creative you need per week.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="px-4 pb-16">
        <div className="mx-auto max-w-5xl">
          <BorderGlow borderRadius={20} innerClassName="p-6 md:p-10">
            <div className="mb-6 flex items-center gap-3">
              <div className="bg-primary/10 text-primary flex h-10 w-10 items-center justify-center rounded-full">
                <Calculator className="h-5 w-5" />
              </div>
              <h2 className="font-heading text-foreground text-2xl font-bold">
                Refresh Cadence Calculator
              </h2>
            </div>

            <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
              {/* INPUTS */}
              <div className="space-y-6">
                <div>
                  <label className="text-foreground mb-2 block text-sm font-semibold">
                    Monthly Ad Spend:{" "}
                    <span className="text-primary">${spend.toLocaleString()}</span>
                  </label>
                  <input
                    type="range"
                    min={500}
                    max={50000}
                    step={500}
                    value={spend}
                    onChange={(e) => setSpend(Number(e.target.value))}
                    className="accent-primary w-full"
                  />
                  <div className="text-muted-foreground mt-1 flex justify-between text-xs">
                    <span>$500</span>
                    <span>$50,000</span>
                  </div>
                </div>

                <div>
                  <label className="text-foreground mb-2 block text-sm font-semibold">
                    Currently Active Creatives:{" "}
                    <span className="text-primary">{activeCreatives}</span>
                  </label>
                  <input
                    type="range"
                    min={1}
                    max={50}
                    step={1}
                    value={activeCreatives}
                    onChange={(e) => setActiveCreatives(Number(e.target.value))}
                    className="accent-primary w-full"
                  />
                  <div className="text-muted-foreground mt-1 flex justify-between text-xs">
                    <span>1</span>
                    <span>50</span>
                  </div>
                </div>

                <div className="bg-muted/30 border-border text-muted-foreground rounded-lg border p-4 text-sm">
                  <p className="flex items-start gap-2">
                    <Activity className="text-primary mt-0.5 h-4 w-4 flex-shrink-0" />
                    <span>
                      Fatigue model based on spend per creative per day. Higher spend with fewer
                      creatives = faster fatigue.
                    </span>
                  </p>
                </div>
              </div>

              {/* RESULTS */}
              <div className="bg-muted/30 border-border rounded-xl border p-6">
                <p className="text-muted-foreground mb-4 text-xs font-semibold tracking-wide uppercase">
                  Your Results
                </p>

                <div className="border-border/50 mb-6 border-b pb-6">
                  <p className="text-muted-foreground mb-1 text-sm">Your creative is fatigued in</p>
                  <p className={`text-5xl font-bold ${severityColor}`}>
                    <CountUp to={fatigueDays} duration={0.6} /> days
                  </p>
                  <p className="text-muted-foreground mt-2 text-xs">
                    {severity === "critical" &&
                      "Critical — you're structurally under-supplied for your spend."}
                    {severity === "warning" && "Warning — refresh pipeline is behind."}
                    {severity === "ok" && "Healthy range — keep the pipeline moving."}
                  </p>
                </div>

                <div className="border-border/50 mb-6 border-b pb-6">
                  <p className="text-muted-foreground mb-1 text-sm">
                    New creatives needed per week
                  </p>
                  <p className="text-primary text-5xl font-bold">
                    <CountUp to={weeklyNeed} duration={0.6} />
                  </p>
                  <p className="text-muted-foreground mt-2 text-xs">
                    To keep frequency capped and CTR stable
                  </p>
                </div>

                <div className="bg-primary/5 border-primary/30 mb-4 rounded-lg border p-4">
                  <p className="text-primary mb-1 text-xs font-semibold uppercase">
                    Suggested batch tier
                  </p>
                  <p className="font-heading text-foreground text-lg font-bold">
                    {tier.name} — {tier.price}
                  </p>
                  <p className="text-muted-foreground text-sm">
                    {tier.count} scripted ads in 24 hours covers ~
                    {Math.round(tier.count / Math.max(weeklyNeed, 1))} weeks
                  </p>
                </div>

                <Button size="lg" className="w-full font-bold" asChild>
                  <Link href="/book-demo">
                Book a Demo
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </BorderGlow>
        </div>
      </section>

      {/* THE REAL RULE */}
      <section className="bg-muted/20 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="font-heading text-foreground mb-6 text-3xl font-bold md:text-4xl">
              The Real Rule: Spend Determines Cadence, Not Calendar
            </h2>
            <p className="text-muted-foreground mb-4 text-lg">
              Generic advice says &ldquo;refresh every 2 weeks.&rdquo; That&apos;s meaningless
              because it ignores the only variable that actually drives fatigue: impressions per
              unique user. A $1,000/month account running three ads might be fine for six weeks. A
              $20,000/month account running those same three ads will burn through the audience in
              under a week.
            </p>
            <p className="text-muted-foreground mb-4 text-lg">
              At small spend tiers ($1k-3k/month), a 7-14 day creative lifespan is normal. At
              $5k-10k/month, you&apos;re closer to 5-10 days per creative before frequency climbs
              into the fatigue zone. Above $10k/month with narrow targeting, lifespans fall to 3-7
              days — sometimes less.
            </p>
            <p className="text-muted-foreground text-lg">
              The higher your frequency cap, the faster fatigue arrives. The only durable solution
              is a creative library large enough that any one creative never gets over-served.
              That&apos;s what{" "}
              <Link href="/batch-video-ads" className="text-primary hover:underline">
                our batch service
              </Link>{" "}
              is built to produce.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SIGNS FATIGUED */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="font-heading text-foreground mb-8 text-3xl font-bold md:text-4xl">
              Signs Your Ads Are Already Fatigued
            </h2>
            <ol className="space-y-5">
              {[
                {
                  title: "CTR decay of 30%+",
                  body: "From launch week to current, on the same audience with no targeting change.",
                },
                {
                  title: "Frequency above 3",
                  body: "Rolling 7-day frequency per user climbing past 3 is the first real alarm bell.",
                },
                {
                  title: "CPM inflation 20%+",
                  body: "Algorithm is reaching deeper into the audience because the near-bucket is saturated.",
                },
                {
                  title: "Cost per lead creeping up",
                  body: "Week over week, even with bid and budget held constant.",
                },
                {
                  title: "Comments and engagement drying up",
                  body: "Warm pools lose interest first. If engagement dropped before clicks did, fatigue is mature.",
                },
              ].map((sign, i) => (
                <li
                  key={i}
                  className="bg-card border-border flex items-start gap-4 rounded-xl border p-5"
                >
                  <div className="bg-destructive/10 text-destructive flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full">
                    <TrendingDown className="h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="font-heading text-foreground font-bold">{sign.title}</h3>
                    <p className="text-muted-foreground mt-1 text-sm">{sign.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </AnimateOnScroll>
        </div>
      </section>

      {/* HOW TO PRODUCE */}
      <section className="bg-muted/20 px-4 py-16">
        <div className="mx-auto max-w-4xl">
          <AnimateOnScroll>
            <h2 className="font-heading text-foreground mb-6 text-3xl font-bold md:text-4xl">
              How to Actually Produce Refresh Volume
            </h2>
            <p className="text-muted-foreground mb-6 text-lg">
              If your calculator says 10+ new ads per week, that&apos;s 40+ per month. Producing
              that in-house means a full-time creative team. Outsourcing to a typical agency means
              weeks of back-and-forth per batch. Neither works.
            </p>
            <p className="text-muted-foreground mb-6 text-lg">
              Our model: you record once. 15-20 minutes, selfie style. We turn that into 300, 500,
              or 1,000 unique scripted variations — delivered in 24 hours. You feed the refresh
              pipeline for weeks or months off a single recording session.
            </p>
            <div className="flex flex-col gap-4 sm:flex-row">
              <Button size="lg" className="font-bold" asChild>
                <Link href="/book-demo">
                Book a Demo
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Link>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/ad-fatigue-solution">Read the fatigue diagnostic</Link>
              </Button>
            </div>
          </AnimateOnScroll>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-4 py-16">
        <div className="mx-auto max-w-3xl">
          <AnimateOnScroll className="mb-10 text-center">
            <h2 className="font-heading text-foreground text-3xl font-bold md:text-4xl">
              Questions
            </h2>
          </AnimateOnScroll>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <AnimateOnScroll key={item.q} delay={i * 0.05}>
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
      <section className="bg-primary/5 px-4 py-20">
        <div className="mx-auto max-w-3xl text-center">
          <AnimateOnScroll>
            <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-5xl">
              Feed the Refresh Pipeline
            </h2>
            <p className="text-muted-foreground mb-8 text-lg md:text-xl">
              One recording. Months of fresh creative. No more fatigue.
            </p>
            <Button size="lg" className="px-10 py-6 text-lg font-bold" asChild>
              <Link href="/book-demo">
                Book a Demo
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
