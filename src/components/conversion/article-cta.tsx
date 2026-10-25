import Link from "next/link";
import type { ReactElement } from "react";

import { ExperimentCta } from "@/components/conversion/experiment-cta";
import { bookDemoHref } from "@/lib/attribution/cta";
import { getExperimentForPlacement } from "@/lib/conversion/cta-experiments";
import {
  getWorkflowProof,
  primaryCapability,
  proofStageLabel,
  workflowLabel,
} from "@/lib/conversion/workflow-proof";
import type { ResearchArticle } from "@/lib/institutional/research";

type ArticleCtaProps = {
  article: ResearchArticle;
  placement: "article-inline" | "article-end";
};

/** Registry-driven CTA: workflow demo link from capabilities plus stage-labeled proof. */
export function ArticleCta({ article, placement }: ArticleCtaProps): ReactElement | null {
  const experiment = getExperimentForPlacement(placement);
  if (!experiment) return null;
  const capability = primaryCapability(article);
  const label = workflowLabel(capability);
  const inline = placement === "article-inline";
  const proof = getWorkflowProof(article.capabilities, inline ? 1 : 3);

  return (
    <ExperimentCta
      experiment={experiment}
      ctaId={`${placement}:${article.slug}`}
      href={bookDemoHref(capability)}
      workflow={label.toLowerCase()}
      className={
        inline ? "not-prose bg-card my-10 border p-6 sm:p-8" : "not-prose mt-14 border-t pt-8"
      }
    >
      {proof.length > 0 ? (
        <div className="mt-6 border-t pt-5">
          <p className="text-muted-foreground text-xs font-semibold tracking-wide uppercase">
            Related proof
          </p>
          <ul className="mt-3 space-y-4">
            {proof.map((item) => (
              <li key={item.key} className="text-sm leading-6">
                <span className="text-foreground mr-2 inline-block border px-2 py-0.5 text-xs font-semibold">
                  {proofStageLabel(item.stage)}
                </span>
                {item.href ? (
                  <Link href={item.href} className="font-semibold underline underline-offset-4">
                    {item.title}
                  </Link>
                ) : (
                  <span className="font-semibold">{item.title}</span>
                )}
                {inline ? null : <p className="text-muted-foreground mt-1">{item.summary}</p>}
              </li>
            ))}
          </ul>
        </div>
      ) : null}
    </ExperimentCta>
  );
}
