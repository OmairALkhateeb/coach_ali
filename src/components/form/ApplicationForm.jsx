import {
  experienceOptions,
  genderOptions,
  goalOptions,
  programOptions,
  trainingDayOptions,
} from '../../data/applicationForm'
import { useLanguage } from '../../i18n/useLanguage'
import Button from '../ui/Button'
import Icon from '../ui/Icon'
import FormField from './FormField'

/**
 * Coaching application form. State lives in `useApplicationForm` (lifted to the
 * App so service cards can pre-select a program).
 */
export default function ApplicationForm({ form }) {
  const { t, pick } = useLanguage()
  const { values, errors, status, handleChange, handleSubmit, selectProgram, openWhatsApp, reset } = form

  // Shared props for a field: value, change handler and translated error.
  const field = (name) => ({
    name,
    value: values[name],
    onChange: handleChange,
    error: errors[name] && t(errors[name]),
  })

  if (status === 'sent') {
    return (
      <div className="flex flex-col items-center py-10 text-center" role="status">
        <div className="grid size-16 place-items-center rounded-full bg-gold-gradient text-ink-950">
          <Icon name="check" className="size-8" strokeWidth={2.5} />
        </div>
        <h3 className="mt-6 font-display text-3xl uppercase tracking-wide text-bone">{t('form.sentTitle')}</h3>
        <p className="mt-3 max-w-sm text-sm leading-relaxed text-muted">{t('form.sentText')}</p>
        <div className="mt-8 flex flex-wrap justify-center gap-3">
          <Button variant="outline" onClick={openWhatsApp} icon="whatsapp" iconPosition="start">
            {t('form.openAgain')}
          </Button>
          <Button variant="ghost" onClick={reset}>
            {t('form.newApplication')}
          </Button>
        </div>
      </div>
    )
  }

  return (
    <form onSubmit={handleSubmit} noValidate className="space-y-8">
      {/* Program picker */}
      <fieldset>
        <legend className="mb-3 text-xs font-semibold uppercase tracking-[0.16em] text-bone/70">
          {t('form.program')} <span className="text-gold-400">*</span>
        </legend>
        <div className="grid grid-cols-2 gap-2.5 lg:grid-cols-4">
          {programOptions.map(({ value, label }) => {
            const active = values.program === value
            return (
              <button
                key={value}
                type="button"
                aria-pressed={active}
                onClick={() => selectProgram(value)}
                className={`rounded-xl border px-3 py-3 text-xs font-semibold uppercase tracking-[0.12em] transition duration-200 ${
                  active
                    ? 'border-gold-400 bg-gold-400/15 text-gold-200'
                    : 'border-ink-700 text-muted hover:border-ink-600 hover:text-bone'
                }`}
              >
                {pick(label)}
              </button>
            )
          })}
        </div>
      </fieldset>

      <div className="grid grid-cols-2 gap-x-4 gap-y-5 sm:gap-x-5">
        <FormField
          {...field('fullName')}
          label={t('form.fullName')}
          required
          autoComplete="name"
          placeholder={t('form.fullNamePlaceholder')}
          className="col-span-2"
        />
        <FormField
          {...field('age')}
          label={t('form.age')}
          type="number"
          inputMode="numeric"
          required
          min="14"
          max="80"
          placeholder="25"
        />
        <FormField {...field('gender')} as="select" label={t('form.gender')} options={genderOptions} />
        <FormField
          {...field('height')}
          label={t('form.height')}
          type="number"
          inputMode="decimal"
          required
          suffix={t('form.cm')}
          placeholder="178"
        />
        <FormField
          {...field('weight')}
          label={t('form.weight')}
          type="number"
          inputMode="decimal"
          required
          suffix={t('form.kg')}
          placeholder="80"
        />
        <FormField
          {...field('country')}
          label={t('form.country')}
          required
          autoComplete="country-name"
          placeholder={t('form.countryPlaceholder')}
          className="col-span-2"
        />
        <FormField
          {...field('goal')}
          as="select"
          label={t('form.goal')}
          required
          placeholder={t('form.goalPlaceholder')}
          options={goalOptions}
          className="col-span-2 sm:col-span-1"
        />
        <FormField
          {...field('experience')}
          as="select"
          label={t('form.experience')}
          required
          placeholder={t('form.experiencePlaceholder')}
          options={experienceOptions}
          className="col-span-2 sm:col-span-1"
        />
        <FormField
          {...field('trainingDays')}
          as="select"
          label={t('form.trainingDays')}
          options={trainingDayOptions}
          className="col-span-2 sm:col-span-1"
        />
        <FormField
          {...field('injuries')}
          label={t('form.injuries')}
          placeholder={t('form.injuriesPlaceholder')}
          className="col-span-2 sm:col-span-1"
        />
        <FormField
          {...field('message')}
          as="textarea"
          label={t('form.message')}
          placeholder={t('form.messagePlaceholder')}
          className="col-span-2"
        />
      </div>

      <div className="flex flex-col gap-4 border-t border-ink-700 pt-7 sm:flex-row sm:items-center sm:justify-between">
        <p className="flex items-center gap-2 text-xs text-muted">
          <Icon name="whatsapp" className="size-4 shrink-0 text-gold-400" />
          {t('form.note')}
        </p>
        <Button type="submit" icon="arrow" className="w-full sm:w-auto">
          {t('form.submit')}
        </Button>
      </div>
    </form>
  )
}
