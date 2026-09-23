/**
 * Minimal inline icon set (stroke icons, 24×24 grid).
 * Add a new icon by adding its path(s) to `paths`.
 */
const paths = {
  dumbbell: (
    <>
      <path d="M6.5 6.5v11M17.5 6.5v11M3.5 9v6M20.5 9v6M6.5 12h11" />
    </>
  ),
  trophy: (
    <>
      <path d="M8 21h8M12 17v4M7 4h10v5a5 5 0 0 1-10 0V4Z" />
      <path d="M17 5h3v2a3 3 0 0 1-3 3M7 5H4v2a3 3 0 0 0 3 3" />
    </>
  ),
  flame: (
    <path d="M12 22c4 0 7-2.7 7-6.8 0-3.4-2.2-5.6-3.6-7.3-.4 1.6-1.3 2.7-2.4 3.1.3-3.3-1.2-6.6-4-9-.2 3.2-1.7 5.2-3.2 7C4.6 10.5 5 12 5 15.2 5 19.3 8 22 12 22Z" />
  ),
  leaf: (
    <>
      <path d="M5 19c0-8 5-13 15-14-1 10-6 15-14 15" />
      <path d="M5 19 13 11" />
    </>
  ),
  check: <path d="m5 12.5 4.5 4.5L19 7.5" />,
  arrow: <path d="M5 12h14M13 6l6 6-6 6" />,
  arrowDown: <path d="M12 5v14M6 13l6 6 6-6" />,
  menu: <path d="M4 7h16M4 12h16M4 17h10" />,
  close: <path d="M6 6l12 12M18 6 6 18" />,
  instagram: (
    <>
      <rect x="3" y="3" width="18" height="18" rx="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.6" fill="currentColor" />
    </>
  ),
  whatsapp: (
    <>
      <path d="M3.5 20.5 5 16a8.5 8.5 0 1 1 3.2 3.1L3.5 20.5Z" />
      <path d="M9 8.5c0 3.5 3 6.5 6.5 6.5l1-1.6-2-1.2-1 .9c-1-.4-2.2-1.6-2.6-2.6l.9-1-1.2-2L9 8.5Z" />
    </>
  ),
  medal: (
    <>
      <circle cx="12" cy="15" r="6" />
      <path d="M8.5 10 6 3h4l2 5M15.5 10 18 3h-4l-1.2 3" />
    </>
  ),
  crown: <path d="M3 8l4.5 4L12 5l4.5 7L21 8l-2 11H5L3 8Z" />,
  pin: (
    <>
      <path d="M12 21s-7-6.2-7-11.5a7 7 0 0 1 14 0C19 14.8 12 21 12 21Z" />
      <circle cx="12" cy="9.5" r="2.5" />
    </>
  ),
  compare: <path d="M12 3v18M8 8l-4 4 4 4M16 8l4 4-4 4" />,
  globe: (
    <>
      <circle cx="12" cy="12" r="9" />
      <path d="M3 12h18M12 3c2.5 2.6 3.8 5.6 3.8 9s-1.3 6.4-3.8 9c-2.5-2.6-3.8-5.6-3.8-9S9.5 5.6 12 3Z" />
    </>
  ),
}

export default function Icon({ name, className = 'size-5', strokeWidth = 1.7, ...props }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
      className={className}
      {...props}
    >
      {paths[name]}
    </svg>
  )
}
