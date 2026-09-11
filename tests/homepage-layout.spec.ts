import { expect, test, type Locator } from "@playwright/test";

const edgeTolerance = 1;
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

test("shows the title, subtitle, and portfolio heading initially", async ({
  page,
}) => {
  const title = page.getByTestId("opening-title");
  const subtitle = page.getByTestId("opening-subtitle");
  const portfolioHeading = page.getByTestId("portfolio-heading");

  await expectInViewport(title);
  await expectInViewport(subtitle);
  await expectInViewport(portfolioHeading);
});

test("keeps the opening elements from overlapping", async ({ page }) => {
  const hero = page.getByTestId("opening-hero");
  const title = page.getByTestId("opening-title");
  const subtitle = page.getByTestId("opening-subtitle");
  const divider = page.getByTestId("opening-divider");
  const portfolioHeading = page.getByTestId("portfolio-heading");

  await expectStackedWithoutOverlap(hero, title);
  await expectStackedWithoutOverlap(title, subtitle);
  await expectStackedWithoutOverlap(subtitle, divider);
  await expectStackedWithoutOverlap(divider, portfolioHeading);
});

test("makes the hero image and divider full viewport width", async ({
  page,
}) => {
  const image = page.getByTestId("opening-image");
  const divider = page.getByTestId("opening-divider");
  const viewport = page.viewportSize();

  expect(viewport).not.toBeNull();

  for (const element of [image, divider]) {
    const box = await element.boundingBox();

    expect(box).not.toBeNull();
    expect(Math.abs(box!.x)).toBeLessThanOrEqual(edgeTolerance);
    expect(Math.abs(box!.x + box!.width - viewport!.width)).toBeLessThanOrEqual(
      edgeTolerance,
    );
  }
});
