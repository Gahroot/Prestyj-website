import type { Metadata } from "next";

import Link from "next/link";
import { EditorialShell } from "@/components/layout/editorial-shell";
import { EditorialPageHeader } from "@/components/layout/editorial-page-header";
import { AgentCallbackForm } from "@/components/demo/agent-callback-form";

export const metadata: Metadata = {
  title: "Live brokerage origination agent",
  description:
    "Talk to a live Prestyj voice agent and see how a commercial brokerage inquiry can be answered, qualified, recorded, and handed off.",
  robots: { index: false, follow: true },
};

export default function DemoPage() {
  return (
    <EditorialShell>
      <main id="main-content" className="editorial-rail editorial-inner">
        <div className="editorial-split py-10 sm:py-16">
          <div>
            <EditorialPageHeader title="Talk to the agent.">
              <p>
                A Prestyj AI agent will call your phone for a short demo of a commercial brokerage
                inquiry.
              </p>
            </EditorialPageHeader>
            <Link href="/book-demo" className="editorial-text-link underline">
              Book a workflow demo with the team
            </Link>
          </div>
          <div className="w-full max-w-xl">
            <AgentCallbackForm />
          </div>
        </div>
      </main>
    </EditorialShell>
  );
}
