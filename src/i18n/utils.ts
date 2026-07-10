import { ui, defaultLang } from './ui';

export type Lang = keyof typeof ui;

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in ui) return lang as Lang;
  return defaultLang;
}

export function useTranslations(lang: Lang) {
  return function t(key: keyof (typeof ui)[typeof defaultLang]): string {
    return ui[lang][key] ?? ui[defaultLang][key];
  };
}

/** Path of the same page in the other locale (used by the language toggle). */
export function altLocalePath(lang: Lang): string {
  return lang === 'en' ? '/' : '/en/';
}

/** Pick the right variant from a bilingual { pt, en } field. */
export function pick(lang: Lang, field: { pt: string; en: string }): string {
  return lang === 'en' ? field.en : field.pt;
}
