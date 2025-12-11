import { useState, useEffect } from 'react'
import Link from 'next/link'
import { FaArrowRight, FaCheckCircle, FaChevronDown } from 'react-icons/fa'

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false)
  const [scrollY, setScrollY] = useState(0)
  const [displayedText, setDisplayedText] = useState('')
  const fullText = 'Luxury Construction\nYour General\nContractor for All\nYour Construction Needs'
  const typingSpeed = 50

  useEffect(() => {
    setIsVisible(true)
    const handleScroll = () => setScrollY(window.scrollY)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Typewriter effect - types the entire text
  useEffect(() => {
    if (!isVisible) return
    
    let index = 0
    const timer = setInterval(() => {
      if (index < fullText.length) {
        setDisplayedText(fullText.substring(0, index + 1))
        index++
      } else {
        clearInterval(timer)
      }
    }, typingSpeed)

    return () => clearInterval(timer)
  }, [isVisible])

  return (
    <>
      {/* Hero Section with Background Image */}
      <section 
        className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-primary-700 via-primary-600 to-primary-700"
        style={{
          backgroundImage: 'linear-gradient(135deg, rgba(27, 94, 32, 0.85) 0%, rgba(45, 134, 89, 0.80) 50%, rgba(27, 94, 32, 0.85) 100%), url(https://res.cloudinary.com/dtr1tnutd/image/upload/c_scale,w_1920,q_auto/v1765250127/why2_jpg)',
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed',
        }}
      >
        {/* Overlay with gradient - Green to match logo */}
        <div 
          className="absolute inset-0 bg-gradient-to-b from-primary-700/60 via-primary-600/50 to-primary-700/60 backdrop-blur-sm"
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
            transition: 'transform 0.15s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
          }}
        />

        {/* Content */}
        <div className="relative z-10 container-custom py-20 md:py-32 w-full">
          <div className="w-full">
            {/* Left Content - Full Width */}
            <div 
              className={`transform transition-all duration-1200 ease-out max-w-2xl ${
                isVisible 
                  ? 'opacity-100 translate-x-0' 
                  : 'opacity-0 -translate-x-20'
              }`}
            >
              {/* Welcome Text */}
              <div className="mb-6 inline-block">
                <span className="text-accent-gold font-bold text-sm md:text-base tracking-widest uppercase animate-pulse drop-shadow-lg">
                  Welcome to Luxury Construction
                </span>
              </div>

              {/* Main Heading with Typewriter Effect */}
              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-xl transition-all duration-1200 ease-out" 
                style={{
                  textShadow: '0 4px 20px rgba(0, 0, 0, 0.5)',
                  letterSpacing: '-0.02em',
                  whiteSpace: 'pre-wrap',
                  wordBreak: 'break-word',
                  minHeight: '1.2em'
                }}>
                {displayedText.split('\n').map((line, idx) => (
                  <div key={idx}>
                    {line.startsWith('Luxury Construction') ? (
                      <>
                        <span className="text-accent-gold">Luxury Construction</span>
                        {line.substring(19)}
                      </>
                    ) : (
                      line
                    )}
                  </div>
                ))}
                <span className={`${displayedText.length === fullText.length ? 'hidden' : 'inline-block'} w-1 h-[1.2em] bg-accent-gold ml-1 animate-pulse`}></span>
              </h1>

              {/* Tagline with Gold Accent */}
              <div className="mb-8 inline-flex items-center gap-2 bg-accent-gold/25 backdrop-blur-md px-6 py-3 rounded-xl border-2 border-accent-gold/60 hover:border-accent-gold hover:bg-accent-gold/35 transition-all duration-500 ease-out shadow-lg">
                <span className="text-accent-gold font-bold text-lg">Trusted.</span>
                <span className="text-white font-bold text-lg">Local.</span>
                <span className="text-accent-gold font-bold text-lg">Guaranteed.</span>
              </div>

              {/* Description */}
              <p className="text-lg text-white mb-6 leading-relaxed drop-shadow-lg max-w-2xl font-medium transition-all duration-1200 ease-out">
                As trusted Concrete Contractors in Salt Lake City, UT, we deliver work that is solid, beautiful, and intentionally crafted to withstand the hot summers, snowy winters, and high-elevation conditions unique to this area. This is why we deliver expert craftsmanship with genuine care for the people and communities we serve, offering both residential and commercial concrete solutions.
              </p>

              <p className="text-base text-gray-100 mb-8 leading-relaxed drop-shadow-lg max-w-2xl transition-all duration-1200 ease-out">
                From the first conversation to the final finish, we make the process smooth and stress-free. Whether your home is near the Wasatch Front or your business sits in the heart of downtown, our team gets it right the first time, bringing your vision to life with clarity, quality, and long-lasting results.
              </p>

              {/* Trust Badges */}
              <div className="flex flex-col sm:flex-row gap-4 mb-8">
                <div className="flex items-center gap-3 text-white bg-white/15 backdrop-blur-md px-5 py-3 rounded-xl border-2 border-accent-gold/40 hover:border-accent-gold hover:bg-white/25 transition-all duration-500 ease-out shadow-lg transform hover:scale-105">
                  <FaCheckCircle className="text-accent-gold text-xl flex-shrink-0" />
                  <span className="font-semibold">Expert Craftsmanship</span>
                </div>
                <div className="flex items-center gap-3 text-white bg-white/15 backdrop-blur-md px-5 py-3 rounded-xl border-2 border-accent-gold/40 hover:border-accent-gold hover:bg-white/25 transition-all duration-500 ease-out shadow-lg transform hover:scale-105">
                  <FaCheckCircle className="text-accent-gold text-xl flex-shrink-0" />
                  <span className="font-semibold">Licensed & Insured</span>
                </div>
              </div>

              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4 mb-12">
                <Link 
                  href="/estimate" 
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-accent-gold via-yellow-400 to-accent-gold text-primary-900 font-bold rounded-xl hover:shadow-2xl hover:from-yellow-400 hover:via-accent-gold hover:to-yellow-400 transition-all duration-500 ease-out transform hover:scale-110 active:scale-95 drop-shadow-xl border-2 border-yellow-300/50"
                >
                  <span>Get Free Estimate</span>
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
                <Link 
                  href="#services" 
                  className="group flex items-center justify-center gap-2 px-8 py-4 bg-white/20 backdrop-blur-md text-white font-bold rounded-xl hover:bg-white/35 border-2 border-white/80 hover:border-white transition-all duration-500 ease-out transform hover:scale-110 active:scale-95 drop-shadow-xl"
                >
                  <span>View Services</span>
                  <FaArrowRight className="group-hover:translate-x-2 transition-transform duration-300" />
                </Link>
              </div>

            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div 
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 animate-bounce"
          style={{
            opacity: Math.max(0, 1 - scrollY / 200),
          }}
        >
          <div className="text-white text-center">
            <p className="text-sm font-semibold mb-2">Scroll to explore</p>
            <FaChevronDown className="w-6 h-6 mx-auto text-accent-gold animate-bounce" />
          </div>
        </div>
      </section>
    </>
  )
}
