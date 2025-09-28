import Image from "next/image"

const specializations = [
  {
    title: "Best Wedding Makeup Artist",
    description:
      "Specializing in simple, elegant looks that enhance your natural beauty. Our wedding makeup is designed to photograph beautifully and last throughout your entire celebration.",
    image: "/bridal-makeup-and-hairstyle-elegant-natural.jpg",
  },
  {
    title: "South Indian Bridal",
    description:
      "Traditional and affectionate styles that honor cultural heritage while incorporating modern techniques. Perfect for South Indian wedding ceremonies and rituals.",
    image: "/traditional-indian-bridal-makeup-gold-jewelry-red-.jpg",
  },
  {
    title: "Haldi/Sangeet/Reception",
    description:
      "Vibrant, camera-ready looks for pre-wedding and post-wedding celebrations. Each look is customized for the specific occasion and outfit coordination.",
    image: "/party-makeup-glamorous-evening-smokey-eyes.jpg",
  },
  {
    title: "Airbrush & Draping",
    description:
      "Flawless, long-lasting makeup using professional airbrush techniques. Includes expert saree and outfit draping to complete your perfect bridal look.",
    image: "/modern-bridal-hairstyle-updo-natural-makeup.jpg",
  },
]

export default function BridalSpecialized() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Specialized Services</h2>
          <p className="font-body text-muted-foreground text-lg">
            Expert techniques tailored for every type of bridal celebration
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="space-y-16">
          {specializations.map((service, index) => (
            <div
              key={index}
              className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
                index % 2 === 1 ? "lg:grid-flow-col-dense" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:col-start-2" : ""}>
                <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-4">{service.title}</h3>
                <p className="font-body text-muted-foreground leading-relaxed text-lg">{service.description}</p>

                <div className="mt-6 flex flex-wrap gap-2">
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-body">
                    Professional
                  </span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-body">
                    Long-lasting
                  </span>
                  <span className="bg-accent/10 text-accent px-3 py-1 rounded-full text-sm font-body">
                    Camera-ready
                  </span>
                </div>
              </div>

              <div className={index % 2 === 1 ? "lg:col-start-1" : ""}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src={service.image || "/placeholder.svg"}
                    alt={service.title}
                    width={600}
                    height={450}
                    className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-accent/5 rounded-2xl p-8">
          <div className="text-center">
            <h3 className="font-heading text-2xl text-foreground mb-4">Customized Charges</h3>
            <p className="font-body text-muted-foreground leading-relaxed max-w-2xl mx-auto">
              All our services are customized based on your specific requirements, venue, and celebration type. We
              believe in transparent pricing and will provide you with a detailed quote after understanding your needs.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
