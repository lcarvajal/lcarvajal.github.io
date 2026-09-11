import { expect, test } from "@playwright/test";

const renderingTolerance = 1;

test("keeps paragraphs and headings within the text content width", async ({
  baseURL,
  page,
}) => {
  const origin = new URL(baseURL!).origin;
  const pendingPaths = ["/"];
  const visitedPaths = new Set<string>();

  while (pendingPaths.length > 0) {
    const path = pendingPaths.shift()!;

    if (visitedPaths.has(path)) continue;
    visitedPaths.add(path);

    await page.goto(path);

    const textElements = page.locator(
      "p:visible, h1:visible, h2:visible, h3:visible, h4:visible, h5:visible, h6:visible",
    );

    for (let index = 0; index < (await textElements.count()); index += 1) {
      const textElement = textElements.nth(index);
      const box = await textElement.boundingBox();
      const textContentWidth = await textElement.evaluate((element) => {
        const probe = document.createElement("div");
        probe.style.position = "fixed";
        probe.style.visibility = "hidden";
        probe.style.font = getComputedStyle(element).font;
        probe.style.width = "var(--width-text)";
        element.parentElement!.append(probe);

        const width = probe.getBoundingClientRect().width;
        probe.remove();

        return width;
      });

      const tagName = await textElement.evaluate((element) =>
        element.tagName.toLowerCase(),
      );

      expect(box, `${tagName} ${index + 1} on ${path}`).not.toBeNull();
      expect(
        box!.width,
        `${tagName} ${index + 1} on ${path}`,
      ).toBeLessThanOrEqual(textContentWidth + renderingTolerance);
    }

    const internalPaths = await page.locator("a[href]").evaluateAll(
      (links, currentOrigin) =>
        links
          .map((link) => new URL((link as HTMLAnchorElement).href))
          .filter(
            (url) =>
              url.origin === currentOrigin &&
              !url.pathname.startsWith("/haha-panda/"),
          )
          .map((url) => url.pathname),
      origin,
    );

    for (const internalPath of internalPaths) {
      if (!visitedPaths.has(internalPath)) pendingPaths.push(internalPath);
    }
  }
});
