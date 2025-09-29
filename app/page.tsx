import Head from "next/head"
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

export default function HomePage() {
  return (
    <>
      <Head>
        {/* Basic SEO */}
        <title>Best Bridal Makeup Artist in Coimbatore | Sasvi Creations</title>
        <meta
          name="description"
          content="Professional bridal makeup artist in Coimbatore offering luxury wedding makeup, party makeup, and destination wedding services. 5+ years experience with premium products."
        />
        <meta
          name="keywords"
          content="bridal makeup artist coimbatore, wedding makeup coimbatore, kovaipudur makeup artist, destination wedding makeup, party makeup artist, professional makeup services, luxury bridal makeover, commercial makeup artist"
        />
        <meta name="author" content="Sasvi Creations" />
        <meta name="publisher" content="Sasvi Creations" />
        <meta name="classification" content="Business" />
        <meta name="robots" content="index, follow" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="sitemap" type="application/xml" href="/sitemap.xml" />

        {/* Canonical & Language alternates */}
        <link rel="canonical" href="http://sasvicreation.com" />
        <link rel="alternate" href="http://sasvicreation.com" hrefLang="en-IN" />
        <link rel="alternate" href="http://sasvicreation.com" hrefLang="hi-IN" />
        <link rel="alternate" href="http://sasvicreation.com" hrefLang="ta-IN" />

        {/* Open Graph (OG) */}
        <meta property="og:title" content="Best Bridal Makeup Artist in Coimbatore | Sasvi Creations" />
        <meta property="og:description" content="Transform your special day with professional bridal makeup services in Coimbatore. Expert makeup artist with 5+ years experience using premium Kryolan, MAC, Forever, and NARS products." />
        <meta property="og:url" content="http://sasvicreation.com" />
        <meta property="og:type" content="website" />
        <meta property="og:locale" content="en_IN" />
        <meta property="og:site_name" content="Sasvi Creations" />
        <meta property="og:image" content="/images/hero.png" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Sasvi Creations - Best Bridal Makeup Artist in Coimbatore" />

        <meta property="og:image" content="/bridal-makeup-and-hairstyle-elegant-natural.jpg" />
        <meta property="og:image:width" content="1200" />
        <meta property="og:image:height" content="630" />
        <meta property="og:image:alt" content="Professional Bridal Makeup by Sasvi Creations" />

        {/* Twitter */}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Best Bridal Makeup Artist in Coimbatore | Sasvi Creations" />
        <meta name="twitter:description" content="Transform your special day with professional bridal makeup services in Coimbatore. Expert makeup artist with 5+ years experience." />
        <meta name="twitter:creator" content="@sasvicreations" />
        <meta name="twitter:site" content="@sasvicreations" />
        <meta name="twitter:image" content="/images/hero.png" />
        <meta name="twitter:image:alt" content="Sasvi Creations - Best Bridal Makeup Artist in Coimbatore" />

        {/* Extra Meta */}
        <meta name="revisit-after" content="7 days" />
        <meta name="rating" content="General" />
        <meta name="distribution" content="Global" />
        <meta name="subject" content="Professional Bridal Makeup Services" />
        <meta name="abstract" content="Best bridal makeup artist in Coimbatore offering luxury wedding and party makeup services" />
        <meta name="topic" content="Bridal Makeup, Wedding Services, Beauty Services" />
        <meta name="summary" content="Professional makeup artist specializing in bridal and party makeup in Coimbatore with 5+ years experience" />
        <meta name="designer" content="Sasvi Creations" />
        <meta name="copyright" content="© 2024 Sasvi Creations" />
        <meta name="reply-to" content="info@sasvicreation.com" />
        <meta name="owner" content="Sasvi Creations" />
        <meta name="url" content="https://sasvicreation.com" />
        <meta name="identifier-URL" content="https://sasvicreation.com" />
        <meta name="pagename" content="Best Bridal Makeup Artist in Coimbatore" />
        <meta name="category" content="Beauty Services, Bridal Services, Makeup Artist" />
        <meta name="coverage" content="Coimbatore, Tamil Nadu, India" />
        <meta name="expires" content="never" />
      </Head>

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
    </>
  )
}