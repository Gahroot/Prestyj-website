"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  FileText,
  Layers,
  PhoneCall,
  Wrench,
  type LucideIcon,
} from "lucide-react";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import BorderGlow from "@/components/ui/border-glow";

type Playbook = {
  href: string;
  icon: LucideIcon;
  eyebrow: string;
  title: string;
  description: string;
  audience: string;
  ctaLabel: string;
};

const PLAYBOOKS: readonly Playbook[] = [
  {
    href: "/lead-magnet/brokerage-playbook",
    icon: Building2,
    eyebrow: "Real Estate",
    title: "The $20M+ Brokerage Playbook",
    description:
      "How top teams convert 3x more Facebook and YouTube ad leads with AI — speed-to-lead data, AI vs. ISA cost breakdown, and the exact follow-up sequence.",
    audience: "Team leaders, broker-owners, ad-buying brokerages",
    ctaLabel: "Get the Brokerage Playbook",
  },
  {
    href: "/lead-magnet/reactivate-leads",
    icon: PhoneCall,
    eyebrow: "Live AI Demo",
    title: "Reactivate Dead Leads With AI",
    description:
      "Skip the PDF. Submit your number and an AI agent calls you in under 60 seconds — exactly how it would re-engage one of your dormant leads.",
    audience: "Anyone with a database of unworked or aged-out leads",
    ctaLabel: "Experience the Live Demo",
  },
  {
    href: "/lead-magnet/qualvol-playbook",
    icon: Layers,
    eyebrow: "Content Strategy",
    title: "The QualVol Content Playbook",
    description:
      "The swarm model, scoring rubrics, and platform-specific cadence math behind shipping 1,000+ on-brand posts per month without burning out a team.",
    audience: "Owners, CMOs, agency leaders, coaches",
    ctaLabel: "Get the QualVol Playbook",
  },
  {
    href: "/lead-magnet/roofing-playbook",
    icon: Wrench,
    eyebrow: "Roofing",
    title: "The Roofer's 24/7 Lead Response Playbook",
    description:
      "The 60-second standard, emergency triage protocols, after-hours strategy, and the storm-surge playbook to capture every call without hiring more staff.",
    audience: "Roofing contractors, storm response teams",
    ctaLabel: "Get the Roofing Playbook",
  },
];

export default function LeadMagnetIndexPage() {
  return (
    <>
      <Navbar />
      <main className="from-background to-muted/20 min-h-screen bg-gradient-to-b">
        <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 sm:py-24 lg:px-8">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mx-auto max-w-3xl space-y-6 text-center"
          >
            <div className="bg-primary/10 text-primary inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium">
              <FileText className="h-4 w-4" />
              Free Playbooks
            </div>
            <h1 className="font-heading text-4xl font-bold tracking-tighter sm:text-5xl">
              Pick the <span className="text-primary">playbook</span> that matches your business
            </h1>
            <p className="text-muted-foreground text-lg sm:text-xl">
              We build AI agents for marketing &amp; sales. Each guide is a focused, no-fluff
              breakdown for a specific operator — instant download, no sales pitch.
            </p>
          </motion.div>

          {/* Playbook Grid */}
          <div className="mt-14 grid gap-6 sm:grid-cols-2">
            {PLAYBOOKS.map((playbook, index) => {
              const Icon = playbook.icon;
              return (
                <motion.div
                  key={playbook.href}
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: 0.05 * index }}
                >
                  <Link
                    href={playbook.href}
                    className="group block h-full focus:outline-none"
                    aria-label={playbook.ctaLabel}
                  >
                    <BorderGlow
                      borderRadius={18}
                      innerClassName="flex h-full flex-col gap-5 p-6 sm:p-8"
                      className="h-full transition-transform duration-300 group-hover:-translate-y-1 group-focus-visible:-translate-y-1"
                    >
                      <div className="flex items-center justify-between gap-4">
                        <div className="bg-primary/10 text-primary inline-flex h-11 w-11 items-center justify-center rounded-xl">
                          <Icon className="h-5 w-5" />
                        </div>
                        <span className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                          {playbook.eyebrow}
                        </span>
                      </div>

                      <div className="space-y-3">
                        <h2 className="font-heading text-2xl font-bold tracking-tight">
                          {playbook.title}
                        </h2>
                        <p className="text-muted-foreground">{playbook.description}</p>
                      </div>

                      <div className="border-border mt-auto space-y-4 border-t pt-4">
                        <p className="text-muted-foreground text-sm">
                          <span className="text-foreground font-medium">For:</span>{" "}
                          {playbook.audience}
                        </p>
                        <div className="text-primary inline-flex items-center gap-2 text-sm font-semibold">
                          {playbook.ctaLabel}
                          <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1 group-focus-visible:translate-x-1" />
                        </div>
                      </div>
                    </BorderGlow>
                  </Link>
                </motion.div>
              );
            })}
          </div>

          {/* Footer note */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            className="mt-14 text-center"
          >
            {/* CTA-sweep: cold traffic → batch offer */}
            <p className="text-muted-foreground text-sm">
              Need fresh ad creative this week?{" "}
              <Link
                href="/batch-video-ads"
                className="text-primary font-medium underline-offset-4 hover:underline"
              >
                Get 100 ads for $497
              </Link>{" "}
              and beat ad fatigue.
            </p>
          </motion.div>
        </div>
      </main>
      <Footer />
    </>
  );
}
