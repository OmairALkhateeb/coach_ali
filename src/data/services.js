/**
 * Coaching programs. Text fields use `{ en, ar }`.
 * The `id` is also used as the value in the application form.
 * `icon` must match a key in components/ui/Icon.jsx.
 */
export const services = [
  {
    id: 'online-coaching',
    icon: 'dumbbell',
    title: { en: 'Online Coaching', ar: 'تدريب أونلاين' },
    summary: {
      en: 'Full training + nutrition coaching, adjusted every week from your check-ins.',
      ar: 'برنامج تدريب وتغذية كامل، يُعدَّل كل أسبوع حسب متابعتك.',
    },
    features: {
      en: ['Custom training split', 'Macro-based nutrition plan', 'Weekly check-ins & adjustments', 'Direct WhatsApp support'],
      ar: ['برنامج تمارين مخصص', 'خطة تغذية حسب الماكروز', 'متابعة وتعديل أسبوعي', 'دعم مباشر عبر واتساب'],
    },
    highlighted: true,
  },
  {
    id: 'contest-prep',
    icon: 'trophy',
    title: { en: 'Contest Prep', ar: 'تحضير للبطولات' },
    summary: {
      en: 'Stage-ready coaching from off-season to peak week, from someone who does it himself.',
      ar: 'تحضير كامل للمسرح من الأوف سيزن حتى أسبوع الذروة، مع مدرب يعيش التجربة بنفسه.',
    },
    features: {
      en: ['Prep & peak-week protocol', 'Posing & stage presence', 'Federation & category guidance', 'Post-show reverse diet'],
      ar: ['بروتوكول التحضير وأسبوع الذروة', 'البوزينغ والحضور على المسرح', 'إرشاد حول الاتحادات والفئات', 'رجيم عكسي بعد البطولة'],
    },
  },
  {
    id: 'body-transformation',
    icon: 'flame',
    title: { en: 'Body Transformation', ar: 'تغيير شكل الجسم' },
    summary: {
      en: 'Lose fat, build muscle and change how you look in 12–16 structured weeks.',
      ar: 'خسارة دهون وبناء عضل وتغيير واضح في شكلك خلال 12–16 أسبوعاً منظّماً.',
    },
    features: {
      en: ['Fat-loss or lean-bulk phases', 'Progress photo reviews', 'Habit & lifestyle coaching', 'Flexible meal options'],
      ar: ['مراحل تنشيف أو تضخيم نظيف', 'مراجعة صور التقدّم', 'توجيه للعادات ونمط الحياة', 'خيارات وجبات مرنة'],
    },
  },
  {
    id: 'nutrition-plan',
    icon: 'leaf',
    title: { en: 'Nutrition Plan', ar: 'خطة تغذية' },
    summary: {
      en: 'A tailored meal plan built around your goals, schedule and local food.',
      ar: 'نظام غذائي مفصّل على أهدافك وجدولك والأكل المتوفر عندك.',
    },
    features: {
      en: ['Calorie & macro targets', 'Meal structure & swaps', 'Supplement guidance', 'Monthly update'],
      ar: ['السعرات والماكروز المطلوبة', 'توزيع الوجبات والبدائل', 'إرشاد حول المكملات', 'تحديث شهري'],
    },
  },
]
