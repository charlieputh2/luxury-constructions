export default function Map() {
  return (
    <section className="section-padding bg-gray-50">
      <div className="container-custom">
        <h2 className="text-center mb-12">Visit Us in Salt Lake City</h2>
        <div className="grid md:grid-cols-2 gap-8 items-center">
          {/* Map */}
          <div className="rounded-lg overflow-hidden shadow-lg h-96">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3033.3527819893!2d-111.8916!3d40.7128!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8755a3c6c6c6c6c7%3A0x6c6c6c6c6c6c6c6c!2s2861%20S%202700%20E%2C%20Salt%20Lake%20City%2C%20UT%2084109!5e0!3m2!1sen!2sus!4v1234567890"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Luxury Construction Location"
            ></iframe>
          </div>

          {/* Info */}
          <div>
            <h3 className="text-primary-600 mb-6">Luxury Concrete And Landscaping LLC</h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-bold text-primary-700 mb-2">Address</h4>
                <p className="text-gray-600">
                  2861 S 2700 E<br />
                  Salt Lake City, UT 84109
                </p>
              </div>

              <div>
                <h4 className="font-bold text-primary-700 mb-2">Phone</h4>
                <a
                  href="tel:(385)227-4522"
                  className="text-primary-500 hover:text-primary-700 font-semibold"
                >
                  (385) 227-4522
                </a>
              </div>

              <div>
                <h4 className="font-bold text-primary-700 mb-2">Email</h4>
                <a
                  href="mailto:info@luxuryconstruction.com"
                  className="text-primary-500 hover:text-primary-700 font-semibold"
                >
                  info@luxuryconstruction.com
                </a>
              </div>

              <div>
                <h4 className="font-bold text-primary-700 mb-2">Service Area</h4>
                <p className="text-gray-600">
                  We proudly serve Salt Lake City and surrounding areas including the Wasatch Front and downtown Salt Lake City.
                </p>
              </div>

              <a
                href="tel:(385)227-4522"
                className="btn-primary inline-block"
              >
                Call for Free Estimate
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
