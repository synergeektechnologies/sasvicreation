import AboutHero from "@/components/about/about-hero"
import AboutMe from "@/components/about/about-me"
import AboutTestimonials from "@/components/about/about-testimonials"
import Philosophy from "@/components/about/philosophy"
import SocialSection from "@/components/about/social-section"
import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata = {
  title: "About | Best Bridal Makeup Artist | Wedding Makeup Artist | Sasvi Creations",
  description:
    "Meet the founder of Sasvi Creations - a professional makeup artist with 5+ years of experience. Learn about our philosophy of enhancing natural beauty with confidence.",
  keywords:
    "about makeup artist, professional makeup artist bio, wedding makeup artist experience, bridal makeup artist story",
}

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <AboutHero />
        <AboutMe />
        <Philosophy />
        <SocialSection />
        <AboutTestimonials />
      </main>
      <Footer />
    </div>
  )
}
