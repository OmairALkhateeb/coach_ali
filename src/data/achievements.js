/**
 * Competition record. Text fields use `{ en, ar, es }`.
 * `medal`: 'gold' | 'silver' | 'bronze' | 'pro' — controls the badge styling.
 * `featured`: shows the card larger with an image.
 */
export const achievements = [
  {
    id: 'pro-card',
    medal: 'pro',
    title: { en: 'IFBB Pro Card Elite', ar: 'بطاقة IFBB Pro Elite', es: 'IFBB Pro Card Elite' },
    event: { en: 'Professional League', ar: 'دوري المحترفين', es: 'Liga Profesional' },
    year: 'Pro',
    description: {
      en: 'Earned professional status — competing among the elite of the sport.',
      ar: 'حصل على صفة المحترف لينافس بين نخبة هذه الرياضة.',
      es: 'Obtuvo el estatus profesional — compite entre la élite de este deporte.',
    },
  },
  {
    id: 'master-of-the-beach-2026',
    medal: 'gold',
    title: { en: 'Overall Champion', ar: 'بطل الأبطال', es: 'Campeón absoluto' },
    event: { en: 'Master of the Beach', ar: 'سيد الشاطئ', es: 'Master of the Beach' },
    year: '2026',
    description: {
      en: '1st place Men’s Physique +182 and the overall champion-of-champions title.',
      ar: 'المركز الأول في فيزيك رجال +182 ولقب بطل أبطال سيد الشاطئ.',
      es: '1.er puesto en Men’s Physique +182 y el título absoluto de campeón de campeones.',
    },
    image: '/images/champion.jpg',
    featured: true,
  },
  {
    id: 'victory-cup-2025',
    medal: 'gold',
    title: { en: '1st Place', ar: 'المركز الأول', es: '1.er puesto' },
    event: { en: 'Victory Cup Syria', ar: 'كأس النصر - سوريا', es: 'Victory Cup Siria' },
    year: '2025',
    description: {
      en: 'Gold in Men’s Physique on the national stage.',
      ar: 'ذهبية فيزيك رجال على المستوى الوطني.',
      es: 'Oro en Men’s Physique a nivel nacional.',
    },
  },
  {
    id: 'mr-universe-jordan-2025',
    medal: 'silver',
    title: { en: '2nd Place', ar: 'المركز الثاني', es: '2.º puesto' },
    event: { en: 'Mr Universe Jordan', ar: 'مستر يونيفرس الأردن', es: 'Mr Universe Jordania' },
    year: '2025',
    description: {
      en: 'Silver medal against a strong international line-up.',
      ar: 'ميدالية فضية أمام منافسين دوليين أقوياء.',
      es: 'Medalla de plata frente a una fuerte competencia internacional.',
    },
  },
  {
    id: 'mr-universe-lebanon-2024',
    medal: 'gold',
    title: { en: '1st Place', ar: 'المركز الأول', es: '1.er puesto' },
    event: { en: 'Mr Universe Lebanon', ar: 'مستر يونيفرس لبنان', es: 'Mr Universe Líbano' },
    year: '2024',
    description: {
      en: 'Gold medal and the first international title.',
      ar: 'ميدالية ذهبية وأول لقب دولي.',
      es: 'Medalla de oro y primer título internacional.',
    },
  },
]

/** Upcoming goal highlighted under the achievements grid. */
export const nextChallenge = {
  label: { en: 'Next stage', ar: 'المحطة القادمة', es: 'Próxima meta' },
  title: { en: 'World Championship — Spain', ar: 'بطولة العالم — إسبانيا', es: 'Campeonato del Mundo — España' },
  date: { en: '29 Oct 2026', ar: '29 تشرين الأول 2026', es: '29 oct 2026' },
  description: {
    en: 'Qualified to represent the Syrian national team in Men’s Physique at the World Championship.',
    ar: 'تأهّل لتمثيل المنتخب السوري في فئة فيزيك رجال ببطولة العالم.',
    es: 'Clasificado para representar a la selección siria en Men’s Physique en el Campeonato del Mundo.',
  },
}
