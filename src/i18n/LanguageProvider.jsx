import { useCallback, useEffect, useMemo, useState } from 'react'
import { LANGUAGES, STORAGE_KEY, getInitialLanguage, localize } from './config'
import { LanguageContext } from './LanguageContext'
import { ui } from './ui'

function resolvePath(source, path) {
  return path.split('.').reduce((node, key) => (node == null ? undefined : node[key]), source)
}

export default function LanguageProvider({ children }) {
  const [lang, setLang] = useState(getInitialLanguage)
  const { dir } = LANGUAGES[lang]

  // Sync <html lang/dir>, the tab title and the saved preference.
  useEffect(() => {
    const root = document.documentElement
    root.lang = lang
    root.dir = dir
    document.title = ui[lang].meta.title
    try {
      localStorage.setItem(STORAGE_KEY, lang)
    } catch {
      // Ignore — the preference just won't persist.
    }
  }, [lang, dir])

  /** Translate a UI key, e.g. t('hero.apply') or t('apply.coachedBy', { name }). */
  const t = useCallback(
    (key, vars) => {
      const value = resolvePath(ui[lang], key) ?? resolvePath(ui.en, key) ?? key
      if (!vars || typeof value !== 'string') return value
      return value.replace(/\{(\w+)\}/g, (match, name) => (name in vars ? vars[name] : match))
    },
    [lang],
  )

  /** Pick the active language from a `{ en, ar, es }` data value. */
  const pick = useCallback((value) => localize(value, lang), [lang])

  const value = useMemo(() => ({ lang, dir, setLang, t, pick }), [lang, dir, t, pick])

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>
}
