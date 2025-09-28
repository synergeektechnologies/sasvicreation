export default function PartyIntro() {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center space-y-8">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground">
            The Best Party Makeup Artist in Your City
          </h2>

          <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
            <p className="text-lg">
              Classical and trendy makeup for all your special occasions. Whether it's a birthday celebration,
              anniversary party, corporate event, or night out with friends, we create looks that make you shine.
            </p>

            <p>
              Professional flawless beauty that suits you best. Our party makeup services are designed to enhance your
              natural features while giving you that extra glamour and confidence for any celebration.
            </p>

            <p>
              We test your skin type and cover imperfections using international treatments and premium products. Every
              look is customized to match your outfit, the occasion, and your personal style preferences.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-heading text-xl text-foreground mb-3">Versatile Looks</h3>
              <p className="font-body text-muted-foreground text-sm">
                From subtle elegance to bold glamour, we create the perfect look for every type of party
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-heading text-xl text-foreground mb-3">Premium Products</h3>
              <p className="font-body text-muted-foreground text-sm">
                Using only international brands and high-quality cosmetics for long-lasting, flawless results
              </p>
            </div>

            <div className="bg-card rounded-lg p-6 border border-border">
              <h3 className="font-heading text-xl text-foreground mb-3">Expert Techniques</h3>
              <p className="font-body text-muted-foreground text-sm">
                Professional application techniques that ensure your makeup looks perfect in photos and in person
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
