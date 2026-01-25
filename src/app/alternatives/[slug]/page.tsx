import { notFound } from "next/navigation";
import type { Metadata } from "next";
import { Navbar } from "@/components/layout/navbar";
import { Footer } from "@/components/layout/footer";
import { AlternativePageClient } from "@/components/sections/alternatives/alternative-page-client";
import { getAlternative, getAllAlternativeSlugs } from "@/lib/alternatives";

interface AlternativePageProps {
  params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
  return getAllAlternativeSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: AlternativePageProps): Promise<Metadata> {
  const { slug } = await params;
  const alternative = getAlternative(slug);

  if (!alternative) {
    return {
      title: "Alternative Not Found",
    };
  }

  return {
    title: alternative.meta.title,
    description: alternative.meta.description,
    keywords: alternative.meta.keywords,
    openGraph: {
      title: alternative.meta.title,
      description: alternative.meta.description,
      type: "website",
    },
  };
}

export default async function AlternativePage({ params }: AlternativePageProps) {
  const { slug } = await params;
  const alternative = getAlternative(slug);

  if (!alternative) {
    notFound();
  }

  return (
    <>
      <Navbar />
      <main className="pt-16">
        <AlternativePageClient alternative={alternative} />
      </main>
      <Footer />
    </>
  );
}
