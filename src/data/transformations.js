/**
 * Client results gallery. Text fields use `{ en, ar, es }`.
 * - type 'single': one photo (`image`).
 * - type 'compare': before/after slider (`before` + `after`).
 * - `program`: a service id from services.js (its title is shown as the tag).
 * Drop new photos in /public/images and add an entry here.
 */
export const transformations = [
  {
    id: 'client-compare-1',
    type: 'compare',
    before: '/images/client-before.jpg',
    after: '/images/client-after.jpg',
    name: { en: 'Client transformation', ar: 'تحوّل متدرب', es: 'Transformación de un cliente' },
    result: { en: 'Leaner, fuller and conditioned', ar: 'أنحف وأضخم وأوضح تقسيماً', es: 'Más definido, más lleno y en forma' },
    program: 'body-transformation',
  },
  {
    id: 'client-1',
    type: 'single',
    image: '/images/client-1.jpg',
    name: { en: 'Stage-ready conditioning', ar: 'جاهزية كاملة للمسرح', es: 'Listo para el escenario' },
    result: { en: 'Peak conditioning', ar: 'تقسيم في أعلى مستوياته', es: 'Definición al máximo' },
    program: 'contest-prep',
  },
  {
    id: 'client-4',
    type: 'single',
    image: '/images/client-4.jpg',
    name: { en: 'Competition debut', ar: 'أول مشاركة في بطولة', es: 'Debut en competición' },
    result: { en: 'First certificate on stage', ar: 'أول شهادة على المسرح', es: 'Primer diploma en el escenario' },
    program: 'contest-prep',
  },
  {
    id: 'client-3',
    type: 'single',
    image: '/images/client-3.jpg',
    name: { en: 'Lean & defined', ar: 'نحافة وتقسيم', es: 'Seco y definido' },
    result: { en: 'Visible abs, sharper V-taper', ar: 'بطن مقسّم وشكل V أوضح', es: 'Abdomen marcado y una V más pronunciada' },
    program: 'online-coaching',
  },
  {
    id: 'client-2',
    type: 'single',
    image: '/images/client-2.jpg',
    name: { en: 'Building the base', ar: 'بناء الأساس', es: 'Construyendo la base' },
    result: { en: 'Muscle gain phase', ar: 'مرحلة بناء العضل', es: 'Fase de ganancia muscular' },
    program: 'online-coaching',
  },
]
