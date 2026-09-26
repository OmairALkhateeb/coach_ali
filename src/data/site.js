/**
 * Global site configuration.
 * Text fields use `{ en, ar, es }` — every component reads the active language from here.
 */
export const site = {
  name: { en: 'Ali Afaghani', ar: 'علي الأفغاني', es: 'Ali Afaghani' },
  title: { en: 'IFBB Pro Elite · Men’s Physique', ar: 'محترف IFBB Elite · فيزيك رجال', es: 'IFBB Pro Elite · Men’s Physique' },
  tagline: { en: 'Built on stage. Proven on clients.', ar: 'إنجازات على المسرح. نتائج مع المتدربين.', es: 'Forjado en el escenario. Probado en mis clientes.' },

  // International format, digits only (no "+", spaces or leading zeros).
  whatsappNumber: '963937762872',

  instagram: {
    handle: 'ifbb_pro_ali_afaghani',
    url: 'https://www.instagram.com/ifbb_pro_ali_afaghani/',
  },

  gym: {
    name: { en: 'T-GYM Barada', ar: 'T-GYM بردى', es: 'T-GYM Barada' },
    instagram: 'https://www.instagram.com/tgym.sports/',
  },

  location: {
    en: 'Damascus, Syria · Coaching worldwide online',
    ar: 'دمشق، سوريا · تدريب أونلاين حول العالم',
    es: 'Damasco, Siria · Entrenamiento online en todo el mundo',
  },
}

export const navLinks = [
  { label: { en: 'About', ar: 'نبذة', es: 'Sobre mí' }, href: '#about' },
  { label: { en: 'Achievements', ar: 'الإنجازات', es: 'Logros' }, href: '#achievements' },
  { label: { en: 'Coaching', ar: 'البرامج', es: 'Programas' }, href: '#services' },
  { label: { en: 'Results', ar: 'النتائج', es: 'Resultados' }, href: '#results' },
  { label: { en: 'Apply', ar: 'التقديم', es: 'Solicitar' }, href: '#apply' },
]

export const heroStats = [
  { value: 'IFBB', label: { en: 'Pro Card Elite', ar: 'بطاقة المحترفين Elite', es: 'Pro Card Elite' } },
  { value: '5×', label: { en: 'Podium titles', ar: 'ألقاب على المنصة', es: 'Títulos en el podio' } },
  { value: '2026', label: { en: 'World Championship · Spain', ar: 'بطولة العالم · إسبانيا', es: 'Campeonato del Mundo · España' } },
]
