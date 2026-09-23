import { services } from './services'

/**
 * Options and defaults for the coaching application form.
 * `value` is stable (never shown); `label` is shown in the active language
 * and used in the WhatsApp message.
 */
export const goalOptions = [
  { value: 'lose-fat', label: { en: 'Lose fat', ar: 'خسارة الدهون' } },
  { value: 'build-muscle', label: { en: 'Build muscle', ar: 'بناء العضل' } },
  { value: 'recomposition', label: { en: 'Body recomposition', ar: 'تحسين تكوين الجسم' } },
  { value: 'compete', label: { en: 'Compete on stage', ar: 'المشاركة في بطولة' } },
  { value: 'health', label: { en: 'General fitness & health', ar: 'لياقة وصحة عامة' } },
]

export const experienceOptions = [
  { value: 'beginner', label: { en: 'Beginner (under 1 year)', ar: 'مبتدئ (أقل من سنة)' } },
  { value: 'intermediate', label: { en: 'Intermediate (1–3 years)', ar: 'متوسط (1–3 سنوات)' } },
  { value: 'advanced', label: { en: 'Advanced (3+ years)', ar: 'متقدم (أكثر من 3 سنوات)' } },
  { value: 'competitor', label: { en: 'Competitor', ar: 'لاعب بطولات' } },
]

export const genderOptions = [
  { value: 'male', label: { en: 'Male', ar: 'ذكر' } },
  { value: 'female', label: { en: 'Female', ar: 'أنثى' } },
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
