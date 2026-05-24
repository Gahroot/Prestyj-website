import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { findStatById, getAllStatIds } from "@/lib/statistics";
import { StatEmbedCard } from "@/components/embed/stat-embed-card";

interface PageProps {
  params: Promise<{ id: string }>;
}

export function generateStaticParams(): Array<{ id: string }> {
  return getAllStatIds().map((id) => ({ id }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { id } = await params;
  const stat = findStatById(id);
  if (!stat) return { title: "Statistic", robots: { index: false, follow: false } };
  return {
    title: `${stat.value} — ${stat.categoryTitle}`,
    description: stat.description,
    alternates: { canonical: stat.permalink },
    robots: { index: false, follow: false },
  };
}

export default async function StatEmbedPage({ params }: PageProps) {
  const { id } = await params;
  const stat = findStatById(id);
  if (!stat) notFound();

  return (
    <div className="flex min-h-[100svh] items-center justify-center p-3 sm:p-4">
      <StatEmbedCard stat={stat} />
    </div>
  );
}
