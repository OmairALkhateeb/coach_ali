/**
 * Coaching programs. Text fields use `{ en, ar, es }`.
 * The `id` is also used as the value in the application form.
 * `icon` must match a key in components/ui/Icon.jsx.
 */
export const services = [
  {
    id: 'online-coaching',
    icon: 'dumbbell',
    title: { en: 'Online Coaching', ar: 'تدريب أونلاين', es: 'Entrenamiento online' },
    summary: {
      en: 'Full training + nutrition coaching, adjusted every week from your check-ins.',
      ar: 'برنامج تدريب وتغذية كامل، يُعدَّل كل أسبوع حسب متابعتك.',
      es: 'Entrenamiento y nutrición completos, ajustados cada semana según tus revisiones.',
    },
    features: {
      en: ['Custom training split', 'Macro-based nutrition plan', 'Weekly check-ins & adjustments', 'Direct WhatsApp support'],
      ar: ['برنامج تمارين مخصص', 'خطة تغذية حسب الماكروز', 'متابعة وتعديل أسبوعي', 'دعم مباشر عبر واتساب'],
      es: ['Rutina de entrenamiento a medida', 'Plan de nutrición basado en macros', 'Revisiones y ajustes semanales', 'Soporte directo por WhatsApp'],
    },
    highlighted: true,
  },
  {
    id: 'contest-prep',
    icon: 'trophy',
    title: { en: 'Contest Prep', ar: 'تحضير للبطولات', es: 'Preparación para competición' },
    summary: {
      en: 'Stage-ready coaching from off-season to peak week, from someone who does it himself.',
      ar: 'تحضير كامل للمسرح من الأوف سيزن حتى أسبوع الذروة، مع مدرب يعيش التجربة بنفسه.',
      es: 'Preparación para el escenario desde la off-season hasta la peak week, con alguien que lo vive en primera persona.',
    },
    features: {
      en: ['Prep & peak-week protocol', 'Posing & stage presence', 'Federation & category guidance', 'Post-show reverse diet'],
      ar: ['بروتوكول التحضير وأسبوع الذروة', 'البوزينغ والحضور على المسرح', 'إرشاد حول الاتحادات والفئات', 'رجيم عكسي بعد البطولة'],
      es: ['Protocolo de preparación y peak week', 'Posing y presencia en el escenario', 'Orientación sobre federaciones y categorías', 'Dieta inversa tras la competición'],
    },
  },
  {
    id: 'body-transformation',
    icon: 'flame',
    title: { en: 'Body Transformation', ar: 'تغيير شكل الجسم', es: 'Transformación corporal' },
    summary: {
      en: 'Lose fat, build muscle and change how you look in 12–16 structured weeks.',
      ar: 'خسارة دهون وبناء عضل وتغيير واضح في شكلك خلال 12–16 أسبوعاً منظّماً.',
      es: 'Pierde grasa, gana músculo y cambia tu físico en 12–16 semanas estructuradas.',
    },
    features: {
      en: ['Fat-loss or lean-bulk phases', 'Progress photo reviews', 'Habit & lifestyle coaching', 'Flexible meal options'],
      ar: ['مراحل تنشيف أو تضخيم نظيف', 'مراجعة صور التقدّم', 'توجيه للعادات ونمط الحياة', 'خيارات وجبات مرنة'],
      es: ['Fases de pérdida de grasa o volumen limpio', 'Revisión de fotos de progreso', 'Coaching de hábitos y estilo de vida', 'Opciones de comidas flexibles'],
    },
  },
  {
    id: 'nutrition-plan',
    icon: 'leaf',
    title: { en: 'Nutrition Plan', ar: 'خطة تغذية', es: 'Plan de nutrición' },
    summary: {
      en: 'A tailored meal plan built around your goals, schedule and local food.',
      ar: 'نظام غذائي مفصّل على أهدافك وجدولك والأكل المتوفر عندك.',
      es: 'Un plan de comidas a medida, adaptado a tus objetivos, tu horario y los alimentos que tienes a mano.',
    },
    features: {
      en: ['Calorie & macro targets', 'Meal structure & swaps', 'Supplement guidance', 'Monthly update'],
      ar: ['السعرات والماكروز المطلوبة', 'توزيع الوجبات والبدائل', 'إرشاد حول المكملات', 'تحديث شهري'],
      es: ['Objetivos de calorías y macros', 'Estructura de comidas y alternativas', 'Orientación sobre suplementos', 'Actualización mensual'],
    },
  },
]
