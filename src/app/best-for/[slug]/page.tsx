import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { BestForPageClient } from "@/components/sections/best-for/best-for-page-client";
import { getBestFor, getAllBestForSlugs } from "@/lib/best-for";

interface BestForPageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllBestForSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: BestForPageProps): Promise<Metadata> {
  const { slug } = await params;
  const bestFor = getBestFor(slug);

  if (!bestFor) {
    return {
      title: "Page Not Found",
    };
  }

  return {
    title: bestFor.meta.title,
    description: bestFor.meta.description,
    keywords: bestFor.meta.keywords,
    openGraph: {
      title: bestFor.meta.title,
      description: bestFor.meta.description,
      type: "website",
    },
  };
}

export default async function BestForPage({ params }: BestForPageProps) {
  const { slug } = await params;
  const bestFor = getBestFor(slug);

  if (!bestFor) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <BestForPageClient bestFor={bestFor} />
      </main>
      <Footer />
    </>
  );
}
