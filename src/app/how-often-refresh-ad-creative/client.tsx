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
      Math.round((targetCreativePool - activeCreatives) / 2 + targetCreativePool / 4)
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
      <section className="pt-24 pb-12 px-4">
        <div className="max-w-5xl mx-auto text-center">
          <Badge variant="outline" className="mb-6 border-primary/50 text-primary">
            FREE CALCULATOR
          </Badge>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-heading font-bold text-foreground mb-6">
            How Often Should You
            <span className="block text-primary mt-2">Refresh Ad Creative?</span>
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Spend determines cadence — not the calendar. Enter your numbers to see
            exactly when your current ads will fatigue and how much new creative you
            need per week.
          </p>
        </div>
      </section>

      {/* CALCULATOR */}
      <section className="pb-16 px-4">
        <div className="max-w-5xl mx-auto">
          <BorderGlow borderRadius={20} innerClassName="p-6 md:p-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-full bg-primary/10 text-primary flex items-center justify-center">
                <Calculator className="w-5 h-5" />
              </div>
              <h2 className="text-2xl font-heading font-bold text-foreground">
                Refresh Cadence Calculator
              </h2>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* INPUTS */}
              <div className="space-y-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
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
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>$500</span>
                    <span>$50,000</span>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
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
                    className="w-full accent-primary"
                  />
                  <div className="flex justify-between text-xs text-muted-foreground mt-1">
                    <span>1</span>
                    <span>50</span>
                  </div>
                </div>

                <div className="bg-muted/30 rounded-lg p-4 border border-border text-sm text-muted-foreground">
                  <p className="flex items-start gap-2">
                    <Activity className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                    <span>
                      Fatigue model based on spend per creative per day. Higher spend
                      with fewer creatives = faster fatigue.
                    </span>
                  </p>
                </div>
              </div>

              {/* RESULTS */}
              <div className="bg-muted/30 rounded-xl p-6 border border-border">
                <p className="text-xs uppercase tracking-wide text-muted-foreground font-semibold mb-4">
                  Your Results
                </p>

                <div className="mb-6 pb-6 border-b border-border/50">
                  <p className="text-sm text-muted-foreground mb-1">
                    Your creative is fatigued in
                  </p>
                  <p className={`text-5xl font-bold ${severityColor}`}>
                    <CountUp to={fatigueDays} duration={0.6} /> days
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    {severity === "critical" &&
                      "Critical — you're structurally under-supplied for your spend."}
                    {severity === "warning" && "Warning — refresh pipeline is behind."}
                    {severity === "ok" &&
                      "Healthy range — keep the pipeline moving."}
                  </p>
                </div>

                <div className="mb-6 pb-6 border-b border-border/50">
                  <p className="text-sm text-muted-foreground mb-1">
                    New creatives needed per week
                  </p>
                  <p className="text-5xl font-bold text-primary">
                    <CountUp to={weeklyNeed} duration={0.6} />
                  </p>
                  <p className="text-xs text-muted-foreground mt-2">
                    To keep frequency capped and CTR stable
                  </p>
                </div>

                <div className="bg-primary/5 border border-primary/30 rounded-lg p-4 mb-4">
                  <p className="text-xs font-semibold text-primary uppercase mb-1">
                    Suggested batch tier
                  </p>
                  <p className="text-lg font-heading font-bold text-foreground">
                    {tier.name} — {tier.price}
                  </p>
                  <p className="text-sm text-muted-foreground">
                    {tier.count} scripted ads in 24 hours covers ~{Math.round(tier.count / Math.max(weeklyNeed, 1))} weeks
                  </p>
                </div>

                <Button size="lg" className="w-full font-bold" asChild>
                  <Link href="/batch-video-ads#pricing">
                    Pick My Batch
                    <ArrowRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </div>
            </div>
          </BorderGlow>
        </div>
      </section>

      {/* THE REAL RULE */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              The Real Rule: Spend Determines Cadence, Not Calendar
            </h2>
            <p className="text-muted-foreground text-lg mb-4">
              Generic advice says &ldquo;refresh every 2 weeks.&rdquo; That&apos;s
              meaningless because it ignores the only variable that actually drives
              fatigue: impressions per unique user. A $1,000/month account running
              three ads might be fine for six weeks. A $20,000/month account running
              those same three ads will burn through the audience in under a week.
            </p>
            <p className="text-muted-foreground text-lg mb-4">
              At small spend tiers ($1k-3k/month), a 7-14 day creative lifespan is
              normal. At $5k-10k/month, you&apos;re closer to 5-10 days per creative
              before frequency climbs into the fatigue zone. Above $10k/month with
              narrow targeting, lifespans fall to 3-7 days — sometimes less.
            </p>
            <p className="text-muted-foreground text-lg">
              The higher your frequency cap, the faster fatigue arrives. The only
              durable solution is a creative library large enough that any one
              creative never gets over-served. That&apos;s what{" "}
              <Link href="/batch-video-ads" className="text-primary hover:underline">
                our batch service
              </Link>{" "}
              is built to produce.
            </p>
          </AnimateOnScroll>
        </div>
      </section>

      {/* SIGNS FATIGUED */}
      <section className="py-16 px-4">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-8">
              Signs Your Ads Are Already Fatigued
            </h2>
            <ol className="space-y-5">
              {[
                { title: "CTR decay of 30%+", body: "From launch week to current, on the same audience with no targeting change." },
                { title: "Frequency above 3", body: "Rolling 7-day frequency per user climbing past 3 is the first real alarm bell." },
                { title: "CPM inflation 20%+", body: "Algorithm is reaching deeper into the audience because the near-bucket is saturated." },
                { title: "Cost per lead creeping up", body: "Week over week, even with bid and budget held constant." },
                { title: "Comments and engagement drying up", body: "Warm pools lose interest first. If engagement dropped before clicks did, fatigue is mature." },
              ].map((sign, i) => (
                <li key={i} className="flex items-start gap-4 bg-card border border-border rounded-xl p-5">
                  <div className="w-10 h-10 rounded-full bg-destructive/10 text-destructive flex items-center justify-center flex-shrink-0">
                    <TrendingDown className="w-5 h-5" />
                  </div>
                  <div>
                    <h3 className="font-heading font-bold text-foreground">{sign.title}</h3>
                    <p className="text-muted-foreground text-sm mt-1">{sign.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </AnimateOnScroll>
        </div>
      </section>

      {/* HOW TO PRODUCE */}
      <section className="py-16 px-4 bg-muted/20">
        <div className="max-w-4xl mx-auto">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground mb-6">
              How to Actually Produce Refresh Volume
            </h2>
            <p className="text-muted-foreground text-lg mb-6">
              If your calculator says 10+ new ads per week, that&apos;s 40+ per month.
              Producing that in-house means a full-time creative team. Outsourcing to a
              typical agency means weeks of back-and-forth per batch. Neither works.
            </p>
            <p className="text-muted-foreground text-lg mb-6">
              Our model: you record once. 15-20 minutes, selfie style. We turn that
              into 300, 500, or 1,000 unique scripted variations — delivered in 24
              hours. You feed the refresh pipeline for weeks or months off a single
              recording session.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="font-bold" asChild>
                <Link href="/batch-video-ads#pricing">
                  Pick My Batch
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
      <section className="py-16 px-4">
        <div className="max-w-3xl mx-auto">
          <AnimateOnScroll className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-heading font-bold text-foreground">
              Questions
            </h2>
          </AnimateOnScroll>
          <div className="space-y-4">
            {faqs.map((item, i) => (
              <AnimateOnScroll key={item.q} delay={i * 0.05}>
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
      <section className="py-20 px-4 bg-primary/5">
        <div className="max-w-3xl mx-auto text-center">
          <AnimateOnScroll>
            <h2 className="text-3xl md:text-5xl font-heading font-bold text-foreground mb-4">
              Feed the Refresh Pipeline
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8">
              One recording. Months of fresh creative. No more fatigue.
            </p>
            <Button size="lg" className="font-bold text-lg px-10 py-6" asChild>
              <Link href="/batch-video-ads#pricing">
                Pick My Batch
                <ArrowRight className="w-5 h-5 ml-2" />
              </Link>
            </Button>
          </AnimateOnScroll>
        </div>
      </section>
    </main>
  );
}
