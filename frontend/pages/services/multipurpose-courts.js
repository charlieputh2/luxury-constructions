import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaQuestionCircle } from 'react-icons/fa'
import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function MultipurposeCourtsPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [expandedFaq, setExpandedFaq] = useState(null)

  const combinations = [
    'Basketball + Pickleball',
    'Tennis + Pickleball',
    'Volleyball + Badminton',
    'Futsal + Basketball',
    'And many more custom setups',
  ]

  const buildFor = [
    'Residential yards (small, medium, or full-court setups)',
    'Schools & universities',
    'Recreational centers and gyms',
    'Community parks and HOAs',
    'Commercial sports facilities',
    'Churches, camps, and event venues',
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Consultation & Site Evaluation',
      description: 'We begin with a detailed assessment of your space to determine ideal court size, orientation, drainage, and layout. We walk you through sport combinations, surfacing options, fencing, lighting, and more.',
    },
    {
      step: '2',
      title: 'Custom Design & Layout Planning',
      description: 'Your court design is built around the sports you want to play. We create precise layouts, line markings, color schemes, and accessory placements to ensure safe and accurate play for all court uses.',
    },
    {
      step: '3',
      title: 'Grading & Base Preparation',
      description: 'A strong, stable base is critical for long-term durability. We handle excavation, grading, drainage setup, compaction, and reinforced base materials to ensure the court stays level and performs consistently year-round.',
    },
    {
      step: '4',
      title: 'Court Surfacing & Installation',
      description: 'We install high-quality surfacing built to withstand Utah\'s weather, including concrete, asphalt base with acrylic surfacing, modular sport tiles, and cushioned surfaces. Each option provides excellent traction, shock absorption, ball responsiveness, and color retention.',
    },
    {
      step: '5',
      title: 'Line Marking & Multi-Sport Layout',
      description: 'We apply professional-grade, sport-specific line markings for every activity you want the court to support. Multiple colors help distinguish different sport zones clearly.',
    },
    {
      step: '6',
      title: 'Accessories & Enhancements',
      description: 'Customize your court with basketball hoops, pickleball or tennis nets, volleyball poles, fencing & netting, LED court lighting, windscreens, and custom logos. Everything is installed to regulation standards.',
    },
    {
      step: '7',
      title: 'Final Inspection & Quality Assurance',
      description: 'We ensure your court meets our performance, safety, and durability standards before handing it over to you.',
    },
  ]

  const benefits = [
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Space Efficiency',
      description: 'Maximize the use of your property with a single, versatile playing area.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Cost-Effective Long-Term',
      description: 'Instead of building separate courts, you invest in one high-quality surface that handles multiple sports.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Great for All Ages',
      description: 'Perfect for families, schools, and community spaces where different age groups want to enjoy different sports.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Durable in All Seasons',
      description: 'Our surfacing systems are engineered to handle Salt Lake City\'s freezing winters, summer heat, and shifting temperatures.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Boosts Property Value',
      description: 'A well-built sport court adds long-term appeal, usability, and entertainment value.',
    },
  ]

  const whyChoose = [
    {
      title: 'Local Expertise',
      description: 'We understand how Utah\'s climate affects outdoor surfaces and build courts designed for year-round performance.',
    },
    {
      title: 'Premium Craftsmanship',
      description: 'From the foundation to the finishing touches, everything we build is engineered for strength, safety, and longevity.',
    },
    {
      title: 'Custom Solutions',
      description: 'Every project is tailored—no generic layouts, no shortcuts.',
    },
    {
      title: 'Full-Service Team',
      description: 'Design, excavation, construction, surfacing, accessories—we handle everything in-house.',
    },
    {
      title: 'Reliable Communication & Customer Service',
      description: 'We keep you updated every step of the way, ensuring a smooth and stress-free process.',
    },
  ]

  const faqs = [
    {
      question: 'What sports can be included in a multi-purpose court?',
      answer: 'Most courts can support basketball, pickleball, tennis, volleyball, badminton, futsal, and more. We design each layout based on your preferred sports and available space.',
    },
    {
      question: 'How long does multi-purpose court construction take?',
      answer: 'Timelines vary depending on size, materials, weather, and site conditions. Once we assess your project, we provide a detailed estimated timeframe.',
    },
    {
      question: 'What surfacing options are best for Salt Lake City\'s climate?',
      answer: 'Acrylic-coated concrete, cushioned surfacing, and modular sport tiles are all great choices. Each provides durability against heat, snow, and temperature changes.',
    },
    {
      question: 'Can the court be customized with colors and logos?',
      answer: 'Absolutely. You can choose custom colors, game line combinations, team themes, and even add personal or school logos.',
    },
    {
      question: 'Do you build indoor multi-purpose courts as well?',
      answer: 'Yes! We construct both indoor and outdoor multi-purpose courts for homes, gyms, and commercial facilities.',
    },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Multi-Purpose Courts Construction in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Professional multi-purpose court construction in Salt Lake City, UT. Custom designs for basketball, pickleball, tennis, volleyball and more." />
        <meta name="keywords" content="multi-purpose court, court construction, salt lake city, utah, sports court, basketball, pickleball, tennis, volleyball" />
        <meta property="og:title" content="Multi-Purpose Courts Construction in Salt Lake City, UT" />
        <meta property="og:description" content="Professional multi-purpose court construction in Salt Lake City, UT. Custom designs and expert installation." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Multi-Purpose Courts Construction in Salt Lake City, UT
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 leading-relaxed transition-all duration-1200 ease-out">
            Transform your property into a versatile, high-performance sports hub with expert Multi-Purpose Courts Construction in Salt Lake City, UT. Whether you want a private recreation space at home, a durable court for your school, or a professional multi-sport setup for your community or business, our team delivers custom-built courts engineered for long-lasting performance across Utah's unique climate.
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
              From the snowy winters near the Wasatch Mountains to the hot, dry summers around the Great Salt Lake, Salt Lake City weather can be tough on outdoor surfaces. That's why we use premium materials, advanced construction techniques, and proven surfacing systems designed to resist cracking, fading, warping, and heavy foot traffic.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              With our team, you get a seamless experience from concept to completion—tailored to how you want your court to play, look, and last.
            </p>
          </div>
        </div>
      </section>

      {/* Why Multi-Purpose Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-8 transition-all duration-300 hover:text-primary-600">
            Why Multi-Purpose Courts?
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Multi-purpose courts are the ultimate upgrade for homes, parks, HOAs, schools, gyms, and commercial facilities. Instead of building multiple individual courts, you can combine several sports into one efficient, high-quality playing space.
          </p>

          <h3 className="text-2xl font-bold text-primary-700 mb-6">Popular Combinations:</h3>
          <div className="grid md:grid-cols-2 gap-4 mb-8">
            {combinations.map((combo, idx) => (
              <div
                key={idx}
                className={`flex items-center gap-3 p-4 bg-white rounded-lg border-l-4 border-accent-gold transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <FaCheckCircle className="text-accent-gold text-2xl flex-shrink-0" />
                <span className="text-gray-700 font-semibold">{combo}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            A multi-purpose court gives your property more flexibility, more functionality, and more value—without requiring excess space or complex maintenance.
          </p>
        </div>
      </section>

      {/* Custom Courts Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-8 transition-all duration-300 hover:text-primary-600">
            Custom Multi-Purpose Courts Tailored for Salt Lake City
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            Every property, player, and purpose is different. We take the time to understand your vision so we can design and build a court that matches your goals, layout, and aesthetic.
          </p>

          <h3 className="text-2xl font-bold text-primary-700 mb-6">We Build Multi-Purpose Courts For:</h3>
          <div className="space-y-3 mb-8">
            {buildFor.map((item, idx) => (
              <div
                key={idx}
                className={`flex items-start gap-3 p-4 bg-gradient-to-r from-primary-50 to-white rounded-lg border-l-4 border-accent-gold transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <FaCheckCircle className="text-accent-gold text-xl mt-1 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Whether your property is in Sugar House, The Avenues, Rose Park, Millcreek, or anywhere around the SLC metro area, we deliver outstanding craftsmanship with long-term durability.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 transition-all duration-300 hover:text-primary-600">
            Our Multi-Purpose Court Construction Process
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

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600">
            Benefits of Building a Multi-Purpose Court
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12 max-w-3xl">
            Choosing a multi-purpose court delivers a wide range of advantages for your property and lifestyle.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`group rounded-xl bg-gradient-to-br from-white to-primary-50 border-2 border-primary-200 hover:border-accent-gold shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 overflow-hidden transform transition-all duration-1200 ease-out ${
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

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 transition-all duration-300 hover:text-primary-600">
            Why Choose Us for Multi-Purpose Courts Construction in Salt Lake City, UT?
          </h2>

          <div className="space-y-6">
            {whyChoose.map((item, idx) => (
              <div
                key={idx}
                className={`p-6 md:p-8 bg-white rounded-xl border-l-4 border-accent-gold shadow-md hover:shadow-lg transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-1 transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <h3 className="text-xl font-bold text-primary-700 mb-3 transition-all duration-300 hover:text-accent-gold">
                  {item.title}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed">{item.description}</p>
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Multi-Purpose Court?</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Contact our Salt Lake City multi-purpose court specialists today to schedule a consultation. We're ready to help you design and build a versatile, high-performance court tailored to your needs, space, and budget.
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
