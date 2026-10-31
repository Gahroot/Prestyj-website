import type { Metadata } from "next";

import { CustomBuildPage } from "@/components/sections/custom-builds/custom-build-page";
import { SafeJsonLd } from "@/components/seo/safe-json-ld";
import { customBuildJsonLd, customBuildMetadata } from "@/lib/custom-builds/metadata";
import { getCustomBuild } from "@/lib/custom-builds/services";

const build = getCustomBuild("enterprise-ai-automation");

export const metadata: Metadata = customBuildMetadata(build);

export default function Page() {
  return (
    <>
      {customBuildJsonLd(build).map((data, index) => (
        <SafeJsonLd key={index} data={data} />
      ))}
      <CustomBuildPage build={build} />
    </>
  );
}
