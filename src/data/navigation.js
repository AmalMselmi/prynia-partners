/**
 * Central navigation config. Both the desktop Navbar and the
 * MobileMenu read from this single source. `key` maps to a
 * translation key under `nav.` in the locale files — the actual
 * label text now comes from i18next, not from here.
 */
export const navLinks = [
  { key: 'home', path: '/' },
  { key: 'services', path: '/services' },
  { key: 'contact', path: '/contact' },
]