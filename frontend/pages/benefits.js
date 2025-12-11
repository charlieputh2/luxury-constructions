import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaHome, FaLeaf, FaShieldAlt, FaArrowRight } from 'react-icons/fa'
import { useState } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function BenefitsPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()

  const benefits = [
    {
      icon: <FaHome className="text-accent-gold text-4xl" />,
      title: 'Increased Property Value',
      description: 'Professional construction and landscaping significantly increase your property\'s market value. A well-maintained exterior and quality improvements make your home more attractive to potential buyers.',
    },
    {
      icon: <FaShieldAlt className="text-accent-gold text-4xl" />,
      title: 'Enhanced Durability',
      description: 'Our construction methods and premium materials ensure your improvements last for decades. Built to withstand Salt Lake City\'s harsh weather conditions, your investment is protected long-term.',
    },
    {
      icon: <FaLeaf className="text-accent-gold text-4xl" />,
      title: 'Improved Curb Appeal',
      description: 'Transform your property\'s appearance with professional design and construction. A beautiful exterior creates a lasting first impression and enhances your neighborhood.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Better Functionality',
      description: 'Our projects are designed to improve how you use your space. From better drainage to optimized layouts, every improvement enhances your daily living experience.',
    },
    {
      icon: <FaArrowRight className="text-accent-gold text-4xl" />,
      title: 'Energy Efficiency',
      description: 'Many of our projects include energy-efficient features that reduce utility costs. Smart design and quality materials help you save money while protecting the environment.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Peace of Mind',
      description: 'With our warranties and professional workmanship, you can rest assured your investment is protected. We stand behind every project with comprehensive guarantees.',
    },
  ]

  return (
    <>
      <Head>
        <title>Benefits of Our Services | Luxury Construction - Salt Lake City, UT</title>
        <meta name="description" content="Discover the benefits of choosing Luxury Construction for your concrete and construction projects in Salt Lake City, UT. Increased property value, durability, and more." />
        <meta name="keywords" content="benefits, construction services, concrete contractor, property value, durability, curb appeal, salt lake city, utah" />
        <meta property="og:title" content="Benefits of Our Services | Luxury Construction" />
        <meta property="og:description" content="Discover the benefits of choosing Luxury Construction for your construction projects in Salt Lake City, UT." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Benefits of Our Services
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 leading-relaxed transition-all duration-1200 ease-out">
            Investing in professional construction and landscaping services offers numerous benefits for your property and lifestyle. Discover what our clients experience.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-accent-gold text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Learn More
          </Link>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <div className={`text-center mb-16 transform transition-all duration-1200 ease-out ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`} ref={sectionRef}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              What You Gain From Our Work
            </h2>
            <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
              Our construction and landscaping services provide tangible benefits that enhance your property, increase its value, and improve your quality of life.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`group rounded-xl bg-gradient-to-br from-white to-primary-50 border-2 border-primary-200 hover:border-accent-gold shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 overflow-hidden transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex justify-center mb-4 text-5xl transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                    {benefit.icon}
                  </div>
                  <h3 className="mb-4 text-primary-700 font-bold text-lg md:text-xl transition-all duration-300 ease-out group-hover:text-accent-gold group-hover:translate-x-1 text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base transition-all duration-300 ease-out group-hover:text-gray-700">
                    {benefit.description}
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Enjoying These Benefits Today</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Let us help you transform your property and experience the benefits of professional construction services in Salt Lake City, UT.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-accent-gold text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Get Free Estimate
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
