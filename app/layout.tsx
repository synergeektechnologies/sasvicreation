import { generateLocalBusinessSchema, generatePersonSchema, generateWebsiteSchema } from "@/lib/structured-data"
import { Lora, Montserrat, Playfair_Display } from "next/font/google"
import type React from "react"
import "./globals.css"

const playfairDisplay = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
})

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  display: "swap",
})

const lora = Lora({
  subsets: ["latin"],
  variable: "--font-lora",
  display: "swap",
  style: ["normal", "italic"],
})

export const metadata = {
  metadataBase: new URL('https://sasvicreation.com'),
  title: {
    default: "Sasvi Creations - Best Bridal Makeup Artist | Professional Makeup Services",
    template: "%s | Sasvi Creations"
  },
  description:
    "Professional bridal and party makeup services by Sasvi Creations. Enhance your natural beauty with luxury makeup for weddings, parties, and commercial shoots in Coimbatore.",
  keywords: "bridal makeup artist coimbatore, wedding makeup artist, party makeup, professional makeup services, luxury bridal makeover, destination wedding makeup, kovaipudur makeup artist",
  authors: [{ name: "Sasvi Creations", url: "https://sasvicreation.com" }],
  creator: "Sasvi Creations",
  publisher: "Sasvi Creations",
  applicationName: "Sasvi Creations",
  referrer: "origin-when-cross-origin",
  category: "Beauty & Personal Care",
  classification: "Business",
  generator: "Next.js",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    // Add your Google Search Console verification code here
    // google: 'your-google-verification-code',
  },
  openGraph: {
    type: 'website',
    locale: 'en_IN',
    url: 'https://sasvicreation.com',
    title: 'Sasvi Creations - Best Bridal Makeup Artist in Coimbatore',
    description: 'Professional bridal and party makeup services by Sasvi Creations. Enhance your natural beauty with luxury makeup for weddings, parties, and commercial shoots in Coimbatore.',
    siteName: 'Sasvi Creations',
    countryName: 'India',
    emails: ['info@sasvicreation.com'],
    phoneNumbers: ['+91-7708032077'],
    faxNumbers: [],
    alternateLocale: ['hi_IN', 'ta_IN'],
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Sasvi Creations - Professional Makeup Artist',
        type: 'image/png',
      },
      {
        url: '/images/sasvi-logo.png',
        width: 800,
        height: 600,
        alt: 'Sasvi Creations Logo',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sasvi Creations - Best Bridal Makeup Artist',
    description: 'Professional bridal and party makeup services in Coimbatore. Enhance your natural beauty with luxury makeup.',
    creator: '@sasvicreations',
    site: '@sasvicreations',
    images: {
      url: '/images/hero.png',
      alt: 'Sasvi Creations - Professional Makeup Artist',
      width: 1200,
      height: 630,
    },
  },
  other: {
    'geo.region': 'IN-TN',
    'geo.placename': 'Coimbatore',
    'geo.position': '11.0168;76.9558',
    'ICBM': '11.0168, 76.9558',
    'theme-color': '#8B5A2B',
    'msapplication-TileColor': '#8B5A2B',
    'msapplication-TileImage': '/images/sasvi-logo.png',
    'msapplication-config': '/browserconfig.xml',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'default',
    'apple-mobile-web-app-title': 'Sasvi Creations',
    'mobile-web-app-capable': 'yes',
    'format-detection': 'telephone=yes',
    'HandheldFriendly': 'True',
    'MobileOptimized': '320',
    'target-densitydpi': 'device-dpi',
    'amp': 'false',
    'pinterest': 'nopin',
    'slack-app-id': 'AXXXXXXXXXXXXX',
    'fb:app_id': '1234567890123456',
    'business:contact_data:street_address': 'Kovaipudur',
    'business:contact_data:locality': 'Coimbatore',
    'business:contact_data:region': 'Tamil Nadu',
    'business:contact_data:postal_code': '641010',
    'business:contact_data:country_name': 'India',
    'business:contact_data:phone_number': '+91-7708032077',
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${playfairDisplay.variable} ${montserrat.variable} ${lora.variable}`}>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />
        <meta name="theme-color" content="#8B5A2B" />
        <meta name="msapplication-TileColor" content="#8B5A2B" />
        <meta name="msapplication-TileImage" content="/images/sasvi-logo.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="apple-mobile-web-app-title" content="Sasvi Creations" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="format-detection" content="telephone=yes" />
        <meta name="HandheldFriendly" content="True" />
        <meta name="MobileOptimized" content="320" />
        <meta name="target-densitydpi" content="device-dpi" />
        <meta name="geo.region" content="IN-TN" />
        <meta name="geo.placename" content="Coimbatore" />
        <meta name="geo.position" content="11.0168;76.9558" />
        <meta name="ICBM" content="11.0168, 76.9558" />
        <meta name="coverage" content="Worldwide" />
        <meta name="distribution" content="Global" />
        <meta name="rating" content="General" />
        <meta name="revisit-after" content="7 days" />
        <meta name="expires" content="never" />
        <meta name="language" content="English" />
        <meta name="web_author" content="Sasvi Creations" />
        <meta name="copyright" content="© 2024 Sasvi Creations. All rights reserved." />
        <meta name="reply-to" content="info@sasvicreation.com" />
        <meta name="owner" content="Sasvi Creations" />
        <meta name="url" content="http://sasvicreation.com" />
        <meta name="identifier-URL" content="http://sasvicreation.com" />
        <meta name="directory" content="submission" />
        <meta name="pagename" content="Sasvi Creations - Professional Makeup Artist" />
        <meta name="category" content="Beauty, Makeup, Bridal Services, Wedding Services" />
        <meta name="coverage" content="Coimbatore, Tamil Nadu, India" />
        <meta property="business:contact_data:phone_number" content="+91-7708032077" />
        <meta property="business:contact_data:website" content="http://sasvicreation.com" />
        <link rel="icon" href="/images/sasvi-logo.png" />
        <link rel="shortcut icon" href="/images/sasvi-logo.png" />
        <link rel="apple-touch-icon" href="/images/sasvi-logo.png" />
        <link rel="apple-touch-icon" sizes="57x57" href="/images/sasvi-logo.png" />
        <link rel="apple-touch-icon" sizes="60x60" href="/images/sasvi-logo.png" />
        <link rel="apple-touch-icon" sizes="72x72" href="/images/sasvi-logo.png" />
        <link rel="apple-touch-icon" sizes="76x76" href="/images/sasvi-logo.png" />
        <link rel="apple-touch-icon" sizes="114x114" href="/images/sasvi-logo.png" />
        <link rel="apple-touch-icon" sizes="120x120" href="/images/sasvi-logo.png" />
        <link rel="apple-touch-icon" sizes="144x144" href="/images/sasvi-logo.png" />
        <link rel="apple-touch-icon" sizes="152x152" href="/images/sasvi-logo.png" />
        <link rel="apple-touch-icon" sizes="180x180" href="/images/sasvi-logo.png" />
        <link rel="mask-icon" href="/images/sasvi-logo.svg" color="#8B5A2B" />
        <link rel="manifest" href="/manifest.json" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebsiteSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generatePersonSchema()) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
