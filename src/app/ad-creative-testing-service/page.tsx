import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { BreadcrumbJsonLd } from "@/components/seo/breadcrumb-json-ld";
import { FAQJsonLd } from "@/components/seo/json-ld";
import { OrganicIntentPage } from "@/components/sections/batch-video-ads/organic-intent-page";
import { getOrganicIntentPage } from "@/lib/batch-video-ads/organic-pages";

const slug = "ad-creative-testing-service";
const pageUrl = `https://prestyj.com/${slug}`;
const page = getOrganicIntentPage(slug);

export const metadata: Metadata = {
  title: page?.title ?? "Ad Creative Testing Service",
  description: page?.description,
  keywords: page?.keywords,
  openGraph: {
    title: page?.title ?? "Ad Creative Testing Service",
    description: page?.description,
    type: "website",
    url: pageUrl,
  },
  alternates: { canonical: pageUrl },
};

export default function AdCreativeTestingServicePage() {
  if (!page) {
    notFound();
  }

  return (
    <>
      <FAQJsonLd faqs={page.faqs} />
      <BreadcrumbJsonLd
        items={[
          { name: "Home", url: "https://prestyj.com" },
          { name: page.breadcrumbLabel, url: pageUrl },
        ]}
      />
      <OrganicIntentPage page={page} />
    </>
  );
}
