import { useReveal } from '../../hooks/useReveal'
import { useLanguage } from '../../i18n/useLanguage'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import SectionHeading from '../ui/SectionHeading'

const pillarIcons = ['trophy', 'check', 'flame']

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

          <h3 className="mt-10 text-lg font-semibold text-bone sm:text-xl">{t('about.whyTitle')}</h3>
          <ul className="mt-5 space-y-4">
            {t('about.pillars').map(({ title, text }, i) => (
              <li key={title} className="flex gap-4 rounded-2xl border border-ink-700 bg-ink-900/60 p-5">
                <span className="grid size-11 shrink-0 place-items-center rounded-xl bg-gold-400/10">
                  <Icon name={pillarIcons[i]} className="size-6 text-gold-400" />
                </span>
                <div>
                  <p className="font-semibold text-bone">{title}</p>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          <p className="mt-8 text-base font-medium leading-relaxed text-bone/90 sm:text-lg">{t('about.closing')}</p>
          <Button href="#apply" icon="arrow" className="mt-6">
            {t('about.cta')}
          </Button>
        </div>
      </div>
    </section>
  )
}
