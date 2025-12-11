import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaQuestionCircle, FaDoorOpen, FaHome, FaLightbulb } from 'react-icons/fa'
import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function WalkoutBasementsPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [expandedFaq, setExpandedFaq] = useState(null)

  const features = [
    {
      icon: <FaDoorOpen className="text-accent-gold text-4xl" />,
      title: 'Customized Concrete Walkout Designs for Every Home',
      description: 'No two homes are alike, which is why we tailor every walkout basement to your specific needs. From choosing the right concrete mix to designing stairs, doors, and retaining walls, we ensure your walkout complements your home\'s architecture and your personal style. Our design process considers your lifestyle, desired basement use, and long-term plans, giving you a functional and visually appealing space that enhances your property.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Built to Last Through Utah Weather',
      description: 'Salt Lake City experiences a wide range of temperatures and weather conditions, from hot summers to snowy winters. Our team uses the finest concrete mixes and proven construction techniques to create walkout basements that resist cracking, erosion, and water intrusion. As your reliable Concrete Walkout Basement Contractor in Salt Lake City, UT, we prioritize durability and longevity, so you can enjoy peace of mind knowing your investment is protected for years to come.',
    },
  ]

  const benefits = [
    {
      icon: <FaHome className="text-accent-gold text-4xl" />,
      title: 'Increased Home Accessibility and Safety',
      description: 'A properly designed walkout basement provides easy entry and exit, making your home safer and more convenient for family members, guests, and anyone with mobility considerations. It also ensures you have a reliable emergency exit, giving you confidence in both everyday use and unforeseen situations.',
    },
    {
      icon: <FaLightbulb className="text-accent-gold text-4xl" />,
      title: 'Boost Your Property Value',
      description: 'Walkout basements are highly sought after by potential buyers and homeowners looking to increase property appeal. A professionally installed walkout can significantly enhance your home\'s resale value, while also improving the overall usability of your basement for living, storage, or entertaining.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Extra Living Space and Natural Light',
      description: 'One of the most appreciated benefits of a walkout basement is the ability to create bright, usable spaces. Whether you\'re adding a family room, office, or recreational area, the added light and accessibility make your basement a more inviting part of your home. As a trusted Concrete Walkout Basement Contractor in Salt Lake City, UT, we ensure your new space is both practical and beautiful.',
    },
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Consultation and Planning',
      description: 'Every project starts with an in-depth consultation. Our team evaluates your basement layout, property grading, and design preferences to create a custom plan. We discuss materials, drainage solutions, and timelines, ensuring you\'re informed and confident before construction begins.',
    },
    {
      step: '2',
      title: 'Professional Installation and Concrete Work',
      description: 'With a solid plan in place, we handle every aspect of installation. From excavating and preparing the foundation to pouring high-quality concrete and building stairs, we adhere to strict standards for durability and performance. Our Salt Lake City team uses proven techniques to prevent cracks, water issues, and structural concerns.',
    },
    {
      step: '3',
      title: 'Finishing Touches and Walkout Completion',
      description: 'Once the structural work is complete, we focus on finishing touches such as doors, retaining walls, and surface treatments. We also ensure proper drainage and cleanup so your property is ready to enjoy immediately. Our comprehensive approach guarantees a beautiful, long-lasting walkout basement.',
    },
  ]

  const whyChoose = [
    {
      title: 'Tailored Solutions for Your Home and Budget',
      description: 'We understand that each homeowner has different goals, tastes, and budgets. Our team works closely with you to create solutions that align with your vision, offering fair pricing without compromising quality.',
    },
    {
      title: 'Long-Lasting Craftsmanship',
      description: 'We don\'t just build walkouts; we build confidence. By using high-quality materials and proven construction methods, we ensure your basement walkout stands strong against Utah\'s changing weather and daily wear.',
    },
    {
      title: 'Smooth, Transparent Project Execution',
      description: 'From start to finish, our process emphasizes communication, reliability, and timely completion. You\'ll always know what to expect, and we handle every step with precision and care.',
    },
  ]

  const faqs = [
    {
      question: 'How does Salt Lake City\'s weather affect my walkout basement project?',
      answer: 'Our team designs every walkout basement to handle Utah\'s seasonal extremes, from snowy winters in the Wasatch Mountains to hot summers near the Great Salt Lake. Proper drainage, high-quality concrete, and professional installation ensure your basement stays safe, functional, and durable year-round.',
    },
    {
      question: 'Can a concrete walkout basement be customized for homes near Temple Square or other Salt Lake City neighborhoods?',
      answer: 'Absolutely. We tailor each walkout basement to your home\'s layout, local zoning requirements, and aesthetic preferences. Whether you live in a historic downtown home or a suburban neighborhood, our designs enhance accessibility, safety, and property value.',
    },
    {
      question: 'How long does it take to complete a walkout basement in Salt Lake City?',
      answer: 'Most projects are completed efficiently while accounting for local weather and site conditions. From consultation to final touches, typical timelines range from 3–6 weeks, depending on the size and complexity of the walkout basement.',
    },
    {
      question: 'What are the main benefits of installing a concrete walkout basement?',
      answer: 'Walkout basements improve home accessibility, safety, and natural light. They also increase usable living space, boost property value, and provide convenient emergency exits. Our team ensures every walkout is functional, durable, and tailored to your needs.',
    },
    {
      question: 'How do I get started with a Concrete Walkout Basement Contractor?',
      answer: 'Simply reach out to schedule a free consultation. We assess your property, discuss design options, and provide a transparent estimate. Our Salt Lake City team handles the project from start to finish, keeping you informed every step of the way.',
    },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Concrete Walkout Basement Contractor in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Professional concrete walkout basement contractor in Salt Lake City, UT. Custom designs, durable construction, and expert installation for residential properties." />
        <meta name="keywords" content="walkout basement, concrete walkout, basement contractor, salt lake city, utah, basement construction, home improvement, property value" />
        <meta property="og:title" content="Concrete Walkout Basement Contractor in Salt Lake City, UT" />
        <meta property="og:description" content="Professional concrete walkout basement contractor in Salt Lake City, UT. Custom designs and durable construction." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Concrete Walkout Basement Contractor in Salt Lake City, UT
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 leading-relaxed transition-all duration-1200 ease-out">
            Looking to enhance your home's functionality, accessibility, and value in the heart of Salt Lake City, UT? As a trusted Concrete Walkout Basement Contractor in Salt Lake City, UT, we specialize in creating durable, customized walkout basement solutions designed to withstand the area's unique conditions, from snowy winters in the Wasatch Mountains to hot summer days near the Great Salt Lake.
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
              Our team combines precision craftsmanship with personalized design, ensuring your basement walkout not only complements your home's style but also stands strong through Utah's seasonal challenges. Whether your property is near Temple Square, the University of Utah, or nestled in a quiet suburban neighborhood, we tailor every project to your home, lifestyle, and long-term needs.
            </p>
          </div>
        </div>
      </section>

      {/* Transform Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600">
            Transform Your Basement with a Durable Walkout Solution
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12 max-w-3xl">
            A basement walkout is more than just an extra door; it's an investment in convenience, safety, and long-term value. Our Salt Lake City team provides professional Concrete Walkout Basement Contractor services designed to meet your property's unique requirements while addressing common concerns such as water drainage, structural stability, and weather durability. With our guidance, you'll enjoy a seamless blend of functionality, aesthetics, and reliability.
          </p>

          <div className="space-y-8">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`flex gap-6 p-6 md:p-8 bg-white rounded-xl border-l-4 border-accent-gold shadow-md hover:shadow-xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-1 transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="text-5xl transition-transform duration-500 ease-out group-hover:scale-110">
                    {feature.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary-700 mb-3">{feature.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{feature.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-b from-white to-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 text-center transition-all duration-300 hover:text-primary-600">
            Benefits of a Concrete Walkout Basement
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`group rounded-xl bg-white border-2 border-primary-200 hover:border-accent-gold shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 overflow-hidden transform transition-all duration-1200 ease-out ${
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

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 transition-all duration-300 hover:text-primary-600">
            Our Proven Process for Your Walkout Basement
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12">
            We know that the key to a successful walkout basement project is a clear, professional process. Here's how we bring your vision to life while keeping your project on time and within budget.
          </p>

          <div className="space-y-8">
            {processSteps.map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-6 p-6 md:p-8 bg-gradient-to-r from-primary-50 to-white rounded-xl border-l-4 border-accent-gold shadow-md hover:shadow-xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-1 transform transition-all duration-1200 ease-out ${
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

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 transition-all duration-300 hover:text-primary-600">
            Why Choose Us for Your Concrete Walkout Basement
          </h2>

          <div className="space-y-8">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className={`flex gap-6 p-6 md:p-8 bg-white rounded-xl border-l-4 border-accent-gold shadow-md hover:shadow-xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-1 transform transition-all duration-1200 ease-out ${
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

      {/* FAQ Section */}
      <section className="section-padding bg-white">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Request Your Free Estimate Today</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Ready to transform your basement into a functional, beautiful space? Contact our team of experienced professionals to schedule your consultation. As the premier Concrete Walkout Basement Contractor in Salt Lake City, UT, we're here to deliver a durable, customized solution that enhances your home and exceeds expectations.
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
