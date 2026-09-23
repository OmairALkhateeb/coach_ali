import { useEffect, useState } from 'react'
import { navLinks, site } from '../../data/site'
import { useScrolled } from '../../hooks/useScrolled'
import { useLanguage } from '../../i18n/useLanguage'
import Icon from '../ui/Icon'
import LanguageSwitch from '../ui/LanguageSwitch'

function Logo() {
  const { t, pick } = useLanguage()
  const name = pick(site.name)

  return (
    <a href="#top" className="group flex items-center gap-3" aria-label={`${name} — ${t('nav.home')}`}>
      <span className="grid size-10 shrink-0 place-items-center rounded-full border border-gold-400/40 font-display text-lg text-gold-300 transition group-hover:bg-gold-400 group-hover:text-ink-950">
        <span lang="en">AA</span>
      </span>
      <span className="leading-none">
        <span className="block font-display text-lg uppercase tracking-[0.12em] text-bone">{name}</span>
        <span className="block text-[10px] font-semibold uppercase tracking-[0.3em] text-gold-400">{t('nav.tagline')}</span>
      </span>
    </a>
  )
}

export default function Navbar() {
  const scrolled = useScrolled()
  const [open, setOpen] = useState(false)
  const { t, pick } = useLanguage()

  // Lock scroll + close on Escape while the mobile menu is open.
  useEffect(() => {
    if (!open) return
    const onKey = (e) => e.key === 'Escape' && setOpen(false)
    document.body.style.overflow = 'hidden'
    document.addEventListener('keydown', onKey)
    return () => {
      document.body.style.overflow = ''
      document.removeEventListener('keydown', onKey)
    }
  }, [open])

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-500 ${
        scrolled || open ? 'border-b border-gold-400/10 bg-ink-950/85 py-3 backdrop-blur-xl' : 'py-5'
      }`}
    >
      <nav className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-5 sm:px-8" aria-label="Main">
        <Logo />

        <ul className="hidden items-center gap-9 lg:flex">
          {navLinks.map(({ label, href }) => (
            <li key={href}>
              <a
                href={href}
                className="relative text-xs font-semibold uppercase tracking-[0.2em] text-bone/75 transition hover:text-gold-300 after:absolute after:-bottom-1.5 after:start-0 after:h-px after:w-0 after:bg-gold-400 after:transition-all after:duration-300 hover:after:w-full"
              >
                {pick(label)}
              </a>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2 sm:gap-3">
          <LanguageSwitch />
          <a
            href={site.instagram.url}
            target="_blank"
            rel="noreferrer"
            aria-label="Instagram"
            className="hidden size-10 place-items-center rounded-full border border-ink-700 text-bone/80 transition hover:border-gold-400 hover:text-gold-300 sm:grid"
          >
            <Icon name="instagram" className="size-[18px]" />
          </a>
          <a
            href="#apply"
            className="hidden rounded-full bg-gold-gradient px-5 py-2.5 text-xs font-bold uppercase tracking-[0.16em] text-ink-950 transition hover:brightness-110 sm:inline-flex"
          >
            {t('nav.startNow')}
          </a>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? t('nav.closeMenu') : t('nav.openMenu')}
            className="grid size-10 place-items-center rounded-full border border-ink-700 text-gold-200 lg:hidden"
          >
            <Icon name={open ? 'close' : 'menu'} className="size-5 rtl:-scale-x-100" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <div
        id="mobile-menu"
        className={`overflow-hidden transition-[max-height,opacity] duration-500 lg:hidden ${
          open ? 'max-h-[100svh] opacity-100' : 'max-h-0 opacity-0'
        }`}
      >
        <ul className="flex h-[calc(100svh-4rem)] flex-col gap-1 px-5 pb-10 pt-8 sm:px-8">
          {navLinks.map(({ label, href }, i) => (
            <li key={href}>
              <a
                href={href}
                onClick={() => setOpen(false)}
                className="flex items-baseline gap-4 border-b border-ink-800 py-4 font-display text-4xl uppercase tracking-wide text-bone transition hover:text-gold-300"
              >
                <span className="font-sans text-xs font-semibold text-gold-500">0{i + 1}</span>
                {pick(label)}
              </a>
            </li>
          ))}
          <li className="mt-auto">
            <a
              href={site.instagram.url}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-3 text-sm text-muted"
            >
              <Icon name="instagram" className="size-5 text-gold-400" />
              <span dir="ltr">@{site.instagram.handle}</span>
            </a>
          </li>
        </ul>
      </div>
    </header>
  )
}
