import { site } from '../../data/site'
import { useReveal } from '../../hooks/useReveal'
import { useLanguage } from '../../i18n/useLanguage'
import ApplicationForm from '../form/ApplicationForm'
import SectionHeading from '../ui/SectionHeading'

export default function Apply({ form }) {
  const panelRef = useReveal()
  const formRef = useReveal()
  const { t, pick } = useLanguage()
  const steps = t('apply.steps')

  return (
    <section id="apply" className="grain relative overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute -end-40 top-20 size-[520px] rounded-full bg-gold-500/10 blur-[150px]" />
      <div className="relative mx-auto grid max-w-7xl gap-12 px-5 sm:px-8 lg:grid-cols-[0.9fr_1.4fr] lg:gap-16">
        <div>
          <SectionHeading
            align="left"
            eyebrow={t('apply.eyebrow')}
            title={t('apply.title')}
            highlight={t('apply.highlight')}
            description={t('apply.description')}
          />

          <ol ref={panelRef} className="reveal mt-10">
            {steps.map(({ title, text }, i) => (
              <li key={title} className="relative flex gap-5 pb-8 last:pb-0">
                {i < steps.length - 1 && (
                  <span className="absolute start-5 top-11 h-[calc(100%-2.75rem)] w-px bg-gradient-to-b from-gold-400/50 to-ink-700" />
                )}
                <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold-400/40 font-display text-lg text-gold-300">
                  {i + 1}
                </span>
                <div className="pt-1.5">
                  <p className="font-semibold text-bone">{title}</p>
                  <p className="mt-1 text-sm text-muted">{text}</p>
                </div>
              </li>
            ))}
          </ol>

          <div className="gold-border mt-10 hidden items-center gap-4 rounded-2xl bg-ink-900/70 p-4 lg:flex">
            <img src="/images/champion.jpg" alt="" loading="lazy" className="size-16 rounded-xl object-cover object-top" />
            <div>
              <p className="text-sm font-semibold text-bone">{t('apply.coachedBy', { name: pick(site.name) })}</p>
              <p className="text-xs text-muted">{t('apply.noTemplates')}</p>
            </div>
          </div>
        </div>

        <div
          ref={formRef}
          className="reveal relative rounded-[2rem] bg-gradient-to-b from-gold-400/40 via-ink-700/60 to-ink-800 p-[1px]"
        >
          <div className="rounded-[calc(2rem-1px)] bg-ink-900/95 p-6 backdrop-blur sm:p-10">
            <ApplicationForm form={form} />
          </div>
        </div>
      </div>
    </section>
  )
}
