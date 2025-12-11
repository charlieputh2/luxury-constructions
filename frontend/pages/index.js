import { NextSeo } from 'next-seo'
import Hero from '../components/Hero'
import WhyUs from '../components/WhyUs'
import Services from '../components/Services'
import ImageCarousel from '../components/ImageCarousel'
import PoolCarousel from '../components/PoolCarousel'
import Benefits from '../components/Benefits'
import ContactForm from '../components/ContactForm'
import Map from '../components/Map'
import FAQ from '../components/FAQ'
import Testimonials from '../components/Testimonials'
import CTA from '../components/CTA'

export default function Home() {
  return (
    <>
      <NextSeo
        title="Concrete Contractors in Salt Lake City, UT"
        description="Expert concrete contractors in Salt Lake City, UT. Driveways, patios, foundations, heated systems & more. Trusted local service with guaranteed quality."
        canonical="https://luxuryconstruction.com"
        openGraph={{
          url: 'https://luxuryconstruction.com',
          title: 'Luxury Construction - Premier Concrete Contractors in Salt Lake City, UT',
          description: 'Expert concrete contractors in Salt Lake City, UT. Driveways, patios, foundations, heated systems & more. Trusted local service with guaranteed quality.',
          images: [
            {
              url: 'https://res.cloudinary.com/dtr1tnutd/image/upload/v1765250127/logo_zo8ea0.png',
              width: 1200,
              height: 630,
              alt: 'Luxury Construction Logo',
            },
          ],
        }}
      />
      <Hero />
      <WhyUs />
      <Services />
      <ImageCarousel />
      <PoolCarousel />
      <Benefits />
      <ContactForm />
      <Map />
      <FAQ />
      <Testimonials />
      <CTA />
    </>
  )
}
