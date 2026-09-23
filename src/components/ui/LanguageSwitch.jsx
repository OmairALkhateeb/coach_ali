import { LANGUAGES } from '../../i18n/config'
import { useLanguage } from '../../i18n/useLanguage'
import Icon from './Icon'

/** Toggles between Arabic and English. Shows the language you'll switch *to*. */
export default function LanguageSwitch({ className = '' }) {
  const { lang, toggleLanguage, t } = useLanguage()
  const target = lang === 'ar' ? 'en' : 'ar'

  return (
    <button
      type="button"
      onClick={toggleLanguage}
      aria-label={t('nav.switchLanguage')}
      title={t('nav.switchLanguage')}
      className={`inline-flex h-10 items-center gap-2 rounded-full border border-ink-700 px-3.5 text-sm font-bold text-gold-200 transition hover:border-gold-400 hover:bg-gold-400/10 ${className}`}
    >
      <Icon name="globe" className="size-[18px] text-gold-400" />
      <span lang={target}>{target === 'ar' ? 'عربي' : LANGUAGES.en.short}</span>
    </button>
  )
}
