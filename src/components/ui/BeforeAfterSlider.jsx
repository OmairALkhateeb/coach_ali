import { useId, useState } from 'react'
import { useLanguage } from '../../i18n/useLanguage'
import Icon from './Icon'

/**
 * Drag / keyboard accessible before–after comparison.
 * Uses a native range input layered over the images for built-in a11y.
 * Forced to LTR so "before" is always on the left, in both languages.
 */
export default function BeforeAfterSlider({ before, after, alt = '', initial = 50 }) {
  const [position, setPosition] = useState(initial)
  const { t } = useLanguage()
  const id = useId()

  return (
    <div dir="ltr" className="relative size-full select-none overflow-hidden">
      <img src={after} alt={`${alt} — ${t('results.after')}`} loading="lazy" className="absolute inset-0 size-full object-cover" />
      <img
        src={before}
        alt={`${alt} — ${t('results.before')}`}
        loading="lazy"
        className="absolute inset-0 size-full object-cover"
        style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
      />

      <span className="absolute left-4 top-4 rounded-full bg-ink-950/75 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-bone backdrop-blur">
        {t('results.before')}
      </span>
      <span className="absolute right-4 top-4 rounded-full bg-gold-gradient px-3 py-1 text-[10px] font-bold uppercase tracking-[0.25em] text-ink-950">
        {t('results.after')}
      </span>

      {/* Divider + handle */}
      <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-gold-300" style={{ left: `${position}%` }}>
        <div className="absolute left-1/2 top-1/2 grid size-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-gold-gradient text-ink-950 shadow-lg shadow-ink-950/60">
          <Icon name="compare" className="size-5" strokeWidth={2.2} />
        </div>
      </div>

      <label htmlFor={id} className="sr-only">
        {t('results.compare')}
      </label>
      <input
        id={id}
        type="range"
        min="0"
        max="100"
        value={position}
        onChange={(e) => setPosition(Number(e.target.value))}
        className="absolute inset-0 size-full cursor-ew-resize opacity-0"
      />
    </div>
  )
}
