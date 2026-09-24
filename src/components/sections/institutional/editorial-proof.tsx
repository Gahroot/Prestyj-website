import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Check } from "lucide-react";
import type { ReactElement } from "react";

import { proofRecords } from "@/lib/institutional/proof";

export function EditorialProof(): ReactElement | null {
  const record = proofRecords.find((item) => item.name === "Fund administration platform");
  if (!record) return null;

  return (
    <section className="editorial-section" aria-labelledby="proof-title">
      <div className="editorial-rail">
        <div className="editorial-section-heading">
          <div>
            <p className="editorial-eyebrow">Selected work</p>
            <h2 id="proof-title" className="editorial-title">
              Built for the real world.
              <br />
              <em>Not just the demo.</em>
            </h2>
          </div>
          <Link className="editorial-text-link" href="/results">
            Explore our work <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <article className="editorial-proof-feature">
          <div className="editorial-proof-image">
            <Image
              src="/images/institutional/limestone-detail.webp"
              alt=""
              fill
              sizes="(min-width: 1024px) 550px, 100vw"
              className="editorial-stage-image"
            />
            <span>Architectural illustration · AI-generated</span>
          </div>
          <div className="editorial-proof-copy">
            <p className="editorial-eyebrow">
              {record.audience} / {record.stage}
            </p>
            <h3>
              A decade-old system.
              <br />A controlled transition.
            </h3>
            <p>{record.delivered}</p>
            <ul>
              {record.controls.map((control) => (
                <li key={control}>
                  <Check size={16} aria-hidden="true" />
                  {control}
                </li>
              ))}
            </ul>
            <p className="editorial-proof-disclosure">
              Anonymized project. Client identity and internal records are not published.
            </p>
            <Link className="editorial-text-link" href="/results">
              See the delivery record <ArrowUpRight size={16} aria-hidden="true" />
            </Link>
          </div>
        </article>
      </div>
    </section>
  );
}
