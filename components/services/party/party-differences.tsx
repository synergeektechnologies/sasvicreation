import { Sparkles, Clock, Camera, Palette } from "lucide-react"

const differences = [
  {
    icon: Sparkles,
    title: "Fun & Experimental",
    description:
      "Party makeup allows for more creativity, bold colors, and experimental looks that might be too dramatic for everyday wear.",
  },
  {
    icon: Camera,
    title: "Camera & Lighting Ready",
    description:
      "Designed to look stunning under party lighting and in photos, with techniques that enhance features in various lighting conditions.",
  },
  {
    icon: Clock,
    title: "Event Duration Focus",
    description:
      "Optimized for shorter events (4-8 hours) vs. bridal makeup that needs to last 12+ hours through multiple ceremonies.",
  },
  {
    icon: Palette,
    title: "Trendy & Fashion-Forward",
    description:
      "Incorporates latest makeup trends, seasonal colors, and fashion-forward techniques for a contemporary, stylish appearance.",
  },
]

export default function PartyDifferences() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Party vs. Bridal Makeup</h2>
          <p className="font-body text-muted-foreground text-lg">
            Understanding the key differences to choose the perfect look for your occasion
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {differences.map((diff, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-border hover-lift transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <diff.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-2">{diff.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{diff.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="bg-accent/5 rounded-2xl p-8 border border-accent/20">
          <div className="text-center">
            <h3 className="font-heading text-2xl text-foreground mb-4">Which One is Right for You?</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-8">
              <div className="text-left">
                <h4 className="font-heading text-lg text-accent mb-3">Choose Party Makeup For:</h4>
                <ul className="space-y-2 font-body text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Birthday parties, anniversaries, celebrations</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Corporate events, networking functions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Date nights, girls' night out</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Fashion shows, photo shoots</span>
                  </li>
                </ul>
              </div>

              <div className="text-left">
                <h4 className="font-heading text-lg text-accent mb-3">Choose Bridal Makeup For:</h4>
                <ul className="space-y-2 font-body text-muted-foreground">
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Wedding ceremonies, receptions</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Engagement ceremonies, pre-wedding events</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Traditional ceremonies requiring long wear</span>
                  </li>
                  <li className="flex items-start space-x-2">
                    <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                    <span>Formal occasions with extensive photography</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
