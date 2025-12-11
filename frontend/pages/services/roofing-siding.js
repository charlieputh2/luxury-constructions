import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaQuestionCircle, FaHome, FaShieldAlt, FaHammer } from 'react-icons/fa'
import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function RoofingSidingPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [expandedFaq, setExpandedFaq] = useState(null)

  const solutions = [
    {
      icon: <FaHome className="text-accent-gold text-4xl" />,
      title: 'Durable Roofs Built for Utah Weather',
      description: 'Salt Lake City\'s climate can be tough on roofs, with heavy snow, ice, and intense summer sun. Our roofing solutions are built to withstand these extremes while maintaining their strength and integrity for years to come. We use premium roofing materials and proven installation techniques to ensure lasting protection for your property.',
    },
    {
      icon: <FaShieldAlt className="text-accent-gold text-4xl" />,
      title: 'Stylish Siding Options for Every Home',
      description: 'Your siding is not just a shield against the elements, it\'s a statement about your home. We provide a wide range of siding materials, colors, and finishes that enhance aesthetics while improving energy efficiency. From vinyl and fiber cement to modern composite options, we help you choose siding that complements your home\'s architecture and personal style.',
    },
    {
      icon: <FaHammer className="text-accent-gold text-4xl" />,
      title: 'Residential and Commercial Projects',
      description: 'Whether it\'s a single-family home, multi-unit property, or commercial building, our team has the experience and resources to handle projects of all sizes. Every project receives the same dedication to quality, attention to detail, and commitment to customer satisfaction.',
    },
  ]

  const whyChoose = [
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Long-Lasting Materials for Maximum Value',
      description: 'We prioritize durability in every project. By using the finest materials available, we ensure that your investment not only looks great but also stands up to Salt Lake City\'s harsh weather conditions.',
    },
    {
      icon: <FaShieldAlt className="text-accent-gold text-4xl" />,
      title: 'Customized Solutions That Match Your Style',
      description: 'No two properties are the same, which is why we provide tailored solutions for every client. From material selection to design choices, we collaborate closely with you to deliver results that align with your preferences and needs.',
    },
    {
      icon: <FaArrowRight className="text-accent-gold text-4xl" />,
      title: 'Reliable Workmanship You Can Count On',
      description: 'Our team combines years of experience with meticulous attention to detail to guarantee high-quality results. From start to finish, we handle each project with professionalism, transparency, and care, so you can feel confident in your investment.',
    },
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Free Consultation and Detailed Estimate',
      description: 'Every project begins with a thorough assessment of your property. We provide a free, no-obligation consultation and detailed estimate, explaining your options clearly so you can make informed decisions.',
    },
    {
      step: '2',
      title: 'Planning and Material Selection',
      description: 'We work with you to select the best materials and finishes for your home or business. Our team considers durability, aesthetics, and cost to recommend solutions that meet your long-term goals.',
    },
    {
      step: '3',
      title: 'Professional Installation with Attention to Detail',
      description: 'Our skilled installers follow industry-leading practices to ensure every roof and siding project is executed flawlessly. We prioritize safety, precision, and efficiency during the installation process.',
    },
    {
      step: '4',
      title: 'Final Inspection and Satisfaction Guarantee',
      description: 'Once your project is complete, we conduct a thorough inspection to ensure everything meets our high standards. Your satisfaction is our top priority, and we stand behind our work with warranties and ongoing support.',
    },
  ]

  const faqs = [
    {
      question: 'What roofing materials are best for Salt Lake City\'s weather?',
      answer: 'In Salt Lake City, roofs need to withstand heavy winter snow from the Wasatch Mountains and hot, dry summer sun near the Great Salt Lake. We recommend durable asphalt shingles, metal roofing, or composite materials, all professionally installed to provide long-lasting protection and energy efficiency.',
    },
    {
      question: 'Can you handle siding and roofing projects in specific Salt Lake City neighborhoods?',
      answer: 'Yes! We serve homes and businesses throughout Salt Lake City, including Sugar House, The Avenues, Liberty Park, and downtown areas. Our team tailors each project to your property\'s style and local environmental conditions.',
    },
    {
      question: 'How do you protect roofs and siding from storm damage in Salt Lake City?',
      answer: 'We use high-quality materials designed for extreme weather and follow industry leading installation practices. Regular maintenance, proper drainage, and professional inspections also help prevent damage from snow, ice, and sudden storms common in the region.',
    },
    {
      question: 'How long does a roofing or siding project typically take?',
      answer: 'Project timelines vary depending on the size, materials, and complexity. Most residential roofing or siding jobs are completed in a few days to a couple of weeks. We provide a detailed schedule during your free consultation to keep your project on track.',
    },
    {
      question: 'Do you offer warranties on your roofing and siding work?',
      answer: 'Absolutely. We stand behind our work with material and workmanship warranties. This ensures your investment is protected, and you can enjoy peace of mind knowing your roof or siding is built to last.',
    },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Roofing and Siding Contractor in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Professional roofing and siding contractor in Salt Lake City, UT. Durable roofs, stylish siding, and expert installation for residential and commercial properties." />
        <meta name="keywords" content="roofing, siding, contractor, salt lake city, utah, roof repair, siding installation, home exterior, commercial roofing" />
        <meta property="og:title" content="Roofing and Siding Contractor in Salt Lake City, UT" />
        <meta property="og:description" content="Professional roofing and siding contractor in Salt Lake City, UT. Expert installation and durable solutions." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Roofing and Siding Contractor in Salt Lake City, UT
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 leading-relaxed transition-all duration-1200 ease-out">
            Transform your home or business with professional roofing and siding services in Salt Lake City, UT. From shielding your property against the heavy winter snow in the Wasatch Mountains to withstanding the hot, dry summers near the Great Salt Lake, our team delivers solutions built to last.
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
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Whether you're upgrading a roof overlooking Sugar House, installing new siding in The Avenues, or planning a full exterior renovation near downtown or Liberty Park, we provide tailored services that combine durability, style, and exceptional value.
            </p>
          </div>
        </div>
      </section>

      {/* Solutions Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600">
            High-Quality Roofing and Siding Solutions
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12 max-w-3xl">
            We understand that every home and business is unique. That's why we offer comprehensive roofing and siding solutions that fit your property, lifestyle, and budget.
          </p>

          <div className="space-y-8">
            {solutions.map((solution, idx) => (
              <div
                key={idx}
                className={`group flex gap-6 p-6 md:p-8 bg-white rounded-xl border-l-4 border-accent-gold shadow-md hover:shadow-xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-1 transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="text-5xl transition-transform duration-500 ease-out group-hover:scale-110">
                    {solution.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary-700 mb-3">{solution.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{solution.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-b from-white to-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600">
            Why Choose Us for Your Roofing and Siding Needs
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12 max-w-3xl">
            Our approach goes beyond installing roofs and siding. We focus on delivering results that meet your functional requirements while creating spaces you'll enjoy for years.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className={`group rounded-xl bg-white border-2 border-primary-200 hover:border-accent-gold shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 overflow-hidden transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex justify-center mb-4 text-5xl transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                    {item.icon}
                  </div>
                  <h3 className="mb-4 text-primary-700 font-bold text-lg md:text-xl transition-all duration-300 ease-out group-hover:text-accent-gold group-hover:translate-x-1 text-center">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base transition-all duration-300 ease-out group-hover:text-gray-700">
                    {item.description}
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
            Our Roofing and Siding Process Made Simple
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12">
            We believe a clear, reliable process is key to a successful project. Here's how we guide you from initial consultation to finished installation:
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Get Your Free Roofing and Siding Estimate Today</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Ready to upgrade your home or commercial property with durable, stylish roofing and siding? Contact us today for a free estimate. Our team in Salt Lake City, UT, is here to answer your questions, guide you through your options, and deliver a solution tailored to your property. Protect your investment, enhance your curb appeal, and enjoy peace of mind with roofing and siding services you can rely on.
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
