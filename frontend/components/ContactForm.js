import { useState } from 'react'
import axios from 'axios'
import { FaCheckCircle, FaExclamationCircle } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function ContactForm() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: '',
    message: '',
  })
  const [loading, setLoading] = useState(false)
  const [status, setStatus] = useState(null)

  const services = [
    'Concrete Driveways',
    'Heated Driveway Systems',
    'Sidewalks & Walkways',
    'Concrete Foundations',
    'Decorative Concrete',
    'Stamped Concrete',
    'Retaining Walls',
    'Garage Builders',
    'Home Remodeling',
    'Roofing & Siding',
    'Basketball Courts',
    'Pickleball Courts',
    'Multi-purpose Courts',
    'Landscape Design',
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
    setStatus(null)

    try {
      const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:8080'
      const response = await axios.post(`${apiUrl}/api/contact`, formData)

      setStatus({
        type: 'success',
        message: 'Thank you! We received your request. We will contact you soon.',
      })

      setFormData({
        name: '',
        email: '',
        phone: '',
        service: '',
        message: '',
      })
    } catch (error) {
      setStatus({
        type: 'error',
        message: 'Failed to send message. Please try again or call us directly.',
      })
    } finally {
      setLoading(false)
    }
  }

  return (
    <section className="section-padding bg-white" ref={sectionRef}>
      <div className="container-custom">
        <div className={`max-w-2xl mx-auto transform transition-all duration-1200 ease-out ${
          sectionVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="text-center mb-4">Get Your Free Estimate</h2>
          <p className="text-center text-gray-600 mb-12">
            Fill out the form below and our team will contact you within 24 hours with a personalized quote.
          </p>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block text-sm font-semibold text-gray-700 mb-2">
                  Full Name *
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  placeholder="John Doe"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block text-sm font-semibold text-gray-700 mb-2">
                  Email Address *
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  placeholder="john@example.com"
                />
              </div>

              {/* Phone */}
              <div>
                <label htmlFor="phone" className="block text-sm font-semibold text-gray-700 mb-2">
                  Phone Number *
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                  placeholder="(385) 227-4522"
                />
              </div>

              {/* Service */}
              <div>
                <label htmlFor="service" className="block text-sm font-semibold text-gray-700 mb-2">
                  Service Type *
                </label>
                <select
                  id="service"
                  name="service"
                  value={formData.service}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                >
                  <option value="">Select a service</option>
                  {services.map((service) => (
                    <option key={service} value={service}>
                      {service}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Message */}
            <div>
              <label htmlFor="message" className="block text-sm font-semibold text-gray-700 mb-2">
                Project Details *
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:border-primary-500 focus:ring-2 focus:ring-primary-200"
                placeholder="Tell us about your project..."
              ></textarea>
            </div>

            {/* Status Message */}
            {status && (
              <div
                className={`flex items-start gap-3 p-4 rounded-lg ${
                  status.type === 'success'
                    ? 'bg-green-50 border border-green-200'
                    : 'bg-red-50 border border-red-200'
                }`}
              >
                {status.type === 'success' ? (
                  <FaCheckCircle className="text-green-600 mt-1 flex-shrink-0" />
                ) : (
                  <FaExclamationCircle className="text-red-600 mt-1 flex-shrink-0" />
                )}
                <p
                  className={
                    status.type === 'success' ? 'text-green-700' : 'text-red-700'
                  }
                >
                  {status.message}
                </p>
              </div>
            )}

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full btn-primary py-4 font-bold text-lg disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {loading ? 'Sending...' : 'Get Free Estimate'}
            </button>

            <p className="text-center text-sm text-gray-600">
              Or call us directly at{' '}
              <a href="tel:(385)227-4522" className="font-bold text-primary-600">
                (385) 227-4522
              </a>
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}
