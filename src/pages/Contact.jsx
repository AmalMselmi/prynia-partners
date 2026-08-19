import PageBanner from '../components/ui/PageBanner'
import ContactForm from '../components/forms/ContactForm'
import DiscoveryCallForm from '../components/forms/DiscoveryCallForm'
import { useTranslation } from 'react-i18next'

export default function Contact() {
  const { t } = useTranslation()

  return (
    <>
      <PageBanner
        eyebrow={t('contact.eyebrow')}
        title={t('contact.title')}
        description={t('contact.description')}
      />

      <section className="bg-paper py-14 md:py-16">
        <div className="container-prynia grid grid-cols-1 gap-16 md:grid-cols-12">
          <div className="md:col-span-7">
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="bg-paper-dim/60 py-14 md:py-16">
        <div className="container-prynia max-w-2xl">
          <h2 className="font-display text-3xl text-ink">{t('contact.discoveryCall.heading')}</h2>
          <p className="mt-3 text-slate leading-relaxed">
            {t('contact.discoveryCall.description')}
            
          </p>
          <div className="mt-10 flex flex-col gap-6">
            <DiscoveryCallForm />
            </div>
        </div>
        
      </section>
    </>
  )
}