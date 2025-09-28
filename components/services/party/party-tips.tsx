import { Calendar, Palette, Sparkles, Clock } from "lucide-react"

const tips = [
  {
    icon: Calendar,
    title: "Book Early",
    description:
      "Schedule your appointment at least 1-2 weeks in advance, especially for weekend parties and special occasions.",
  },
  {
    icon: Palette,
    title: "Match to Occasion",
    description:
      "Consider the event type, time of day, venue, and your outfit when choosing your makeup style and intensity.",
  },
  {
    icon: Sparkles,
    title: "Skin Prep Advice",
    description:
      "Start your skincare routine 2-3 days before the event. Stay hydrated and avoid trying new products close to the date.",
  },
  {
    icon: Clock,
    title: "Timing is Key",
    description:
      "Allow 1.5-2 hours for complete party makeup and hairstyling. Plan your schedule accordingly for a stress-free experience.",
  },
]

export default function PartyTips() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Party Makeup Tips</h2>
          <p className="font-body text-muted-foreground text-lg">
            Expert advice to ensure your party look is absolutely perfect
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {tips.map((tip, index) => (
            <div key={index} className="bg-card rounded-xl p-6 border border-border hover-lift transition-all">
              <div className="flex items-start space-x-4">
                <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center flex-shrink-0">
                  <tip.icon className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-2">{tip.title}</h3>
                  <p className="font-body text-muted-foreground leading-relaxed">{tip.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-12 bg-accent/5 rounded-2xl p-8 border border-accent/20">
          <div className="text-center">
            <h3 className="font-heading text-2xl text-foreground mb-4">Additional Recommendations</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
              <div>
                <h4 className="font-body font-medium text-foreground mb-2">Before the Event</h4>
                <ul className="space-y-1 font-body text-muted-foreground text-sm">
                  <li>• Get a good night's sleep</li>
                  <li>• Eat a light meal beforehand</li>
                  <li>• Bring reference photos</li>
                  <li>• Wear a button-up shirt</li>
                </ul>
              </div>

              <div>
                <h4 className="font-body font-medium text-foreground mb-2">During Application</h4>
                <ul className="space-y-1 font-body text-muted-foreground text-sm">
                  <li>• Communicate your preferences</li>
                  <li>• Ask questions about products</li>
                  <li>• Take progress photos</li>
                  <li>• Relax and enjoy the process</li>
                </ul>
              </div>

              <div>
                <h4 className="font-body font-medium text-foreground mb-2">After the Event</h4>
                <ul className="space-y-1 font-body text-muted-foreground text-sm">
                  <li>• Remove makeup gently</li>
                  <li>• Use a good cleanser</li>
                  <li>• Moisturize your skin</li>
                  <li>• Share your experience</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
