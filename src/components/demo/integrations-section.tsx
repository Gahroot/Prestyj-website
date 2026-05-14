"use client";

import { motion } from "framer-motion";
import { Globe, Plug, CheckCircle, type LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  integrationCategories,
  getLiveIntegrations,
  getAvailableIntegrations,
  type Integration as CanonicalIntegration,
} from "@/lib/integrations";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Integration {
  name: string;
  category: string;
  icon: LucideIcon;
  live: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const categoryById = new Map(integrationCategories.map((c) => [c.id, c]));

function toDisplay(integration: CanonicalIntegration): Integration {
  const category = categoryById.get(integration.category);
  return {
    name: integration.name,
    category: category?.label ?? integration.category,
    icon: category?.icon ?? Globe,
    live: integration.status === "live",
  };
}

const liveIntegrations: Integration[] = getLiveIntegrations().map(toDisplay);
const availableIntegrations: Integration[] = getAvailableIntegrations().map(toDisplay);

// ─── Sub-components ───────────────────────────────────────────────────────────

function LiveIntegrationCard({ integration }: { integration: Integration }) {
  return (
    <div className="border-primary/30 bg-primary/5 flex items-center gap-3 rounded-xl border px-5 py-4">
      <div className="bg-primary/10 flex h-9 w-9 shrink-0 items-center justify-center rounded-lg">
        <integration.icon className="text-primary h-4 w-4" />
      </div>
      <div className="min-w-0 flex-1">
        <p className="font-heading text-sm font-semibold text-white group-data-[demo-light]:text-zinc-900">
          {integration.name}
        </p>
        <p className="text-xs text-zinc-500">{integration.category}</p>
      </div>
      <div className="flex shrink-0 items-center gap-1.5">
        <CheckCircle className="text-primary h-4 w-4" />
        <span className="text-primary text-xs font-medium">Live</span>
      </div>
    </div>
  );
}

function AvailableIntegrationPill({ integration }: { integration: Integration }) {
  return (
    <div className="flex items-center gap-2 rounded-lg border border-zinc-800 bg-zinc-900/60 px-4 py-2.5 group-data-[demo-light]:border-gray-200 group-data-[demo-light]:bg-gray-100/60">
      <integration.icon className="h-4 w-4 shrink-0 text-zinc-500" />
      <div>
        <p className="text-sm leading-none font-medium text-zinc-300 group-data-[demo-light]:text-zinc-700">
          {integration.name}
        </p>
        <p className="mt-0.5 text-xs text-zinc-600 group-data-[demo-light]:text-zinc-400">
          {integration.category}
        </p>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function IntegrationsSection() {
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
            Tool Access
          </span>
          <h2 className="font-heading mb-4 text-3xl font-bold text-white group-data-[demo-light]:text-zinc-900 sm:text-4xl">
            It Doesn&apos;t Just Talk.{" "}
            <span className="text-primary">It Works Inside Your Tools.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-lg text-zinc-400 group-data-[demo-light]:text-zinc-600">
            The agents have real tool access — they can read, write, and trigger actions inside your
            existing platforms. Not a chatbot. An actual worker inside your stack.
          </p>
        </motion.div>

        {/* Live integrations */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="mb-4"
        >
          <div className="mb-4 flex items-center gap-2">
            <Plug className="text-primary h-4 w-4" />
            <p className="font-heading text-sm font-semibold text-white group-data-[demo-light]:text-zinc-900">
              Connected Now
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {liveIntegrations.map((integration) => (
              <LiveIntegrationCard key={integration.name} integration={integration} />
            ))}
          </div>
        </motion.div>

        <Separator className="my-8 bg-zinc-800/50 group-data-[demo-light]:bg-gray-200/50" />

        {/* Available integrations */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="mb-4 flex items-center gap-2">
            <Globe className="h-4 w-4 text-zinc-500" />
            <p className="font-heading text-sm font-semibold text-zinc-400 group-data-[demo-light]:text-zinc-600">
              Available on Request
            </p>
          </div>
          <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {availableIntegrations.map((integration, i) => (
              <motion.div
                key={integration.name}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.3, delay: i * 0.05 }}
              >
                <AvailableIntegrationPill integration={integration} />
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Callout */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="flex flex-col items-start gap-4 rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 group-data-[demo-light]:border-gray-200 group-data-[demo-light]:bg-gray-100/40 sm:flex-row sm:items-center"
        >
          <div className="bg-primary/10 flex h-10 w-10 shrink-0 items-center justify-center rounded-lg">
            <Plug className="text-primary h-5 w-5" />
          </div>
          <div className="flex-1">
            <p className="font-heading mb-1 font-semibold text-white group-data-[demo-light]:text-zinc-900">
              Using something we haven&apos;t listed?
            </p>
            <p className="text-sm leading-relaxed text-zinc-400 group-data-[demo-light]:text-zinc-600">
              If it has an API, the agent can use it. We scope and build integrations as part of
              onboarding — your stack doesn&apos;t need to change to work with ours.
            </p>
          </div>
          <Badge
            variant="outline"
            className="shrink-0 border-zinc-700 whitespace-nowrap text-zinc-400 group-data-[demo-light]:border-gray-300 group-data-[demo-light]:text-zinc-600"
          >
            Any platform
          </Badge>
        </motion.div>
      </div>
    </section>
  );
}
