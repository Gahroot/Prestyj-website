"use client";

import { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic";
import { Check } from "lucide-react";

import { QualificationForm, type QualificationData } from "@/components/booking/qualification-form";

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

export function BookDemoClient(): React.ReactElement {
  const calendarRef = useRef<HTMLHeadingElement>(null);
  const [qualificationData, setQualificationData] = useState<QualificationData | null>(null);

  const handleComplete = (data: QualificationData) => {
    setQualificationData(data);
  };

  useEffect(() => {
    if (qualificationData) calendarRef.current?.focus();
  }, [qualificationData]);

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
            <CalcomInlineEmbed theme="light" />
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
              We use these details to route your request and open the scheduler. No automated call
              or marketing text is triggered by this form.
            </p>
            <QualificationForm onComplete={handleComplete} />
          </>
        )}
      </div>
    </div>
  );
}
