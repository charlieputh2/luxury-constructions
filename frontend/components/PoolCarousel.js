import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight, FaStar } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function PoolCarousel() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)

  const slides = [
    {
      image: '/pool1.jpg',
      title: 'Olympic-Size Swimming Pool',
      description: 'Professional-grade swimming pool with crystal-clear water and modern filtration systems',
      alt: 'Olympic-Size Swimming Pool - Professional Pool Construction',
      features: ['Olympic Dimensions', 'Advanced Filtration', 'LED Lighting'],
    },
    {
      image: '/pool2.jpg',
      title: 'Luxury Resort Pool',
      description: 'Stunning resort-style pool with elegant design and premium amenities',
      alt: 'Luxury Resort Pool - High-End Pool Design',
      features: ['Resort Style', 'Custom Design', 'Premium Finishes'],
    },
    {
      image: '/pool3.jpg',
      title: 'Backyard Oasis Pool',
      description: 'Beautiful residential pool perfect for family gatherings and relaxation',
      alt: 'Backyard Oasis Pool - Residential Pool Construction',
      features: ['Family Friendly', 'Custom Features', 'Landscaping'],
    },
    {
      image: '/pool4.jpg',
      title: 'Modern Infinity Pool',
      description: 'Contemporary infinity pool with stunning architectural design and water features',
      alt: 'Modern Infinity Pool - Contemporary Pool Design',
      features: ['Infinity Edge', 'Water Features', 'Modern Design'],
    },
    {
      image: '/pool5.jpg',
      title: 'Heated Therapeutic Pool',
      description: 'Therapeutic heated pool with wellness features and comfortable temperature control',
      alt: 'Heated Therapeutic Pool - Wellness Pool Solutions',
      features: ['Heated System', 'Therapeutic Benefits', 'Year-Round Use'],
    },
  ]

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 6000) // Change slide every 6 seconds

    return () => clearInterval(interval)
  }, [autoPlay, slides.length])

  const goToSlide = (index) => {
    setCurrentSlide(index)
  }

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % slides.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + slides.length) % slides.length)
  }

  const handleMouseEnter = () => {
    setAutoPlay(false)
  }

  const handleMouseLeave = () => {
    setAutoPlay(true)
  }

  return (
    <section className="section-padding bg-gradient-to-b from-primary-50 to-white">
      <div className="container-custom">
        <div className={`text-center mb-12 transform transition-all duration-1200 ease-out ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`} ref={sectionRef}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary-700 mb-4 transition-all duration-300 hover:text-primary-600">
            Premium Pool Construction Gallery
          </h2>
          <p className="text-gray-600 text-base md:text-lg max-w-3xl mx-auto">
            Explore our stunning collection of professionally designed and constructed pools. From residential oases to resort-style installations, we create aquatic masterpieces that enhance your property.
          </p>
        </div>

        <div
          className="relative w-full bg-gray-900 rounded-3xl overflow-hidden shadow-2xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel Container */}
          <div className="relative h-96 md:h-[500px] lg:h-[650px] overflow-hidden bg-black">
            {/* Slides */}
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-1200 ease-out ${
                  idx === currentSlide
                    ? 'opacity-100 scale-100'
                    : 'opacity-0 scale-95'
                }`}
              >
                <img
                  src={slide.image}
                  alt={slide.alt}
                  loading={idx === currentSlide ? 'eager' : 'lazy'}
                  className="w-full h-full object-cover"
                />
                {/* Dark Overlay with Gradient */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-70"></div>

                {/* Content Overlay */}
                <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-12 transition-all duration-1200 ease-out ${
                  idx === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}>
                  <div className="max-w-2xl">
                    <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4 flex items-center gap-2">
                      <FaStar className="text-accent-gold text-lg md:text-2xl" />
                      {slide.title}
                    </h3>
                    <p className="text-sm md:text-base lg:text-lg text-gray-200 mb-4 md:mb-6">
                      {slide.description}
                    </p>
                    
                    {/* Features Tags */}
                    <div className="flex flex-wrap gap-2 md:gap-3">
                      {slide.features.map((feature, fIdx) => (
                        <span
                          key={fIdx}
                          className="bg-accent-gold text-primary-900 text-xs md:text-sm font-bold px-3 md:px-4 py-1 md:py-2 rounded-full"
                        >
                          {feature}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-accent-gold hover:bg-primary-700 text-white p-3 md:p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl"
              aria-label="Previous pool image"
            >
              <FaChevronLeft className="text-lg md:text-xl" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-accent-gold hover:bg-primary-700 text-white p-3 md:p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl"
              aria-label="Next pool image"
            >
              <FaChevronRight className="text-lg md:text-xl" />
            </button>

            {/* Slide Counter */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-black bg-opacity-70 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm border border-accent-gold">
              {currentSlide + 1} / {slides.length}
            </div>
          </div>

          {/* Dots Navigation */}
          <div className="bg-gray-900 px-6 md:px-8 py-4 md:py-6 flex justify-center gap-2 md:gap-3 flex-wrap">
            {slides.map((_, idx) => (
              <button
                key={idx}
                onClick={() => goToSlide(idx)}
                className={`transition-all duration-300 rounded-full ${
                  idx === currentSlide
                    ? 'bg-accent-gold w-8 md:w-10 h-3 md:h-4'
                    : 'bg-gray-600 hover:bg-gray-500 w-3 md:w-4 h-3 md:h-4'
                }`}
                aria-label={`Go to pool image ${idx + 1}`}
              />
            ))}
          </div>

          {/* Thumbnail Strip */}
          <div className="bg-gray-950 px-4 md:px-6 py-4 overflow-x-auto">
            <div className="flex gap-2 md:gap-3 min-w-max">
              {slides.map((slide, idx) => (
                <button
                  key={idx}
                  onClick={() => goToSlide(idx)}
                  className={`flex-shrink-0 h-16 md:h-20 w-24 md:w-28 rounded-lg overflow-hidden transition-all duration-300 border-2 relative group ${
                    idx === currentSlide
                      ? 'border-accent-gold shadow-lg scale-105'
                      : 'border-gray-700 hover:border-gray-500 opacity-70 hover:opacity-100'
                  }`}
                >
                  <img
                    src={slide.image}
                    alt={slide.alt}
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                  {/* Hover Overlay */}
                  <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-40 transition-opacity duration-300"></div>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Pool Features Section */}
        <div className="mt-12 md:mt-16 grid md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          <div className={`bg-white p-6 md:p-8 rounded-xl border-2 border-primary-200 hover:border-accent-gold transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 transform transition-all duration-1200 ease-out ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`} style={{ transitionDelay: '75ms' }}>
            <h3 className="text-lg md:text-xl font-bold text-primary-700 mb-3 flex items-center gap-2">
              <span className="text-2xl">🏊</span> Custom Design
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Tailored pool designs that match your vision and property specifications perfectly.
            </p>
          </div>

          <div className={`bg-white p-6 md:p-8 rounded-xl border-2 border-primary-200 hover:border-accent-gold transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 transform transition-all duration-1200 ease-out ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`} style={{ transitionDelay: '150ms' }}>
            <h3 className="text-lg md:text-xl font-bold text-primary-700 mb-3 flex items-center gap-2">
              <span className="text-2xl">💧</span> Quality Materials
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Premium materials and advanced filtration systems for crystal-clear water year-round.
            </p>
          </div>

          <div className={`bg-white p-6 md:p-8 rounded-xl border-2 border-primary-200 hover:border-accent-gold transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 transform transition-all duration-1200 ease-out ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`} style={{ transitionDelay: '225ms' }}>
            <h3 className="text-lg md:text-xl font-bold text-primary-700 mb-3 flex items-center gap-2">
              <span className="text-2xl">⚡</span> Modern Features
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              LED lighting, heating systems, and smart automation for ultimate comfort and convenience.
            </p>
          </div>

          <div className={`bg-white p-6 md:p-8 rounded-xl border-2 border-primary-200 hover:border-accent-gold transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 transform transition-all duration-1200 ease-out ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
          }`} style={{ transitionDelay: '300ms' }}>
            <h3 className="text-lg md:text-xl font-bold text-primary-700 mb-3 flex items-center gap-2">
              <span className="text-2xl">🛡️</span> Expert Installation
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Professional installation and maintenance services by experienced pool construction specialists.
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className={`mt-12 md:mt-16 bg-gradient-to-r from-primary-700 to-primary-600 rounded-2xl p-8 md:p-12 text-white text-center transform transition-all duration-1200 ease-out ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to Build Your Dream Pool?</h3>
          <p className="text-base md:text-lg text-primary-100 mb-6 max-w-2xl mx-auto">
            Contact us today for a free consultation and custom pool design proposal. Our expert team is ready to create your perfect aquatic oasis.
          </p>
          <a
            href="/estimate"
            className="inline-block px-8 py-4 bg-accent-gold text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 transform hover:scale-105"
          >
            Get Free Pool Estimate
          </a>
        </div>
      </div>
    </section>
  )
}
