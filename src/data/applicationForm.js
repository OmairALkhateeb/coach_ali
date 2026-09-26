import { services } from './services'

/**
 * Options and defaults for the coaching application form.
 * `value` is stable (never shown); `label` is shown in the active language
 * and used in the WhatsApp message.
 */
export const goalOptions = [
  { value: 'lose-fat', label: { en: 'Lose fat', ar: 'خسارة الدهون', es: 'Perder grasa' } },
  { value: 'build-muscle', label: { en: 'Build muscle', ar: 'بناء العضل', es: 'Ganar músculo' } },
  { value: 'recomposition', label: { en: 'Body recomposition', ar: 'تحسين تكوين الجسم', es: 'Recomposición corporal' } },
  { value: 'compete', label: { en: 'Compete on stage', ar: 'المشاركة في بطولة', es: 'Competir en el escenario' } },
  { value: 'health', label: { en: 'General fitness & health', ar: 'لياقة وصحة عامة', es: 'Forma física y salud general' } },
]

export const experienceOptions = [
  { value: 'beginner', label: { en: 'Beginner (under 1 year)', ar: 'مبتدئ (أقل من سنة)', es: 'Principiante (menos de 1 año)' } },
  { value: 'intermediate', label: { en: 'Intermediate (1–3 years)', ar: 'متوسط (1–3 سنوات)', es: 'Intermedio (1–3 años)' } },
  { value: 'advanced', label: { en: 'Advanced (3+ years)', ar: 'متقدم (أكثر من 3 سنوات)', es: 'Avanzado (más de 3 años)' } },
  { value: 'competitor', label: { en: 'Competitor', ar: 'لاعب بطولات', es: 'Competidor' } },
]

export const genderOptions = [
  { value: 'male', label: { en: 'Male', ar: 'ذكر', es: 'Hombre' } },
  { value: 'female', label: { en: 'Female', ar: 'أنثى', es: 'Mujer' } },
]

export const programOptions = services.map(({ id, title }) => ({ value: id, label: title }))

export const trainingDayOptions = ['2', '3', '4', '5', '6', '7'].map((d) => ({ value: d, label: d }))

export const initialFormValues = {
  fullName: '',
  age: '',
  gender: 'male',
  country: '',
  height: '',
  weight: '',
  goal: '',
  experience: '',
  program: services.find((s) => s.highlighted)?.id ?? services[0].id,
  trainingDays: '4',
  injuries: '',
  message: '',
}
