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
    "bridal makeup packages, wedding makeup artist, bridal makeover, destination wedding makeup, luxury bridal makeup",
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
