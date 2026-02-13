import { generateCompareMetadata } from "@/lib/compare/metadata";
import { answeringServiceMetadata } from "@/lib/compare/data/answering-service";

export const metadata = generateCompareMetadata(answeringServiceMetadata);

export default function CompareLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}
