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
    "about makeup artist, professional makeup artist bio, wedding makeup artist experience, bridal makeup artist story, sasvi makeup artist coimbatore, kovaipudur makeup artist background, professional beauty artist",
  alternates: {
    canonical: 'https://sasvicreation.com/about',
  },
  openGraph: {
    title: "About Sasvi | Professional Makeup Artist",
    description: "Meet Sasvi - a professional makeup artist with 5+ years of experience in Coimbatore. Discover our philosophy of enhancing natural beauty with confidence.",
    url: 'https://sasvicreation.com/about',
    type: 'profile',
    images: [
      {
        url: '/artist-portrait-1.jpg',
        width: 1200,
        height: 630,
        alt: 'Sasvi - Professional Makeup Artist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "About Sasvi | Professional Makeup Artist",
    description: "Meet Sasvi - professional makeup artist with 5+ years experience in Coimbatore.",
    images: ['/artist-portrait-1.jpg'],
  },
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
