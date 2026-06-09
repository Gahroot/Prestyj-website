import { generateCompareMetadata } from "@/lib/compare/metadata";
import { highlevelMetadata } from "@/lib/compare/data/highlevel";

export const metadata = generateCompareMetadata(highlevelMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
