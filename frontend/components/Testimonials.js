import { useState, useEffect } from 'react'
import { FaStar, FaCheckCircle } from 'react-icons/fa'
import { useScrollAnimation } from '../hooks/useScrollAnimation'
import dynamic from 'next/dynamic'

const Swal = dynamic(() => import('sweetalert2'), { ssr: false })

export default function Testimonials() {
  const { ref: sectionRef, isVisible: sectionVisible } = useScrollAnimation()
  const [rating, setRating] = useState(0)
  const [hoverRating, setHoverRating] = useState(0)
  const [name, setName] = useState('')
  const [email, setEmail] = useState('')
  const [comment, setComment] = useState('')
  const [testimonials, setTestimonials] = useState([])
  const [loading, setLoading] = useState(false)
  const [errors, setErrors] = useState({})

  useEffect(() => {
    const savedTestimonials = localStorage.getItem('testimonials')
    if (savedTestimonials) {
      setTestimonials(JSON.parse(savedTestimonials))
    }
  }, [])

  const validateForm = () => {
    const newErrors = {}
    if (!rating) newErrors.rating = 'Please select a rating'
    if (!name.trim()) newErrors.name = 'Name is required'
    if (!email.trim()) newErrors.email = 'Email is required'
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) newErrors.email = 'Please enter a valid email'
    if (!comment.trim()) newErrors.comment = 'Review is required'
    if (comment.trim().length < 10) newErrors.comment = 'Review must be at least 10 characters'
    return newErrors
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    
    const newErrors = validateForm()
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors)
      await Swal.fire({
        icon: 'error',
        title: 'Validation Error',
        text: 'Please fill in all fields correctly',
        confirmButtonColor: '#d4af37',
        background: '#fff',
        color: '#1f2937'
      })
      return
    }

    setLoading(true)
    setErrors({})

    setTimeout(async () => {
      const newTestimonial = {
        id: Date.now(),
        rating,
        name: name.trim(),
        email: email.trim(),
        comment: comment.trim(),
        date: new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' }),
        timestamp: new Date().getTime()
      }

      const updatedTestimonials = [newTestimonial, ...testimonials]
      setTestimonials(updatedTestimonials)
      localStorage.setItem('testimonials', JSON.stringify(updatedTestimonials))

      setRating(0)
      setName('')
      setEmail('')
      setComment('')
      setLoading(false)

      await Swal.fire({
        icon: 'success',
        title: 'Thank You!',
        html: `<div class="text-center">
          <p class="text-lg font-semibold mb-2">Your review has been submitted successfully!</p>
          <p class="text-gray-600">Thank you for choosing Luxury Construction</p>
        </div>`,
        confirmButtonColor: '#d4af37',
        background: '#fff',
        color: '#1f2937',
        didOpen: (modal) => {
          modal.querySelector('.swal2-confirm').style.backgroundColor = '#d4af37'
          modal.querySelector('.swal2-confirm').style.color = '#1f2937'
        }
      })
    }, 500)
  }

  const averageRating = testimonials.length > 0
    ? (testimonials.reduce((sum, t) => sum + t.rating, 0) / testimonials.length).toFixed(1)
    : 0

  return (
    <section 
      id="testimonials" 
      className="section-padding bg-gradient-to-b from-gray-50 to-white"
      ref={sectionRef}
    >
      <div className="container-custom">
        <div className={`transform transition-all duration-1200 ease-out ${
          sectionVisible 
            ? 'opacity-100 translate-y-0' 
            : 'opacity-0 translate-y-20'
        }`}>
          <h2 className="text-center mb-4 text-primary-700 text-2xl sm:text-3xl md:text-4xl font-bold transition-all duration-1200 ease-out hover:text-primary-600">
            Client Testimonials & Ratings
          </h2>
          <p className="text-center text-gray-600 max-w-3xl mx-auto mb-8 sm:mb-12 text-sm sm:text-base md:text-lg transition-all duration-1200 ease-out leading-relaxed">
            Share your experience with Luxury Construction and help others discover our quality services.
          </p>

          {/* Rating Summary */}
          {testimonials.length > 0 && (
            <div className={`bg-white rounded-xl shadow-lg p-4 sm:p-6 md:p-8 mb-8 sm:mb-12 border-l-4 border-accent-gold transform transition-all duration-1000 ease-out ${
              sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
            }`}>
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6 sm:gap-8">
                <div className="text-center sm:text-left w-full sm:w-auto">
                  <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-700 mb-2">
                    {averageRating} / 5.0
                  </h3>
                  <div className="flex items-center gap-1 sm:gap-2 justify-center sm:justify-start mb-3">
                    {[...Array(5)].map((_, i) => (
                      <FaStar
                        key={i}
                        size={16}
                        className={`sm:w-5 sm:h-5 ${i < Math.round(averageRating) ? 'text-accent-gold' : 'text-gray-300'}`}
                      />
                    ))}
                  </div>
                  <p className="text-gray-600 text-xs sm:text-sm">
                    Based on {testimonials.length} {testimonials.length === 1 ? 'review' : 'reviews'}
                  </p>
                </div>
                <div className="w-full sm:w-auto">
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((stars) => {
                      const count = testimonials.filter(t => t.rating === stars).length
                      const percentage = testimonials.length > 0 ? (count / testimonials.length) * 100 : 0
                      return (
                        <div key={stars} className="flex items-center gap-2">
                          <span className="text-xs sm:text-sm font-semibold text-gray-600 w-6 sm:w-8">{stars}★</span>
                          <div className="w-24 sm:w-32 bg-gray-200 rounded-full h-2">
                            <div
                              className="bg-accent-gold h-2 rounded-full transition-all duration-500"
                              style={{ width: `${percentage}%` }}
                            ></div>
                          </div>
                          <span className="text-xs sm:text-sm text-gray-600 w-6 sm:w-8">{count}</span>
                        </div>
                      )
                    })}
                  </div>
                </div>
              </div>
            </div>
          )}

          {/* Rating Form */}
          <div className={`bg-white rounded-xl shadow-lg p-6 sm:p-8 mb-12 border-l-4 border-primary-700 transform transition-all duration-1000 ease-out ${
            sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
          }`} style={{ transitionDelay: '100ms' }}>
            <h3 className="text-xl sm:text-2xl font-bold text-primary-700 mb-6">Leave Your Rating & Review</h3>

            <form onSubmit={handleSubmit} className="space-y-6">
              {/* Star Rating */}
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-3">
                  Rate Your Experience
                </label>
                <div className="flex gap-2">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <button
                      key={star}
                      type="button"
                      onClick={() => setRating(star)}
                      onMouseEnter={() => setHoverRating(star)}
                      onMouseLeave={() => setHoverRating(0)}
                      className="transition-transform duration-200 hover:scale-125"
                    >
                      <FaStar
                        size={40}
                        className={`transition-colors duration-200 ${
                          star <= (hoverRating || rating)
                            ? 'text-accent-gold'
                            : 'text-gray-300'
                        }`}
                      />
                    </button>
                  ))}
                </div>
                {rating > 0 && (
                  <p className="mt-2 text-sm text-primary-600 font-semibold">
                    {rating === 5 && 'Excellent! 🌟'}
                    {rating === 4 && 'Great! 👍'}
                    {rating === 3 && 'Good 😊'}
                    {rating === 2 && 'Fair 🤔'}
                    {rating === 1 && 'Poor 😞'}
                  </p>
                )}
              </div>

              {/* Name */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Your Name *
                </label>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Enter your full name"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.name ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary-700'
                  }`}
                />
                {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
              </div>

              {/* Email */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Your Email *
                </label>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 ${
                    errors.email ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary-700'
                  }`}
                />
                {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
              </div>

              {/* Comment */}
              <div>
                <label className="block text-xs sm:text-sm font-semibold text-gray-700 mb-2">
                  Your Review * (minimum 10 characters)
                </label>
                <textarea
                  value={comment}
                  onChange={(e) => setComment(e.target.value)}
                  placeholder="Share your experience with Luxury Construction..."
                  rows="4"
                  className={`w-full px-3 sm:px-4 py-2 sm:py-3 text-sm border rounded-lg focus:outline-none focus:ring-2 transition-all duration-300 resize-none ${
                    errors.comment ? 'border-red-500 focus:ring-red-500' : 'border-gray-300 focus:ring-primary-700'
                  }`}
                ></textarea>
                <p className="text-gray-500 text-xs mt-1">{comment.length} characters</p>
                {errors.comment && <p className="text-red-500 text-xs mt-1">{errors.comment}</p>}
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className={`w-full font-bold py-3 px-4 sm:px-6 rounded-lg transition-all duration-300 ease-out text-sm sm:text-base ${
                  loading
                    ? 'bg-gray-400 cursor-not-allowed'
                    : 'bg-gradient-to-r from-primary-700 to-primary-600 text-white hover:shadow-lg transform hover:scale-105'
                }`}
              >
                {loading ? 'Submitting...' : 'Submit Review'}
              </button>
            </form>
          </div>

          {/* Testimonials List */}
          {testimonials.length > 0 && (
            <div className="space-y-4 sm:space-y-6">
              <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-primary-700 mb-6 sm:mb-8">Recent Reviews</h3>
              {testimonials.map((testimonial, idx) => (
                <article
                  key={testimonial.id}
                  className={`bg-white rounded-xl shadow-md hover:shadow-xl p-4 sm:p-6 border-l-4 border-accent-gold transform transition-all duration-1000 ease-out ${
                    sectionVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
                  }`}
                  style={{ transitionDelay: `${(idx + 1) * 100}ms` }}
                  itemScope
                  itemType="https://schema.org/Review"
                >
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 sm:gap-4 mb-4">
                    <div>
                      <h4 className="font-bold text-primary-700 text-base sm:text-lg" itemProp="author">{testimonial.name}</h4>
                      <p className="text-xs sm:text-sm text-gray-500" itemProp="datePublished">{testimonial.date}</p>
                    </div>
                    <div className="flex gap-1" itemProp="reviewRating" itemScope itemType="https://schema.org/Rating">
                      {[...Array(5)].map((_, i) => (
                        <FaStar
                          key={i}
                          size={14}
                          className={`sm:w-4 sm:h-4 ${i < testimonial.rating ? 'text-accent-gold' : 'text-gray-300'}`}
                        />
                      ))}
                      <meta itemProp="ratingValue" content={testimonial.rating} />
                      <meta itemProp="bestRating" content="5" />
                      <meta itemProp="worstRating" content="1" />
                    </div>
                  </div>
                  <p className="text-gray-700 leading-relaxed text-sm sm:text-base" itemProp="reviewBody">{testimonial.comment}</p>
                </article>
              ))}
            </div>
          )}

          {testimonials.length === 0 && (
            <div className="text-center py-12">
              <p className="text-gray-500 text-lg">
                No reviews yet. Be the first to share your experience!
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
