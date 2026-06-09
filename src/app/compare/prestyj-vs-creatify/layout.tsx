import { generateCompareMetadata } from "@/lib/compare/metadata";
import { creatifyMetadata } from "@/lib/compare/data/creatify";

export const metadata = generateCompareMetadata(creatifyMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
