import Link from "next/link"
import { Sparkles, Users, Crown, Camera } from "lucide-react"

const services = [
  {
    icon: Crown,
    title: "Bridal Makeover",
    description:
      "Natural and elegant bridal makeover for all wedding functions like Engagement, Haldi, Sangeet, etc. Includes HD airbrush makeup, professional hairstyling, and luxury cosmetics for your special day.",
    link: "/services/bridal",
  },
  {
    icon: Users,
    title: "Bridesmaid Makeover",
    description:
      "With the wedding being a family event and a celebration, your bridesmaid deserves to look the best when around the bride. Coordinated looks that complement the bridal party perfectly.",
    link: "/services/bridal",
  },
  {
    icon: Sparkles,
    title: "Groom Makeover",
    description:
      "Your wedding day is around the corner and we help grooms look their perfect selves on D-Day. Subtle enhancements that bring out natural confidence and charm.",
    link: "/services/bridal",
  },
  {
    icon: Camera,
    title: "Commercial Shoots",
    description:
      "From TV commercials, print ads, to internal videos, we provide makeover services for all kinds of requirements. Professional makeup that looks flawless on camera.",
    link: "/services/party",
  },
]

export default function ServicesSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Services</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <div
              key={index}
              className="bg-card rounded-lg p-6 text-center hover-lift transition-all border border-border group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <service.icon className="w-8 h-8 text-accent" />
              </div>

              <h3 className="font-heading text-xl md:text-2xl text-foreground mb-4">{service.title}</h3>

              <p className="font-body text-muted-foreground mb-6 leading-relaxed">{service.description}</p>

              <Link
                href={service.link}
                className="font-body text-accent hover:text-accent/80 transition-colors underline underline-offset-4"
              >
                Learn More
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
