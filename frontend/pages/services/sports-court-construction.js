import Head from 'next/head'
import Link from 'next/link'
import { useRouter } from 'next/router'
import { FaCheckCircle, FaArrowRight, FaQuestionCircle } from 'react-icons/fa'
import { useScrollAnimation } from '../../hooks/useScrollAnimation'

export default function SportsCourtConstructionPage() {
  const router = useRouter()
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()

  const services = [
    {
      title: 'Basketball Courts',
      description: 'Our custom basketball courts in Salt Lake City, UT are built for durability, precision, and year-round play. We create level, long-lasting concrete surfaces designed for smooth ball response whether for home use or commercial facilities.',
      link: '/services/basketball-courts',
    },
    {
      title: 'Pickleball Courts',
      description: 'Get high-quality pickleball courts in Salt Lake City, UT built for accuracy, durability, and consistent performance. We design custom courts with proper dimensions, smooth finishes, and long-lasting materials perfect for players of all levels.',
      link: '/services/pickleball-courts',
    },
    {
      title: 'Multi-purpose Courts',
      description: 'We construct versatile multi-purpose courts in Salt Lake City, UT perfect for basketball, volleyball, pickleball, and more. Our courts are engineered for safe traction, durability, and reliable performance in all seasons.',
      link: '/services/multipurpose-courts',
    },
  ]

  const handleServiceClick = (link) => {
    router.push(link)
  }

  const whyChoose = [
    'Expert Design: Our courts meet official dimensions and specifications for professional-grade play.',
    'Quality Materials: We use premium concrete and surface materials engineered for durability and performance.',
    'Weather Resistant: Our courts are designed to withstand Salt Lake City\'s climate and seasonal changes.',
    'Professional Installation: Our experienced team ensures proper grading, drainage, and finishing.',
  ]

  const benefits = [
    {
      title: 'Enhance Property Value and Appeal',
      description: 'A well-designed sports court not only provides a fun and engaging space but also elevates the overall look and value of your home or facility. Custom layouts and premium finishes make your property stand out.',
    },
    {
      title: 'Safe and Comfortable Play',
      description: 'Our courts are engineered with safety in mind. Shock-absorbing surfaces reduce the risk of injury, while slip-resistant finishes provide stable footing for athletes of all ages and skill levels.',
    },
    {
      title: 'Low Maintenance and Longevity',
      description: 'Our high-quality materials and professional construction methods ensure your court remains in excellent condition for years. Minimal maintenance is required, giving you a durable and attractive space without ongoing headaches.',
    },
  ]

  const processSteps = [
    {
      title: 'Initial Consultation & Site Evaluation',
      description: 'The first step is understanding your vision, space, and requirements. We assess your property, discuss your goals, and provide recommendations to ensure the project meets both your expectations and practical needs.',
    },
    {
      title: 'Court Design & Material Selection',
      description: 'Next, we create a custom design tailored to your property and intended use. We help you select the best materials, surface coatings, and color options for durability, safety, and aesthetic appeal. Our designs consider drainage, foundation requirements, and optimal layout for multi-sport functionality.',
    },
    {
      title: 'Professional Installation & Quality Assurance',
      description: 'Our experienced team handles the installation with precision and attention to detail. From foundation preparation to surface installation, we ensure every component meets our strict quality standards. Every court is inspected throughout construction to guarantee safety, performance, and longevity.',
    },
    {
      title: 'Final Walkthrough & Client Approval',
      description: 'Before completing the project, we walk you through the finished court to confirm that it meets your expectations. We address any questions or adjustments, ensuring you are completely satisfied with the final result.',
    },
  ]

  const faqs = [
    {
      question: 'How do Salt Lake City weather conditions affect sports court construction?',
      answer: 'Salt Lake City experiences snowy winters, hot summers, and high-altitude UV exposure. Our sports courts are designed with climate-resistant materials and proper drainage to withstand these conditions, ensuring your court remains safe, durable, and playable year-round.',
    },
    {
      question: 'Can you build a sports court on a sloped or uneven property in Salt Lake City?',
      answer: 'Absolutely. Our team evaluates your property during the initial consultation and creates custom solutions for sloped or uneven terrain. We use engineered foundations and grading techniques to ensure your sports court is level, stable, and fully functional.',
    },
    {
      question: 'Which neighborhoods in Salt Lake City do you serve for sports court construction?',
      answer: 'We provide professional sports court construction services across Salt Lake City, including The Avenues, Sugar House, Liberty Park, Capitol Hill, and nearby areas. No matter your location, we tailor the design and materials to suit your property and lifestyle.',
    },
    {
      question: 'What types of sports courts can you build?',
      answer: 'We construct courts for basketball, tennis, volleyball, pickleball, and custom multi-sport surfaces. Each court is designed for optimal performance, safety, and versatility, making it perfect for residential, community, or commercial use.',
    },
    {
      question: 'How long does the sports court construction process take?',
      answer: 'The timeline depends on the size, type, and complexity of the court. Generally, from consultation to final walkthrough, most projects take between 4 to 8 weeks. Our team ensures efficient scheduling and high-quality construction without compromising durability or finish.',
    },
  ]

  return (
    <>
      <Head>
        <title>Sports Court Construction in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Professional basketball, pickleball, and multi-purpose court construction in Salt Lake City, UT. Expert design and installation." />
        <meta name="keywords" content="basketball court, pickleball court, sports court, construction, salt lake city, concrete" />
        <meta property="og:title" content="Sports Court Construction in Salt Lake City, UT" />
        <meta property="og:description" content="Professional sports court construction including basketball, pickleball, and multi-purpose courts." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Sports Court Construction Services
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 transition-all duration-1200 ease-out">
            Professional basketball, pickleball, and multi-purpose court construction in Salt Lake City, UT
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
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-6">Sports Courts Construction in Salt Lake City, UT</h2>
            <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
              Transform your property with professional Sports Courts Construction in Salt Lake City, UT. Whether you're dreaming of a backyard basketball court with a view of the Wasatch Mountains, a multi-sport surface for a community near Liberty Park, or a custom tennis or pickleball court in The Avenues, our Salt Lake City team delivers superior construction tailored to your needs. We combine durability, functionality, and aesthetics to create courts built to withstand the city's snowy winters, hot summers near the Great Salt Lake, and the high-altitude sun. Our custom-designed courts not only enhance your property but also provide a safe, enjoyable playing experience for years to come, making them the perfect addition to your home, school, or community facility.
            </p>
          </div>
        </div>
      </section>

      {/* Premium Courts Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 transition-all duration-300 hover:text-primary-600">
            Premium Sports Courts Built to Last
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-6">
            Our sports courts are designed for long-lasting performance. Using only the finest materials and advanced construction techniques, we ensure every court can withstand the extremes of Utah weather. From freezing winters to hot, dry summers near the Great Salt Lake, our courts maintain their integrity and appearance, giving you peace of mind and a reliable space for recreation.
          </p>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed">
            We focus on more than just durability. Our courts are engineered to offer optimal playability, providing the right level of shock absorption, traction, and smooth surfaces for athletes of all levels. Whether it's a residential backyard, a community recreation area, or a commercial facility, our courts are built to perform.
          </p>
        </div>
      </section>

      {/* Why Choose Us - Enhanced Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 transition-all duration-300 hover:text-primary-600">
            Why Choose Our Salt Lake City Sports Courts
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-12">
            When it comes to sports court construction, choosing the right team matters. We combine craftsmanship, attention to detail, and personalized service to create courts that meet your vision and requirements. Our team treats every project as unique, ensuring that the design, materials, and layout reflect your preferences while staying functional and durable.
          </p>

          <div className="space-y-8">
            <div className={`transform transition-all duration-1200 ease-out ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
              <h3 className="text-2xl font-bold text-primary-700 mb-4">Multi-Sport Court Options</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                We offer courts for basketball, tennis, volleyball, pickleball, and custom multi-use courts. Our designs allow for versatile play, so you can enjoy multiple sports on the same surface without compromising quality or performance.
              </p>
            </div>

            <div className={`transform transition-all duration-1200 ease-out ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`} style={{ transitionDelay: '75ms' }}>
              <h3 className="text-2xl font-bold text-primary-700 mb-4">Climate-Resistant Surfaces</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Salt Lake City experiences both hot summers and snowy winters. Our courts are engineered with high-quality materials that resist cracking, fading, and wear, providing a safe and reliable surface for all seasons.
              </p>
            </div>

            <div className={`transform transition-all duration-1200 ease-out ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`} style={{ transitionDelay: '150ms' }}>
              <h3 className="text-2xl font-bold text-primary-700 mb-4">Custom Design & Layouts</h3>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed">
                Every property is unique, and so is every court we build. We tailor the layout, materials, and surface finishes to suit your space, usage needs, and aesthetic goals. Whether you want a sleek, modern look or a classic style, we bring your vision to life.
              </p>
            </div>
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
              Our Sports Court Services
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto transition-all duration-300">
              Professional court construction for all sports and skill levels
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {services.map((service, idx) => (
              <div
                key={idx}
                onClick={() => handleServiceClick(service.link)}
                className={`bg-white rounded-xl overflow-hidden border-2 border-primary-200 hover:border-accent-gold hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 group transform transition-all duration-1200 ease-out cursor-pointer ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
                role="button"
                tabIndex={0}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' || e.key === ' ') {
                    handleServiceClick(service.link)
                  }
                }}
              >
                {/* Service Content */}
                <div className="p-6 md:p-8">
                  <h3 className="text-xl md:text-2xl font-bold text-primary-700 mb-4 group-hover:text-accent-gold transition-all duration-300 group-hover:translate-x-1">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-base leading-relaxed group-hover:text-gray-700 transition-all duration-300 group-hover:translate-x-0.5">
                    {service.description}
                  </p>
                  <div className="mt-6 flex items-center gap-2 text-accent-gold font-bold transition-all duration-300 group-hover:translate-x-2">
                    <span>Learn More</span>
                    <FaArrowRight className="text-lg" />
                  </div>
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
            Why Choose Our Court Construction
          </h2>
          <p className="text-gray-600 text-base md:text-lg leading-relaxed mb-8">
            We\'re committed to building courts that meet professional standards while exceeding your expectations for quality and performance.
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
            The Advantages of Our Sports Courts
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
            Our Court Construction Process
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
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 text-center transition-all duration-300 hover:text-primary-600">
            Frequently Asked Questions
          </h2>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-lg border-2 border-primary-200 hover:border-accent-gold transition-all duration-500 overflow-hidden transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 50}ms` }}
              >
                <details className="group">
                  <summary className="flex items-center justify-between p-6 cursor-pointer hover:bg-primary-50 transition-colors duration-300">
                    <h3 className="text-lg font-bold text-primary-700 flex items-center gap-3">
                      <FaQuestionCircle className="text-accent-gold" />
                      {faq.question}
                    </h3>
                    <FaArrowRight className="text-primary-700 group-open:rotate-90 transition-transform duration-300" />
                  </summary>
                  <p className="px-6 pb-6 text-gray-600 text-base leading-relaxed border-t-2 border-primary-100">
                    {faq.answer}
                  </p>
                </details>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Build Your Court?</h2>
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
