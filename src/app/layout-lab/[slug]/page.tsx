import type { Metadata } from "next";
import { notFound } from "next/navigation";
import type { ReactElement } from "react";

import { LabNavigation } from "@/components/layout-lab/lab-navigation";
import { LayoutPrototype } from "@/components/layout-lab/layout-prototype";
import { getLayoutRecipe, layouts } from "@/lib/layout-lab/layouts";

export const dynamicParams = false;

type LayoutPageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams(): { slug: string }[] {
  return layouts.map(({ slug }) => ({ slug }));
}

export async function generateMetadata({ params }: LayoutPageProps): Promise<Metadata> {
  const recipe = getLayoutRecipe((await params).slug);
  if (!recipe) return {};

  return {
    title: recipe.title,
    description: `${recipe.title}, concept ${recipe.number} in the private Prestyj homepage layout lab.`,
  };
}

export default async function LayoutConceptPage({
  params,
}: LayoutPageProps): Promise<ReactElement> {
  const recipe = getLayoutRecipe((await params).slug);
  if (!recipe) notFound();

  const index = layouts.findIndex(({ slug }) => slug === recipe.slug);
  const previous = layouts[(index - 1 + layouts.length) % layouts.length];
  const next = layouts[(index + 1) % layouts.length];

  if (!previous || !next) notFound();

  return (
    <>
      <LabNavigation recipe={recipe} previous={previous} next={next} total={layouts.length} />
      <div id="main-content">
        <LayoutPrototype recipe={recipe} />
      </div>
    </>
  );
}
