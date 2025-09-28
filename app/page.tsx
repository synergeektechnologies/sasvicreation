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
  keywords: "bridal makeup artist coimbatore, wedding makeup coimbatore, kovaipudur makeup artist, destination wedding makeup, party makeup artist, professional makeup services",
  alternates: {
    canonical: 'https://your-domain.com', // Replace with your actual domain
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
