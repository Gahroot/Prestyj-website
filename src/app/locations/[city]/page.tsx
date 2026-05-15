import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { LocationPageClient } from "@/components/sections/locations/location-page-client";
import { getLocation, getAllLocationSlugs } from "@/lib/locations";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";

interface LocationPageProps {
  params: Promise<{ city: string }>;
}

export async function generateStaticParams() {
  return getAllLocationSlugs().map((slug) => ({ city: slug }));
}

const siteUrl = "https://prestyj.com";

export async function generateMetadata({ params }: LocationPageProps): Promise<Metadata> {
  const { city } = await params;
  const location = getLocation(city);

  if (!location) {
    return { title: "Page Not Found" };
  }

  const pageUrl = `${siteUrl}/locations/${city}`;

  return {
    title: location.meta.title,
    description: location.meta.description,
    keywords: location.meta.keywords,
    openGraph: {
      title: location.meta.title,
      description: location.meta.description,
      type: "website",
      url: pageUrl,
    },
    alternates: {
      canonical: pageUrl,
    },
  };
}

export default async function LocationPage({ params }: LocationPageProps) {
  const { city } = await params;
  const location = getLocation(city);

  if (!location) {
    notFound();
  }

  const breadcrumbs = [
    { name: "Home", url: siteUrl },
    { name: "Locations", url: `${siteUrl}/locations` },
    { name: location.city.displayName, url: `${siteUrl}/locations/${city}` },
  ];

  const serviceJsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: `Prestyj Facebook Ads for Home Services in ${location.city.displayName}`,
    description: location.meta.description,
    provider: {
      "@type": "Organization",
      name: "Prestyj",
      url: siteUrl,
    },
    areaServed: {
      "@type": "City",
      name: location.city.name,
      "@id:state": location.city.state,
    },
    serviceType: "Facebook Advertising for Home Services",
  };

  return (
    <>
      <BreadcrumbJsonLd items={breadcrumbs} />
      <FAQJsonLd faqs={location.faq} />
      <SafeJsonLd data={serviceJsonLd} />
      <Navbar />
      <main className="pt-16">
        <LocationPageClient location={location} />
      </main>
      <Footer />
    </>
  );
}
