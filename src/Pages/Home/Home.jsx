import React from 'react'
import Hero from '../../HomeCompontent/Hero/Hero'
import AboutSection from '../../HomeCompontent/AboutSection/AboutSection'
import ProductsSection from '../../HomeCompontent/ProductsSection/ProductsSection'
import DigitalDentistry from '../../HomeCompontent/DigitalDentistry/DigitalDentistry'
import WhyChooseSection from '../../HomeCompontent/WhyChooseSection/WhyChooseSection'
import HowWeWork from '../../HomeCompontent/HowWeWork/HowWeWork'
import FAQSection from '../../HomeCompontent/FAQSection/FAQSection'
import FinalCTA from '../../HomeCompontent/FinalCTA/FinalCTA'
import VideoShowcase from '../../HomeCompontent/VideoShowcase/VideoShowcase'

const Home = () => {
  return (
    <>
    <Hero/>
    <VideoShowcase/>
    <AboutSection/>
    <ProductsSection/>
    <DigitalDentistry/>
    <WhyChooseSection/>
    <HowWeWork/>
    <FAQSection/>
    <FinalCTA/>
    </>
  )
}

export default Home