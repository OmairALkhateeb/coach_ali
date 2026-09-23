import { useEffect, useRef } from 'react'
import { useTransformationText } from '../../hooks/useTransformationText'
import { useLanguage } from '../../i18n/useLanguage'
import Icon from './Icon'

export default function Lightbox({ item, onClose }) {
  const closeRef = useRef(null)
  const { t } = useLanguage()
  const text = useTransformationText(item)

  useEffect(() => {
    if (!item) return
    const onKey = (e) => e.key === 'Escape' && onClose()
    const { overflow } = document.body.style
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    closeRef.current?.focus()
    return () => {
      document.body.style.overflow = overflow
      document.removeEventListener('keydown', onKey)
    }
  }, [item, onClose])

  if (!item) return null

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label={text.name}
      onClick={onClose}
      className="fixed inset-0 z-[60] grid animate-fade-up place-items-center bg-ink-950/92 p-4 backdrop-blur-md sm:p-10"
    >
      <button
        ref={closeRef}
        type="button"
        onClick={onClose}
        aria-label={t('results.close')}
        className="absolute end-4 top-4 grid size-11 place-items-center rounded-full border border-gold-400/30 text-gold-200 transition hover:bg-gold-400 hover:text-ink-950"
      >
        <Icon name="close" className="size-5" />
      </button>
      <figure onClick={(e) => e.stopPropagation()} className="flex max-h-full flex-col items-center">
        <img
          src={item.image}
          alt={text.name}
          className="max-h-[80vh] w-auto rounded-2xl border border-gold-400/20 object-contain"
        />
        <figcaption className="mt-4 text-center">
          <p className="font-display text-2xl uppercase tracking-wide text-bone">{text.name}</p>
          <p className="text-sm text-gold-300">
            {text.program} · {text.result}
          </p>
        </figcaption>
      </figure>
    </div>
  )
}
