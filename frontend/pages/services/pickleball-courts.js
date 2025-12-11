import Head from 'next/head'
import Link from 'next/link'
import { FaCheckCircle, FaArrowRight, FaQuestionCircle } from 'react-icons/fa'
import { useState } from 'react'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function PickleballCourtsPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [expandedFaq, setExpandedFaq] = useState(null)

  const processSteps = [
    {
      step: '1',
      title: 'Site Assessment & Planning',
      description: 'Every project begins with a detailed evaluation of your location. From soil stability near Holladay to slope variations in Millcreek or West Valley City, we consider drainage, orientation, sunlight, and accessibility to determine the best possible design. Proper planning ensures your court stays level, protected from standing water, and optimized for player comfort.',
    },
    {
      step: '2',
      title: 'Excavation & Foundation Preparation',
      description: 'A strong court begins with a strong base. We grade, compact, and prepare the foundation to create a stable surface that resists cracking, shifting, or heaving during Utah\'s freeze-thaw cycles. Proper drainage systems are installed to keep water from pooling and damaging the court surface.',
    },
    {
      step: '3',
      title: 'Court Surfacing & Cushion Systems',
      description: 'Next comes the heart of your pickleball court: the playing surface. We offer premium acrylic sports surfacing that provides consistent bounce, grip, and comfort for players of all ages. Optional cushioned systems add shock absorption, making gameplay easier on joints and ideal for high-traffic courts.',
    },
    {
      step: '4',
      title: 'Professional Court Striping',
      description: 'Once the surfacing is complete, our team applies regulation-grade court lines with exact measurements, ensuring accuracy for both casual and competitive play. Clear, crisp striping enhances the look of your court while maintaining professional playability.',
    },
    {
      step: '5',
      title: 'Additional Court Features',
      description: 'Customize your pickleball court with premium add-ons, including perimeter fencing for safety and ball containment, windscreens to improve play in open areas, LED lighting for evening or early-morning games, nets, posts, and upgrades for competitive setups, multi-sport line options, and seating or shade structures.',
    },
    {
      step: '6',
      title: 'Final Walkthrough & Maintenance Guidance',
      description: 'Once your court is complete, we perform a full inspection to ensure every detail meets our quality standards. You\'ll receive care recommendations to help you maintain your surface, extend its lifespan, and keep gameplay consistent.',
    },
  ]

  const whyChoose = [
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Local Expertise',
      description: 'We build courts specifically designed for Salt Lake City\'s unique climate, soil conditions, and environmental challenges.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Premium Materials',
      description: 'From acrylic coatings to high-performance bases, we use industry-approved materials that ensure longevity and professional-grade play.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Customization Options',
      description: 'Your court\'s layout, colors, features, and accessories are tailored to your property and budget.',
    },
  ]

  const faqs = [
    {
      question: 'What size does a standard pickleball court need?',
      answer: 'A standard pickleball court measures 20 feet by 44 feet, but additional space around the perimeter is required for safe play. Our team can assess your available area to confirm suitability.',
    },
    {
      question: 'Can I combine a pickleball court with other sports lines?',
      answer: 'Yes. Many property owners choose multi-sport layouts, such as pickleball and tennis or pickleball and basketball. We can design a combination court based on how you plan to use the space.',
    },
    {
      question: 'How does Utah\'s weather affect court construction?',
      answer: 'Salt Lake City\'s freeze-thaw cycles require proper base preparation and surfacing materials to prevent cracking or shifting. We use climate-resistant systems built for year-round durability.',
    },
    {
      question: 'Do you build indoor pickleball courts as well?',
      answer: 'Yes, we can construct both indoor and outdoor courts. Indoor courts are ideal for year-round play, especially for athletic centers, schools, and recreational facilities.',
    },
    {
      question: 'How often should a pickleball court be resurfaced?',
      answer: 'Most high-quality courts only need resurfacing every few years depending on usage, weather exposure, and maintenance. Regular cleaning helps extend the life of the court.',
    },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>Pickleball Court Construction in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Professional pickleball court construction in Salt Lake City, UT. Custom designs, durable surfaces, and expert installation for residential and commercial properties." />
        <meta name="keywords" content="pickleball court, court construction, salt lake city, utah, sports court, outdoor court, recreational court" />
        <meta property="og:title" content="Pickleball Court Construction in Salt Lake City, UT" />
        <meta property="og:description" content="Professional pickleball court construction in Salt Lake City, UT. Custom designs and expert installation." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Pickleball Court Construction in Salt Lake City, UT
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 leading-relaxed transition-all duration-1200 ease-out">
            Bring the excitement of one of America's fastest-growing sports right to your property with professional Pickleball Court Construction in Salt Lake City, UT. From the scenic heights of the Wasatch Front to quiet neighborhoods near Sugar House, pickleball has become a favorite pastime for families, athletes, and communities across Utah.
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
              Whether you're planning a private court for your backyard, upgrading a local recreational facility, or adding courts to a multi-sport complex, we deliver premium construction built for performance and longevity.
            </p>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed">
              Our team understands the unique climate of Salt Lake City—cold, snowy winters, hot sunny summers, and everything in between. That's why every pickleball court we build is engineered to handle the region's temperature swings and moisture conditions. With durable materials, precise grading, and professional surfacing, we create courts that stay smooth, stable, and safe throughout the seasons.
            </p>
          </div>
        </div>
      </section>

      {/* Expert Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-8 transition-all duration-300 hover:text-primary-600">
            Expert Pickleball Court Builders in Salt Lake City
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            When you choose us for your pickleball court project, you're partnering with specialists who know exactly what it takes to build courts that not only look great but perform at a high level. Whether your space is compact or expansive, flat or sloped, we customize every detail to match your property and playing needs.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We work with homeowners, HOAs, city parks, schools, athletic centers, and commercial developers across Salt Lake City, delivering courts designed for everything from casual rec play to competitive-level performance.
          </p>
        </div>
      </section>

      {/* Process Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 transition-all duration-300 hover:text-primary-600">
            Our Pickleball Court Construction Process
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

      {/* Why Choose Section */}
      <section className="section-padding bg-gradient-to-b from-white to-primary-50">
        <div className="container-custom">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600">
            Why Choose Us for Pickleball Court Construction in Salt Lake City, UT?
          </h2>
          <p className="text-gray-600 text-base md:text-lg mb-12 max-w-3xl">
            We combine local expertise, premium materials, and customization options to deliver courts that exceed expectations.
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
            FAQs About Pickleball Court Construction in Salt Lake City, UT
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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Pickleball Court?</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Contact our Salt Lake City pickleball court specialists today to schedule a consultation and start designing your custom court. We're ready to bring your vision to life with expert guidance, high-quality materials, and exceptional workmanship.
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
