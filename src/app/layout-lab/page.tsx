import type { Metadata } from "next";
import type { ReactElement } from "react";

import { LayoutGallery } from "@/components/layout-lab/layout-gallery";

export const metadata: Metadata = {
  title: "Homepage Concepts",
};

export default function LayoutLabPage(): ReactElement {
  return <LayoutGallery />;
}
