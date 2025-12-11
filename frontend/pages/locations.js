import Head from 'next/head'
import Link from 'next/link'
import { FaMapMarkerAlt, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function LocationsPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()

  const locations = [
    {
      area: 'Salt Lake City',
      description: 'Downtown and surrounding neighborhoods',
      neighborhoods: ['Downtown', 'Capitol Hill', 'Sugar House', 'The Avenues', 'Liberty Park'],
      services: ['Concrete Driveways', 'Garage Construction', 'Home Remodeling', 'Roofing & Siding', 'Landscaping', 'Sports Courts'],
    },
    {
      area: 'East Salt Lake City',
      description: 'Mountain foothills and residential areas',
      neighborhoods: ['Holladay', 'Millcreek', 'Cottonwood Heights', 'Sandy', 'Draper'],
      services: ['Concrete Driveways', 'Garage Construction', 'Home Remodeling', 'Roofing & Siding', 'Landscaping', 'Sports Courts'],
    },
    {
      area: 'West Salt Lake City',
      description: 'Suburban and commercial areas',
      neighborhoods: ['Taylorsville', 'Murray', 'Midvale', 'West Jordan', 'Riverton'],
      services: ['Concrete Driveways', 'Garage Construction', 'Home Remodeling', 'Roofing & Siding', 'Landscaping', 'Sports Courts'],
    },
    {
      area: 'North Salt Lake City',
      description: 'Northern suburbs and communities',
      neighborhoods: ['Bountiful', 'Farmington', 'Kaysville', 'Layton', 'North Salt Lake'],
      services: ['Concrete Driveways', 'Garage Construction', 'Home Remodeling', 'Roofing & Siding', 'Landscaping', 'Sports Courts'],
    },
    {
      area: 'South Salt Lake City',
      description: 'Southern suburbs and residential',
      neighborhoods: ['Provo', 'Orem', 'Lehi', 'American Fork', 'Spanish Fork'],
      services: ['Concrete Driveways', 'Garage Construction', 'Home Remodeling', 'Roofing & Siding', 'Landscaping', 'Sports Courts'],
    },
    {
      area: 'Wasatch Front',
      description: 'Mountain communities and resorts',
      neighborhoods: ['Park City', 'Ogden', 'Layton', 'Farmington', 'Bountiful'],
      services: ['Concrete Driveways', 'Garage Construction', 'Home Remodeling', 'Roofing & Siding', 'Landscaping', 'Sports Courts'],
    },
  ]

  const serviceAreas = [
    {
      title: 'Residential Services',
      description: 'We serve homeowners throughout Salt Lake County with professional construction and landscaping services.',
      icon: '🏠',
    },
    {
      title: 'Commercial Services',
      description: 'Our commercial expertise includes parking areas, hardscaping, and property improvements.',
      icon: '🏢',
    },
    {
      title: 'Community Projects',
      description: 'We work with schools, parks, and community facilities on sports courts and recreational spaces.',
      icon: '🏛️',
    },
  ]

  return (
    <>
      <Head>
        <title>Service Locations & Areas in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Luxury Construction serves Salt Lake City, UT and surrounding areas. Find our service locations and neighborhoods we serve." />
        <meta name="keywords" content="construction services, Salt Lake City, Utah, service areas, neighborhoods, Wasatch Front, residential, commercial" />
        <meta property="og:title" content="Service Locations & Areas in Salt Lake City, UT" />
        <meta property="og:description" content="Luxury Construction serves Salt Lake City, UT and surrounding areas with professional construction services." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Service Locations & Areas
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 transition-all duration-1200 ease-out">
            Professional construction services throughout Salt Lake City, UT and surrounding communities
          </p>
          <Link
            href="tel:(385)227-4522"
            className="inline-block px-8 py-4 bg-accent-gold text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Contact Us Today
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className={`transform transition-all duration-1200 ease-out ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`} ref={sectionRef}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">Serving Salt Lake City & Surrounding Areas</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Luxury Construction proudly serves homeowners, businesses, and communities throughout Salt Lake City, Utah and the greater Wasatch Front region. With years of experience and a commitment to quality, we bring professional construction services to your doorstep, no matter where you are in the area.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              From residential driveways and garage construction to commercial hardscaping and sports courts, our team is ready to transform your property with expert craftsmanship and attention to detail.
            </p>
          </div>
        </div>
      </section>

      {/* Service Types Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 text-center transition-all duration-300 hover:text-primary-600">
            Types of Services We Provide
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {serviceAreas.map((service, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-6 md:p-8 border-2 border-primary-200 hover:border-accent-gold hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="text-5xl mb-4">{service.icon}</div>
                <h3 className="text-xl md:text-2xl font-bold text-primary-700 mb-4 group-hover:text-accent-gold transition-all duration-300">
                  {service.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Locations Grid Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 text-center transition-all duration-300 hover:text-primary-600">
            Service Areas We Cover
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {locations.map((location, idx) => (
              <div
                key={idx}
                className={`bg-gradient-to-br from-white to-primary-50 rounded-xl p-6 md:p-8 border-2 border-primary-200 hover:border-accent-gold hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="flex items-center gap-3 mb-4">
                  <FaMapMarkerAlt className="text-accent-gold text-2xl" />
                  <h3 className="text-xl md:text-2xl font-bold text-primary-700">
                    {location.area}
                  </h3>
                </div>
                <p className="text-gray-600 text-sm md:text-base mb-4 italic">
                  {location.description}
                </p>

                <div className="mb-6">
                  <h4 className="font-bold text-primary-700 mb-3 text-sm">Neighborhoods:</h4>
                  <div className="flex flex-wrap gap-2">
                    {location.neighborhoods.map((neighborhood, nIdx) => (
                      <span
                        key={nIdx}
                        className="bg-accent-gold text-primary-900 text-xs font-semibold px-3 py-1 rounded-full hover:bg-primary-700 hover:text-white transition-all duration-300"
                      >
                        {neighborhood}
                      </span>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="font-bold text-primary-700 mb-3 text-sm">Services Available:</h4>
                  <ul className="space-y-2">
                    {location.services.map((service, sIdx) => (
                      <li key={sIdx} className="text-gray-600 text-sm flex items-center gap-2">
                        <span className="text-accent-gold">✓</span>
                        {service}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Information Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 text-center transition-all duration-300 hover:text-primary-600">
            Contact Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`bg-white rounded-xl p-6 md:p-8 border-2 border-primary-200 text-center transform transition-all duration-1200 ease-out ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
              <FaPhone className="text-accent-gold text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-700 mb-2">Phone</h3>
              <a href="tel:(385)227-4522" className="text-gray-600 hover:text-accent-gold transition-colors duration-300">
                (385) 227-4522
              </a>
            </div>

            <div className={`bg-white rounded-xl p-6 md:p-8 border-2 border-primary-200 text-center transform transition-all duration-1200 ease-out ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`} style={{ transitionDelay: '75ms' }}>
              <FaEnvelope className="text-accent-gold text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-700 mb-2">Email</h3>
              <a href="mailto:info@luxuryconstruction.com" className="text-gray-600 hover:text-accent-gold transition-colors duration-300">
                info@luxuryconstruction.com
              </a>
            </div>

            <div className={`bg-white rounded-xl p-6 md:p-8 border-2 border-primary-200 text-center transform transition-all duration-1200 ease-out ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`} style={{ transitionDelay: '150ms' }}>
              <FaClock className="text-accent-gold text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-700 mb-2">Hours</h3>
              <p className="text-gray-600">
                Monday - Friday<br />
                8:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Service Coverage Map Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6 text-center transition-all duration-300 hover:text-primary-600">
            Why Choose Luxury Construction for Your Area?
          </h2>

          <div className="space-y-6">
            {[
              {
                title: 'Local Expertise',
                desc: 'We know Salt Lake City\'s climate, soil conditions, and building codes inside and out.',
              },
              {
                title: 'Quick Response Times',
                desc: 'Being local means we can respond quickly to consultations and emergency repairs.',
              },
              {
                title: 'Community Commitment',
                desc: 'We\'re invested in the communities we serve and take pride in our local reputation.',
              },
              {
                title: 'Familiar with Local Regulations',
                desc: 'We handle all permits and inspections for your specific neighborhood and county.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-6 p-6 md:p-8 bg-gradient-to-r from-primary-50 to-white rounded-xl border-l-4 border-accent-gold transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent-gold text-primary-900 font-bold">
                    ✓
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started in Your Area?</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Contact us today for a free consultation and estimate. We serve all of Salt Lake City and surrounding areas.
          </p>
          <Link
            href="tel:(385)227-4522"
            className="inline-block px-8 py-4 bg-accent-gold text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Call Us Now
          </Link>
        </div>
      </section>
    </>
  )
}
