import Link from "next/link";
import { ArrowUpRight, AudioLines, Plus } from "lucide-react";
import type { ReactElement } from "react";

import { Button } from "@/components/ui/button";
import { homepageFaqs } from "@/lib/homepage-faq-data";

export function EditorialClose(): ReactElement {
  return (
    <>
      <section className="editorial-voice-section" aria-labelledby="voice-title">
        <div className="editorial-rail editorial-voice-layout">
          <div className="editorial-voice-label">
            <AudioLines size={26} strokeWidth={1.4} aria-hidden="true" />
            <span>Experience the technology</span>
          </div>
          <div>
            <h2 id="voice-title">A conversation. Then a useful handoff.</h2>
            <p>
              Explore our AI voice demo for brokerage inquiries. Microphone access starts only when
              you choose to begin.
            </p>
          </div>
          <Button asChild variant="outline">
            <Link href="/demo">
              Try the voice agent <ArrowUpRight aria-hidden="true" />
            </Link>
          </Button>
        </div>
      </section>
      <section className="editorial-section" aria-labelledby="questions-title">
        <div className="editorial-rail editorial-faq-layout">
          <div>
            <p className="editorial-eyebrow">Before we get to work</p>
            <h2 id="questions-title" className="editorial-title">
              Good questions.
              <br />
              <em>Clear answers.</em>
            </h2>
            <p className="editorial-faq-intro">
              The practical details of putting AI to work inside your firm.
            </p>
          </div>
          <div className="editorial-faq-list">
            {homepageFaqs.map((faq) => (
              <details key={faq.question}>
                <summary>
                  {faq.question}
                  <Plus size={17} aria-hidden="true" />
                </summary>
                <p>{faq.answer}</p>
              </details>
            ))}
          </div>
        </div>
      </section>
      <section className="editorial-final-cta" aria-labelledby="next-step-title">
        <div className="editorial-rail editorial-final-layout">
          <div>
            <p className="editorial-eyebrow">Start with one workflow</p>
            <h2 id="next-step-title" className="editorial-title">
              Bring the work.
              <br />
              <em>We’ll take it from here.</em>
            </h2>
            <p>
              Show us the process, the source systems, and who reviews the result. We’ll map a first
              proof worth running.
            </p>
          </div>
          <div className="editorial-final-action">
            <Button asChild size="lg">
              <Link href="/book-demo">
                Book a workflow demo <ArrowUpRight aria-hidden="true" />
              </Link>
            </Button>
            <span>One conversation. A concrete next step.</span>
          </div>
        </div>
      </section>
    </>
  );
}
