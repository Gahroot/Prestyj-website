"use client";

import { useState, type ReactElement } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, ChevronRight, FileText, Layers3, LockKeyhole } from "lucide-react";

import { workSamples, type WorkSample } from "@/lib/institutional/work-samples";

function SampleDocument({ sample }: { sample: WorkSample }): ReactElement {
  const [sourceId, setSourceId] = useState(sample.sources[0]?.id);
  const source = sample.sources.find((item) => item.id === sourceId) ?? sample.sources[0];

  return (
    <>
      <div className="sample-question">
        <span className="sample-avatar" aria-hidden="true">
          W
        </span>
        <p>{sample.question}</p>
      </div>
      <div className="sample-columns">
        <article className="sample-output" aria-labelledby="sample-document-title">
          <div className="sample-document-topline">
            <span>
              <FileText size={14} aria-hidden="true" /> Work product
            </span>
            <span>
              <Check size={14} aria-hidden="true" /> Ready for review
            </span>
          </div>
          <h3 id="sample-document-title">{sample.title}</h3>
          <p className="sample-subtitle">{sample.subtitle}</p>
          <dl className="sample-findings">
            {sample.findings.map((finding) => (
              <div key={finding.label}>
                <dt>{finding.label}</dt>
                <dd>
                  <span>{finding.value}</span>
                  <button
                    type="button"
                    className="sample-citation"
                    aria-label={`Inspect source for ${finding.label}`}
                    aria-controls="sample-source-excerpt"
                    aria-pressed={sourceId === finding.sourceId}
                    onClick={() => setSourceId(finding.sourceId)}
                  >
                    [{sample.sources.findIndex((item) => item.id === finding.sourceId) + 1}]
                  </button>
                </dd>
              </div>
            ))}
          </dl>
          <p className="sample-note">{sample.note}</p>
          <div className="sample-review">
            <LockKeyhole size={15} aria-hidden="true" />
            <div>
              <strong>Human review required</strong>
              <p>{sample.review}</p>
            </div>
          </div>
        </article>
        <aside className="sample-source" aria-label="Supporting source">
          <div className="sample-source-heading">
            <Layers3 size={15} aria-hidden="true" />
            <h3>Source attached</h3>
          </div>
          <p className="sample-source-intro">Select a citation to inspect the evidence.</p>
          <div className="sample-source-options" role="group" aria-label="Source files">
            {sample.sources.map((item) => (
              <button
                key={item.id}
                type="button"
                aria-pressed={sourceId === item.id}
                aria-controls="sample-source-excerpt"
                onClick={() => setSourceId(item.id)}
              >
                <FileText size={14} aria-hidden="true" />
                <span>{item.label}</span>
                <ChevronRight size={14} aria-hidden="true" />
              </button>
            ))}
          </div>
          <div
            id="sample-source-excerpt"
            className="sample-excerpt"
            aria-live="polite"
            aria-atomic="true"
          >
            {source ? (
              <>
                <p>{source.location}</p>
                <blockquote>{source.excerpt}</blockquote>
              </>
            ) : (
              <p>No supporting source is available for this example.</p>
            )}
          </div>
          <Link className="sample-capability-link" href={sample.href}>
            Explore this workflow <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </aside>
      </div>
    </>
  );
}

export function WorkSampleViewer(): ReactElement {
  const [selectedId, setSelectedId] = useState<string>(workSamples[0].id);
  const selected = workSamples.find((sample) => sample.id === selectedId) ?? workSamples[0];

  return (
    <section className="sample-workbench" aria-label="Interactive illustrative work sample">
      <div className="sample-toolbar">
        <span className="sample-brand">
          PRESTYJ <span>/ Workspace</span>
        </span>
        <span className="sample-disclosure">Illustrative sample · Not live client work</span>
      </div>
      <div className="sample-workflows" role="group" aria-label="Choose a sample workflow">
        {workSamples.map((sample) => (
          <button
            key={sample.id}
            type="button"
            aria-pressed={selectedId === sample.id}
            aria-controls="sample-content"
            onClick={() => setSelectedId(sample.id)}
          >
            {sample.label}
          </button>
        ))}
      </div>
      <div id="sample-content">
        <span className="sr-only" role="status">
          Showing {selected.label} sample
        </span>
        <SampleDocument key={selected.id} sample={selected} />
      </div>
      <div className="sample-status">
        <span>
          <span aria-hidden="true" className="sample-status-dot" /> Sources connected to the answer
        </span>
        <span>Reviewed by your team. Released by your rules.</span>
      </div>
    </section>
  );
}
