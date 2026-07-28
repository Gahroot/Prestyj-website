import type { Metadata } from "next";
import { formatCurrencyCompact } from "@/lib/ai-first-audit/format";
import { parseAuditResult } from "@/lib/ai-first-audit/result-version";
import { prisma } from "@/lib/prisma";

interface RouteParams {
  params: Promise<{ slug: string }>;
}

export async function generateMetadata({ params }: RouteParams): Promise<Metadata> {
  const { slug } = await params;
  const audit = await prisma.aiFirstAudit.findUnique({ where: { shareSlug: slug } });
  const result = audit?.status === "FINALIZED" ? parseAuditResult(audit.resultJson) : null;

  let title = "AI-First Audit report";
  let description = "A private cost and readiness audit from Prestyj.";
  if (result?.version === 1) {
    title = `${result.context.firstName}'s AI-First Audit`;
    description = `Saved version 1 report with an original value of ${formatCurrencyCompact(result.headlineDollars)}.`;
  } else if (result?.version === 2) {
    const top = result.topThree[0];
    if (top) {
      title = `Fix this first: ${top.input.title}`;
      description = `Estimated yearly time cost, business impact, readiness, and the first fix plan for ${top.input.title}.`;
    }
  }

  return {
    title,
    description,
    openGraph: {
      title,
      description,
      type: "article",
      url: `https://prestyj.com/ai-first-audit/r/${slug}`,
    },
    twitter: { card: "summary_large_image", title, description },
    robots: { index: false, follow: false },
  };
}

export default function ShareLayout({ children }: { children: React.ReactNode }) {
  return children;
}
