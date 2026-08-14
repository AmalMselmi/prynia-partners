import { useEffect, useState } from 'react'
import { NavLink } from 'react-router-dom'
import { Menu } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { cn } from '../../utils/cn'
import Button from '../ui/Button'
import MobileMenu from './MobileMenu'
import { useTranslation } from 'react-i18next'
import LanguageSwitcher from '../ui/LanguageSwitcher'
import logo from '../../assets/prynia_logo.png'

/**
 * Navbar — sticky, transparent-over-hero on the home page, and
 * solid paper background everywhere/after scrolling, so text stays
 * legible over both the dark hero and lighter interior banners.
 */
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [mobileOpen, setMobileOpen] = useState(false)
  const { t } = useTranslation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open.
  useEffect(() => {
    document.body.style.overflow = mobileOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-40 w-full transition-colors duration-300',
        scrolled
          ? 'bg-paper/95 backdrop-blur-sm border-b border-ink/10'
          : 'bg-transparent'
      )}
    >
<nav className="container-prynia flex h-16 items-center justify-between md:h-20">
  <NavLink to="/" className="flex items-center">
    <img
      src={logo}
      alt="Prynia Partners"
      className="block h-14 w-auto object-contain md:h-16 md:-translate-y-1"
/>
  </NavLink>
  <ul className="hidden items-center gap-10 md:flex">
    {navLinks.map((link) => (
            <li key={link.path}>
              <NavLink
                to={link.path}
                end={link.path === '/'}
                className={({ isActive }) =>
                  cn(
                    'font-body text-base tracking-wide transition-colors rtl:text-lg',
                    isActive ? 'text-gold' : 'text-ink/80 hover:text-ink'
                  )
                }
              >
                {t(`nav.${link.key}`)}              
                </NavLink>
            </li>
          ))}
        </ul>
        
        <div className="hidden items-center gap-6 md:flex">
          <LanguageSwitcher />
          
          </div>

        <div className="flex items-center gap-3 md:hidden">
          <LanguageSwitcher />
          <button
            type="button"
            onClick={() => setMobileOpen(true)}
            className="flex h-10 w-10 items-center justify-center text-ink"
            aria-label="Open menu"
            aria-expanded={mobileOpen}
          >
            <Menu size={26} strokeWidth={1.5} />
          </button>
        </div>
      </nav>

      <MobileMenu open={mobileOpen} onClose={() => setMobileOpen(false)} />
    </header>
  )
}
