import { Calendar, Heart, Sparkles, Star } from "lucide-react"

const timelineEvents = [
  {
    year: "Childhood",
    icon: Heart,
    title: "Early Passion",
    description:
      "Interested in beauty and makeup since childhood, always fascinated by the transformative power of cosmetics and the confidence it brings to people.",
  },
  {
    year: "2016",
    icon: Sparkles,
    title: "Career Transition",
    description:
      "After completing Engineering/MBA, made the bold decision to quit the corporate job and pursue passion for makeup artistry, starting with friends and family.",
  },
  {
    year: "2018-2020",
    icon: Calendar,
    title: "Professional Growth",
    description:
      "Built a strong client base through word-of-mouth recommendations, continuously learning new techniques and staying updated with latest trends in the beauty industry.",
  },
  {
    year: "Present",
    icon: Star,
    title: "Established Artist",
    description:
      "Now recognized as one of the leading makeup artists in the city with 5+ years of experience, excellence in bridal makeovers, and trusted by celebrities.",
  },
]

export default function PersonalStory() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">My Journey</h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            From a childhood passion to a professional calling - the story of how Sasvi Creations came to life
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            {/* Timeline Line */}
            <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-accent/30 transform md:-translate-x-1/2"></div>

            <div className="space-y-12">
              {timelineEvents.map((event, index) => (
                <div
                  key={index}
                  className={`relative flex items-center ${index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"}`}
                >
                  {/* Timeline Dot */}
                  <div className="absolute left-8 md:left-1/2 w-4 h-4 bg-accent rounded-full transform md:-translate-x-1/2 z-10">
                    <div className="absolute inset-1 bg-background rounded-full"></div>
                  </div>

                  {/* Content */}
                  <div
                    className={`ml-20 md:ml-0 md:w-1/2 ${
                      index % 2 === 0 ? "md:pr-12" : "md:pl-12"
                    } ${index % 2 === 1 ? "md:text-right" : ""}`}
                  >
                    <div className="bg-card rounded-xl p-6 border border-border hover-lift transition-all">
                      <div
                        className={`flex items-center space-x-3 mb-4 ${
                          index % 2 === 1 ? "md:flex-row-reverse md:space-x-reverse" : ""
                        }`}
                      >
                        <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                          <event.icon className="w-5 h-5 text-accent" />
                        </div>
                        <div>
                          <span className="font-body text-accent text-sm font-medium">{event.year}</span>
                          <h3 className="font-heading text-xl text-foreground">{event.title}</h3>
                        </div>
                      </div>
                      <p className="font-body text-muted-foreground leading-relaxed">{event.description}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
