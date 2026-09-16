import { expect, test } from "@playwright/test";
import { readFile, readdir, stat } from "node:fs/promises";
import path from "node:path";

const sourceDirectory = path.join(process.cwd(), "src");
const publicDirectory = path.join(process.cwd(), "public");
const sourceExtensions = new Set([
  ".astro",
  ".css",
  ".html",
  ".md",
  ".ts",
  ".tsx",
]);
const optimizedExtensions = new Set([".avif", ".svg", ".webp"]);
const allowedPngGraphics = new Set([
  "/resources/images/projects/friends-in-flats-revenue-graph.png",
  "/resources/images/projects/panda-dance.png",
  "/resources/images/projects/tip-yourself-logo-white.png",
]);
const socialSharingImage =
  "/resources/images/people/lukas/og-lukas-carvajal.jpg";
const maxImageBytes = 1_000_000;

async function collectReferencedImages(
  directory: string,
): Promise<Set<string>> {
  const images = new Set<string>();

  for (const entry of await readdir(directory, { withFileTypes: true })) {
    const entryPath = path.join(directory, entry.name);

    if (entry.isDirectory()) {
      for (const image of await collectReferencedImages(entryPath)) {
        images.add(image);
      }
    } else if (sourceExtensions.has(path.extname(entry.name))) {
      const source = await readFile(entryPath, "utf8");

      for (const match of source.matchAll(
        /\/resources\/images\/[A-Za-z0-9._/-]+/g,
      )) {
        images.add(match[0]);
      }
    }
  }

  return images;
}

test("uses optimized image assets for site references", async () => {
  const images = await collectReferencedImages(sourceDirectory);
  const problems: string[] = [];

  for (const image of images) {
    const extension = path.extname(image).toLowerCase();
    const allowedFormat =
      optimizedExtensions.has(extension) ||
      allowedPngGraphics.has(image) ||
      image === socialSharingImage;

    if (!allowedFormat) {
      problems.push(`${image}: unsupported or unoptimized format`);
      continue;
    }

    try {
      const asset = await stat(path.join(publicDirectory, image.slice(1)));

      if (asset.size > maxImageBytes) {
        problems.push(`${image}: ${asset.size} bytes exceeds ${maxImageBytes}`);
      }
    } catch {
      problems.push(`${image}: referenced file is missing`);
    }
  }

  expect(problems).toEqual([]);
});
