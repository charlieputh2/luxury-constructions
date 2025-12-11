import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaQuestionCircle, FaLeaf, FaWater, FaLightbulb } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function LandscapingDesignPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const services = [
    {
      title: 'Landscape Design & Outdoor Planning',
      description: 'Transform your outdoor space with landscape design and planning in Salt Lake City, UT. We create custom layouts for patios, walkways, greenery, hardscapes, and more, balancing beauty, function, and durability for your property.',
      images: ['/landscaping.jpg', '/outdoor.png'],
    },
  ]

  const whyChoose = [
    'Creative Design: Our landscape designers create custom plans that match your vision and enhance your property.',
    'Quality Materials: We use premium plants, hardscaping materials, and sustainable practices.',
    'Professional Installation: Our experienced team ensures proper installation and long-term plant health.',
    'Maintenance Support: We provide guidance on maintaining your landscape for years to come.',
  ]

  const benefits = [
    {
      title: 'Enhance Curb Appeal',
      description: 'A well-designed landscape significantly improves your property\'s appearance and first impression.',
    },
    {
      title: 'Increase Property Value',
      description: 'Quality landscaping adds substantial value to your residential or commercial property.',
    },
    {
      title: 'Create Outdoor Living Space',
      description: 'Transform your yard into a functional, beautiful space for relaxation and entertainment.',
    },
  ]

  const processSteps = [
    {
      title: 'Consultation & Assessment',
      description: 'We meet with you to understand your vision, assess your property, and discuss your budget and timeline.',
    },
    {
      title: 'Design & Planning',
      description: 'Our designers create detailed landscape plans with plant selections, hardscaping, and layout.',
    },
    {
      title: 'Professional Installation',
      description: 'Our team installs plants, hardscapes, and features with attention to detail and quality.',
    },
    {
      title: 'Final Walkthrough & Care Tips',
      description: 'We perform a final inspection and provide guidance on maintaining your new landscape.',
    },
  ]

  const faqs = [
    {
      question: 'How long does the landscape design process take?',
      answer: 'The design phase typically takes 1–3 weeks depending on project size, complexity, and the number of revisions. Larger or highly customized plans may take slightly longer.',
    },
    {
      question: 'What landscaping styles work best in Salt Lake City\'s climate?',
      answer: 'Drought-tolerant, xeriscape, modern desert, mountain rustic, and native Utah plant landscapes perform best due to the dry summer heat, cold winters, and low precipitation.',
    },
    {
      question: 'Can you design low-maintenance landscaping?',
      answer: 'Absolutely. We specialize in water-wise designs using native plants, rock features, artificial turf, and simple hardscaping that require minimal upkeep.',
    },
    {
      question: 'Do I need a design before starting landscaping installation?',
      answer: 'Yes. A professional design serves as a roadmap for construction, preventing mistakes, saving money, and ensuring a cohesive final result.',
    },
    {
      question: 'Do you also install the landscape after designing it?',
      answer: 'Yes, we offer complete installation services including planting, hardscaping, irrigation, lighting, and more. You can choose design-only or full-service design and build.',
    },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Landscaping Services in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Professional landscape design and installation services in Salt Lake City, UT. Custom outdoor spaces with sustainable practices." />
        <meta name="keywords" content="landscaping, landscape design, outdoor planning, salt lake city, gardens, hardscaping" />
        <meta property="og:title" content="Landscaping Services in Salt Lake City, UT" />
        <meta property="og:description" content="Professional landscape design and installation services in Salt Lake City, UT." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Landscaping Services
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 transition-all duration-1200 ease-out">
            Professional landscape design and installation in Salt Lake City, UT
          </p>
          <Link
            href="tel:(385)227-4522"
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">Landscaping Design Services in Salt Lake City, UT</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Transform your outdoor space into a stunning, functional, and lasting landscape with professional Landscaping Design Services in Salt Lake City, UT. Whether you're improving a family home in Sugar House, enhancing a rental property near the University of Utah, or designing a luxurious outdoor retreat in The Avenues, expert landscaping brings beauty, value, and comfort to any property.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Salt Lake City's unique climate—snowy winters, hot dry summers, and dramatic temperature swings—requires thoughtful, climate-responsive landscape design. Our team creates custom landscapes that thrive year-round while complementing your lifestyle, budget, and aesthetic preferences. From modern minimalist layouts to lush natural environments, we deliver landscapes built to impress for years to come.
            </p>
          </div>
        </div>
      </section>

      {/* Why Professional Landscape Design Matters */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 transition-all duration-300 hover:text-primary-600">
            Why Professional Landscape Design Matters
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12">
            Great landscaping is more than planting shrubs or laying down sod. It's a creative and technical process that blends architecture, horticulture, and artistry. With Salt Lake City's elevation and diverse microclimates, a professional approach ensures your landscaping stays healthy, functional, and visually appealing throughout all four seasons.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12">
            Here's why homeowners and businesses choose expert designers:
          </p>

          <div className="space-y-4">
            {[
              { title: 'Durability', desc: 'Plant choices and materials that can withstand Utah\'s climate' },
              { title: 'Functionality', desc: 'Better use of space, walkways, patios, outdoor living areas' },
              { title: 'Water Efficiency', desc: 'Smart irrigation, drought-tolerant plants, and xeriscaping' },
              { title: 'Added Property Value', desc: 'Beautiful landscaping increases curb appeal and ROI' },
              { title: 'Personalization', desc: 'Custom layouts tailored to your vision and lifestyle' },
            ].map((item, idx) => (
              <div key={idx} className={`flex items-start gap-4 p-4 bg-white rounded-lg border-l-4 border-accent-gold transform transition-all duration-1200 ease-out ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`} style={{ transitionDelay: `${idx * 75}ms` }}>
                <FaCheckCircle className="text-accent-gold text-2xl flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-primary-700 mb-1">{item.title}</h3>
                  <p className="text-gray-600 text-base">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Landscaping Design Services */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 transition-all duration-300 hover:text-primary-600">
            Our Landscaping Design Services in Salt Lake City, UT
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12">
            We offer full-service landscape design solutions for residential and commercial properties across Salt Lake City, Utah. Our design process prioritizes creativity, long-term sustainability, and practical use of space.
          </p>

          <div className="space-y-8">
            {[
              {
                num: '1',
                title: 'Custom Landscape Design & Planning',
                desc: 'Our team begins with an on-site assessment to understand your property, goals, and preferred style. Then we create a detailed design plan with layout drawings, plant selections, material lists, and more. Whether you prefer a modern, rustic, tropical, desert-inspired, or traditional look, we turn your ideas into a cohesive design roadmap.'
              },
              {
                num: '2',
                title: 'Xeriscaping & Water-Wise Landscaping',
                desc: 'Salt Lake City is known for dry summers and water restrictions. Xeriscaping provides a low-maintenance, eco-friendly solution using drought-tolerant plants, rock beds, mulch, native grasses, and efficient irrigation. We design xeriscapes that reduce water usage while still maintaining beauty and depth.'
              },
              {
                num: '3',
                title: 'Hardscape Design (Patios, Walkways, Decks & More)',
                desc: 'Hardscaping adds structure, function, and style to your outdoor space. Our designers create durable and attractive features such as paver patios, stone walkways, outdoor kitchens, retaining walls, fire pits, and pergolas. Hardscaping is especially popular in neighborhoods like Holladay and Millcreek, where homeowners want long-lasting outdoor living spaces.'
              },
              {
                num: '4',
                title: 'Garden & Planting Design',
                desc: 'Our horticulture experts recommend the best trees, shrubs, plants, and flowers that thrive in Salt Lake City\'s unique climate. From colorful perennial gardens to evergreen privacy hedges, we balance beauty with resilience.'
              },
              {
                num: '5',
                title: 'Outdoor Lighting Design',
                desc: 'Professional lighting enhances safety, ambiance, and nighttime curb appeal. We design low-voltage LED lighting systems for pathways, gardens, entryways, decks, patios, and architectural accents.'
              },
              {
                num: '6',
                title: 'Lawn Installation & Turf Options',
                desc: 'We design lawns that match your maintenance preference and property needs. Options include natural sod, drought-tolerant turf blends, artificial turf, and low-maintenance lawn alternatives.'
              },
              {
                num: '7',
                title: 'Irrigation System Design',
                desc: 'Modern irrigation planning ensures plants get the water they need without waste. We design systems such as smart irrigation, drip systems, and zone-based sprinklers. This is essential for properties around the Wasatch Front where water conservation is a priority.'
              },
            ].map((item, idx) => (
              <div key={idx} className={`flex gap-6 p-6 md:p-8 bg-gradient-to-r from-primary-50 to-white rounded-xl border-l-4 border-accent-gold transform transition-all duration-1200 ease-out ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`} style={{ transitionDelay: `${idx * 75}ms` }}>
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent-gold text-primary-900 font-bold text-lg">
                    {item.num}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary-700 mb-2">{item.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <div className={`text-center mb-12 md:mb-16 transform transition-all duration-1200 ease-out ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`}>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600 hover:translate-x-1">
              Our Landscaping Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto transition-all duration-300">
              Custom landscape design and professional installation
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl overflow-hidden border-2 border-primary-200 hover:border-accent-gold hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 group transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                {/* Service Images */}
                {service.images && service.images.length > 0 && (
                  <div className="h-48 overflow-hidden bg-gray-200 transition-transform duration-500 ease-out group-hover:scale-110 relative">
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}

                {/* Service Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-primary-700 mb-4 group-hover:text-accent-gold transition-all duration-300 group-hover:translate-x-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-all duration-300 group-hover:translate-x-0.5">
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
            Why Choose Our Landscaping Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            We\'re committed to creating landscapes that enhance your property while respecting the environment and your budget.
          </p>

          <div className="space-y-4">
            {whyChoose.map((item, idx) => (
              <div key={idx} className="flex items-start gap-4 p-4 bg-gradient-to-br from-primary-50 to-white rounded-lg border-l-4 border-accent-gold transform transition-all duration-500 hover:translate-x-2">
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
            The Advantages of Our Landscaping
          </h2>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-6 md:p-8 border-2 border-primary-200 hover:border-accent-gold hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <h3 className="text-xl md:text-2xl font-bold text-primary-700 mb-4 group-hover:text-accent-gold transition-all duration-300">
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
            Our Landscaping Process
          </h2>

          <div className="space-y-6">
            {processSteps.map((step, idx) => (
              <div
                key={idx}
                className={`flex gap-6 p-6 md:p-8 bg-gradient-to-r from-primary-50 to-white rounded-xl border-l-4 border-accent-gold hover:shadow-lg transition-all duration-500 transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="flex-shrink-0">
                  <div className="flex items-center justify-center h-12 w-12 rounded-full bg-accent-gold text-primary-900 font-bold text-lg">
                    {idx + 1}
                  </div>
                </div>
                <div className="flex-grow">
                  <h3 className="text-xl font-bold text-primary-700 mb-2">{step.title}</h3>
                  <p className="text-gray-600 text-base">{step.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      {isClient && (
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
      )}

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Landscape?</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Contact us today for a free consultation and estimate
          </p>
          <Link
            href="tel:(385)227-4522"
            className="inline-block px-8 py-4 bg-accent-gold text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Get Your Free Estimate
          </Link>
        </div>
      </section>
    </>
  )
}
