/**
 * Interface copy in both languages.
 * Content that changes often (achievements, services, results) lives in src/data/.
 * Placeholders like {name} are filled in by t(key, { name }).
 */
export const ui = {
  en: {
    meta: { title: 'Ali Afaghani | IFBB Pro Coaching' },

    nav: {
      tagline: 'IFBB Pro Coach',
      startNow: 'Start now',
      openMenu: 'Open menu',
      closeMenu: 'Close menu',
      home: 'home',
      switchLanguage: 'Language',
    },

    hero: {
      first: 'Ali',
      last: 'Afaghani',
      description:
        'Champion physique coaching from an active IFBB Pro. Training, nutrition and contest prep — the same system that put me on the podium, built around you.',
      apply: 'Apply for coaching',
      results: 'See results',
      scroll: 'Scroll',
      scrollLabel: 'Scroll to about',
      imageAlt: 'Ali Afaghani in the gym',
    },

    about: {
      eyebrow: 'About the coach',
      title: 'From the stage…',
      highlight: 'to your plan! 🏆',
      paragraphs: [
        'I’m Ali Afaghani, a professional athlete holding the IFBB Elite Pro card in Men’s Physique, and a certified bodybuilding coach. After years of podium finishes and wins at championships in Lebanon, Jordan and Syria, I’m now preparing to represent the Syrian national team at the World Championship in Spain.',
      ],
      imageAlt: 'Ali Afaghani on the podium with trophy and gold medal',
      badgeValue: '1st',
      badgeLabel: 'Men’s Physique +182',
      whyTitle: 'Why train with me?',
      pillars: [
        {
          title: 'Real experience',
          text: 'Everything I teach you, I’ve lived myself. I don’t just pass on information — I’ve lived every detail of the discipline, the commitment to training and the strict diet, right up to the last minute before stepping on stage.',
        },
        {
          title: 'No mistakes',
          text: 'I put years of trial, error and learning in your hands, to shorten the road for you so you reach your goal directly and safely.',
        },
        {
          title: 'Guaranteed results',
          text: 'Together we design a plan that fits your body and your goals, so you get results you can see with your own eyes and feel in your mirror.',
        },
      ],
      closing:
        'If you’re ready to commit and transform your body and your health, join me now and let’s start the journey together!',
      cta: 'Join me now',
    },

    achievements: {
      eyebrow: 'Competition record',
      title: 'Titles earned',
      highlight: 'on stage',
      description: 'Every medal is proof the method works — the same method you’ll follow.',
      latest: 'Latest title',
      medals: { gold: '1st', silver: '2nd', bronze: '3rd', pro: 'PRO' },
    },

    services: {
      eyebrow: 'Coaching programs',
      title: 'Choose your',
      highlight: 'path',
      description: 'Every program is 100% personalised and delivered online — wherever you train.',
      popular: 'Most popular',
      apply: 'Apply for this',
    },

    results: {
      eyebrow: 'Client results',
      title: 'Real people.',
      highlight: 'Real change.',
      description: 'Drag the slider to compare, or tap any photo to view it full size.',
      cta: 'Start your transformation',
      before: 'Before',
      after: 'After',
      compare: 'Drag to compare before and after',
      view: 'View {name} full size',
      close: 'Close',
    },

    apply: {
      eyebrow: 'Coaching application',
      title: 'Ready to',
      highlight: 'level up?',
      description:
        'Spots are limited so every client gets real attention. Tell me about yourself and let’s build your plan.',
      steps: [
        { title: 'Apply', text: 'Fill in the form — takes about a minute.' },
        { title: 'Send on WhatsApp', text: 'Your details open in WhatsApp, ready to send.' },
        { title: 'Consultation', text: 'Coach Ali reviews your goals and replies personally.' },
        { title: 'Start your plan', text: 'Receive your custom training & nutrition program.' },
      ],
      coachedBy: 'Coached personally by {name}',
      noTemplates: 'No assistants, no templates.',
    },

    form: {
      program: 'Program',
      fullName: 'Full name',
      fullNamePlaceholder: 'Your name',
      age: 'Age',
      gender: 'Gender',
      height: 'Height',
      weight: 'Weight',
      cm: 'cm',
      kg: 'kg',
      country: 'Country / City',
      countryPlaceholder: 'Damascus, Syria',
      goal: 'Main goal',
      goalPlaceholder: 'Select your goal',
      experience: 'Training experience',
      experiencePlaceholder: 'Select your level',
      trainingDays: 'Days you can train / week',
      injuries: 'Injuries / health notes',
      injuriesPlaceholder: 'None',
      message: 'Anything else?',
      messagePlaceholder: 'Tell Coach Ali about your routine, diet or a show you’re targeting…',
      note: 'Opens WhatsApp with your details pre-filled — nothing is stored.',
      submit: 'Send application',
      sentTitle: 'Almost there',
      sentText: 'WhatsApp has opened with your application ready. Just press send and Coach Ali will get back to you.',
      openAgain: 'Open WhatsApp again',
      newApplication: 'New application',
      errors: {
        fullName: 'Please enter your full name.',
        age: 'Enter an age between 14 and 80.',
        country: 'Where are you based?',
        height: 'Height in cm (120–230).',
        weight: 'Weight in kg (35–250).',
        goal: 'Choose your main goal.',
        experience: 'Choose your experience level.',
        program: 'Choose a program.',
      },
    },

    footer: {
      description: 'Online coaching, contest prep and nutrition for athletes who want real results.',
      explore: 'Explore',
      connect: 'Connect',
      rights: 'All rights reserved.',
      whatsappMessage: 'Hi Coach Ali, I have a question about coaching.',
    },

    whatsapp: {
      greeting: 'Hi Coach Ali 👋',
      intro: 'I’d like to apply for coaching. Here are my details:',
      labels: {
        fullName: 'Name',
        age: 'Age',
        gender: 'Gender',
        country: 'Country / City',
        height: 'Height',
        weight: 'Weight',
        program: 'Program',
        goal: 'Main goal',
        experience: 'Experience',
        trainingDays: 'Training days / week',
        injuries: 'Injuries / health notes',
        message: 'Message',
      },
    },
  },

  ar: {
    meta: { title: 'علي الأفغاني | تدريب محترف IFBB' },

    nav: {
      tagline: 'مدرب محترف IFBB',
      startNow: 'ابدأ الآن',
      openMenu: 'فتح القائمة',
      closeMenu: 'إغلاق القائمة',
      home: 'الصفحة الرئيسية',
      switchLanguage: 'اللغة',
    },

    hero: {
      first: 'علي',
      last: 'الأفغاني',
      description:
        'تدريب فيزيك على مستوى الأبطال مع لاعب محترف في IFBB. تمارين وتغذية وتحضير للبطولات — نفس النظام الذي أوصلني إلى منصة التتويج، مصمَّم خصيصاً لك.',
      apply: 'قدّم على التدريب',
      results: 'شاهد النتائج',
      scroll: 'مرّر',
      scrollLabel: 'انتقل إلى النبذة',
      imageAlt: 'علي الأفغاني في النادي',
    },

    about: {
      eyebrow: 'عن المدرب',
      title: 'من المسرح..',
      highlight: 'إلى خطتك! 🏆',
      paragraphs: [
        'أنا علي الأفغاني، لاعب محترف حاصل على كرت الاحتراف IFBB Elite Pro في فئة الـ Men’s Physique، ومدرب كمال أجسام معتمد. بعد سنوات من منصات التتويج والفوز في بطولات لبنان، والأردن، وسوريا، أستعد الآن لتمثيل المنتخب السوري في بطولة العالم بإسبانيا.',
      ],
      imageAlt: 'علي الأفغاني على منصة التتويج مع الكأس والميدالية الذهبية',
      badgeValue: 'المركز الأول',
      badgeLabel: 'فيزيك رجال +182',
      whyTitle: 'لماذا تختار التدريب معي؟',
      pillars: [
        {
          title: 'خبرة حقيقية',
          text: 'كل ما أعلّمه لك عشته بنفسي؛ لست مجرد ناقل للمعلومات، بل عشت تفاصيل الانضباط، والالتزام بالتمرين، والالتزام بالنظام الغذائي الصارم حتى آخر دقيقة قبل الصعود على المسرح.',
        },
        {
          title: 'بدون أخطاء',
          text: 'أضع بين يديك خبرة سنين من التجارب، الأخطاء، والتعلم، لكي أختصر عليك الطريق وتصل لهدفك مباشرة وبأمان.',
        },
        {
          title: 'نتائج مضمونة',
          text: 'نصمم معاً خطة تناسب طبيعة جسمك وأهدافك، لتصل إلى نتائج تراها بعينك وتلمسها في مرآتك.',
        },
      ],
      closing: 'إذا كنت مستعداً للالتزام وتغيير جسمك وصحتك، انضم إليّ الآن ولنبدأ الرحلة معاً!',
      cta: 'انضم إليّ الآن',
    },

    achievements: {
      eyebrow: 'سجل البطولات',
      title: 'ألقاب حُصدت',
      highlight: 'على المسرح',
      description: 'كل ميدالية دليل على أن المنهج ينجح — وهو نفس المنهج الذي ستتبعه.',
      latest: 'أحدث لقب',
      medals: { gold: 'الأول', silver: 'الثاني', bronze: 'الثالث', pro: 'PRO' },
    },

    services: {
      eyebrow: 'برامج التدريب',
      title: 'اختر',
      highlight: 'طريقك',
      description: 'كل البرامج مخصصة لك 100% وتُقدَّم أونلاين — أينما كنت تتدرب.',
      popular: 'الأكثر طلباً',
      apply: 'قدّم على هذا البرنامج',
    },

    results: {
      eyebrow: 'نتائج المتدربين',
      title: 'أشخاص حقيقيون.',
      highlight: 'تغيير حقيقي.',
      description: 'اسحب الشريط للمقارنة، أو اضغط على أي صورة لعرضها بالحجم الكامل.',
      cta: 'ابدأ تحوّلك',
      before: 'قبل',
      after: 'بعد',
      compare: 'اسحب للمقارنة بين قبل وبعد',
      view: 'عرض {name} بالحجم الكامل',
      close: 'إغلاق',
    },

    apply: {
      eyebrow: 'طلب التدريب',
      title: 'جاهز',
      highlight: 'للمستوى التالي؟',
      description:
        'الأماكن محدودة حتى يحصل كل متدرب على اهتمام حقيقي. أخبرني عن نفسك ولنبنِ خطتك معاً.',
      steps: [
        { title: 'قدّم الطلب', text: 'املأ النموذج — يستغرق دقيقة تقريباً.' },
        { title: 'أرسل عبر واتساب', text: 'تُفتح بياناتك في واتساب جاهزة للإرسال.' },
        { title: 'الاستشارة', text: 'يراجع الكابتن علي أهدافك ويرد عليك شخصياً.' },
        { title: 'ابدأ خطتك', text: 'استلم برنامج التمارين والتغذية المخصص لك.' },
      ],
      coachedBy: 'تدريب شخصي مباشر مع {name}',
      noTemplates: 'بدون مساعدين، وبدون برامج جاهزة.',
    },

    form: {
      program: 'البرنامج',
      fullName: 'الاسم الكامل',
      fullNamePlaceholder: 'اسمك',
      age: 'العمر',
      gender: 'الجنس',
      height: 'الطول',
      weight: 'الوزن',
      cm: 'سم',
      kg: 'كغ',
      country: 'البلد / المدينة',
      countryPlaceholder: 'دمشق، سوريا',
      goal: 'الهدف الأساسي',
      goalPlaceholder: 'اختر هدفك',
      experience: 'الخبرة في التمرين',
      experiencePlaceholder: 'اختر مستواك',
      trainingDays: 'أيام التمرين المتاحة أسبوعياً',
      injuries: 'إصابات / ملاحظات صحية',
      injuriesPlaceholder: 'لا يوجد',
      message: 'شيء آخر؟',
      messagePlaceholder: 'أخبر الكابتن علي عن روتينك أو نظامك الغذائي أو بطولة تستهدفها…',
      note: 'يفتح واتساب مع بياناتك جاهزة — لا يتم حفظ أي شيء.',
      submit: 'إرسال الطلب',
      sentTitle: 'اقتربت!',
      sentText: 'تم فتح واتساب وطلبك جاهز. فقط اضغط إرسال وسيتواصل معك الكابتن علي.',
      openAgain: 'افتح واتساب مجدداً',
      newApplication: 'طلب جديد',
      errors: {
        fullName: 'يرجى إدخال اسمك الكامل.',
        age: 'أدخل عمراً بين 14 و80.',
        country: 'أين تقيم؟',
        height: 'الطول بالسنتيمتر (120–230).',
        weight: 'الوزن بالكيلوغرام (35–250).',
        goal: 'اختر هدفك الأساسي.',
        experience: 'اختر مستوى خبرتك.',
        program: 'اختر برنامجاً.',
      },
    },

    footer: {
      description: 'تدريب أونلاين وتحضير للبطولات وتغذية للرياضيين الذين يريدون نتائج حقيقية.',
      explore: 'تصفّح',
      connect: 'تواصل',
      rights: 'جميع الحقوق محفوظة.',
      whatsappMessage: 'مرحباً كابتن علي، عندي سؤال عن التدريب.',
    },

    whatsapp: {
      greeting: 'مرحباً كابتن علي 👋',
      intro: 'أرغب بالتقديم على التدريب، وهذه بياناتي:',
      labels: {
        fullName: 'الاسم',
        age: 'العمر',
        gender: 'الجنس',
        country: 'البلد / المدينة',
        height: 'الطول',
        weight: 'الوزن',
        program: 'البرنامج',
        goal: 'الهدف الأساسي',
        experience: 'الخبرة',
        trainingDays: 'أيام التمرين أسبوعياً',
        injuries: 'إصابات / ملاحظات صحية',
        message: 'رسالة',
      },
    },
  },
  es: {
    meta: { title: 'Ali Afaghani | Entrenamiento IFBB Pro' },

    nav: {
      tagline: 'Entrenador IFBB Pro',
      startNow: 'Empieza ya',
      openMenu: 'Abrir menú',
      closeMenu: 'Cerrar menú',
      home: 'inicio',
      switchLanguage: 'Idioma',
    },

    hero: {
      first: 'Ali',
      last: 'Afaghani',
      description:
        'Entrenamiento de physique de nivel campeón con un atleta IFBB Pro en activo. Entrenamiento, nutrición y preparación para competición — el mismo sistema que me llevó al podio, diseñado para ti.',
      apply: 'Solicita tu plan',
      results: 'Ver resultados',
      scroll: 'Desliza',
      scrollLabel: 'Ir a sobre mí',
      imageAlt: 'Ali Afaghani en el gimnasio',
    },

    about: {
      eyebrow: 'Sobre el entrenador',
      title: 'Del escenario…',
      highlight: '¡a tu plan! 🏆',
      paragraphs: [
        'Soy Ali Afaghani, atleta profesional con la tarjeta IFBB Elite Pro en la categoría Men’s Physique y entrenador de culturismo certificado. Tras años de podios y victorias en campeonatos de Líbano, Jordania y Siria, ahora me preparo para representar a la selección siria en el Campeonato del Mundo en España.',
      ],
      imageAlt: 'Ali Afaghani en el podio con el trofeo y la medalla de oro',
      badgeValue: '1.º',
      badgeLabel: 'Men’s Physique +182',
      whyTitle: '¿Por qué entrenar conmigo?',
      pillars: [
        {
          title: 'Experiencia real',
          text: 'Todo lo que te enseño lo he vivido en primera persona. No me limito a transmitir información: he vivido cada detalle de la disciplina, el compromiso con el entrenamiento y la dieta estricta hasta el último minuto antes de subir al escenario.',
        },
        {
          title: 'Sin errores',
          text: 'Pongo en tus manos años de experiencia, errores y aprendizaje para acortarte el camino y que llegues a tu objetivo de forma directa y segura.',
        },
        {
          title: 'Resultados garantizados',
          text: 'Juntos diseñamos un plan adaptado a tu cuerpo y a tus objetivos, para que consigas resultados que veas con tus propios ojos y notes en tu espejo.',
        },
      ],
      closing:
        'Si estás listo para comprometerte y cambiar tu cuerpo y tu salud, únete a mí ahora y ¡empecemos el camino juntos!',
      cta: 'Únete ahora',
    },

    achievements: {
      eyebrow: 'Historial de competición',
      title: 'Títulos ganados',
      highlight: 'en el escenario',
      description: 'Cada medalla demuestra que el método funciona — el mismo método que vas a seguir.',
      latest: 'Último título',
      medals: { gold: '1.º', silver: '2.º', bronze: '3.º', pro: 'PRO' },
    },

    services: {
      eyebrow: 'Programas de entrenamiento',
      title: 'Elige tu',
      highlight: 'camino',
      description: 'Todos los programas son 100% personalizados y online — entrenes donde entrenes.',
      popular: 'El más elegido',
      apply: 'Solicitar este programa',
    },

    results: {
      eyebrow: 'Resultados de clientes',
      title: 'Personas reales.',
      highlight: 'Cambios reales.',
      description: 'Desliza para comparar o toca cualquier foto para verla a tamaño completo.',
      cta: 'Empieza tu transformación',
      before: 'Antes',
      after: 'Después',
      compare: 'Desliza para comparar el antes y el después',
      view: 'Ver {name} a tamaño completo',
      close: 'Cerrar',
    },

    apply: {
      eyebrow: 'Solicitud de entrenamiento',
      title: '¿Listo para',
      highlight: 'subir de nivel?',
      description:
        'Las plazas son limitadas para que cada cliente reciba atención real. Cuéntame sobre ti y construyamos tu plan.',
      steps: [
        { title: 'Solicita', text: 'Rellena el formulario — te llevará un minuto.' },
        { title: 'Envía por WhatsApp', text: 'Tus datos se abren en WhatsApp, listos para enviar.' },
        { title: 'Consulta', text: 'El coach Ali revisa tus objetivos y te responde personalmente.' },
        { title: 'Empieza tu plan', text: 'Recibe tu programa de entrenamiento y nutrición a medida.' },
      ],
      coachedBy: 'Entrenamiento personal con {name}',
      noTemplates: 'Sin asistentes y sin plantillas.',
    },

    form: {
      program: 'Programa',
      fullName: 'Nombre completo',
      fullNamePlaceholder: 'Tu nombre',
      age: 'Edad',
      gender: 'Sexo',
      height: 'Altura',
      weight: 'Peso',
      cm: 'cm',
      kg: 'kg',
      country: 'País / Ciudad',
      countryPlaceholder: 'Madrid, España',
      goal: 'Objetivo principal',
      goalPlaceholder: 'Elige tu objetivo',
      experience: 'Experiencia entrenando',
      experiencePlaceholder: 'Elige tu nivel',
      trainingDays: 'Días que puedes entrenar / semana',
      injuries: 'Lesiones / notas de salud',
      injuriesPlaceholder: 'Ninguna',
      message: '¿Algo más?',
      messagePlaceholder: 'Cuéntale al coach Ali tu rutina, tu dieta o la competición que tienes en mente…',
      note: 'Abre WhatsApp con tus datos ya rellenados — no se guarda nada.',
      submit: 'Enviar solicitud',
      sentTitle: 'Ya casi está',
      sentText: 'WhatsApp se ha abierto con tu solicitud lista. Solo pulsa enviar y el coach Ali te responderá.',
      openAgain: 'Abrir WhatsApp de nuevo',
      newApplication: 'Nueva solicitud',
      errors: {
        fullName: 'Introduce tu nombre completo.',
        age: 'Introduce una edad entre 14 y 80.',
        country: '¿Dónde vives?',
        height: 'Altura en cm (120–230).',
        weight: 'Peso en kg (35–250).',
        goal: 'Elige tu objetivo principal.',
        experience: 'Elige tu nivel de experiencia.',
        program: 'Elige un programa.',
      },
    },

    footer: {
      description: 'Entrenamiento online, preparación para competición y nutrición para atletas que quieren resultados reales.',
      explore: 'Explorar',
      connect: 'Contacto',
      rights: 'Todos los derechos reservados.',
      whatsappMessage: 'Hola coach Ali, tengo una pregunta sobre el entrenamiento.',
    },

    whatsapp: {
      greeting: 'Hola coach Ali 👋',
      intro: 'Me gustaría solicitar tu entrenamiento. Estos son mis datos:',
      labels: {
        fullName: 'Nombre',
        age: 'Edad',
        gender: 'Sexo',
        country: 'País / Ciudad',
        height: 'Altura',
        weight: 'Peso',
        program: 'Programa',
        goal: 'Objetivo principal',
        experience: 'Experiencia',
        trainingDays: 'Días de entrenamiento / semana',
        injuries: 'Lesiones / notas de salud',
        message: 'Mensaje',
      },
    },
  },
}
