import { useLanguage } from '../../i18n/useLanguage'

const controlBase =
  'w-full rounded-xl border bg-ink-950/60 px-4 py-3.5 text-[15px] text-bone placeholder:text-muted/60 transition duration-200 focus:bg-ink-950 focus:outline-none focus:ring-2'

const controlState = (hasError) =>
  hasError
    ? 'border-ember-500/70 focus:border-ember-500 focus:ring-ember-500/25'
    : 'border-ink-700 hover:border-ink-600 focus:border-gold-400 focus:ring-gold-400/20'

/**
 * Labeled form control with error messaging.
 * `as`: 'input' | 'select' | 'textarea'.
 * For selects pass `options` as `{ value, label }` — labels may be `{ en, ar }`.
 */
export default function FormField({
  as = 'input',
  name,
  label,
  error,
  options = [],
  placeholder,
  required,
  suffix,
  className = '',
  ...props
}) {
  const { pick } = useLanguage()
  const id = `field-${name}`
  const errorId = `${id}-error`
  const shared = {
    id,
    name,
    required,
    'aria-invalid': Boolean(error),
    'aria-describedby': error ? errorId : undefined,
    className: `${controlBase} ${controlState(Boolean(error))}`,
    ...props,
  }

  let control
  if (as === 'select') {
    control = (
      <div className="relative">
        <select {...shared} className={`${shared.className} appearance-none pe-10`}>
          {placeholder && (
            <option value="" disabled>
              {placeholder}
            </option>
          )}
          {options.map(({ value, label: optionLabel }) => (
            <option key={value} value={value} className="bg-ink-900">
              {pick(optionLabel)}
            </option>
          ))}
        </select>
        <svg
          viewBox="0 0 20 20"
          fill="currentColor"
          aria-hidden="true"
          className="pointer-events-none absolute end-4 top-1/2 size-4 -translate-y-1/2 text-gold-400"
        >
          <path d="M5.2 7.2a.75.75 0 0 1 1.06 0L10 10.94l3.74-3.74a.75.75 0 1 1 1.06 1.06l-4.27 4.27a.75.75 0 0 1-1.06 0L5.2 8.26a.75.75 0 0 1 0-1.06Z" />
        </svg>
      </div>
    )
  } else if (as === 'textarea') {
    control = <textarea rows={4} placeholder={placeholder} {...shared} className={`${shared.className} resize-y`} />
  } else {
    control = (
      <div className="relative">
        <input placeholder={placeholder} {...shared} className={`${shared.className} ${suffix ? 'pe-12' : ''}`} />
        {suffix && (
          <span className="pointer-events-none absolute end-4 top-1/2 -translate-y-1/2 text-xs font-semibold uppercase tracking-wider text-muted">
            {suffix}
          </span>
        )}
      </div>
    )
  }

  return (
    <div className={className}>
      <label htmlFor={id} className="mb-2 block text-xs font-semibold uppercase tracking-[0.16em] text-bone/70">
        {label}
        {required && <span className="ms-1 text-gold-400">*</span>}
      </label>
      {control}
      {error && (
        <p id={errorId} role="alert" className="mt-1.5 text-xs text-ember-400">
          {error}
        </p>
      )}
    </div>
  )
}
