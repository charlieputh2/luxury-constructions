import '../styles/globals.css'
import { DefaultSeo } from 'next-seo'
import Header from '../components/Header'
import Footer from '../components/Footer'

const defaultSEO = {
  titleTemplate: '%s | Luxury Construction - Salt Lake City',
  defaultTitle: 'Luxury Construction - Premier Concrete Contractors in Salt Lake City, UT',
  description: 'Expert concrete contractors in Salt Lake City, UT. Driveways, patios, foundations, heated systems & more. Trusted local service with guaranteed quality.',
  canonical: 'https://luxuryconstruction.com',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luxuryconstruction.com',
    siteName: 'Luxury Construction',
    images: [
      {
        url: 'https://res.cloudinary.com/dtr1tnutd/image/upload/v1765250127/logo_zo8ea0.png',
        width: 1200,
        height: 630,
        alt: 'Luxury Construction Logo',
      },
    ],
  },
  twitter: {
    handle: '@luxuryconstruction',
    site: '@luxuryconstruction',
    cardType: 'summary_large_image',
  },
}

function MyApp({ Component, pageProps }) {
  return (
    <>
      <DefaultSeo {...defaultSEO} />
      <Header />
      <main className="min-h-screen">
        <Component {...pageProps} />
      </main>
      <Footer />
    </>
  )
}

export default MyApp
