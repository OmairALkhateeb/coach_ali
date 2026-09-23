import { useCallback, useState } from 'react'
import { transformations } from '../../data/transformations'
import { useLanguage } from '../../i18n/useLanguage'
import Button from '../ui/Button'
import Lightbox from '../ui/Lightbox'
import SectionHeading from '../ui/SectionHeading'
import TransformationCard from '../ui/TransformationCard'

export default function Transformations() {
  const [active, setActive] = useState(null)
  const close = useCallback(() => setActive(null), [])
  const { t } = useLanguage()

  // First "compare" item gets the large tile; the rest fill the grid.
  const featured = transformations.find((item) => item.type === 'compare')
  const rest = transformations.filter((item) => item !== featured)

  return (
    <section id="results" className="relative bg-ink-900 py-24 sm:py-32">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gold-400/30 to-transparent" />
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <SectionHeading
          eyebrow={t('results.eyebrow')}
          title={t('results.title')}
          highlight={t('results.highlight')}
          description={t('results.description')}
        />

        <div className="mt-16 grid grid-cols-2 gap-4 sm:gap-5 lg:grid-cols-4">
          {featured && (
            <TransformationCard
              item={featured}
              className="col-span-2 row-span-2 aspect-[4/5] sm:aspect-square lg:aspect-auto"
            />
          )}
          {rest.map((item, i) => (
            <TransformationCard
              key={item.id}
              item={item}
              onOpen={setActive}
              delay={(i % 2) * 100}
              className="aspect-[3/4]"
            />
          ))}
        </div>

        <div className="mt-14 flex justify-center">
          <Button href="#apply" icon="arrow">
            {t('results.cta')}
          </Button>
        </div>
      </div>

      <Lightbox item={active} onClose={close} />
    </section>
  )
}
