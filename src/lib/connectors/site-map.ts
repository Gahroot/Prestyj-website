import { connectorGuidePath, connectorGuides } from "@/lib/connectors/guides";
import { connectorServicePath, connectorServices } from "@/lib/connectors/services";
import { connectorSystemPath, connectorSystems } from "@/lib/connectors/systems";

export const connectorHubRoute = "/connectors" as const;

export const connectorServiceRoutes = connectorServices.map((service) =>
  connectorServicePath(service.slug),
);

export const connectorGuideRoutes = connectorGuides.map((guide) => connectorGuidePath(guide.slug));

export const connectorSystemRoutes = connectorSystems.map((system) =>
  connectorSystemPath(system.slug),
);

/** Every public, indexable route in the connectors offer. */
export const connectorRoutes: readonly string[] = [
  connectorHubRoute,
  ...connectorServiceRoutes,
  ...connectorGuideRoutes,
  ...connectorSystemRoutes,
];
