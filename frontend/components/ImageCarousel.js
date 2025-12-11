import { useState, useEffect } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

export default function ImageCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [autoPlay, setAutoPlay] = useState(true)
  const [isTransitioning, setIsTransitioning] = useState(true)

  const slides = [
    {
      image: '/p1.png',
      title: 'Premium Project Showcase #1',
      description: 'Exceptional construction quality and professional craftsmanship on display',
      alt: 'Premium Construction Project - Professional Quality Work',
    },
    {
      image: '/p2.png',
      title: 'Premium Project Showcase #2',
      description: 'Stunning design and flawless execution in every detail',
      alt: 'Premium Construction Project - Expert Design and Build',
    },
    {
      image: '/p3.jpg',
      title: 'Premium Project Showcase #3',
      description: 'Beautiful transformation showcasing our construction expertise',
      alt: 'Premium Construction Project - Professional Transformation',
    },
    {
      image: '/p4.jpg',
      title: 'Premium Project Showcase #4',
      description: 'High-quality construction meeting and exceeding expectations',
      alt: 'Premium Construction Project - Quality Excellence',
    },
    {
      image: '/p5.jpg',
      title: 'Premium Project Showcase #5',
      description: 'Professional workmanship creating lasting value for our clients',
      alt: 'Premium Construction Project - Professional Workmanship',
    },
    {
      image: '/p6.jpg',
      title: 'Premium Project Showcase #6',
      description: 'Completed projects demonstrating our commitment to excellence',
      alt: 'Premium Construction Project - Excellence in Construction',
    },
    {
      image: '/concrete_driveways.jpg',
      title: 'Concrete Driveways',
      description: 'Durable, beautiful driveways built to last in Salt Lake City\'s climate',
      alt: 'Professional Concrete Driveways - Luxury Construction',
    },
    {
      image: '/concrete_foundation.jpg',
      title: 'Concrete Foundations',
      description: 'Strong, reliable foundations engineered for long-term stability',
      alt: 'Concrete Foundations - Expert Construction Services',
    },
    {
      image: '/decorative.jpg',
      title: 'Decorative Concrete',
      description: 'Transform your space with custom finishes and stunning designs',
      alt: 'Decorative Concrete - Custom Design Solutions',
    },
    {
      image: '/decorativeandstamped.png',
      title: 'Stamped Concrete',
      description: 'Premium stamped patterns that mimic stone, brick, or wood',
      alt: 'Stamped Concrete - Professional Finishing',
    },
    {
      image: '/garage-builder.jpg',
      title: 'Garage Construction',
      description: 'Expert garage building and home construction services',
      alt: 'Garage Construction - Professional Home Building',
    },
    {
      image: '/heated-driveways.jpg',
      title: 'Heated Driveway Systems',
      description: 'Keep your property safe and snow-free all winter long',
      alt: 'Heated Driveway Systems - Winter Safety Solutions',
    },
    {
      image: '/landscaping.jpg',
      title: 'Landscaping Services',
      description: 'Beautiful outdoor spaces designed for your lifestyle',
      alt: 'Landscaping Services - Professional Outdoor Design',
    },
    {
      image: '/outdoor.png',
      title: 'Outdoor Living Spaces',
      description: 'Create stunning patios, walkways, and outdoor features',
      alt: 'Outdoor Living Spaces - Premium Hardscaping',
    },
  ]

  // Auto-play carousel
  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length)
    }, 5000) // Change slide every 5 seconds

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
    <section className="section-padding bg-white">
      <div className="container-custom">
        <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-12 text-center transition-all duration-300 hover:text-primary-600">
          Our Project Gallery
        </h2>

        <div
          className="relative w-full bg-gray-900 rounded-2xl overflow-hidden shadow-2xl"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          {/* Carousel Container */}
          <div className="relative h-96 md:h-[500px] lg:h-[600px] overflow-hidden bg-black">
            {/* Slides */}
            {slides.map((slide, idx) => (
              <div
                key={idx}
                className={`absolute inset-0 transition-all duration-1000 ease-out ${
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
                {/* Dark Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-60"></div>

                {/* Content Overlay */}
                <div className={`absolute inset-0 flex flex-col justify-end p-6 md:p-8 lg:p-12 transition-all duration-1000 ease-out ${
                  idx === currentSlide
                    ? 'opacity-100 translate-y-0'
                    : 'opacity-0 translate-y-8'
                }`}>
                  <h3 className="text-2xl md:text-3xl lg:text-4xl font-bold text-white mb-2 md:mb-4">
                    {slide.title}
                  </h3>
                  <p className="text-sm md:text-base lg:text-lg text-gray-200 max-w-2xl">
                    {slide.description}
                  </p>
                </div>
              </div>
            ))}

            {/* Navigation Buttons */}
            <button
              onClick={prevSlide}
              className="absolute left-4 md:left-6 top-1/2 -translate-y-1/2 z-20 bg-accent-gold hover:bg-primary-700 text-white p-3 md:p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl"
              aria-label="Previous slide"
            >
              <FaChevronLeft className="text-lg md:text-xl" />
            </button>

            <button
              onClick={nextSlide}
              className="absolute right-4 md:right-6 top-1/2 -translate-y-1/2 z-20 bg-accent-gold hover:bg-primary-700 text-white p-3 md:p-4 rounded-full transition-all duration-300 transform hover:scale-110 shadow-lg hover:shadow-2xl"
              aria-label="Next slide"
            >
              <FaChevronRight className="text-lg md:text-xl" />
            </button>

            {/* Slide Counter */}
            <div className="absolute top-4 right-4 md:top-6 md:right-6 bg-black bg-opacity-60 text-white px-3 md:px-4 py-2 rounded-full text-xs md:text-sm font-semibold backdrop-blur-sm">
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
                aria-label={`Go to slide ${idx + 1}`}
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
                  className={`flex-shrink-0 h-16 md:h-20 w-24 md:w-28 rounded-lg overflow-hidden transition-all duration-300 border-2 ${
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
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Info Section */}
        <div className="mt-8 md:mt-12 grid md:grid-cols-3 gap-6 md:gap-8">
          <div className="bg-gradient-to-br from-primary-50 to-white p-6 md:p-8 rounded-xl border-2 border-primary-200 hover:border-accent-gold transition-all duration-300">
            <h3 className="text-lg md:text-xl font-bold text-primary-700 mb-2">
              🎯 Expert Craftsmanship
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Every project showcases our commitment to quality and attention to detail.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-white p-6 md:p-8 rounded-xl border-2 border-primary-200 hover:border-accent-gold transition-all duration-300">
            <h3 className="text-lg md:text-xl font-bold text-primary-700 mb-2">
              ✨ Professional Results
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Stunning transformations that exceed expectations and add lasting value.
            </p>
          </div>

          <div className="bg-gradient-to-br from-primary-50 to-white p-6 md:p-8 rounded-xl border-2 border-primary-200 hover:border-accent-gold transition-all duration-300">
            <h3 className="text-lg md:text-xl font-bold text-primary-700 mb-2">
              🏆 Trusted Partner
            </h3>
            <p className="text-gray-600 text-sm md:text-base">
              Serving Salt Lake City with excellence and integrity for years.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
