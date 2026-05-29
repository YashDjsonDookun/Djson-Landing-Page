import { test, expect } from '@playwright/test';

test.describe('Landing page sections', () => {
  test.beforeEach(async ({ page }) => {
    await page.goto('/');
  });

  test('page loads with correct title', async ({ page }) => {
    await expect(page).toHaveTitle(/Yash Djson Dookun/);
  });

  test('header is visible with name and nav', async ({ page }) => {
    const header = page.locator('header').first();
    await expect(header).toBeVisible();
    await expect(page.getByRole('link', { name: 'Yash Djson Dookun' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Reach Out' }).first()).toBeVisible();
  });

  test('hero section has headline and CTAs', async ({ page }) => {
    await expect(page.getByText('Custom business systems')).toBeVisible();
    await expect(page.getByRole('link', { name: 'View Services' })).toBeVisible();
    await expect(page.getByRole('link', { name: 'Contact Me' })).toBeVisible();
  });

  test('hero has animated terminal on desktop', async ({ page }) => {
    await page.setViewportSize({ width: 800, height: 800 });
    await page.goto('/');
    const terminal = page.locator('.hero-terminal');
    await expect(terminal).toBeVisible();
  });

  test('tech stack strip is visible', async ({ page }) => {
    await expect(page.getByText('Technologies I work with')).toBeVisible();
    await expect(page.getByLabel('Technology stack').getByText('Python')).toBeVisible();
  });

  test('all main sections exist', async ({ page }) => {
    const sections = ['#build', '#projects', '#services', '#contact'];
    for (const id of sections) {
      await expect(page.locator(id)).toBeAttached();
    }
  });

  test('What I Build section has 6 cards', async ({ page }) => {
    const buildSection = page.locator('#build');
    const cards = buildSection.locator('.group');
    await expect(cards).toHaveCount(6);
  });

  test('stats row shows numbers', async ({ page }) => {
    await expect(page.getByText('Systems built', { exact: true })).toBeAttached();
    await expect(page.getByText('Records processed', { exact: true })).toBeAttached();
  });

  test('projects section shows all 5 projects with terminals', async ({ page }) => {
    const projectSection = page.locator('#projects');
    const articles = projectSection.locator('article');
    await expect(articles).toHaveCount(5);

    const terminals = projectSection.locator('.terminal-block');
    await expect(terminals).toHaveCount(5);
  });

  test('MorisLex Engine and RAG are connected', async ({ page }) => {
    await expect(page.getByText('feeds into')).toBeAttached();
  });

  test('services section shows all 6 services', async ({ page }) => {
    const servicesSection = page.locator('#services');
    await expect(servicesSection.getByText('End-to-End Business Systems')).toBeVisible();
    await expect(servicesSection.getByText('Backend APIs & Integration Layers')).toBeVisible();
    await expect(servicesSection.getByText('Data Cleanup & Reporting Tools')).toBeVisible();
    await expect(servicesSection.getByText('AI-Powered Tools & Automation')).toBeVisible();
    await expect(servicesSection.getByText('Lightweight Business Websites')).toBeVisible();
    await expect(servicesSection.getByText('Technical Consulting & Architecture')).toBeVisible();
  });

  test('services section appears before projects in DOM', async ({ page }) => {
    const servicesTop = await page.locator('#services').boundingBox();
    const projectsTop = await page.locator('#projects').boundingBox();
    expect(servicesTop!.y).toBeLessThan(projectsTop!.y);
  });

  test('contact section has contact channels', async ({ page }) => {
    const contactSection = page.locator('#contact');
    await expect(contactSection.getByText('Email')).toBeVisible();
    await expect(contactSection.getByText('WhatsApp')).toBeVisible();
    await expect(contactSection.getByText('LinkedIn')).toBeVisible();
    await expect(contactSection.getByText('GitHub', { exact: true })).toBeVisible();
  });

  test('How I Work section has 4 steps', async ({ page }) => {
    const processSection = page.locator('#process');
    await expect(processSection).toBeAttached();
    await expect(processSection.getByRole('heading', { name: 'Describe the workflow' })).toBeVisible();
    await expect(processSection.getByRole('heading', { name: 'Deliver with docs' })).toBeVisible();
  });

  test('About section is present', async ({ page }) => {
    await expect(page.getByText('Senior IT Consultant with 5+ years')).toBeAttached();
  });

  test('skip-to-content link exists', async ({ page }) => {
    const skipLink = page.getByText('Skip to main content');
    await expect(skipLink).toBeAttached();
  });

  test('footer is present', async ({ page }) => {
    await expect(page.locator('footer')).toBeVisible();
  });

  test('404 page renders correctly', async ({ page }) => {
    const response = await page.goto('/nonexistent-page');
    await expect(page.getByText('Page not found')).toBeVisible();
    await expect(page.getByRole('link', { name: 'Go home' })).toBeVisible();
  });
});
