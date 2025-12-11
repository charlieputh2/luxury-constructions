import { useState } from 'react'
import { FaChevronDown } from 'react-icons/fa'

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      question: 'How does the Salt Lake City climate affect concrete projects?',
      answer:
        'Salt Lake City experiences hot summers, snowy winters, and high-elevation conditions that can be tough on concrete. We use specialized materials and techniques designed to withstand extreme temperature swings, snow, and ice, ensuring your concrete stays strong and durable year-round.',
    },
    {
      question: 'Do you offer concrete services near the Wasatch Front or downtown Salt Lake City?',
      answer:
        'Yes! We serve the entire Salt Lake City area, from homes near the Wasatch Front to commercial properties downtown. Our team is familiar with local building codes, soil conditions, and best practices to deliver projects that last.',
    },
    {
      question: 'Are there any local permits or regulations I should know about for a concrete project?',
      answer:
        'Many Salt Lake City projects require permits, especially for driveways, patios, or commercial properties. We guide our clients through the permitting process and make sure your project complies with all local regulations, saving you time and hassle.',
    },
    {
      question: 'What types of concrete projects do you handle?',
      answer:
        'We handle both residential and commercial projects, including driveways, patios, foundations, decorative concrete, and custom designs. Whether your project is large or small, we focus on quality, precision, and long-term durability.',
    },
    {
      question: 'How long will my concrete project take?',
      answer:
        'Project timelines vary depending on size and complexity. We provide clear schedules and communicate every step of the way to ensure projects are completed on time without cutting corners or compromising quality.',
    },
  ]

  return (
    <section id="faq" className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-center mb-12">Frequently Asked Questions</h2>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, idx) => (
            <div
              key={idx}
              className="bg-white rounded-lg border border-gray-200 overflow-hidden shadow-sm hover:shadow-md transition-shadow"
            >
              <button
                onClick={() => setOpenIndex(openIndex === idx ? null : idx)}
                className="w-full p-6 flex justify-between items-center text-left hover:bg-primary-50 transition-colors"
              >
                <h4 className="text-primary-600 font-semibold pr-4">{faq.question}</h4>
                <FaChevronDown
                  className={`text-accent-gold flex-shrink-0 transition-transform ${
                    openIndex === idx ? 'rotate-180' : ''
                  }`}
                />
              </button>

              {openIndex === idx && (
                <div className="px-6 pb-6 border-t border-gray-200 bg-primary-50">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
