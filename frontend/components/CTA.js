import { FaPhone, FaEnvelope } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'

export default function CTA() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  
  return (
    <section className="section-padding bg-gradient-to-r from-primary-600 to-primary-700 text-white" ref={sectionRef}>
      <div className={`container-custom text-center transform transition-all duration-1200 ease-out ${
        sectionVisible 
          ? 'opacity-100 translate-y-0' 
          : 'opacity-0 translate-y-20'
      }`}>
        <h2 className="text-white mb-6">Ready to Build Something That Lasts?</h2>
        <p className="text-xl mb-8 text-primary-100 max-w-2xl mx-auto">
          Whether you are planning a home improvement, a commercial upgrade, or a custom concrete project, our team of Concrete Contractors in Salt Lake City, UT is here to help you get started with confidence. Reach out for a free, no obligation estimate, and let us bring your vision to life with craftsmanship that stands the test of time.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="tel:(385)227-4522"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-accent-gold text-primary-900 font-bold rounded-lg hover:bg-opacity-90 transition-all text-lg"
          >
            <FaPhone />
            Call (385) 227-4522
          </a>
          <a
            href="mailto:info@luxuryconstruction.com"
            className="flex items-center justify-center gap-2 px-8 py-4 bg-white text-primary-600 font-bold rounded-lg hover:bg-gray-100 transition-all text-lg"
          >
            <FaEnvelope />
            Email Us
          </a>
        </div>
      </div>
    </section>
  )
}
