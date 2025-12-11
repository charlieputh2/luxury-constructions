import Head from 'next/head'
import Link from 'next/link'
import { FaArrowRight } from 'react-icons/fa'

const serviceCategories = [
    {
      category: 'Concrete Services',
      description: 'Professional concrete solutions for driveways, foundations, and more',
      services: [
        {
          title: 'Concrete Driveways',
          description: 'Upgrade your property with durable, long-lasting concrete driveways in Salt Lake City, UT. We design and build custom driveways that handle tough weather, enhance curb appeal, and provide years of reliable performance.',
          href: '/services/concrete-driveways',
          image: '/concrete_driveways.jpg',
        },
        {
          title: 'Heated Driveway Systems',
          description: 'Our heated driveway systems in Salt Lake City, UT keep your property safe and snow-free all winter. We install efficient, long-lasting solutions that melt ice automatically.',
          href: '/services/heated-driveways',
          image: '/heated-driveways.jpg',
        },
        {
          title: 'Sidewalks & Walkways',
          description: 'We build strong, beautiful sidewalks and walkways in Salt Lake City, UT designed for daily use and long-term durability.',
          href: '/services/sidewalks',
          image: '/sidewalk.jpg',
        },
        {
          title: 'Concrete Foundations',
          description: 'Get reliable concrete foundations in Salt Lake City, UT engineered for strength, stability, and long-term performance.',
          href: '/services/foundations',
          image: '/concrete_foundation.jpg',
        },
        {
          title: 'Walkout Basements',
          description: 'Create more usable space with custom walkout basements in Salt Lake City, UT. We design and build strong, code-compliant basement exits.',
          href: '/services/walkout-basements',
          image: '/walkoutbasement.jpg',
        },
        {
          title: 'Decorative Concrete',
          description: 'Transform ordinary spaces with decorative concrete in Salt Lake City, UT. We offer custom finishes, colors, textures, and designs.',
          href: '/services/decorative-concrete',
          image: '/decorative.jpg',
        },
        {
          title: 'Stamped Concrete',
          description: 'Enhance your property with stamped concrete in Salt Lake City, UT. We offer custom patterns, textures, and colors.',
          href: '/services/stamped-concrete',
          image: '/stamped.jpg',
        },
        {
          title: 'Retaining Walls',
          description: 'Our retaining walls in Salt Lake City, UT are built for strength, stability, and visual appeal.',
          href: '/services/retaining-walls',
          image: '/retaining-wall.jpg',
        },
      ],
    },
    {
      category: 'Garage & Home Construction',
      description: 'Quality home construction and renovation services',
      services: [
        {
          title: 'Garage Builders',
          description: 'As trusted garage builders in Salt Lake City, UT, we design and construct garages that match your property\'s needs.',
          href: '/services/garage-builders',
          image: '/garage-builder.jpg',
        },
        {
          title: 'Home Remodeling & Renovations',
          description: 'We deliver high-quality home remodeling and renovations in Salt Lake City, UT, helping you update, expand, or modernize your space.',
          href: '/services/home-remodeling',
          image: '/Home-Remodeling-Renovations.jpg',
        },
        {
          title: 'Roofing & Siding',
          description: 'Protect and enhance your home with professional roofing and siding services in Salt Lake City, UT.',
          href: '/services/roofing-siding',
          image: '/Roofing-Siding.jpg',
        },
      ],
    },
    {
      category: 'Sports Court Construction',
      description: 'Custom sports courts for basketball, pickleball, and more',
      services: [
        {
          title: 'Basketball Courts',
          description: 'Our custom basketball courts in Salt Lake City, UT are built for durability, precision, and year-round play.',
          href: '/services/basketball-courts',
          image: '/p1.png',
        },
        {
          title: 'Pickleball Courts',
          description: 'Get high-quality pickleball courts in Salt Lake City, UT built for accuracy, durability, and consistent performance.',
          href: '/services/pickleball-courts',
          image: '/p2.png',
        },
        {
          title: 'Multi-purpose Courts',
          description: 'We construct versatile multi-purpose courts in Salt Lake City, UT perfect for basketball, volleyball, pickleball, and more.',
          href: '/services/multipurpose-courts',
          image: '/p3.jpg',
        },
      ],
    },
    {
      category: 'Landscaping Services',
      description: 'Transform your outdoor space with professional landscaping',
      services: [
        {
          title: 'Landscape Design & Outdoor Planning',
          description: 'Transform your outdoor space with landscape design and planning in Salt Lake City, UT. We create custom layouts for patios, walkways, greenery, and hardscapes.',
          href: '/services/landscaping-services',
          image: '/landscaping.JPEG',
        },
      ],
    },
  ]

export default function ServicesPage() {
  return (
    <>
      <Head>
        <title>Professional Services in Salt Lake City, UT | Luxury Construction</title>
        <meta name="description" content="Concrete, landscaping, home construction, and sports court services in Salt Lake City, UT. Expert craftsmanship and quality materials." />
        <meta name="keywords" content="concrete services, landscaping, home construction, sports courts, salt lake city, contractors" />
        <meta property="og:title" content="Professional Services in Salt Lake City, UT" />
        <meta property="og:description" content="Comprehensive concrete, landscaping, and construction services for residential and commercial properties." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-700 via-primary-600 to-primary-50 py-8 sm:py-12 md:py-20 lg:py-24">
        <div className="container-custom">
          <div className="text-center max-w-4xl mx-auto px-4 sm:px-6">
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3 sm:mb-4 md:mb-6 drop-shadow-lg">
              Our Services
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-100 drop-shadow-md mb-6 sm:mb-8">
              We offer a comprehensive range of concrete and landscaping services designed to enhance your property and meet your unique needs.
            </p>
            <a
              href="tel:(385)227-4522"
              className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 ease-out transform hover:scale-110 active:scale-95"
            >
              <span>Get Free Estimate</span>
              <FaArrowRight className="text-sm" />
            </a>
          </div>
        </div>
      </section>

      {/* Services by Category */}
      {serviceCategories.map((categoryGroup, catIdx) => (
        <section key={catIdx} className={catIdx % 2 === 0 ? 'bg-white' : 'bg-gray-50'}>
          <div className="section-padding">
            <div className="container-custom">
              {/* Category Header */}
              <div className="mb-8 sm:mb-12 md:mb-16">
                <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-primary-700 mb-2 sm:mb-3">
                  {categoryGroup.category}
                </h2>
                <p className="text-sm sm:text-base md:text-lg text-gray-600">
                  {categoryGroup.description}
                </p>
              </div>

              {/* Services Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
                {categoryGroup.services.map((service, idx) => (
                  <Link
                    key={idx}
                    href={service.href}
                    className="bg-white rounded-xl p-4 sm:p-6 md:p-8 border-2 border-primary-200 hover:border-accent-gold hover:shadow-2xl transition-all duration-300 transform hover:scale-105 hover:-translate-y-2 group overflow-hidden relative flex flex-col h-full"
                  >
                    {/* Service Image */}
                    {service.image && (
                      <div className="mb-3 sm:mb-4 h-32 sm:h-40 rounded-lg overflow-hidden bg-gray-200 transition-transform duration-500 ease-out group-hover:scale-110">
                        <img
                          src={service.image}
                          alt={service.title}
                          loading="lazy"
                          onError={(e) => {
                            e.target.style.display = 'none'
                          }}
                          className="w-full h-full object-cover transition-transform duration-500 ease-out"
                        />
                      </div>
                    )}

                    {/* Animated background gradient */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary-50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                    
                    <div className="relative z-10 flex flex-col flex-grow">
                      <h3 className="text-base sm:text-lg md:text-xl font-bold text-primary-700 mb-2 sm:mb-3 group-hover:text-primary-600 transition-colors duration-300 line-clamp-2">
                        {service.title}
                      </h3>
                      <p className="text-gray-600 text-xs sm:text-sm md:text-base leading-relaxed mb-4 sm:mb-6 group-hover:text-gray-700 transition-colors duration-300 line-clamp-3 sm:line-clamp-4 flex-grow">
                        {service.description}
                      </p>
                      <div className="flex items-center gap-2 text-accent-gold font-bold group-hover:translate-x-2 transition-transform duration-300 mt-auto">
                        <span className="text-xs sm:text-sm md:text-base">View Details</span>
                        <FaArrowRight className="group-hover:rotate-90 transition-transform duration-300 text-xs md:text-sm" />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </section>
      ))}

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-primary-700 to-primary-600 py-12 sm:py-16 md:py-20">
        <div className="container-custom max-w-4xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-4 sm:mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-100 mb-8">
            Contact us today for a free estimate on your project
          </p>
          <a
            href="tel:(385)227-4522"
            className="inline-flex items-center justify-center gap-2 px-6 sm:px-8 py-3 sm:py-4 text-sm sm:text-base bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-300 ease-out transform hover:scale-110 active:scale-95"
          >
            <span>Call Now</span>
            <FaArrowRight className="text-sm" />
          </a>
        </div>
      </section>
    </>
  )
}
