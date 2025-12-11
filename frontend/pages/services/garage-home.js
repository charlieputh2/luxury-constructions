import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaArrowRight } from 'react-icons/fa'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function GarageHomePage() {
  const router = useRouter()
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()

  const services = [
    {
      title: 'Garage Builders',
      description: 'As trusted garage builders in Salt Lake City, UT, we design and construct garages that match your property\'s needs, whether single, double, or custom layouts. Strong materials, clean execution, and dependable craftsmanship from start to finish.',
      image: '/garage-builder.jpg',
      alt: 'Garage Builders - Professional Garage Construction',
      link: '/services/garage-builders',
      color: 'from-blue-500 to-blue-600',
    },
    {
      title: 'Home Remodeling & Renovations',
      description: 'We deliver high-quality home remodeling and renovations in Salt Lake City, UT, helping you update, expand, or modernize your space. From layouts to finishes, we offer tailored solutions that improve comfort, function, and long-term value.',
      image: '/Home-Remodeling-Renovations.jpg',
      alt: 'Home Remodeling & Renovations - Professional Home Improvement',
      link: '/services/home-remodeling',
      color: 'from-green-500 to-green-600',
    },
    {
      title: 'Roofing & Siding',
      description: 'Protect and enhance your home with professional roofing and siding services in Salt Lake City, UT. We install durable, weather-resistant materials designed to withstand local climate conditions while improving curb appeal and long-term efficiency.',
      image: '/roofing-siding.jpg',
      alt: 'Roofing & Siding - Professional Home Protection',
      link: '/services/roofing-siding',
      color: 'from-orange-500 to-orange-600',
    },
  ]

  const handleCardClick = (link) => {
    router.push(link)
  }

  return (
    <>
      <Head>
        <title>Garage & Home Services in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Professional garage builders, home remodeling, roofing and siding services in Salt Lake City, UT. Custom designs and expert construction." />
        <meta name="keywords" content="garage builders, home remodeling, roofing, siding, salt lake city, utah, home construction, home improvement" />
        <meta property="og:title" content="Garage & Home Services in Salt Lake City, UT" />
        <meta property="og:description" content="Professional garage builders, home remodeling, roofing and siding services in Salt Lake City, UT." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 transition-all duration-1200 ease-out">
            Our Garage & Home Services
          </h1>
          <p className="text-lg md:text-xl text-primary-100 transition-all duration-1200 ease-out">
            Professional solutions for all your home construction needs
          </p>
        </div>
      </section>

      {/* Services Grid Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className={`grid md:grid-cols-3 gap-8 transform transition-all duration-1200 ease-out ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`} ref={sectionRef}>
            {services.map((service, idx) => (
              <div
                key={idx}
                onClick={() => handleCardClick(service.link)}
                className={`group rounded-xl bg-white border-2 border-gray-200 hover:border-accent-gold shadow-lg hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 overflow-hidden cursor-pointer transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleCardClick(service.link)
                  }
                }}
              >
                {/* Image Section */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-gray-200">
                  <img
                    src={service.image}
                    alt={service.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-t ${service.color} opacity-0 group-hover:opacity-40 transition-opacity duration-500 ease-out`}></div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8">
                  <h3 className="mb-4 text-primary-700 font-bold text-lg md:text-xl transition-all duration-300 ease-out group-hover:text-accent-gold group-hover:translate-x-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base transition-all duration-300 ease-out group-hover:text-gray-700 mb-4">
                    {service.description}
                  </p>
                  
                  {/* Arrow Icon */}
                  <div className="flex items-center gap-2 text-accent-gold font-bold transition-all duration-300 ease-out group-hover:translate-x-2">
                    <span>Learn More</span>
                    <FaArrowRight className="text-lg transition-transform duration-300 ease-out group-hover:translate-x-1" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6 transition-all duration-300 hover:text-primary-600">
            Why Choose Luxury Construction
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            We're committed to delivering more than just construction services. We provide solutions built around your needs with precision, attention to detail, and transparency. Every project is handled with professionalism and reliability, ensuring your satisfaction from start to finish.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="p-6 bg-white rounded-xl border-2 border-primary-200 hover:border-accent-gold transition-all duration-300">
              <h3 className="text-lg font-bold text-primary-700 mb-2">Expert Craftsmanship</h3>
              <p className="text-gray-600 text-sm">High-quality materials and professional techniques for lasting results.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border-2 border-primary-200 hover:border-accent-gold transition-all duration-300">
              <h3 className="text-lg font-bold text-primary-700 mb-2">Custom Solutions</h3>
              <p className="text-gray-600 text-sm">Tailored designs that match your property, style, and functional needs.</p>
            </div>
            <div className="p-6 bg-white rounded-xl border-2 border-primary-200 hover:border-accent-gold transition-all duration-300">
              <h3 className="text-lg font-bold text-primary-700 mb-2">Reliable Service</h3>
              <p className="text-gray-600 text-sm">Clear communication, transparent pricing, and timely project completion.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Contact us today to discuss your garage, home remodeling, roofing, or siding needs. Our team is ready to provide expert solutions tailored to your property.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/estimate"
              className="inline-block px-8 py-4 bg-accent-gold text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Get Free Estimate
            </Link>
            <Link
              href="tel:(385)227-4522"
              className="inline-block px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Call Now
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
