"use client";

import { motion } from "framer-motion";
import {
  Database,
  FileText,
  Calendar,
  Zap,
  Globe,
  Phone,
  LayoutGrid,
  Plug,
  CheckCircle,
  type LucideIcon,
} from "lucide-react";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";

// ─── Types ────────────────────────────────────────────────────────────────────

interface Integration {
  name: string;
  category: string;
  icon: LucideIcon;
  live: boolean;
}

// ─── Data ─────────────────────────────────────────────────────────────────────

const integrations: Integration[] = [
  {
    name: "Follow Up Boss",
    category: "CRM",
    icon: Database,
    live: true,
  },
  {
    name: "Dotloop",
    category: "Transactions",
    icon: FileText,
    live: false,
  },
  {
    name: "Skyslope",
    category: "Transactions",
    icon: FileText,
    live: false,
  },
  {
    name: "Google Calendar",
    category: "Scheduling",
    icon: Calendar,
    live: false,
  },
  {
    name: "GoHighLevel",
    category: "CRM",
    icon: LayoutGrid,
    live: false,
  },
  {
    name: "HubSpot",
    category: "CRM",
    icon: Database,
    live: false,
  },
  {
    name: "Zapier",
    category: "Automation",
    icon: Zap,
    live: false,
  },
  {
    name: "Twilio",
    category: "Messaging",
    icon: Phone,
    live: false,
  },
  {
    name: "Any REST API",
    category: "Custom",
    icon: Globe,
    live: false,
  },
];

const liveIntegrations = integrations.filter((i) => i.live);
const availableIntegrations = integrations.filter((i) => !i.live);

// ─── Sub-components ───────────────────────────────────────────────────────────

function LiveIntegrationCard({ integration }: { integration: Integration }) {
  return (
    <div className="flex items-center gap-3 px-5 py-4 rounded-xl border border-primary/30 bg-primary/5">
      <div className="h-9 w-9 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
        <integration.icon className="h-4 w-4 text-primary" />
      </div>
      <div className="flex-1 min-w-0">
        <p className="text-white font-heading font-semibold text-sm">{integration.name}</p>
        <p className="text-zinc-500 text-xs">{integration.category}</p>
      </div>
      <div className="flex items-center gap-1.5 shrink-0">
        <CheckCircle className="h-4 w-4 text-primary" />
        <span className="text-primary text-xs font-medium">Live</span>
      </div>
    </div>
  );
}

function AvailableIntegrationPill({ integration }: { integration: Integration }) {
  return (
    <div className="flex items-center gap-2 px-4 py-2.5 rounded-lg border border-zinc-800 bg-zinc-900/60">
      <integration.icon className="h-4 w-4 text-zinc-500 shrink-0" />
      <div>
        <p className="text-zinc-300 text-sm font-medium leading-none">{integration.name}</p>
        <p className="text-zinc-600 text-xs mt-0.5">{integration.category}</p>
      </div>
    </div>
  );
}

// ─── Section ──────────────────────────────────────────────────────────────────

export function IntegrationsSection() {
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
            Tool Access
          </span>
          <h2 className="text-3xl sm:text-4xl font-heading font-bold text-white mb-4">
            It Doesn&apos;t Just Talk.{" "}
            <span className="text-primary">It Works Inside Your Tools.</span>
          </h2>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            The agents have real tool access — they can read, write, and trigger actions inside your existing platforms. Not a chatbot. An actual worker inside your stack.
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
          <div className="flex items-center gap-2 mb-4">
            <Plug className="h-4 w-4 text-primary" />
            <p className="text-white font-heading font-semibold text-sm">Connected Now</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
            {liveIntegrations.map((integration) => (
              <LiveIntegrationCard key={integration.name} integration={integration} />
            ))}
          </div>
        </motion.div>

        <Separator className="bg-zinc-800/50 my-8" />

        {/* Available integrations */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="mb-10"
        >
          <div className="flex items-center gap-2 mb-4">
            <Globe className="h-4 w-4 text-zinc-500" />
            <p className="text-zinc-400 font-heading font-semibold text-sm">Available on Request</p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-3">
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
          className="rounded-xl border border-zinc-800 bg-zinc-900/40 p-6 flex flex-col sm:flex-row items-start sm:items-center gap-4"
        >
          <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center shrink-0">
            <Plug className="h-5 w-5 text-primary" />
          </div>
          <div className="flex-1">
            <p className="text-white font-heading font-semibold mb-1">
              Using something we haven&apos;t listed?
            </p>
            <p className="text-zinc-400 text-sm leading-relaxed">
              If it has an API, the agent can use it. We scope and build integrations as part of onboarding — your stack doesn&apos;t need to change to work with ours.
            </p>
          </div>
          <Badge variant="outline" className="border-zinc-700 text-zinc-400 whitespace-nowrap shrink-0">
            Any platform
          </Badge>
        </motion.div>

      </div>
    </section>
  );
}
