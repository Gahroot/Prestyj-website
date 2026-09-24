import Link from "next/link";
import { ArrowUpRight, FileCheck2, Files, GitPullRequest, LockKeyhole } from "lucide-react";
import type { ReactElement } from "react";

const controls = [
  {
    icon: Files,
    title: "Your systems stay authoritative.",
    description:
      "The ledger, property platform, CRM, and document room remain the source of record.",
  },
  {
    icon: GitPullRequest,
    title: "Conflicts come to the surface.",
    description: "Sources, effective dates, and unresolved differences travel with the work.",
  },
  {
    icon: LockKeyhole,
    title: "Your people control the release.",
    description: "A named reviewer owns what reaches the committee, the investor, or the market.",
  },
] as const;

export function EditorialControls(): ReactElement {
  return (
    <section className="editorial-control-section" aria-labelledby="controls-title">
      <div className="editorial-rail editorial-control-layout">
        <div>
          <p className="editorial-eyebrow">Built around your judgment</p>
          <h2 id="controls-title" className="editorial-title">
            The work moves.
            <br />
            <em>The control stays.</em>
          </h2>
          <p className="editorial-control-intro">
            AI should make your firm more capable, not harder to oversee. Every workflow starts with
            its sources, boundaries, and review rules.
          </p>
          <Link className="editorial-text-link" href="/platform">
            Inside the operating model <ArrowUpRight size={16} aria-hidden="true" />
          </Link>
        </div>
        <div>
          <ol className="editorial-control-list">
            {controls.map((control) => (
              <li key={control.title}>
                <control.icon size={21} strokeWidth={1.4} aria-hidden="true" />
                <div>
                  <h3>{control.title}</h3>
                  <p>{control.description}</p>
                </div>
              </li>
            ))}
          </ol>
          <div className="editorial-release-record">
            <FileCheck2 size={19} aria-hidden="true" />
            <div>
              <strong>Finished work product</strong>
              <span>Source attached · Reviewer assigned · Release controlled</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
