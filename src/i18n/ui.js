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
      switchLanguage: 'التبديل إلى العربية',
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
      title: 'From the stage',
      highlight: 'to your plan',
      paragraphs: [
        'I’m Ali Afaghani, an IFBB Pro Card Elite athlete in Men’s Physique, training out of T-GYM Barada. I’ve stood on podiums in Lebanon, Jordan and Syria — and I’m now preparing to represent the Syrian national team at the World Championship in Spain.',
        'Everything I teach, I’ve lived: the discipline, the diet, the peak week. My coaching gives you that same structure — clear, personal, and built to get you results you can see.',
      ],
      imageAlt: 'Ali Afaghani on the podium with trophy and gold medal',
      badgeValue: '1st',
      badgeLabel: 'Men’s Physique +182',
      pillars: [
        { title: 'Competes at pro level', text: 'Coaching tested on my own body, every season.' },
        { title: 'Science-based nutrition', text: 'Flexible plans built around real, local food.' },
        { title: 'Accountability', text: 'Weekly check-ins and direct support on WhatsApp.' },
      ],
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
      switchLanguage: 'Switch to English',
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
      title: 'من المسرح',
      highlight: 'إلى خطتك',
      paragraphs: [
        'أنا علي الأفغاني، لاعب محترف حاصل على بطاقة IFBB Pro Elite في فئة فيزيك رجال، وأتدرب في T-GYM بردى. وقفت على منصات التتويج في لبنان والأردن وسوريا، وأستعد الآن لتمثيل المنتخب السوري في بطولة العالم بإسبانيا.',
        'كل ما أعلّمه عشته بنفسي: الانضباط، والنظام الغذائي، وأسبوع الذروة. تدريبي يمنحك نفس الهيكلية — واضحة وشخصية ومصممة لتحقق نتائج تراها بعينك.',
      ],
      imageAlt: 'علي الأفغاني على منصة التتويج مع الكأس والميدالية الذهبية',
      badgeValue: 'المركز الأول',
      badgeLabel: 'فيزيك رجال +182',
      pillars: [
        { title: 'ينافس على مستوى المحترفين', text: 'أسلوب تدريب مجرَّب على جسمي في كل موسم.' },
        { title: 'تغذية مبنية على العلم', text: 'خطط مرنة مبنية على أكل حقيقي ومتوفر.' },
        { title: 'متابعة والتزام', text: 'متابعة أسبوعية ودعم مباشر عبر واتساب.' },
      ],
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
}
