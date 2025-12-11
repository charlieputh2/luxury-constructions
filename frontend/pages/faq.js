import Head from 'next/head'
import Link from 'next/link'
import { FaQuestionCircle } from 'react-icons/fa'
import { useState, useEffect } from 'react'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function FAQPage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [expandedFaq, setExpandedFaq] = useState(null)
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true)
  }, [])

  const faqs = [
    {
      question: 'What construction and concrete services does Luxury Construction offer in Salt Lake City?',
      answer: 'Luxury Construction specializes in comprehensive concrete and construction services throughout Salt Lake City, Utah. Our service offerings include professional concrete driveways engineered for Utah\'s harsh winters, innovative heated driveway systems, durable concrete sidewalks and walkways, structural concrete foundations, custom garage construction (attached, detached, and multi-car), complete home remodeling and renovations, professional roofing and siding installation, sports court construction (basketball, pickleball, and multi-purpose courts), and expert landscape design and outdoor planning. Each service is delivered with premium materials and professional craftsmanship tailored to meet Salt Lake City\'s unique climate and architectural standards.',
    },
    {
      question: 'Which areas of Utah does Luxury Construction serve?',
      answer: 'We proudly serve Salt Lake City and the greater Salt Lake County area, including neighborhoods such as Sugar House, The Avenues, Liberty Park, Holladay, Millcreek, West Valley City, and surrounding communities throughout the Wasatch Front. Our team has extensive experience working in diverse Salt Lake City neighborhoods and understands the specific construction challenges and opportunities in each area. Whether your property is near the Wasatch Mountains or close to the Great Salt Lake, we\'re equipped to deliver exceptional results. Contact us to discuss your specific location and project requirements.',
    },
    {
      question: 'How do I request a free estimate for my construction project?',
      answer: 'Requesting a free estimate from Luxury Construction is simple and convenient. You can reach out to us through multiple channels: call our team at (385) 227-4522 for immediate assistance, visit our contact page to submit a detailed project inquiry, or email us at info@luxuryconstruction.com with photos and project details. During your initial consultation, we\'ll conduct a thorough site assessment, discuss your vision and requirements, and provide a comprehensive, no-obligation estimate. We typically respond to all inquiries within 24 business hours.',
    },
    {
      question: 'What is the typical timeline for construction projects in Salt Lake City?',
      answer: 'Project timelines vary significantly based on the scope, complexity, and type of work involved. Concrete driveways typically take 1-2 weeks, while home remodeling projects may span several months depending on the extent of renovations. During your initial consultation, our project managers provide a detailed timeline and schedule specific to your project. We factor in Salt Lake City\'s seasonal weather patterns and maintain transparent communication throughout construction. We\'re committed to completing projects on schedule while maintaining our high quality standards and ensuring minimal disruption to your property.',
    },
    {
      question: 'Does Luxury Construction provide warranties on construction and concrete work?',
      answer: 'Yes, we stand behind every project with comprehensive warranties covering both materials and workmanship. Our warranty terms vary depending on the service type—concrete work typically includes extended warranties for durability and structural integrity, while roofing and siding projects include manufacturer warranties plus our craftsmanship guarantee. We\'ll provide detailed warranty information and documentation for your specific project during the consultation. Our warranties reflect our confidence in the quality of our work and our commitment to long-term customer satisfaction.',
    },
    {
      question: 'How does Luxury Construction manage weather-related delays in Utah?',
      answer: 'We understand Salt Lake City\'s challenging weather patterns, including heavy winter snow, spring runoff, and summer heat. Our experienced team plans projects strategically around seasonal conditions and maintains contingency schedules for weather-related delays. We use weather-resistant materials and proven construction techniques designed specifically for Utah\'s climate. If weather impacts your project timeline, we communicate proactively with detailed updates and revised schedules. Our goal is to minimize disruptions while ensuring quality isn\'t compromised by rushing work in poor conditions.',
    },
    {
      question: 'Can Luxury Construction work within my budget and design preferences?',
      answer: 'Absolutely. We believe quality construction should be accessible to homeowners and businesses with varying budgets. Our team works collaboratively with you to understand your vision, aesthetic preferences, and financial parameters. We provide multiple options at different price points, recommend cost-effective materials without sacrificing quality, and prioritize your must-have features. Whether you\'re planning a complete renovation or targeted improvements, we\'ll develop a customized plan that delivers maximum value and aligns with your specific requirements and budget constraints.',
    },
    {
      question: 'What distinguishes Luxury Construction from other contractors in Salt Lake City?',
      answer: 'Luxury Construction stands out through our combination of local expertise, extensive experience, premium material selection, transparent communication, and unwavering commitment to customer satisfaction. Our team has deep knowledge of Salt Lake City\'s unique climate, soil conditions, building codes, and architectural styles. We invest in ongoing training and use the latest construction techniques. Every project receives personalized attention—we treat your property with the same care and quality standards we\'d apply to our own homes. Our reputation is built on delivering exceptional results, maintaining clear communication, and standing behind our work with comprehensive warranties.',
    },
    {
      question: 'Does Luxury Construction handle permits, inspections, and building code compliance?',
      answer: 'Yes, we manage the complete permitting and inspection process for all projects. Our team is well-versed in Salt Lake City and Utah building codes, zoning regulations, and permit requirements. We handle all necessary paperwork, coordinate with local building departments, schedule inspections at appropriate project stages, and ensure your project meets all applicable codes and regulations. This comprehensive approach protects your investment and ensures your completed project is properly documented and compliant with all local requirements.',
    },
    {
      question: 'What maintenance is required for concrete driveways and construction work?',
      answer: 'Proper maintenance extends the lifespan and appearance of your concrete and construction investments. For concrete driveways and surfaces, we recommend regular cleaning, prompt repair of minor cracks, and periodic sealing (typically every 2-3 years) to protect against Utah\'s freeze-thaw cycles. We provide detailed care instructions specific to your project and material type. For landscaping, roofing, and other services, we offer customized maintenance recommendations. We\'re also available for ongoing maintenance services, seasonal inspections, and repairs to keep your property in optimal condition year-round.',
    },
    {
      question: 'How does Luxury Construction ensure quality control throughout the project?',
      answer: 'Quality control is embedded in every phase of our projects. We begin with detailed planning and material selection, maintain rigorous standards during construction, and conduct thorough inspections at key milestones. Our experienced supervisors oversee daily work, verify craftsmanship against our high standards, and address any concerns immediately. We use premium materials from trusted suppliers and employ proven construction techniques. Before project completion, we perform a comprehensive final inspection with you to ensure every detail meets our quality standards and your expectations. This commitment to quality is why our clients trust us with their most important projects.',
    },
    {
      question: 'How much does a concrete driveway cost in Salt Lake City?',
      answer: 'Concrete driveway costs in Salt Lake City vary based on several factors including driveway size, existing conditions, design complexity, and finishing options. On average, homeowners can expect to invest between $3,000 to $8,000 for a standard two-car driveway. Factors affecting pricing include square footage, concrete thickness, reinforcement options, decorative finishes, and site preparation requirements. We provide detailed, transparent pricing during your free estimate consultation. Our team will discuss cost-saving options without compromising quality, and we offer flexible payment terms for qualified projects.',
    },
    {
      question: 'What is the best concrete sealer for Salt Lake City\'s climate?',
      answer: 'For Salt Lake City\'s freeze-thaw climate, we recommend high-quality acrylic or polyurethane sealers that provide superior protection against moisture penetration and UV damage. These sealers help prevent salt damage from winter de-icing products and protect against the intense summer sun. We typically recommend resealing concrete surfaces every 2-3 years in Utah\'s climate. During your project, we\'ll recommend the best sealer option based on your specific surface type and usage. Our team can also handle professional sealing services to ensure optimal protection and longevity.',
    },
    {
      question: 'Can you build a garage on my sloped property in Salt Lake City?',
      answer: 'Yes, we specialize in building garages on sloped and challenging properties throughout Salt Lake City. Our team uses engineered solutions including proper grading, retaining walls, and foundation adjustments to create level, functional garage spaces on uneven terrain. We assess your property\'s slope, soil conditions, and drainage requirements to design a solution that works with your landscape. Sloped properties may require additional engineering and preparation, which we discuss during your consultation. We\'ve successfully completed numerous garage projects on challenging Salt Lake City properties.',
    },
    {
      question: 'What\'s the difference between heated and standard driveways?',
      answer: 'Heated driveway systems use electric heating cables or hydronic systems installed beneath the concrete surface to melt snow and ice automatically. Standard driveways rely on manual snow removal and chemical de-icers. Heated driveways offer convenience, improved safety, reduced maintenance, and protection from salt damage. However, they require higher upfront installation costs and ongoing electricity expenses. In Salt Lake City\'s climate, heated driveways are increasingly popular for their long-term value and convenience. We can discuss whether a heated driveway system makes sense for your property and budget.',
    },
  ]

  const toggleFaq = (index) => {
    setExpandedFaq(expandedFaq === index ? null : index)
  }

  return (
    <>
      <Head>
        <title>FAQ - Luxury Construction Salt Lake City | Concrete & Construction Services</title>
        <meta name="description" content="Get answers to frequently asked questions about concrete driveways, home remodeling, garage construction, sports courts, and landscaping services in Salt Lake City, UT. Learn about estimates, timelines, warranties, and more." />
        <meta name="keywords" content="FAQ, frequently asked questions, concrete contractor, construction services, concrete driveways, concrete driveway cost, heated driveways, home remodeling, garage construction, sloped property garage, roofing, siding, sports courts, landscaping, salt lake city, utah, estimates, warranties, permits, concrete sealer, freeze-thaw protection" />
        <meta property="og:title" content="Frequently Asked Questions - Luxury Construction Salt Lake City" />
        <meta property="og:description" content="Comprehensive answers to questions about concrete and construction services in Salt Lake City, UT. Learn about our process, warranties, and service areas." />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://luxuryconstruction.com/faq" />
        <meta name="robots" content="index, follow, max-snippet:-1, max-image-preview:large, max-video-preview:-1" />
        <meta name="author" content="Luxury Construction" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="canonical" href="https://luxuryconstruction.com/faq" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Frequently Asked Questions
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 leading-relaxed transition-all duration-1200 ease-out">
            Have questions about our services? Find answers to common questions below. If you don't find what you're looking for, feel free to contact us directly.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-accent-gold text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Contact Us
          </Link>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="section-padding bg-white">
          <div className="container-custom max-w-4xl mx-auto">
            <div className={`text-center mb-16 transform transition-all duration-1200 ease-out ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`} ref={sectionRef}>
              <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
                Common Questions About Our Services
              </h2>
              <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
                We're here to help answer any questions you may have about our construction and landscaping services.
              </p>
            </div>

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
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Still Have Questions?</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Don't hesitate to reach out. Our team is ready to answer any additional questions and help you with your project.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-accent-gold text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Contact Us
            </Link>
            <a
              href="tel:(385)227-4522"
              className="inline-block px-8 py-4 bg-white text-primary-700 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
