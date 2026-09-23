import { useReveal } from '../../hooks/useReveal'
import { useLanguage } from '../../i18n/useLanguage'
import Icon from './Icon'

export default function ServiceCard({ service, onSelect, delay = 0 }) {
  const ref = useReveal()
  const { t, pick } = useLanguage()
  const { icon, highlighted } = service
  const features = pick(service.features)

  return (
    <article
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal group relative flex flex-col rounded-3xl p-[1px] ${
        highlighted ? 'bg-gradient-to-b from-gold-300 via-gold-600/60 to-gold-700/20' : 'bg-ink-700/70'
      }`}
    >
      <div className="relative flex h-full flex-col overflow-hidden rounded-[calc(1.5rem-1px)] bg-ink-900 p-7 sm:p-8">
        <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-gold-400/10 to-transparent opacity-0 transition duration-500 group-hover:opacity-100" />

        {highlighted && (
          <span className="absolute end-6 top-6 rounded-full bg-gold-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-ink-950">
            {t('services.popular')}
          </span>
        )}

        <div className="grid size-14 place-items-center rounded-2xl border border-gold-400/25 bg-gold-400/10 text-gold-300 transition duration-500 group-hover:bg-gold-400 group-hover:text-ink-950">
          <Icon name={icon} className="size-7" />
        </div>

        <h3 className="mt-7 font-display text-3xl uppercase tracking-wide text-bone">{pick(service.title)}</h3>
        <p className="mt-3 text-sm leading-relaxed text-muted">{pick(service.summary)}</p>

        <ul className="mt-7 space-y-3 border-t border-ink-700 pt-6">
          {features.map((feature) => (
            <li key={feature} className="flex items-start gap-3 text-sm text-bone/85">
              <Icon name="check" className="mt-0.5 size-4 shrink-0 text-gold-400" strokeWidth={2.4} />
              {feature}
            </li>
          ))}
        </ul>

        <a
          href="#apply"
          onClick={() => onSelect?.(service.id)}
          className={`mt-8 inline-flex items-center justify-center gap-2 rounded-full py-3 text-xs font-semibold uppercase tracking-[0.18em] transition duration-300 ${
            highlighted
              ? 'bg-gold-gradient text-ink-950 hover:brightness-110'
              : 'gold-border text-gold-200 hover:border-gold-400 hover:bg-gold-400/10'
          }`}
        >
          {t('services.apply')} <Icon name="arrow" className="size-4 rtl:-scale-x-100" strokeWidth={2} />
        </a>
      </div>
    </article>
  )
}
