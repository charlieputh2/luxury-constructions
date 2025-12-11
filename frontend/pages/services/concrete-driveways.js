import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaQuestionCircle } from 'react-icons/fa'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function ConcreteDriverwaysPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()

  const services = [
    {
      title: 'Residential Driveways',
      description: 'Your home deserves a driveway that enhances curb appeal while offering long-term durability. We specialize in residential concrete driveways that are functional, stylish, and tailored to your property\'s unique layout. From simple traditional slabs to custom designs, we provide solutions that improve accessibility and elevate your home\'s appearance.',
      image: '/residental.jpg',
    },
    {
      title: 'Commercial Driveways',
      description: 'For businesses and commercial properties, durability and functionality are essential. We install commercial concrete driveways and parking areas that can handle heavy traffic and daily wear. Our services include proper grading, drainage planning, and smooth finishing to ensure safety, compliance, and a professional look that reflects your business standards.',
      image: '/commercial.jpg',
    },
    {
      title: 'Decorative and Stamped Concrete Options',
      description: 'Looking for a driveway that stands out? Our decorative concrete services allow you to add personality to your property. Choose from stamped patterns, colored finishes, and textures that mimic natural stone or brick. Decorative driveways offer the perfect combination of functionality and style, creating a unique first impression for visitors or clients.',
      image: '/decorativeandstamped.png',
    },
  ]

  const whyChoose = [
    'Tailored Designs: We customize each driveway to your property\'s dimensions, style, and intended use.',
    'Quality Materials: Using premium concrete mixes ensures strength, durability, and resistance to cracking.',
    'Sustainable Practices: Our projects minimize waste and maximize long-term performance.',
    'Competitive Pricing: We deliver exceptional value without compromising on quality.',
  ]

  const benefits = [
    {
      title: 'Enhance Property Value and Curb Appeal',
      description: 'A well designed and properly installed driveway adds significant value to your property. Whether you\'re preparing to sell or simply want a welcoming entrance, our driveways elevate your home or business appearance with professional craftsmanship and clean lines.',
    },
    {
      title: 'Low Maintenance and Long Term Performance',
      description: 'Concrete is known for its durability, but proper installation is critical. Our driveways are designed for longevity, with strong foundations and expert finishing that minimize cracking, water damage, and surface wear. Enjoy a functional and beautiful driveway with minimal upkeep over the years.',
    },
    {
      title: 'Customized to Fit Your Style and Budget',
      description: 'Every property and client is unique. We work closely with you to select materials, finishes, and layouts that match your vision and budget. Whether you prefer a simple, functional driveway or a decorative statement piece, we provide options tailored to your needs.',
    },
  ]

  const processSteps = [
    {
      title: 'Free Consultation and Project Assessment',
      description: 'Your project begins with a detailed consultation. We assess your property, discuss your goals, and provide expert recommendations. This ensures every detail is considered before construction begins.',
    },
    {
      title: 'Material Selection and Design Planning',
      description: 'We guide you through material choices, finishes, and design elements. From standard concrete mixes to stamped or colored decorative options, we ensure your driveway is both functional and visually appealing.',
    },
    {
      title: 'Professional Installation and Quality Assurance',
      description: 'Our experienced team handles every step of the installation process. We prepare the site, pour and finish the concrete, and ensure proper curing for maximum durability. Each step is executed with precision and care to deliver exceptional results.',
    },
    {
      title: 'Final Walkthrough and Satisfaction Guarantee',
      description: 'After completion, we perform a thorough walkthrough to ensure your driveway meets your expectations. We take pride in delivering not only a finished driveway but also a positive experience, clear communication, and peace of mind.',
    },
  ]

  const faqs = [
    {
      question: 'How do Salt Lake City weather conditions affect my concrete driveway?',
      answer: 'As trusted Concrete Driveway Contractors in Salt Lake City, UT, we design driveways to withstand the city\'s seasonal extremes from snowy winters to hot summer sun. Using high-quality materials and proper installation techniques, we ensure your driveway remains durable, crack-resistant, and visually appealing year-round.',
    },
    {
      question: 'Can you install a concrete driveway near popular Salt Lake City landmarks or neighborhoods?',
      answer: 'Absolutely! Whether you\'re near the Great Salt Lake, downtown Salt Lake City, Sugarhouse, or Millcreek, our team provides tailored concrete driveway solutions. We consider local terrain, drainage, and traffic patterns to ensure a long-lasting, functional driveway that enhances your property.',
    },
    {
      question: 'Do Salt Lake City concrete driveways require special maintenance due to local weather?',
      answer: 'Minimal maintenance is needed with our professionally installed driveways. However, we recommend seasonal checks for snow removal in winter and regular cleaning in spring and summer to maintain curb appeal and prevent surface wear caused by Salt Lake City\'s unique weather conditions.',
    },
    {
      question: 'How long does it take to install a concrete driveway?',
      answer: 'The installation timeline depends on the size and complexity of your driveway. Generally, residential driveways can be completed in 3 to 7 days, including site preparation, pouring, finishing, and curing. Our team ensures every step is done efficiently without compromising quality.',
    },
    {
      question: 'What options are available for decorative concrete driveways?',
      answer: 'We offer a wide range of decorative options, including stamped patterns, colored finishes, and textures that mimic natural stone or brick. Decorative concrete combines functionality and style, allowing you to create a driveway that complements your property\'s aesthetic while remaining durable and low-maintenance.',
    },
  ]

  return (
    <>
      <Head>
        <title>Concrete Driveway Contractors in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Trusted concrete driveway contractors in Salt Lake City, UT. Residential, commercial, and decorative driveways. Free estimates. Professional installation." />
        <meta name="keywords" content="concrete driveway, contractors, salt lake city, residential, commercial, decorative, stamped concrete" />
        <meta property="og:title" content="Concrete Driveway Contractors in Salt Lake City, UT" />
        <meta property="og:description" content="Professional concrete driveway services in Salt Lake City. Residential, commercial, and decorative options." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-700 via-primary-600 to-primary-50 py-12 md:py-20 lg:py-24">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg transition-all duration-1000">
              Trusted Concrete Driveway Contractors in Salt Lake City, UT
            </h1>
            <p className="text-lg md:text-xl text-gray-100 drop-shadow-md mb-8">
              Professional driveway solutions built to withstand Salt Lake City's unique climate
            </p>
            <a
              href="tel:(385)227-4522"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 ease-out transform hover:scale-110 active:scale-95"
            >
              <span>Get Free Estimate</span>
              <FaArrowRight />
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
              Your driveway is more than just a path to your home or business, it's the first impression, a functional necessity, and an investment in your property. As leading Concrete Driveway Contractors in Salt Lake City, UT, we understand how local weather, from snowy winters to scorching summer heat, can impact the longevity of your driveway. That's why we use high-quality materials and proven techniques to build driveways that stand up to the city's unique climate.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Whether you need a residential driveway near the Great Salt Lake or a commercial parking area downtown, or a decorative concrete upgrade in Sugarhouse or Millcreek, our tailored solutions ensure results that are both durable and visually stunning.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="text-center mb-12 md:mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600">
              Our Concrete Driveway Services
            </h2>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl overflow-hidden border-2 border-primary-200 hover:border-accent-gold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group"
              >
                {/* Service Image */}
                {service.image && (
                  <div className="h-48 overflow-hidden bg-gray-200 transition-transform duration-500 ease-out group-hover:scale-110">
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

                {/* Service Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-primary-700 mb-4 group-hover:text-primary-600 transition-colors duration-300">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-colors duration-300">
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
            Why Choose Our Driveway Solutions
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            We're committed to delivering more than just concrete we provide solutions built around your needs. Every project is handled with precision, attention to detail, and transparency. Our team focuses on:
          </p>

          <div className="space-y-4">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-br from-primary-50 to-white rounded-lg border-l-4 border-accent-gold">
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
            The Advantages of Our Concrete Driveways
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 md:p-8 border-2 border-primary-200 hover:border-accent-gold hover:shadow-lg transition-all duration-300 transform hover:scale-105 hover:-translate-y-2"
              >
                <h3 className="text-xl md:text-2xl font-bold text-primary-700 mb-4">
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
            Our Proven Driveway Installation Process
          </h2>

          <div className="space-y-8">
            {processSteps.map((step, idx) => (
              <div key={idx} className="flex gap-6 md:gap-8">
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent-gold text-primary-900 font-bold text-lg">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="text-xl md:text-2xl font-bold text-primary-700 mb-3">
                    {step.title}
                  </h3>
                  <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 md:mb-16 text-center transition-all duration-300 hover:text-primary-600">
            Frequently Asked Questions
          </h2>

          <div className="space-y-6">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl p-6 md:p-8 border-2 border-primary-200 hover:border-accent-gold hover:shadow-lg transition-all duration-300"
              >
                <div className="flex items-start gap-4 mb-4">
                  <FaQuestionCircle className="text-accent-gold text-2xl flex-shrink-0 mt-1" />
                  <h3 className="text-lg md:text-xl font-bold text-primary-700">
                    {faq.question}
                  </h3>
                </div>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed ml-10">
                  {faq.answer}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Get Your Free Concrete Driveway Estimate in Salt Lake City Today
          </h2>
          <p className="text-lg text-gray-100 mb-8 max-w-2xl mx-auto">
            Ready to enhance your property with a durable and beautiful concrete driveway in Salt Lake City, UT? Contact us today for a free estimate and consultation. Our team is here to provide tailored solutions, professional service, and long-lasting results for your residential or commercial driveway needs. Let's build a driveway that combines functionality, style, and enduring quality.
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
