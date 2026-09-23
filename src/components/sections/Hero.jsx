import { heroStats, site } from '../../data/site'
import { useLanguage } from '../../i18n/useLanguage'
import Button from '../ui/Button'
import Icon from '../ui/Icon'

export default function Hero() {
  const { t, pick, lang } = useLanguage()
  // Secondary line shows the name in the other language.
  const altLang = lang === 'ar' ? 'en' : 'ar'

  return (
    <section id="top" className="grain relative isolate flex min-h-[100svh] items-center overflow-hidden bg-ink-950">
      {/* Main hero photo — portrait crop on phones, full scene from tablet up.
          Mirrored in RTL so the subject stays opposite the text. */}
      <div className="absolute inset-x-0 top-0 -z-10 h-[64svh] md:inset-0 md:h-auto">
        <picture className="block size-full">
          <source media="(min-width: 768px)" srcSet="/images/hero-bg.jpg" />
          <img
            src="/images/hero-bg-mobile.jpg"
            alt={t('hero.imageAlt')}
            fetchPriority="high"
            className="size-full object-cover object-[center_20%] md:object-[70%_center] md:rtl:-scale-x-100"
          />
        </picture>
        {/* Keeps text readable over the photo on every screen size */}
        <div className="absolute inset-0 hidden bg-gradient-to-r from-ink-950 via-ink-950/75 to-ink-950/5 md:block rtl:bg-gradient-to-l" />
        <div className="absolute inset-0 bg-gradient-to-t from-ink-950 via-ink-950/20 to-ink-950/60 md:via-ink-950/10" />
      </div>
      <div className="pointer-events-none absolute -start-40 top-1/3 -z-10 size-[520px] rounded-full bg-gold-500/10 blur-[140px]" />
      <div className="pointer-events-none absolute bottom-0 end-1/4 -z-10 size-[380px] rounded-full bg-ember-500/10 blur-[120px]" />

      <div className="mx-auto w-full max-w-7xl px-5 pb-20 pt-[46svh] sm:px-8 md:pt-32 lg:pt-36">
        <div className="max-w-2xl">
          <p className="animate-fade-up inline-flex items-center gap-3 rounded-full border border-gold-400/25 bg-ink-900/60 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.25em] text-gold-300 backdrop-blur">
            <span className="size-1.5 animate-pulse rounded-full bg-ember-500" />
            {pick(site.title)}
          </p>

          <h1 className="mt-7 font-display uppercase leading-[0.9] tracking-wide">
            <span className="animate-fade-up block text-6xl text-bone [animation-delay:100ms] sm:text-8xl lg:text-9xl">
              {t('hero.first')}
            </span>
            <span className="animate-fade-up block text-6xl [animation-delay:200ms] sm:text-8xl lg:text-9xl">
              <span className="text-gold-gradient animate-shimmer">{t('hero.last')}</span>
            </span>
          </h1>

          <p
            lang={altLang}
            className={`animate-fade-up mt-3 text-gold-400/80 [animation-delay:300ms] ${
              altLang === 'ar'
                ? 'font-sans text-3xl font-black sm:text-4xl'
                : 'font-display text-2xl uppercase tracking-[0.2em] sm:text-3xl'
            }`}
          >
            {site.name[altLang]}
          </p>

          <p className="animate-fade-up mt-7 max-w-lg text-base leading-relaxed text-bone/75 [animation-delay:400ms] sm:text-lg">
            {t('hero.description')}
          </p>

          <div className="animate-fade-up mt-10 flex flex-col gap-3 [animation-delay:500ms] sm:flex-row">
            <Button href="#apply" icon="arrow">
              {t('hero.apply')}
            </Button>
            <Button href="#results" variant="outline">
              {t('hero.results')}
            </Button>
          </div>

          <dl className="animate-fade-up mt-14 grid max-w-xl grid-cols-3 gap-4 border-t border-gold-400/15 pt-8 [animation-delay:650ms]">
            {heroStats.map(({ value, label }) => (
              <div key={value}>
                <dt className="sr-only">{pick(label)}</dt>
                <dd lang="en" className="font-display text-3xl text-gold-300 sm:text-4xl">
                  <bdi dir="ltr">{value}</bdi>
                </dd>
                <dd className="mt-1 text-[11px] uppercase leading-snug tracking-[0.14em] text-muted">{pick(label)}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>

      <a
        href="#about"
        aria-label={t('hero.scrollLabel')}
        className="absolute bottom-8 left-1/2 hidden -translate-x-1/2 flex-col items-center gap-2 text-[10px] uppercase tracking-[0.3em] text-muted transition hover:text-gold-300 md:flex"
      >
        {t('hero.scroll')}
        <Icon name="arrowDown" className="size-4 animate-bounce" />
      </a>
    </section>
  )
}
