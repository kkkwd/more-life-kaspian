import type { Locale, SiteContent } from './shared';
import { siteEn } from './en/site';
import { siteZh } from './zh/site';

const dictionary: Record<Locale, SiteContent> = {
  en: siteEn,
  zh: siteZh
};

export function getSiteContent(locale: Locale): SiteContent {
  return dictionary[locale];
}
