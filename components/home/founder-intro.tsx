import Image from "next/image"

export default function FounderIntro() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Meet Your Artist</h2>
            <div className="w-24 h-1 bg-accent mx-auto"></div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <h3 className="font-heading text-2xl md:text-3xl text-foreground mb-6">
                Professional Makeup Artist & Hairstylist
              </h3>

              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p>
                  I am one of the leading makeup artists & hairstylists in the city, with over 5+ years of experience
                  styling various models, actors & celebrities. Known for my friendly attitude and quality service that
                  stays current with the latest trends.
                </p>

                <p>
                  From bridal to commercial shoots, I provide personalized tips on grooming, outfits, and jewelry
                  selection. My philosophy centers on enhancing your natural features rather than masking them, helping
                  you feel confident and beautiful in your own skin.
                </p>

                <p>
                  I believe that makeup is not just about looking good – it's about feeling empowered and expressing
                  your unique personality. Every client receives a customized approach that celebrates their individual
                  beauty.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-4">
                <div className="bg-card px-4 py-2 rounded-full border border-border">
                  <span className="font-body text-sm text-foreground">5+ Years Experience</span>
                </div>
                <div className="bg-card px-4 py-2 rounded-full border border-border">
                  <span className="font-body text-sm text-foreground">Celebrity Stylist</span>
                </div>
                <div className="bg-card px-4 py-2 rounded-full border border-border">
                  <span className="font-body text-sm text-foreground">Trendy Styles</span>
                </div>
              </div>
            </div>

            <div className="order-1 lg:order-2">
              <div className="relative">
                <div className="aspect-square rounded-2xl overflow-hidden bg-muted">
                  <Image
                    src="/professional-makeup-artist-portrait-natural-lighti.jpg"
                    alt="Professional Makeup Artist Portrait"
                    width={500}
                    height={500}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent/20 rounded-full flex items-center justify-center">
                  <div className="w-12 h-12 bg-accent rounded-full flex items-center justify-center">
                    <span className="font-heading text-accent-foreground text-lg">SC</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
