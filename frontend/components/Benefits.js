import { FaClock, FaDollarSign, FaLeaf } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function Benefits() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const benefits = [
    {
      iconImage: '/FairNew.png',
      iconAlt: 'Fair and Transparent Pricing Icon',
      title: 'Fair, Transparent Pricing',
      description:
        'We believe quality should be accessible. You get honest pricing, clear expectations, and no hidden fees. Our transparent pricing model ensures you know exactly what you\'re paying for.',
      image: '/FairTransparentPricing.jpg',
      alt: 'Fair and Transparent Pricing - Luxury Construction',
    },
    {
      iconImage: '/EcoSmartNew.png',
      iconAlt: 'Eco-Smart Materials Icon',
      title: 'Eco-Smart Materials That Last',
      description:
        'Sustainability matters. We use environmentally responsible materials and reduce waste whenever possible, creating long-lasting results that are both durable and mindful of our planet.',
      image: '/eco-smaryt.png',
      alt: 'Eco-Smart Materials - Sustainable Construction Solutions',
    },
    {
      iconImage: '/ProjectCompletedNew.png',
      iconAlt: 'Projects Completed On Time Icon',
      title: 'Projects Completed On Time: Without Cutting Corners',
      description:
        'Your time is valuable. We maintain a clean workflow, predictable scheduling, and communication you can count on throughout the entire project. Quality and timeliness go hand in hand.',
      image: '/project-com.jpg',
      alt: 'Projects Completed On Time - Professional Construction Management',
    },
  ]

  return (
    <section 
      id="benefits" 
      className="section-padding bg-gradient-to-b from-white to-primary-50"
      ref={sectionRef}
    >
      <div className="container-custom">
        <div className={`transform transition-all duration-1200 ease-out ${
          sectionVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="text-center mb-4 text-primary-700 text-4xl font-bold transition-all duration-1200 ease-out hover:text-primary-600">
            The Benefits of Working With Our Team
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12 text-lg transition-all duration-1200 ease-out">
            Choosing the right contractor is just as important as choosing the right materials. When you work with us, you are choosing a team that puts your peace of mind first.
          </p>

          <div className="grid md:grid-cols-3 gap-8">
            {benefits.map((benefit, idx) => (
              <div
                key={idx}
                className={`group rounded-xl bg-gradient-to-br from-white to-primary-50 border-2 border-primary-200 hover:border-accent-gold shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2 overflow-hidden transform transition-all duration-1200 ease-out ${
                  sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-20'
                }`}
                style={{ transitionDelay: `${idx * 75}ms` }}
              >
                {/* Image Section */}
                <div className="relative h-48 md:h-56 overflow-hidden bg-gray-200">
                  <img
                    src={benefit.image}
                    alt={benefit.alt}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-500 ease-out group-hover:scale-110"
                  />
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-primary-900 via-transparent to-transparent opacity-0 group-hover:opacity-70 transition-opacity duration-500 ease-out"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 md:p-8">
                  <div className="flex justify-center mb-6 transition-transform duration-500 ease-out group-hover:scale-110 group-hover:-translate-y-2">
                    <img
                      src={benefit.iconImage}
                      alt={benefit.iconAlt}
                      loading="lazy"
                      className="h-16 md:h-20 w-auto object-contain transition-all duration-300 ease-out group-hover:drop-shadow-lg"
                    />
                  </div>
                  <h3 className="mb-4 text-primary-700 font-bold text-lg md:text-xl transition-all duration-300 ease-out group-hover:text-accent-gold group-hover:translate-x-1 text-center">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 leading-relaxed text-sm md:text-base transition-all duration-300 ease-out group-hover:text-gray-700">
                    {benefit.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
