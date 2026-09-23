import {
  experienceOptions,
  genderOptions,
  goalOptions,
  programOptions,
} from '../data/applicationForm'
import { localize } from '../i18n/config'
import { ui } from '../i18n/ui'

const optionLabel = (options, value, lang) =>
  localize(options.find((option) => option.value === value)?.label, lang) ?? value

/**
 * Builds the pre-filled WhatsApp message in the visitor's language.
 * Empty optional fields are skipped so the message stays clean.
 */
export function buildApplicationMessage(values, lang = 'en') {
  const { greeting, intro, labels } = ui[lang].whatsapp
  const { cm, kg } = ui[lang].form

  const rows = [
    ['fullName', values.fullName],
    ['age', values.age],
    ['gender', optionLabel(genderOptions, values.gender, lang)],
    ['country', values.country],
    ['height', values.height && `${values.height} ${cm}`],
    ['weight', values.weight && `${values.weight} ${kg}`],
    ['program', optionLabel(programOptions, values.program, lang)],
    ['goal', optionLabel(goalOptions, values.goal, lang)],
    ['experience', optionLabel(experienceOptions, values.experience, lang)],
    ['trainingDays', values.trainingDays],
    ['injuries', values.injuries],
    ['message', values.message],
  ]
    .filter(([, value]) => String(value ?? '').trim() !== '')
    .map(([key, value]) => `• *${labels[key]}:* ${String(value).trim()}`)

  return [greeting, intro, '', ...rows].join('\n')
}

/** Returns a wa.me deep link with the encoded message. */
export function buildWhatsAppUrl(phoneNumber, message) {
  const digits = String(phoneNumber).replace(/\D/g, '')
  return `https://wa.me/${digits}?text=${encodeURIComponent(message)}`
}
