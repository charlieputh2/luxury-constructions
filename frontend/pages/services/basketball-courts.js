import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaQuestionCircle, FaBasketballBall, FaShieldAlt, FaHammer } from 'react-icons/fa'
import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function BasketballCourtsPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [expandedFaq, setExpandedFaq] = useState(null)

  const courtTypes = [
    {
      icon: <FaBasketballBall className="text-accent-gold text-4xl" />,
      title: 'Residential Basketball Courts',
      description: 'Perfect for families, athletes, and basketball lovers. Our residential courts are designed for consistent ball bounce, safe play, and long-term durability. Whether you want a compact half-court or a full key setup, we\'ll maximize your yard without sacrificing quality.',
    },
    {
      icon: <FaShieldAlt className="text-accent-gold text-4xl" />,
      title: 'Commercial & Community Courts',
      description: 'We work with schools, HOAs, churches, multi-housing communities, gyms, and city parks to build high-performance courts designed for heavy use. These surfaces are engineered to withstand frequent play, weather fluctuations, and foot traffic.',
    },
    {
      icon: <FaHammer className="text-accent-gold text-4xl" />,
      title: 'Indoor & Outdoor Court Options',
      description: 'We build both indoor hardwood-style courts and outdoor courts equipped with advanced modular surfaces. Whatever your vision is, we\'ll deliver a court that performs well and looks professional.',
    },
  ]

  const weatherResistance = [
    'UV exposure',
    'Freeze–thaw cycles',
    'Moisture and snow accumulation',
    'Surface cracking',
    'Warping and fading',
  ]

  const materials = [
    {
      title: 'Post-Tensioned Concrete',
      description: 'A premium foundation option that reduces cracking and keeps the surface stable for decades.',
    },
    {
      title: 'Asphalt Basketball Court Base',
      description: 'A reliable and practical solution for residential and community courts.',
    },
    {
      title: 'Modular Performance Tiles',
      description: 'Shock-absorbing, slip-resistant, UV-stable, and available in a wide range of colors.',
    },
    {
      title: 'Professional Coatings & Striping',
      description: 'High-quality, non-slip coatings that stay vibrant and withstand weather and gameplay.',
    },
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Site Evaluation & Planning',
      description: 'We inspect the space, check grading, analyze soil conditions, and determine the best layout for your basketball court.',
    },
    {
      step: '2',
      title: 'Drainage Engineering',
      description: 'Utah\'s storm runoff and melting snow require proper drainage. We design systems that prevent pooling and protect your investment.',
    },
    {
      step: '3',
      title: 'Foundation Construction',
      description: 'A strong foundation is the key to a long-lasting court. We prepare and install a base that resists cracking and settling.',
    },
    {
      step: '4',
      title: 'Surface Installation',
      description: 'We install high-quality surfacing materials designed for traction, ball response, and all-weather performance.',
    },
    {
      step: '5',
      title: 'Line Striping',
      description: 'Choose from regulation sizes or custom layouts depending on your space and play style.',
    },
    {
      step: '6',
      title: 'Add-Ons & Enhancements',
      description: 'Customize your court with lighting, fencing, sports accessories, multi-sport options, and more.',
    },
  ]

  const whyChoose = [
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Local Climate Expertise',
      description: 'We understand the unique challenges of building outdoor courts in Salt Lake City and engineer solutions that hold up year after year.',
    },
    {
      icon: <FaShieldAlt className="text-accent-gold text-4xl" />,
      title: 'Premium Craftsmanship',
      description: 'Our team uses advanced techniques, high-quality materials, and precise installation methods to ensure exceptional results.',
    },
    {
      icon: <FaArrowRight className="text-accent-gold text-4xl" />,
      title: 'Customization Options',
      description: 'Colors, markings, logos, layouts, accessories — your court can be fully personalized.',
    },
  ]

  const faqs = [
    {
      question: 'How long does it take to build a basketball court in Salt Lake City?',
      answer: 'Timelines vary depending on the size, location, and type of surface. Most residential courts are completed within a few weeks, while larger commercial courts may require additional time for engineering, layout, and finishing.',
    },
    {
      question: 'What kind of surface is best for outdoor basketball courts in Utah?',
      answer: 'Modular athletic tiles and post-tensioned concrete are popular choices because they withstand extreme temperatures, UV exposure, snow, and constant use. They\'re also low-maintenance and offer excellent traction.',
    },
    {
      question: 'Can you build a basketball court in a small or sloped backyard?',
      answer: 'Yes. Even compact or uneven spaces can be engineered with grading, retaining solutions, or custom court layouts. We specialize in maximizing limited space without compromising performance.',
    },
    {
      question: 'Are custom court colors and logos available?',
      answer: 'Definitely. You can choose from a wide selection of colors and even add custom graphics, school colors, team themes, or personalized markings.',
    },
    {
      question: 'What maintenance does a basketball court require in Salt Lake City?',
      answer: 'Maintenance is minimal and usually involves keeping the surface clean, checking drainage after storms, and inspecting coatings or tiles periodically. We build courts designed for long-term performance with minimal upkeep.',
    },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Basketball Court Construction in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Professional basketball court construction in Salt Lake City, UT. Residential, commercial, and community courts with expert design and installation." />
        <meta name="keywords" content="basketball court, court construction, salt lake city, utah, residential court, commercial court, sports court, outdoor court" />
        <meta property="og:title" content="Basketball Court Construction in Salt Lake City, UT" />
        <meta property="og:description" content="Professional basketball court construction in Salt Lake City, UT. Custom designs and expert installation." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Basketball Court Construction in Salt Lake City, UT
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 leading-relaxed transition-all duration-1200 ease-out">
            Bring your vision to life with professional Basketball Court Construction in Salt Lake City, UT. Whether you're imagining a residential half-court overlooking the Wasatch Mountains, a full-sized court for a school or church near Liberty Park, or a high-performance playing surface for your recreation center, our team builds courts that are durable, beautiful, and engineered to last.
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
              Salt Lake City's unique climate snowy winters, summer heat, and year-round temperature swings means your basketball court must be constructed with the right materials and design strategies. We build courts specifically tailored for Utah weather, ensuring long-term performance and minimal maintenance.
            </p>
          </div>
        </div>
      </section>

      {/* Court Types Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600">
            Custom Basketball Court Construction for Any Space
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12 max-w-3xl">
            We offer full-service basketball court construction that adapts to your location, goals, and available space.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {courtTypes.map((court, idx) => (
              <div
                key={idx}
                className={`group rounded-xl bg-white border-2 border-primary-200 hover:border-accent-gold shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 overflow-hidden transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex justify-center mb-4 text-5xl transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                    {court.icon}
                  </div>
                  <h3 className="mb-4 text-primary-700 font-bold text-lg md:text-xl transition-all duration-300 ease-out group-hover:text-accent-gold group-hover:translate-x-1 text-center">
                    {court.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base transition-all duration-300 ease-out group-hover:text-gray-700">
                    {court.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Weather Resistance Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 transition-all duration-300 hover:text-primary-600">
            Engineered for Utah's Weather Conditions
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-8">
            Salt Lake City brings a mix of snow, heat, dryness, and sudden storm seasons. Our courts are built to resist:
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-12">
            {weatherResistance.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-4 p-4 bg-gradient-to-r from-primary-50 to-white rounded-lg border-l-4 border-accent-gold transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <FaCheckCircle className="text-accent-gold text-2xl flex-shrink-0" />
                <span className="text-gray-700 font-semibold">{item}</span>
              </div>
            ))}
          </div>

          <h3 className="text-2xl md:text-3xl font-bold text-primary-700 mb-8 transition-all duration-300 hover:text-primary-600">
            High-Performance Materials We Use
          </h3>

          <div className="space-y-6">
            {materials.map((material, idx) => (
              <div
                key={idx}
                className={`flex gap-4 p-6 bg-gradient-to-r from-primary-50 to-white rounded-xl border-l-4 border-accent-gold shadow-md hover:shadow-lg transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-1 transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <FaCheckCircle className="text-accent-gold text-2xl mt-1 flex-shrink-0" />
                <div className="flex-grow">
                  <h4 className="font-bold text-primary-700 mb-2">{material.title}</h4>
                  <p className="text-gray-600 text-sm">{material.description}</p>
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
            Our Complete Basketball Court Construction Process
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12">
            We handle everything from planning to finishing touches.
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

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-b from-white to-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600">
            Why Salt Lake City Homeowners & Businesses Choose Us
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12 max-w-3xl">
            We're committed to delivering exceptional basketball court construction that meets your unique needs and exceeds your expectations.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Start Your Basketball Court Project Today</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Whether you're building a backyard court for casual play or a professional-grade surface for your community or business, we're here to help bring your vision to life. Our Salt Lake City basketball court specialists provide expert guidance, high-quality materials, and exceptional workmanship from start to finish.
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
