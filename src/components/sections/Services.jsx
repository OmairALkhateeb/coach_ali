import { services } from '../../data/services'
import { useLanguage } from '../../i18n/useLanguage'
import SectionHeading from '../ui/SectionHeading'
import ServiceCard from '../ui/ServiceCard'

export default function Services({ onSelectProgram }) {
  const { t } = useLanguage()

  return (
    <section id="services" className="relative overflow-hidden bg-ink-950 py-24 sm:py-32">
      <div className="pointer-events-none absolute left-1/2 top-0 size-[600px] -translate-x-1/2 rounded-full bg-gold-500/5 blur-[160px]" />
      <div className="relative mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('services.eyebrow')}
          title={t('services.title')}
          highlight={t('services.highlight')}
          description={t('services.description')}
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 xl:grid-cols-4">
          {services.map((service, i) => (
            <ServiceCard key={service.id} service={service} onSelect={onSelectProgram} delay={i * 80} />
          ))}
        </div>
      </div>
    </section>
  )
}
