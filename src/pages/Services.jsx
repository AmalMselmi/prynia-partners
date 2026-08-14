import { useTranslation } from 'react-i18next'
import PageBanner from '../components/ui/PageBanner'
import ServiceCard from '../components/ui/ServiceCard'
import { services } from '../data/services'

export default function Services() {
  const { t } = useTranslation()
  const translatedList = t('services.list', { returnObjects: true })

  return (
    <>
      <PageBanner
        eyebrow={t('services.eyebrow')}
        title={t('services.title')}
        description={t('services.description', { returnObjects: true })}
      />

      <section className="bg-paper py-24 md:py-32">
        <div className="container-prynia grid grid-cols-1 gap-6 md:grid-cols-3">
          {services.map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={service}
              title={translatedList[i].title}
              description={translatedList[i].description}
              items={translatedList[i].items}
              ctaLabel={translatedList[i].ctaLabel}
              index={i}
            />
          ))}
        </div>
      </section>

    </>
  )
}