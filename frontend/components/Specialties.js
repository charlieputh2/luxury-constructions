import { useState, useCallback, useMemo } from 'react'
import { FaChevronDown, FaCheck } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Specialties() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [expandedSpecialty, setExpandedSpecialty] = useState(null)
  
  const toggleSpecialty = useCallback((id) => {
    setExpandedSpecialty(prev => prev === id ? null : id)
  }, [])

  const specialties = [
    {
      id: 0,
      title: 'Landscaping Design & Install',
      image: '/landscapingimage.jpg',
      color: 'from-emerald-500 to-emerald-600',
      accentColor: 'emerald',
      description: 'Transform your outdoor space with professional landscaping design and installation.',
      services: [
        {
          category: 'Permits/Plans/Designs/Engineering',
          items: ['Site Planning', 'Design Consultation', 'Engineering', 'Permit Acquisition']
        },
        {
          category: 'Pavers',
          items: ['Belgard Premium Pavers', 'Natural Stone: Flagstone, Granite', 'Brick']
        },
        {
          category: 'Plants/Planter Boxes',
          items: ['Custom Planting Design', 'Seasonal Plants', 'Planter Box Installation']
        },
        {
          category: 'Sprinklers',
          items: ['Remove/Relocate/Install Sprinkler Systems', 'Sprinkler Box Installation', 'System Maintenance']
        }
      ]
    },
    {
      id: 1,
      title: 'Concrete Work',
      image: '/concretework.jpg',
      color: 'from-slate-600 to-slate-700',
      accentColor: 'slate',
      description: 'Expert concrete solutions for residential and commercial properties.',
      services: [
        {
          category: 'Driveways & Walkways',
          items: ['Standard Concrete', 'Decorative Finishes', 'Stamped Concrete', 'Colored Concrete']
        },
        {
          category: 'Outdoor Steps & Stairs',
          items: ['Custom Design', 'Safety Features', 'Durable Materials']
        },
        {
          category: 'Hot Tub Pads',
          items: ['Reinforced Foundation', 'Proper Drainage', 'Custom Sizing']
        },
        {
          category: 'Walkout Basement',
          items: ['Design/Engineering/Plans/Permits', 'Door Cut Installation', 'Railing Installation', 'Drain Installation']
        },
        {
          category: 'Sports Courts',
          items: ['Basketball Courts', 'Pickleball Courts', 'Multi-Sport Courts', '1/2 Court Options']
        },
        {
          category: 'Heated Driveway/Walkway',
          items: ['Electronic Systems', 'Hydronic–Boiler Systems', 'Professional Installation']
        }
      ]
    },
    {
      id: 2,
      title: 'Home Remodels',
      image: '/homeremodels.jpg',
      color: 'from-amber-600 to-amber-700',
      accentColor: 'amber',
      description: 'Complete home renovation and remodeling services for modern living.',
      services: [
        {
          category: 'Full Basement Remodel',
          items: ['Permits/Plans/Engineering', 'Drywall Installation', 'Paint & Tape', 'Flooring Options']
        },
        {
          category: 'Full Bathroom Remodel',
          items: ['Permits/Plans/Engineering', 'Drywall', 'Plumbing', 'Electrical', 'Paint & Tape', 'Fixtures & Finishes']
        },
        {
          category: 'Siding',
          items: ['Vinyl Siding', 'Wood Siding', 'Metal Siding', 'Composite Materials']
        },
        {
          category: 'Roofing',
          items: ['Asphalt Shingles', 'Metal Roofing', 'Wood Shingles', 'Slate', 'Composite Shingles']
        },
        {
          category: 'Gutters',
          items: ['Metal Gutters', 'Vinyl Gutters', 'Gutter Guards', 'Professional Installation']
        }
      ]
    }
  ]

  return (
    <section
      id="specialties"
      className="section-padding bg-white"
      ref={sectionRef}
      aria-label="Our Construction Specialties"
    >
      <div className="container-custom">
        {/* Header */}
        <div className={`text-center mb-12 sm:mb-16 md:mb-20 transform transition-all duration-1000 ease-out will-change-transform ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="inline-block mb-3 sm:mb-4 px-3 sm:px-4 py-1.5 sm:py-2 bg-accent-gold/15 rounded-full border border-accent-gold/30 hover:bg-accent-gold/20 transition-colors duration-300">
            <span className="text-accent-gold font-bold text-xs sm:text-sm tracking-widest uppercase">
              Our Expertise
            </span>
          </div>
          <h2 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-bold text-primary-700 mb-4 sm:mb-6 leading-tight">
            Three Core Specialties
          </h2>
          <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed font-medium px-2">
            Discover our comprehensive construction services. Click any specialty to explore detailed offerings and find the perfect solution for your project.
          </p>
        </div>

        {/* Specialties Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8 mb-12 sm:mb-16">
          {specialties.map((specialty, idx) => {
            const isExpanded = expandedSpecialty === specialty.id

            return (
              <div
                key={specialty.id}
                className={`transform transition-all duration-1000 ease-out will-change-transform ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                }`}
                style={{ transitionDelay: `${idx * 80}ms` }}
              >
                <button
                  onClick={() => toggleSpecialty(specialty.id)}
                  className="w-full h-full text-left group focus:outline-none focus:ring-2 focus:ring-accent-gold focus:ring-offset-2 rounded-2xl transition-all duration-300"
                  aria-expanded={isExpanded}
                  aria-label={`${specialty.title} services - Click to expand`}
                >
                  <div className={`bg-white rounded-2xl overflow-hidden shadow-lg transition-all duration-500 will-change-transform border-2 ${
                    isExpanded ? 'border-accent-gold shadow-2xl' : 'border-gray-200 hover:border-accent-gold hover:shadow-2xl'
                  }`}>
                    {/* Card Header - Image Background */}
                    <div className={`relative overflow-hidden transition-all duration-500 will-change-transform ${
                      isExpanded ? 'pb-4 sm:pb-6' : 'pb-6 sm:pb-8'
                    }`} style={{ minHeight: 'clamp(240px, 50vw, 320px)' }}>
                      {/* Background Image with Optimization */}
                      <img
                        src={specialty.image}
                        alt={specialty.title}
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 will-change-transform group-hover:scale-110"
                        loading="lazy"
                        decoding="async"
                      />
                      
                      {/* Dark Overlay for Text Readability - Optimized */}
                      <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/60 to-black/80 group-hover:from-black/50 group-hover:via-black/70 group-hover:to-black/85 transition-all duration-700 will-change-transform" />
                      
                      {/* Additional bottom overlay for extra text protection */}
                      <div className="absolute bottom-0 left-0 right-0 h-32 sm:h-40 bg-gradient-to-t from-black/90 via-black/50 to-transparent" />
                      
                      <div className="relative z-10 h-full flex flex-col justify-between p-4 sm:p-6 md:p-8">
                        {/* Title and Description */}
                        <div className="transform transition-all duration-500 will-change-transform">
                          {/* Title */}
                          <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold mb-2 sm:mb-3 text-white group-hover:text-accent-gold transition-all duration-500 drop-shadow-lg leading-tight">
                            {specialty.title}
                          </h3>

                          {/* Description */}
                          <p className="text-xs sm:text-sm md:text-base text-white/95 leading-relaxed max-w-sm font-medium drop-shadow-md transition-all duration-500 group-hover:text-white">
                            {specialty.description}
                          </p>
                        </div>

                        {/* Expand Indicator with Animation */}
                        <div className="flex justify-end text-white transition-all duration-500 will-change-transform" style={{
                          transform: isExpanded ? 'rotate(180deg) scale(1.2)' : 'rotate(0deg) scale(1)'
                        }}>
                          <div className="p-1.5 sm:p-2 rounded-full bg-white/20 backdrop-blur-sm group-hover:bg-white/30 transition-all duration-300">
                            <FaChevronDown className="text-lg sm:text-2xl" />
                          </div>
                        </div>
                      </div>
                    </div>

                    {/* Expandable Services Section */}
                    <div className={`overflow-hidden transition-all duration-700 ease-out will-change-transform ${
                      isExpanded ? 'max-h-[2000px] opacity-100' : 'max-h-0 opacity-0'
                    }`}>
                      <div className="p-4 sm:p-6 md:p-8 bg-gradient-to-b from-white to-gray-50 border-t-2 border-accent-gold/30 space-y-4 sm:space-y-6 animate-fadeIn">
                        {/* Services List */}
                        <div className="space-y-3 sm:space-y-4">
                          {specialty.services.map((serviceGroup, groupIdx) => (
                            <div 
                              key={groupIdx} 
                              className="bg-white p-4 sm:p-5 md:p-6 rounded-xl border-l-4 border-accent-gold hover:shadow-lg transition-all duration-400 will-change-transform"
                              style={{
                                animation: isExpanded ? `slideInUp 0.5s ease-out ${groupIdx * 50}ms both` : 'none'
                              }}
                            >
                              <h4 className="font-bold text-primary-700 text-sm sm:text-base md:text-lg mb-3 sm:mb-4 flex items-center gap-2 sm:gap-3 transition-colors duration-300 hover:text-accent-gold">
                                <span className="w-2.5 h-2.5 sm:w-3 sm:h-3 bg-accent-gold rounded-full flex-shrink-0" />
                                {serviceGroup.category}
                              </h4>
                              {serviceGroup.items.length > 0 && (
                                <ul className="space-y-2 sm:space-y-3 ml-1 sm:ml-2">
                                  {serviceGroup.items.map((item, itemIdx) => (
                                    <li 
                                      key={itemIdx} 
                                      className="flex items-start gap-2 sm:gap-3 text-gray-700 text-xs sm:text-sm md:text-base leading-relaxed transition-all duration-300 hover:text-primary-700"
                                      style={{
                                        animation: isExpanded ? `slideInLeft 0.5s ease-out ${groupIdx * 50 + itemIdx * 30}ms both` : 'none'
                                      }}
                                    >
                                      <FaCheck className="text-accent-gold flex-shrink-0 mt-0.5 sm:mt-1 text-xs" />
                                      <span>{item}</span>
                                    </li>
                                  ))}
                                </ul>
                              )}
                            </div>
                          ))}
                        </div>

                        {/* CTA Button */}
                        <div className="pt-3 sm:pt-4 md:pt-6 border-t border-gray-200">
                          <a
                            href="/estimate"
                            className="inline-flex items-center justify-center gap-2 w-full px-4 sm:px-6 py-3 sm:py-4 md:py-5 bg-gradient-to-r from-accent-gold via-yellow-400 to-accent-gold text-primary-900 font-bold rounded-xl hover:shadow-2xl transition-all duration-400 transform hover:scale-105 active:scale-95 text-sm sm:text-base md:text-lg group will-change-transform"
                            style={{
                              animation: isExpanded ? 'slideInUp 0.6s ease-out 0.3s both' : 'none'
                            }}
                          >
                            <span>Get Free Estimate</span>
                            <span className="transition-all duration-300 group-hover:translate-x-2">→</span>
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            )
          })}
        </div>

        {/* Why Choose Us Section */}
        <div className={`bg-gradient-to-br from-primary-50 via-white to-gray-50 rounded-2xl sm:rounded-3xl p-4 sm:p-8 md:p-12 lg:p-16 border-2 border-primary-200/50 shadow-lg transform transition-all duration-1000 ease-out will-change-transform ${
          sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
        }`}>
          <div className="text-center mb-8 sm:mb-12 md:mb-16">
            <h3 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-primary-700 mb-3 sm:mb-4 leading-tight px-2">
              Why Choose Luxury Construction?
            </h3>
            <p className="text-sm sm:text-base md:text-lg text-gray-600 max-w-2xl mx-auto px-2">
              We combine expertise, quality, and dedication to deliver exceptional results on every project.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
            {[
              { title: 'Expert Craftsmanship', description: 'Decades of combined experience across all specialties' },
              { title: 'Full-Service Solutions', description: 'Design, permits, engineering, and installation included' },
              { title: 'Premium Materials', description: 'Only the highest quality materials for lasting results' },
              { title: 'Local Knowledge', description: 'Deep expertise in Salt Lake City climate and codes' },
              { title: 'Licensed & Insured', description: 'Complete protection and professional credentials' },
              { title: 'Guaranteed Satisfaction', description: 'Transparent pricing and reliable timelines' }
            ].map((benefit, idx) => (
              <div 
                key={idx} 
                className="flex flex-col gap-3 sm:gap-4 p-4 sm:p-6 md:p-7 bg-white rounded-xl sm:rounded-2xl hover:shadow-xl hover:border-accent-gold transition-all duration-400 transform hover:scale-105 hover:-translate-y-1 sm:hover:-translate-y-2 border-2 border-gray-200/50 group will-change-transform"
                style={{
                  animation: sectionVisible ? `slideInUp 0.6s ease-out ${idx * 75}ms both` : 'none'
                }}
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="flex-shrink-0">
                    <div className="flex items-center justify-center h-10 sm:h-14 w-10 sm:w-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-accent-gold/20 to-accent-gold/10 border-2 border-accent-gold/50 group-hover:border-accent-gold group-hover:from-accent-gold/30 group-hover:to-accent-gold/20 transition-all duration-300">
                      <FaCheck className="text-accent-gold text-base sm:text-xl font-bold" />
                    </div>
                  </div>
                  <div className="flex-1 min-w-0">
                    <h4 className="font-bold text-primary-700 mb-1 sm:mb-2 text-sm sm:text-base md:text-lg group-hover:text-accent-gold transition-colors duration-300 leading-tight">{benefit.title}</h4>
                    <p className="text-xs sm:text-sm md:text-base text-gray-600 leading-relaxed group-hover:text-gray-700 transition-colors duration-300">{benefit.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
