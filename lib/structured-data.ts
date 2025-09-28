export function generateLocalBusinessSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "BeautySalon",
    "name": "Sasvi Creations",
    "description": "Professional bridal and party makeup services in Coimbatore",
    "url": "http://sasvicreation.com",
    "logo": "http://sasvicreation.com/images/sasvi-logo.png",
    "image": "http://sasvicreation.com/images/hero.png",
    "telephone": "+91-7708032077",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Kovaipudur",
      "addressLocality": "Coimbatore",
      "addressRegion": "Tamil Nadu",
      "postalCode": "641010",
      "addressCountry": "IN"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "11.0168",
      "longitude": "76.9558"
    },
    "openingHours": [
      "Mo-Sa 09:00-19:00"
    ],
    "priceRange": "₹₹",
    "servedCuisine": [],
    "serviceArea": {
      "@type": "GeoCircle",
      "geoMidpoint": {
        "@type": "GeoCoordinates",
        "latitude": "11.0168",
        "longitude": "76.9558"
      },
      "geoRadius": "50000"
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Makeup Services",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Bridal Makeup",
            "description": "Professional bridal makeup for weddings"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Party Makeup",
            "description": "Glamorous makeup for parties and events"
          }
        }
      ]
    },
    "founder": {
      "@type": "Person",
      "name": "Sasvi",
      "jobTitle": "Professional Makeup Artist"
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "5",
      "reviewCount": "100"
    }
  }
}

export function generateWebsiteSchema() {
  return {
    "@context": "https://schema.org",
    "@type": "WebSite",
    "name": "Sasvi Creations",
    "url": "http://sasvicreation.com",
    "potentialAction": {
      "@type": "SearchAction",
      "target": {
        "@type": "EntryPoint",
        "urlTemplate": "http://sasvicreation.com/search?q={search_term_string}"
      },
      "query-input": "required name=search_term_string"
    }
  }
}