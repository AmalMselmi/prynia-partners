import Hero from '../components/sections/Hero'
import WhyChoose from '../components/sections/WhyChoose'
import MeetTheTeam from '../components/sections/MeetTheTeam'
import CTASection from '../components/sections/CTASection'
import GrowthStats from '../components/sections/GrowthStats'
import GalleryCarousel from '../components/sections/GalleryCarousel'
import { useTranslation } from 'react-i18next'

export default function Home() {

  const { t } = useTranslation()
  return (
    <>
    <Hero />
    <GalleryCarousel />
    <WhyChoose />
    <GrowthStats />
    <MeetTheTeam />
    <CTASection/>
    </>
  )
}
