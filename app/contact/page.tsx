import { ContactDetails } from "@/components/contact/contact-details"
import { ContactFAQ } from "@/components/contact/contact-faq"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactTestimonials } from "@/components/contact/contact-testimonials"
import Footer from "@/components/footer"
import Header from "@/components/header"

export const metadata = {
  title: "Contact | Book Best Bridal Makeup Artist | Sasvi Creations Coimbatore",
  description:
    "Contact Sasvi Creations for professional bridal and party makeup services in Coimbatore. WhatsApp booking available. Located in Kovaipudur. Call +91-7708032077.",
  keywords:
    "contact makeup artist, book bridal makeup, makeup artist coimbatore contact, kovaipudur makeup artist, whatsapp booking makeup, sasvi creations contact, wedding makeup booking",
  alternates: {
    canonical: 'http://sasvicreation.com/contact',
  },
  openGraph: {
    title: "Contact Sasvi Creations | Book Makeup Artist",
    description: "Contact Sasvi Creations for professional bridal and party makeup services in Coimbatore. WhatsApp booking available at +91-7708032077.",
    url: 'http://sasvicreation.com/contact',
    type: 'website',
    images: [
      {
        url: '/images/hero.png',
        width: 1200,
        height: 630,
        alt: 'Contact Sasvi Creations - Professional Makeup Artist',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: "Contact Sasvi Creations | Book Makeup Artist",
    description: "Contact for professional bridal and party makeup services in Coimbatore. WhatsApp booking available.",
    images: ['/images/hero.png'],
  },
}

export default function ContactPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <ContactHero />
        <ContactDetails />
        <ContactFAQ />
        <ContactTestimonials />
      </main>
      <Footer />
    </div>
  )
}
