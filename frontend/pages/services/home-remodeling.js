import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaQuestionCircle, FaUtensils, FaBath, FaHome } from 'react-icons/fa'
import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function HomeRemodelingPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [expandedFaq, setExpandedFaq] = useState(null)

  const services = [
    {
      icon: <FaUtensils className="text-accent-gold text-4xl" />,
      title: 'Kitchen Renovations',
      description: 'The kitchen is the heart of your home, and we help you make it both beautiful and practical. From modern layouts and durable countertops to updated cabinetry and flooring, our kitchen renovations improve workflow, storage, and aesthetics. Whether you prefer a contemporary look or a timeless design, our remodeling team ensures your kitchen matches your lifestyle.',
    },
    {
      icon: <FaBath className="text-accent-gold text-4xl" />,
      title: 'Bathroom Remodeling',
      description: 'Bathrooms are more than just functional spaces—they should be relaxing and visually appealing. We specialize in tub-to-shower conversions, walk-in showers, modern fixtures, and custom finishes. Every renovation is designed to combine comfort, durability, and style while optimizing space for a more efficient and enjoyable experience.',
    },
    {
      icon: <FaHome className="text-accent-gold text-4xl" />,
      title: 'Living Spaces and Additions',
      description: 'From living rooms to home offices, we help you enhance your main living areas with thoughtful layouts, quality materials, and exceptional finishes. We also handle home additions, creating extra space that integrates seamlessly with your existing home.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Basements and Outdoor Spaces',
      description: 'Functional basements and outdoor areas add value and enjoyment to your property. Whether you want a finished basement for family entertainment or a patio and outdoor living space for hosting guests, our team designs and builds spaces that are both practical and attractive.',
    },
  ]

  const whyChoose = [
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Durable Materials and Lasting Craftsmanship',
      description: 'Our remodeling projects use the finest materials and professional techniques, delivering results that last. Every renovation is completed with attention to detail and a focus on structural integrity, ensuring you enjoy your new space for years without issues.',
    },
    {
      icon: <FaHome className="text-accent-gold text-4xl" />,
      title: 'Personalized Solutions for Every Home',
      description: 'No two homes are the same, and neither are our renovations. We work closely with you to understand your vision, needs, and aesthetic preferences, tailoring every aspect of the project to fit your unique requirements.',
    },
    {
      icon: <FaArrowRight className="text-accent-gold text-4xl" />,
      title: 'Transparent Process and Competitive Pricing',
      description: 'We believe remodeling should be straightforward and stress-free. From the initial consultation to project completion, we maintain clear communication, provide competitive pricing, and ensure you understand every step of the process.',
    },
  ]

  const processSteps = [
    {
      step: '1',
      title: 'Consultation and Project Planning',
      description: 'We start by understanding your goals, evaluating your space, and discussing design options. This step ensures that your renovation plan aligns with your vision and budget.',
    },
    {
      step: '2',
      title: 'Design and Material Selection',
      description: 'Next, we collaborate with you to select layouts, finishes, and materials that suit your style and functional needs. This step ensures that every detail is carefully considered before construction begins.',
    },
    {
      step: '3',
      title: 'Professional Construction and Quality Assurance',
      description: 'Our skilled team executes the renovation with precision and attention to detail. We monitor progress, maintain quality standards, and keep you updated throughout the construction process.',
    },
    {
      step: '4',
      title: 'Final Walkthrough and Satisfaction Guarantee',
      description: 'We complete every project with a thorough walkthrough, ensuring that your renovated home meets your expectations. Your satisfaction is our priority, and we make sure every detail is perfect before we finish.',
    },
  ]

  const faqs = [
    {
      question: 'What areas in Salt Lake City do you serve for home remodeling and renovations?',
      answer: 'We provide full-service home remodeling and renovations across Salt Lake City, including neighborhoods like Sugar House, Liberty Wells, Federal Heights, and the foothills near the Wasatch Mountains. No matter where your home is located, our team is ready to deliver customized solutions that fit your space and lifestyle.',
    },
    {
      question: 'How do you handle remodeling projects during Salt Lake City\'s snowy winters or hot summers?',
      answer: 'Our renovations are designed to withstand Salt Lake City\'s seasonal weather, from heavy snow in winter to hot, dry summers. We use durable materials and construction techniques that ensure your home remains safe, comfortable, and beautiful all year round.',
    },
    {
      question: 'Can you incorporate Salt Lake City\'s local style or landmarks into my renovation?',
      answer: 'Absolutely. We understand Salt Lake City\'s unique architecture and lifestyle. Whether you want a modern space with a view of the city skyline, a patio perfect for summer evenings, or interior designs inspired by local aesthetics, we tailor your project to reflect both your personal style and the area\'s character.',
    },
    {
      question: 'How long does a typical home remodeling project take?',
      answer: 'Project timelines vary depending on the scope of work, from small kitchen or bathroom updates to full-home renovations. During your initial consultation, we provide a detailed project plan and schedule, ensuring clear communication and timely completion without compromising quality.',
    },
    {
      question: 'Do you offer customized solutions and materials for each renovation?',
      answer: 'Yes. Every home is unique, so we provide personalized solutions tailored to your space, preferences, and budget. From material selection to layout and design, we work closely with you to create functional, stylish, and long-lasting renovations that suit your specific needs.',
    },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Home Remodeling and Renovations in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Professional home remodeling and renovations in Salt Lake City, UT. Kitchen, bathroom, and living space renovations with custom designs and expert craftsmanship." />
        <meta name="keywords" content="home remodeling, renovations, salt lake city, utah, kitchen remodeling, bathroom remodeling, home improvement, custom renovations" />
        <meta property="og:title" content="Home Remodeling and Renovations in Salt Lake City, UT" />
        <meta property="og:description" content="Professional home remodeling and renovations in Salt Lake City, UT. Custom designs and expert installation." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Home Remodeling and Renovations in Salt Lake City, UT
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 leading-relaxed transition-all duration-1200 ease-out">
            Transform your home with Home Remodeling and Renovations in Salt Lake City, UT that combine style, function, and lasting quality. Whether you want to modernize your kitchen, upgrade your bathroom, or enhance your living spaces, our team delivers personalized solutions that fit your vision, budget, and lifestyle.
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
              From the snowy winters along the Wasatch Mountains to the hot summers near the Great Salt Lake, our renovations are designed to withstand Salt Lake City's unique climate while keeping your home comfortable and beautiful year-round.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              We understand the local lifestyle, whether you enjoy strolls around Liberty Park, exploring the shops near Temple Square, or hosting friends on a patio with a view of the city skyline, your home should complement how you live. With a focus on craftsmanship, reliability, and customer satisfaction, our Home Remodeling and Renovations in Salt Lake City, UT help homeowners create dream spaces that are both functional and enduring, tailored specifically to the needs of Utah residents.
            </p>
          </div>
        </div>
      </section>

      {/* Services Section - Benefits */}
      <section id="benefits" className="section-padding bg-gray-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600">
            Our Remodeling Features and Services
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12 max-w-3xl">
            We offer a comprehensive range of remodeling services designed to meet the unique needs of Salt Lake City homeowners. Each project is treated as a custom solution, ensuring your space is functional, stylish, and built to last.
          </p>

          <div className="grid md:grid-cols-2 gap-8">
            {services.map((service, idx) => (
              <div
                key={idx}
                className={`group rounded-xl bg-white border-2 border-primary-200 hover:border-accent-gold shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 overflow-hidden transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="p-6 md:p-8">
                  <div className="flex justify-center mb-4 text-5xl transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-1">
                    {service.icon}
                  </div>
                  <h3 className="mb-4 text-primary-700 font-bold text-lg md:text-xl transition-all duration-300 ease-out group-hover:text-accent-gold group-hover:translate-x-1 text-center">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base transition-all duration-300 ease-out group-hover:text-gray-700">
                    {service.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section id="why-us" className="section-padding bg-gradient-to-b from-white to-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600">
            Why Choose Us for Your Home Renovation
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12 max-w-3xl">
            We understand that choosing the right remodeling partner is critical. That's why we focus on providing personalized service, quality materials, and a reliable process that ensures your project is completed on time and on budget.
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
            Our Home Remodeling Process
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12">
            We follow a structured, reliable process that makes your renovation project smooth, efficient, and enjoyable.
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
      <section id="faq" className="section-padding bg-gray-50">
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Request Your Free Remodeling Estimate Today</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Ready to transform your home in Salt Lake City, UT? Our remodeling team is here to bring your vision to life. Contact us today for a free estimate and discover how our professional, reliable, and personalized renovation services can elevate your home.
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
