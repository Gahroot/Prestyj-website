"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Sun, Moon } from "lucide-react";
import { cn } from "@/lib/utils";
import { DemoSection } from "@/components/demo/demo-section";
import { AgentDemoCard } from "@/components/demo/agent-demo-card";
import { DEMO_AGENTS } from "@/lib/demo-agents";
import { AiFeaturesSection } from "@/components/demo/ai-features-section";
import { IntegrationsSection } from "@/components/demo/integrations-section";
import { CompetitiveAdvantageSection } from "@/components/demo/competitive-advantage-section";
import { OneVideoSection } from "@/components/demo/one-video-section";
import { BatchContentSection } from "@/components/demo/batch-content-section";
import { PocketAgentSection } from "@/components/demo/pocket-agent-section";

export function DemoPageClient() {
  const [isLight, setIsLight] = useState(false);

  return (
    <main
      className={cn(
        "min-h-screen scroll-smooth group transition-colors duration-300",
        isLight ? "bg-gray-50 text-zinc-900" : "bg-[#121212] text-white",
      )}
      // presence of this attribute activates [data-demo-light] CSS var overrides
      // and group-data-[demo-light]: Tailwind variants in child components
      data-demo-light={isLight ? "" : undefined}
    >
      {/* Minimal header */}
      <header
        className={cn(
          "fixed top-0 inset-x-0 z-50 backdrop-blur-md border-b transition-colors duration-300",
          isLight
            ? "bg-white/80 border-gray-200/50"
            : "bg-[#121212]/80 border-zinc-800/50",
        )}
      >
        <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className={cn(
                "text-xl font-heading font-bold tracking-tight transition-colors duration-300",
                isLight ? "text-zinc-900" : "text-white",
              )}
            >
              PRESTYJ
            </span>
          </motion.div>

          <div className="flex items-center gap-2">
            <nav className="hidden md:flex items-center gap-1">
              {DEMO_AGENTS.map((agent) => (
                <a
                  key={agent.publicId}
                  href={`#${agent.publicId}`}
                  className={cn(
                    "px-3 py-1.5 text-sm transition-colors rounded-lg",
                    isLight
                      ? "text-zinc-500 hover:text-zinc-900 hover:bg-gray-100"
                      : "text-zinc-400 hover:text-white hover:bg-zinc-800/50",
                  )}
                >
                  {agent.company}
                </a>
              ))}
            </nav>

            {/* Light / Dark toggle */}
            <button
              type="button"
              onClick={() => setIsLight((v) => !v)}
              aria-label={isLight ? "Switch to dark mode" : "Switch to light mode"}
              className={cn(
                "flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium transition-all duration-200",
                isLight
                  ? "text-zinc-600 bg-gray-100 hover:bg-gray-200"
                  : "text-zinc-400 bg-zinc-800/50 hover:bg-zinc-700/50 hover:text-white",
              )}
            >
              {isLight ? (
                <Moon className="size-4" />
              ) : (
                <Sun className="size-4" />
              )}
              <span className="hidden sm:inline">
                {isLight ? "Dark" : "Light"}
              </span>
            </button>
          </div>
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
          <h1
            className={cn(
              "text-5xl md:text-7xl font-heading font-bold bg-clip-text text-transparent bg-gradient-to-r transition-none",
              isLight
                ? "from-zinc-900 via-zinc-700 to-zinc-500"
                : "from-white via-zinc-200 to-zinc-400",
            )}
          >
            See It in Action
          </h1>
          <p
            className={cn(
              "text-xl max-w-2xl mx-auto transition-colors duration-300",
              isLight ? "text-zinc-500" : "text-zinc-400",
            )}
          >
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

      {/* AI Features */}
      <AiFeaturesSection />

      {/* Integrations */}
      <IntegrationsSection />

      {/* Competitive Advantage */}
      <CompetitiveAdvantageSection />

      {/* 1 Video → 300 Ads */}
      <OneVideoSection />

      {/* BatchContent */}
      <BatchContentSection />

      {/* Pocket Agent */}
      <PocketAgentSection />

      {/* Footer */}
      <footer
        className={cn(
          "py-16 text-center border-t transition-colors duration-300",
          isLight ? "border-gray-200/50" : "border-zinc-800/50",
        )}
      >
        <p
          className={cn(
            "text-sm transition-colors duration-300",
            isLight ? "text-zinc-400" : "text-zinc-600",
          )}
        >
          PRESTYJ — Private Demo
        </p>
      </footer>
    </main>
  );
}
