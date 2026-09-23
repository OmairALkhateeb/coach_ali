import { useReveal } from '../../hooks/useReveal'
import { useLanguage } from '../../i18n/useLanguage'
import Icon from '../ui/Icon'
import SectionHeading from '../ui/SectionHeading'

const pillarIcons = ['trophy', 'leaf', 'flame']

export default function About() {
  const imageRef = useReveal()
  const textRef = useReveal()
  const { t } = useLanguage()

  return (
    <section id="about" className="relative overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl items-center gap-14 px-5 sm:px-8 lg:grid-cols-2 lg:gap-20">
        <div ref={imageRef} className="reveal relative">
          <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-gold-400/25 via-transparent to-ember-500/15 blur-2xl" />
          <div className="gold-border relative overflow-hidden rounded-[2rem]">
            <img
              src="/images/podium.jpg"
              alt={t('about.imageAlt')}
              loading="lazy"
              className="aspect-[4/5] w-full object-cover object-[center_20%] sm:aspect-square"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-ink-950/80 via-transparent to-transparent" />
          </div>
          <div className="gold-border absolute -bottom-6 end-4 rounded-2xl bg-ink-900/90 px-6 py-4 backdrop-blur sm:-end-6">
            <p className="font-display text-4xl text-gold-gradient">{t('about.badgeValue')}</p>
            <p className="text-[10px] font-semibold uppercase tracking-[0.2em] text-muted">{t('about.badgeLabel')}</p>
          </div>
        </div>

        <div>
          <SectionHeading
            align="left"
            eyebrow={t('about.eyebrow')}
            title={t('about.title')}
            highlight={t('about.highlight')}
          />
          <div ref={textRef} className="reveal mt-6 space-y-5 text-base leading-relaxed text-muted sm:text-lg">
            {t('about.paragraphs').map((paragraph) => (
              <p key={paragraph}>{paragraph}</p>
            ))}
          </div>

          <ul className="mt-10 grid gap-4 sm:grid-cols-3">
            {t('about.pillars').map(({ title, text }, i) => (
              <li key={title} className="rounded-2xl border border-ink-700 bg-ink-900/60 p-5">
                <Icon name={pillarIcons[i]} className="size-6 text-gold-400" />
                <p className="mt-3 text-sm font-semibold text-bone">{title}</p>
                <p className="mt-1 text-xs leading-relaxed text-muted">{text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
