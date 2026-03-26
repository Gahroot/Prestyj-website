"use client";

import { motion } from "framer-motion";
import { DemoSection } from "@/components/demo/demo-section";
import { AgentDemoCard } from "@/components/demo/agent-demo-card";
import { DEMO_AGENTS } from "@/lib/demo-agents";
import { CompetitiveAdvantageSection } from "@/components/demo/competitive-advantage-section";
import { OneVideoSection } from "@/components/demo/one-video-section";

export function DemoPageClient() {
  return (
    <main className="min-h-screen bg-[#121212] text-white scroll-smooth">
      {/* Minimal header */}
      <header className="fixed top-0 inset-x-0 z-50 bg-[#121212]/80 backdrop-blur-md border-b border-zinc-800/50">
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span className="text-xl font-heading font-bold tracking-tight text-white">
              PRESTYJ
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-1">
            {DEMO_AGENTS.map((agent) => (
              <a
                key={agent.publicId}
                href={`#${agent.publicId}`}
                className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-zinc-800/50"
              >
                {agent.company}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-[50vh] flex items-center justify-center pt-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            See It in Action
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Real businesses. Real lead experiences. Try each one yourself.
          </p>
        </motion.div>
      </section>

      {/* Agent sections */}
      {DEMO_AGENTS.map((agent, i) => (
        <DemoSection
          key={agent.publicId}
          id={agent.publicId}
          number={String(i + 1).padStart(2, "0")}
          title={agent.sectionTitle}
          description={agent.sectionDescription}
          reverse={i % 2 !== 0}
        >
          <AgentDemoCard agent={agent} />
        </DemoSection>
      ))}

      {/* Competitive Advantage */}
      <CompetitiveAdvantageSection />

      {/* 1 Video → 300 Ads */}
      <OneVideoSection />

      {/* Footer */}
      <footer className="py-16 text-center border-t border-zinc-800/50">
        <p className="text-zinc-600 text-sm">
          PRESTYJ — Private Demo
        </p>
      </footer>
    </main>
  );
}
