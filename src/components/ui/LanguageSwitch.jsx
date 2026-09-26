import { useEffect, useRef, useState } from 'react'
import { LANGUAGES } from '../../i18n/config'
import { useLanguage } from '../../i18n/useLanguage'
import Icon from './Icon'

/** Language picker. Each option is labelled in its own language. */
export default function LanguageSwitch({ className = '' }) {
  const { lang, setLang, t } = useLanguage()
  const [open, setOpen] = useState(false)
  const ref = useRef(null)

  // Close on outside click or Escape.
  useEffect(() => {
    if (!open) return
    const onClick = (e) => !ref.current?.contains(e.target) && setOpen(false)
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.addEventListener('pointerdown', onClick)
    document.addEventListener('keydown', onKey)
    return () => {
      document.removeEventListener('pointerdown', onClick)
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  const choose = (code) => {
    setLang(code)
    setOpen(false)
  }

  return (
    <div ref={ref} className={`relative ${className}`}>
      <button
        type="button"
        onClick={() => setOpen((v) => !v)}
        aria-haspopup="true"
        aria-expanded={open}
        aria-label={t('nav.switchLanguage')}
        title={t('nav.switchLanguage')}
        className="inline-flex h-10 items-center gap-2 rounded-full border border-ink-700 px-3.5 text-sm font-bold text-gold-200 transition hover:border-gold-400 hover:bg-gold-400/10"
      >
        <Icon name="globe" className="size-[18px] text-gold-400" />
        <span lang={lang}>{LANGUAGES[lang].short}</span>
      </button>

      {open && (
        <ul className="absolute end-0 top-full z-50 mt-2 min-w-40 overflow-hidden rounded-2xl border border-ink-700 bg-ink-900/95 p-1.5 shadow-2xl backdrop-blur-xl">
          {Object.entries(LANGUAGES).map(([code, { label }]) => (
            <li key={code}>
              <button
                type="button"
                lang={code}
                onClick={() => choose(code)}
                aria-current={code === lang ? 'true' : undefined}
                className={`flex w-full items-center justify-between gap-3 rounded-xl px-3.5 py-2.5 text-start text-sm font-semibold transition hover:bg-gold-400/10 ${
                  code === lang ? 'text-gold-300' : 'text-bone/85'
                }`}
              >
                {label}
                {code === lang && <Icon name="check" className="size-4 text-gold-400" strokeWidth={2.2} />}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}
