"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import {
  Mail,
  Share2,
  CalendarCheck,
  FolderOpen,
  Terminal,
  Database,
  FileText,
  Sparkles,
  Gift,
  type LucideIcon,
} from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Capability {
  icon: LucideIcon;
  label: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const capabilities: Capability[] = [
  { icon: Mail, label: "Manages your email" },
  { icon: Share2, label: "Runs social media" },
  { icon: CalendarCheck, label: "Books & confirms appointments" },
  { icon: FolderOpen, label: "Accesses files, iMessage, contacts" },
  { icon: Terminal, label: "Runs code & shell commands" },
  { icon: Database, label: "Reads & updates your CRM" },
  { icon: FileText, label: "Builds PDFs, decks & reports" },
  { icon: Sparkles, label: "Learns your business over time" },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function CapabilityItem({ item, index }: { item: Capability; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.3, delay: index * 0.05 }}
      className="flex items-center gap-3"
    >
      <div className="h-8 w-8 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <item.icon className="h-4 w-4 text-primary" />
      </div>
      <p className="text-zinc-300 text-sm font-medium">{item.label}</p>
    </motion.div>
  );
}

function ScreenshotCard({
  src,
  alt,
  caption,
  index,
  portrait = false,
}: {
  src: string;
  alt: string;
  caption: string;
  index: number;
  portrait?: boolean;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-3"
    >
      <Card className="bg-zinc-900 border-zinc-800 overflow-hidden">
        <div className={`relative w-full ${portrait ? "aspect-[9/16] max-h-[480px]" : "aspect-video"} bg-black`}>
          <Image
            src={src}
            alt={alt}
            fill
            className="object-cover object-top"
          />
        </div>
      </Card>
      <p className="text-zinc-500 text-xs text-center">{caption}</p>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function PocketAgentSection() {
  return (
    <section className="py-24 border-t border-zinc-800/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-16"
        >
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            Pocket Agent
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            An AI That Actually{" "}
            <span className="text-primary">Does Things</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-xl mx-auto">
            Works on your computer. Available on your phone. Anything a person can do at a desk — it can do.
          </p>
        </motion.div>

        {/* Beat 1 — Everywhere */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-3xl font-heading font-bold text-primary/20 leading-none">01</span>
            <div>
              <p className="text-white font-heading font-semibold">With You Everywhere</p>
              <p className="text-zinc-500 text-sm">Desktop and phone. Ask it anything, from anywhere.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ScreenshotCard
              src="/images/demo/Pocket_agent_what_I_can_do.png"
              alt="Pocket Agent desktop — full capabilities"
              caption="Desktop — full tool access"
              index={0}
            />
            <ScreenshotCard
              src="/images/demo/Pocket_agent_iphone_app.png"
              alt="Pocket Agent iPhone — fetching files remotely"
              caption="Phone — asked it to pull a file off the computer while out. Done in seconds."
              index={1}
              portrait
            />
          </div>
        </motion.div>

        <Separator className="bg-zinc-800/50 my-16" />

        {/* Beat 2 — Memory */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-3xl font-heading font-bold text-primary/20 leading-none">02</span>
            <div>
              <p className="text-white font-heading font-semibold">It Knows Your Business</p>
              <p className="text-zinc-500 text-sm">Stores facts, learns preferences, gets smarter over time.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ScreenshotCard
              src="/images/demo/pocket_agent_brain_learnings.png"
              alt="Pocket Agent brain — stored business memory"
              caption="41 stored facts — pricing, offers, lessons, preferences"
              index={0}
            />
            <ScreenshotCard
              src="/images/demo/pocket_agent_my_approach.png"
              alt="Pocket Agent — My Approach operational guidelines"
              caption="Operational guidelines it follows on its own"
              index={1}
            />
          </div>
        </motion.div>

        <Separator className="bg-zinc-800/50 my-16" />

        {/* Beat 3 — Autonomous */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="flex items-center gap-2 mb-6">
            <span className="text-3xl font-heading font-bold text-primary/20 leading-none">03</span>
            <div>
              <p className="text-white font-heading font-semibold">Works While You Sleep</p>
              <p className="text-zinc-500 text-sm">Runs routines on its own — no prompting required.</p>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-6">
            <ScreenshotCard
              src="/images/demo/pocket_agent_running_twitter.png"
              alt="Pocket Agent — autonomously running Twitter outreach"
              caption="Found a tweet with 1.7K likes and replied. No one asked it to."
              index={0}
            />
            <ScreenshotCard
              src="/images/demo/pocket_agent_twitter_profile_replies.png"
              alt="Pocket Agent — Twitter profile and replies"
              caption="Its own account. Its own voice. Running 24/7."
              index={1}
            />
          </div>
        </motion.div>

        <Separator className="bg-zinc-800/50 my-16" />

        {/* Capabilities grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="text-white font-heading font-semibold mb-6">What It Can Do</p>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {capabilities.map((item, i) => (
              <CapabilityItem key={item.label} item={item} index={i} />
            ))}
          </div>
        </motion.div>

        <Separator className="bg-zinc-800/50 mb-16" />

        {/* Customization callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="rounded-xl border border-primary/20 bg-primary/5 p-8 mb-8"
        >
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div className="space-y-4">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                Built for Your Brand
              </Badge>
              <h3 className="text-2xl font-heading font-bold text-white">
                We Don&apos;t Give You a Generic Tool.
                <br />
                <span className="text-primary">We Build Yours.</span>
              </h3>
              <p className="text-zinc-400 text-sm leading-relaxed">
                Every agent is trained on your business, named after your brand, and set up to run your workflows. DOBI gets Roxy — named after your mascot, built for your agents, ready on day one.
              </p>
            </div>
            <div className="space-y-3">
              {[
                "Named after your brand",
                "Trained on your business",
                "Knows your team, tools & workflows",
                "Gets smarter the longer it runs",
              ].map((item, i) => (
                <motion.div
                  key={item}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.08 }}
                  className="flex items-center gap-3"
                >
                  <div className="h-1.5 w-1.5 rounded-full bg-primary shrink-0" />
                  <p className="text-zinc-300 text-sm">{item}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* Free install CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-8 text-center"
        >
          <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-4">
            <Gift className="h-6 w-6 text-primary" />
          </div>
          <h3 className="text-xl font-heading font-bold text-white mb-2">
            Free Install for Every Agent
          </h3>
          <p className="text-zinc-400 text-sm max-w-lg mx-auto">
            Book us for your next brokerage meeting. We come in, install it, and walk every agent through setup. They leave with it running.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
