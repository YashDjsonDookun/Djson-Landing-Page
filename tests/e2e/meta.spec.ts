import { test, expect } from '@playwright/test';

test.describe('SEO metadata', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('has correct page title', async ({ page }) => {
    await expect(page).toHaveTitle('Yash Djson Dookun — Lightweight Business Systems & APIs for SMEs');
  });

  test('has meta description', async ({ page }) => {
    const description = page.locator('meta[name="description"]');
    await expect(description).toHaveAttribute(
      'content',
      'Practical internal systems, backend APIs, dashboards, data tools, and lightweight websites for SMEs.'
    );
  });

  test('has OpenGraph title', async ({ page }) => {
    const ogTitle = page.locator('meta[property="og:title"]');
    await expect(ogTitle).toHaveAttribute('content', /Yash Djson Dookun/);
  });

  test('has OpenGraph description', async ({ page }) => {
    const ogDesc = page.locator('meta[property="og:description"]');
    await expect(ogDesc).toHaveAttribute('content', /internal systems/i);
  });

  test('has OpenGraph image', async ({ page }) => {
    const ogImage = page.locator('meta[property="og:image"]');
    await expect(ogImage).toHaveAttribute('content', /og-image\.png/);
  });

  test('has Twitter card meta', async ({ page }) => {
    const twitterCard = page.locator('meta[name="twitter:card"]');
    await expect(twitterCard).toHaveAttribute('content', 'summary_large_image');

    const twitterTitle = page.locator('meta[name="twitter:title"]');
    await expect(twitterTitle).toHaveAttribute('content', /Yash Djson Dookun/);
  });

  test('has canonical URL', async ({ page }) => {
    const canonical = page.locator('link[rel="canonical"]');
    await expect(canonical).toHaveAttribute('href', /yashdookun/);
  });

  test('has JSON-LD structured data', async ({ page }) => {
    const jsonLd = page.locator('script[type="application/ld+json"]');
    await expect(jsonLd).toBeAttached();
    const content = await jsonLd.textContent();
    expect(content).toContain('ProfessionalService');
    expect(content).toContain('Yash Djson Dookun');
    expect(content).toContain('Mauritius');
  });

  test('has theme-color meta tags', async ({ page }) => {
    const lightTheme = page.locator('meta[name="theme-color"][media="(prefers-color-scheme: light)"]');
    await expect(lightTheme).toHaveAttribute('content', '#FAF9F6');

    const darkTheme = page.locator('meta[name="theme-color"][media="(prefers-color-scheme: dark)"]');
    await expect(darkTheme).toHaveAttribute('content', '#111214');
  });

  test('has favicon', async ({ page }) => {
    const favicon = page.locator('link[rel="icon"]');
    await expect(favicon).toHaveAttribute('href', '/favicon.svg');
  });

  test('has viewport meta tag', async ({ page }) => {
    const viewport = page.locator('meta[name="viewport"]');
    await expect(viewport).toHaveAttribute('content', /width=device-width/);
  });

  test('has lang attribute on html', async ({ page }) => {
    const html = page.locator('html');
    await expect(html).toHaveAttribute('lang', 'en');
  });

  test('has proper heading hierarchy', async ({ page }) => {
    const h1Count = await page.locator('main h1').count();
    expect(h1Count).toBe(1);

    const h2Count = await page.locator('main h2').count();
    expect(h2Count).toBeGreaterThanOrEqual(6);
  });
});

test.describe('Static files', () => {
  test('robots.txt is accessible', async ({ page }) => {
    const response = await page.goto('/robots.txt');
    expect(response?.status()).toBe(200);
    const text = await response?.text();
    expect(text).toContain('Sitemap');
    expect(text).toContain('Allow: /');
  });

  test('sitemap was generated at build time', async ({ page }) => {
    await page.goto('/');
    const robotsTxt = await (await page.goto('/robots.txt'))?.text();
    expect(robotsTxt).toContain('sitemap-index.xml');
  });

  test('OG image PNG is accessible', async ({ page }) => {
    const response = await page.goto('/og-image.png');
    expect(response?.status()).toBe(200);
  });

  test('apple-touch-icon is accessible', async ({ page }) => {
    const response = await page.goto('/apple-touch-icon.png');
    expect(response?.status()).toBe(200);
  });

  test('web manifest is accessible', async ({ page }) => {
    const response = await page.goto('/manifest.json');
    expect(response?.status()).toBe(200);
    const body = await response?.text();
    expect(body).toContain('Yash Djson Dookun');
  });
});
