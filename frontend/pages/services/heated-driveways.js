import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaQuestionCircle, FaSnowflake, FaThermometerHalf, FaLeaf } from 'react-icons/fa'
import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function HeatedDrivewaysPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [expandedFaq, setExpandedFaq] = useState(null)

  const benefits = [
    {
      image: '/Preventslip.png',
      alt: 'Prevent Slips and Accidents - Heated Driveway Safety',
      title: 'Prevent Slips and Accidents',
      description: 'Snow and ice can make driveways dangerously slippery. A heated driveway system in Salt Lake City, UT removes that risk, creating a safer path for you, your family, and your guests. No more late-night scrapes, frozen steps, or worrying about icy patches.',
    },
    {
      image: '/ReduceTime.png',
      alt: 'Save Time and Reduce Maintenance - Automatic Snow Melting',
      title: 'Save Time and Reduce Maintenance',
      description: 'Winter chores like shoveling, snow blowing, or spreading salt? They\'re gone. With our system, snow melts automatically, and you don\'t have to worry about regular upkeep or replacing cracked concrete caused by road salt.',
    },
    {
      image: '/IncreaseProperty.png',
      alt: 'Increase Property Value and Curb Appeal - Home Investment',
      title: 'Increase Property Value and Curb Appeal',
      description: 'Installing a heated driveway system in Salt Lake City, UT isn\'t just about convenience—it\'s an investment. Homes with premium features like automated driveway heating tend to attract more attention and can enjoy increased resale value.',
    },
  ]

  const whyChoose = [
    {
      title: 'Automatic Snow and Ice Melting',
      description: 'Our systems use embedded heating cables (or mats) paired with intelligent snow sensors and a controller. When temperature drops and snow starts to fall, the system activates, melting snow and ice even before it piles up. Once the storm passes, it shuts off or runs a short drying cycle, leaving a clean, safe surface.',
    },
    {
      title: 'Durable Installation for Any Surface',
      description: 'Whether your driveway is concrete, asphalt, or laid with pavers, we\'ve got you covered. Our installation methods embed heating elements safely below the driveway surface to ensure even heat distribution and long-term durability.',
    },
    {
      title: 'Energy-Efficient Technology',
      description: 'Electric radiant snow-melting systems direct nearly all the energy to melting snow with minimal waste. That means efficient heating that doesn\'t spike your energy bill unnecessarily. Because these systems eliminate the need for salt or harsh chemical deicers, they also protect your landscaping and nearby vegetation—a win for curb appeal and the environment.',
    },
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Customized Consultation and Planning',
      description: 'We begin with a thorough evaluation of your property—driveway size, slope, soil conditions, surface material, and your usage habits (full driveway vs. tire tracks only, frequency of use, etc.). This lets us recommend a heating plan tailored to your needs and budget.',
    },
    {
      step: '2',
      title: 'Professional Installation',
      description: 'Depending on the driveway surface and scope, we embed heating cables or mats beneath concrete, asphalt, or pavers. We ensure proper spacing, insulation under the slab to prevent heat loss, and install a reliable controller and snow sensor setup. All electrical work is handled carefully to local code ensuring safety, compliance, and long-term durability.',
    },
    {
      step: '3',
      title: 'Testing and Final Walkthrough',
      description: 'Once installed, the system is tested in real-world conditions (with simulated snow or water) to confirm even heat distribution, proper activation of sensors, and consistent performance. Then we walk you through the system—how it works, how to operate it (manual override if needed), and maintenance guidelines.',
    },
    {
      step: '4',
      title: 'Ongoing Support and Maintenance Guidance',
      description: 'We believe in building relationships, not just driveways. After installation, we provide guidance on best practices—when to run the system, how to care for the driveway surface, drainage considerations, and ways to reduce energy costs. We stand by our work, ready to assist with any questions or adjustments.',
    },
  ]

  const faqs = [
    {
      question: 'How do Heated Driveway Systems in Salt Lake City, UT handle heavy snow from Wasatch Mountain storms?',
      answer: 'Our systems are designed to handle Salt Lake City\'s winter conditions, including heavy snowfalls from the Wasatch Mountains. The embedded heating cables and smart snow sensors automatically detect precipitation and activate the system, melting snow before it accumulates and keeping your driveway safe and accessible.',
    },
    {
      question: 'Can a Heated Driveway System in Salt Lake City, UT be installed on existing driveways?',
      answer: 'Yes! Our team can retrofit existing concrete, asphalt, or paver driveways with a custom heating solution. We carefully embed the heating elements to ensure even heat distribution while preserving your driveway\'s structure and appearance.',
    },
    {
      question: 'Will a Heated Driveway System in Salt Lake City, UT work for all neighborhoods and elevations?',
      answer: 'Absolutely. Whether you live near downtown Salt Lake City, Sugar House, Liberty Park, or in the higher-elevation foothills, we design the system to match your driveway\'s slope, size, and local weather conditions for optimal performance.',
    },
    {
      question: 'How much does it cost to install a heated driveway system?',
      answer: 'The cost varies depending on your driveway size, surface type, and system configuration. During our free consultation, we provide a tailored estimate and heating plan that fits your budget while ensuring maximum efficiency and durability.',
    },
    {
      question: 'Are Heated Driveway Systems energy-efficient and eco-friendly?',
      answer: 'Yes. Electric radiant snow-melting systems direct almost all energy to melting snow with minimal waste. They reduce the need for salt or chemical deicers, protecting your landscaping, environment, and reducing long-term maintenance costs.',
    },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Heated Driveway Systems in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Professional heated driveway systems in Salt Lake City, UT. Automatic snow melting, energy-efficient, and safe. Custom installation for concrete, asphalt, and pavers." />
        <meta name="keywords" content="heated driveway, snow melting system, salt lake city, utah, heated driveway installation, winter safety, automatic snow removal" />
        <meta property="og:title" content="Heated Driveway Systems in Salt Lake City, UT" />
        <meta property="og:description" content="Professional heated driveway systems in Salt Lake City, UT. Automatic snow melting, energy-efficient, and safe." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Reliable Heated Driveway Systems in Salt Lake City, UT
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 leading-relaxed transition-all duration-1200 ease-out">
            Salt Lake City winters can be harsh, with snow, ice, and frosty mornings coming down from the Wasatch Mountains. Navigating your driveway after a storm or rushing to work or school can be dangerous and time consuming. Our Heated Driveway Systems in Salt Lake City, UT keep your driveway clear, safe, and ready automatically. No shoveling, no salt damage, and no scrambling in the morning, whether you live near Sugar House, Liberty Park, or are heading toward Big Cottonwood Canyon.
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
              Each system is custom-designed for your driveway's size, surface type, and your lifestyle, giving you convenience and peace of mind all winter long. Whether you're concerned about safety, tired of winter maintenance, or looking to add value to your home, our heated driveway solutions deliver results.
            </p>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 transition-all duration-300 hover:text-primary-600">
            Why Choose Our Heated Driveway Systems
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

      {/* Benefits Section */}
      <section className="section-padding bg-gradient-to-b from-white to-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 text-center transition-all duration-300 hover:text-primary-600">
            Benefits of a Heated Driveway in Salt Lake City, Utah
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`group rounded-xl bg-gradient-to-br from-white to-primary-50 border-2 border-primary-200 hover:border-accent-gold shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 overflow-hidden transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex justify-center mb-6 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2">
                    <img
                      src={benefit.image}
                      alt={benefit.alt}
                      loading="lazy"
                      className="h-20 md:h-24 w-auto object-contain transition-all duration-300 ease-out group-hover:drop-shadow-lg"
                    />
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
            Our Proven Heated Driveway Installation Process
          </h2>

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Driveway?</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            If you're tired of winters slush, slippery surfaces, and endless shoveling—let's build a solution that fits your lifestyle, budget, and driveway. Contact us today for a free estimate. We'll design a heated driveway plan fitted to your property and needs and help you enjoy clean, safe winter mornings in Salt Lake City.
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
