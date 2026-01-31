import { generateCompareMetadata } from "@/lib/compare/metadata";
import { ylopoMetadata } from "@/lib/compare/data/ylopo";

export const metadata = generateCompareMetadata(ylopoMetadata);

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
