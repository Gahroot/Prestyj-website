import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BestForPageClient } from "@/components/sections/best-for/best-for-page-client";
import { getBestFor, getAllBestForSlugs } from "@/lib/best-for";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { LeadMagnetBanner } from "@/components/lead-magnet/banner";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";

interface BestForPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBestForSlugs().map((slug) => ({ slug }));
}

const siteUrl = "https://prestyj.com";

// Pages targeting wrong ICP — noindex non-real-estate niches to preserve topical authority
const noindexSlugs = [
  // Solo/new agent pages (wrong ICP — we target teams/brokerages)
  "solo-agents",
  "new-agents",
  // Home services trades (wrong vertical)
  "hvac",
  "roofing",
  "plumbing",
  "solar",
  "contractors",
  "electricians",
  "landscaping-lawn-care",
  "painting-contractors",
  "window-and-door-manufacturers",
  "siding-contractors",
  "garage-door",
  "flooring-contractors",
  "pest-control",
  "movers",
  // Non-RE professional services
  "dental",
  "law-firms",
  "plastic-surgery",
  "mental-health-clinics",
  "veterinary-clinics",
  "accounting-firms",
  "auto-dealerships",
  "auto-repair-shops",
  "senior-care",
  "retail-stores",
  // Lifestyle/consumer
  "restaurants",
  "salons-and-spas",
  "gyms-and-fitness-centers",
  // Home services CRM users (wrong vertical)
  "servicetitan-users",
  "jobber-users",
  // RE voice receptionist variants that overlap with non-RE niches
  "ai-voice-receptionist-dental",
  "ai-voice-receptionist-legal",
  "ai-voice-receptionist-medical",
  "ai-voice-receptionist-insurance",
];

export async function generateMetadata({ params }: BestForPageProps): Promise<Metadata> {
  const { slug } = await params;
  const bestFor = getBestFor(slug);

  if (!bestFor) {
    return {
      title: "Page Not Found",
    };
  }

  const pageUrl = `${siteUrl}/best-for/${slug}`;
  const shouldNoindex = noindexSlugs.includes(slug);

  return {
    title: bestFor.meta.title,
    description: bestFor.meta.description,
    keywords: bestFor.meta.keywords,
    openGraph: {
      title: bestFor.meta.title,
      description: bestFor.meta.description,
      type: "website",
      url: pageUrl,
    },
    alternates: {
      canonical: pageUrl,
    },
    robots: shouldNoindex
      ? { index: false, follow: false }
      : { index: true, follow: true },
  };
}

export default async function BestForPage({ params }: BestForPageProps) {
  const { slug } = await params;
  const bestFor = getBestFor(slug);

  if (!bestFor) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Best For", url: `${siteUrl}/best-for` },
    { name: bestFor.meta.title, url: `${siteUrl}/best-for/${slug}` },
  ];

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <FAQJsonLd faqs={bestFor.faq} />
      <Navbar />
      <main className="pt-16">
        {slug === "roofing" && <LeadMagnetBanner variant="compact" />}
        <BestForPageClient bestFor={bestFor} />
      </main>
      <Footer />
    </>
  );
}
