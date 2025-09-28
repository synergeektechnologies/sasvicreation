import Header from "@/components/header"
import Footer from "@/components/footer"
import PartyHero from "@/components/services/party/party-hero"
import PartyIntro from "@/components/services/party/party-intro"
import PartyLookingFor from "@/components/services/party/party-looking-for"
import PartyWork from "@/components/services/party/party-work"
import PartyTestimonials from "@/components/services/party/party-testimonials"
import PartyDifferences from "@/components/services/party/party-differences"
import PartyTips from "@/components/services/party/party-tips"
import PartyCTA from "@/components/services/party/party-cta"

export const metadata = {
  title: "Party Makeup Services | Best Party Makeup Artist | Sasvi Creations",
  description:
    "Professional party makeup services for all occasions. Classical and trendy makeup looks that are camera-ready and long-lasting. Book your party makeover today.",
  keywords: "party makeup, event makeup, occasion makeup, glamorous makeup, party makeup artist, professional makeup",
}

export default function PartyServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        <PartyHero />
        <PartyIntro />
        <PartyLookingFor />
        <PartyWork />
        <PartyTestimonials />
        <PartyDifferences />
        <PartyTips />
        <PartyCTA />
      </main>
      <Footer />
    </div>
  )
}
