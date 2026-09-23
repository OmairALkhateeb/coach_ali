# Ali Afaghani — IFBB Pro Coaching

React + Vite + Tailwind CSS v4 landing page with a WhatsApp coaching application form (frontend only, no backend).
Bilingual — **Arabic (RTL, default)** and **English** — with a language switch in the navbar. Font: Cairo (+ Anton for English headings).

## Run

```bash
npm install
npm run dev      # local dev server
npm run build    # production build → dist/
```

## Customize

All content lives in `src/data/` — no component changes needed.
Text fields are written as `{ en: '…', ar: '…' }`.

| What | File |
| --- | --- |
| WhatsApp number, Instagram, name, tagline | `src/data/site.js` |
| Competition titles & next event | `src/data/achievements.js` |
| Coaching programs | `src/data/services.js` |
| Client results gallery | `src/data/transformations.js` |
| Form options (goals, levels…) | `src/data/applicationForm.js` |
| Interface text (buttons, labels, headings) | `src/i18n/ui.js` |
| Default language | `DEFAULT_LANGUAGE` in `src/i18n/config.js` (+ the inline script in `index.html`) |
| Colors, fonts, animations | `@theme` block in `src/index.css` |

Images go in `public/images/` and are referenced as `/images/<file>`.
Original source photos are kept in `_source/`.

> The WhatsApp number is set in `site.whatsappNumber` (digits only, international format, e.g. `963937762872`).

## Structure

```
src/
  components/
    layout/    Navbar, Footer
    sections/  Hero, TitleMarquee, About, Achievements, Services, Transformations, Apply
    ui/        Button, Icon, LanguageSwitch, SectionHeading, AchievementCard, ServiceCard,
               TransformationCard, BeforeAfterSlider, Lightbox
    form/      ApplicationForm, FormField
  i18n/        LanguageProvider, useLanguage, ui (translations), config
  hooks/       useApplicationForm, useReveal, useScrolled, useTransformationText
  utils/       whatsapp (message + URL builder), validation
  data/        all editable content
```
