import Link from "next/link";
import { ArrowUpRight, FileSearch2, MessagesSquare, Phone } from "lucide-react";
import type { ReactElement } from "react";

const workflows = [
  {
    number: "01",
    icon: FileSearch2,
    title: "Move the deal forward.",
    description:
      "Turn the data room into a diligence brief, lease abstract, or IC draft. Keep the evidence connected to every material finding.",
    output: "Diligence brief · Lease abstract · IC materials",
    href: "/capabilities/deal-diligence",
    link: "Explore deal diligence",
  },
  {
    number: "02",
    icon: MessagesSquare,
    title: "Give the LP an answer.",
    description:
      "Prepare investor responses and reporting packages from the underlying records. Bring exceptions to the reviewer, not into the final answer.",
    output: "Investor response · Quarterly package · Exception log",
    href: "/capabilities/investor-reporting",
    link: "Explore investor reporting",
  },
  {
    number: "03",
    icon: Phone,
    title: "Keep the conversation moving.",
    description:
      "Answer the inquiry, capture the requirement, and hand the broker the context. Your routing rules determine what happens next.",
    output: "Qualified inquiry · Transcript · Broker handoff",
    href: "/capabilities/origination",
    link: "Explore origination",
  },
] as const;

export function EditorialWorkflows(): ReactElement {
  return (
    <section
      id="workflows"
      className="editorial-section editorial-workflows"
      aria-labelledby="workflows-title"
    >
      <div className="editorial-rail">
        <div className="editorial-section-heading">
          <div>
            <p className="editorial-eyebrow">The work, not another workspace</p>
            <h2 id="workflows-title" className="editorial-title">
              Less carrying the process.
              <br />
              <em>More moving it forward.</em>
            </h2>
          </div>
          <p>
            Your team knows the next decision. We take on the recurring work that stands between
            here and there.
          </p>
        </div>
        <div className="editorial-workflow-grid">
          {workflows.map((workflow) => (
            <article key={workflow.number} className="editorial-workflow">
              <div className="editorial-workflow-marker">
                <workflow.icon size={22} strokeWidth={1.4} aria-hidden="true" />
                <span>{workflow.number}</span>
              </div>
              <h3>{workflow.title}</h3>
              <p>{workflow.description}</p>
              <p className="editorial-workflow-output">{workflow.output}</p>
              <Link className="editorial-text-link" href={workflow.href}>
                {workflow.link}
                <ArrowUpRight size={16} aria-hidden="true" />
              </Link>
            </article>
          ))}
        </div>
        <div className="editorial-related-work">
          <span>Across the rest of the firm</span>
          <Link href="/capabilities/fund-operations">
            Fund operations <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          <Link href="/capabilities/portfolio-intelligence">
            Portfolio intelligence <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
          <Link href="/capabilities/listing-media">
            Listing media <ArrowUpRight size={14} aria-hidden="true" />
          </Link>
        </div>
      </div>
    </section>
  );
}
