"use client";

import { motion } from "framer-motion";
import { AgentDemoCard } from "@/components/demo/agent-demo-card";
import { DEMO_AGENTS } from "@/lib/demo-agents";

export function MultiAgentDemo() {
  return (
    <div className="mx-auto w-full max-w-7xl">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6 }}
        className="mb-12 space-y-4"
      >
        <span className="font-mono text-sm tracking-widest text-[#7058e3] uppercase">06</span>
        <h2 className="font-heading text-3xl leading-tight font-bold text-white md:text-4xl lg:text-5xl">
          Tell us about your project. Get a personalized AI call.
        </h2>
        <p className="max-w-2xl text-lg leading-relaxed text-zinc-400 md:text-xl">
          Each card is a different AI agent for a real company. Answer a few quick questions, and
          the AI will call you using that context — just like a real lead would experience.
        </p>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-100px" }}
        transition={{ duration: 0.6, delay: 0.15 }}
        className="grid grid-cols-1 gap-6 md:grid-cols-2"
      >
        {DEMO_AGENTS.map((agent) => (
          <AgentDemoCard key={agent.publicId} agent={agent} />
        ))}
      </motion.div>
    </div>
  );
}
