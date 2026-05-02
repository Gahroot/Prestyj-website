import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LeadMagnetBanner } from "@/components/lead-magnet/banner";
import {
  LandingHero,
  LandingPainPoints,
  LandingBenefits,
  LandingCTA,
  ObjectionAccordion,
  ROICalculator,
} from "@/components/sections/landing";
import { getSolution, getAllSolutionSlugs } from "@/lib/solutions";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

interface SolutionPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllSolutionSlugs().map((slug) => ({ slug }));
}

const siteUrl = "https://prestyj.com";

export async function generateMetadata({ params }: SolutionPageProps): Promise<Metadata> {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    return {
      title: "Solution Not Found",
    };
  }

  const pageUrl = `${siteUrl}/solutions/${slug}`;

  return {
    title: solution.meta.title,
    description: solution.meta.description,
    keywords: solution.meta.keywords,
    openGraph: {
      title: solution.meta.title,
      description: solution.meta.description,
      type: "website",
      url: pageUrl,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function SolutionPage({ params }: SolutionPageProps) {
  const { slug } = await params;
  const solution = getSolution(slug);

  if (!solution) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Solutions", url: `${siteUrl}/solutions` },
    { name: solution.meta.title, url: `${siteUrl}/solutions/${slug}` },
  ];

  // Build FAQ items from solution FAQs and objections
  const faqItems: { question: string; answer: string }[] = [];
  if (solution.faqs) {
    faqItems.push(...solution.faqs);
  }
  if (solution.objections) {
    faqItems.push(
      ...solution.objections.objections.map((o) => ({
        question: o.objection,
        answer: o.response,
      })),
    );
  }

  // Service schema for this specific solution
  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: solution.meta.title,
    description: solution.meta.description,
    provider: {
      "@type": "Organization",
      name: "PRESTYJ",
      url: siteUrl,
    },
    areaServed: "United States",
  };

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <SafeJsonLd data={serviceSchema} />
      {faqItems.length > 0 && <FAQJsonLd faqs={faqItems} />}
      <Navbar />
      <main>
        <LandingHero content={solution.hero} />
        {slug === "roofing" && <LeadMagnetBanner variant="roofing" />}
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
