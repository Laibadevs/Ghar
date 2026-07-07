import Hero from '../components/Hero/Hero'
import Listings from '../components/Listings/Listings'
import WhyGhar from '../components/WhyGhar/WhyGhar'
import HowItWorks from '../components/HowItWorks/HowItWorks'
import Testimonials from '../components/Testimonials/Testimonials'
import ForLandlords from '../components/ForLandlords/ForLandlords'
import AboutUs from '../components/AboutUs/AboutUs'
import Mission from '../components/Mission/Mission'
import FAQ from '../components/FAQ/FAQ'
import CTA from '../components/CTA/CTA'
import Footer from '../components/Footer/Footer'
import ParentMode from '../components/ParentMode/ParentMode'


export default function Home() {
  return (
    <main className="w-full overflow-x-hidden">
      <Hero />
      <Listings />
      <WhyGhar />
      <HowItWorks />
      <ParentMode/>
      <ForLandlords />
      <Testimonials />
      <AboutUs />
      <Mission />
      <FAQ />
      <CTA />
      <Footer />
    </main>
  )
}