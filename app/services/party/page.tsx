import Footer from "@/components/footer"
import Header from "@/components/header"
import PartyCTA from "@/components/services/party/party-cta"
import PartyDifferences from "@/components/services/party/party-differences"
import PartyHero from "@/components/services/party/party-hero"
import PartyIntro from "@/components/services/party/party-intro"
import PartyLookingFor from "@/components/services/party/party-looking-for"
import PartyTestimonials from "@/components/services/party/party-testimonials"
import PartyTips from "@/components/services/party/party-tips"
import PartyWork from "@/components/services/party/party-work"

export const metadata = {
  title: "Party Makeup Services | Best Party Makeup Artist | Sasvi Creations",
  description:
    "Professional party makeup services for all occasions. Classical and trendy makeup looks that are camera-ready and long-lasting. Book your party makeover today.",
  keywords: "party makeup, event makeup, occasion makeup, glamorous makeup, party makeup artist, professional makeup, coimbatore party makeup, engagement makeup, reception makeup, cocktail party makeup, commercial shoot makeup",
  alternates: {
    canonical: 'https://sasvicreation.com/services/party',
  },
  openGraph: {
    title: "Party Makeup Services | Sasvi Creations",
    description: "Professional party makeup for all occasions in Coimbatore. Classical and trendy looks that are camera-ready and long-lasting with premium products.",
    url: 'https://sasvicreation.com/services/party',
    type: 'website',
    images: [
      {
        url: '/party-makeup-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Party Makeup Services by Sasvi Creations',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Party Makeup Services | Sasvi Creations",
    description: "Professional party makeup for all occasions in Coimbatore. Camera-ready glamorous looks.",
    images: ['/party-makeup-1.jpg'],
  },
}

export default function PartyServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PartyHero />
        <PartyIntro />
        <PartyLookingFor />
        <PartyWork />
        <PartyTestimonials />
        <PartyDifferences />
        <PartyTips />
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
                { "@type": "ListItem", "position": 3, "name": "Party Makeup", "item": "http://sasvicreation.com/services/party" }
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
              "serviceType": "Party Makeup",
              "provider": {
                "@type": "BeautySalon",
                "name": "Sasvi Creations",
                "url": "http://sasvicreation.com"
              },
              "areaServed": { "@type": "City", "name": "Coimbatore" },
              "offers": {
                "@type": "Offer",
                "price": "5500",
                "priceCurrency": "INR",
                "availability": "https://schema.org/InStock",
                "url": "http://sasvicreation.com/services/party"
              },
              "description": "Professional party makeup for all occasions. Classical and trendy camera-ready looks."
            })
          }}
        />
        <PartyCTA />
      </main>
      <Footer />
    </div>
  )
}
