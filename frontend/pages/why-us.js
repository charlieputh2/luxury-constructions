import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaQuestionCircle } from 'react-icons/fa'
import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function WhyUsPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()

  const reasons = [
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Expert Craftsmanship',
      description: 'Our team combines years of experience with meticulous attention to detail. Every project is executed with precision, using premium materials and proven construction techniques.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Local Expertise',
      description: 'We understand Salt Lake City\'s unique climate, soil conditions, and architectural styles. This local knowledge ensures your project is built to last in Utah\'s specific environment.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Transparent Communication',
      description: 'We keep you informed at every step of the project. Clear timelines, detailed planning, and honest communication ensure no surprises and complete satisfaction.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Quality Materials',
      description: 'We use only premium materials and products that are built to withstand Utah\'s harsh weather conditions. Your investment is protected with the finest available options.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Competitive Pricing',
      description: 'We provide exceptional value without compromising quality. Our pricing is transparent and competitive, ensuring you get the best return on your investment.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Customer Satisfaction',
      description: 'Your satisfaction is our top priority. We stand behind our work with warranties and ongoing support, ensuring your complete peace of mind.',
    },
  ]

  return (
    <>
      <Head>
        <title>Why Choose Us | Luxury Construction - Salt Lake City, UT</title>
        <meta name="description" content="Discover why Luxury Construction is the trusted choice for concrete and construction services in Salt Lake City, UT. Expert craftsmanship, local expertise, and customer satisfaction." />
        <meta name="keywords" content="why choose us, construction company, concrete contractor, salt lake city, utah, expert craftsmanship, quality materials" />
        <meta property="og:title" content="Why Choose Us | Luxury Construction" />
        <meta property="og:description" content="Discover why Luxury Construction is the trusted choice for construction services in Salt Lake City, UT." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Why Choose Luxury Construction?
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 leading-relaxed transition-all duration-1200 ease-out">
            We're committed to delivering exceptional construction and concrete services in Salt Lake City, UT. Here's what sets us apart from the competition.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-accent-gold text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Get In Touch
          </Link>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className={`text-center mb-16 transform transition-all duration-1200 ease-out ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`} ref={sectionRef}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Our Commitment to Excellence
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              With years of experience serving Salt Lake City and the surrounding areas, we've built our reputation on quality, reliability, and customer satisfaction. Here's what our clients can expect when they choose us.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {reasons.map((reason, idx) => (
              <div
                key={idx}
                className={`group rounded-xl bg-gradient-to-br from-white to-primary-50 border-2 border-primary-200 hover:border-accent-gold shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 overflow-hidden transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex justify-center mb-4 text-5xl transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                    {reason.icon}
                  </div>
                  <h3 className="mb-4 text-primary-700 font-bold text-lg md:text-xl transition-all duration-300 ease-out group-hover:text-accent-gold group-hover:translate-x-1 text-center">
                    {reason.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base transition-all duration-300 ease-out group-hover:text-gray-700">
                    {reason.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Experience the Difference?</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Contact us today to discuss your project and see why we're the trusted choice for construction and concrete services in Salt Lake City, UT.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-accent-gold text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <a
              href="tel:(385)227-4522"
              className="inline-block px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
