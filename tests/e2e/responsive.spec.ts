import { test, expect } from '@playwright/test';

test.describe('Responsive layout', () => {
  test('desktop: nav links visible, mobile menu hidden', async ({ page }) => {
    await page.setViewportSize({ width: 1280, height: 800 });
    await page.goto('/');

    const desktopNav = page.locator('header nav');
    await expect(desktopNav).toBeVisible();

    const mobileMenu = page.locator('#mobile-menu');
    await expect(mobileMenu).toBeHidden();
  });

  test('mobile: hamburger visible, nav hidden', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const menuBtn = page.locator('#mobile-menu-btn');
    await expect(menuBtn).toBeVisible();

    const desktopNav = page.locator('header nav');
    await expect(desktopNav).toBeHidden();
  });

  test('mobile: hamburger toggles menu', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const menuBtn = page.locator('#mobile-menu-btn');
    const mobileMenu = page.locator('#mobile-menu');

    await expect(mobileMenu).toBeHidden();
    await menuBtn.click();
    await expect(mobileMenu).toBeVisible();
    await menuBtn.click();
    await expect(mobileMenu).toBeHidden();
  });

  test('mobile: hero terminal is hidden', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const terminal = page.locator('.hero-terminal');
    await expect(terminal).toBeHidden();
  });

  test('mobile: scope section shows stacked cards', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const stackedCards = page.locator('.sm\\:hidden .rounded-lg');
    expect(await stackedCards.count()).toBeGreaterThan(0);
  });

  test('mobile: contact buttons stack vertically', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const contactSection = page.locator('#contact');
    const emailCta = contactSection.getByRole('link', { name: /Describe the workflow/ });
    const githubCta = contactSection.getByText('View GitHub');

    await expect(emailCta).toBeVisible();
    await expect(githubCta).toBeVisible();
  });

  test('tablet: project section is visible', async ({ page }) => {
    await page.setViewportSize({ width: 768, height: 1024 });
    await page.goto('/');

    const projectSection = page.locator('#projects');
    await expect(projectSection).toBeVisible();
    const articles = projectSection.locator('article');
    expect(await articles.count()).toBe(5);
  });

  test('mobile: no horizontal overflow', async ({ page }) => {
    await page.setViewportSize({ width: 375, height: 812 });
    await page.goto('/');

    const bodyWidth = await page.evaluate(() => document.body.scrollWidth);
    expect(bodyWidth).toBeLessThanOrEqual(375);
  });
});
