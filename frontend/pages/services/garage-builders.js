import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaQuestionCircle, FaHome, FaWarehouse, FaTruck } from 'react-icons/fa'
import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function GarageBuildersPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [expandedFaq, setExpandedFaq] = useState(null)

  const whyChoose = [
    {
      icon: <FaHome className="text-accent-gold text-4xl" />,
      title: 'Custom Garage Designs for Any Property',
      description: 'Every property is different, and we treat it that way. Our team works with you to design garages that match your home\'s architecture and meet your functional needs. From classic single-car garages to expansive multi-car or RV garages, we tailor dimensions, materials, layouts, and finishes to your exact specifications.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Built for Utah Weather and Long-Term Durability',
      description: 'Salt Lake City\'s weather can be extreme, with snowy winters, hot summers, and fluctuating seasonal temperatures. That\'s why we use premium materials, reinforced foundations, and professional building techniques to ensure your garage withstands the elements while maintaining its strength, appearance, and functionality for decades.',
    },
    {
      icon: <FaArrowRight className="text-accent-gold text-4xl" />,
      title: 'A Smooth, Reliable Construction Experience',
      description: 'From your first consultation to the final walkthrough, we prioritize communication, transparency, and efficiency. Clear timelines, detailed planning, and professional execution ensure your garage is completed on schedule, within budget, and to the highest standards.',
    },
  ]

  const garageTypes = [
    {
      icon: <FaHome className="text-accent-gold text-4xl" />,
      title: 'Attached Garage Builds',
      description: 'Attached garages provide convenience and seamless access to your home. We design layouts that integrate perfectly with your property, offering everything from single-car options to multi-car solutions.',
    },
    {
      icon: <FaWarehouse className="text-accent-gold text-4xl" />,
      title: 'Detached Garage Builds',
      description: 'Detached garages are ideal for additional storage, workshops, or hobby spaces. They offer flexibility, privacy, and the ability to create a dedicated area without impacting your main home.',
    },
    {
      icon: <FaTruck className="text-accent-gold text-4xl" />,
      title: 'Multi-Car and RV Garages',
      description: 'Need space for multiple vehicles or a recreational vehicle? Our multi-car and RV garages are built with the dimensions, structural integrity, and design features necessary to accommodate large vehicles while keeping your property safe and organized.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Workshops and Storage Garages',
      description: 'Beyond parking, garages can serve as functional workshops or storage solutions. We customize layouts with workbenches, shelving, and other features to turn your garage into a productive, organized space tailored to your needs.',
    },
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Consultation and Design Planning',
      description: 'We begin by understanding your property, goals, and preferences. During this phase, we discuss materials, styles, layouts, and any specialized features to create a garage plan that perfectly fits your vision.',
    },
    {
      step: '2',
      title: 'Material Selection and Site Prep',
      description: 'High-quality, durable materials are essential for a garage that lasts. We carefully select materials designed to handle Salt Lake City\'s weather while providing a clean, professional look. Proper site preparation ensures a stable foundation, smooth grading, and efficient construction.',
    },
    {
      step: '3',
      title: 'Construction and Structural Build-Out',
      description: 'From foundations and framing to roofing, siding, and finishing touches, every stage of construction is executed with precision. Our team focuses on structural integrity, aesthetic quality, and functionality to deliver a garage that exceeds expectations.',
    },
    {
      step: '4',
      title: 'Final Inspection and Project Completion',
      description: 'Before project completion, we conduct a thorough walkthrough to ensure every detail meets our high standards and your satisfaction. We review the structure, finishes, and functionality, addressing any questions or adjustments before handing over your completed garage.',
    },
  ]

  const faqs = [
    {
      question: 'Can you build garages that withstand Salt Lake City\'s snowy winters and hot summers?',
      answer: 'Yes! Our garages are designed with reinforced foundations and high-quality materials specifically chosen to handle Salt Lake City\'s extreme weather, from heavy snow in the Wasatch Mountains foothills to the hot summer heat near the Great Salt Lake. You can trust your garage to remain durable, safe, and functional year-round.',
    },
    {
      question: 'Do you offer custom garage designs for homes near landmarks like Temple Square?',
      answer: 'Absolutely. Whether your home is near Temple Square, downtown Salt Lake City, or suburban neighborhoods, we design garages that complement your property\'s architecture and surroundings while providing practical storage and workspace solutions.',
    },
    {
      question: 'Can you build detached garages or multi-car garages in Salt Lake City?',
      answer: 'Yes, we specialize in attached garages, detached garages, multi-car garages, and even RV garages. Each structure is customized to fit your property, lifestyle, and long-term needs while maximizing space and curb appeal.',
    },
    {
      question: 'How long does it take to build a custom garage?',
      answer: 'Project timelines vary depending on the type and size of the garage, but our structured process from consultation to final inspection ensures efficient, high-quality construction. Most residential garages are completed within a few weeks to a couple of months.',
    },
    {
      question: 'Can old or existing garage spaces be upgraded or expanded?',
      answer: 'Yes! We offer renovation and expansion services for existing garages, including adding additional bays, workshops, or storage areas. Every project is tailored to meet your functional requirements and design preferences.',
    },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Garage Builders in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Professional garage builders in Salt Lake City, UT. Custom garage designs for attached, detached, multi-car, and RV garages. Built for Utah weather." />
        <meta name="keywords" content="garage builders, garage construction, salt lake city, utah, attached garage, detached garage, multi-car garage, RV garage, custom garage design" />
        <meta property="og:title" content="Garage Builders in Salt Lake City, UT" />
        <meta property="og:description" content="Professional garage builders in Salt Lake City, UT. Custom garage designs and expert construction." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Garage Builders in Salt Lake City, UT
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 leading-relaxed transition-all duration-1200 ease-out">
            Looking to enhance your property with a durable, functional, and attractive garage? Our trusted Garage Builders in Salt Lake City, UT design and build custom garages that meet your unique needs. From attached garages that flow seamlessly with your home to detached garages for extra storage or workshops, we use high-quality materials built to withstand Salt Lake City's snowy winters, hot summers, and seasonal swings.
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
              Whether your home is near the Wasatch Mountains, overlooks the Great Salt Lake, or sits close to Temple Square, we craft garages that complement your property while protecting your vehicles and belongings. From single-car to multi-car and RV garages, every structure is tailored to your lifestyle, layout, and long-term needs.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600">
            Why Homeowners Choose Our Garage Construction
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12 max-w-3xl">
            We understand that building a garage is a big investment, and choosing the right contractor is crucial. Homeowners across Salt Lake City trust us for our professionalism, reliability, and commitment to quality. Here's what sets our garage construction apart:
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

      {/* Garage Types Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600">
            Garage Types We Build
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12 max-w-3xl">
            We offer a variety of garage types to suit residential and commercial needs, all designed to maximize space, functionality, and curb appeal.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {garageTypes.map((type, idx) => (
              <div
                key={idx}
                className={`group rounded-xl bg-gradient-to-br from-white to-primary-50 border-2 border-primary-200 hover:border-accent-gold shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 overflow-hidden transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex justify-center mb-4 text-5xl transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                    {type.icon}
                  </div>
                  <h3 className="mb-4 text-primary-700 font-bold text-lg md:text-xl transition-all duration-300 ease-out group-hover:text-accent-gold group-hover:translate-x-1 text-center">
                    {type.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base transition-all duration-300 ease-out group-hover:text-gray-700">
                    {type.description}
                  </p>
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
            Our Construction Process
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12">
            We believe a well-built garage starts with a well-planned process. Here's how we ensure every project is seamless, reliable, and high-quality:
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
      <section id="faq" className="section-padding bg-white">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Start Your Garage Project?</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            A well-built garage can enhance your property's value, functionality, and overall appeal. As trusted Garage Builders in Salt Lake City, UT, we provide custom, durable, and beautifully designed garages for residential and commercial properties. Contact us today to schedule a consultation or request a free estimate. Let us help you design and build a garage that perfectly fits your property, lifestyle, and long-term needs.
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
