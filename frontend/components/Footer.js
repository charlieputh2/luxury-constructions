import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'
import { useState, useEffect } from 'react'

export default function Footer() {
  const currentYear = new Date().getFullYear()
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    setIsVisible(true)
  }, [])

  return (
    <footer className="bg-gradient-to-b from-green-700 via-green-800 to-green-900 text-white relative overflow-hidden">
      {/* Animated background elements - Green theme matching logo */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-400 opacity-5 rounded-full blur-3xl -mr-48 -mt-48 animate-pulse"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-400 opacity-5 rounded-full blur-3xl -ml-48 -mb-48 animate-pulse" style={{ animationDelay: '2s' }}></div>

      {/* Main Footer */}
      <div className="container-custom section-padding relative z-10">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`}>
            <img
              src="https://res.cloudinary.com/dtr1tnutd/image/upload/v1765250127/logo_zo8ea0.png"
              alt="Luxury Construction Logo"
              className="h-12 w-12 mb-4 hover:scale-110 transition-transform duration-300"
            />
            <h4 className="text-green-300 font-bold mb-4 text-lg">Luxury Construction</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2 group hover:translate-x-1 transition-transform duration-300">
                <span className="inline-block w-1.5 h-1.5 bg-green-300 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                <span className="text-green-300 font-semibold text-sm">Trusted</span>
              </div>
              <div className="flex items-center gap-2 group hover:translate-x-1 transition-transform duration-300">
                <span className="inline-block w-1.5 h-1.5 bg-green-300 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                <span className="text-green-300 font-semibold text-sm">Local</span>
              </div>
              <div className="flex items-center gap-2 group hover:translate-x-1 transition-transform duration-300">
                <span className="inline-block w-1.5 h-1.5 bg-green-300 rounded-full group-hover:scale-150 transition-transform duration-300"></span>
                <span className="text-green-300 font-semibold text-sm">Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '100ms' }}>
            <h4 className="text-green-300 font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-green-100 hover:text-green-300 hover:translate-x-1 transition-all duration-300 inline-block">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-green-100 hover:text-green-300 hover:translate-x-1 transition-all duration-300 inline-block">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-green-100 hover:text-green-300 hover:translate-x-1 transition-all duration-300 inline-block">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#faq" className="text-green-100 hover:text-green-300 hover:translate-x-1 transition-all duration-300 inline-block">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '200ms' }}>
            <h4 className="text-green-300 font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-green-100 hover:text-green-300 hover:translate-x-1 transition-all duration-300 inline-block">
                  Concrete Driveways
                </a>
              </li>
              <li>
                <a href="#services" className="text-green-100 hover:text-green-300 hover:translate-x-1 transition-all duration-300 inline-block">
                  Decorative Concrete
                </a>
              </li>
              <li>
                <a href="#services" className="text-green-100 hover:text-green-300 hover:translate-x-1 transition-all duration-300 inline-block">
                  Home Remodeling
                </a>
              </li>
              <li>
                <a href="#services" className="text-green-100 hover:text-green-300 hover:translate-x-1 transition-all duration-300 inline-block">
                  Sports Courts
                </a>
              </li>
            </ul>
          </div>

          {/* Services Offered */}
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '300ms' }}>
            <h4 className="text-green-300 font-bold mb-4">Services Offered</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-start gap-2 group hover:translate-x-1 transition-all duration-300">
                <span className="text-green-300 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300">✓</span>
                <span className="text-green-100 group-hover:text-green-300 transition-colors duration-300">
                  All Types of Concrete Work
                </span>
              </li>
              <li className="flex items-start gap-2 group hover:translate-x-1 transition-all duration-300">
                <span className="text-green-300 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300">✓</span>
                <span className="text-green-100 group-hover:text-green-300 transition-colors duration-300">
                  Walkout Basements
                </span>
              </li>
              <li className="flex items-start gap-2 group hover:translate-x-1 transition-all duration-300">
                <span className="text-green-300 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300">✓</span>
                <span className="text-green-100 group-hover:text-green-300 transition-colors duration-300">
                  Pavers & Retaining Walls
                </span>
              </li>
              <li className="flex items-start gap-2 group hover:translate-x-1 transition-all duration-300">
                <span className="text-green-300 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300">✓</span>
                <span className="text-green-100 group-hover:text-green-300 transition-colors duration-300">
                  New Driveways, Footings & Foundations
                </span>
              </li>
              <li className="flex items-start gap-2 group hover:translate-x-1 transition-all duration-300">
                <span className="text-green-300 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300">✓</span>
                <span className="text-green-100 group-hover:text-green-300 transition-colors duration-300">
                  Full Landscaping & Tree Removal
                </span>
              </li>
              <li className="flex items-start gap-2 group hover:translate-x-1 transition-all duration-300">
                <span className="text-green-300 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300">✓</span>
                <span className="text-green-100 group-hover:text-green-300 transition-colors duration-300">
                  New Fence Installations
                </span>
              </li>
              <li className="flex items-start gap-2 group hover:translate-x-1 transition-all duration-300">
                <span className="text-green-300 mt-1 flex-shrink-0 group-hover:scale-125 transition-transform duration-300">✓</span>
                <span className="text-green-100 group-hover:text-green-300 transition-colors duration-300">
                  ADUs, Home Additions & Roofing
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className={`transform transition-all duration-1000 ease-out ${
            isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '400ms' }}>
            <h4 className="text-green-300 font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3 group hover:translate-x-1 transition-all duration-300">
                <FaMapMarkerAlt className="text-green-300 mt-1 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <div>
                  <p className="text-green-100 group-hover:text-green-300 transition-colors duration-300">2861 S 2700 E</p>
                  <p className="text-green-100 group-hover:text-green-300 transition-colors duration-300">Salt Lake City, UT 84109</p>
                </div>
              </div>
              <div className="flex items-center gap-3 group hover:translate-x-1 transition-all duration-300">
                <FaPhone className="text-green-300 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href="tel:(385)227-4522" className="text-green-100 hover:text-green-300 transition-colors duration-300">
                  (385) 227-4522
                </a>
              </div>
              <div className="flex items-center gap-3 group hover:translate-x-1 transition-all duration-300">
                <FaEnvelope className="text-green-300 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <a href="mailto:contact@luxurycl.net" className="text-green-100 hover:text-green-300 transition-colors duration-300">
                  contact@luxurycl.net
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className={`border-t border-green-600 pt-8 flex justify-between items-center flex-col md:flex-row gap-4 transform transition-all duration-1000 ease-out ${
          isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`} style={{ transitionDelay: '500ms' }}>
          <p className="text-green-100 text-sm">
            &copy; {currentYear} Luxury Construction LLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-green-100 hover:text-green-300 hover:scale-125 transition-all duration-300 transform"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-green-100 hover:text-green-300 hover:scale-125 transition-all duration-300 transform"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-green-100 hover:text-green-300 hover:scale-125 transition-all duration-300 transform"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-green-900 py-4 text-center text-green-100 text-sm">
        <p>
          Luxury Construction - Premier Concrete Contractors in Salt Lake City, UT | Driveways • Patios • Foundations • Landscaping
        </p>
      </div>
    </footer>
  )
}
