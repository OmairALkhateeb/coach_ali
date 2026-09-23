import { useReveal } from '../../hooks/useReveal'
import { useTransformationText } from '../../hooks/useTransformationText'
import { useLanguage } from '../../i18n/useLanguage'
import BeforeAfterSlider from './BeforeAfterSlider'
import Icon from './Icon'

function Caption({ name, result, program }) {
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-ink-950 via-ink-950/80 to-transparent p-4 pt-16 sm:p-5 sm:pt-16">
      <p className="text-[10px] font-bold uppercase tracking-[0.25em] text-gold-400">{program}</p>
      <h3 className="mt-1 font-display text-lg uppercase tracking-wide text-bone sm:text-xl">{name}</h3>
      <p className="text-xs text-bone/70 sm:text-sm">{result}</p>
    </div>
  )
}

export default function TransformationCard({ item, onOpen, className = '', delay = 0 }) {
  const ref = useReveal()
  const { t } = useLanguage()
  const text = useTransformationText(item)

  return (
    <figure
      ref={ref}
      style={{ transitionDelay: `${delay}ms` }}
      className={`reveal group gold-border relative overflow-hidden rounded-3xl bg-ink-900 ${className}`}
    >
      {item.type === 'compare' ? (
        <>
          <BeforeAfterSlider before={item.before} after={item.after} alt={text.name} />
          <Caption {...text} />
        </>
      ) : (
        <button
          type="button"
          onClick={() => onOpen?.(item)}
          className="block size-full cursor-zoom-in text-start"
          aria-label={t('results.view', { name: text.name })}
        >
          <img
            src={item.image}
            alt={text.name}
            loading="lazy"
            className="size-full object-cover transition duration-700 group-hover:scale-105"
          />
          <span className="absolute end-4 top-4 grid size-9 place-items-center rounded-full bg-ink-950/70 text-gold-300 opacity-0 backdrop-blur transition duration-300 group-hover:opacity-100">
            <Icon name="arrow" className="size-4 -rotate-45 rtl:rotate-45 rtl:-scale-x-100" strokeWidth={2} />
          </span>
          <Caption {...text} />
        </button>
      )}
    </figure>
  )
}
