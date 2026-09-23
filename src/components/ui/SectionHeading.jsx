import { useReveal } from '../../hooks/useReveal'

export default function SectionHeading({ eyebrow, title, highlight, description, align = 'center' }) {
  const ref = useReveal()
  const alignment = align === 'center' ? 'mx-auto text-center items-center' : 'items-start text-start'

  return (
    <div ref={ref} className={`reveal flex max-w-2xl flex-col ${alignment}`}>
      {eyebrow && (
        <span className="mb-4 inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-[0.3em] text-gold-400">
          <span className="h-px w-8 bg-gold-400/60" />
          {eyebrow}
          {align === 'center' && <span className="h-px w-8 bg-gold-400/60" />}
        </span>
      )}
      <h2 className="font-display text-4xl uppercase leading-[1.05] tracking-wide text-bone sm:text-5xl lg:text-6xl">
        {title} {highlight && <span className="text-gold-gradient">{highlight}</span>}
      </h2>
      {description && <p className="mt-5 text-base leading-relaxed text-muted sm:text-lg">{description}</p>}
    </div>
  )
}
