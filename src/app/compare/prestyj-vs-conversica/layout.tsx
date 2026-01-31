import { generateCompareMetadata } from "@/lib/compare/metadata";
import { conversicaMetadata } from "@/lib/compare/data/conversica";

export const metadata = generateCompareMetadata(conversicaMetadata);

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
