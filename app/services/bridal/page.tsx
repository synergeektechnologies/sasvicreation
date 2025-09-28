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
    canonical: 'http://sasvicreation.com/services/bridal',
  },
  openGraph: {
    title: "Bridal Makeup Packages | Sasvi Creations",
    description: "Transform your special day with luxury bridal makeup packages. Professional destination wedding makeup artist in Coimbatore with premium Kryolan, MAC products.",
    url: 'http://sasvicreation.com/services/bridal',
    type: 'website',
    images: [
      {
        url: '/bridal-makeup-and-hairstyle-elegant-natural.jpg',
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
    images: ['/bridal-makeup-and-hairstyle-elegant-natural.jpg'],
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
        <BridalCTA />
      </main>
      <Footer />
    </div>
  )
}
