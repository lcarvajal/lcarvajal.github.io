import { expect, test, type Locator } from "@playwright/test";

const edgeTolerance = 1;
const shortViewportMaxHeight = 640;
const viewportTolerance = 4;

async function expectInViewport(element: Locator) {
  const box = await element.boundingBox();
  const viewport = element.page().viewportSize();

  expect(box).not.toBeNull();
  expect(viewport).not.toBeNull();
  expect(box!.x).toBeGreaterThanOrEqual(-viewportTolerance);
  expect(box!.y).toBeGreaterThanOrEqual(-viewportTolerance);
  expect(box!.x + box!.width).toBeLessThanOrEqual(
    viewport!.width + viewportTolerance,
  );
  expect(box!.y + box!.height).toBeLessThanOrEqual(
    viewport!.height + viewportTolerance,
  );
}

async function expectStackedWithoutOverlap(first: Locator, second: Locator) {
  const [firstBox, secondBox] = await Promise.all([
    first.boundingBox(),
    second.boundingBox(),
  ]);

  expect(firstBox).not.toBeNull();
  expect(secondBox).not.toBeNull();

  expect(firstBox!.y + firstBox!.height).toBeLessThanOrEqual(secondBox!.y);
}

test.beforeEach(async ({ page }) => {
  await page.goto("/");
  await page.evaluate(() => document.fonts.ready);
});

test("shows the title initially", async ({ page }) => {
  const title = page.getByTestId("opening-title");

  await expectInViewport(title);
});

test("keeps the opening elements from overlapping", async ({ page }) => {
  const hero = page.getByTestId("opening-hero");
  const title = page.getByTestId("opening-title");

  if (await hero.isVisible()) {
    await expectStackedWithoutOverlap(hero, title);
  }
});

test("sizes the hero image for the viewport", async ({ page }) => {
  const image = page.getByTestId("opening-image");
  const viewport = page.viewportSize();

  expect(viewport).not.toBeNull();

  if (viewport!.height <= shortViewportMaxHeight) {
    await expect(image).toBeHidden();
  } else {
    const imageBox = await image.boundingBox();

    expect(imageBox).not.toBeNull();
    expect(Math.abs(imageBox!.x)).toBeLessThanOrEqual(edgeTolerance);
    expect(
      Math.abs(imageBox!.x + imageBox!.width - viewport!.width),
    ).toBeLessThanOrEqual(edgeTolerance);
  }
});
