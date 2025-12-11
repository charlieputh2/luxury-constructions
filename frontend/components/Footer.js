import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin } from 'react-icons/fa'

export default function Footer() {
  const currentYear = new Date().getFullYear()

  return (
    <footer className="bg-primary-900 text-white">
      {/* Main Footer */}
      <div className="container-custom section-padding">
        <div className="grid md:grid-cols-5 gap-8 mb-8">
          {/* Company Info */}
          <div>
            <img
              src="https://res.cloudinary.com/dtr1tnutd/image/upload/v1765250127/logo_zo8ea0.png"
              alt="Luxury Construction Logo"
              className="h-12 w-12 mb-4"
            />
            <h4 className="text-accent-gold font-bold mb-4">Luxury Construction</h4>
            <div className="flex flex-col gap-3">
              <div className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 bg-accent-gold rounded-full"></span>
                <span className="text-accent-gold font-semibold text-sm">Trusted</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 bg-accent-gold rounded-full"></span>
                <span className="text-accent-gold font-semibold text-sm">Local</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="inline-block w-1.5 h-1.5 bg-accent-gold rounded-full"></span>
                <span className="text-accent-gold font-semibold text-sm">Guaranteed</span>
              </div>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-accent-gold font-bold mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-primary-200 hover:text-accent-gold transition">
                  Services
                </a>
              </li>
              <li>
                <a href="#why-us" className="text-primary-200 hover:text-accent-gold transition">
                  Why Us
                </a>
              </li>
              <li>
                <a href="#benefits" className="text-primary-200 hover:text-accent-gold transition">
                  Benefits
                </a>
              </li>
              <li>
                <a href="#faq" className="text-primary-200 hover:text-accent-gold transition">
                  FAQ
                </a>
              </li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-accent-gold font-bold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="#services" className="text-primary-200 hover:text-accent-gold transition">
                  Concrete Driveways
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-200 hover:text-accent-gold transition">
                  Decorative Concrete
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-200 hover:text-accent-gold transition">
                  Home Remodeling
                </a>
              </li>
              <li>
                <a href="#services" className="text-primary-200 hover:text-accent-gold transition">
                  Sports Courts
                </a>
              </li>
            </ul>
          </div>

          {/* Service Areas */}
          <div>
            <h4 className="text-accent-gold font-bold mb-4">Service Areas</h4>
            <ul className="space-y-2 text-sm">
              <li>
                <span className="text-primary-200 hover:text-accent-gold transition cursor-default">
                  Salt Lake County
                </span>
              </li>
              <li>
                <span className="text-primary-200 hover:text-accent-gold transition cursor-default">
                  Utah County
                </span>
              </li>
              <li>
                <span className="text-primary-200 hover:text-accent-gold transition cursor-default">
                  Davis County
                </span>
              </li>
              <li>
                <span className="text-primary-200 hover:text-accent-gold transition cursor-default">
                  Weber County
                </span>
              </li>
              <li>
                <span className="text-primary-200 hover:text-accent-gold transition cursor-default">
                  Summit County
                </span>
              </li>
              <li>
                <span className="text-primary-200 hover:text-accent-gold transition cursor-default">
                  Tooele County
                </span>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h4 className="text-accent-gold font-bold mb-4">Contact Us</h4>
            <div className="space-y-3 text-sm">
              <div className="flex items-start gap-3">
                <FaMapMarkerAlt className="text-accent-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="text-primary-200">2861 S 2700 E</p>
                  <p className="text-primary-200">Salt Lake City, UT 84109</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <FaPhone className="text-accent-gold flex-shrink-0" />
                <a href="tel:(385)227-4522" className="text-primary-200 hover:text-accent-gold transition">
                  (385) 227-4522
                </a>
              </div>
              <div className="flex items-center gap-3">
                <FaEnvelope className="text-accent-gold flex-shrink-0" />
                <a href="mailto:contact@luxurycl.net" className="text-primary-200 hover:text-accent-gold transition">
                  contact@luxurycl.net
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-primary-700 pt-8 flex justify-between items-center flex-col md:flex-row gap-4">
          <p className="text-primary-300 text-sm">
            &copy; {currentYear} Luxury Construction LLC. All rights reserved.
          </p>
          <div className="flex gap-4">
            <a
              href="#"
              className="text-primary-300 hover:text-accent-gold transition"
              aria-label="Facebook"
            >
              <FaFacebook size={20} />
            </a>
            <a
              href="#"
              className="text-primary-300 hover:text-accent-gold transition"
              aria-label="Twitter"
            >
              <FaTwitter size={20} />
            </a>
            <a
              href="#"
              className="text-primary-300 hover:text-accent-gold transition"
              aria-label="LinkedIn"
            >
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="bg-primary-950 py-4 text-center text-primary-400 text-sm">
        <p>
          Luxury Construction - Premier Concrete Contractors in Salt Lake City, UT | Driveways • Patios • Foundations • Landscaping
        </p>
      </div>
    </footer>
  )
}
