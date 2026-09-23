import { achievements } from '../../data/achievements'
import { useLanguage } from '../../i18n/useLanguage'
import Icon from '../ui/Icon'

/** Infinite scrolling strip of titles between the hero and the about section. */
export default function TitleMarquee() {
  const { pick } = useLanguage()
  const items = achievements.map((a) => `${pick(a.event)} ${a.year === 'Pro' ? '' : a.year}`.trim())
  const loop = [...items, ...items]

  return (
    <div className="relative overflow-hidden border-y border-gold-400/15 bg-ink-900 py-5" aria-hidden="true">
      {/* The track is always LTR so the -50% loop animation works in both languages. */}
      <div dir="ltr" className="flex w-max animate-marquee">
        {loop.map((text, i) => (
          <span
            key={i}
            className="flex items-center gap-10 whitespace-nowrap pr-10 font-display text-xl uppercase tracking-[0.15em] text-bone/50"
          >
            <span dir="auto">{text}</span>
            <Icon name="crown" className="size-4 text-gold-500" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink-900 to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink-900 to-transparent" />
    </div>
  )
}
