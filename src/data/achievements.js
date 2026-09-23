/**
 * Competition record. Text fields use `{ en, ar }`.
 * `medal`: 'gold' | 'silver' | 'bronze' | 'pro' — controls the badge styling.
 * `featured`: shows the card larger with an image.
 */
export const achievements = [
  {
    id: 'pro-card',
    medal: 'pro',
    title: { en: 'IFBB Pro Card Elite', ar: 'بطاقة IFBB Pro Elite' },
    event: { en: 'Professional League', ar: 'دوري المحترفين' },
    year: 'Pro',
    description: {
      en: 'Earned professional status — competing among the elite of the sport.',
      ar: 'حصل على صفة المحترف لينافس بين نخبة هذه الرياضة.',
    },
  },
  {
    id: 'master-of-the-beach-2026',
    medal: 'gold',
    title: { en: 'Overall Champion', ar: 'بطل الأبطال' },
    event: { en: 'Master of the Beach', ar: 'سيد الشاطئ' },
    year: '2026',
    description: {
      en: '1st place Men’s Physique +182 and the overall champion-of-champions title.',
      ar: 'المركز الأول في فيزيك رجال +182 ولقب بطل أبطال سيد الشاطئ.',
    },
    image: '/images/champion.jpg',
    featured: true,
  },
  {
    id: 'victory-cup-2025',
    medal: 'gold',
    title: { en: '1st Place', ar: 'المركز الأول' },
    event: { en: 'Victory Cup Syria', ar: 'كأس النصر - سوريا' },
    year: '2025',
    description: {
      en: 'Gold in Men’s Physique on the national stage.',
      ar: 'ذهبية فيزيك رجال على المستوى الوطني.',
    },
  },
  {
    id: 'mr-universe-jordan-2025',
    medal: 'silver',
    title: { en: '2nd Place', ar: 'المركز الثاني' },
    event: { en: 'Mr Universe Jordan', ar: 'مستر يونيفرس الأردن' },
    year: '2025',
    description: {
      en: 'Silver medal against a strong international line-up.',
      ar: 'ميدالية فضية أمام منافسين دوليين أقوياء.',
    },
  },
  {
    id: 'mr-universe-lebanon-2024',
    medal: 'gold',
    title: { en: '1st Place', ar: 'المركز الأول' },
    event: { en: 'Mr Universe Lebanon', ar: 'مستر يونيفرس لبنان' },
    year: '2024',
    description: {
      en: 'Gold medal and the first international title.',
      ar: 'ميدالية ذهبية وأول لقب دولي.',
    },
  },
]

/** Upcoming goal highlighted under the achievements grid. */
export const nextChallenge = {
  label: { en: 'Next stage', ar: 'المحطة القادمة' },
  title: { en: 'World Championship — Spain', ar: 'بطولة العالم — إسبانيا' },
  date: { en: '29 Oct 2026', ar: '29 تشرين الأول 2026' },
  description: {
    en: 'Qualified to represent the Syrian national team in Men’s Physique at the World Championship.',
    ar: 'تأهّل لتمثيل المنتخب السوري في فئة فيزيك رجال ببطولة العالم.',
  },
}
