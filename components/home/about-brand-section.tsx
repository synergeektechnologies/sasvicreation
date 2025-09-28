import Image from "next/image"

export default function AboutBrandSection() {
  return (
    <section className="py-20 bg-muted/30 relative">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 opacity-5">
        <Image
          src="/images/background image.jpeg"
          alt="Background"
          fill
          className="object-cover"
        />
      </div>
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-8">About Sasvi Creations</h2>

          <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
            <p className="text-lg">
              <span className="font-accent text-accent text-xl">"Sasvi"</span> is inspired by nature and vitality,
              meaning pride and lively spirit. Our name reflects our core philosophy of celebrating the natural beauty
              that exists within every individual.
            </p>

            <p>
              Our aim is simple yet profound: to enhance our clients' natural features while boosting their confidence
              and inner radiance. We believe that true beauty comes from feeling comfortable and confident in your own
              skin.
            </p>

            <p>
              At Sasvi Creations, we don't just apply makeup – we create transformative experiences that help you
              discover and embrace your most beautiful self. Every service is personalized, every look is crafted with
              care, and every client leaves feeling empowered.
            </p>
          </div>

          <div className="mt-12 p-8 bg-card rounded-2xl border border-border">
            <blockquote className="font-accent text-2xl md:text-3xl text-accent italic text-balance">
              "Beauty is confidence amplified, and confidence is beauty revealed."
            </blockquote>
            <p className="font-body text-muted-foreground mt-4">— Sasvi Creations Philosophy</p>
          </div>
        </div>
      </div>
    </section>
  )
}
