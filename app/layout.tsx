import { generateLocalBusinessSchema, generateWebsiteSchema } from "@/lib/structured-data"
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
  title: "Sasvi Creations - Best Bridal Makeup Artist | Professional Makeup Services",
  description:
    "Professional bridal and party makeup services by Sasvi Creations. Enhance your natural beauty with luxury makeup for weddings, parties, and commercial shoots in Coimbatore.",
  keywords: "bridal makeup artist coimbatore, wedding makeup artist, party makeup, professional makeup services, luxury bridal makeover, destination wedding makeup, kovaipudur makeup artist",
  authors: [{ name: "Sasvi Creations" }],
  creator: "Sasvi Creations",
  publisher: "Sasvi Creations",
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
    url: 'https://your-domain.com', // Replace with your actual domain
    title: 'Sasvi Creations - Best Bridal Makeup Artist in Coimbatore',
    description: 'Professional bridal and party makeup services by Sasvi Creations. Enhance your natural beauty with luxury makeup for weddings, parties, and commercial shoots in Coimbatore.',
    siteName: 'Sasvi Creations',
    images: [
      {
        url: '/images/hero.png', // Replace with your main promotional image
        width: 1200,
        height: 630,
        alt: 'Sasvi Creations - Professional Makeup Artist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Sasvi Creations - Best Bridal Makeup Artist',
    description: 'Professional bridal and party makeup services in Coimbatore. Enhance your natural beauty with luxury makeup.',
    images: ['/images/hero.png'],
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
        <link rel="icon" href="/images/sasvi-logo.png" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateLocalBusinessSchema()) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(generateWebsiteSchema()) }}
        />
      </head>
      <body className="antialiased">{children}</body>
    </html>
  )
}
