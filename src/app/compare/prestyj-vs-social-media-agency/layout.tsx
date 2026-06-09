import { generateCompareMetadata } from "@/lib/compare/metadata";
import { socialMediaAgencyMetadata } from "@/lib/compare/data/social-media-agency";

export const metadata = generateCompareMetadata(socialMediaAgencyMetadata);

export default function CompareLayout({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}
