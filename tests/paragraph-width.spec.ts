import { expect, test } from "@playwright/test";

const renderingTolerance = 1;

test("keeps paragraphs within the text content width", async ({ page }) => {
  await page.goto("/");

  const paragraphs = page.locator("p:visible");

  for (let index = 0; index < (await paragraphs.count()); index += 1) {
    const paragraph = paragraphs.nth(index);
    const box = await paragraph.boundingBox();
    const textContentWidth = await paragraph.evaluate((element) => {
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

    expect(box).not.toBeNull();
    expect(box!.width, `paragraph ${index + 1}`).toBeLessThanOrEqual(
      textContentWidth + renderingTolerance,
    );
  }
});
