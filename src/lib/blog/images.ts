import { existsSync } from "fs";
import { join } from "path";
import { type BlogCategory, fallbackImageForCategory } from "@/lib/blog/categories";

function isLocalImagePath(image: string): boolean {
  return image.startsWith("/") && !image.startsWith("//");
}

function localImageExists(image: string): boolean {
  return existsSync(join(process.cwd(), "public", image));
}

export function resolveBlogImage(image: string | undefined, category: BlogCategory): string {
  if (!image) {
    return fallbackImageForCategory(category);
  }

  if (!isLocalImagePath(image)) {
    return image;
  }

  if (localImageExists(image)) {
    return image;
  }

  return fallbackImageForCategory(category);
}
