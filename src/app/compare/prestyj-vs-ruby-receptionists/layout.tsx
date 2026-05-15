import { generateCompareMetadata } from "@/lib/compare/metadata";
import { rubyReceptionistsCompareMetadata } from "@/lib/compare/data/ruby-receptionists";

export const metadata = generateCompareMetadata(rubyReceptionistsCompareMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
