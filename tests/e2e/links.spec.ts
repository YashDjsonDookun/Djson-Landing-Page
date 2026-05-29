import { test, expect } from '@playwright/test';

test.describe('External links', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('GitHub project links have correct hrefs', async ({ page }) => {
    const githubLinks = page.locator('a[href*="github.com/YashDjsonDookun"]');
    const count = await githubLinks.count();
    expect(count).toBeGreaterThanOrEqual(5);

    const expectedRepos = [
      'KotMoKouran',
      'ClientList',
      'MorisLex-Engine',
      'MorisLex-Rag',
      'Agentic-Poc',
    ];

    for (const repo of expectedRepos) {
      await expect(
        page.locator(`a[href="https://github.com/YashDjsonDookun/${repo}"]`)
      ).toBeAttached();
    }
  });

  test('external links with target=_blank have noopener', async ({ page }) => {
    const externalLinks = page.locator('a[target="_blank"][rel]');
    const count = await externalLinks.count();
    expect(count).toBeGreaterThan(0);

    for (let i = 0; i < count; i++) {
      const rel = await externalLinks.nth(i).getAttribute('rel');
      expect(rel).toContain('noopener');
    }
  });

  test('nav anchor links point to valid sections', async ({ page }) => {
    const anchors = ['#projects', '#services', '#contact'];
    for (const anchor of anchors) {
      const link = page.locator(`header a[href="${anchor}"]`).first();
      if (await link.count() > 0) {
        await expect(page.locator(anchor)).toBeAttached();
      }
    }
  });
});
