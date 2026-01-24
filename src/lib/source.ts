import { blog } from "../../.source/server";
import { loader } from "fumadocs-core/source";

export const blogSource = loader({
  source: blog.toFumadocsSource(),
  baseUrl: "/blog",
});
