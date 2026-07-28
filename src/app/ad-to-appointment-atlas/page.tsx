import type { Metadata } from "next";
import Link from "next/link";
import { ArrowDown, ArrowRight, Download } from "lucide-react";

import { Footer } from "@/components/layout/footer";
import { Navbar } from "@/components/layout/navbar";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { FunnelBaselineCalculator } from "@/components/sections/atlas/funnel-baseline-calculator";
import { Button } from "@/components/ui/button";

const pageUrl = "https://prestyj.com/ad-to-appointment-atlas";
const publishedDate = "2026-07-28";

export const metadata: Metadata = {
  title: "Ad-to-Appointment Atlas | Original Full-Funnel Research",
  description:
    "The Prestyj research protocol connecting video ad hooks to lead conversations, booked appointments, kept appointments, and attributed revenue.",
  keywords: [
    "ad to appointment benchmark",
    "cost per kept appointment",
    "conversation to calendar rate",
    "full funnel marketing research",
    "video ad lead quality",
    "AI lead response benchmark",
  ],
  alternates: { canonical: pageUrl },
  openGraph: {
    title: "The Ad-to-Appointment Atlas",
    description:
      "A transparent research system for measuring what happens after an ad generates a lead.",
    type: "article",
    url: pageUrl,
  },
  twitter: {
    card: "summary_large_image",
    title: "The Ad-to-Appointment Atlas",
    description:
      "A transparent research system for measuring what happens after an ad generates a lead.",
  },
};

const measurementStages = [
  {
    number: "01",
    title: "Ad promise",
    detail: "Hook, angle, offer, CTA, format, campaign and creative ID",
  },
  {
    number: "02",
    title: "Lead context",
    detail: "Source, captured intent, timestamp, channel and valid lead status",
  },
  {
    number: "03",
    title: "Conversation",
    detail: "First response, first two-way exchange, objections and handoff",
  },
  {
    number: "04",
    title: "Appointment",
    detail: "Booked, canceled, rescheduled, no-show and kept outcome",
  },
  {
    number: "05",
    title: "Revenue",
    detail: "Qualified opportunity, closed outcome and attributed value",
  },
];

const metricDefinitions = [
  {
    name: "Conversation-to-calendar rate",
    formula: "Booked appointments divided by two-way conversations",
    question: "Once a real conversation starts, how often does it produce a booking?",
  },
  {
    name: "Cost per kept appointment",
    formula: "Ad spend divided by appointments that occurred",
    question: "What did it cost to create an appointment someone actually attended?",
  },
  {
    name: "Attention-to-revenue decay",
    formula: "Share of original leads retained at each measured milestone",
    question: "At which handoff does the campaign lose the most potential value?",
  },
  {
    name: "Hook-to-conversation match",
    formula: "Matches divided by conversations where the lead states a clear intent",
    question: "Did the creative attract the intent the sales conversation expected?",
  },
];

const protocolSteps = [
  {
    title: "Use one attributable cohort",
    text: "Every lead must connect to a known campaign and creative identifier. Duplicate, spam, staff and test leads are removed. For hook matching, the ad promise is coded before the conversation is reviewed, and conversations with no stated intent are excluded.",
  },
  {
    title: "Use event timestamps, not recollection",
    text: "Lead capture, first response, first two-way conversation, booking and kept-appointment events come from campaign, CRM, phone or calendar records.",
  },
  {
    title: "Keep outcomes tied to the same cohort",
    text: "A cohort remains open for 30 days after lead capture. Late revenue may be reported separately instead of silently changing an earlier result.",
  },
  {
    title: "Protect participating businesses",
    text: "Public reporting is aggregated and anonymized. Transcript excerpts require separate written approval, and personal information is never published.",
  },
  {
    title: "Wait for a defensible segment",
    text: "No segment benchmark is released before it includes at least 100 attributable leads across five participating businesses. Medians and ranges accompany every result.",
  },
  {
    title: "Publish corrections",
    text: "Method changes, exclusions and corrected figures receive a dated note. Previous definitions remain visible so readers can compare like with like.",
  },
];

export default function AdToAppointmentAtlasPage() {
  const breadcrumbs = [
    { name: "Home", url: "https://prestyj.com" },
    { name: "Ad-to-Appointment Atlas", url: pageUrl },
  ];

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: "The Ad-to-Appointment Atlas",
    description: metadata.description,
    url: pageUrl,
    datePublished: publishedDate,
    dateModified: publishedDate,
    author: {
      "@type": "Organization",
      name: "Prestyj",
      url: "https://prestyj.com",
    },
    publisher: {
      "@type": "Organization",
      name: "Prestyj",
      url: "https://prestyj.com",
    },
    about: [
      "Video ad creative performance",
      "Lead response",
      "Appointment setting",
      "Revenue attribution",
    ],
  };

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SafeJsonLd data={articleSchema} />
      <a
        href="#main-content"
        className="bg-background text-foreground ring-ring sr-only z-50 min-h-11 items-center rounded-md border px-4 text-sm font-semibold focus:not-sr-only focus:fixed focus:top-2 focus:left-2 focus:flex focus:ring-2 focus:outline-none"
      >
        Skip to main content
      </a>
      <Navbar />
      <main id="main-content" className="[overflow-wrap:anywhere]">
        <section className="relative overflow-hidden pt-28 pb-20 sm:pt-32 lg:pt-40">
          <div className="absolute inset-x-0 top-0 h-px bg-linear-to-r from-transparent via-white/20 to-transparent" />
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 sm:px-6 lg:grid-cols-[minmax(0,1.08fr)_minmax(0,0.92fr)] lg:px-8">
            <div className="self-center">
              <div className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm font-semibold tracking-wide text-[#a99aff] uppercase">
                <span>Original research</span>
                <span aria-hidden="true" className="bg-border h-4 w-px" />
                <span className="text-muted-foreground">Protocol v1.0</span>
              </div>
              <h1 className="font-heading text-foreground mt-6 max-w-4xl text-4xl leading-[1.04] font-bold tracking-tight break-words sm:text-5xl lg:text-7xl">
                The Ad-to-Appointment Atlas
              </h1>
              <p className="text-foreground mt-7 max-w-2xl text-xl leading-8 sm:text-2xl">
                The missing measurement layer between the ad someone saw and the appointment they
                kept.
              </p>
              <p className="text-muted-foreground mt-5 max-w-2xl text-base leading-7 sm:text-lg">
                Most ad reports stop at the lead. Most agent reports start at the call. The Atlas
                connects the creative promise to the conversation, booking, attendance and revenue
                that followed.
              </p>
              <div className="mt-9 flex flex-col gap-3 sm:flex-row">
                <Button
                  size="lg"
                  className="h-auto min-h-11 py-3 text-center whitespace-normal"
                  asChild
                >
                  <Link href="#baseline">
                    Calculate your baseline
                    <ArrowDown aria-hidden="true" className="h-4 w-4" />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="h-auto min-h-11 py-3 text-center whitespace-normal"
                  asChild
                >
                  <a href="/data/ad-to-appointment-atlas-template.csv" download>
                    Download measurement template
                    <Download aria-hidden="true" className="h-4 w-4" />
                  </a>
                </Button>
              </div>
              <p className="text-muted-foreground mt-5 max-w-2xl text-sm leading-6">
                Publication status: research protocol open. Aggregate benchmarks are withheld until
                the stated sample thresholds are met.
              </p>
            </div>

            <div className="border-border bg-card/70 overflow-hidden rounded-2xl border">
              <div className="border-border border-b px-5 py-4 sm:px-6">
                <p className="text-foreground text-sm font-semibold">One lead, fully traced</p>
                <p className="text-muted-foreground mt-1 text-xs">Required measurement chain</p>
              </div>
              <ol>
                {measurementStages.map((stage) => (
                  <li
                    key={stage.number}
                    className="border-border/70 grid grid-cols-1 gap-3 border-b px-5 py-5 last:border-b-0 sm:grid-cols-[2.5rem_minmax(0,1fr)] sm:px-6"
                  >
                    <span className="text-sm font-semibold text-[#a99aff] tabular-nums">
                      {stage.number}
                    </span>
                    <div>
                      <p className="text-foreground text-base font-semibold">{stage.title}</p>
                      <p className="text-muted-foreground mt-1 text-sm leading-6">{stage.detail}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="border-border/70 border-t">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-12 px-4 py-20 sm:px-6 lg:grid-cols-[minmax(0,0.72fr)_minmax(0,1.28fr)] lg:px-8">
            <div>
              <p className="text-sm font-semibold tracking-wide text-[#a99aff] uppercase">
                What the Atlas asks
              </p>
              <h2 className="font-heading text-foreground mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                Which promise creates the best business outcome?
              </h2>
              <p className="text-muted-foreground mt-5 text-base leading-7">
                A cheap lead can become an expensive no-show. A costly lead can become the highest
                value conversation in the campaign. The Atlas keeps every stage visible so one
                isolated metric cannot hide the tradeoff.
              </p>
            </div>

            <dl className="border-border border-t">
              {metricDefinitions.map((metric) => (
                <div
                  key={metric.name}
                  className="border-border grid grid-cols-1 gap-x-8 gap-y-2 border-b py-6 sm:grid-cols-[minmax(0,0.9fr)_minmax(0,1.1fr)]"
                >
                  <dt className="text-foreground font-semibold">{metric.name}</dt>
                  <dd className="text-muted-foreground text-sm leading-6 sm:col-start-1">
                    {metric.formula}
                  </dd>
                  <dd className="text-muted-foreground text-sm leading-6 sm:col-start-2 sm:row-span-2 sm:row-start-1">
                    {metric.question}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </section>

        <FunnelBaselineCalculator />

        <section id="method" className="border-border/70 border-b">
          <div className="mx-auto w-full max-w-7xl px-4 py-20 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 gap-8 lg:grid-cols-[minmax(0,0.78fr)_minmax(0,1.22fr)]">
              <div>
                <p className="text-sm font-semibold tracking-wide text-[#a99aff] uppercase">
                  Open protocol
                </p>
                <h2 className="font-heading text-foreground mt-3 text-3xl font-bold tracking-tight sm:text-4xl">
                  A benchmark should show its homework.
                </h2>
                <p className="text-muted-foreground mt-5 max-w-xl text-base leading-7">
                  These rules govern the founding dataset. They are public now so the method cannot
                  be rewritten later to manufacture a better headline.
                </p>
                <div className="border-border mt-8 border-l pl-5">
                  <p className="text-foreground text-sm font-semibold">Protocol record</p>
                  <dl className="text-muted-foreground mt-3 space-y-2 text-sm">
                    <div className="grid grid-cols-1 gap-1 sm:flex sm:gap-2">
                      <dt>Published:</dt>
                      <dd>
                        <time dateTime={publishedDate}>July 28, 2026</time>
                      </dd>
                    </div>
                    <div className="grid grid-cols-1 gap-1 sm:flex sm:gap-2">
                      <dt>Version:</dt>
                      <dd>1.0</dd>
                    </div>
                    <div className="grid grid-cols-1 gap-1 sm:flex sm:gap-2">
                      <dt>First benchmark release:</dt>
                      <dd>After thresholds are met</dd>
                    </div>
                  </dl>
                </div>
              </div>

              <ol className="border-border border-t">
                {protocolSteps.map((step, index) => (
                  <li
                    key={step.title}
                    className="border-border grid grid-cols-1 gap-3 border-b py-6 sm:grid-cols-[3rem_minmax(0,0.75fr)_minmax(0,1.25fr)] sm:gap-6"
                  >
                    <span className="text-sm font-semibold text-[#a99aff] tabular-nums">
                      {String(index + 1).padStart(2, "0")}
                    </span>
                    <h3 className="text-foreground font-semibold">{step.title}</h3>
                    <p className="text-muted-foreground col-start-1 text-sm leading-6 sm:col-start-3">
                      {step.text}
                    </p>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </section>

        <section className="px-4 py-20 sm:px-6 lg:px-8">
          <div className="mx-auto grid w-full max-w-7xl grid-cols-1 gap-8 border-y py-12 lg:grid-cols-[minmax(0,1fr)_auto] lg:items-center">
            <div>
              <p className="text-sm font-semibold tracking-wide text-[#a99aff] uppercase">
                Founding dataset
              </p>
              <h2 className="font-heading text-foreground mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">
                Bring one campaign. Leave with its full leak map.
              </h2>
              <p className="text-muted-foreground mt-4 max-w-3xl text-base leading-7">
                We will map the creative, response, appointment and revenue events with your team.
                Your private baseline stays private. Anonymized aggregate inclusion requires written
                permission.
              </p>
            </div>
            <Button
              size="lg"
              className="h-auto min-h-11 py-3 text-center whitespace-normal"
              asChild
            >
              <Link href="/book-demo">
                Join the founding dataset
                <ArrowRight aria-hidden="true" className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
