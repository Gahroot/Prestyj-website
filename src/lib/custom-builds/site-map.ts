import { customBuildPath, customBuilds } from "@/lib/custom-builds/services";

/** Every public, indexable route in the custom AI builds lane. */
export const customBuildRoutes: readonly string[] = customBuilds.map((build) =>
  customBuildPath(build.slug),
);
