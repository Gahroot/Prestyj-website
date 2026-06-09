import { generateCompareMetadata } from "@/lib/compare/metadata";
import { cmosVsInHouseVideoMetadata } from "@/lib/compare/data/prestyj-vs-in-house-video-for-cmos";

export const metadata = generateCompareMetadata(cmosVsInHouseVideoMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
