"use client";

import { motion } from "framer-motion";
import { AgentDemoCard } from "@/components/demo/agent-demo-card";
import { DEMO_AGENTS } from "@/lib/demo-agents";

export function MultiAgentDemo() {
  return (
    <div className="w-full max-w-7xl mx-auto">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="space-y-4 mb-12"
      >
        <span className="text-sm font-mono tracking-widest text-[#7058e3] uppercase">
          06
        </span>
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-white leading-tight">
          Tell us about your project. Get a personalized AI call.
        </h2>
        <p className="text-lg md:text-xl text-zinc-400 leading-relaxed max-w-2xl">
          Each card is a different AI agent for a real company. Answer a few
          quick questions, and the AI will call you using that context — just
          like a real lead would experience.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="grid grid-cols-1 md:grid-cols-2 gap-6"
      >
        {DEMO_AGENTS.map((agent) => (
          <AgentDemoCard key={agent.publicId} agent={agent} />
        ))}
      </motion.div>
    </div>
  );
}
