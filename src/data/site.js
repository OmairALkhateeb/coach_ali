/**
 * Global site configuration.
 * Text fields use `{ en, ar }` — every component reads the active language from here.
 */
export const site = {
  name: { en: 'Ali Afaghani', ar: 'علي الأفغاني' },
  title: { en: 'IFBB Pro Elite · Men’s Physique', ar: 'محترف IFBB Elite · فيزيك رجال' },
  tagline: { en: 'Built on stage. Proven on clients.', ar: 'إنجازات على المسرح. نتائج مع المتدربين.' },

  // International format, digits only (no "+", spaces or leading zeros).
  whatsappNumber: '963937762872',

  instagram: {
    handle: 'ifbb_pro_ali_afaghani',
    url: 'https://www.instagram.com/ifbb_pro_ali_afaghani/',
  },

  gym: {
    name: { en: 'T-GYM Barada', ar: 'T-GYM بردى' },
    instagram: 'https://www.instagram.com/tgym.sports/',
  },

  location: {
    en: 'Damascus, Syria · Coaching worldwide online',
    ar: 'دمشق، سوريا · تدريب أونلاين حول العالم',
  },
}

export const navLinks = [
  { label: { en: 'About', ar: 'نبذة' }, href: '#about' },
  { label: { en: 'Achievements', ar: 'الإنجازات' }, href: '#achievements' },
  { label: { en: 'Coaching', ar: 'البرامج' }, href: '#services' },
  { label: { en: 'Results', ar: 'النتائج' }, href: '#results' },
  { label: { en: 'Apply', ar: 'التقديم' }, href: '#apply' },
]

export const heroStats = [
  { value: 'IFBB', label: { en: 'Pro Card Elite', ar: 'بطاقة المحترفين Elite' } },
  { value: '5×', label: { en: 'Podium titles', ar: 'ألقاب على المنصة' } },
  { value: '2026', label: { en: 'World Championship · Spain', ar: 'بطولة العالم · إسبانيا' } },
]
