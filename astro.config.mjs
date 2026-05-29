// @ts-check
import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';
import sitemap from '@astrojs/sitemap';

export default defineConfig({
  site: 'https://yashdookun.com',
  output: 'static',
  i18n: {
    defaultLocale: 'en',
    locales: ['en', 'fr', { path: 'mrc', codes: ['mfe'] }],
    routing: {
      prefixDefaultLocale: false,
    },
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
