import { browser } from '$app/environment';
import { writable } from 'svelte/store';
import type { Locale, Theme } from '$lib/content/shared';

const LOCALE_KEY = 'kaspian-locale';
const THEME_KEY = 'kaspian-theme';

function detectLocale(): Locale {
  if (!browser) {
    return 'en';
  }

  const saved = localStorage.getItem(LOCALE_KEY);
  if (saved === 'en' || saved === 'zh') {
    return saved;
  }

  return navigator.language.toLowerCase().startsWith('zh') ? 'zh' : 'en';
}

function detectTheme(): Theme {
  if (!browser) {
    return 'light';
  }

  const saved = localStorage.getItem(THEME_KEY);
  if (saved === 'light' || saved === 'dark') {
    return saved;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

export const locale = writable<Locale>('en');
export const theme = writable<Theme>('light');
export const reducedMotion = writable(false);

export function initPreferences() {
  if (!browser) {
    return;
  }

  const initialLocale = detectLocale();
  const initialTheme = detectTheme();
  const motionQuery = window.matchMedia('(prefers-reduced-motion: reduce)');

  locale.set(initialLocale);
  theme.set(initialTheme);
  reducedMotion.set(motionQuery.matches);

  document.documentElement.lang = initialLocale === 'zh' ? 'zh-CN' : 'en';
  document.documentElement.classList.toggle('dark', initialTheme === 'dark');

  const onMotionChange = (event: MediaQueryListEvent) => {
    reducedMotion.set(event.matches);
  };

  motionQuery.addEventListener('change', onMotionChange);

  return () => {
    motionQuery.removeEventListener('change', onMotionChange);
  };
}

export function setLocale(nextLocale: Locale) {
  locale.set(nextLocale);

  if (!browser) {
    return;
  }

  localStorage.setItem(LOCALE_KEY, nextLocale);
  document.documentElement.lang = nextLocale === 'zh' ? 'zh-CN' : 'en';
}

export function toggleLocale(current: Locale) {
  setLocale(current === 'en' ? 'zh' : 'en');
}

export function setTheme(nextTheme: Theme) {
  theme.set(nextTheme);

  if (!browser) {
    return;
  }

  localStorage.setItem(THEME_KEY, nextTheme);
  document.documentElement.classList.toggle('dark', nextTheme === 'dark');
}

export function toggleTheme(current: Theme) {
  setTheme(current === 'light' ? 'dark' : 'light');
}
