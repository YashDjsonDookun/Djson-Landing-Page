// ─────────────────────────────────────────────────────────
// i18n — locale configuration and content resolver.
// ─────────────────────────────────────────────────────────

import * as en from './en';
import * as fr from './fr';
import * as mrc from './mrc';

export type Locale = 'en' | 'fr' | 'mrc';

const contentMap = { en, fr, mrc } as const;

export function t(locale: Locale = 'en') {
  return contentMap[locale] ?? contentMap.en;
}

export const locales: { code: Locale; label: string; flag: string }[] = [
  { code: 'en', label: 'EN', flag: '🇬🇧' },
  { code: 'fr', label: 'FR', flag: '🇫🇷' },
  { code: 'mrc', label: 'KR', flag: '🇲🇺' },
];

export const defaultLocale: Locale = 'en';

export function localePath(locale: Locale, hash = ''): string {
  const base = locale === 'en' ? '/' : `/${locale}/`;
  return hash ? `${base}${hash}` : base;
}

export function localeFromPath(path: string): Locale {
  if (path.startsWith('/fr')) return 'fr';
  if (path.startsWith('/mrc')) return 'mrc';
  return 'en';
}

export const sharedConfig = {
  name: 'Yash Djson Dookun',
  url: 'https://yashdookun.com',
  themeColorLight: '#FAF9F6',
  themeColorDark: '#111214',
  dataSources: {
    githubApiBase: 'https://api.github.com/repos/YashDjsonDookun',
    githubUsername: 'YashDjsonDookun',
  },
};

export const hreflangMap: Record<Locale, string> = {
  en: 'en',
  fr: 'fr',
  mrc: 'mfe',
};
