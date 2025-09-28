import { Clock, Palette, Star } from "lucide-react"

const highlights = [
  {
    icon: Clock,
    title: "Experience",
    description: "5+ Years Experience",
  },
  {
    icon: Palette,
    title: "Inclusive Prices",
    description: "Hair Styling, Draping, Makeover, Extensions, False Lashes",
  },
  {
    icon: Star,
    title: "Products Used",
    description: "All Luxury Products like Kryolan, MAC, Forever, NARS, etc.",
  },
]

export default function HappyClientsSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Happy Clients</h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            What makes our clients choose us again and again? Here's what sets us apart in the beauty industry.
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {highlights.map((highlight, index) => (
            <div
              key={index}
              className="bg-card rounded-xl p-6 text-center hover-lift transition-all border border-border group"
            >
              <div className="w-16 h-16 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <highlight.icon className="w-8 h-8 text-accent" />
              </div>

              <h3 className="font-heading text-xl text-foreground mb-3">{highlight.title}</h3>

              <p className="font-body text-muted-foreground leading-relaxed">{highlight.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <div className="inline-flex items-center space-x-2 bg-accent/10 px-6 py-3 rounded-full">
            <Star className="w-5 h-5 text-accent fill-current" />
            <span className="font-body text-foreground">Trusted by 100+ Happy Clients</span>
            <Star className="w-5 h-5 text-accent fill-current" />
          </div>
        </div>
      </div>
    </section>
  )
}
