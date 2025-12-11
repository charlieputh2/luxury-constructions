import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaQuestionCircle, FaShieldAlt, FaPalette, FaWrench } from 'react-icons/fa'
import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function RetainingWallsPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [expandedFaq, setExpandedFaq] = useState(null)

  const whyChoose = [
    {
      icon: <FaShieldAlt className="text-accent-gold text-4xl" />,
      title: 'Durable Materials Built to Last',
      description: 'We use only the finest materials for every retaining wall we build, including concrete, stone, brick, and timber. Each material is selected for its strength, longevity, and ability to withstand Salt Lake City\'s seasonal weather fluctuations, from heavy winter snow to hot, dry summers. Proper drainage and structural reinforcement ensure your wall remains stable and secure for years to come.',
    },
    {
      icon: <FaPalette className="text-accent-gold text-4xl" />,
      title: 'Customized Designs for Your Landscape',
      description: 'No two properties are the same, and neither are our retaining walls. Our team works closely with you to design walls that complement your landscape, meet your functional needs, and reflect your personal style. From modern, minimalist designs to classic stone walls, every project is tailored to your property\'s unique terrain and your aesthetic preferences.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Safe, Compliant, and Low-Maintenance',
      description: 'Safety and compliance are at the forefront of our work. We follow local building codes and industry best practices to ensure your retaining wall is structurally sound and safe. Proper drainage systems prevent water buildup behind the wall, reducing pressure and minimizing maintenance needs. With our walls, you can enjoy a beautiful, worry-free outdoor space.',
    },
  ]

  const benefits = [
    {
      title: 'Protect Your Property',
      description: 'Prevent soil erosion and manage sloped areas safely.',
    },
    {
      title: 'Enhance Curb Appeal',
      description: 'Add visually striking features that elevate the look of your home or commercial property.',
    },
    {
      title: 'Create Usable Spaces',
      description: 'Level uneven terrain to build patios, terraces, or garden areas.',
    },
    {
      title: 'Long-Lasting Construction',
      description: 'Built with durable materials and professional techniques to withstand the elements.',
    },
    {
      title: 'Tailored Solutions',
      description: 'Each wall is customized to match your property\'s layout, style, and your functional needs.',
    },
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Personalized Consultation and Site Assessment',
      description: 'We begin by visiting your property to assess the terrain, soil type, and slope. We discuss your goals, style preferences, and budget to ensure your retaining wall fits both functionally and aesthetically within your outdoor space.',
    },
    {
      step: '2',
      title: 'Design and Material Selection',
      description: 'Once we understand your property and vision, we develop a custom design plan. You\'ll choose from a variety of durable materials and finishes, ensuring your wall enhances your landscape while remaining strong and stable.',
    },
    {
      step: '3',
      title: 'Precision Construction and Installation',
      description: 'Our experienced team handles every aspect of construction, from excavation and base preparation to drainage systems and wall assembly. We use professional techniques, including geogrid reinforcement, proper compaction, and precise leveling, to guarantee a durable and reliable wall.',
    },
    {
      step: '4',
      title: 'Final Inspection and Client Walkthrough',
      description: 'Before we consider the project complete, we conduct a thorough inspection and invite you for a final walkthrough. We ensure that every detail meets your expectations, from alignment and finish to structural integrity. Your satisfaction is our top priority.',
    },
  ]

  const faqs = [
    {
      question: 'Can retaining walls withstand Salt Lake City\'s winter snow and spring runoff?',
      answer: 'Absolutely. Our retaining walls are built with durable materials and reinforced construction techniques designed to handle Salt Lake City\'s seasonal weather, including heavy snow, spring runoff, and freeze-thaw cycles. Proper drainage ensures long-term stability and minimal maintenance.',
    },
    {
      question: 'Do you design retaining walls for properties near the Wasatch Mountains or downtown Salt Lake City?',
      answer: 'Yes. We tailor every retaining wall to the property\'s terrain and surroundings, whether you\'re near the foothills of the Wasatch Mountains, residential neighborhoods, or commercial areas around Temple Square. Each wall is designed to blend seamlessly with its environment while providing lasting structural support.',
    },
    {
      question: 'Are permits or city codes required for retaining wall construction in Salt Lake City?',
      answer: 'Many retaining wall projects in Salt Lake City require compliance with local building codes, especially for walls above a certain height. We handle the permitting process and ensure your wall meets all city regulations for safety and structural integrity.',
    },
    {
      question: 'How long does it take to build a retaining wall?',
      answer: 'Construction time varies depending on the wall\'s size, design, and materials. Most residential retaining walls are completed within a few days to a couple of weeks. We provide a detailed timeline during the consultation and keep you updated throughout the project.',
    },
    {
      question: 'What maintenance is required for retaining walls?',
      answer: 'Our retaining walls are designed to be low-maintenance. Periodic inspection for drainage, minor settling, or debris removal is recommended. Properly built walls with reinforced structures and effective drainage systems require minimal upkeep while providing lasting beauty and functionality.',
    },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Retaining Wall Construction in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Professional retaining wall construction in Salt Lake City, UT. Custom designs, durable materials, and expert installation for residential and commercial properties." />
        <meta name="keywords" content="retaining walls, wall construction, salt lake city, utah, landscape, erosion control, outdoor spaces, property improvement" />
        <meta property="og:title" content="Retaining Wall Construction in Salt Lake City, UT" />
        <meta property="og:description" content="Professional retaining wall construction in Salt Lake City, UT. Custom designs and expert installation." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Retaining Wall Construction in Salt Lake City, UT
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 leading-relaxed transition-all duration-1200 ease-out">
            Enhance your property, protect your landscape, and create functional outdoor spaces with our premium retaining wall construction services in Salt Lake City, UT. From the foothills of the Wasatch Mountains to neighborhoods near Temple Square, our walls are built to withstand Salt Lake City's unique weather, including heavy winter snow, spring runoff, and hot summer days.
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
              Whether you want to prevent soil erosion on a sloped yard, level uneven terrain for a backyard patio, or add a stylish feature near your home or business, our team delivers durable, attractive, and fully customized retaining walls designed for the local environment and your property's needs.
            </p>
          </div>
        </div>
      </section>

      {/* Transform Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-8 transition-all duration-300 hover:text-primary-600">
            Transform Your Outdoor Spaces with Custom Retaining Walls
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            A well built retaining wall does more than hold back soil. It transforms your outdoor spaces, providing structure, safety, and style. From terraced gardens to elegant patio areas, our retaining walls are designed to enhance your property's functionality while complementing its aesthetic appeal.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            Imagine creating a backyard oasis with clearly defined garden spaces, leveled areas for outdoor entertaining, or even commercial landscaping that impresses clients and visitors alike. With our retaining wall construction services, your vision becomes reality, strong, safe, and long-lasting.
          </p>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gradient-to-b from-white to-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600">
            Why Choose Our Retaining Wall Services in Salt Lake City
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12 max-w-3xl">
            We understand that building a retaining wall is more than laying stones or blocks—it's about creating a structure that will stand the test of time while adding value to your property. Here's why our clients trust us for retaining wall construction:
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

      {/* Benefits Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 transition-all duration-300 hover:text-primary-600">
            Benefits of Our Retaining Walls
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12">
            Investing in a high quality retaining wall offers both practical and aesthetic benefits. Here's what our clients gain when choosing our services:
          </p>

          <div className="space-y-6">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`flex gap-4 p-6 md:p-8 bg-gradient-to-r from-primary-50 to-white rounded-xl border-l-4 border-accent-gold shadow-md hover:shadow-xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-1 transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="flex-shrink-0">
                  <FaCheckCircle className="text-accent-gold text-2xl mt-1" />
                </div>
                <div className="flex-grow">
                  <h3 className="text-lg font-bold text-primary-700 mb-2">{benefit.title}</h3>
                  <p className="text-gray-600 text-base">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>

          <p className="text-gray-600 text-base md:text-lg leading-relaxed mt-12">
            With our retaining walls, you're not just getting a structure, you're creating a lasting investment that combines beauty, safety, and practicality.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 transition-all duration-300 hover:text-primary-600">
            Our Retaining Wall Construction Process
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12">
            We make retaining wall construction simple, transparent, and reliable. Our process ensures that every project meets your expectations and is built to last.
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Elevate Your Property with a Retaining Wall?</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Take the first step toward transforming your property today. Whether you're looking to improve safety, add aesthetic appeal, or create functional outdoor areas, our Salt Lake City retaining wall construction services provide lasting solutions tailored to your needs.
          </p>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Contact us now to schedule a free estimate or consultation. Let's build a retaining wall that combines durability, beauty, and functionality, designed specifically for your property and your lifestyle.
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
