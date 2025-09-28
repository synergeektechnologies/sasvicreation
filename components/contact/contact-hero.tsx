export function ContactHero() {
  return (
    <section className="relative py-32 md:py-40 bg-gradient-to-br from-background via-muted/20 to-accent/5">
      <div className="container mx-auto px-6 md:px-8">
        <div className="max-w-5xl mx-auto text-center">
          {/* Main Heading */}
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-foreground mb-2 leading-tight">
            Let's Pleat Something
          </h1>
          <h1 className="font-heading text-5xl md:text-6xl lg:text-7xl text-accent mb-8 leading-tight">
            Stunning Together
          </h1>
          
          {/* Subtitle */}
          <p className="text-xl md:text-2xl text-muted-foreground mb-12 leading-relaxed max-w-2xl mx-auto">
            Ping us—we reply in 2 hours, promise!
          </p>
        </div>
      </div>
    </section>
  )
}
