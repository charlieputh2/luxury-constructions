import { useState } from 'react'
import { FaRoad, FaHome, FaBasketballBall, FaLeaf } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import ServiceModal from './ServiceModal'

export default function Services() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [selectedService, setSelectedService] = useState(null)
  const [isModalOpen, setIsModalOpen] = useState(false)
  const concreteServices = [
    {
      title: 'Concrete Driveways',
      description:
        'Upgrade your property with durable, long-lasting concrete driveways in Salt Lake City, UT. We design and build custom driveways that handle tough weather, enhance curb appeal, and provide years of reliable performance. Quality materials and expert craftsmanship guaranteed.',
      image: '/concrete_driveways.jpg',
    },
    {
      title: 'Heated Driveway Systems',
      description:
        'Our heated driveway systems in Salt Lake City, UT keep your property safe and snow-free all winter. We install efficient, long-lasting solutions that melt ice automatically, reduce shoveling, and protect your concrete for years. Perfect for homes and businesses.',
      image: '/heated-driveways.jpg',
    },
    {
      title: 'Sidewalks & Walkways',
      description:
        'We build strong, beautiful sidewalks and walkways in Salt Lake City, UT designed for daily use and long-term durability. Whether you need a clean, modern path or a customized walkway, we deliver safe, functional, and attractive concrete work built to last.',
      image: '/sidewalk.jpg',
    },
    {
      title: 'Concrete Foundations',
      description:
        'Get reliable concrete foundations in Salt Lake City, UT engineered for strength, stability, and long-term performance. From new homes to commercial builds, we deliver high-quality foundation work that ensures your structure stands solid for decades.',
      image: '/concrete_foundation.jpg',
    },
    {
      title: 'Walkout Basements',
      description:
        'Create more usable space with custom walkout basements in Salt Lake City, UT. We design and build strong, code-compliant basement exits that improve convenience, accessibility, and property value. Tailored to your layout and long-term goals.',
      image: '/walkoutbasement.jpg',
    },
    {
      title: 'Decorative Concrete',
      description:
        'Transform ordinary spaces with decorative concrete in Salt Lake City, UT. We offer custom finishes, colors, textures, and designs to create stunning patios, walkways, and outdoor features that match your style. Beautiful, durable, and built to last.',
      image: '/decorative.jpg',
    },
    {
      title: 'Stamped Concrete',
      description:
        'Enhance your property with stamped concrete in Salt Lake City, UT. We offer custom patterns, textures, and colors that mimic stone, brick, or wood, giving your driveway, patio, or walkway a premium look without the high cost.',
      image: '/stamped.jpg',
    },
    {
      title: 'Retaining Walls',
      description:
        'Our retaining walls in Salt Lake City, UT are built for strength, stability, and visual appeal. We design functional retaining systems that manage slopes, prevent erosion, and upgrade your landscape with clean, long-lasting construction.',
      image: '/retaining-wall.jpg',
    },
  ]

  const homeServices = [
    {
      title: 'Garage Builders',
      description:
        'As trusted garage builders in Salt Lake City, UT, we design and construct garages that match your property\'s needs, whether single, double, or custom layouts. Strong materials, clean execution, and dependable craftsmanship from start to finish.',
      image: '/garage-builder.jpg',
    },
    {
      title: 'Home Remodeling & Renovations',
      description:
        'We deliver high-quality home remodeling and renovations in Salt Lake City, UT, helping you update, expand, or modernize your space. From layouts to finishes, we offer tailored solutions that improve comfort, function, and long-term value.',
      image: '/Home-Remodeling-Renovations.jpg',
    },
    {
      title: 'Roofing & Siding',
      description:
        'Protect and enhance your home with professional roofing and siding services in Salt Lake City, UT. We install durable, weather-resistant materials designed to withstand local climate conditions while improving curb appeal and long-term efficiency.',
      image: '/Roofing-Siding.jpg',
    },
  ]

  const courtServices = [
    {
      title: 'Basketball Courts',
      description:
        'Our custom basketball courts in Salt Lake City, UT are built for durability, precision, and year-round play. We create level, long-lasting concrete surfaces designed for smooth ball response whether for home use or commercial facilities.',
    },
    {
      title: 'Pickleball Courts',
      description:
        'Get high-quality pickleball courts in Salt Lake City, UT built for accuracy, durability, and consistent performance. We design custom courts with proper dimensions, smooth finishes, and long-lasting materials perfect for players of all levels.',
    },
    {
      title: 'Multi-purpose Courts',
      description:
        'We construct versatile multi-purpose courts in Salt Lake City, UT perfect for basketball, volleyball, pickleball, and more. Our courts are engineered for safe traction, durability, and reliable performance in all seasons.',
    },
  ]

  const landscapeServices = [
    {
      title: 'Landscape Design & Outdoor Planning',
      description:
        'Transform your outdoor space with landscape design and planning in Salt Lake City, UT. We create custom layouts for patios, walkways, greenery, hardscapes, and more, balancing beauty, function, and durability for your property.',
      images: ['/landscaping.jpg', '/outdoor.png'],
    },
  ]

  return (
    <section 
      id="services" 
      className="section-padding bg-white"
      ref={sectionRef}
    >
      <div className="container-custom">
        <div className={`transform transition-all duration-1200 ease-out ${
          sectionVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="text-center mb-4 text-primary-700 text-4xl font-bold transition-all duration-1200 ease-out hover:text-primary-600">Our Services</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg transition-all duration-1200 ease-out">
            We offer a comprehensive range of concrete and landscaping services designed to enhance your property and meet your unique needs.
        </p>

        {/* Concrete Services */}
        <div className={`mb-16 transform transition-all duration-1200 ease-out ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h3 className="text-2xl font-bold text-primary-500 mb-8 flex items-center gap-3 transition-all duration-500 hover:text-primary-600 hover:translate-x-1">
            <FaRoad /> Concrete Services
          </h3>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {concreteServices.map((service, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedService(service)
                  setIsModalOpen(true)
                }}
                className={`bg-gradient-to-br from-white to-primary-50 p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 ease-out border-l-4 border-accent-gold hover:border-primary-700 transform hover:scale-105 hover:-translate-y-2 cursor-pointer text-left group transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                {service.image && (
                  <div className="mb-4 h-32 rounded-lg overflow-hidden bg-gray-200 transition-transform duration-500 ease-out group-hover:scale-110 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
                <h4 className="text-primary-700 mb-3 font-bold transition-all duration-500 group-hover:text-accent-gold group-hover:translate-x-1">{service.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed transition-all duration-500 group-hover:text-gray-700 group-hover:translate-x-0.5">{service.description}</p>
                <div className="mt-4 text-accent-gold font-bold text-sm transition-all duration-300 ease-out group-hover:translate-x-2 inline-flex items-center gap-1">
                  <span>View Details</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Home & Construction Services */}
        <div className={`mb-16 transform transition-all duration-1200 ease-out ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h3 className="text-2xl font-bold text-primary-500 mb-8 flex items-center gap-3 transition-all duration-500 hover:text-primary-600 hover:translate-x-1">
            <FaHome /> Garage & Home Construction
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {homeServices.map((service, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedService(service)
                  setIsModalOpen(true)
                }}
                className={`bg-gradient-to-br from-white to-primary-50 p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 ease-out border-l-4 border-accent-gold hover:border-primary-700 transform hover:scale-105 hover:-translate-y-2 cursor-pointer text-left group transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                {service.image && (
                  <div className="mb-4 h-32 rounded-lg overflow-hidden bg-gray-200 transition-transform duration-500 ease-out group-hover:scale-110 relative">
                    <img
                      src={service.image}
                      alt={service.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
                <h4 className="text-primary-700 mb-3 font-bold transition-all duration-500 group-hover:text-accent-gold group-hover:translate-x-1">{service.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed transition-all duration-500 group-hover:text-gray-700 group-hover:translate-x-0.5">{service.description}</p>
                <div className="mt-4 text-accent-gold font-bold text-sm transition-all duration-300 ease-out group-hover:translate-x-2 inline-flex items-center gap-1">
                  <span>View Details</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>

        {/* Sports Court Services */}
        <div className="mb-16">
          <h3 className="text-2xl font-bold text-primary-500 mb-8 flex items-center gap-3">
            <FaBasketballBall /> Sports Court Construction
          </h3>
          <div className="grid md:grid-cols-3 gap-6">
            {courtServices.map((service, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-white to-primary-50 p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 ease-out border-l-4 border-accent-gold hover:border-primary-700 transform hover:scale-105 hover:-translate-y-2"
              >
                <h4 className="text-primary-700 mb-3 font-bold transition-colors duration-500">{service.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed">{service.description}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Landscaping Services */}
        <div className={`transform transition-all duration-1200 ease-out ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
        }`}>
          <h3 className="text-2xl font-bold text-primary-500 mb-8 flex items-center gap-3 transition-all duration-500 hover:text-primary-600 hover:translate-x-1">
            <FaLeaf /> Landscaping Services
          </h3>
          <div className="grid md:grid-cols-2 gap-6">
            {landscapeServices.map((service, idx) => (
              <button
                key={idx}
                onClick={() => {
                  setSelectedService(service)
                  setIsModalOpen(true)
                }}
                className={`bg-gradient-to-br from-white to-primary-50 p-6 rounded-xl shadow-md hover:shadow-2xl transition-all duration-500 ease-out border-l-4 border-accent-gold hover:border-primary-700 transform hover:scale-105 hover:-translate-y-2 cursor-pointer text-left group transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                {service.images && service.images.length > 0 && (
                  <div className="mb-4 h-32 rounded-lg overflow-hidden bg-gray-200 transition-transform duration-500 ease-out group-hover:scale-110 relative">
                    <img
                      src={service.images[0]}
                      alt={service.title}
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none'
                      }}
                      className="w-full h-full object-cover transition-transform duration-500 ease-out"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                  </div>
                )}
                <h4 className="text-primary-700 mb-3 font-bold transition-all duration-500 group-hover:text-accent-gold group-hover:translate-x-1">{service.title}</h4>
                <p className="text-sm text-gray-600 leading-relaxed transition-all duration-500 group-hover:text-gray-700 group-hover:translate-x-0.5">{service.description}</p>
                <div className="mt-4 text-accent-gold font-bold text-sm transition-all duration-300 ease-out group-hover:translate-x-2 inline-flex items-center gap-1">
                  <span>View Details</span>
                  <span className="transition-transform duration-300 group-hover:translate-x-1">→</span>
                </div>
              </button>
            ))}
          </div>
        </div>
        </div>
      </div>

      {/* Service Modal */}
      <ServiceModal 
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        service={selectedService}
        image={selectedService?.image}
      />
    </section>
  )
}
