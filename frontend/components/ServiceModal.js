import { useState } from 'react'
import Image from 'next/image'
import { FaTimes } from 'react-icons/fa'

export default function ServiceModal({ isOpen, onClose, service, image }) {
  const [imageLoaded, setImageLoaded] = useState(false)
  const [imageError, setImageError] = useState(false)
  const [currentImageIndex, setCurrentImageIndex] = useState(0)

  if (!isOpen) return null

  // Get images from service.images array or fallback to image prop
  const images = service?.images || (image ? [image] : [])
  const currentImage = images[currentImageIndex]

  return (
    <>
      {/* Backdrop */}
      <div 
        className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 transition-opacity duration-300 ease-out cursor-pointer"
        onClick={onClose}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === 'Escape' && onClose()}
      />

      {/* Modal */}
      <div className="fixed inset-0 z-50 flex items-center justify-center p-2 xs:p-3 sm:p-4 transition-all duration-300 ease-out overflow-y-auto">
        <div className="bg-white rounded-lg xs:rounded-xl sm:rounded-2xl shadow-2xl max-w-2xl w-full my-2 xs:my-4 sm:my-8 transform transition-all duration-300 ease-out scale-100 opacity-100 max-h-[98vh] xs:max-h-[95vh] sm:max-h-[90vh] overflow-y-auto">
          {/* Close Button */}
          <button
            onClick={onClose}
            className="absolute top-3 right-3 sm:top-4 sm:right-4 p-1.5 sm:p-2 bg-primary-700 text-white rounded-full hover:bg-primary-600 transition-all duration-300 ease-out transform hover:scale-110 z-20 shadow-lg"
            aria-label="Close modal"
          >
            <FaTimes size={18} className="sm:w-5 sm:h-5" />
          </button>

          {/* Image */}
          {currentImage && !imageError && (
            <div className="relative w-full h-36 xs:h-40 sm:h-56 md:h-72 lg:h-96 overflow-hidden rounded-t-lg xs:rounded-t-xl sm:rounded-t-2xl bg-gray-200">
              {!imageLoaded && (
                <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-gray-200 to-gray-300 z-10">
                  <div className="animate-pulse text-gray-500 text-xs xs:text-sm sm:text-base">Loading image...</div>
                </div>
              )}
              <img
                src={currentImage}
                alt={service?.title}
                loading="eager"
                onLoad={() => setImageLoaded(true)}
                onError={() => setImageError(true)}
                className={`w-full h-full object-cover transition-all duration-500 ease-out hover:scale-105 ${
                  imageLoaded ? 'opacity-100' : 'opacity-0'
                }`}
                style={{ maxWidth: '100%', height: 'auto' }}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent" />
              
              {/* Image Navigation */}
              {images.length > 1 && (
                <div className="absolute bottom-4 left-0 right-0 flex items-center justify-center gap-2 z-10">
                  {images.map((_, idx) => (
                    <button
                      key={idx}
                      onClick={() => {
                        setCurrentImageIndex(idx)
                        setImageLoaded(false)
                      }}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${
                        idx === currentImageIndex ? 'bg-accent-gold w-6' : 'bg-white/60 hover:bg-white'
                      }`}
                      aria-label={`View image ${idx + 1}`}
                    />
                  ))}
                </div>
              )}
            </div>
          )}

          {/* Content */}
          <div className="p-3 xs:p-4 sm:p-6 md:p-8">
            <h2 className="text-xl xs:text-2xl sm:text-3xl md:text-4xl font-bold text-primary-700 mb-2 xs:mb-3 sm:mb-4 transition-all duration-300 line-clamp-2">
              {service?.title}
            </h2>
            
            <p className="text-gray-600 text-xs xs:text-sm sm:text-base md:text-lg leading-relaxed mb-3 xs:mb-4 sm:mb-6 transition-all duration-300">
              {service?.description}
            </p>

            {/* Features */}
            <div className="bg-gradient-to-r from-primary-50 to-white p-3 xs:p-4 sm:p-6 rounded-lg xs:rounded-xl border-2 border-primary-200 mb-3 xs:mb-4 sm:mb-6 transition-all duration-300">
              <h3 className="text-sm xs:text-base sm:text-lg font-bold text-primary-700 mb-2 xs:mb-3 sm:mb-4">Why Choose This Service?</h3>
              <ul className="space-y-1.5 xs:space-y-2 sm:space-y-3">
                <li className="flex items-start gap-2 xs:gap-2.5 sm:gap-3">
                  <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-accent-gold rounded-full mt-1.5 xs:mt-2 flex-shrink-0" />
                  <span className="text-gray-600 text-xs xs:text-sm sm:text-base">Professional installation by experienced contractors</span>
                </li>
                <li className="flex items-start gap-2 xs:gap-2.5 sm:gap-3">
                  <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-accent-gold rounded-full mt-1.5 xs:mt-2 flex-shrink-0" />
                  <span className="text-gray-600 text-xs xs:text-sm sm:text-base">High-quality materials built to last</span>
                </li>
                <li className="flex items-start gap-2 xs:gap-2.5 sm:gap-3">
                  <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-accent-gold rounded-full mt-1.5 xs:mt-2 flex-shrink-0" />
                  <span className="text-gray-600 text-xs xs:text-sm sm:text-base">Competitive pricing with transparent estimates</span>
                </li>
                <li className="flex items-start gap-2 xs:gap-2.5 sm:gap-3">
                  <span className="w-1.5 h-1.5 xs:w-2 xs:h-2 bg-accent-gold rounded-full mt-1.5 xs:mt-2 flex-shrink-0" />
                  <span className="text-gray-600 text-xs xs:text-sm sm:text-base">Licensed, insured, and fully guaranteed</span>
                </li>
              </ul>
            </div>

            {/* CTA */}
            <div className="flex flex-col xs:flex-row gap-2 xs:gap-3 sm:gap-4">
              <a
                href="tel:(385)227-4522"
                className="flex-1 px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-gradient-to-r from-accent-gold to-yellow-500 text-primary-900 font-bold rounded-lg hover:shadow-lg transition-all duration-300 ease-out transform hover:scale-105 text-center text-xs xs:text-sm sm:text-base whitespace-nowrap"
              >
                Call Now
              </a>
              <button
                onClick={onClose}
                className="flex-1 px-3 xs:px-4 sm:px-6 py-2 xs:py-2.5 sm:py-3 bg-gray-200 text-gray-700 font-bold rounded-lg hover:bg-gray-300 transition-all duration-300 ease-out transform hover:scale-105 text-xs xs:text-sm sm:text-base whitespace-nowrap"
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
