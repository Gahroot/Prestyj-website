"use client";

import { motion } from "framer-motion";
import { DemoSection } from "@/components/demo/demo-section";
import { PhoneDemo } from "@/components/demo/phone-demo";
import { LeadForm } from "@/components/demo/lead-form";
import { MultiAgentDemo } from "@/components/demo/multi-agent-demo";

const EMBED_BASE = "https://frontend-navy-five-92.vercel.app/embed/ag_AlyxDemo";

const NAV_ITEMS = [
  { id: "voice", label: "Voice" },
  { id: "chat", label: "Chat" },
  { id: "call", label: "Call" },
  { id: "text", label: "Text" },
  { id: "lead-form", label: "Lead Form" },
  { id: "multi-agent", label: "Live Agents" },
];

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
              PRESTIGE
            </span>
          </motion.div>

          <nav className="hidden md:flex items-center gap-1">
            {NAV_ITEMS.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="px-3 py-1.5 text-sm text-zinc-400 hover:text-white transition-colors rounded-lg hover:bg-zinc-800/50"
              >
                {item.label}
              </a>
            ))}
          </nav>
        </div>
      </header>

      {/* Hero */}
      <section className="min-h-[60vh] flex items-center justify-center pt-20 px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          className="text-center space-y-4"
        >
          <h1 className="text-5xl md:text-7xl font-heading font-bold bg-gradient-to-r from-white via-zinc-200 to-zinc-400 bg-clip-text text-transparent">
            Experience It Yourself
          </h1>
          <p className="text-xl text-zinc-400 max-w-2xl mx-auto">
            Five ways to interact with our AI — all live, all real, all right now.
          </p>
          <div className="flex items-center justify-center gap-2 pt-4">
            <span className="size-2 rounded-full bg-emerald-400 animate-pulse" />
            <span className="text-sm text-emerald-400 font-medium">Live system</span>
          </div>
        </motion.div>
      </section>

      {/* Section 1: Voice Agent */}
      <DemoSection
        id="voice"
        number="01"
        title="Talk to our AI — right now, in your browser"
        description="Click the microphone and have a real conversation. Alyx can answer questions, search the web, and book appointments — all by voice. Type a message or tap the mic."
      >
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-purple-500/10 bg-zinc-900">
          <iframe
            src={`${EMBED_BASE}/fullpage?theme=dark`}
            allow="microphone"
            title="Voice AI Agent"
            className="w-full h-[500px] md:h-[600px]"
          />
        </div>
      </DemoSection>

      {/* Section 2: Chat Agent */}
      <DemoSection
        id="chat"
        number="02"
        title="Prefer to type? Same AI, text mode"
        description="Full chat interface — ask anything. Watch how it handles conversation context, follow-ups, and complex questions."
        reverse
      >
        <div className="relative rounded-2xl overflow-hidden border border-zinc-800 shadow-2xl shadow-purple-500/10 bg-zinc-900">
          <iframe
            src={`${EMBED_BASE}/fullpage?theme=dark`}
            allow="microphone"
            title="Chat AI Agent"
            className="w-full h-[500px] md:h-[600px]"
          />
        </div>
      </DemoSection>

      {/* Section 3: Call Me */}
      <DemoSection
        id="call"
        number="03"
        title="Enter your number. Phone rings in 10 seconds."
        description="Our AI calls you directly. Pick up and have a conversation — just like your customers would experience."
      >
        <PhoneDemo mode="call" />
      </DemoSection>

      {/* Section 4: Text Me */}
      <DemoSection
        id="text"
        number="04"
        title="Get a text from our AI. Text it back."
        description="Instant SMS from the AI. Reply and have a full text conversation — speed to lead, automated."
        reverse
      >
        <PhoneDemo mode="text" />
      </DemoSection>

      {/* Section 5: Lead Form → Instant Callback */}
      <DemoSection
        id="lead-form"
        number="05"
        title="A lead fills out a form. Watch what happens next."
        description="Simulate a website lead submission. Enter a name and phone number — the AI calls back instantly. This is speed to lead."
      >
        <LeadForm />
      </DemoSection>

      {/* Section 6: Multi-Agent Demo */}
      <section id="multi-agent" className="py-16 px-6 md:px-12 lg:px-20">
        <MultiAgentDemo />
      </section>

      {/* Footer */}
      <footer className="py-16 text-center">
        <p className="text-zinc-600 text-sm">
          Prestige AI — Private Demo
        </p>
      </footer>
    </main>
  );
}
