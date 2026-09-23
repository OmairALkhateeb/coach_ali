import { navLinks, site } from '../../data/site'
import { useLanguage } from '../../i18n/useLanguage'
import { buildWhatsAppUrl } from '../../utils/whatsapp'
import Icon from '../ui/Icon'

export default function Footer() {
  const { t, pick, lang } = useLanguage()
  const year = new Date().getFullYear()
  const whatsappUrl = buildWhatsAppUrl(site.whatsappNumber, t('footer.whatsappMessage'))
  // Show the name in the other language as a secondary line.
  const altLang = lang === 'ar' ? 'en' : 'ar'

  return (
    <footer className="relative border-t border-gold-400/10 bg-ink-950">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/50 to-transparent" />

      <div className="mx-auto grid max-w-7xl gap-12 px-5 py-16 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <p className="font-display text-4xl uppercase tracking-wide text-bone">{pick(site.name)}</p>
          <p
            lang={altLang}
            className={`mt-1 text-2xl text-gold-gradient ${altLang === 'ar' ? 'font-sans font-black' : 'font-display uppercase tracking-wide'}`}
          >
            {site.name[altLang]}
          </p>
          <p className="mt-5 max-w-sm text-sm leading-relaxed text-muted">
            {pick(site.title)}. {t('footer.description')}
          </p>
          <p className="mt-4 flex items-center gap-2 text-sm text-bone/70">
            <Icon name="pin" className="size-4 shrink-0 text-gold-400" /> {pick(site.location)}
          </p>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">{t('footer.explore')}</h3>
          <ul className="mt-5 space-y-3">
            {navLinks.map(({ label, href }) => (
              <li key={href}>
                <a href={href} className="text-sm text-bone/75 transition hover:text-gold-300">
                  {pick(label)}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="text-xs font-semibold uppercase tracking-[0.25em] text-gold-400">{t('footer.connect')}</h3>
          <ul className="mt-5 space-y-3">
            <li>
              <a
                href={site.instagram.url}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-bone/75 transition hover:text-gold-300"
              >
                <Icon name="instagram" className="size-5" /> <span dir="ltr">@{site.instagram.handle}</span>
              </a>
            </li>
            <li>
              <a
                href={whatsappUrl}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-bone/75 transition hover:text-gold-300"
              >
                <Icon name="whatsapp" className="size-5" /> <span dir="ltr">+{site.whatsappNumber}</span>
              </a>
            </li>
            <li>
              <a
                href={site.gym.instagram}
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-3 text-sm text-bone/75 transition hover:text-gold-300"
              >
                <Icon name="dumbbell" className="size-5" /> {pick(site.gym.name)}
              </a>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-ink-800">
        <div className="mx-auto flex max-w-7xl flex-col gap-2 px-5 py-6 text-xs text-muted sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <p>
            © {year} {pick(site.name)}. {t('footer.rights')}
          </p>
          <p className="uppercase tracking-[0.2em]">{pick(site.tagline)}</p>
        </div>
      </div>
    </footer>
  )
}
