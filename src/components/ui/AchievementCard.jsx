import { useReveal } from '../../hooks/useReveal'
import { useLanguage } from '../../i18n/useLanguage'
import Icon from './Icon'

const medalStyles = {
  gold: { ring: 'from-gold-200 via-gold-400 to-gold-600', text: 'text-gold-300' },
  silver: { ring: 'from-zinc-100 via-zinc-300 to-zinc-500', text: 'text-zinc-200' },
  bronze: { ring: 'from-orange-200 via-orange-400 to-orange-700', text: 'text-orange-300' },
  pro: { ring: 'from-ember-400 via-gold-400 to-gold-600', text: 'text-ember-400' },
}

function MedalBadge({ medal }) {
  const { t, lang } = useLanguage()
  const style = medalStyles[medal] ?? medalStyles.gold
  const size = lang === 'ar' && medal !== 'pro' ? 'text-sm font-bold' : 'text-lg'

  return (
    <div className={`relative grid size-14 shrink-0 place-items-center rounded-full bg-gradient-to-br p-[2px] ${style.ring}`}>
      <div className="grid size-full place-items-center rounded-full bg-ink-900">
        <span className={`font-display tracking-wider ${size} ${style.text}`}>{t(`achievements.medals.${medal}`)}</span>
      </div>
    </div>
  )
}

export default function AchievementCard({ achievement, delay = 0 }) {
  const ref = useReveal()
  const { t, pick } = useLanguage()
  const { medal, year, image, featured } = achievement
  const title = pick(achievement.title)
  const event = pick(achievement.event)
  const description = pick(achievement.description)

  if (featured && image) {
    return (
      <article
        ref={ref}
        style={{ transitionDelay: `${delay}ms` }}
        className="reveal group gold-border relative isolate flex min-h-[420px] flex-col justify-end overflow-hidden rounded-3xl bg-ink-900 p-7 sm:p-9 md:row-span-2"
      >
        <img
          src={image}
          alt={`${title} — ${event} ${year}`}
          loading="lazy"
          className="absolute inset-0 -z-10 size-full object-cover object-top transition duration-700 group-hover:scale-105"
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-t from-ink-950 via-ink-950/70 to-transparent" />
        <div className="mb-auto flex items-center gap-2 self-start rounded-full bg-ink-950/70 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.2em] text-gold-300 backdrop-blur">
          <Icon name="crown" className="size-4" /> {t('achievements.latest')}
        </div>
        <span className="font-display text-7xl leading-none text-gold-gradient sm:text-8xl">{year}</span>
        <h3 className="mt-3 font-display text-3xl uppercase tracking-wide text-bone sm:text-4xl">{title}</h3>
        <p className="mt-1 text-sm font-semibold uppercase tracking-[0.2em] text-gold-400">{event}</p>
        <p className="mt-4 max-w-md text-sm leading-relaxed text-bone/75">{description}</p>
      </article>
    )
  }

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className="reveal group gold-border relative flex flex-col gap-5 overflow-hidden rounded-3xl bg-gradient-to-b from-ink-850 to-ink-900 p-7 transition-colors duration-500 hover:border-gold-400/50"
    >
      <div className="pointer-events-none absolute -end-16 -top-16 size-40 rounded-full bg-gold-400/0 blur-3xl transition duration-700 group-hover:bg-gold-400/15" />
      <div className="flex items-start justify-between gap-4">
        <MedalBadge medal={medal} />
        <span className="font-display text-4xl leading-none text-ink-600 transition-colors duration-500 group-hover:text-gold-600">
          {year}
        </span>
      </div>
      <div>
        <h3 className="font-display text-2xl uppercase tracking-wide text-bone">{title}</h3>
        <p className="mt-1 text-xs font-semibold uppercase tracking-[0.2em] text-gold-400">{event}</p>
      </div>
      <p className="text-sm leading-relaxed text-muted">{description}</p>
    </article>
  )
}
