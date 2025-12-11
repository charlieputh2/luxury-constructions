import Head from 'next/head'
import Link from 'next/link'
import { useState } from 'react'
import { FaCheckCircle, FaExclamationCircle, FaPhone, FaEnvelope, FaClock } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function EstimatePage() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    serviceType: '',
    projectDetails: '',
  })
  const [loading, setLoading] = useState(false)
  const [message, setMessage] = useState(null)
  const [messageType, setMessageType] = useState(null)

  const services = [
    'Concrete Driveways',
    'Heated Driveway Systems',
    'Sidewalks & Walkways',
    'Concrete Foundations',
    'Walkout Basements',
    'Decorative Concrete',
    'Stamped Concrete',
    'Garage Construction',
    'Home Remodeling',
    'Roofing & Siding',
    'Sports Court Construction',
    'Landscaping Services',
  ]

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setMessage(null)

    try {
      const response = await fetch('/api/send-estimate', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setMessageType('success')
        setMessage('✓ Estimate request sent successfully! We\'ll contact you within 24 hours.')
        setFormData({
          fullName: '',
          email: '',
          phone: '',
          serviceType: '',
          projectDetails: '',
        })
      } else {
        setMessageType('error')
        setMessage(`✗ ${data.message || 'Failed to send estimate request. Please try again.'}`)
      }
    } catch (error) {
      setMessageType('error')
      setMessage('✗ An error occurred. Please try again or call us directly at (385) 227-4522')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <Head>
        <title>Free Estimate | Luxury Construction - Salt Lake City, UT</title>
        <meta name="description" content="Get a free estimate for your construction project in Salt Lake City, UT. Fill out our form and our team will contact you within 24 hours." />
        <meta name="keywords" content="free estimate, construction estimate, salt lake city, concrete, garage, landscaping" />
        <meta property="og:title" content="Free Estimate | Luxury Construction" />
        <meta property="og:description" content="Get a free estimate for your construction project. Our team will contact you within 24 hours." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-br from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-6 transition-all duration-1200 ease-out">
            Get Your Free Estimate
          </h1>
          <p className="text-lg md:text-xl mb-8 text-primary-100 transition-all duration-1200 ease-out">
            Fill out the form below and our team will contact you within 24 hours with a personalized quote
          </p>
        </div>
      </section>

      {/* Form Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-2xl mx-auto">
          <div className={`transform transition-all duration-1200 ease-out ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`} ref={sectionRef}>
            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Full Name */}
              <div className={`transform transition-all duration-1200 ease-out ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`}>
                <label className="block text-primary-700 font-bold mb-2">
                  Full Name <span className="text-red-500">*</span>
                </label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  placeholder="John Doe"
                  required
                  className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:outline-none focus:border-accent-gold transition-all duration-300 hover:border-primary-300"
                />
              </div>

              {/* Email Address */}
              <div className={`transform transition-all duration-1200 ease-out ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`} style={{ transitionDelay: '75ms' }}>
                <label className="block text-primary-700 font-bold mb-2">
                  Email Address <span className="text-red-500">*</span>
                </label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  required
                  className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:outline-none focus:border-accent-gold transition-all duration-300 hover:border-primary-300"
                />
              </div>

              {/* Phone Number */}
              <div className={`transform transition-all duration-1200 ease-out ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`} style={{ transitionDelay: '150ms' }}>
                <label className="block text-primary-700 font-bold mb-2">
                  Phone Number <span className="text-red-500">*</span>
                </label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="(385) 227-4522"
                  required
                  className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:outline-none focus:border-accent-gold transition-all duration-300 hover:border-primary-300"
                />
              </div>

              {/* Service Type */}
              <div className={`transform transition-all duration-1200 ease-out ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`} style={{ transitionDelay: '225ms' }}>
                <label className="block text-primary-700 font-bold mb-2">
                  Service Type <span className="text-red-500">*</span>
                </label>
                <select
                  name="serviceType"
                  value={formData.serviceType}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:outline-none focus:border-accent-gold transition-all duration-300 hover:border-primary-300 bg-white"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>

              {/* Project Details */}
              <div className={`transform transition-all duration-1200 ease-out ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`} style={{ transitionDelay: '300ms' }}>
                <label className="block text-primary-700 font-bold mb-2">
                  Project Details <span className="text-red-500">*</span>
                </label>
                <textarea
                  name="projectDetails"
                  value={formData.projectDetails}
                  onChange={handleChange}
                  placeholder="Tell us about your project, timeline, budget, and any specific requirements..."
                  required
                  rows="6"
                  className="w-full px-4 py-3 border-2 border-primary-200 rounded-lg focus:outline-none focus:border-accent-gold transition-all duration-300 hover:border-primary-300 resize-none"
                />
              </div>

              {/* Message Alert */}
              {message && (
                <div className={`p-4 rounded-lg flex items-center gap-3 transform transition-all duration-500 ease-out ${
                  messageType === 'success'
                    ? 'bg-green-100 border-2 border-green-500 text-green-800'
                    : 'bg-red-100 border-2 border-red-500 text-red-800'
                } ${message ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
                  {messageType === 'success' ? (
                    <FaCheckCircle className="text-2xl flex-shrink-0" />
                  ) : (
                    <FaExclamationCircle className="text-2xl flex-shrink-0" />
                  )}
                  <span className="font-semibold">{message}</span>
                </div>
              )}

              {/* Submit Button */}
              <div className={`transform transition-all duration-1200 ease-out ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`} style={{ transitionDelay: '375ms' }}>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full px-8 py-4 bg-gradient-to-r from-primary-700 to-primary-600 text-white font-bold rounded-lg hover:shadow-2xl transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {loading ? 'Sending...' : 'Get Free Estimate'}
                </button>
              </div>

              {/* Alternative Contact */}
              <div className={`text-center text-gray-600 transform transition-all duration-1200 ease-out ${
                sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
              }`} style={{ transitionDelay: '450ms' }}>
                <p className="mb-2">Or call us directly at</p>
                <Link
                  href="tel:(385)227-4522"
                  className="text-primary-700 font-bold text-lg hover:text-accent-gold transition-colors duration-300"
                >
                  (385) 227-4522
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Why Choose Us Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 text-center transition-all duration-300 hover:text-primary-600">
            Why Request an Estimate from Us?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: '⚡',
                title: 'Fast Response',
                desc: 'We contact you within 24 hours with a detailed, personalized quote.',
              },
              {
                icon: '💰',
                title: 'Transparent Pricing',
                desc: 'No hidden fees. We provide clear, honest estimates you can trust.',
              },
              {
                icon: '✓',
                title: 'Expert Assessment',
                desc: 'Our experienced team evaluates your project thoroughly for accurate quotes.',
              },
            ].map((item, idx) => (
              <div
                key={idx}
                className={`bg-white rounded-xl p-6 md:p-8 border-2 border-primary-200 hover:border-accent-gold hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h3 className="text-xl font-bold text-primary-700 mb-3">{item.title}</h3>
                <p className="text-gray-600 text-base leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Info Section */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 text-center transition-all duration-300 hover:text-primary-600">
            Other Ways to Reach Us
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            <div className={`bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 md:p-8 border-2 border-primary-200 text-center transform transition-all duration-1200 ease-out ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`}>
              <FaPhone className="text-accent-gold text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-700 mb-2">Phone</h3>
              <a href="tel:(385)227-4522" className="text-gray-600 hover:text-accent-gold transition-colors duration-300 font-semibold">
                (385) 227-4522
              </a>
            </div>

            <div className={`bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 md:p-8 border-2 border-primary-200 text-center transform transition-all duration-1200 ease-out ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`} style={{ transitionDelay: '75ms' }}>
              <FaEnvelope className="text-accent-gold text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-700 mb-2">Email</h3>
              <a href="mailto:info@luxuryconstruction.com" className="text-gray-600 hover:text-accent-gold transition-colors duration-300 font-semibold">
                info@luxuryconstruction.com
              </a>
            </div>

            <div className={`bg-gradient-to-br from-primary-50 to-white rounded-xl p-6 md:p-8 border-2 border-primary-200 text-center transform transition-all duration-1200 ease-out ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
            }`} style={{ transitionDelay: '150ms' }}>
              <FaClock className="text-accent-gold text-4xl mx-auto mb-4" />
              <h3 className="text-xl font-bold text-primary-700 mb-2">Hours</h3>
              <p className="text-gray-600 font-semibold">
                Mon - Fri<br />
                8:00 AM - 5:00 PM
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-r from-primary-700 to-primary-600 text-white">
        <div className="container-custom max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg md:text-xl mb-8 text-primary-100">
            Submit your estimate request above or contact us directly. We're here to help!
          </p>
          <Link
            href="tel:(385)227-4522"
            className="inline-block px-8 py-4 bg-accent-gold text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Call Now
          </Link>
        </div>
      </section>
    </>
  )
}
