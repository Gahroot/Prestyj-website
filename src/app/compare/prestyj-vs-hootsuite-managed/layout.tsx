import { generateCompareMetadata } from "@/lib/compare/metadata";
import { hootsuiteManagedMetadata } from "@/lib/compare/data/hootsuite-managed";

export const metadata = generateCompareMetadata(hootsuiteManagedMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
