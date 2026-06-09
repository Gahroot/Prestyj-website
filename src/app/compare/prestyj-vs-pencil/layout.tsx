import { generateCompareMetadata } from "@/lib/compare/metadata";
import { pencilMetadata } from "@/lib/compare/data/pencil";

export const metadata = generateCompareMetadata(pencilMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
