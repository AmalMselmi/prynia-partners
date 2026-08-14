import { useState, useRef, useEffect } from 'react'
import { useTranslation } from 'react-i18next'
import { ChevronDown } from 'lucide-react'
import { US, FR, TN } from 'country-flag-icons/react/3x2'

const languages = [
  { code: 'en', label: 'EN', Flag: US },
  { code: 'fr', label: 'FR', Flag: FR },
  { code: 'ar', label: 'AR', Flag: TN },
]

/**
 * LanguageSwitcher — dropdown showing the current language's flag +
 * code, opening a menu of the other options on click. Updates
 * i18next's active language, persists the choice to localStorage,
 * and toggles document direction to RTL for Arabic.
 */
export default function LanguageSwitcher() {
  const { i18n } = useTranslation()
  const [open, setOpen] = useState(false)
  const menuRef = useRef(null)

  const current = languages.find((l) => l.code === i18n.language) || languages[0]

  const changeLanguage = (code) => {
    i18n.changeLanguage(code)
    localStorage.setItem('prynia-lang', code)
    document.documentElement.dir = code === 'ar' ? 'rtl' : 'ltr'
    document.documentElement.lang = code
    setOpen(false)
  }

  // Close the dropdown when clicking anywhere outside it.
  useEffect(() => {
    function handleClickOutside(e) {
      if (menuRef.current && !menuRef.current.contains(e.target)) {
        setOpen(false)
      }
    }
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [])

  return (
    <div className="relative" ref={menuRef}>
      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex items-center gap-1.5 px-2 py-1 text-sm text-ink/80 transition-colors hover:text-ink"
        aria-haspopup="listbox"
        aria-expanded={open}
      >
        <current.Flag className="h-3.5 w-5 rounded-[1px] object-cover" title={current.label} />        <span className="font-medium">{current.label}</span>
        <ChevronDown size={14} strokeWidth={2} className={`transition-transform ${open ? 'rotate-180' : ''}`} />
      </button>

      {open && (
        <ul
          role="listbox"
          className="absolute left-0 top-full z-50 mt-2 w-32 border border-ink/12 bg-paper shadow-sm"
        >
          {languages.map((lang) => (
            <li key={lang.code}>
              <button
                type="button"
                onClick={() => changeLanguage(lang.code)}
                className={`flex w-full items-center gap-2 px-3 py-2 text-left text-sm transition-colors hover:bg-ink/5 ${
                  lang.code === i18n.language ? 'text-gold font-semibold' : 'text-ink/80'
                }`}
                role="option"
                aria-selected={lang.code === i18n.language}
              >
                <lang.Flag className="h-3.5 w-5 rounded-[1px] object-cover" title={lang.label} />                
                <span>{lang.label}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}