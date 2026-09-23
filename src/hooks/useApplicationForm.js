import { useCallback, useState } from 'react'
import { initialFormValues } from '../data/applicationForm'
import { site } from '../data/site'
import { useLanguage } from '../i18n/useLanguage'
import { validateApplication } from '../utils/validation'
import { buildApplicationMessage, buildWhatsAppUrl } from '../utils/whatsapp'

/**
 * Frontend-only state for the coaching application form.
 * On a valid submit it opens WhatsApp with the application pre-filled
 * in the visitor's current language.
 */
export function useApplicationForm() {
  const { lang } = useLanguage()
  const [values, setValues] = useState(initialFormValues)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState('idle') // 'idle' | 'sent'

  const handleChange = useCallback((event) => {
    const { name, value } = event.target
    setValues((prev) => ({ ...prev, [name]: value }))
    // Clear a field's error as soon as the user edits it.
    setErrors((prev) => {
      if (!prev[name]) return prev
      const next = { ...prev }
      delete next[name]
      return next
    })
  }, [])

  const selectProgram = useCallback((programId) => {
    setValues((prev) => ({ ...prev, program: programId }))
  }, [])

  const openWhatsApp = useCallback(() => {
    const url = buildWhatsAppUrl(site.whatsappNumber, buildApplicationMessage(values, lang))
    // Not passing 'noopener' here: it makes window.open() always return null,
    // which would break the blocked-pop-up check below.
    const popup = window.open(url, '_blank')
    if (popup) {
      popup.opener = null
    } else {
      // Fallback when pop-ups are blocked (common in mobile in-app browsers).
      window.location.href = url
    }
  }, [values, lang])

  const handleSubmit = useCallback(
    (event) => {
      event.preventDefault()
      const nextErrors = validateApplication(values)
      setErrors(nextErrors)

      if (Object.keys(nextErrors).length > 0) {
        const firstField = Object.keys(nextErrors)[0]
        document.getElementById(`field-${firstField}`)?.focus()
        return
      }

      openWhatsApp()
      setStatus('sent')
    },
    [values, openWhatsApp],
  )

  const reset = useCallback(() => {
    setValues(initialFormValues)
    setErrors({})
    setStatus('idle')
  }, [])

  return { values, errors, status, handleChange, handleSubmit, selectProgram, openWhatsApp, reset }
}
