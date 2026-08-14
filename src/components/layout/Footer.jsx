import { Link } from 'react-router-dom'
import { Mail, Phone, MapPin } from 'lucide-react'
import { navLinks } from '../../data/navigation'
import { services } from '../../data/services'
import { contactInfo } from '../../data/company'
import GrowthRings from '../ui/GrowthRings'
import { useTranslation } from 'react-i18next'
import logo from '../../assets/prynia_light.png'

/**
 * Footer — the standard four-column pattern (logo/tagline,
 * navigation, services, contact), closed with a copyright line and
 * a small GrowthRings emblem as the site's recurring signature.
 */
export default function Footer() {
  const { t } = useTranslation()
  const year = new Date().getFullYear()

  return (
    <footer className="border-t border-ink/10 bg-ink text-paper">
      <div className="container-prynia grid grid-cols-1 gap-12 py-16 md:grid-cols-4 md:py-20">
        <div className="md:col-span-1">
          <Link to="/" className="flex items-center gap-2">
            <img src={logo} alt="Prynia Partners" className="block h-28 w-auto object-contain" />
          </Link>
          <p className="mt-7 text-sm text-paper/60 leading-relaxed">
            {t('footer.tagline')}
          </p>
        </div>

        <div>
          <h3 className="eyebrow mb-5 text-paper/50">{t('footer.navigation')}</h3>
          <ul className="flex flex-col gap-3">
            {navLinks.map((link) => (
              <li key={link.path}>
                <Link
                  to={link.path}
                  className="text-sm text-paper/80 hover:text-gold-soft transition-colors"
                >
                  {t(`nav.${link.key}`)}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5 text-paper/50">{t('footer.services')}</h3>
          <ul className="flex flex-col gap-3">
            {services.map((service, i) => (
              <li key={service.slug}>
                <Link to="/contact" className="text-sm text-paper/80 hover:text-gold-soft transition-colors">
                {t('services.list', { returnObjects: true })[i].title}
                </Link>
                </li>
              ))}
          </ul>
        </div>

        <div>
          <h3 className="eyebrow mb-5 text-paper/50">{t('footer.contact')}</h3>          <ul className="flex flex-col gap-3 text-sm text-paper/80">
            <li className="flex items-center gap-2">
              <Mail size={15} strokeWidth={1.5} aria-hidden="true" />
              <a href={`mailto:${contactInfo.email}`} className="hover:text-gold-soft transition-colors">
                {contactInfo.email}
              </a>
            </li>
            <li className="flex items-center gap-2">
              <Phone size={15} strokeWidth={1.5} aria-hidden="true" />
              <span>{contactInfo.phone}</span>
            </li>
            <li className="flex items-center gap-2">
              <MapPin size={15} strokeWidth={1.5} aria-hidden="true" />
              <span>{contactInfo.address}</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="border-t border-paper/10">
        <div className="container-prynia flex flex-col items-center justify-between gap-4 py-6 md:flex-row">
          <p className="font-mono text-xs text-paper/50">
          <bdi>{year}</bdi> Prynia Partners. {t('footer.copyright')}
          </p>
          <GrowthRings className="h-8 w-8 text-paper/40" variant="quarter" strokeWidth={1} />
        </div>
      </div>
    </footer>
  )
}