"use client";

import { useRef, useState } from "react";
import { Check } from "lucide-react";

import { CalcomInlineEmbed } from "@/components/booking/cal-embed";
import { QualificationForm, type QualificationData } from "@/components/booking/qualification-form";

export function BookDemoClient(): React.ReactElement {
  const calendarRef = useRef<HTMLDivElement>(null);
  const [qualificationData, setQualificationData] = useState<QualificationData | null>(null);

  const handleComplete = (data: QualificationData) => {
    setQualificationData(data);
    window.setTimeout(() => {
      calendarRef.current?.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 100);
  };

  return (
    <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr]">
      <div>
        <h2 className="font-heading text-2xl font-bold">What to bring</h2>
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

      <div ref={calendarRef} className="border p-5 sm:p-8">
        {qualificationData ? (
          <>
            <div className="mb-6 border-b pb-5">
              <p className="text-primary text-sm font-semibold">Request received</p>
              <h2 className="font-heading mt-2 text-2xl font-bold">
                Choose a time{qualificationData.firstName ? `, ${qualificationData.firstName}` : ""}
                .
              </h2>
              <p className="text-muted-foreground mt-2 text-sm">
                The scheduler below is provided by Cal.com and loads after your request.
              </p>
            </div>
            <CalcomInlineEmbed />
          </>
        ) : (
          <>
            <h2 className="font-heading text-2xl font-bold">Request access</h2>
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
