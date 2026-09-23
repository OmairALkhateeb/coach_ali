import { services } from '../data/services'
import { useLanguage } from '../i18n/useLanguage'

/** Resolves a transformation's text fields (name, result, program title) in the active language. */
export function useTransformationText(item) {
  const { pick } = useLanguage()
  if (!item) return {}
  const service = services.find((s) => s.id === item.program)
  return {
    name: pick(item.name),
    result: pick(item.result),
    program: service ? pick(service.title) : item.program,
  }
}
