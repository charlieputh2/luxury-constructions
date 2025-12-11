import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang="en">
      <Head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#1B5E20" />
        <meta name="description" content="Luxury Construction - Premier Concrete Contractors in Salt Lake City, UT. Expert concrete driveways, patios, foundations & more." />
        <meta name="keywords" content="concrete contractors, salt lake city, driveways, patios, foundations, landscaping" />
        <meta name="author" content="Luxury Construction LLC" />
        
        {/* Favicon - Using Cloudinary logo */}
        <link rel="icon" href="https://res.cloudinary.com/dtr1tnutd/image/upload/v1765250127/logo_zo8ea0.png" type="image/png" />
        <link rel="apple-touch-icon" href="https://res.cloudinary.com/dtr1tnutd/image/upload/v1765250127/logo_zo8ea0.png" />
        <link rel="shortcut icon" href="https://res.cloudinary.com/dtr1tnutd/image/upload/v1765250127/logo_zo8ea0.png" type="image/png" />
        
        {/* Open Graph / Social Media */}
        <meta property="og:type" content="website" />
        <meta property="og:title" content="Luxury Construction - Concrete Contractors Salt Lake City" />
        <meta property="og:description" content="Expert concrete contractors in Salt Lake City, UT. Driveways, patios, foundations & more." />
        <meta property="og:image" content="https://res.cloudinary.com/dtr1tnutd/image/upload/v1765250127/logo_zo8ea0.png" />
        
        {/* Twitter Card */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Luxury Construction - Concrete Contractors" />
        <meta name="twitter:description" content="Expert concrete contractors in Salt Lake City, UT" />
        <meta name="twitter:image" content="https://res.cloudinary.com/dtr1tnutd/image/upload/v1765250127/logo_zo8ea0.png" />
        
        {/* Local Business Schema */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            "name": "Luxury Construction",
            "image": "https://res.cloudinary.com/dtr1tnutd/image/upload/v1765250127/logo_zo8ea0.png",
            "description": "Premier concrete contractors in Salt Lake City, UT",
            "address": {
              "@type": "PostalAddress",
              "streetAddress": "2861 S 2700 E",
              "addressLocality": "Salt Lake City",
              "addressRegion": "UT",
              "postalCode": "84109",
              "addressCountry": "US"
            },
            "telephone": "(385) 227-4522",
            "email": "info@luxuryconstruction.com",
            "url": "https://luxuryconstruction.com",
            "priceRange": "$$",
            "areaServed": "Salt Lake City, UT"
          })}
        </script>
      </Head>
      <body className="bg-white text-gray-900">
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}
