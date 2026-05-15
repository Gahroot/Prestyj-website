"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Briefcase, Building2, Megaphone, Mic, Target, Wrench, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import BorderGlow from "@/components/ui/border-glow";
import { AnimateOnScroll } from "@/components/ui/animate-on-scroll";
import { cn } from "@/lib/utils";

interface AudienceProfile {
  id: string;
  label: string;
  icon: LucideIcon;
  headline: string;
  pain: string;
  outcome: string;
  bullets: string[];
}

interface AudienceSelectorProps {
  eyebrow?: string;
  headline?: string;
  subhead?: string;
  audiences?: AudienceProfile[];
}

const DEFAULT_AUDIENCES: AudienceProfile[] = [
  {
    id: "everyone",
    label: "Anyone Running Paid Ads",
    icon: Target,
    headline: "Ads, not videos.",
    pain: "You don't need a brand film. You need 100+ angles to find what converts.",
    outcome: "100 ads for $497, 24-hour turnaround, ready to upload.",
    bullets: [
      "Works for any product, service, or offer",
      "Native vertical format for Meta, TikTok, YouTube Shorts",
      "Scale to 300, 500, or 1,000 anytime",
    ],
  },
  {
    id: "coaches",
    label: "Coaches & Course Creators",
    icon: Mic,
    headline: "One hero ad isn't enough anymore.",
    pain: "Ad platforms evaluate thousands of creative options per impression now. One ad can't keep up.",
    outcome:
      "300–1,000 founder-on-camera angles in one pack. Test your whole offer in days, not months.",
    bullets: [
      "Founder-on-camera (2–4× CTR vs stock)",
      "Belief, mechanism, identity, transformation angles",
      "Built for Advantage+ creative volume",
    ],
  },
  {
    id: "media-buyers",
    label: "Media Buyers",
    icon: Megaphone,
    headline: "Stop sitting on dead Asana cards waiting for creative.",
    pain: "Your launch is bottlenecked on a creator who ships 4 ads a week. You can't feed the platform what it wants.",
    outcome:
      "300+ ads in 1–2 business days. Hook, body, CTA, angle. All ready to slot into ad sets.",
    bullets: [
      "Scripted hooks, bodies, and CTAs for every customer problem",
      "Vertical 9:16, native UGC look",
      "One source clip → unlimited fresh variations",
    ],
  },
  {
    id: "cmos",
    label: "CMOs & Heads of Growth",
    icon: Briefcase,
    headline: "Your $5K/month agency ships 4 ads. We ship 300 in a day.",
    pain: "Creative is the #1 line-item bottleneck on every paid channel — and the slowest function on your team.",
    outcome:
      "Predictable creative supply. Test 10 customer problems in parallel instead of arguing about which to try first.",
    bullets: [
      "Volume that matches your media spend",
      "Reports show which angles win, not opinions",
      "Plug into any media buying team or agency",
    ],
  },
  {
    id: "agencies",
    label: "Agency Owners",
    icon: Building2,
    headline: "White-label volume your creative team can't ship.",
    pain: "You're paying editors $5K–$10K/month and still telling clients 'creative is coming' on every weekly call.",
    outcome:
      "Per-client batches at our cost, billed to your client at your margin. Stop losing accounts over creative supply.",
    bullets: [
      "Per-brand customer problem intake",
      "Your brand stamp on the delivery",
      "Volume your editors physically can't match",
    ],
  },
  {
    id: "service",
    label: "Service Business Owners",
    icon: Wrench,
    headline: "Sound like a neighbor, not an ad agency.",
    pain: "Polished production ads scream 'advertisement' — homeowners scroll. Your offer never gets heard.",
    outcome:
      "Selfie-style ads that look like another contractor on the feed. People stop, watch, and call.",
    bullets: [
      "Native UGC format (no 'ad look')",
      "Customer problems: price, trust, no-shows, warranty",
      "Local-feel scripts in your voice",
    ],
  },
];

export function BatchAudienceSelector({
  eyebrow = "Built For",
  headline = "Pick Who You Are",
  subhead = "Same engine. Different angles. The system bends to your category — we don't make you bend to it.",
  audiences = DEFAULT_AUDIENCES,
}: AudienceSelectorProps) {
  const fallback = audiences[0] ?? DEFAULT_AUDIENCES[0]!;
  const [active, setActive] = useState(fallback.id);
  const current = audiences.find((a) => a.id === active) ?? fallback;

  return (
    <section className="bg-muted/10 px-4 py-24">
      <div className="mx-auto max-w-6xl">
        <AnimateOnScroll className="mb-10 text-center">
          <Badge variant="outline" className="border-primary/50 text-primary mb-3">
            {eyebrow}
          </Badge>
          <h2 className="font-heading text-foreground mb-4 text-3xl font-bold md:text-5xl">
            {headline}
          </h2>
          <p className="text-muted-foreground mx-auto max-w-2xl text-lg">{subhead}</p>
        </AnimateOnScroll>

        <AnimateOnScroll>
          <div className="mb-8 flex flex-wrap justify-center gap-2 md:gap-3">
            {audiences.map((a) => {
              const Icon = a.icon;
              const isActive = a.id === active;
              return (
                <button
                  key={a.id}
                  onClick={() => setActive(a.id)}
                  className={cn(
                    "inline-flex items-center gap-2 rounded-full border px-4 py-2.5 text-sm font-semibold transition-all",
                    isActive
                      ? "bg-primary text-primary-foreground border-primary shadow-primary/20 shadow-md"
                      : "bg-card text-muted-foreground border-border hover:border-primary/50 hover:text-foreground",
                  )}
                  aria-pressed={isActive}
                >
                  <Icon className="h-4 w-4" />
                  {a.label}
                </button>
              );
            })}
          </div>
        </AnimateOnScroll>

        <AnimatePresence mode="wait">
          <motion.div
            key={current.id}
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.25 }}
          >
            <BorderGlow borderRadius={20} innerClassName="p-8 md:p-10">
              <div className="grid items-start gap-8 md:grid-cols-3">
                <div className="md:col-span-2">
                  <h3 className="font-heading text-foreground mb-3 text-2xl font-bold md:text-3xl">
                    {current.headline}
                  </h3>
                  <p className="text-muted-foreground mb-4">
                    <span className="text-destructive/90 font-semibold">The problem: </span>
                    {current.pain}
                  </p>
                  <p className="text-foreground">
                    <span className="text-success font-semibold">What you get: </span>
                    {current.outcome}
                  </p>
                </div>
                <ul className="space-y-2">
                  {current.bullets.map((b) => (
                    <li
                      key={b}
                      className="text-foreground/90 bg-muted/30 border-border rounded-lg border px-3 py-2 text-sm"
                    >
                      {b}
                    </li>
                  ))}
                </ul>
              </div>
            </BorderGlow>
          </motion.div>
        </AnimatePresence>
      </div>
    </section>
  );
}
