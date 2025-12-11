import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaQuestionCircle, FaWalking, FaBuilding, FaPalette } from 'react-icons/fa'
import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function SidewalksPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [expandedFaq, setExpandedFaq] = useState(null)

  const services = [
    {
      image: '/Residential.png',
      alt: 'Residential Walkways - Professional Concrete Installation',
      title: 'Residential Walkways',
      description: 'Enhance your home\'s entrance, garden paths, or backyard areas with sidewalks designed to blend seamlessly with your landscaping. We provide tailored options that improve your property\'s curb appeal while ensuring durability for daily use. Our solutions are perfect for new construction, remodeling, or replacement of old, cracked sidewalks.',
    },
    {
      image: '/Commercial.png',
      alt: 'Commercial Sidewalks - High-Traffic Concrete Solutions',
      title: 'Commercial Sidewalks',
      description: 'Businesses and commercial properties require sidewalks that can handle high foot traffic while maintaining a professional appearance. Our team ensures that commercial sidewalks meet safety standards, comply with local building regulations, and provide long-lasting performance for employees, customers, and visitors.',
    },
    {
      image: '/Decorative.png',
      alt: 'Decorative Concrete Options - Custom Walkway Designs',
      title: 'Decorative and Functional Options',
      description: 'Our decorative concrete options allow you to add personality and elegance to any walkway. Choose from stamped patterns, scored designs, exposed aggregate, or colored concrete to complement your property\'s style. These functional design choices enhance aesthetics and improve traction and safety.',
    },
  ]

  const whyChoose = [
    {
      title: 'Long-Lasting Concrete Solutions',
      description: 'Our sidewalks are constructed using the finest concrete mixes and materials, applied with professional standards. This ensures durable, low-maintenance walkways that stand up to Salt Lake City\'s seasonal changes, heavy foot traffic, and daily wear. We prioritize sustainability by minimizing waste and using materials designed for long-term performance.',
    },
    {
      title: 'Tailored Designs for Every Property',
      description: 'No two properties are the same, which is why every project is customized. We work with you to select finishes, colors, patterns, and layouts that align with your property\'s aesthetic and functional needs. From simple, clean designs to more elaborate decorative concrete, we provide options that match your vision.',
    },
    {
      title: 'Reliable and Transparent Process',
      description: 'From your first consultation to the final walkthrough, we maintain open communication and clear project planning. We provide competitive pricing without sacrificing quality and ensure timely project completion. You\'ll always know what to expect and when, giving you confidence that your project is in capable hands.',
    },
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Consultation and Site Evaluation',
      description: 'We begin by assessing your property, understanding your needs, and discussing design preferences. Our team identifies potential challenges and recommends solutions to optimize both function and appearance.',
    },
    {
      step: '2',
      title: 'Custom Design and Material Selection',
      description: 'Next, we help you choose the best materials, finishes, and design elements for your walkways. Whether you prefer classic concrete, decorative stamped patterns, or colored finishes, we ensure your selections enhance your property\'s look and usability.',
    },
    {
      step: '3',
      title: 'Professional Installation',
      description: 'Our skilled team handles every step of installation with precision and care. From proper site preparation to pouring, finishing, and curing, we ensure your sidewalks are installed correctly for maximum durability and safety.',
    },
    {
      step: '4',
      title: 'Final Walkthrough and Maintenance Tips',
      description: 'Once installation is complete, we conduct a thorough walkthrough to ensure your satisfaction. We provide guidance on proper care and maintenance so your sidewalks continue to look and perform their best for years to come.',
    },
  ]

  const faqs = [
    {
      question: 'How do Salt Lake City\'s weather conditions affect concrete sidewalks and walkways?',
      answer: 'Salt Lake City experiences snowy winters, hot summers, and seasonal temperature swings that can cause cracking and wear over time. Our concrete sidewalks and walkways are designed with high-quality mixes and professional installation techniques to withstand these conditions, ensuring durability and low maintenance year-round.',
    },
    {
      question: 'Can you design sidewalks and walkways that complement my Salt Lake City property or neighborhood style?',
      answer: 'Absolutely. We customize every project to match your property\'s aesthetics and functional needs. Whether your home is near Temple Square, the foothills, or a residential neighborhood, we provide tailored finishes, colors, and decorative options to enhance curb appeal and blend seamlessly with local surroundings.',
    },
    {
      question: 'Are your sidewalks and walkways safe during winter snow and ice in Salt Lake City?',
      answer: 'Yes. We focus on slip-resistant surfaces and proper drainage to help prevent hazards during snowy or icy conditions. Our installations are designed to keep your walkways safe for family, visitors, and customers while maintaining long-term durability despite seasonal changes.',
    },
    {
      question: 'How long do concrete sidewalks and walkways typically last?',
      answer: 'With proper installation and materials, concrete sidewalks and walkways can last decades. We use top-quality concrete mixes, reinforced structures, and professional finishing techniques to create durable surfaces that resist cracking, wear, and weather damage.',
    },
    {
      question: 'Do you offer decorative or custom concrete options for sidewalks and walkways?',
      answer: 'Yes. We offer stamped, colored, scored, and exposed aggregate finishes that allow you to add personality and elegance to your sidewalks. These options enhance aesthetics, improve traction, and create a unique look that complements your property\'s style.',
    },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Concrete Sidewalks and Walkways Contractors in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Professional concrete sidewalks and walkways contractors in Salt Lake City, UT. Custom designs, slip-resistant surfaces, and durable installations for residential and commercial properties." />
        <meta name="keywords" content="concrete sidewalks, walkways, salt lake city, utah, contractors, residential, commercial, decorative concrete, slip-resistant" />
        <meta property="og:title" content="Concrete Sidewalks and Walkways Contractors in Salt Lake City, UT" />
        <meta property="og:description" content="Professional concrete sidewalks and walkways contractors in Salt Lake City, UT. Custom designs and durable installations." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Concrete Sidewalks and Walkways Contractors in Salt Lake City, UT
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 leading-relaxed transition-all duration-1200 ease-out">
            Enhance the beauty, safety, and functionality of your property with professionally installed concrete sidewalks and walkways in Salt Lake City, UT. Nestled between the Wasatch Mountains and the Great Salt Lake, this city experiences snowy winters, hot summers, and seasonal temperature swings that can take a toll on outdoor surfaces.
          </p>
          <Link
            href="/estimate"
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
              Whether you're looking to improve curb appeal near iconic landmarks like Temple Square, create a welcoming entrance in your neighborhood, or provide safe, durable paths for your home or business, we deliver long-lasting solutions tailored to your needs.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              As trusted Concrete Sidewalks and Walkways Contractors in Salt Lake City, UT, we focus on using high-quality materials, customized designs, and reliable installation methods that withstand the local climate. From safe, slip-resistant surfaces in winter to aesthetically pleasing walkways that complement your landscape in summer, we help transform your outdoor spaces into elegant, functional areas built to last for years.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600">
            Our Concrete Sidewalk and Walkway Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12 max-w-3xl">
            We offer a comprehensive range of sidewalk and walkway solutions for both residential and commercial clients. Each project is customized to meet your specific requirements, budget, and style preferences.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`group rounded-xl bg-white border-2 border-primary-200 hover:border-accent-gold shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 overflow-hidden transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex justify-center mb-6 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2">
                    <img
                      src={service.image}
                      alt={service.alt}
                      loading="lazy"
                      className="h-20 md:h-24 w-auto object-contain transition-all duration-300 ease-out group-hover:drop-shadow-lg"
                    />
                  </div>
                  <h3 className="mb-4 text-primary-700 font-bold text-lg md:text-xl transition-all duration-300 ease-out group-hover:text-accent-gold group-hover:translate-x-1 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base transition-all duration-300 ease-out group-hover:text-gray-700">
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
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 transition-all duration-300 hover:text-primary-600">
            Why Choose Us for Sidewalks and Walkways
          </h2>

          <div className="space-y-8">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-6 p-6 md:p-8 bg-gradient-to-r from-primary-50 to-white rounded-xl border-l-4 border-accent-gold shadow-md hover:shadow-xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-1 transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="flex-shrink-0">
                  <FaCheckCircle className="text-accent-gold text-3xl mt-1" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary-700 mb-3">{item.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gradient-to-b from-white to-primary-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 transition-all duration-300 hover:text-primary-600">
            How We Bring Your Walkways to Life
          </h2>

          <div className="space-y-8">
            {processSteps.map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-6 p-6 md:p-8 bg-white rounded-xl border-l-4 border-accent-gold shadow-md hover:shadow-xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-1 transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent-gold text-primary-900 font-bold text-lg">
                    {item.step}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
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
                className={`border-2 border-primary-200 rounded-xl overflow-hidden transition-all duration-500 ease-out transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  className="w-full px-6 md:px-8 py-4 md:py-6 bg-white hover:bg-primary-50 transition-all duration-300 flex items-center justify-between group"
                >
                  <h3 className="text-left font-bold text-primary-700 text-base md:text-lg transition-all duration-300 group-hover:text-accent-gold group-hover:translate-x-1">
                    {faq.question}
                  </h3>
                  <FaQuestionCircle className={`text-accent-gold text-xl flex-shrink-0 ml-4 transition-transform duration-300 ${
                    expandedFaq === idx ? 'rotate-180' : ''
                  }`} />
                </button>

                {expandedFaq === idx && (
                  <div className="px-6 md:px-8 py-4 md:py-6 bg-primary-50 border-t-2 border-primary-200 animate-in fade-in slide-in-from-top-2 duration-300">
                    <p className="text-gray-600 text-base leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Sidewalks and Walkways?</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Your property deserves concrete sidewalks and walkways that are safe, durable, and visually appealing. Contact us today for a free estimate or consultation and discover how our custom solutions in Salt Lake City, UT can enhance your home or business. Let's create outdoor spaces that combine style, functionality, and lasting quality.
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
