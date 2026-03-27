"use client";

import { motion } from "framer-motion";
import {
  Zap,
  PhoneOutgoing,
  PhoneIncoming,
  MessageSquare,
  CalendarCheck,
  Bell,
  RotateCcw,
  GitBranch,
  ClipboardList,
  UserCheck,
  Cake,
  Sparkles,
  type LucideIcon,
} from "lucide-react";
import { Separator } from "@/components/ui/separator";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Feature {
  icon: LucideIcon;
  title: string;
  description: string;
}

interface Differentiator {
  icon: LucideIcon;
  title: string;
  description: string;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const features: Feature[] = [
  {
    icon: Zap,
    title: "Instant Lead Response",
    description: "Responds to new leads in under 60 seconds — day or night, no human needed.",
  },
  {
    icon: PhoneOutgoing,
    title: "Outbound Calls",
    description: "Places calls on your behalf to follow up, qualify, and move leads forward.",
  },
  {
    icon: PhoneIncoming,
    title: "Inbound Calls",
    description: "Answers inbound calls, handles questions, and routes hot leads to you.",
  },
  {
    icon: MessageSquare,
    title: "SMS & Texting",
    description: "Sends and receives texts naturally — feels like a real team member, not a bot.",
  },
  {
    icon: CalendarCheck,
    title: "Appointment Booking",
    description: "Books qualified leads directly on your calendar without any back-and-forth.",
  },
  {
    icon: Bell,
    title: "Appointment Reminders",
    description: "Automatically reminds leads before their appointment to cut no-shows.",
  },
  {
    icon: RotateCcw,
    title: "Dead Lead Reactivation",
    description: "Re-engages cold leads from your database with personalized outreach that actually gets replies.",
  },
  {
    icon: GitBranch,
    title: "Drip Campaigns",
    description: "Runs long-term nurture sequences that keep your brand top of mind until they're ready.",
  },
  {
    icon: ClipboardList,
    title: "CRM Updates",
    description: "Logs every call, saves notes, and keeps your CRM clean without anyone touching it.",
  },
];

const differentiators: Differentiator[] = [
  {
    icon: UserCheck,
    title: "Human-in-the-Loop Nudges",
    description:
      "When the AI detects a lead is ready for a real conversation — or if a contact only has text replies enabled — it alerts your team directly. You get a push notification telling you exactly who to call, when, and why. The AI does the groundwork; you close the deal.",
  },
  {
    icon: Cake,
    title: "Birthday & Milestone Reminders",
    description:
      "Stores key dates from every contact and reaches out automatically at the right moment — birthdays, anniversaries, lease renewals, follow-up windows. Personal enough to feel human. Automated enough to run itself.",
  },
  {
    icon: Sparkles,
    title: "Deep Personalization",
    description:
      "Every message is built from what's known about the contact — their name, history, preferences, past conversations, and timeline. No templates that feel like templates. Every touchpoint feels like it was written just for them.",
  },
];

// ─── Sub-components ───────────────────────────────────────────────────────────

function FeatureItem({ feature, index }: { feature: Feature; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className="flex items-start gap-4"
    >
      <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
        <feature.icon className="h-4 w-4 text-primary" />
      </div>
      <div>
        <p className="text-white group-data-[demo-light]:text-zinc-900 font-heading font-semibold text-sm">{feature.title}</p>
        <p className="text-zinc-400 group-data-[demo-light]:text-zinc-600 text-sm mt-0.5 leading-relaxed">{feature.description}</p>
      </div>
    </motion.div>
  );
}

function DifferentiatorItem({
  item,
  index,
}: {
  item: Differentiator;
  index: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="flex flex-col gap-4 p-6 rounded-xl border border-primary/20 bg-primary/5"
    >
      <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center">
        <item.icon className="h-5 w-5 text-primary" />
      </div>
      <div>
        <p className="text-white group-data-[demo-light]:text-zinc-900 font-heading font-semibold text-lg mb-2">{item.title}</p>
        <p className="text-zinc-400 group-data-[demo-light]:text-zinc-600 text-sm leading-relaxed">{item.description}</p>
      </div>
    </motion.div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function AiFeaturesSection() {
  return (
    <section className="py-24 border-t border-zinc-800/50 group-data-[demo-light]:border-gray-200/50">
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
            Everything It Can Do
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white group-data-[demo-light]:text-zinc-900 mb-4">
            One AI. Every Touchpoint.
          </h2>
          <p className="text-zinc-400 group-data-[demo-light]:text-zinc-600 text-lg max-w-2xl mx-auto">
            From the first reply to the closed deal — every step of the follow-up process, handled.
          </p>
        </motion.div>

        {/* Part 1 — Feature list */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-x-10 gap-y-8 mb-16">
          {features.map((feature, i) => (
            <FeatureItem key={feature.title} feature={feature} index={i} />
          ))}
        </div>

        <Separator className="bg-zinc-800/50 group-data-[demo-light]:bg-gray-200/50 mb-16" />

        {/* Part 2 — Differentiators */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-sm font-medium rounded-full mb-4">
            What Makes It Different
          </span>
          <h3 className="text-2xl sm:text-3xl font-heading font-bold text-white group-data-[demo-light]:text-zinc-900 mb-3">
            Built for the Way Real Teams Actually Work
          </h3>
          <p className="text-zinc-400 group-data-[demo-light]:text-zinc-600 max-w-2xl mx-auto">
            These aren&apos;t features you&apos;ll find in off-the-shelf tools. They&apos;re the reason clients don&apos;t leave.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {differentiators.map((item, i) => (
            <DifferentiatorItem key={item.title} item={item} index={i} />
          ))}
        </div>

        {/* Open-ended callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <p className="text-zinc-500 text-sm">
            Don&apos;t see what you need?{" "}
            <span className="text-zinc-300 group-data-[demo-light]:text-zinc-700 font-medium">It can probably do that too.</span>{" "}
            The system is built to be extended — if your workflow needs it, we can add it.
          </p>
        </motion.div>

      </div>
    </section>
  );
}
