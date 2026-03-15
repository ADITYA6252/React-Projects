import React from 'react'
import Hero from '../components/Hero'
import Services from './Services'
import WhyChooseUs from '../components/WhyChooseUs'
import AboutSection from '../components/AboutSection'
import PricingSection from '../components/PricingSection'
import LocationSection from '../components/LocationSection'
import MemberSaying from '../components/MemberSaying'
import FAQSection from '../components/FAQSection'
import SubscribeFooter from '../components/UltraModernFooter'

const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <WhyChooseUs/>
      <AboutSection />
      <PricingSection />
      <LocationSection />
      <MemberSaying />
      <FAQSection />
      <SubscribeFooter />
    </div>
  )
}

export default Home
