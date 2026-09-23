import { achievements, nextChallenge } from '../../data/achievements'
import { useReveal } from '../../hooks/useReveal'
import { useLanguage } from '../../i18n/useLanguage'
import AchievementCard from '../ui/AchievementCard'
import Icon from '../ui/Icon'
import SectionHeading from '../ui/SectionHeading'

function NextChallengeBanner() {
  const ref = useReveal()
  const { pick } = useLanguage()

  return (
    <div
      ref={ref}
      className="reveal relative mt-6 overflow-hidden rounded-3xl bg-gradient-to-r from-gold-500 via-gold-400 to-gold-600 p-[1px]"
    >
      <div className="relative flex flex-col gap-6 rounded-[calc(1.5rem-1px)] bg-ink-900 p-7 sm:flex-row sm:items-center sm:justify-between sm:p-9">
        <div className="pointer-events-none absolute -end-20 top-1/2 size-72 -translate-y-1/2 rounded-full bg-ember-500/15 blur-3xl" />
        <div className="flex items-start gap-5">
          <div className="grid size-14 shrink-0 place-items-center rounded-2xl bg-gold-gradient text-ink-950">
            <Icon name="flame" className="size-7" />
          </div>
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.25em] text-ember-400">{pick(nextChallenge.label)}</p>
            <h3 className="mt-1 font-display text-2xl uppercase tracking-wide text-bone sm:text-3xl">
              {pick(nextChallenge.title)}
            </h3>
            <p className="mt-2 max-w-xl text-sm text-muted">{pick(nextChallenge.description)}</p>
          </div>
        </div>
        <p className="relative shrink-0 font-display text-3xl text-gold-gradient sm:text-4xl">{pick(nextChallenge.date)}</p>
      </div>
    </div>
  )
}

export default function Achievements() {
  const { t } = useLanguage()

  return (
    <section id="achievements" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('achievements.eyebrow')}
          title={t('achievements.title')}
          highlight={t('achievements.highlight')}
          description={t('achievements.description')}
        />

        <div className="mt-16 grid gap-5 md:grid-cols-3">
          {achievements.map((achievement, i) => (
            <AchievementCard key={achievement.id} achievement={achievement} delay={i * 80} />
          ))}
        </div>

        <NextChallengeBanner />
      </div>
    </section>
  )
}
