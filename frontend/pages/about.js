import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function AboutPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()

  const whyChooseUs = [
    'Broad expertise across residential, commercial, and specialized projects',
    'Customized designs tailored to your style and requirements',
    'Professional, efficient, and reliable project execution',
    'Durable, sustainable, and low-maintenance results',
    'Transparent pricing and responsive client service',
  ]

  const values = [
    {
      title: 'Quality First',
      description: 'Using the finest materials and professional standards for lasting results.',
    },
    {
      title: 'Tailored Solutions',
      description: 'Custom designs that reflect your unique vision and needs.',
    },
    {
      title: 'Transparency & Fairness',
      description: 'Competitive pricing without sacrificing quality.',
    },
    {
      title: 'Efficiency & Reliability',
      description: 'Timely completion and smooth project management.',
    },
    {
      title: 'Sustainability & Durability',
      description: 'Long-lasting work that minimizes future maintenance and environmental impact.',
    },
  ]

  return (
    <>
      <Head>
        <title>About Us - Luxury Construction | Expert Concrete Contractors Salt Lake City</title>
        <meta name="description" content="Learn about Luxury Construction - Expert concrete contractors in Salt Lake City, UT. Discover our mission, values, and commitment to quality craftsmanship." />
        <meta name="keywords" content="about luxury construction, concrete contractors, craftsmanship, salt lake city, landscaping" />
        <meta property="og:title" content="About Us - Luxury Construction" />
        <meta property="og:description" content="Expert concrete contractors committed to exceptional craftsmanship and lasting results." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-700 via-primary-600 to-primary-50 py-12 md:py-20 lg:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg transition-all duration-1000">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-gray-100 drop-shadow-md">
              Expert Concrete Craftsmanship You Can Trust
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Introduction */}
          <div className={`transform transition-all duration-1200 ease-out mb-12 md:mb-16 max-w-4xl mx-auto ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`} ref={sectionRef}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6 transition-all duration-300 hover:text-primary-600">
              Expert Concrete Craftsmanship You Can Trust
            </h2>
            <div className="space-y-4 md:space-y-6">
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                At Luxury Concrete and Landscaping LLC, dba Luxury Construction, we understand that your property is more than just a space—it's a place to live, entertain, and make lasting memories. What began as a young boy lending a hand on small neighborhood projects alongside his father quickly grew into a lifelong passion transforming ordinary yards into extraordinary outdoor spaces worth showing off.
              </p>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                We take pride in delivering exceptional, "luxury-level" craftsmanship without the luxury price tag. From innovative landscaping to high-quality concrete work and full-service contracting, our mission is simple: create beautiful, lasting spaces that elevate everyday living.
              </p>
            </div>
          </div>

          {/* Building Foundations Section */}
          <div className="mb-12 md:mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6 transition-all duration-300 hover:text-primary-600">
              Building Foundations, Strengthening Trust
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              With years of hands-on experience, we've mastered the art and science of concrete and landscaping. Our team combines technical expertise with a friendly, approachable service that makes every project seamless and enjoyable. Whether you're upgrading a residential backyard, designing a custom patio, or tackling a large commercial development, we treat every project as unique. Our commitment is to deliver results that not only meet your expectations but stand the test of time.
            </p>
          </div>

          {/* Custom Solutions Section */}
          <div className="mb-12 md:mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6 transition-all duration-300 hover:text-primary-600">
              Custom Solutions, Exceptional Craftsmanship
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Every client has a distinct vision, and we believe every project deserves a tailored approach. We don't settle for one-size-fits-all solutions. From the initial consultation to the final walkthrough, we focus on understanding your needs, aesthetic preferences, and budget to craft results that are functional, beautiful, and long-lasting.
            </p>
          </div>

          {/* Why Choose Us Section */}
          <div className="mb-12 md:mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-8 transition-all duration-300 hover:text-primary-600">
              Why Choose Us?
            </h2>
            <div className="grid md:grid-cols-2 gap-6">
              {whyChooseUs.map((item, idx) => (
                <div
                  key={idx}
                  className="flex items-start gap-4 p-4 md:p-6 bg-gradient-to-br from-primary-50 to-white rounded-lg border-l-4 border-accent-gold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-1"
                >
                  <FaCheckCircle className="text-accent-gold text-2xl flex-shrink-0 mt-1" />
                  <p className="text-gray-600 text-base md:text-lg">{item}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Values Section */}
          <div className="mb-12 md:mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6 transition-all duration-300 hover:text-primary-600">
              Built on Principles, Delivered with Care
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
              Our work is guided by values that ensure every project is done right:
            </p>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
              {values.map((value, idx) => (
                <div
                  key={idx}
                  className="p-6 bg-gradient-to-br from-white to-primary-50 rounded-xl border-2 border-primary-200 hover:border-accent-gold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
                >
                  <h3 className="text-xl font-bold text-primary-700 mb-3">{value.title}</h3>
                  <p className="text-gray-600 text-base">{value.description}</p>
                </div>
              ))}
            </div>

            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We believe that building exceptional outdoor spaces isn't just about materials, it's about trust, communication, and respect for our clients' vision.
            </p>
          </div>

          {/* Partnership Section */}
          <div className="mb-12 md:mb-16 max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6 transition-all duration-300 hover:text-primary-600">
              Your Partner in Every Concrete Project
            </h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We proudly serve homeowners, property owners, developers, and business clients who value professionalism, quality, and durability. Whether it's a residential patio, decorative concrete walkway, or large-scale commercial parking lot, we offer a full range of services to meet every need. Our goal is to make your experience seamless, stress-free, and rewarding from start to finish.
            </p>
          </div>

          {/* CTA Section */}
          <div className="max-w-4xl mx-auto bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 rounded-2xl p-8 md:p-12 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Let's Bring Your Project to Life
            </h2>
            <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
              At Luxury Construction, we don't just create concrete and landscapes, we create spaces you'll enjoy for years to come. Ready to start your project? Let us turn your vision into reality with craftsmanship, reliability, and personal attention.
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
                href="/#contact"
                className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 bg-white/20 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/35 border-2 border-white/80 hover:border-white transition-all duration-300 ease-out transform hover:scale-110 active:scale-95 text-sm sm:text-base"
              >
                <span>Contact Us</span>
                <FaArrowRight />
              </Link>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
