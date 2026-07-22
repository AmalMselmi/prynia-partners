import Hero from '../components/sections/Hero'
import AboutPreview from '../components/sections/AboutPreview'
import ServicesPreview from '../components/sections/ServicesPreview'
import WhyChoose from '../components/sections/WhyChoose'
import CTASection from '../components/sections/CTASection'
import GrowthStats from '../components/sections/GrowthStats'
import Testimonials from '../components/sections/Testimonials'

export default function Home() {
  return (
    <>
      <Hero />
      <AboutPreview />
      <ServicesPreview />
      <GrowthStats />
      <WhyChoose />
      <Testimonials />
      <CTASection />
    </>
  )
}
