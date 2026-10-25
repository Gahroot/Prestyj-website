"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Check } from "lucide-react";

import { QualificationForm, type QualificationData } from "@/components/booking/qualification-form";
import { buildAttributionParams, readFirstTouch, readLastCta } from "@/lib/attribution/first-touch";
import { trackGa4 } from "@/lib/attribution/gtag";
import { getCapability } from "@/lib/institutional/capabilities";

type Submission = { data: QualificationData; params: Record<string, string> };

function attributionFor(data: QualificationData): Record<string, string> {
  let storage: Storage | null = null;
  try {
    storage = window.localStorage;
  } catch {
    storage = null;
  }
  return buildAttributionParams({
    firstTouch: storage ? readFirstTouch(storage) : null,
    lastCta: storage ? readLastCta(storage) : null,
    qualification: { firmType: data.firmType, aumBand: data.aumBand ?? null },
  });
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

export function BookDemoClient({ workflow = "" }: { workflow?: string }): React.ReactElement {
  const calendarRef = useRef<HTMLHeadingElement>(null);
  const [submission, setSubmission] = useState<Submission | null>(null);
  const qualificationData = submission?.data ?? null;

  const handleComplete = (data: QualificationData) => {
    const params = attributionFor(data);
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

  return (
    <div className="grid items-start gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div className="booking-details">
        <h2 className="font-heading text-2xl font-bold">A useful first conversation</h2>
        <p className="text-muted-foreground mt-4 max-w-md text-sm leading-7">
          Together, we’ll identify the work to complete, what a good result looks like, and where
          human review belongs.
        </p>
        <h3 className="mt-8 text-sm font-medium">What to bring</h3>
        <ul className="mt-6 space-y-4 text-sm">
          {[
            "One recurring workflow your team carries by hand",
            "The systems and files the answer comes from",
            "The person who reviews the finished work",
            "What goes wrong, waits, or gets rebuilt today",
          ].map((item) => (
            <li key={item} className="flex gap-3">
              <Check aria-hidden="true" className="text-primary mt-0.5 h-4 w-4 shrink-0" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
        <p className="text-muted-foreground mt-8 text-sm leading-6">
          We will not force an AI use case. If the workflow is not ready or valuable enough to
          automate safely, we will say so.
        </p>
      </div>

      <div className="booking-form-panel border p-5 sm:p-8">
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
              prefill={{
                name: submission?.data.firstName ?? "",
                email: submission?.data.email ?? "",
                notes: submission?.data.workflow
                  ? `Workflow: ${getCapability(submission.data.workflow)?.navLabel ?? submission.data.workflow}`
                  : "",
              }}
              attribution={submission?.params ?? {}}
            />
            <p className="text-muted-foreground mt-5 text-sm leading-6">
              Calendar not loading? Email{" "}
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
              Four quick answers route your request to the right person. The calendar opens as soon
              as you continue. No automated call or marketing text is triggered.
            </p>
            <QualificationForm onComplete={handleComplete} initialWorkflow={workflow} />
          </>
        )}
      </div>
    </div>
  );
}
