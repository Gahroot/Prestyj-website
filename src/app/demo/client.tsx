"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Sun, Moon, ArrowRight } from "lucide-react";
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
        "group min-h-screen scroll-smooth transition-colors duration-300",
        isLight ? "bg-gray-50 text-zinc-900" : "bg-[#121212] text-white",
      )}
      // presence of this attribute activates [data-demo-light] CSS var overrides
      // and group-data-[demo-light]: Tailwind variants in child components
      data-demo-light={isLight ? "" : undefined}
    >
      {/* Minimal header */}
      <header
        className={cn(
          "fixed inset-x-0 top-0 z-50 border-b backdrop-blur-md transition-colors duration-300",
          isLight ? "border-gray-200/50 bg-white/80" : "border-zinc-800/50 bg-[#121212]/80",
        )}
      >
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <span
              className={cn(
                "font-heading text-xl font-bold tracking-tight transition-colors duration-300",
                isLight ? "text-zinc-900" : "text-white",
              )}
            >
              PRESTYJ
            </span>
          </motion.div>

          <div className="flex items-center gap-2">
            <nav className="hidden items-center gap-1 md:flex">
              {DEMO_AGENTS.map((agent) => (
                <a
                  key={agent.publicId}
                  href={`#${agent.publicId}`}
                  className={cn(
                    "rounded-lg px-3 py-1.5 text-sm transition-colors",
                    isLight
                      ? "text-zinc-500 hover:bg-gray-100 hover:text-zinc-900"
                      : "text-zinc-400 hover:bg-zinc-800/50 hover:text-white",
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
                "flex items-center gap-1.5 rounded-lg px-3 py-1.5 text-sm font-medium transition-all duration-200",
                isLight
                  ? "bg-gray-100 text-zinc-600 hover:bg-gray-200"
                  : "bg-zinc-800/50 text-zinc-400 hover:bg-zinc-700/50 hover:text-white",
              )}
            >
              {isLight ? <Moon className="size-4" /> : <Sun className="size-4" />}
              <span className="hidden sm:inline">{isLight ? "Dark" : "Light"}</span>
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="flex min-h-[60vh] items-center justify-center px-6 pt-24 pb-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="mx-auto max-w-3xl space-y-8 text-center"
        >
          <h1
            className={cn(
              "font-heading bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent transition-none md:text-7xl",
              isLight
                ? "from-zinc-900 via-zinc-700 to-zinc-500"
                : "from-white via-zinc-200 to-zinc-400",
            )}
          >
            Try Prestyj&apos;s AI agent — live.
          </h1>
          <p
            className={cn(
              "mx-auto max-w-2xl text-xl transition-colors duration-300",
              isLight ? "text-zinc-500" : "text-zinc-400",
            )}
          >
            Test our AI the way a real lead would. Pick any business below, then:
          </p>

          {/* Instructions */}
          <ol
            className={cn(
              "mx-auto grid max-w-2xl gap-3 text-left sm:grid-cols-3",
              isLight ? "text-zinc-700" : "text-zinc-300",
            )}
          >
            {[
              { n: 1, label: "Call the number" },
              { n: 2, label: "Text the number" },
              { n: 3, label: "Fill out the form" },
            ].map((step) => (
              <li
                key={step.n}
                className={cn(
                  "flex items-center gap-3 rounded-lg border px-4 py-3 transition-colors duration-300",
                  isLight
                    ? "border-gray-200 bg-white"
                    : "border-zinc-800 bg-zinc-900/40",
                )}
              >
                <span
                  className={cn(
                    "flex size-7 shrink-0 items-center justify-center rounded-full text-sm font-bold",
                    isLight ? "bg-zinc-900 text-white" : "bg-white text-zinc-900",
                  )}
                >
                  {step.n}
                </span>
                <span className="text-sm font-medium">{step.label}</span>
              </li>
            ))}
          </ol>
          <p
            className={cn(
              "text-sm transition-colors duration-300",
              isLight ? "text-zinc-500" : "text-zinc-400",
            )}
          >
            Our AI will respond in seconds.
          </p>

          {/* CTAs */}
          <div className="flex flex-col items-center justify-center gap-3 pt-2 sm:flex-row">
            <Link
              href="/book-demo"
              className={cn(
                "inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg px-6 text-base font-bold transition-colors sm:w-auto",
                isLight
                  ? "bg-zinc-900 text-white hover:bg-zinc-800"
                  : "bg-white text-zinc-900 hover:bg-zinc-200",
              )}
            >
              Book a Demo
              <ArrowRight className="size-4" />
            </Link>
            <Link
              href="/pricing"
              className={cn(
                "inline-flex h-12 w-full items-center justify-center rounded-lg border px-6 text-base font-bold transition-colors sm:w-auto",
                isLight
                  ? "border-zinc-300 text-zinc-900 hover:bg-gray-100"
                  : "border-zinc-700 text-white hover:bg-zinc-800/50",
              )}
            >
              See Pricing
            </Link>
          </div>

          {/* Disclaimer */}
          <p
            className={cn(
              "mx-auto max-w-xl pt-2 text-xs transition-colors duration-300",
              isLight ? "text-zinc-400" : "text-zinc-500",
            )}
          >
            Demo runs in real-time. By interacting, you agree to receive a single follow-up
            message.
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
          "border-t py-16 text-center transition-colors duration-300",
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
