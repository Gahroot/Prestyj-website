import { generateCompareMetadata } from "@/lib/compare/metadata";
import { plumbingContractorsVsFiverrVideoMetadata } from "@/lib/compare/data/prestyj-vs-fiverr-video-for-plumbing-contractors";

export const metadata = generateCompareMetadata(plumbingContractorsVsFiverrVideoMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
