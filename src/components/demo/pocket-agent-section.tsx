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
import { Card } from "@/components/ui/card";
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
      <div className="bg-primary/10 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg">
        <item.icon className="text-primary h-4 w-4" />
      </div>
      <p className="text-sm font-medium text-zinc-300 group-data-[demo-light]:text-zinc-700">
        {item.label}
      </p>
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
      <Card className="overflow-hidden border-zinc-800 bg-zinc-900 group-data-[demo-light]:border-gray-200 group-data-[demo-light]:bg-white">
        <div
          className={`relative w-full ${portrait ? "aspect-[9/16] max-h-[480px]" : "aspect-video"} bg-black group-data-[demo-light]:bg-gray-200`}
        >
          <Image src={src} alt={alt} fill className="object-cover object-top" />
        </div>
      </Card>
      <p className="text-center text-xs text-zinc-500">{caption}</p>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function PocketAgentSection() {
  return (
    <section className="border-t border-zinc-800/50 py-24 group-data-[demo-light]:border-gray-200/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16 text-center"
        >
          <span className="bg-primary/10 text-primary mb-4 inline-block rounded-full px-3 py-1 text-sm font-medium">
            Pocket Agent
          </span>
          <h2 className="font-heading mb-4 text-3xl font-bold text-white group-data-[demo-light]:text-zinc-900 sm:text-4xl">
            An AI That Actually <span className="text-primary">Does Things</span>
          </h2>
          <p className="mx-auto max-w-xl text-lg text-zinc-400 group-data-[demo-light]:text-zinc-600">
            Works on your computer. Available on your phone. Anything a person can do at a desk — it
            can do.
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
          <div className="mb-6 flex items-center gap-2">
            <span className="font-heading text-primary/20 text-3xl leading-none font-bold">01</span>
            <div>
              <p className="font-heading font-semibold text-white group-data-[demo-light]:text-zinc-900">
                With You Everywhere
              </p>
              <p className="text-sm text-zinc-500">
                Desktop and phone. Ask it anything, from anywhere.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
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

        <Separator className="my-16 bg-zinc-800/50 group-data-[demo-light]:bg-gray-200/50" />

        {/* Beat 2 — Memory */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="mb-6 flex items-center gap-2">
            <span className="font-heading text-primary/20 text-3xl leading-none font-bold">02</span>
            <div>
              <p className="font-heading font-semibold text-white group-data-[demo-light]:text-zinc-900">
                It Knows Your Business
              </p>
              <p className="text-sm text-zinc-500">
                Stores facts, learns preferences, gets smarter over time.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
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

        <Separator className="my-16 bg-zinc-800/50 group-data-[demo-light]:bg-gray-200/50" />

        {/* Beat 3 — Autonomous */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="mb-6 flex items-center gap-2">
            <span className="font-heading text-primary/20 text-3xl leading-none font-bold">03</span>
            <div>
              <p className="font-heading font-semibold text-white group-data-[demo-light]:text-zinc-900">
                Works While You Sleep
              </p>
              <p className="text-sm text-zinc-500">
                Runs routines on its own — no prompting required.
              </p>
            </div>
          </div>
          <div className="grid gap-6 md:grid-cols-2">
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

        <Separator className="my-16 bg-zinc-800/50 group-data-[demo-light]:bg-gray-200/50" />

        {/* Capabilities grid */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-16"
        >
          <p className="font-heading mb-6 font-semibold text-white group-data-[demo-light]:text-zinc-900">
            What It Can Do
          </p>
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {capabilities.map((item, i) => (
              <CapabilityItem key={item.label} item={item} index={i} />
            ))}
          </div>
        </motion.div>

        <Separator className="mb-16 bg-zinc-800/50 group-data-[demo-light]:bg-gray-200/50" />

        {/* Customization callout */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="border-primary/20 bg-primary/5 mb-8 rounded-xl border p-8"
        >
          <div className="grid items-center gap-8 md:grid-cols-2">
            <div className="space-y-4">
              <Badge className="bg-primary/20 text-primary border-primary/30">
                Built for Your Brand
              </Badge>
              <h3 className="font-heading text-2xl font-bold text-white group-data-[demo-light]:text-zinc-900">
                We Don&apos;t Give You a Generic Tool.
                <br />
                <span className="text-primary">We Build Yours.</span>
              </h3>
              <p className="text-sm leading-relaxed text-zinc-400 group-data-[demo-light]:text-zinc-600">
                Every agent is trained on your business, named after your brand, and set up to run
                your workflows. DOBI gets Roxy — named after your mascot, built for your agents,
                ready on day one.
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
                  <div className="bg-primary h-1.5 w-1.5 shrink-0 rounded-full" />
                  <p className="text-sm text-zinc-300 group-data-[demo-light]:text-zinc-700">
                    {item}
                  </p>
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
          className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-8 text-center group-data-[demo-light]:border-gray-200 group-data-[demo-light]:bg-gray-100/40"
        >
          <div className="bg-primary/10 mx-auto mb-4 flex h-12 w-12 items-center justify-center rounded-xl">
            <Gift className="text-primary h-6 w-6" />
          </div>
          <h3 className="font-heading mb-2 text-xl font-bold text-white group-data-[demo-light]:text-zinc-900">
            Free Install for Every Agent
          </h3>
          <p className="mx-auto max-w-lg text-sm text-zinc-400 group-data-[demo-light]:text-zinc-600">
            Book us for your next brokerage meeting. We come in, install it, and walk every agent
            through setup. They leave with it running.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
