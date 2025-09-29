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
    canonical: 'https://sasvicreation.com/contact',
  },
  openGraph: {
    title: "Contact Sasvi Creations | Book Makeup Artist",
    description: "Contact Sasvi Creations for professional bridal and party makeup services in Coimbatore. WhatsApp booking available at +91-7708032077.",
    url: 'https://sasvicreation.com/contact',
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
        {/* FAQPage JSON-LD for rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": [
                {
                  "@type": "Question",
                  "name": "How far in advance should I book?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "For bridal makeup, we recommend booking 3-6 months in advance, especially during wedding season (October-March). For party makeup, 2-4 weeks notice is usually sufficient. However, we do accommodate last-minute bookings when possible with additional charges."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you provide makeup trials?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! We highly recommend makeup trials, especially for brides. Trials are typically scheduled 1-2 months before your event and cost ₹3,000-₹5,000 depending on the complexity. This ensures we perfect your look and you feel confident on your special day."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's included in your bridal packages?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Our bridal packages include consultation, makeup trial, wedding day makeup, hair styling, draping assistance, and touch-up kit. Premium packages also include pre-wedding shoot makeup, mehendi/sangeet looks, and additional family member makeup."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you travel for destination weddings?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We love destination weddings. Travel charges apply based on location and duration. For outstation events, accommodation and travel expenses are additional. We're experienced with multi-day wedding celebrations."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What products do you use?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "We use premium, long-lasting makeup brands including Kryolan, MAC, Forever, and NARS. All products are hypoallergenic and suitable for photography. We also carry backup products for touch-ups throughout your event."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Can you accommodate skin allergies or sensitivities?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes, we always conduct a patch test during trials for sensitive skin. We carry hypoallergenic and organic product alternatives. Please inform us about any allergies or skin conditions during booking so we can prepare accordingly."
                  }
                },
                {
                  "@type": "Question",
                  "name": "What's your cancellation policy?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Cancellations made 30+ days before the event receive a full refund minus booking fee. 15-30 days: 50% refund. Less than 15 days: no refund, but we can reschedule once within 6 months. Weather-related cancellations are handled case-by-case."
                  }
                },
                {
                  "@type": "Question",
                  "name": "Do you offer group discounts?",
                  "acceptedAnswer": {
                    "@type": "Answer",
                    "text": "Yes! Groups of 4+ people receive 10% discount, and 6+ people receive 15% discount. Bridal parties with multiple services (mehendi, sangeet, wedding) receive special package pricing. Contact us for custom group quotes."
                  }
                }
              ]
            })
          }}
        />
        <ContactTestimonials />
      </main>
      <Footer />
    </div>
  )
}
