import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaBars, FaTimes, FaPhone, FaMapMarkerAlt, FaEnvelope, FaChevronDown, FaClock } from 'react-icons/fa'

export default function Header() {
  const [isOpen, setIsOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)
  const [isServicesDropdownOpen, setIsServicesDropdownOpen] = useState(false)
  const [isMobileServicesOpen, setIsMobileServicesOpen] = useState(false)
  const [activeSubmenu, setActiveSubmenu] = useState(null)
  const [activeMobileSubmenu, setActiveMobileSubmenu] = useState(null)
  const [currentTime, setCurrentTime] = useState('')

  useEffect(() => {
    const updateTime = () => {
      const now = new Date()
      const options = {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        timeZone: 'America/Denver',
        hour12: true
      }
      const formatter = new Intl.DateTimeFormat('en-US', options)
      setCurrentTime(formatter.format(now))
    }
    
    updateTime()
    const interval = setInterval(updateTime, 1000)
    return () => clearInterval(interval)
  }, [])

  const toggleMenu = () => setIsOpen(!isOpen)

  const services = [
    {
      name: 'Concrete Services',
      href: '/services/concrete',
      submenu: [
        { name: 'Concrete Driveways', href: '/services/concrete-driveways' },
        { name: 'Heated Driveway Systems', href: '/services/heated-driveways' },
        { name: 'Sidewalks & Walkways', href: '/services/sidewalks' },
        { name: 'Concrete Foundations', href: '/services/foundations' },
      ],
    },
    {
      name: 'Garage & Home Construction',
      href: '/services/garage-home',
      submenu: [
        { name: 'Garage Construction', href: '/services/garage-construction' },
        { name: 'Home Additions', href: '/services/home-additions' },
        { name: 'Structural Work', href: '/services/structural-work' },
      ],
    },
    {
      name: 'Sports Court Construction',
      href: '/services/sports-courts',
      submenu: [
        { name: 'Basketball Courts', href: '/services/basketball-courts' },
        { name: 'Tennis Courts', href: '/services/tennis-courts' },
        { name: 'Multi-Sport Courts', href: '/services/multi-sport-courts' },
      ],
    },
    {
      name: 'Landscaping Services',
      href: '/services/landscaping',
      submenu: [
        { name: 'Landscape Design', href: '/services/landscape-design' },
        { name: 'Hardscaping', href: '/services/hardscaping' },
        { name: 'Outdoor Living', href: '/services/outdoor-living' },
      ],
    },
  ]

  // Handle scroll effect for header
  if (typeof window !== 'undefined') {
    window.addEventListener('scroll', () => {
      setIsScrolled(window.scrollY > 10)
    })
  }

  return (
    <>
      {/* Top Bar - Contact Info - Professional & User-Friendly */}
      <div className="bg-gradient-to-r from-primary-700 via-primary-600 to-primary-700 text-white py-2.5 md:py-3 shadow-md border-b-2 border-accent-gold/30">
        <div className="container-custom">
          {/* Mobile View - Compact & Responsive */}
          <div className="md:hidden flex flex-col gap-2">
            {/* Date & Time Display for Mobile */}
            <div className="flex items-center justify-center gap-2 text-white text-xs font-medium mb-1">
              <FaClock size={12} className="text-accent-gold flex-shrink-0" />
              <span>{currentTime || 'Loading...'}</span>
            </div>
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <a 
                href="tel:(385)227-4522" 
                className="flex items-center gap-2 text-white hover:text-accent-gold transition-all duration-300 ease-out px-3 py-1.5 rounded-lg hover:bg-white/10 group whitespace-nowrap"
              >
                <FaPhone size={16} className="text-accent-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-bold group-hover:text-accent-gold transition-colors duration-300">(385) 227-4522</span>
              </a>
              <span className="text-gray-300">•</span>
              <a 
                href="mailto:contact@luxurycl.net" 
                className="flex items-center gap-2 text-white hover:text-accent-gold transition-all duration-300 ease-out px-3 py-1.5 rounded-lg hover:bg-white/10 group whitespace-nowrap"
              >
                <FaEnvelope size={16} className="text-accent-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-bold group-hover:text-accent-gold transition-colors duration-300">Email</span>
              </a>
              <span className="text-gray-300">•</span>
              <Link
                href="/maps"
                legacyBehavior
              >
                <a className="flex items-center gap-2 text-white hover:text-accent-gold transition-all duration-300 ease-out px-3 py-1.5 rounded-lg hover:bg-white/10 group whitespace-nowrap">
                  <FaMapMarkerAlt size={16} className="text-accent-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                  <span className="text-sm font-bold group-hover:text-accent-gold transition-colors duration-300">Salt Lake City, UT</span>
                </a>
              </Link>
            </div>
          </div>

          {/* Desktop View - Clean & Professional */}
          <div className="hidden md:flex justify-between items-center gap-6">
            {/* Date & Time Display */}
            <div className="flex items-center gap-2 text-white text-sm font-medium">
              <FaClock size={14} className="text-accent-gold flex-shrink-0" />
              <span>{currentTime || 'Loading...'}</span>
            </div>
            <div className="flex items-center gap-6">
              <a 
                href="tel:(385)227-4522" 
                className="flex items-center gap-2.5 text-white hover:text-accent-gold transition-all duration-300 ease-out px-3 py-1.5 rounded-lg hover:bg-white/10 group"
              >
                <FaPhone size={18} className="text-accent-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-bold group-hover:text-accent-gold transition-colors duration-300">(385) 227-4522</span>
              </a>
              <span className="text-gray-400">|</span>
              <a 
                href="mailto:contact@luxurycl.net" 
                className="flex items-center gap-2.5 text-white hover:text-accent-gold transition-all duration-300 ease-out px-3 py-1.5 rounded-lg hover:bg-white/10 group"
              >
                <FaEnvelope size={18} className="text-accent-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-bold group-hover:text-accent-gold transition-colors duration-300">contact@luxurycl.net</span>
              </a>
            </div>
            <Link
              href="/maps"
              legacyBehavior
            >
              <a className="flex items-center gap-2.5 text-white hover:text-accent-gold transition-all duration-300 ease-out px-3 py-1.5 rounded-lg hover:bg-white/10 group">
                <FaMapMarkerAlt size={18} className="text-accent-gold flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-sm font-bold group-hover:text-accent-gold transition-colors duration-300">Salt Lake City, UT</span>
              </a>
            </Link>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <header className={`sticky top-0 z-50 transition-all duration-300 ${
        isScrolled 
          ? 'bg-white shadow-lg' 
          : 'bg-gradient-to-b from-white to-gray-50 shadow-md'
      }`}>
        <nav className="container-custom flex justify-between items-center py-4 md:py-6 px-4 md:px-6">
          {/* Logo Section */}
          <Link 
            href="/" 
            legacyBehavior
          >
            <a className="flex items-center gap-3 group" title="Luxury Construction - Premier Concrete Contractors in Salt Lake City">
              <div className="relative">
                <img
                  src="https://res.cloudinary.com/dtr1tnutd/image/upload/v1765250127/logo_zo8ea0.png"
                  alt="Luxury Construction Logo - Concrete Contractors Salt Lake City"
                  className="h-14 w-14 md:h-16 md:w-16 object-contain transition-transform group-hover:scale-110"
                  loading="eager"
                />
              </div>
              <div className="hidden sm:flex flex-col">
                <span className="font-bold text-lg md:text-xl text-primary-700 group-hover:text-primary-600 transition">
                  Luxury Construction
                </span>
              </div>
            </a>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden lg:flex gap-2 items-center">
            <Link 
              href="/" 
              className="px-5 py-2.5 text-primary-700 font-medium hover:text-primary-600 hover:bg-primary-50 rounded-lg transition"
              legacyBehavior
            >
              <a>Home</a>
            </Link>
            {/* Services Dropdown with Nested Submenus */}
            <div 
              className="relative group"
              onMouseEnter={() => setIsServicesDropdownOpen(true)}
              onMouseLeave={() => {
                setIsServicesDropdownOpen(false)
                setActiveSubmenu(null)
              }}
            >
              <button 
                className="px-5 py-2.5 text-primary-700 font-medium hover:text-primary-600 hover:bg-primary-50 rounded-lg transition flex items-center gap-2"
              >
                Services
                <FaChevronDown className={`text-sm transition-transform duration-300 ${isServicesDropdownOpen ? 'rotate-180' : ''}`} />
              </button>
              
              {/* Main Dropdown Menu */}
              <div className={`absolute left-0 mt-0 w-64 bg-white rounded-lg shadow-xl border-2 border-primary-200 overflow-hidden transition-all duration-300 z-50 ${
                isServicesDropdownOpen ? 'opacity-100 visible translate-y-0' : 'opacity-0 invisible -translate-y-2'
              }`}>
                {services.map((service, idx) => (
                  <div
                    key={idx}
                    className="relative group/submenu"
                    onMouseEnter={() => setActiveSubmenu(idx)}
                    onMouseLeave={() => setActiveSubmenu(null)}
                  >
                    <Link
                      href={service.href}
                      className="block px-4 py-3 text-primary-700 font-medium hover:bg-primary-50 hover:text-primary-600 border-b border-primary-100 last:border-b-0 transition-all duration-300 flex items-center justify-between"
                      legacyBehavior
                    >
                      <a className="flex items-center justify-between w-full">
                        <span>{service.name}</span>
                        {service.submenu && <FaChevronDown className="text-xs text-accent-gold" />}
                      </a>
                    </Link>
                    
                    {/* Submenu */}
                    {service.submenu && (
                      <div className={`absolute left-full top-0 ml-0 w-56 bg-white rounded-lg shadow-xl border-2 border-primary-200 overflow-hidden transition-all duration-300 ${
                        activeSubmenu === idx ? 'opacity-100 visible translate-x-0' : 'opacity-0 invisible -translate-x-2'
                      }`}>
                        {service.submenu.map((subservice, subidx) => (
                          <Link
                            key={subidx}
                            href={subservice.href}
                            className="block px-4 py-3 text-primary-600 font-medium hover:bg-primary-50 hover:text-primary-700 border-b border-primary-100 last:border-b-0 transition-all duration-300"
                            legacyBehavior
                          >
                            <a>{subservice.name}</a>
                          </Link>
                        ))}
                      </div>
                    )}
                  </div>
                ))}
              </div>
            </div>
            <Link 
              href="/why-us" 
              className="px-5 py-2.5 text-primary-700 font-medium hover:text-primary-600 hover:bg-primary-50 rounded-lg transition"
              legacyBehavior
            >
              <a>Why Us</a>
            </Link>
            <Link 
              href="/benefits" 
              className="px-5 py-2.5 text-primary-700 font-medium hover:text-primary-600 hover:bg-primary-50 rounded-lg transition"
              legacyBehavior
            >
              <a>Benefits</a>
            </Link>
            <Link 
              href="/faq" 
              className="px-5 py-2.5 text-primary-700 font-medium hover:text-primary-600 hover:bg-primary-50 rounded-lg transition"
              legacyBehavior
            >
              <a>FAQ</a>
            </Link>
            <Link 
              href="/about" 
              className="px-5 py-2.5 text-primary-700 font-medium hover:text-primary-600 hover:bg-primary-50 rounded-lg transition"
              legacyBehavior
            >
              <a>About</a>
            </Link>
            <Link 
              href="/contact" 
              className="px-5 py-2.5 text-primary-700 font-medium hover:text-primary-600 hover:bg-primary-50 rounded-lg transition"
              legacyBehavior
            >
              <a>Contact</a>
            </Link>
          </div>

          {/* CTA Button - Desktop */}
          <a
            href="tel:(385)227-4522"
            className="hidden md:flex items-center gap-2 px-7 py-2.5 bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-900 font-bold rounded-lg hover:shadow-lg hover:from-yellow-500 hover:to-accent-gold transition-all ml-4"
          >
            <FaPhone size={16} />
            <span className="hidden lg:inline">Call Now</span>
          </a>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="lg:hidden p-2 text-primary-700 hover:bg-primary-50 rounded-lg transition"
            aria-label="Toggle navigation menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </nav>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="lg:hidden bg-gradient-to-b from-white to-gray-50 border-t-2 border-primary-200 shadow-lg">
            <div className="container-custom py-4 flex flex-col gap-2">
              <Link
                href="/"
                className="px-4 py-3 text-primary-700 font-medium hover:bg-primary-50 rounded-lg transition"
                onClick={() => setIsOpen(false)}
                legacyBehavior
              >
                <a>Home</a>
              </Link>
              <Link
                href="/about"
                className="px-4 py-3 text-primary-700 font-medium hover:bg-primary-50 rounded-lg transition"
                onClick={() => setIsOpen(false)}
                legacyBehavior
              >
                <a>About</a>
              </Link>
              {/* Mobile Services Dropdown with Nested Submenus */}
              <div className="px-4 py-3">
                <button
                  onClick={() => setIsMobileServicesOpen(!isMobileServicesOpen)}
                  className="w-full text-left text-primary-700 font-medium hover:text-primary-600 flex items-center justify-between"
                >
                  Services
                  <FaChevronDown className={`text-sm transition-transform duration-300 ${isMobileServicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {isMobileServicesOpen && (
                  <div className="mt-2 ml-4 space-y-2 border-l-2 border-primary-200 pl-4">
                    {services.map((service, idx) => (
                      <div key={idx}>
                        <div className="flex items-center justify-between">
                          <Link
                            href={service.href}
                            className="py-2 text-primary-600 hover:text-primary-700 font-medium transition-colors flex-1"
                            onClick={() => {
                              setIsOpen(false)
                              setIsMobileServicesOpen(false)
                              setActiveMobileSubmenu(null)
                            }}
                            legacyBehavior
                          >
                            <a>{service.name}</a>
                          </Link>
                          {service.submenu && (
                            <button
                              onClick={() => setActiveMobileSubmenu(activeMobileSubmenu === idx ? null : idx)}
                              className="text-accent-gold hover:text-primary-700 transition-colors"
                            >
                              <FaChevronDown className={`text-xs transition-transform duration-300 ${activeMobileSubmenu === idx ? 'rotate-180' : ''}`} />
                            </button>
                          )}
                        </div>
                        {service.submenu && activeMobileSubmenu === idx && (
                          <div className="mt-2 ml-4 space-y-2 border-l-2 border-accent-gold pl-4">
                            {service.submenu.map((subservice, subidx) => (
                              <Link
                                key={subidx}
                                href={subservice.href}
                                className="block py-2 text-primary-500 hover:text-primary-600 font-medium transition-colors text-sm"
                                onClick={() => {
                                  setIsOpen(false)
                                  setIsMobileServicesOpen(false)
                                  setActiveMobileSubmenu(null)
                                }}
                                legacyBehavior
                              >
                                <a>{subservice.name}</a>
                              </Link>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                )}
              </div>
              <Link
                href="/why-us"
                className="px-4 py-3 text-primary-700 font-medium hover:bg-primary-50 rounded-lg transition"
                onClick={() => setIsOpen(false)}
                legacyBehavior
              >
                <a>Why Us</a>
              </Link>
              <Link
                href="/benefits"
                className="px-4 py-3 text-primary-700 font-medium hover:bg-primary-50 rounded-lg transition"
                onClick={() => setIsOpen(false)}
                legacyBehavior
              >
                <a>Benefits</a>
              </Link>
              <Link
                href="/faq"
                className="px-4 py-3 text-primary-700 font-medium hover:bg-primary-50 rounded-lg transition"
                onClick={() => setIsOpen(false)}
                legacyBehavior
              >
                <a>FAQ</a>
              </Link>
              <Link
                href="/contact"
                className="px-4 py-3 text-primary-700 font-medium hover:bg-primary-50 rounded-lg transition"
                onClick={() => setIsOpen(false)}
                legacyBehavior
              >
                <a>Contact</a>
              </Link>
              <a
                href="tel:(385)227-4522"
                className="px-4 py-3 bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-900 font-bold rounded-lg hover:shadow-lg transition-all flex items-center justify-center gap-2 mt-2"
              >
                <FaPhone size={16} />
                Call Now
              </a>
              <a
                href="mailto:contact@luxurycl.net"
                className="px-4 py-3 bg-primary-100 text-primary-700 font-medium rounded-lg hover:bg-primary-200 transition text-center"
              >
                Email Us
              </a>
            </div>
          </div>
        )}
      </header>
    </>
  )
}
