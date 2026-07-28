import * as React from "react";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Download } from "lucide-react";
import { FirstFixPlan } from "@/components/lead-magnet/ai-first-audit/first-fix-plan";
import { RankedWorkflowCard } from "@/components/lead-magnet/ai-first-audit/ranked-workflow-card";
import { ReportActions } from "@/components/lead-magnet/ai-first-audit/report-actions";
import { WorkflowLedger } from "@/components/lead-magnet/ai-first-audit/workflow-ledger";
import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { Button } from "@/components/ui/button";
import { AUDIT_COPY } from "@/lib/ai-first-audit/copy";
import { formatCurrency, formatHours } from "@/lib/ai-first-audit/format";
import { parseAuditResult } from "@/lib/ai-first-audit/result-version";
import type { AuditResultV1, AuditResultV2, ScoredWorkflow } from "@/lib/ai-first-audit/types";
import { prisma } from "@/lib/prisma";

interface PageProps {
  params: Promise<{ slug: string }>;
  searchParams: Promise<{ email?: string }>;
}

function LegacyReport({ result, slug }: { result: AuditResultV1; slug: string }) {
  return (
    <main className="bg-background min-h-screen pt-24 pb-20">
      <div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <p className="text-muted-foreground text-sm">Saved version 1 report</p>
        <h1 className="font-heading mt-2 text-4xl font-bold tracking-tight sm:text-5xl">
          {result.context.firstName}&apos;s AI-First Audit
        </h1>
        <p className="text-muted-foreground mt-4 max-w-2xl">
          This historical report keeps its original result and PDF download.
        </p>
        <dl className="border-border bg-card mt-8 grid gap-4 rounded-xl border p-5 sm:grid-cols-2">
          <div>
            <dt className="text-muted-foreground text-sm">Original headline value</dt>
            <dd className="font-heading mt-1 text-2xl font-bold">
              {formatCurrency(result.headlineDollars)}
            </dd>
          </div>
          <div>
            <dt className="text-muted-foreground text-sm">Original weekly hours</dt>
            <dd className="font-heading mt-1 text-2xl font-bold">
              {formatHours(result.totalWeeklyHoursSaved)}
            </dd>
          </div>
        </dl>
        <Button asChild size="lg" className="mt-6">
          <Link href={`/api/ai-first-audit/r/${encodeURIComponent(slug)}/pdf`}>
            <Download aria-hidden="true" />
            Open legacy PDF
          </Link>
        </Button>
      </div>
    </main>
  );
}

function blockerText(workflow: ScoredWorkflow): string[] {
  const blockers: string[] = [];
  if (workflow.input.readiness.sameSteps < 3) {
    blockers.push(workflow.guide.readinessFixes.sameSteps);
  }
  if (workflow.input.readiness.clearRules < 3) {
    blockers.push(workflow.guide.readinessFixes.clearRules);
  }
  if (workflow.input.readiness.informationEasyToFind < 3) {
    blockers.push(workflow.guide.readinessFixes.informationEasyToFind);
  }
  return blockers;
}

function VersionTwoReport({
  result,
  slug,
  emailWarning,
}: {
  result: AuditResultV2;
  slug: string;
  emailWarning: boolean;
}) {
  const top = result.topThree[0]!;
  const rankedCards = React.Children.toArray(
    result.topThree.map((workflow, index) =>
      React.createElement(RankedWorkflowCard, { workflow, rank: index + 1, detailed: true }),
    ),
  );
  const workflowsWithBlockers = result.workflows.filter(
    (workflow) => workflow.impactScore >= 67 && workflow.readinessScore < 75,
  );
  const blockerSections = React.Children.toArray(
    workflowsWithBlockers.map((workflow) =>
      React.createElement(
        "article",
        { className: "border-border border-t py-5 first:border-t-0" },
        React.createElement("h3", { className: "font-heading font-semibold" }, workflow.input.title),
        React.createElement(
          "ul",
          { className: "text-muted-foreground mt-2 list-disc space-y-2 ps-5" },
          React.Children.toArray(
            blockerText(workflow).map((blocker) => React.createElement("li", null, blocker)),
          ),
        ),
      ),
    ),
  );

  return (
    <main className="audit-report bg-background min-h-screen pt-24 pb-24">
      <section className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 lg:grid-cols-[minmax(0,1fr)_18rem] lg:items-start">
          <div>
            <p className="text-muted-foreground text-sm">AI-First Audit</p>
            <h1 className="font-heading mt-2 text-4xl leading-tight font-bold tracking-tight break-words sm:text-5xl">
              Fix this first: {top.input.title}
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-lg">{top.whyItRanks}</p>
          </div>
          <ReportActions
            slug={slug}
            variant="utility"
            emailWarning={emailWarning}
            readinessBand={top.readinessLabel}
          />
        </div>

        <dl className="border-border bg-card mt-10 grid overflow-hidden rounded-xl border sm:grid-cols-3">
          <div className="p-5 sm:border-e">
            <dt className="text-muted-foreground text-sm">{AUDIT_COPY.report.yearlyCost}</dt>
            <dd className="font-heading mt-1 text-3xl font-bold tabular-nums">
              {formatCurrency(top.annualTimeCost)}
            </dd>
          </div>
          <div className="border-border border-t p-5 sm:border-t-0 sm:border-e">
            <dt className="text-muted-foreground text-sm">{AUDIT_COPY.report.impact}</dt>
            <dd className="mt-1 text-xl font-semibold">{top.impactLabel}</dd>
          </div>
          <div className="border-border border-t p-5 sm:border-t-0">
            <dt className="text-muted-foreground text-sm">{AUDIT_COPY.report.readiness}</dt>
            <dd className="mt-1 text-xl font-semibold">{top.readinessLabel}</dd>
          </div>
        </dl>

        <div className="border-border mt-8 grid gap-6 border-y py-8 md:grid-cols-2">
          <div>
            <h2 className="font-heading text-xl font-bold">{AUDIT_COPY.report.agentJob}</h2>
            <p className="mt-3 font-semibold">{top.guide.agentRole}</p>
            <p className="text-muted-foreground mt-1">{top.guide.agentJob}</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold">Start with this move</h2>
            <p className="text-muted-foreground mt-3">{top.guide.firstMove}</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold">When a person steps in</h2>
            <p className="text-muted-foreground mt-3">{top.guide.guardrail}</p>
          </div>
          <div>
            <h2 className="font-heading text-xl font-bold">Measure for 30 days</h2>
            <p className="text-muted-foreground mt-3">{top.guide.successMetric}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold">{AUDIT_COPY.report.ranked}</h2>
        <p className="text-muted-foreground mt-2">Each figure is an estimated current team time cost.</p>
        <div className="mt-6 grid gap-5">{rankedCards}</div>
      </section>

      <section className="mx-auto mt-16 max-w-5xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold">Every workflow you chose</h2>
        <p className="text-muted-foreground mt-2">
          Total team time tied up: {formatHours(result.totalWeeklyHours)} a week, or about{" "}
          {formatCurrency(result.totalAnnualTimeCost)} a year.
        </p>
        <div className="mt-6">
          <WorkflowLedger workflows={result.workflows} />
        </div>
      </section>

      <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold">{AUDIT_COPY.report.action}</h2>
        <div className="mt-5">
          <FirstFixPlan items={result.firstFixPlan} />
        </div>
      </section>

      {workflowsWithBlockers.length > 0 && (
        <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
          <h2 className="font-heading text-3xl font-bold">{AUDIT_COPY.report.blocker}</h2>
          <p className="text-muted-foreground mt-2">
            These high-impact workflows need clearer steps, rules, or information first.
          </p>
          <div className="mt-5">{blockerSections}</div>
        </section>
      )}

      <section className="mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
        <h2 className="font-heading text-3xl font-bold">{AUDIT_COPY.report.method}</h2>
        <div className="text-muted-foreground mt-5 space-y-4">
          <p>
            Estimated yearly time cost equals the midpoint of your weekly time range, multiplied by
            your hourly team cost, multiplied by 52 weeks. It describes current team time. It is not
            promised savings or recovered revenue.
          </p>
          <p>
            Business impact uses your selected consequence: 0 for little happens, 33 for delayed
            work, 67 when customers or leads wait, and 100 when leads, sales, or customers are lost.
          </p>
          <p>
            Readiness is the average of your answers about repeatable steps, clear rules, and easy-to-find
            information. Ready now begins at 75. A little prep begins at 50.
          </p>
          <p>
            Priority is 40% time cost, 40% business impact, and 20% readiness. Time cost is compared
            only with the other workflows you selected. Ties use impact, readiness, cost, then a stable
            workflow identifier.
          </p>
        </div>
      </section>

      <section className="audit-report-cta mx-auto mt-16 max-w-3xl px-4 sm:px-6 lg:px-8">
        <div className="border-border bg-card rounded-xl border p-6 sm:p-10">
          <h2 className="font-heading text-3xl font-bold">{AUDIT_COPY.report.ctaHeading}</h2>
          <p className="text-muted-foreground mt-3">{AUDIT_COPY.report.ctaSupport}</p>
          <div className="mt-6">
            <ReportActions slug={slug} variant="booking" readinessBand={top.readinessLabel} />
          </div>
        </div>
      </section>
    </main>
  );
}

export default async function AuditSharePage({ params, searchParams }: PageProps) {
  const { slug } = await params;
  const query = await searchParams;
  const audit = await prisma.aiFirstAudit.findUnique({ where: { shareSlug: slug } });
  if (!audit || audit.status !== "FINALIZED" || !audit.resultJson) notFound();
  const result = parseAuditResult(audit.resultJson);
  if (!result) notFound();

  return (
    <>
      <Navbar />
      {result.version === 1 ? (
        <LegacyReport result={result} slug={slug} />
      ) : (
        <VersionTwoReport result={result} slug={slug} emailWarning={query.email === "failed"} />
      )}
      <Footer />
    </>
  );
}
