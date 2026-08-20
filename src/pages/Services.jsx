import { useTranslation } from 'react-i18next'
import PageBanner from '../components/ui/PageBanner'
import ServiceCard from '../components/ui/ServiceCard'
import { services } from '../data/services'
import { serviceVideos } from '../data/serviceVideos'

export default function Services() {
  const { t } = useTranslation()
  const translatedList = t('services.list', { returnObjects: true })

  return (
    <>
      <PageBanner
        eyebrow={t('services.eyebrow')}
        description={t('services.description', { returnObjects: true })}
        align="center"
      />

      <section className="bg-paper py-10 md:py-16">
        <div className="mx-auto grid max-w-8xl grid-cols-1 gap-6 px-6 md:grid-cols-3 lg:grid-cols-[1fr_1.1fr_1fr] lg:items-start lg:gap-6 lg:px-8">
          {services.map((service, i) => (
            <ServiceCard
              key={service.slug}
              service={service}
              title={translatedList[i].title}
              description={translatedList[i].description}
              items={translatedList[i].items}
              ctaLabel={translatedList[i].ctaLabel}
              videoSrc={serviceVideos[i]}
              index={i}
            />
          ))}
        </div>
      </section>

    </>
  )
}