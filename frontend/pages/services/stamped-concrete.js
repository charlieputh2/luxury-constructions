import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaQuestionCircle, FaPalette, FaShieldAlt, FaDollarSign } from 'react-icons/fa'
import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function StampedConcretePage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [expandedFaq, setExpandedFaq] = useState(null)

  const features = [
    {
      icon: <FaPalette className="text-accent-gold text-4xl" />,
      title: 'Stunning Design Options Built For Utah Weather',
      description: 'Salt Lake City\'s unique climate calls for concrete that can handle temperature swings, sunlight, snow, and moisture. We build stamped concrete surfaces that are designed for long-term performance in Utah weather. Whether you want a modern slate pattern for your patio, a textured driveway that boosts curb appeal, or a decorative walkway that ties your landscape together, we offer a wide selection of stamps, colors, and finishes.',
    },
    {
      icon: <FaShieldAlt className="text-accent-gold text-4xl" />,
      title: 'Built To Last With Quality Materials And Craftsmanship',
      description: 'Stamped concrete should not only look great on day one but also maintain its appearance for years. We use high-quality concrete mixes, premium color hardeners, durable sealers, and industry-proven installation techniques. This helps minimize cracking, fading, and other common issues that can happen with poorly installed decorative concrete. Every detail matters — from sub-base preparation to finishing textures to final sealing.',
    },
    {
      icon: <FaDollarSign className="text-accent-gold text-4xl" />,
      title: 'A Cost Effective Upgrade That Boosts Curb Appeal',
      description: 'If you want a high-end look without the high-end price tag, stamped concrete is a smart choice. It gives your home or business the appearance of premium materials while staying within a budget that makes sense. Maintenance is minimal, surfaces last for many years, and the overall return on investment makes this one of the most attractive upgrades for property owners in Salt Lake City.',
    },
  ]

  const whyChoose = [
    {
      title: 'Why Homeowners And Businesses Choose Our Stamped Concrete',
      description: 'Choosing the right concrete contractor can make or break the outcome of your project. That\'s why clients rely on us to deliver Stamped Concrete Services in Salt Lake City UT with a focus on quality, clear communication, and dependable service. We treat every project like a long-term investment, making sure you get durable materials, proper installation techniques, and a finished surface that can stand up to years of foot traffic, vehicle weight, and changing weather conditions. From the first call to the final walkthrough, we\'re here to make the process smooth and stress-free.',
    },
    {
      title: 'Custom Patterns And Finishes For Driveways Patios And Walkways',
      description: 'Stamped concrete is all about customization. We offer a wide variety of patterns that mimic natural stone, pavers, brick, tile, and wood. Whether you\'re updating a residential driveway, creating an inviting patio space, or adding a walkway that complements your landscape, we design each surface to match your style and functional needs. Colors, textures, and finishes are customized to bring out the character you want for your property.',
    },
  ]

  const processSteps = [
    {
      step: '1',
      title: 'On Site Consultation And Project Planning',
      description: 'We begin by visiting your property, discussing your ideas, reviewing options, and helping you choose patterns, colors, and layout designs. This first step ensures we understand exactly what you envision.',
    },
    {
      step: '2',
      title: 'Material Selection Stamps Colors And Finish Options',
      description: 'Next, we walk you through the available textures, patterns, and colors. Whether you prefer a natural stone stamp, a seamless slate finish, or a wood-plank texture, we help you select materials that match your design goals and long-term durability needs.',
    },
    {
      step: '3',
      title: 'Precise Installation And Finishing',
      description: 'This is where craftsmanship truly matters. We prepare the sub-base, pour and level the concrete, apply color hardeners, and carefully stamp the surface. Our team focuses on clean lines, strong structure, and consistent texture to ensure a long-lasting result.',
    },
    {
      step: '4',
      title: 'Sealing Cleanup And Final Walkthrough',
      description: 'Once the concrete cures, we apply a premium sealer that protects against moisture, stains, and weather exposure. After final cleanup, we walk you through the project to make sure everything meets your expectations.',
    },
  ]

  const faqs = [
    {
      question: 'What makes stamped concrete a good choice for Salt Lake City\'s weather?',
      answer: 'Stamped concrete performs extremely well in Salt Lake City because it\'s designed to handle the area\'s freeze–thaw cycles, snow-heavy winters, and hot summers. With proper installation and sealing, it resists cracking, fading, and moisture damage. This makes it an ideal option for patios in Sugar House, driveways near the Wasatch Mountains, or walkways throughout downtown.',
    },
    {
      question: 'How long does stamped concrete last in Salt Lake City UT?',
      answer: 'When installed using high-quality materials and sealed regularly, stamped concrete can last decades in Salt Lake City\'s climate. Our process includes strong concrete mixes, reinforced sub-base preparation, and premium sealers that protect against Utah weather, high UV exposure, and year-round temperature swings.',
    },
    {
      question: 'Can you match stamped concrete designs to homes and businesses in different Salt Lake City neighborhoods?',
      answer: 'Absolutely. Whether your property is in Avenues, Sugar House, Millcreek, or near Temple Square, we offer patterns, textures, and colors that complement local architectural styles. From rustic stone looks to modern slate finishes, we tailor every design to the character of the neighborhood and the property.',
    },
    {
      question: 'What are the maintenance requirements for stamped concrete?',
      answer: 'Stamped concrete requires very minimal maintenance. Basic cleaning and resealing every few years keep the surface protected from moisture, stains, and weather exposure. Sealing also helps preserve color and texture, ensuring your driveway, walkway, or patio continues looking great long-term.',
    },
    {
      question: 'How long does the stamped concrete installation process take?',
      answer: 'Most stamped concrete projects take a few days from preparation to final sealing, depending on the size and design. The concrete needs time to cure properly, and weather conditions may influence the schedule. We provide clear timelines during consultation and keep you updated at every stage.',
    },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Stamped Concrete Services in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Professional stamped concrete services in Salt Lake City, UT. Custom patterns, colors, and finishes for driveways, patios, and walkways. Built for Utah weather." />
        <meta name="keywords" content="stamped concrete, concrete services, salt lake city, utah, driveways, patios, walkways, decorative concrete, stone patterns" />
        <meta property="og:title" content="Stamped Concrete Services in Salt Lake City, UT" />
        <meta property="og:description" content="Professional stamped concrete services in Salt Lake City, UT. Custom designs and expert installation." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Stamped Concrete Services in Salt Lake City UT
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 leading-relaxed transition-all duration-1200 ease-out">
            If you're looking for a beautiful way to upgrade your outdoor spaces, our Stamped Concrete Services in Salt Lake City UT deliver a perfect blend of strength, style, and long-term value. Whether it's a backyard patio overlooking the Wasatch Mountains, a driveway in Sugar House, or a commercial walkway near downtown Salt Lake and Temple Square, stamped concrete offers the timeless look of natural stone, brick, or wood without the constant upkeep.
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
              Our installations are designed to withstand heavy snow in winter, intense summer heat, and the freeze-thaw cycles that define Utah weather. Every project is planned with your goals, budget, and aesthetic preferences in mind, ensuring you get a surface that enhances your property and holds up beautifully through every season.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            {features.map((feature, idx) => (
              <div
                key={idx}
                className={`group rounded-xl bg-white border-2 border-primary-200 hover:border-accent-gold shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 overflow-hidden transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex justify-center mb-4 text-5xl transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                    {feature.icon}
                  </div>
                  <h2 className="mb-4 text-primary-700 font-bold text-lg md:text-xl transition-all duration-300 ease-out group-hover:text-accent-gold group-hover:translate-x-1 text-center">
                    {feature.title}
                  </h2>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base transition-all duration-300 ease-out group-hover:text-gray-700">
                    {feature.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="space-y-12">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className={`transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6 transition-all duration-300 hover:text-primary-600">
                  {item.title}
                </h2>
                <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 transition-all duration-300 hover:text-primary-600">
            How We Deliver Beautiful Stamped Concrete In Salt Lake City
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12">
            Our process is built to keep things simple, organized, and transparent from start to finish. We take the time to understand what you want, offer professional recommendations, and plan your project in a way that keeps quality and timelines on track.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Your Local Partner For Stamped Concrete In Salt Lake City</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            You deserve a concrete contractor who listens, communicates clearly, and delivers high-quality work built for long-term value. If you're ready to enhance your property with durable, customized, and visually striking stamped concrete, our team is here to help. Reach out today to schedule your consultation and discover why so many homeowners and businesses choose us for Stamped Concrete Services in Salt Lake City UT.
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
