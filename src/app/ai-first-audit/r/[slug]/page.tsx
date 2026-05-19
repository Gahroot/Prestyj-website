import Link from "next/link";
import { notFound } from "next/navigation";
import { ArrowRight, Download } from "lucide-react";
import { prisma } from "@/lib/prisma";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { Button } from "@/components/ui/button";
import BorderGlow from "@/components/ui/border-glow";
import { ScoredTaskCard } from "@/components/lead-magnet/ai-first-audit/scored-task-card";
import { QuadrantGrid } from "@/components/lead-magnet/ai-first-audit/quadrant-grid";
import { SevenDayList } from "@/components/lead-magnet/ai-first-audit/seven-day-list";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import type { AuditResult, ScoredTask } from "@/lib/ai-first-audit/types";
import { formatCurrency, formatHours } from "@/lib/ai-first-audit/format";

interface PageProps {
  params: Promise<{ slug: string }>;
}

const QUADRANT_LABEL: Record<ScoredTask["quadrant"], string> = {
  "automate-first": "Automate First",
  delegate: "Delegate",
  "automate-later": "Automate Later",
  ignore: "Ignore",
};

export default async function AuditSharePage({ params }: PageProps) {
  const { slug } = await params;

  const audit = await prisma.aiFirstAudit.findUnique({ where: { shareSlug: slug } });
  if (!audit || audit.status !== "FINALIZED" || !audit.resultJson) {
    notFound();
  }

  const result = audit.resultJson as unknown as AuditResult;

  return (
    <>
      <Navbar />
      <main className="bg-background min-h-screen">
        {/* Hero */}
        <section className="relative overflow-hidden pt-24 pb-12">
          <div className="bg-primary/10 absolute -top-32 left-1/2 h-72 w-72 -translate-x-1/2 rounded-full blur-3xl" />
          <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
            <p className="text-primary text-xs font-medium tracking-wide uppercase">
              Your AI-First Audit
            </p>
            <h1 className="font-heading text-foreground mt-3 text-4xl font-bold tracking-tighter sm:text-5xl md:text-6xl">
              {result.context.firstName}, you&apos;re lighting{" "}
              <span className="text-primary">{formatCurrency(result.headlineDollars)}/yr</span> on
              fire.
            </h1>
            <p className="text-muted-foreground mt-4 max-w-2xl text-lg">
              That&apos;s the annualized time-cost of your top 3 tasks at $
              {result.hourlyCost.toFixed(0)}/hr loaded — {formatHours(result.totalWeeklyHoursSaved)}{" "}
              per week recoverable if you ship the recipes below.
            </p>

            <div className="mt-6 flex flex-wrap gap-3">
              <Button asChild size="lg">
                <Link href={`/api/ai-first-audit/r/${slug}/pdf`}>
                  <Download className="mr-2 h-4 w-4" />
                  Download PDF
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline">
                <Link href={`/book-demo?audit=${slug}`}>
                  Book a 30-min audit review <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </section>

        {/* Top 3 */}
        <section className="py-16">
          <div className="mx-auto max-w-5xl space-y-8 px-4 sm:px-6 lg:px-8">
            <header>
              <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                Automate first
              </p>
              <h2 className="font-heading mt-1 text-3xl font-bold tracking-tight">
                Your top 3 — shipped this month
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl">
                Each card is one focused project. Stack on the left, starter recipe in the middle,
                what to watch out for on the right.
              </p>
            </header>

            <div className="grid gap-6 lg:grid-cols-3">
              {result.topThree.map((task, i) => (
                <ScoredTaskCard key={task.input.id} rank={i + 1} task={task} />
              ))}
            </div>
          </div>
        </section>

        {/* Quadrant grid */}
        <section className="pb-16">
          <div className="mx-auto grid max-w-5xl gap-12 px-4 sm:px-6 md:grid-cols-2 lg:px-8">
            <div>
              <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                Your task map
              </p>
              <h2 className="font-heading mt-1 text-2xl font-bold tracking-tight">
                Where each task lives
              </h2>
              <p className="text-muted-foreground mt-2 text-sm">
                The four quadrants. Top-right is what to ship now. Bottom-left is what to leave
                alone. Tasks rank from highest composite score (1) downward.
              </p>
            </div>
            <BorderGlow borderRadius={14} innerClassName="p-5">
              <QuadrantGrid tasks={result.tasks} />
            </BorderGlow>
          </div>
        </section>

        {/* 7-day plan */}
        <section className="pb-16">
          <div className="mx-auto max-w-3xl space-y-6 px-4 sm:px-6 lg:px-8">
            <header>
              <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                Deployment
              </p>
              <h2 className="font-heading mt-1 text-3xl font-bold tracking-tight">
                Your 7-day plan
              </h2>
              <p className="text-muted-foreground mt-2">
                One focused step per day. By Sunday you&apos;ve shipped one automation end-to-end
                and scoped the next.
              </p>
            </header>
            <SevenDayList plan={result.sevenDayPlan} />
          </div>
        </section>

        {/* Full ranking table */}
        <section className="pb-16">
          <div className="mx-auto max-w-5xl space-y-4 px-4 sm:px-6 lg:px-8">
            <header>
              <p className="text-muted-foreground text-xs font-medium tracking-wide uppercase">
                Full ranking
              </p>
              <h2 className="font-heading mt-1 text-3xl font-bold tracking-tight">
                Every task you scored
              </h2>
              <p className="text-muted-foreground mt-2">
                Sorted by composite score (leverage × readiness). Use this to plan past your first
                sprint.
              </p>
            </header>
            <div className="border-border bg-card overflow-hidden rounded-lg border">
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead className="w-12">#</TableHead>
                    <TableHead>Task</TableHead>
                    <TableHead className="text-right">Leverage</TableHead>
                    <TableHead className="text-right">Readiness</TableHead>
                    <TableHead className="text-right">Hrs/wk back</TableHead>
                    <TableHead className="text-right">$/yr</TableHead>
                    <TableHead>Quadrant</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {result.tasks.map((task, i) => (
                    <TableRow key={task.input.id}>
                      <TableCell className="font-mono">{i + 1}</TableCell>
                      <TableCell>{task.input.title}</TableCell>
                      <TableCell className="text-right">{task.leverage}</TableCell>
                      <TableCell className="text-right">{task.readiness}</TableCell>
                      <TableCell className="text-right">
                        {formatHours(task.weeklyHoursSaved)}
                      </TableCell>
                      <TableCell className="text-right">
                        {formatCurrency(task.annualDollarsSaved)}
                      </TableCell>
                      <TableCell className="text-xs">{QUADRANT_LABEL[task.quadrant]}</TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </div>
          </div>
        </section>

        {/* Bottom CTA */}
        <section className="pb-24">
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <BorderGlow borderRadius={14} innerClassName="space-y-4 p-8 sm:p-12">
              <h2 className="font-heading text-2xl font-bold tracking-tight sm:text-3xl">
                Want us to build one of these for you?
              </h2>
              <p className="text-muted-foreground">
                30 minutes. We&apos;ll look at your top 3 and tell you which one is realistically a
                week&apos;s work versus a quarter&apos;s. No pitch.
              </p>
              <div className="flex flex-wrap justify-center gap-3 pt-2">
                <Button asChild size="lg">
                  <Link href={`/book-demo?audit=${slug}`}>Book a 30-min audit review</Link>
                </Button>
                <Button asChild size="lg" variant="outline">
                  <Link href={`/api/ai-first-audit/r/${slug}/pdf`}>Download the PDF</Link>
                </Button>
              </div>
            </BorderGlow>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
