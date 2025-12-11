import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaQuestionCircle } from 'react-icons/fa'
import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function ConcreteServicesPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [expandedFaq, setExpandedFaq] = useState(null)

  const concreteServices = [
    {
      title: 'Concrete Driveways',
      description: 'Upgrade your property with durable, long-lasting concrete driveways in Salt Lake City, UT. We design and build custom driveways that handle tough weather, enhance curb appeal, and provide years of reliable performance. Quality materials and expert craftsmanship guaranteed.',
      href: '/services/concrete-driveways',
      image: '/concrete_driveways.jpg',
    },
    {
      title: 'Heated Driveway Systems',
      description: 'Our heated driveway systems in Salt Lake City, UT keep your property safe and snow-free all winter. We install efficient, long-lasting solutions that melt ice automatically, reduce shoveling, and protect your concrete for years. Perfect for homes and businesses.',
      href: '/services/heated-driveways',
      image: '/heated-driveways.jpg',
    },
    {
      title: 'Sidewalks & Walkways',
      description: 'We build strong, beautiful sidewalks and walkways in Salt Lake City, UT designed for daily use and long-term durability. Whether you need a clean, modern path or a customized walkway, we deliver safe, functional, and attractive concrete work built to last.',
      href: '/services/sidewalks',
      image: '/sidewalk.jpg',
    },
    {
      title: 'Concrete Foundations',
      description: 'Get reliable concrete foundations in Salt Lake City, UT engineered for strength, stability, and long-term performance. From new homes to commercial builds, we deliver high-quality foundation work that ensures your structure stands solid for decades.',
      href: '/services/foundations',
      image: '/concrete_foundation.jpg',
    },
    {
      title: 'Walkout Basements',
      description: 'Create more usable space with custom walkout basements in Salt Lake City, UT. We design and build strong, code-compliant basement exits that improve convenience, accessibility, and property value. Tailored to your layout and long-term goals.',
      href: '/services/walkout-basements',
      image: '/walkoutbasement.jpg',
    },
    {
      title: 'Decorative Concrete',
      description: 'Transform ordinary spaces with decorative concrete in Salt Lake City, UT. We offer custom finishes, colors, textures, and designs to create stunning patios, walkways, and outdoor features that match your style. Beautiful, durable, and built to last.',
      href: '/services/decorative-concrete',
      image: '/decorative.jpg',
    },
    {
      title: 'Stamped Concrete',
      description: 'Enhance your property with stamped concrete in Salt Lake City, UT. We offer custom patterns, textures, and colors that mimic stone, brick, or wood, giving your driveway, patio, or walkway a premium look without the high cost.',
      href: '/services/stamped-concrete',
      image: '/stamped.jpg',
    },
    {
      title: 'Retaining Walls',
      description: 'Our retaining walls in Salt Lake City, UT are built for strength, stability, and visual appeal. We design functional retaining systems that manage slopes, prevent erosion, and upgrade your landscape with clean, long-lasting construction.',
      href: '/services/retaining-walls',
      image: '/retaining-wall.jpg',
    },
  ]

  const benefits = [
    'Durable and long-lasting concrete solutions',
    'Professional installation and expert craftsmanship',
    'Customized designs tailored to your needs',
    'Competitive pricing without compromising quality',
    'Minimal maintenance required',
    'Enhanced property value and curb appeal',
  ]

  const faqs = [
    {
      question: 'How long does a concrete driveway last?',
      answer: 'With proper installation and maintenance, a concrete driveway can last 30-40 years or more. Our professional installation ensures maximum longevity and durability.',
    },
    {
      question: 'What is the cost of a concrete driveway?',
      answer: 'The cost varies based on size, design complexity, and location. We provide free estimates tailored to your specific project. Contact us for a detailed quote.',
    },
    {
      question: 'Can concrete driveways handle Salt Lake City winters?',
      answer: 'Yes! We use high-quality materials and proven techniques specifically designed to withstand Utah\'s harsh winters, including freeze-thaw cycles.',
    },
    {
      question: 'Do you offer heated driveway systems?',
      answer: 'Absolutely! Our heated driveway systems keep your driveway clear of snow and ice automatically, providing convenience and safety year-round.',
    },
    {
      question: 'How long does installation take?',
      answer: 'Most residential driveways take 3-7 days from start to finish, including site preparation, pouring, finishing, and proper curing time.',
    },
  ]

  return (
    <>
      <Head>
        <title>Concrete Services in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Professional concrete services in Salt Lake City, UT. Driveways, heated systems, sidewalks, foundations, and more. Free estimates available." />
        <meta name="keywords" content="concrete services, driveways, sidewalks, foundations, heated driveways, salt lake city, contractors" />
        <meta property="og:title" content="Concrete Services in Salt Lake City, UT" />
        <meta property="og:description" content="Professional concrete services including driveways, sidewalks, foundations, and heated driveway systems." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-700 via-primary-600 to-primary-50 py-8 sm:py-12 md:py-20 lg:py-24">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
            <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-white mb-2 sm:mb-3 md:mb-4 drop-shadow-lg transition-all duration-1000">
              <span className="block text-accent-gold mb-2 sm:mb-3 text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold">Luxury Construction</span>
              <span className="block">Your General Contractor for</span>
              <span className="block text-accent-gold">All</span>
              <span className="block">Your Construction Needs</span>
            </h1>
            <a
              href="tel:(385)227-4522"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 ease-out transform hover:scale-110 active:scale-95"
            >
              <span>Get Free Estimate</span>
              <FaArrowRight className="text-sm" />
            </a>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className={`transform transition-all duration-1200 ease-out ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`} ref={sectionRef}>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              At Luxury Construction, we specialize in comprehensive concrete services designed to meet the unique needs of Salt Lake City property owners. Whether you're looking to enhance your residential property or develop a commercial space, our team delivers professional-grade concrete solutions with exceptional craftsmanship.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              From durable driveways that withstand harsh winters to innovative heated driveway systems, we combine quality materials with proven installation techniques to create concrete solutions that last for decades.
            </p>
          </div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className={`transform transition-all duration-1200 ease-out mb-12 md:mb-16 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 text-center transition-all duration-300 hover:text-primary-600">
              Our Concrete Services
            </h2>
            <p className="text-center text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive concrete solutions tailored to your residential or commercial needs
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {concreteServices.map((service, idx) => (
              <Link
                key={idx}
                href={service.href}
                className={`bg-white rounded-xl p-4 sm:p-6 md:p-8 border-2 border-primary-200 hover:border-accent-gold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group overflow-hidden relative flex flex-col h-full ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                {/* Service Image */}
                {service.image && (
                  <div className="mb-3 sm:mb-4 h-32 sm:h-40 rounded-lg overflow-hidden bg-gray-200 transition-transform duration-500 ease-out group-hover:scale-110">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out"
                    />
                  </div>
                )}

                {/* Animated background gradient */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                
                <div className="relative z-10 flex flex-col flex-grow">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary-700 mb-2 sm:mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-700 transition-colors duration-300 line-clamp-3 sm:line-clamp-4 flex-grow">
                    {service.description}
                  </p>
                  <div className="flex items-center gap-2 text-accent-gold font-bold group-hover:translate-x-2 transition-transform duration-300 mt-auto">
                    <span className="text-xs sm:text-sm md:text-base">View Details</span>
                    <FaArrowRight className="group-hover:rotate-90 transition-transform duration-300 text-xs md:text-sm" />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className={`transform transition-all duration-1200 ease-out mb-12 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600">
              Why Choose Our Concrete Services
            </h2>
            <p className="text-gray-600 text-lg">
              We deliver exceptional value through quality, expertise, and customer commitment
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-6">
            {benefits.map((benefit, idx) => (
              <div 
                key={idx} 
                className="flex items-start gap-4 p-6 bg-gradient-to-br from-primary-50 to-white rounded-lg border-l-4 border-accent-gold hover:shadow-xl hover:border-accent-gold/80 transition-all duration-300 transform hover:translate-x-2 group"
              >
                <FaCheckCircle className="text-accent-gold text-2xl flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                <p className="text-gray-600 text-base md:text-lg group-hover:text-gray-700 transition-colors duration-300">{benefit}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <div className={`transform transition-all duration-1200 ease-out mb-12 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 text-center transition-all duration-300 hover:text-primary-600">
              Our Process
            </h2>
            <p className="text-center text-gray-600 text-lg">
              A transparent, professional approach from consultation to completion
            </p>
          </div>

          <div className="space-y-8">
            {[
              {
                step: 1,
                title: 'Free Consultation',
                description: 'We assess your property and discuss your concrete needs, goals, and budget.',
              },
              {
                step: 2,
                title: 'Design & Planning',
                description: 'Our team creates a detailed plan tailored to your specifications and preferences.',
              },
              {
                step: 3,
                title: 'Professional Installation',
                description: 'We execute the project with precision, quality materials, and expert craftsmanship.',
              },
              {
                step: 4,
                title: 'Final Inspection',
                description: 'We perform a thorough walkthrough to ensure your complete satisfaction.',
              },
            ].map((item, idx) => (
              <div 
                key={item.step} 
                className={`flex gap-6 md:gap-8 transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${idx * 100}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-14 w-14 rounded-full bg-gradient-to-br from-accent-gold to-yellow-500 text-primary-900 font-bold text-lg shadow-lg hover:shadow-xl hover:scale-110 transition-all duration-300">
                    {item.step}
                  </div>
                </div>
                <div className="flex-1 p-6 bg-white rounded-lg border-l-4 border-accent-gold hover:shadow-lg transition-all duration-300 group">
                  <h3 className="text-xl md:text-2xl font-bold text-primary-700 mb-3 group-hover:text-primary-600 transition-colors duration-300">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
                    {item.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className={`transform transition-all duration-1200 ease-out mb-12 ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 text-center transition-all duration-300 hover:text-primary-600">
              Frequently Asked Questions
            </h2>
            <p className="text-center text-gray-600 text-lg">
              Find answers to common questions about our concrete services
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-gray-50 rounded-lg border-2 border-primary-200 hover:border-accent-gold transition-all duration-300 overflow-hidden"
              >
                <button
                  onClick={() => setExpandedFaq(expandedFaq === idx ? null : idx)}
                  className="w-full px-6 py-4 flex items-start justify-between hover:bg-primary-50 transition-colors duration-300 group"
                >
                  <div className="flex items-start gap-4">
                    <FaQuestionCircle className="text-accent-gold text-xl flex-shrink-0 mt-1 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="text-lg font-bold text-primary-700 text-left group-hover:text-primary-600 transition-colors duration-300">
                      {faq.question}
                    </h3>
                  </div>
                  <span className={`text-accent-gold text-xl flex-shrink-0 transition-transform duration-300 ${expandedFaq === idx ? 'rotate-180' : ''}`}>
                    ▼
                  </span>
                </button>

                {expandedFaq === idx && (
                  <div className="px-6 pb-4 border-t border-primary-100 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-gray-600 text-base leading-relaxed">
                      {faq.answer}
                    </p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Ready to Transform Your Property?
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Contact Luxury Construction today for a free estimate. Our team is ready to provide professional concrete solutions tailored to your needs.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(385)227-4522"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 ease-out transform hover:scale-110 active:scale-95 text-sm sm:text-base"
            >
              <span>Call Now</span>
              <FaArrowRight />
            </a>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/35 border-2 border-white/80 hover:border-white transition-all duration-300 ease-out transform hover:scale-110 active:scale-95 text-sm sm:text-base"
            >
              <span>Get Free Estimate</span>
              <FaArrowRight />
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
