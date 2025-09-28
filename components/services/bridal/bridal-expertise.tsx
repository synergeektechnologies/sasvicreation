import { Clock, MapPin, Palette, Star } from "lucide-react"

const expertisePoints = [
  {
    icon: Clock,
    title: "Experience",
    description: "5+ Years of Professional Experience",
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Quality Service & Customer Satisfaction",
  },
  {
    icon: Palette,
    title: "Products",
    description: "Kryolan, MAC, Forever, NARS",
  },
  {
    icon: MapPin,
    title: "Inclusives",
    description: "Hair Styling, Draping, Extensions, Accessories",
  },
]

export default function BridalExpertise() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Why Choose Us</h2>
          <p className="font-body text-muted-foreground text-lg">
            Professional expertise that makes your special day perfect
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {expertisePoints.map((point, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <point.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-2">{point.title}</h3>
              <p className="font-body text-muted-foreground">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-card rounded-2xl p-8 border border-border">
          <div className="text-center">
            <h3 className="font-heading text-2xl text-foreground mb-4">Our Commitment to You</h3>
            <p className="font-body text-muted-foreground leading-relaxed max-w-3xl mx-auto">
              We understand that your wedding day is one of the most important days of your life. That's why we use only
              the finest luxury products and techniques to ensure you look and feel absolutely radiant. Our personalized
              approach means every bride receives a unique look that enhances her natural beauty and reflects her
              personal style.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
