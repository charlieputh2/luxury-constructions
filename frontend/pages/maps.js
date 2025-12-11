import { useState } from 'react'
import Head from 'next/head'
import Link from 'next/link'
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaClock, FaArrowLeft, FaArrowRight } from 'react-icons/fa'

export default function MapsPage() {
  const [activeTab, setActiveTab] = useState('map')

  return (
    <>
      <Head>
        <title>Location & Maps - Luxury Construction | Salt Lake City, UT</title>
        <meta name="description" content="Visit Luxury Construction in Salt Lake City, UT. Find our location, hours, and contact information. Premier concrete contractors serving the Wasatch Front." />
        <meta name="keywords" content="luxury construction location, salt lake city, maps, directions, concrete contractors" />
        <meta property="og:title" content="Location & Maps - Luxury Construction" />
        <meta property="og:description" content="Find Luxury Construction in Salt Lake City, UT. Get directions, hours, and contact information." />
        <meta property="og:type" content="website" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-50 to-white py-12 md:py-16">
        <div className="container-custom">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-bold text-primary-700 mb-4 transition-all duration-1000">
              Visit Our Location
            </h1>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Located in the heart of Salt Lake City, we are easily accessible from anywhere in the Wasatch Front. Stop by to discuss your concrete and landscaping project with our expert team.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="section-padding bg-white">
        <div className="container-custom">
          {/* Tabs */}
          <div className="flex gap-4 mb-12 border-b-2 border-primary-200">
            <button
              onClick={() => setActiveTab('map')}
              className={`px-6 py-3 font-bold transition-all duration-300 border-b-4 ${
                activeTab === 'map'
                  ? 'border-accent-gold text-primary-700'
                  : 'border-transparent text-gray-600 hover:text-primary-700'
              }`}
            >
              Map & Directions
            </button>
            <button
              onClick={() => setActiveTab('info')}
              className={`px-6 py-3 font-bold transition-all duration-300 border-b-4 ${
                activeTab === 'info'
                  ? 'border-accent-gold text-primary-700'
                  : 'border-transparent text-gray-600 hover:text-primary-700'
              }`}
            >
              Contact Information
            </button>
          </div>

          {/* Map Tab */}
          {activeTab === 'map' && (
            <div className="animate-fade-in">
              <div className="grid md:grid-cols-3 gap-8 mb-12">
                {/* Map */}
                <div className="md:col-span-2">
                  <div className="rounded-xl overflow-hidden shadow-2xl h-96 md:h-full min-h-96 border-4 border-primary-200 hover:border-accent-gold transition-all duration-500">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.3527819893!2d-111.8916!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8755a3c6c6c6c6c7%3A0x6c6c6c6c6c6c6c6c!2s2861%20S%202700%20E%2C%20Salt%20Lake%20City%2C%20UT%2084109!5e0!3m2!1sen!2sus!4v1234567890"
                      width="100%"
                      height="100%"
                      style={{ border: 0 }}
                      allowFullScreen=""
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Luxury Construction Location - Salt Lake City, UT"
                    ></iframe>
                  </div>
                </div>

                {/* Quick Info Card */}
                <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg border-2 border-primary-200 hover:border-accent-gold transition-all duration-500">
                  <h3 className="text-2xl font-bold text-primary-700 mb-6 flex items-center gap-2">
                    <FaMapMarkerAlt className="text-accent-gold" />
                    Our Location
                  </h3>

                  <div className="space-y-6">
                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-2">Address</h4>
                      <p className="text-lg font-bold text-primary-700">
                        2861 S 2700 E<br />
                        Salt Lake City, UT 84109
                      </p>
                    </div>

                    <div>
                      <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-2">Service Area</h4>
                      <p className="text-gray-600 leading-relaxed">
                        Wasatch Front, Downtown Salt Lake City, and surrounding areas
                      </p>
                    </div>

                    <a
                      href="https://www.google.com/maps/place/2861+S+2700+E,+Salt+Lake+City,+UT+84109"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-900 font-bold rounded-lg hover:shadow-lg transition-all duration-300 transform hover:scale-105 w-full justify-center"
                    >
                      <FaArrowRight />
                      Get Directions
                    </a>
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Info Tab */}
          {activeTab === 'info' && (
            <div className="animate-fade-in">
              <div className="grid md:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-primary-700 mb-8">Get In Touch</h3>

                  {/* Phone Card */}
                  <a
                    href="tel:(385)227-4522"
                    className="flex items-start gap-4 p-6 bg-gradient-to-br from-white to-primary-50 rounded-xl shadow-lg border-2 border-primary-200 hover:border-accent-gold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group"
                  >
                    <div className="flex-shrink-0">
                      <FaPhone className="text-3xl text-accent-gold group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-2 group-hover:text-accent-gold transition-colors duration-300">
                        Call Us
                      </h4>
                      <p className="text-2xl font-bold text-primary-700 group-hover:text-accent-gold transition-colors duration-300">
                        (385) 227-4522
                      </p>
                      <p className="text-sm text-gray-600 mt-2">Direct line for free estimates</p>
                    </div>
                  </a>

                  {/* Email Card */}
                  <a
                    href="mailto:info@luxuryconstruction.com"
                    className="flex items-start gap-4 p-6 bg-gradient-to-br from-white to-primary-50 rounded-xl shadow-lg border-2 border-primary-200 hover:border-accent-gold hover:shadow-2xl transition-all duration-500 transform hover:scale-105 group"
                  >
                    <div className="flex-shrink-0">
                      <FaEnvelope className="text-3xl text-accent-gold group-hover:scale-110 transition-transform duration-300" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-2 group-hover:text-accent-gold transition-colors duration-300">
                        Email Us
                      </h4>
                      <p className="text-xl font-bold text-primary-700 group-hover:text-accent-gold transition-colors duration-300 break-all">
                        info@luxuryconstruction.com
                      </p>
                      <p className="text-sm text-gray-600 mt-2">We respond within 24 hours</p>
                    </div>
                  </a>

                  {/* Hours Card */}
                  <div className="flex items-start gap-4 p-6 bg-gradient-to-br from-white to-primary-50 rounded-xl shadow-lg border-2 border-primary-200 hover:border-accent-gold hover:shadow-2xl transition-all duration-500">
                    <div className="flex-shrink-0">
                      <FaClock className="text-3xl text-accent-gold" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-semibold uppercase tracking-widest text-gray-500 mb-3">
                        Business Hours
                      </h4>
                      <div className="space-y-2 text-gray-600">
                        <p><span className="font-semibold text-primary-700">Monday - Friday:</span> 7:00 AM - 6:00 PM</p>
                        <p><span className="font-semibold text-primary-700">Saturday:</span> 8:00 AM - 4:00 PM</p>
                        <p><span className="font-semibold text-primary-700">Sunday:</span> Closed</p>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Service Area & CTA */}
                <div className="space-y-6">
                  <h3 className="text-3xl font-bold text-primary-700 mb-8">Service Area</h3>

                  <div className="bg-gradient-to-br from-primary-50 to-white p-8 rounded-xl shadow-lg border-2 border-primary-200">
                    <h4 className="text-xl font-bold text-primary-700 mb-4">We Serve:</h4>
                    <ul className="space-y-3 text-gray-600">
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                        Salt Lake City
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                        Wasatch Front
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                        Downtown Salt Lake City
                      </li>
                      <li className="flex items-center gap-3">
                        <span className="w-2 h-2 bg-accent-gold rounded-full"></span>
                        Surrounding Areas
                      </li>
                    </ul>
                  </div>

                  {/* CTA Buttons */}
                  <div className="space-y-4">
                    <a
                      href="tel:(385)227-4522"
                      className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-gold via-yellow-400 to-accent-gold text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 active:scale-95 drop-shadow-xl border-2 border-yellow-300/50 group"
                    >
                      <FaPhone size={18} />
                      <span>Call Now</span>
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </a>
                    <Link
                      href="/#services"
                      className="flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/35 border-2 border-white/80 hover:border-white transition-all duration-500 transform hover:scale-105 active:scale-95 drop-shadow-xl group"
                    >
                      <span>View Services</span>
                      <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Back to Home */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-600 text-white py-12">
        <div className="container-custom text-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Contact us today for a free estimate on your concrete and landscaping project.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="tel:(385)227-4522"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-500 transform hover:scale-105 drop-shadow-xl group"
            >
              <FaPhone size={18} />
              <span>Call Now</span>
              <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
            </a>
            <Link
              href="/"
              className="flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/35 border-2 border-white/80 hover:border-white transition-all duration-500 transform hover:scale-105 drop-shadow-xl group"
            >
              <FaArrowLeft className="group-hover:-translate-x-2 transition-transform duration-300" />
              <span>Back to Home</span>
            </Link>
          </div>
        </div>
      </section>
    </>
  )
}
