// @ts-check
import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://portal.cdp-int.defra.cloud/');

  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Home | Core Delivery Platform - Portal/);
});

test('Documentation page loads', async ({ page }) => {
  await page.goto('https://portal.cdp-int.defra.cloud/');

  // Click the Documentation link
  await page.getByTestId('nav-documentation').click();

  // Expects page to have a heading with the name Documentation.
  await expect(page).toHaveTitle(/Documentation - Home | Core Delivery Platform - Portal/);
});
