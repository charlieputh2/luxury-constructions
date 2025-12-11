import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaQuestionCircle, FaHome, FaBuilding, FaHammer } from 'react-icons/fa'
import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function FoundationsPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [expandedFaq, setExpandedFaq] = useState(null)

  const features = [
    {
      icon: <FaHome className="text-accent-gold text-4xl" />,
      title: 'Residential and Commercial Concrete Solutions',
      description: 'We provide concrete foundation services for both residential and commercial properties. From single-family homes to commercial buildings, we adapt our approach to meet the unique requirements of each project. No matter the size or complexity, you can count on us for reliable and long-lasting results.',
    },
    {
      icon: <FaHammer className="text-accent-gold text-4xl" />,
      title: 'High-Quality Materials and Techniques',
      description: 'Using only the highest-grade concrete and modern installation methods, we ensure your foundation is built to last. Our team carefully selects materials based on soil conditions, climate considerations, and the intended use of your property. This attention to detail minimizes cracks, settling, and long-term maintenance concerns.',
    },
  ]

  const benefits = [
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Long-Lasting Durability for Every Property',
      description: 'Our foundations are designed for strength and stability. We combine the right materials, proven techniques, and careful planning to deliver a foundation that supports your property for decades. Investing in a durable foundation now saves time and money on repairs down the road.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Customized Solutions Tailored to Your Needs',
      description: 'No two projects are alike. We work closely with you to design a foundation that fits your specific requirements, aesthetic preferences, and budget. From layout planning to final finishing touches, we ensure every detail is customized to your vision.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Timely Project Completion and Reliable Service',
      description: 'We value your time and understand the importance of meeting project deadlines. Our team maintains clear communication throughout the process, ensures efficient scheduling, and delivers your foundation on time without compromising quality.',
    },
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Initial Consultation and Project Assessment',
      description: 'Every project begins with a detailed consultation. We assess your property, discuss your goals, and evaluate soil and site conditions. This step allows us to recommend the best foundation type and approach for your unique situation.',
    },
    {
      step: '2',
      title: 'Design and Material Selection',
      description: 'Next, we work with you to design your foundation, select the right concrete mix, and plan structural reinforcements if needed. Our team ensures the design aligns with your functional and aesthetic requirements while complying with all building codes.',
    },
    {
      step: '3',
      title: 'Precision Installation and Quality Assurance',
      description: 'Once the plan is finalized, we begin construction using industry-standard techniques and equipment. Every pour and form is monitored for precision, and our quality assurance process guarantees your foundation meets structural expectations.',
    },
    {
      step: '4',
      title: 'Final Walkthrough and Long-Term Support',
      description: 'After installation, we conduct a final walkthrough to ensure everything meets your satisfaction. We also provide guidance for maintenance and long-term durability, helping you protect your investment for years to come.',
    },
  ]

  const faqs = [
    {
      question: 'How do Salt Lake City weather conditions affect concrete foundations?',
      answer: 'Salt Lake City experiences snowy winters, hot summers, and seasonal temperature swings that can impact foundation stability. Our concrete solutions are specifically designed to withstand local climate challenges, including soil shifts and freeze-thaw cycles, ensuring your foundation remains durable and structurally sound for years to come.',
    },
    {
      question: 'Can you build foundations for homes near local landmarks like Sugar House or downtown Salt Lake City?',
      answer: 'Yes! We provide customized concrete foundation services for properties throughout Salt Lake City, including neighborhoods like Sugar House, The Avenues, and downtown areas. Our team adapts each foundation to the unique soil and site conditions of your location, delivering reliable results no matter the property type.',
    },
    {
      question: 'What makes your concrete foundation services different for residential and commercial projects?',
      answer: 'Whether it\'s a single-family home or a commercial building, we tailor our approach to meet each project\'s size, complexity, and functional requirements. Using high-quality materials and modern installation techniques, we ensure both residential and commercial foundations are strong, durable, and long-lasting.',
    },
    {
      question: 'How long does it take to complete a concrete foundation project?',
      answer: 'Project timelines vary based on size and complexity, but our team prioritizes efficient scheduling and timely completion without compromising quality. From consultation to final walkthrough, we keep you informed throughout the process so your project stays on track.',
    },
    {
      question: 'How can I maintain my concrete foundation to ensure long-term durability?',
      answer: 'Proper maintenance is key to a long-lasting foundation. We provide guidance on routine inspections, moisture management, and preventative care to minimize settling or cracking, helping you protect your investment for decades.',
    },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Concrete Foundation Contractors in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Professional concrete foundation contractors in Salt Lake City, UT. Strong, durable foundations for residential and commercial properties. Expert installation and long-term support." />
        <meta name="keywords" content="concrete foundations, foundation contractors, salt lake city, utah, residential foundations, commercial foundations, concrete services, foundation installation" />
        <meta property="og:title" content="Concrete Foundation Contractors in Salt Lake City, UT" />
        <meta property="og:description" content="Professional concrete foundation contractors in Salt Lake City, UT. Strong, durable foundations for residential and commercial properties." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Concrete Foundation Contractors in Salt Lake City, UT
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 leading-relaxed transition-all duration-1200 ease-out">
            As trusted Concrete Foundation Contractors in Salt Lake City, UT, we specialize in building strong, long-lasting foundations for homes and businesses across the area. From snowy winters in the Wasatch Mountains to hot summers near the Great Salt Lake, our concrete solutions are designed to withstand local weather conditions, soil shifts, and seasonal temperature changes, ensuring your property remains stable and secure for years to come.
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
              Whether you're constructing a new home, upgrading a historic property in Sugar House, or expanding a commercial space downtown, our team delivers reliable, high-quality concrete foundations tailored to your needs, budget, and design preferences.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              With careful planning, premium materials, and clear communication from start to finish, we make every foundation project stress-free, durable, and built to last.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 transition-all duration-300 hover:text-primary-600">
            Durable Foundations Built to Last
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12 max-w-3xl">
            Your foundation is the backbone of your property, and we take that responsibility seriously. We ensure every project is constructed with attention to detail, using the finest concrete mixes and industry-leading techniques. This guarantees that your foundation can withstand Salt Lake City's seasonal temperature swings, heavy snowfall, and soil conditions while remaining structurally sound for years to come.
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
            Why Choose Our Concrete Foundation Services
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
            Our Concrete Foundation Process in Salt Lake City
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12">
            We believe in a transparent and straightforward process that keeps you informed at every step. Our process ensures that your foundation is constructed efficiently, safely, and to the highest standards.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get a Free Concrete Foundation Estimate Today</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Ready to start your foundation project in Salt Lake City, UT? Our team is here to guide you through every step, from consultation to completion. Contact us today to schedule your free estimate and discover why property owners trust us for reliable, durable, and customized concrete foundation solutions.
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
