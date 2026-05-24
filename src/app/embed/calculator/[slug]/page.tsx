import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { ExternalLink } from "lucide-react";
import { RoiCalculator } from "@/components/sections/calculator/roi-calculator";
import { BatchVideoAdRoiCalculator } from "@/components/sections/calculator/batch-video-ad-roi-calculator";
import { CostPerTestedAngleCalculator } from "@/components/sections/calculator/cost-per-tested-angle-calculator";
import { embeddableCalculators, findEmbeddableCalculator } from "@/lib/calculator/embeddable";

interface PageProps {
  params: Promise<{ slug: string }>;
}

export function generateStaticParams(): Array<{ slug: string }> {
  return embeddableCalculators.map((c) => ({ slug: c.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const calc = findEmbeddableCalculator(slug);
  if (!calc) return { title: "Calculator", robots: { index: false, follow: false } };
  return {
    title: `${calc.title} — Embed`,
    description: calc.description,
    alternates: { canonical: calc.permalink },
    robots: { index: false, follow: false },
  };
}

function renderCalculator(slug: string) {
  switch (slug) {
    case "ai-call-handling-roi":
      return <RoiCalculator />;
    case "batch-video-ad-roi":
      return <BatchVideoAdRoiCalculator />;
    case "cost-per-tested-angle":
      return <CostPerTestedAngleCalculator />;
    default:
      return null;
  }
}

export default async function CalculatorEmbedPage({ params }: PageProps) {
  const { slug } = await params;
  const calc = findEmbeddableCalculator(slug);
  if (!calc) notFound();

  return (
    <div className="px-3 py-4 sm:px-4">
      {renderCalculator(calc.slug)}

      {/* Required attribution footer — this is the backlink. */}
      <footer className="border-border/60 mx-auto mt-6 flex max-w-3xl flex-wrap items-center justify-between gap-2 border-t pt-4 text-xs">
        <span className="text-muted-foreground">{calc.title}</span>
        <Link
          href={calc.permalink}
          target="_top"
          rel="noopener"
          className="text-primary inline-flex items-center gap-1 font-medium hover:underline"
        >
          Powered by Prestyj <ExternalLink className="h-3 w-3" aria-hidden />
        </Link>
      </footer>
    </div>
  );
}
