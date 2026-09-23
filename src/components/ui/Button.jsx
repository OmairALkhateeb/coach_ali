import Icon from './Icon'

const base =
  'group inline-flex items-center justify-center gap-2.5 whitespace-nowrap rounded-full px-7 py-3.5 text-sm font-semibold uppercase tracking-[0.14em] transition duration-300 disabled:pointer-events-none disabled:opacity-50'

const variants = {
  primary:
    'bg-gold-gradient text-ink-950 shadow-[0_10px_40px_-12px] shadow-gold-400/60 hover:brightness-110 hover:shadow-gold-400/80',
  outline: 'gold-border text-gold-200 hover:border-gold-400 hover:bg-gold-400/10',
  ghost: 'text-bone/80 hover:text-gold-300',
}

/**
 * Renders an <a> when `href` is provided, otherwise a <button>.
 */
export default function Button({
  href,
  variant = 'primary',
  icon,
  iconPosition = 'end',
  className = '',
  children,
  ...props
}) {
  const classes = `${base} ${variants[variant]} ${className}`
  const iconEl = icon && (
    <Icon
      name={icon}
      className={`size-4 transition-[translate] duration-300 ${
        // Arrows point (and nudge) toward the reading direction.
        icon === 'arrow' ? 'group-hover:translate-x-1 rtl:-scale-x-100 rtl:group-hover:-translate-x-1' : ''
      }`}
      strokeWidth={2}
    />
  )

  const content = (
    <>
      {iconPosition === 'start' && iconEl}
      <span>{children}</span>
      {iconPosition === 'end' && iconEl}
    </>
  )

  if (href) {
    return (
      <a href={href} className={classes} {...props}>
        {content}
      </a>
    )
  }

  return (
    <button type="button" className={classes} {...props}>
      {content}
    </button>
  )
}
