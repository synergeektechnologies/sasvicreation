import { ContactDetails } from "@/components/contact/contact-details"
import { ContactFAQ } from "@/components/contact/contact-faq"
import { ContactHero } from "@/components/contact/contact-hero"
import { ContactTestimonials } from "@/components/contact/contact-testimonials"
import Footer from "@/components/footer"
import Header from "@/components/header"

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
