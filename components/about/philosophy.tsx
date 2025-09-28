import { Eye, Heart, Star, Sparkles } from "lucide-react"

const philosophyPoints = [
  {
    icon: Eye,
    title: "Vision",
    description:
      "To be the preferred choice for quality beauty services, setting new standards in the makeup industry.",
  },
  {
    icon: Heart,
    title: "Mission",
    description:
      "Committed to providing personalized service that enhances natural beauty and boosts confidence for every client.",
  },
  {
    icon: Star,
    title: "Values",
    description:
      "Quality products, customer-centricity, and creating a comfortable experience that makes every client feel special.",
  },
  {
    icon: Sparkles,
    title: "Approach",
    description:
      "Enhancing natural features rather than masking them, celebrating individual beauty and personal style.",
  },
]

export default function Philosophy() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">My Philosophy</h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            The core beliefs and values that guide every service and interaction at Sasvi Creations
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {philosophyPoints.map((point, index) => (
            <div key={index} className="text-center group">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
                <point.icon className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-heading text-xl text-foreground mb-3">{point.title}</h3>
              <p className="font-body text-muted-foreground leading-relaxed">{point.description}</p>
            </div>
          ))}
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-card rounded-2xl p-8 md:p-12 border border-border text-center">
            <blockquote className="font-accent text-2xl md:text-3xl text-accent italic mb-6 text-balance">
              "Beauty is confidence amplified, and confidence is beauty revealed."
            </blockquote>
            <p className="font-body text-muted-foreground mb-8 leading-relaxed">
              This philosophy drives everything I do at Sasvi Creations. I believe that true beauty comes from within,
              and my role is to help that inner radiance shine through. Every technique I use, every product I choose,
              and every interaction I have with clients is guided by this fundamental belief.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-heading text-lg text-foreground mb-2">Quality First</h4>
                <p className="font-body text-muted-foreground text-sm">
                  Using only premium, certified products that are safe for all skin types and deliver exceptional
                  results.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-lg text-foreground mb-2">Personal Touch</h4>
                <p className="font-body text-muted-foreground text-sm">
                  Every service is customized to the individual, taking into account personal style, skin tone, and
                  occasion.
                </p>
              </div>
              <div>
                <h4 className="font-heading text-lg text-foreground mb-2">Lasting Impact</h4>
                <p className="font-body text-muted-foreground text-sm">
                  Creating not just beautiful looks, but memorable experiences that boost confidence and self-esteem.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
