import type { ReactElement } from "react";

import { ConversionLayout } from "@/components/layout-lab/families/conversion-layouts";
import { EditorialLayout } from "@/components/layout-lab/families/editorial-layouts";
import { LedgerLayout } from "@/components/layout-lab/families/ledger-layouts";
import { NarrativeLayout } from "@/components/layout-lab/families/narrative-layouts";
import { ProofLayout } from "@/components/layout-lab/families/proof-layouts";
import { WorkbenchLayout } from "@/components/layout-lab/families/workbench-layouts";
import type { LayoutRecipe } from "@/lib/layout-lab/layouts";

export function LayoutPrototype({ recipe }: { recipe: LayoutRecipe }): ReactElement {
  switch (recipe.family) {
    case "editorial":
      return <EditorialLayout recipe={recipe} />;
    case "ledger":
      return <LedgerLayout recipe={recipe} />;
    case "workbench":
      return <WorkbenchLayout recipe={recipe} />;
    case "proof":
      return <ProofLayout recipe={recipe} />;
    case "narrative":
      return <NarrativeLayout recipe={recipe} />;
    case "conversion":
      return <ConversionLayout recipe={recipe} />;
  }
}
