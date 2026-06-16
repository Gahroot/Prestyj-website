import Link from "next/link";
import type { ReactElement } from "react";
import {
  ArrowRight,
  Bot,
  FileText,
  Megaphone,
  Mic2,
  PhoneIncoming,
  Sparkles,
  Workflow,
} from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    title: "Done-for-you AI agents",
    href: "/done-for-you-ai-agents",
    description:
      "Custom agents, automations, dashboards, and workflows built around how your team already operates.",
    outcome: "Turn repeated work into reliable systems.",
    icon: Workflow,
  },
  {
    title: "AI voice agents",
    href: "/ai-voice-agents",
    description:
      "Browser and phone agents that qualify callers, answer questions, route requests, and book next steps.",
    outcome: "Make every live conversation instantly actionable.",
    icon: Mic2,
  },
  {
    title: "AI receptionist",
    href: "/ai-receptionist",
    description:
      "After-hours intake, missed-call recovery, FAQs, scheduling, and clean escalation to your human team.",
    outcome: "Stop losing leads to voicemail and slow callbacks.",
    icon: PhoneIncoming,
  },
  {
    title: "AI sales agents",
    href: "/ai-sales-agents",
    description:
      "Speed-to-lead, qualification, reminders, objection handling, follow-up, and CRM handoff.",
    outcome: "Follow up while intent is still hot.",
    icon: Bot,
  },
  {
    title: "AI marketing agents",
    href: "/ai-marketing-agents",
    description:
      "Campaign workflows, lead magnets, content repurposing, creative testing, and performance loops.",
    outcome: "Keep campaigns moving without manual drag.",
    icon: Megaphone,
  },
  {
    title: "AI content department",
    href: "/ai-content-department",
    description:
      "Planning, drafting, repurposing, publishing support, and feedback from what the market responds to.",
    outcome: "Turn one idea into a consistent content engine.",
    icon: FileText,
  },
  {
    title: "Batch video ads",
    href: "/batch-video-ads",
    description:
      "One recording or source asset turned into hundreds of vertical ad variants for paid-social testing.",
    outcome: "Test hooks, angles, and CTAs at real volume.",
    icon: Sparkles,
  },
] as const;

export function AiCapabilitiesSection(): ReactElement {
  return (
    <section id="capabilities" className="py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Badge variant="outline" className="border-primary/40 text-primary">
            What we build
          </Badge>
          <h2 className="font-heading text-foreground mt-5 text-3xl font-bold tracking-tight sm:text-4xl">
            AI systems mapped to real business bottlenecks.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Start with the work that repeats every day: calls, lead response,
            follow-up, content, reporting, handoffs, and internal coordination.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability, index) => {
            const Icon = capability.icon;
            return (
              <Link
                key={capability.href}
                href={capability.href}
                className={cn(
                  "group bg-card/60 hover:border-primary/40 block rounded-3xl border p-6 transition-all hover:-translate-y-1 hover:shadow-xl",
                  index === 0 ? "lg:col-span-2" : null,
                )}
              >
                <div className="bg-primary/10 text-primary grid size-12 place-items-center rounded-2xl">
                  <Icon className="h-5 w-5" />
                </div>
                <h3 className="text-foreground mt-6 text-xl font-semibold">
                  {capability.title}
                </h3>
                <p className="text-muted-foreground mt-3 leading-7">
                  {capability.description}
                </p>
                <p className="text-foreground mt-5 text-sm font-semibold">
                  {capability.outcome}
                </p>
                <div className="text-primary mt-6 flex items-center gap-2 text-sm font-semibold">
                  Explore offer
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            );
          })}
        </div>
      </div>
    </section>
  );
}
