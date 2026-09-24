import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import type { ReactElement } from "react";

import { Button } from "@/components/ui/button";
import { WorkSampleViewer } from "@/components/sections/institutional/work-sample-viewer";

export function EditorialHero(): ReactElement {
  return (
    <section className="editorial-hero" aria-labelledby="hero-title">
      <div className="editorial-rail">
        <div className="editorial-hero-intro">
          <div>
            <p className="editorial-eyebrow">AI agents for institutional real estate</p>
            <h1 id="hero-title" className="editorial-display">
              Your next move.
              <br />
              <em>Already in the works.</em>
            </h1>
          </div>
          <div className="editorial-hero-summary">
            <p>
              From the deal room to the LP inbox, Prestyj builds and runs AI agents that deliver
              finished work. Source attached. Your team in control.
            </p>
            <div className="editorial-actions">
              <Button asChild size="lg">
                <Link href="/book-demo">
                  Book a workflow demo <ArrowUpRight aria-hidden="true" />
                </Link>
              </Button>
              <a className="editorial-text-link" href="#sample-work">
                Explore sample work <ArrowDown size={16} aria-hidden="true" />
              </a>
            </div>
          </div>
        </div>
        <div id="sample-work" className="editorial-product-stage">
          <Image
            src="/images/institutional/limestone-courtyard.webp"
            alt=""
            fill
            priority
            sizes="(min-width: 1280px) 1216px, 100vw"
            className="editorial-stage-image"
          />
          <div className="editorial-stage-content">
            <h2 className="sr-only">Explore a source-linked work sample</h2>
            <WorkSampleViewer />
          </div>
        </div>
        <div className="editorial-audience-strip">
          <p>
            Built for the people
            <br />
            behind the portfolio.
          </p>
          <Link href="/for/investment-funds">
            Investment funds <span>$500M+ AUM</span>
          </Link>
          <Link href="/for/commercial-brokerages">
            Commercial brokerages <span>From inquiry to handoff</span>
          </Link>
          <Link href="/for/owner-operators">
            Owner-operators <span>Across the asset lifecycle</span>
          </Link>
        </div>
      </div>
    </section>
  );
}
