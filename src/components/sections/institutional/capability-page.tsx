import Link from "next/link";
import type { ReactElement } from "react";
import { ArrowRight, ArrowUpRight, ChevronRight, ShieldCheck } from "lucide-react";

import { EditorialShell } from "@/components/layout/editorial-shell";
import { EditorialPageHeader } from "@/components/layout/editorial-page-header";
import { Button } from "@/components/ui/button";
import { bookDemoHref, ctaDataProps } from "@/lib/attribution/cta";
import type { Capability } from "@/lib/institutional/capabilities";
import { getCapabilityArticles } from "@/lib/institutional/research";
import styles from "./workflow-pages.module.css";

export function CapabilityPage({ capability }: { capability: Capability }): ReactElement {
  const Icon = capability.icon;

  return (
    <EditorialShell>
      <main id="main-content" className="editorial-inner pb-0!">
        <section className={styles.hero} aria-labelledby="capability-context">
          <div className="editorial-rail">
            <nav aria-label="Breadcrumb" className={styles.context}>
              <Link href="/platform">Capabilities</Link>
              <ChevronRight size={13} aria-hidden="true" />
              <span id="capability-context" aria-current="page">
                {capability.navLabel}
              </span>
            </nav>
            <div className={styles.heroGrid}>
              <div className={styles.intro}>
                <EditorialPageHeader title={capability.title}>
                  <p>{capability.description}</p>
                </EditorialPageHeader>
                <div className="editorial-actions">
                  <Button asChild>
                    <Link
                      href={bookDemoHref(capability.slug)}
                      {...ctaDataProps(`capability-hero:${capability.slug}`)}
                    >
                      Book a workflow demo <ArrowUpRight aria-hidden="true" />
                    </Link>
                  </Button>
                  <a href="#workflow" className="editorial-text-link">
                    How it works <ArrowRight size={15} aria-hidden="true" />
                  </a>
                </div>
              </div>
              <section className={styles.paper} aria-labelledby="work-product-title">
                <div className={styles.paperHeader}>
                  <h2 id="work-product-title">What your team receives</h2>
                  <Icon size={18} strokeWidth={1.5} aria-hidden="true" />
                </div>
                <div className={styles.paperBody}>
                  <h3 className={styles.paperTitle}>{capability.navLabel}</h3>
                  <ul className={styles.deliverables}>
                    {capability.outputs.map((output) => (
                      <li key={output}>{output}</li>
                    ))}
                  </ul>
                </div>
                <div className={styles.review}>
                  <ShieldCheck size={17} strokeWidth={1.5} aria-hidden="true" />
                  <div>
                    <h3 className="text-xs font-medium">Review rule</h3>
                    <p>{capability.review}</p>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </section>

        <section id="workflow" aria-labelledby="asks-title" className={styles.section}>
          <div className={`editorial-rail ${styles.sectionGrid}`}>
            <div>
              <h2 id="asks-title" className={styles.sectionHeading}>
                Start with the ask.
              </h2>
              <p className={styles.sectionIntro}>{capability.felt}</p>
            </div>
            <ol className={styles.askList}>
              {capability.asks.map((ask, index) => (
                <li key={ask}>
                  <span aria-hidden="true">{String(index + 1).padStart(2, "0")}</span>
                  <p>{ask}</p>
                </li>
              ))}
            </ol>
          </div>
        </section>

        <section aria-labelledby="record-title" className={`${styles.section} bg-muted/40`}>
          <div className={`editorial-rail ${styles.sectionGrid}`}>
            <div>
              <h2 id="record-title" className={styles.sectionHeading}>
                From source to finished work.
              </h2>
              <div className="border-foreground mt-8 border-l-2 pl-5">
                <h3 className="text-sm font-medium">The boundary</h3>
                <p className="text-muted-foreground mt-3 max-w-md text-sm leading-7">
                  {capability.boundary}
                </p>
              </div>
            </div>
            <dl>
              <div className="border-b pb-7">
                <dt className="mb-4 text-sm font-medium">Source systems &amp; records</dt>
                <dd>
                  <ul className={`${styles.sourceList} text-muted-foreground text-sm`}>
                    {capability.sources.map((source) => (
                      <li key={source}>{source}</li>
                    ))}
                  </ul>
                </dd>
              </div>
              <div className="pt-7">
                <dt className="mb-4 text-sm font-medium">The agent’s work</dt>
                <dd>
                  <ul className="flex flex-wrap items-center gap-x-3 gap-y-3 text-sm">
                    {capability.actions.map((action, index) => (
                      <li key={action} className="flex items-center gap-3">
                        {index > 0 && (
                          <ArrowRight
                            size={12}
                            className="text-muted-foreground"
                            aria-hidden="true"
                          />
                        )}
                        {action}
                      </li>
                    ))}
                  </ul>
                </dd>
              </div>
            </dl>
          </div>
        </section>

        <nav aria-label="Related field notes" className={styles.section}>
          <div className={`editorial-rail ${styles.sectionGrid}`}>
            <div>
              <h2 className={styles.sectionHeading}>A closer look.</h2>
              <Link href="/blog" className="editorial-text-link mt-4">
                All field notes <ArrowUpRight size={15} aria-hidden="true" />
              </Link>
            </div>
            <ul>
              {getCapabilityArticles(capability.slug).map((article) => (
                <li key={article.slug}>
                  <Link href={`/blog/${article.slug}`} className={styles.articleLink}>
                    {article.title}
                    <ArrowUpRight size={16} aria-hidden="true" />
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </nav>

        <section className={`${styles.section} bg-muted/40`} aria-labelledby="next-step-title">
          <div className={`editorial-rail ${styles.closing}`}>
            <div>
              <h2 id="next-step-title" className={styles.sectionHeading}>
                Bring us this workflow.
              </h2>
              <p className={styles.sectionIntro}>
                Show us the source systems, the current work product, and the person who reviews it.
              </p>
            </div>
            <Button size="lg" asChild>
              <Link
                href={bookDemoHref(capability.slug)}
                {...ctaDataProps(`page-end:capability:${capability.slug}`)}
              >
                Book a workflow demo <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
    </EditorialShell>
  );
}
