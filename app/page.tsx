import Footer from "@/components/footer"
import Header from "@/components/header"
import AboutBrandSection from "@/components/home/about-brand-section"
import FounderIntro from "@/components/home/founder-intro"
import HappyClientsSection from "@/components/home/happy-clients-section"
import HeroSection from "@/components/home/hero-section"
import ImageShowcase from "@/components/home/image-showcase"
import LatestWorkSection from "@/components/home/latest-work-section"
import OccasionSection from "@/components/home/occasion-section"
import ServicesSection from "@/components/home/services-section"
import TestimonialsSection from "@/components/home/testimonials-section"

export const metadata = {
  title: "Best Bridal Makeup Artist in Coimbatore | Sasvi Creations",
  description: "Professional bridal makeup artist in Coimbatore offering luxury wedding makeup, party makeup, and destination wedding services. 5+ years experience with premium products.",
  keywords: "bridal makeup artist coimbatore, wedding makeup coimbatore, kovaipudur makeup artist, destination wedding makeup, party makeup artist, professional makeup services, luxury bridal makeover, commercial makeup artist",
  authors: [{ name: "Sasvi Creations", url: "http://sasvicreation.com" }],
  creator: "Sasvi Creations",
  publisher: "Sasvi Creations",
  classification: "Business",
  alternates: {
    canonical: 'http://sasvicreation.com',
    languages: {
      'en-IN': 'http://sasvicreation.com',
      'hi-IN': 'http://sasvicreation.com',
      'ta-IN': 'http://sasvicreation.com',
    },
  },
  openGraph: {
    title: "Best Bridal Makeup Artist in Coimbatore | Sasvi Creations",
    description: "Transform your special day with professional bridal makeup services in Coimbatore. Expert makeup artist with 5+ years experience using premium Kryolan, MAC, Forever, and NARS products.",
    url: 'http://sasvicreation.com',
    type: 'website',
    locale: 'en_IN',
    siteName: 'Sasvi Creations',
    countryName: 'India',
    determiner: 'the',
    ttl: 604800,
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Sasvi Creations - Best Bridal Makeup Artist in Coimbatore',
        type: 'image/png',
      },
      {
        url: '/bridal-makeup-and-hairstyle-elegant-natural.jpg',
        width: 1200,
        height: 630,
        alt: 'Professional Bridal Makeup by Sasvi Creations',
        type: 'image/jpeg',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Best Bridal Makeup Artist in Coimbatore | Sasvi Creations",
    description: "Transform your special day with professional bridal makeup services in Coimbatore. Expert makeup artist with 5+ years experience.",
    creator: '@sasvicreations',
    site: '@sasvicreations',
    images: {
      url: '/images/hero.png',
      alt: 'Sasvi Creations - Best Bridal Makeup Artist in Coimbatore',
      width: 1200,
      height: 630,
    },
  },
  other: {
    'revisit-after': '7 days',
    'rating': 'General',
    'distribution': 'Global',
    'subject': 'Professional Bridal Makeup Services',
    'abstract': 'Best bridal makeup artist in Coimbatore offering luxury wedding and party makeup services',
    'topic': 'Bridal Makeup, Wedding Services, Beauty Services',
    'summary': 'Professional makeup artist specializing in bridal and party makeup in Coimbatore with 5+ years experience',
    'Classification': 'Business',
    'designer': 'Sasvi Creations',
    'copyright': '© 2024 Sasvi Creations',
    'reply-to': 'info@sasvicreation.com',
    'owner': 'Sasvi Creations',
    'url': 'http://sasvicreation.com',
    'identifier-URL': 'http://sasvicreation.com',
    'directory': 'submission',
    'pagename': 'Best Bridal Makeup Artist in Coimbatore',
    'category': 'Beauty Services, Bridal Services, Makeup Artist',
    'coverage': 'Coimbatore, Tamil Nadu, India',
    'expires': 'never',
  },
}

export default function HomePage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <HeroSection />
        <AboutBrandSection />
        <ServicesSection />
        <ImageShowcase />
        <FounderIntro />
        <OccasionSection />
        <HappyClientsSection />
        <LatestWorkSection />
        <TestimonialsSection />
      </main>
      <Footer />
    </div>
  )
}
