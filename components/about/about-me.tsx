import Image from "next/image"

export default function AboutMe() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">About Me</h2>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  I am one of the leading makeup artists & hairstylists in the city, with over 5+ years of experience
                  styling various models, actors & celebrities. My journey in the beauty industry has been driven by a
                  genuine passion for helping people feel their most confident and beautiful selves.
                </p>

                <p>
                  Known for my friendly attitude and quality service that stays current with the latest trends, I
                  believe that makeup is not just about changing how you look – it's about enhancing who you already
                  are. From bridal transformations to commercial shoots, I provide personalized tips on grooming,
                  outfits, and jewelry selection.
                </p>

                <p>
                  My philosophy centers on enhancing your natural features rather than masking them. I work closely with
                  each client to understand their unique style, preferences, and the occasion, ensuring that every look
                  is perfectly tailored to bring out their individual beauty and personality.
                </p>

                <p>
                  What sets me apart is my commitment to using only the finest products from luxury brands like Kryolan,
                  MAC, Forever, and NARS, combined with techniques that I've perfected over years of
                  experience. Every client receives not just a makeup application, but a complete beauty experience that
                  leaves them feeling empowered and radiant.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-heading text-2xl text-accent mb-1">5+</h4>
                  <p className="font-body text-xs text-muted-foreground">Years Experience</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-heading text-2xl text-accent mb-1">100+</h4>
                  <p className="font-body text-xs text-muted-foreground">Happy Clients</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-heading text-2xl text-accent mb-1">50+</h4>
                  <p className="font-body text-xs text-muted-foreground">Weddings</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-heading text-2xl text-accent mb-1">25+</h4>
                  <p className="font-body text-xs text-muted-foreground">Events</p>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-[3/4] rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src="/images/image1.jpeg"
                    alt="Professional Makeup Artist at Work"
                    width={500}
                    height={667}
                    className="w-full h-full object-cover"
                  />
                </div>

                {/* Decorative Elements */}
                <div className="absolute -top-4 -right-4 w-20 h-20 bg-accent/20 rounded-full"></div>
                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-secondary/20 rounded-full"></div>

                {/* Quote Overlay */}
                <div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm rounded-lg p-4">
                  <blockquote className="font-accent text-foreground text-sm italic text-center">
                    "Every face tells a story, and makeup is the art of helping that story shine."
                  </blockquote>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
