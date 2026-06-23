import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowRight, Megaphone, Sparkles, Workflow } from "lucide-react";

import { Badge } from "@/components/ui/badge";
import { cn } from "@/lib/utils";

const capabilities = [
  {
    title: "AI Agents",
    href: "/done-for-you-ai-agents",
    description:
      "Voice agents, receptionists, sales follow-up, and marketing agents that answer calls, respond to leads, and book appointments — 24/7.",
    outcome: "Replace manual handoffs with a system that runs.",
    icon: Workflow,
  },
  {
    title: "Batch Video Ads",
    href: "/batch-video-ads",
    description:
      "One recording turned into hundreds of vertical ad variants for paid-social testing.",
    outcome: "Test hooks, angles, and CTAs at real volume.",
    icon: Sparkles,
  },
  {
    title: "Managed Ad Spend",
    href: "/pricing",
    description:
      "Google and Meta campaigns built, managed, and optimized for you.",
    outcome: "Leads flowing within 7-10 business days.",
    icon: Megaphone,
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
            One system. AI runs your marketing and sales.
          </h2>
          <p className="text-muted-foreground mt-4 text-lg">
            Start with the work your team repeats every day: calls, lead response,
            follow-up, and ad creative.
          </p>
        </div>

        <div className="mt-14 grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {capabilities.map((capability) => {
            const Icon = capability.icon;
            return (
              <Link
                key={capability.href}
                href={capability.href}
                className={cn(
                  "group bg-card/60 hover:border-primary/40 block rounded-3xl border p-6 transition-all hover:-translate-y-1 hover:shadow-xl",
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
                  See details
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
