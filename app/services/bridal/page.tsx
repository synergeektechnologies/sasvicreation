import Footer from "@/components/footer"
import Header from "@/components/header"
import BridalCTA from "@/components/services/bridal/bridal-cta"
import BridalExpertise from "@/components/services/bridal/bridal-expertise"
import BridalHero from "@/components/services/bridal/bridal-hero"
import BridalPackages from "@/components/services/bridal/bridal-packages"
import BridalSpecialized from "@/components/services/bridal/bridal-specialized"
import BridalTerms from "@/components/services/bridal/bridal-terms"

export const metadata = {
  title: "Bridal Makeup Packages | Best Bridal Makeup Artist | Sasvi Creations",
  description:
    "Luxury professional bridal makeup for destination weddings. Natural and elegant bridal makeover packages starting from INR 30,000. Book your dream wedding look today.",
  keywords:
    "bridal makeup packages, wedding makeup artist, bridal makeover, destination wedding makeup, luxury bridal makeup, coimbatore bridal makeup, kovaipudur makeup artist, traditional bridal makeup, modern bridal look",
  alternates: {
    canonical: 'https://sasvicreation.com/services/bridal',
  },
  openGraph: {
    title: "Bridal Makeup Packages | Sasvi Creations",
    description: "Transform your special day with luxury bridal makeup packages. Professional destination wedding makeup artist in Coimbatore with premium Kryolan, MAC products.",
    url: 'https://sasvicreation.com/services/bridal',
    type: 'website',
    images: [
      {
        url: '/bridal-makeup-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Bridal Makeup Packages by Sasvi Creations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Bridal Makeup Packages | Sasvi Creations",
    description: "Transform your special day with luxury bridal makeup packages in Coimbatore.",
    images: ['/bridal-makeup-1.jpg'],
  },
}

export default function BridalServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <BridalHero />
        <BridalPackages />
        <BridalExpertise />
        <BridalSpecialized />
        <BridalTerms />
        {/* Structured Data: BreadcrumbList and Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BreadcrumbList",
              "itemListElement": [
                { "@type": "ListItem", "position": 1, "name": "Home", "item": "http://sasvicreation.com" },
                { "@type": "ListItem", "position": 2, "name": "Services", "item": "http://sasvicreation.com/services" },
                { "@type": "ListItem", "position": 3, "name": "Bridal Makeup", "item": "http://sasvicreation.com/services/bridal" }
              ]
            })
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "serviceType": "Bridal Makeup",
              "provider": {
                "@type": "BeautySalon",
                "name": "Sasvi Creations",
                "url": "http://sasvicreation.com"
              },
              "areaServed": { "@type": "City", "name": "Coimbatore" },
              "offers": {
                "@type": "Offer",
                "price": "30000",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "url": "http://sasvicreation.com/services/bridal"
              },
              "description": "Luxury professional bridal makeup for destination weddings. Natural and elegant bridal makeover packages."
            })
          }}
        />
        <BridalCTA />
      </main>
      <Footer />
    </div>
  )
}
