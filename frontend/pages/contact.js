import Head from 'next/head'
import { useEffect } from 'react'
import { FaPhone, FaEnvelope } from 'react-icons/fa'

export default function ContactPage() {
  useEffect(() => {
    // Load the GoHighLevel form script
    const script = document.createElement('script')
    script.src = 'https://link.msgsndr.com/js/form_embed.js'
    script.async = true
    document.body.appendChild(script)
  }, [])

  return (
    <>
      <Head>
        <title>Contact Us - Luxury Construction | Get Your Free Estimate Today</title>
        <meta name="description" content="Contact Luxury Construction in Salt Lake City, UT. Fill out our form or call (385) 227-4522 for your free concrete and landscaping estimate. Professional service, responsive support." />
        <meta name="keywords" content="contact luxury construction, concrete contractors, salt lake city, phone, free estimate, contact form" />
        <meta property="og:title" content="Contact Us - Luxury Construction" />
        <meta property="og:description" content="Get in touch with Luxury Construction for your concrete and landscaping projects." />
        <meta property="og:type" content="website" />
        <meta name="robots" content="index, follow" />
        <meta name="author" content="Luxury Construction" />
      </Head>

      {/* Hero Section */}
      <section className="bg-gradient-to-b from-primary-700 via-primary-600 to-primary-50 py-12 md:py-20 lg:py-24">
        <div className="container-custom">
          <div className="text-center max-w-3xl mx-auto">
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-4 md:mb-6 drop-shadow-lg transition-all duration-1000">
              Get Your Free Estimate
            </h1>
            <p className="text-lg md:text-xl text-gray-100 drop-shadow-md">
              Fill out the form below and our team will contact you within 24 hours with a personalized quote.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - GoHighLevel Form */}
      <section className="section-padding bg-white">
        <div className="container-custom max-w-4xl mx-auto">
          {/* GoHighLevel Embedded Form */}
          <iframe
            src="https://api.leadconnectorhq.com/widget/form/UkT7BKBHXgZghFhynRyb"
            style={{
              width: '100%',
              height: '930px',
              border: 'none',
              borderRadius: '3px'
            }}
            id="inline-UkT7BKBHXgZghFhynRyb"
            data-layout="{'id':'INLINE'}"
            data-trigger-type="alwaysShow"
            data-trigger-value=""
            data-activation-type="alwaysActivated"
            data-activation-value=""
            data-deactivation-type="neverDeactivate"
            data-deactivation-value=""
            data-form-name="Contact Us Form"
            data-height="930"
            data-layout-iframe-id="inline-UkT7BKBHXgZghFhynRyb"
            data-form-id="UkT7BKBHXgZghFhynRyb"
            title="Contact Us Form"
          />
        </div>
      </section>

      {/* Alternative Contact Methods Section */}
      <section className="section-padding bg-gray-50">
        <div className="container-custom max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-primary-700 mb-4">
              Or Contact Us Directly
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Prefer to reach out directly? We're here to help!
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Phone */}
            <div className="bg-white rounded-xl p-8 border-2 border-primary-200 hover:border-accent-gold hover:shadow-lg transition-all duration-300 text-center">
              <div className="flex justify-center mb-4">
                <FaPhone className="text-4xl text-accent-gold" />
              </div>
              <h3 className="text-2xl font-bold text-primary-700 mb-4">Call Us</h3>
              <a
                href="tel:(385)227-4522"
                className="text-xl font-bold text-primary-600 hover:text-accent-gold transition-colors duration-300"
              >
                (385) 227-4522
              </a>
              <p className="text-gray-600 text-sm mt-4">
                Available for immediate assistance
              </p>
            </div>

            {/* Email */}
            <div className="bg-white rounded-xl p-8 border-2 border-primary-200 hover:border-accent-gold hover:shadow-lg transition-all duration-300 text-center">
              <div className="flex justify-center mb-4">
                <FaEnvelope className="text-4xl text-accent-gold" />
              </div>
              <h3 className="text-2xl font-bold text-primary-700 mb-4">Email Us</h3>
              <a
                href="mailto:info@luxuryconstruction.com"
                className="text-xl font-bold text-primary-600 hover:text-accent-gold transition-colors duration-300 break-all"
              >
                info@luxuryconstruction.com
              </a>
              <p className="text-gray-600 text-sm mt-4">
                We respond within 24 hours
              </p>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
