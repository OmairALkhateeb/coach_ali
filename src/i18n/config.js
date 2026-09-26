/**
 * Supported languages. `dir` drives the page direction (RTL for Arabic).
 * NOTE: index.html has a tiny inline script that mirrors STORAGE_KEY and
 * DEFAULT_LANGUAGE so the correct direction is applied before first paint.
 */
export const LANGUAGES = {
  ar: { label: 'العربية', short: 'ع', dir: 'rtl' },
  en: { label: 'English', short: 'EN', dir: 'ltr' },
  es: { label: 'Español', short: 'ES', dir: 'ltr' },
}

export const DEFAULT_LANGUAGE = 'ar'
export const STORAGE_KEY = 'lang'

export function getInitialLanguage() {
  try {
    const saved = localStorage.getItem(STORAGE_KEY)
    if (saved && saved in LANGUAGES) return saved
  } catch {
    // Storage can be unavailable (private mode) — fall back to the default.
  }
  return DEFAULT_LANGUAGE
}

/**
 * Resolves a localized value: `{ en, ar, es }` objects return the active language
 * (falling back to English); plain strings / numbers are returned as-is.
 */
export function localize(value, lang) {
  if (value && typeof value === 'object' && !Array.isArray(value) && ('en' in value || 'ar' in value)) {
    return value[lang] ?? value.en
  }
  return value
}
