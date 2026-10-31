"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Check } from "lucide-react";

import { calBookingUrl } from "@/components/booking/cal-link";
import { QualificationForm, type QualificationData } from "@/components/booking/qualification-form";
import { buildAttributionParams, readFirstTouch, readLastCta } from "@/lib/attribution/first-touch";
import { trackGa4 } from "@/lib/attribution/gtag";
import { getBookableService } from "@/lib/attribution/services";
import { getCapability } from "@/lib/institutional/capabilities";

type Submission = { data: QualificationData; params: Record<string, string> };

export function attributionFor(
  data: QualificationData,
  service: string | null,
  storage: Pick<Storage, "getItem" | "setItem"> | null,
): Record<string, string> {
  return buildAttributionParams({
    firstTouch: storage ? readFirstTouch(storage) : null,
    lastCta: storage ? readLastCta(storage) : null,
    qualification: {
      firmType: data.firmType,
      aumBand: data.aumBand ?? null,
      companySize: data.companySize ?? null,
    },
    service,
  });
}

function safeStorage(): Storage | null {
  try {
    return window.localStorage;
  } catch {
    return null;
  }
}

/** Cal.com notes: the service or workflow the visitor asked about. */
export function bookingNotes(data: QualificationData, service: string | null): string {
  const svc = getBookableService(service);
  const lines = [
    svc ? `Service: ${svc.label}` : null,
    data.workflow ? `Workflow: ${getCapability(data.workflow)?.navLabel ?? data.workflow}` : null,
  ];
  return lines.filter(Boolean).join("\n");
}

const CalcomInlineEmbed = dynamic(
  async () => {
    const { CalcomInlineEmbed: Calendar } = await import("@/components/booking/cal-embed");
    return Calendar;
  },
  {
    ssr: false,
    loading: () => (
      <p role="status" className="text-muted-foreground py-8 text-sm">
        Loading available times…
      </p>
    ),
  },
);

const BRING_REAL_ESTATE = [
  "One recurring workflow your team carries by hand",
  "The systems and files the answer comes from",
  "The person who reviews the finished work",
  "What goes wrong, waits, or gets rebuilt today",
];
const BRING_BUILD = [
  "The task or process you want the AI to handle",
  "The tools and data it needs to reach",
  "The person who owns the result",
  "What it costs your team to do this by hand today",
];

export function BookDemoClient({
  workflow = "",
  service = "",
}: {
  workflow?: string;
  service?: string;
}): React.ReactElement {
  const calendarRef = useRef<HTMLHeadingElement>(null);
  const [submission, setSubmission] = useState<Submission | null>(null);
  const qualificationData = submission?.data ?? null;
  const svc = getBookableService(service);
  const serviceSlug = svc?.slug ?? null;

  const handleComplete = (data: QualificationData) => {
    const params = attributionFor(data, serviceSlug, safeStorage());
    trackGa4("generate_lead", params);
    // Record the lead without blocking the calendar; booking still works if the CRM is down.
    void fetch("/api/demo-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ data, attribution: params }),
      keepalive: true,
    }).catch(() => undefined);
    setSubmission({ data, params });
  };

  useEffect(() => {
    if (submission) calendarRef.current?.focus();
  }, [submission]);

  const prefill = submission
    ? {
        name: submission.data.firstName,
        email: submission.data.email,
        notes: bookingNotes(submission.data, serviceSlug),
      }
    : {};
  const bring = svc ? BRING_BUILD : BRING_REAL_ESTATE;

  return (
    <div className="grid items-start gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:gap-12">
      <div className="booking-details order-2 lg:order-1">
        <h2 className="font-heading text-2xl font-bold">A useful first conversation</h2>
        <p className="text-muted-foreground mt-4 max-w-md text-sm leading-7">
          {svc
            ? "Together, we’ll pin down what the build should do, which systems it connects to, and who signs off on the result."
            : "Together, we’ll identify the work to complete, what a good result looks like, and where human review belongs."}
        </p>
        <h3 className="mt-8 text-sm font-medium">What to bring</h3>
        <ul className="mt-6 space-y-4 text-sm">
          {bring.map((item) => (
            <li key={item} className="flex gap-3">
              <Check aria-hidden="true" className="text-primary mt-0.5 h-4 w-4 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground mt-8 text-sm leading-6">
          We will not force an AI use case. If the work is not ready or valuable enough to automate
          safely, we will say so.
        </p>
      </div>

      <div className="booking-form-panel order-1 border p-5 sm:p-8 lg:order-2">
        {qualificationData ? (
          <>
            <div className="mb-6 border-b pb-5">
              <p className="text-primary text-sm font-semibold">Request received</p>
              <h2 ref={calendarRef} tabIndex={-1} className="font-heading mt-2 text-2xl font-bold">
                Choose a time{qualificationData.firstName ? `, ${qualificationData.firstName}` : ""}
                .
              </h2>
              <p className="text-muted-foreground mt-2 text-sm">
                The scheduler below is provided by Cal.com and loads after your request.
              </p>
            </div>
            <CalcomInlineEmbed
              theme="light"
              prefill={prefill}
              attribution={submission?.params ?? {}}
            />
            <p className="text-muted-foreground mt-5 text-sm leading-6">
              Calendar not loading?{" "}
              <a
                href={calBookingUrl(prefill, submission?.params ?? {})}
                target="_blank"
                rel="noopener noreferrer"
                className="underline underline-offset-4"
              >
                Open the scheduler on Cal.com
              </a>{" "}
              or email{" "}
              <a href="mailto:hello@prestyj.com" className="underline underline-offset-4">
                hello@prestyj.com
              </a>{" "}
              and we’ll find a time.
            </p>
          </>
        ) : (
          <>
            <h2 className="font-heading text-2xl font-bold">Let’s find a time.</h2>
            <p className="text-muted-foreground mt-2 mb-6 text-sm leading-6">
              A few quick answers route your request to the right person. The calendar opens as soon
              as you continue. No automated call or marketing text is triggered.
            </p>
            <QualificationForm
              onComplete={handleComplete}
              initialWorkflow={workflow}
              initialFirmType={svc ? "other" : ""}
              showWorkflow={!svc}
            />
          </>
        )}
      </div>
    </div>
  );
}
