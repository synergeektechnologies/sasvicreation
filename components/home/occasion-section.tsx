import Image from "next/image"

export default function OccasionSection() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-6 text-balance">
                Hair & Makeover For Every Occasion
              </h2>

              <div className="space-y-4 font-body text-muted-foreground leading-relaxed">
                <p className="text-lg">
                  With weddings being intimate celebrations, we understand the pressure of looking your absolute best.
                  Every moment is precious, and you deserve to feel radiant and confident.
                </p>

                <p>
                  I use only branded, certified products to ensure you look like a dream while maintaining the health
                  and integrity of your skin and hair. No compromises on quality – because you deserve nothing but the
                  best.
                </p>

                <p>
                  From traditional ceremonies to modern celebrations, each look is carefully crafted to match the
                  occasion while staying true to your personal style and preferences.
                </p>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-heading text-2xl text-accent mb-2">100+</h4>
                  <p className="font-body text-sm text-muted-foreground">Happy Brides</p>
                </div>
                <div className="text-center p-4 bg-card rounded-lg border border-border">
                  <h4 className="font-heading text-2xl text-accent mb-2">5+</h4>
                  <p className="font-body text-sm text-muted-foreground">Years Experience</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
                  <Image
                    src="/bridal-makeup-natural-elegant-wedding.jpg"
                    alt="Bridal Makeup Look"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
                  <Image
                    src="/party-makeup-glamorous-evening-look.jpg"
                    alt="Party Makeup Look"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
                  <Image
                    src="/traditional-indian-bridal-makeup-gold-jewelry.jpg"
                    alt="Traditional Bridal Look"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[3/4] rounded-lg overflow-hidden bg-muted">
                  <Image
                    src="/modern-bridal-hairstyle-makeup-natural.jpg"
                    alt="Modern Bridal Hairstyle"
                    width={300}
                    height={400}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
