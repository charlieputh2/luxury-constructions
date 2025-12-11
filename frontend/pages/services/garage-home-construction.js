import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaQuestionCircle } from 'react-icons/fa'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function GarageHomeConstructionPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()

  const services = [
    {
      title: 'Garage Builders',
      description: 'As trusted garage builders in Salt Lake City, UT, we design and construct garages that match your property\'s needs, whether single, double, or custom layouts. Strong materials, clean execution, and dependable craftsmanship from start to finish.',
      image: '/garage-builder.jpg',
    },
    {
      title: 'Home Remodeling & Renovations',
      description: 'We deliver high-quality home remodeling and renovations in Salt Lake City, UT, helping you update, expand, or modernize your space. From layouts to finishes, we offer tailored solutions that improve comfort, function, and long-term value.',
      image: '/Home-Remodeling-Renovations.jpg',
    },
    {
      title: 'Roofing & Siding',
      description: 'Protect and enhance your home with professional roofing and siding services in Salt Lake City, UT. We install durable, weather-resistant materials designed to withstand local climate conditions while improving curb appeal and long-term efficiency.',
      image: '/Roofing-Siding.jpg',
    },
  ]

  const whyChoose = [
    'Expert Craftsmanship: Our team brings years of experience in garage construction, home remodeling, roofing, and siding.',
    'Quality Materials: We use premium materials that withstand Salt Lake City\'s climate and provide long-lasting durability.',
    'Custom Solutions: Every project is tailored to your specific needs, budget, and vision.',
    'Professional Service: From consultation to completion, we maintain clear communication and exceptional service.',
  ]

  const benefits = [
    {
      title: 'Increase Property Value',
      description: 'Quality garage construction, home remodeling, and roofing upgrades significantly increase your property\'s market value and curb appeal.',
    },
    {
      title: 'Enhanced Functionality',
      description: 'Our projects improve your home\'s functionality, comfort, and usability, making your space work better for your lifestyle.',
    },
    {
      title: 'Long-Term Durability',
      description: 'Built with premium materials and expert installation, our work is designed to last for decades with minimal maintenance.',
    },
  ]

  const processSteps = [
    {
      title: 'Consultation & Planning',
      description: 'We meet with you to understand your vision, assess your property, and discuss your budget and timeline.',
    },
    {
      title: 'Design & Approval',
      description: 'Our team creates detailed designs and plans, which you review and approve before construction begins.',
    },
    {
      title: 'Professional Construction',
      description: 'Our skilled craftsmen execute the project with precision, quality materials, and attention to detail.',
    },
    {
      title: 'Final Inspection & Handoff',
      description: 'We perform a thorough inspection, make any final adjustments, and hand over your completed project.',
    },
  ]

  const faqs = [
    {
      question: 'How long does garage construction typically take?',
      answer: 'The timeline depends on the size and complexity of your garage. A standard single-car garage typically takes 2-4 weeks, while larger projects may take longer. We provide a detailed timeline during the consultation.',
    },
    {
      question: 'Can you help with home remodeling design?',
      answer: 'Absolutely! Our team works with you to create designs that match your vision and budget. We can help with everything from layout planning to material selection.',
    },
    {
      question: 'What roofing materials do you recommend?',
      answer: 'We recommend materials based on your climate, budget, and aesthetic preferences. Common options include asphalt shingles, metal roofing, and tile. We\'ll discuss the pros and cons of each.',
    },
    {
      question: 'Do you handle permits and inspections?',
      answer: 'Yes, we handle all necessary permits and coordinate with local inspectors to ensure your project meets all building codes and regulations.',
    },
    {
      question: 'What warranty do you provide?',
      answer: 'We stand behind our work with comprehensive warranties on materials and labor. Details are discussed during your consultation.',
    },
  ]

  return (
    <>
      <Head>
        <title>Garage & Home Construction in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Professional garage builders, home remodeling, roofing, and siding services in Salt Lake City, UT. Expert craftsmanship and quality materials." />
        <meta name="keywords" content="garage builders, home remodeling, renovations, roofing, siding, salt lake city, construction" />
        <meta property="og:title" content="Garage & Home Construction in Salt Lake City, UT" />
        <meta property="og:description" content="Professional garage, home remodeling, roofing, and siding services in Salt Lake City." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Garage & Home Construction Services
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 transition-all duration-1200 ease-out">
            Expert garage builders, home remodeling, roofing, and siding services in Salt Lake City, UT
          </p>
          <Link
            href="tel:(385)227-4522"
            className="inline-block px-8 py-4 bg-accent-gold text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Get Free Estimate
          </Link>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className={`transform transition-all duration-1200 ease-out ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`} ref={sectionRef}>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              At Luxury Construction, we specialize in comprehensive garage construction, home remodeling, roofing, and siding services designed to enhance your Salt Lake City property. Whether you\'re looking to add a new garage, modernize your home, or upgrade your roof and siding, our team delivers professional-grade solutions with exceptional craftsmanship.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              From custom garage designs to complete home renovations, we combine quality materials with proven installation techniques to create solutions that improve your property\'s value, functionality, and curb appeal.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className={`text-center mb-12 md:mb-16 transform transition-all duration-1200 ease-out ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600 hover:translate-x-1">
              Our Garage & Home Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto transition-all duration-300">
              Professional solutions for all your home construction needs
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl overflow-hidden border-2 border-primary-200 hover:border-accent-gold hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 group transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                {/* Service Image */}
                {service.image && (
                  <div className="h-48 overflow-hidden bg-gray-200 transition-transform duration-500 ease-out group-hover:scale-110 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}

                {/* Service Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-primary-700 mb-4 group-hover:text-accent-gold transition-all duration-300 group-hover:translate-x-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-all duration-300 group-hover:translate-x-0.5">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6 transition-all duration-300 hover:text-primary-600">
            Why Choose Our Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            We\'re committed to delivering more than just construction services. We provide solutions built around your needs with precision, attention to detail, and transparency.
          </p>

          <div className="space-y-4">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-br from-primary-50 to-white rounded-lg border-l-4 border-accent-gold transform transition-all duration-500 hover:translate-x-2">
                <FaCheckCircle className="text-accent-gold text-2xl flex-shrink-0 mt-1" />
                <p className="text-gray-600 text-base md:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 md:mb-16 text-center transition-all duration-300 hover:text-primary-600">
            The Advantages of Our Services
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-6 md:p-8 border-2 border-primary-200 hover:border-accent-gold hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-primary-700 mb-4 group-hover:text-accent-gold transition-all duration-300">
                  {benefit.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 md:mb-16 text-center transition-all duration-300 hover:text-primary-600">
            Our Construction Process
          </h2>

          <div className="space-y-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className={`flex gap-6 p-6 md:p-8 bg-gradient-to-r from-primary-50 to-white rounded-xl border-l-4 border-accent-gold hover:shadow-lg transition-all duration-500 transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent-gold text-primary-900 font-bold text-lg">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary-700 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 text-center transition-all duration-300 hover:text-primary-600">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-lg border-2 border-primary-200 hover:border-accent-gold transition-all duration-500 overflow-hidden transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-primary-50 transition-colors duration-300">
                    <h3 className="text-lg font-bold text-primary-700 flex items-center gap-3">
                      <FaQuestionCircle className="text-accent-gold" />
                      {faq.question}
                    </h3>
                    <FaArrowRight className="text-primary-700 group-open:rotate-90 transition-transform duration-300" />
                  </summary>
                  <p className="px-6 pb-6 text-gray-600 text-base leading-relaxed border-t-2 border-primary-100">
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Project?</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Contact us today for a free consultation and estimate
          </p>
          <Link
            href="tel:(385)227-4522"
            className="inline-block px-8 py-4 bg-accent-gold text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </>
  )
}
