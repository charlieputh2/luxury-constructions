import { FaCheckCircle, FaHammer, FaShieldAlt } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function WhyUs() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const reasons = [
    {
      icon: <FaHammer className="text-accent-gold text-4xl" />,
      title: 'Built on Skill, Honesty & Reliability',
      description:
        'For us, craftsmanship and integrity go hand in hand. We show up prepared, communicate clearly, and follow through on our word. No shortcuts. No surprises.',
    },
    {
      icon: <FaCheckCircle className="text-accent-gold text-4xl" />,
      title: 'Personalized Solutions for Every Project',
      description:
        'Your project should reflect your needs, your taste, and your goals. That\'s why we take the time to understand what matters most to you before we ever begin.',
    },
    {
      icon: <FaShieldAlt className="text-accent-gold text-4xl" />,
      title: 'Results That Last for Decades',
      description:
        'We use professional-grade materials and proven techniques to make sure your concrete looks great on day one, and even better years down the road.',
    },
  ]

  return (
    <section 
      id="why-us" 
      className="section-padding bg-gradient-to-b from-primary-50 to-white"
      ref={sectionRef}
    >
      <div className="container-custom">
        <div className={`transform transition-all duration-1200 ease-out ${
          sectionVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="text-center mb-3 sm:mb-4 text-primary-700 text-2xl sm:text-3xl md:text-4xl font-bold transition-all duration-1200 ease-out hover:text-primary-600 px-4">Why Homeowners and Businesses Choose Us</h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base md:text-lg transition-all duration-1200 ease-out px-4">
            Great concrete work is not just about skill, it is about trust, communication, and confidence in the team working on your property. This is what makes partnering with us a different kind of experience:
          </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {reasons.map((reason, idx) => (
            <div
              key={idx}
              className="bg-gradient-to-br from-white to-primary-50 p-5 sm:p-6 md:p-8 rounded-lg sm:rounded-xl border-2 border-primary-200 hover:border-accent-gold shadow-md hover:shadow-2xl transition-all duration-500 ease-out transform hover:scale-105 hover:-translate-y-2"
            >
              <div className="mb-3 sm:mb-4 text-3xl sm:text-4xl md:text-5xl transition-transform duration-500 hover:scale-110">{reason.icon}</div>
              <h3 className="mb-2 sm:mb-4 text-primary-700 font-bold text-base sm:text-lg md:text-xl transition-colors duration-500">{reason.title}</h3>
              <p className="text-gray-600 leading-relaxed text-sm sm:text-base">{reason.description}</p>
            </div>
          ))}
        </div>
        </div>
      </div>
    </section>
  )
}
