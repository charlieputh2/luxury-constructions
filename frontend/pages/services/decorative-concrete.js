import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaQuestionCircle, FaPalette, FaShieldAlt, FaDollarSign } from 'react-icons/fa'
import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function DecorativeConcreteP() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [expandedFaq, setExpandedFaq] = useState(null)

  const whyChoose = [
    {
      icon: <FaPalette className="text-accent-gold text-4xl" />,
      title: 'Custom Designs Tailored to Your Style',
      description: 'Every property is unique, and we treat it that way. Our decorative concrete services allow for fully customized designs, from stamped patterns and colored finishes to textured overlays. Whether you want a modern look or a classic aesthetic, we create a surface that fits your style perfectly.',
    },
    {
      icon: <FaShieldAlt className="text-accent-gold text-4xl" />,
      title: 'Long-Lasting and Durable Concrete',
      description: 'We use only the highest quality materials and professional techniques to ensure your concrete withstands Salt Lake City\'s changing seasons, heavy foot traffic, and daily wear. This focus on durability means your investment looks great and performs well for years to come.',
    },
    {
      icon: <FaDollarSign className="text-accent-gold text-4xl" />,
      title: 'Value and Affordable Solutions',
      description: 'Beautiful concrete shouldn\'t break the bank. Our team provides competitive pricing without sacrificing quality, ensuring your decorative concrete project delivers excellent value and lasting satisfaction.',
    },
  ]

  const services = [
    {
      icon: <FaPalette className="text-accent-gold text-4xl" />,
      title: 'Stamped and Textured Concrete',
      description: 'From driveways and patios to walkways and pool decks, our stamped and textured concrete options mimic high-end materials like stone, brick, or tile. This gives your surfaces a premium look without the premium cost.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Colored and Stained Concrete',
      description: 'Enhance your property\'s visual appeal with vibrant colored or stained concrete. These finishes allow you to match existing architecture, landscaping, or personal style, creating a cohesive and elegant outdoor space.',
    },
    {
      icon: <FaArrowRight className="text-accent-gold text-4xl" />,
      title: 'Resurfacing and Decorative Overlays',
      description: 'Old or worn concrete doesn\'t have to be replaced. Our resurfacing and overlay services breathe new life into tired surfaces, providing a stylish, durable, and functional finish that transforms your property instantly.',
    },
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Consultation and Design Planning',
      description: 'We start by understanding your goals, preferences, and budget. Our team discusses design options, patterns, colors, and textures to ensure the finished product aligns perfectly with your vision.',
    },
    {
      step: '2',
      title: 'Material Selection and Preparation',
      description: 'Only the finest concrete mixes and sustainable materials are used in every project. Proper site preparation and high-quality materials ensure durability, strength, and aesthetic excellence.',
    },
    {
      step: '3',
      title: 'Installation with Precision',
      description: 'Our experienced team handles every installation step carefully, from pouring and stamping to coloring and finishing. Each detail is executed with precision to create a flawless decorative concrete surface.',
    },
    {
      step: '4',
      title: 'Quality Assurance and Project Completion',
      description: 'Before finalizing your project, we conduct a thorough inspection and walkthrough. Your satisfaction is our priority, and we ensure every surface meets our high standards for durability, beauty, and functionality.',
    },
  ]

  const faqs = [
    {
      question: 'What types of decorative concrete work do you provide in Salt Lake City?',
      answer: 'We offer a wide range of decorative concrete solutions throughout Salt Lake City, UT, including stamped and textured concrete for driveways, patios, and walkways, as well as colored and stained concrete finishes. We also provide resurfacing and decorative overlays to revitalize older concrete surfaces while enhancing both durability and aesthetic appeal.',
    },
    {
      question: 'How does Salt Lake City\'s weather affect decorative concrete?',
      answer: 'Salt Lake City experiences snowy winters, hot summers, and fluctuating seasonal temperatures. Our decorative concrete surfaces are designed to withstand these conditions. By using high-quality concrete mixes and proper installation techniques, we ensure that your surfaces remain crack-resistant, durable, and visually stunning year-round.',
    },
    {
      question: 'Can decorative concrete enhance properties near local landmarks like Temple Square or the Great Salt Lake?',
      answer: 'Absolutely. Whether you\'re upgrading a patio with views of the Wasatch Mountains, designing a walkway near Temple Square, or installing a driveway overlooking the Great Salt Lake, our decorative concrete solutions are customized to complement the surrounding environment and architecture while providing long-lasting functionality.',
    },
    {
      question: 'How long does decorative concrete last, and how should it be maintained?',
      answer: 'With proper installation and care, decorative concrete can last decades. Routine cleaning, sealing, and minor repairs help maintain its color, texture, and durability. Our team provides guidance on the best maintenance practices to ensure your investment continues to look beautiful and perform well over time.',
    },
    {
      question: 'Is decorative concrete more expensive than traditional concrete?',
      answer: 'While decorative concrete can have a higher upfront cost than plain concrete, it often provides better value over time. The combination of aesthetic appeal, durability, and reduced maintenance makes it a cost-effective solution for both residential and commercial projects. Our competitive pricing ensures you get quality results without overspending.',
    },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Decorative Concrete Contractor in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Professional decorative concrete contractor in Salt Lake City, UT. Stamped, stained, and colored concrete for driveways, patios, and walkways. Custom designs and expert installation." />
        <meta name="keywords" content="decorative concrete, stamped concrete, stained concrete, concrete contractor, salt lake city, utah, driveways, patios, walkways, concrete resurfacing" />
        <meta property="og:title" content="Decorative Concrete Contractor in Salt Lake City, UT" />
        <meta property="og:description" content="Professional decorative concrete contractor in Salt Lake City, UT. Custom designs and expert installation." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Decorative Concrete Contractor in Salt Lake City, UT
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 leading-relaxed transition-all duration-1200 ease-out">
            Looking to elevate the look and functionality of your property in Salt Lake City, UT? As a leading Decorative Concrete Contractor in Salt Lake City, UT, we specialize in transforming ordinary concrete surfaces into beautiful, durable, and customized spaces that withstand the region's snowy winters, hot summers, and seasonal temperature swings.
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
              From driveways near the Wasatch Mountains to patios overlooking the Great Salt Lake or walkways around Temple Square, our services combine long-lasting craftsmanship with stunning design. Whether you're planning a residential upgrade or a commercial project, we deliver solutions tailored to your needs, aesthetic preferences, and budget, ensuring your concrete surfaces remain functional and stylish year-round.
            </p>
          </div>
        </div>
      </section>

      {/* Transform Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-8 transition-all duration-300 hover:text-primary-600">
            Transform Your Space with Decorative Concrete
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Concrete doesn't have to be plain or dull. With our decorative concrete solutions, you can turn ordinary surfaces into visually striking features that enhance both the appearance and value of your property. Imagine a driveway with a stamped stone pattern, a patio with a rich stained finish, or a walkway that perfectly complements your landscaping. Our team helps you explore the possibilities, selecting patterns, colors, and textures that bring your vision to life while providing long-term durability. As your Decorative Concrete Contractor in Salt Lake City, UT, we combine functionality and style to make every surface a centerpiece of your property.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-b from-white to-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600">
            Why Choose Our Decorative Concrete Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12 max-w-3xl">
            We understand that choosing the right contractor is about more than price—it's about trust, reliability, and quality results. Here's why homeowners and businesses in Salt Lake City choose us for decorative concrete projects:
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

      {/* Services Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600">
            Our Decorative Concrete Services in Salt Lake City
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12 max-w-3xl">
            We offer a full range of decorative concrete solutions for residential and commercial properties in Salt Lake City, UT:
          </p>

          <div className="space-y-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`flex gap-6 p-6 md:p-8 bg-gradient-to-r from-primary-50 to-white rounded-xl border-l-4 border-accent-gold shadow-md hover:shadow-xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-1 transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="text-5xl transition-transform duration-500 ease-out group-hover:scale-110">
                    {service.icon}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary-700 mb-3">{service.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{service.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 transition-all duration-300 hover:text-primary-600">
            How We Work: Our Process from Start to Finish
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12">
            Our streamlined process ensures every project is completed efficiently, with transparency and attention to detail at every step.
          </p>

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Upgrade Your Concrete Surfaces?</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Transform your home or business with decorative concrete solutions that combine beauty, durability, and value. As your trusted Decorative Concrete Contractor in Salt Lake City, UT, we make the process simple, transparent, and tailored to your needs. Contact us now to schedule a consultation or request a free estimate. Let us help you design and install concrete surfaces that elevate your property and provide lasting appeal.
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
