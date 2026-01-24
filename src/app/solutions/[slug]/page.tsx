import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import {
  LandingHero,
  LandingPainPoints,
  LandingBenefits,
  LandingCTA,
  ObjectionAccordion,
  ROICalculator,
} from "@/components/sections/landing";
import { getSolution, getAllSolutionSlugs } from "@/lib/solutions";

interface SolutionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    return {
      title: "Solution Not Found",
    };
  }

  return {
    title: solution.meta.title,
    description: solution.meta.description,
    keywords: solution.meta.keywords,
    openGraph: {
      title: solution.meta.title,
      description: solution.meta.description,
      type: "website",
    },
  };
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main>
        <LandingHero content={solution.hero} />
        <LandingPainPoints content={solution.painPoints} />
        {solution.calculator && <ROICalculator content={solution.calculator} />}
        <LandingBenefits content={solution.benefits} />
        {solution.objections && (
          <ObjectionAccordion content={solution.objections} />
        )}
        <LandingCTA content={solution.cta} />
      </main>
      <Footer />
    </>
  );
}
