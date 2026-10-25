import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, ArrowUpRight, FileText } from "lucide-react";
import type { ReactElement } from "react";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { EditorialPageHeader } from "@/components/layout/editorial-page-header";
import { Button } from "@/components/ui/button";
import { siteConfig } from "@/lib/site-config";
import styles from "@/components/sections/institutional/workflow-pages.module.css";

export const metadata: Metadata = {
  title: "Engagements",
  description:
    "Prestyj engagements start with one institutional real estate workflow, its source systems, review owner, and finished work product.",
  alternates: { canonical: `${siteConfig.url}/pricing` },
};

const phases = [
  {
    number: "01",
    title: "Scope the work",
    body: "Name the recurring workflow, source systems, current output, review owner, and failure modes.",
  },
  {
    number: "02",
    title: "Prove it beside the team",
    body: "Run representative records through the agent and reconcile every difference against the current process.",
  },
  {
    number: "03",
    title: "Operate and expand",
    body: "Move the proven workflow into production, monitor exceptions, and add adjacent work only when the first output holds up.",
  },
] as const;

const scopeFactors = [
  { label: "Source systems", detail: "Number and quality of source systems" },
  { label: "Volume", detail: "Frequency and volume of the workflow" },
  { label: "Business logic", detail: "Complexity of fund, lease, or routing logic" },
  { label: "Controls", detail: "Security, tenancy, and audit requirements" },
  { label: "Integrations", detail: "External integrations and release controls" },
] as const;

export default function PricingPage(): ReactElement {
  return (
    <EditorialShell>
      <main id="main-content" className="editorial-inner pb-0!">
        <section className={styles.hero}>
          <div className="editorial-rail">
            <p className={`${styles.context} min-h-11`}>Engagements</p>
            <div className={styles.heroGrid}>
              <div className={styles.intro}>
                <EditorialPageHeader title="Price the workflow, not the seat count.">
                  <p>
                    Scope depends on the work we take over, the systems involved, the controls
                    required, and the volume that runs through it. We give you the number after we
                    see the work.
                  </p>
                </EditorialPageHeader>
                <div className="editorial-actions">
                  <Button asChild>
                    <Link href="/book-demo">
                      Book a workflow demo <ArrowUpRight aria-hidden="true" />
                    </Link>
                  </Button>
                  <a href="#engagement-process" className="editorial-text-link">
                    The process <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>
              <section className={styles.paper} aria-labelledby="brief-title">
                <div className={styles.paperHeader}>
                  <h2 id="brief-title">Your first workflow</h2>
                  <FileText size={18} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div className={styles.paperBody}>
                  <h3 className={styles.paperTitle}>Bring the work. Not a spec.</h3>
                  <dl className="text-sm">
                    {[
                      { label: "The process", value: "One recurring workflow" },
                      { label: "The sources", value: "The systems your team uses" },
                      { label: "The output", value: "A current work product" },
                      { label: "The owner", value: "The person who reviews it" },
                    ].map((item) => (
                      <div
                        key={item.label}
                        className="flex flex-wrap justify-between gap-x-5 gap-y-1 border-t py-3.5"
                      >
                        <dt className="text-muted-foreground">{item.label}</dt>
                        <dd>{item.value}</dd>
                      </div>
                    ))}
                  </dl>
                </div>
                <div className={styles.review}>
                  <p className="mt-0!">Most first proofs fit inside one quarter.</p>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section id="engagement-process" aria-labelledby="phases-title" className={styles.section}>
          <div className={`editorial-rail ${styles.sectionGrid}`}>
            <div>
              <h2 id="phases-title" className={styles.sectionHeading}>
                One workflow first. Then the next.
              </h2>
              <p className={styles.sectionIntro}>
                Define the work, prove the output, and expand only when it holds up.
              </p>
            </div>
            <ol>
              {phases.map((phase) => (
                <li
                  key={phase.number}
                  className="grid grid-cols-[1.5rem_minmax(0,1fr)] gap-5 border-b py-7 first:pt-0"
                >
                  <span
                    aria-hidden="true"
                    className="text-muted-foreground pt-1 text-xs tabular-nums"
                  >
                    {phase.number}
                  </span>
                  <div>
                    <h3 className="text-2xl">{phase.title}</h3>
                    <p className="text-muted-foreground mt-3 text-sm leading-7">{phase.body}</p>
                  </div>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="scope-title" className={`${styles.section} bg-muted/40`}>
          <div className={`editorial-rail ${styles.sectionGrid}`}>
            <div>
              <h2 id="scope-title" className={styles.sectionHeading}>
                What shapes the engagement.
              </h2>
              <p className={styles.sectionIntro}>
                The scope follows your operating requirements, not a software tier.
              </p>
            </div>
            <dl>
              {scopeFactors.map((factor) => (
                <div key={factor.label} className={styles.scopeRow}>
                  <dt className="font-medium">{factor.label}</dt>
                  <dd>{factor.detail}</dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <section aria-labelledby="fit-title" className={styles.section}>
          <div className={`editorial-rail ${styles.sectionGrid}`}>
            <h2 id="fit-title" className={styles.sectionHeading}>
              What we do not sell.
            </h2>
            <p className="text-muted-foreground text-base leading-8">
              No generic software tier, no per-seat training program, and no promise that every
              workflow belongs in AI. If the process is not stable enough to define or valuable
              enough to operate, we will say so.
            </p>
          </div>
        </section>

        <section className={`${styles.section} bg-muted/40`} aria-labelledby="next-step-title">
          <div className={`editorial-rail ${styles.closing}`}>
            <div>
              <h2 id="next-step-title" className={styles.sectionHeading}>
                Bring the workflow.
              </h2>
              <p className={styles.sectionIntro}>We will scope the work.</p>
            </div>
            <Button size="lg" asChild>
              <Link href="/book-demo">
                Book a workflow demo <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </EditorialShell>
  );
}
