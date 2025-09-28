export default function BridalCTA() {
  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Ready for Your Dream Bridal Look?</h2>
          <p className="font-body text-muted-foreground text-lg mb-8">
            Contact us to discuss your bridal makeover needs and get a personalized quote
          </p>

          <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="text-left">
                <h3 className="font-heading text-2xl text-foreground mb-4">Contact Information</h3>
                <div className="space-y-3">
                  <div>
                    <h4 className="font-body font-semibold text-foreground">Phone</h4>
                    <p className="font-body text-muted-foreground">+91-7708032077</p>
                  </div>
                  <div>
                    <h4 className="font-body font-semibold text-foreground">Address</h4>
                    <p className="font-body text-muted-foreground">
                      Kovaipudur, Coimbatore<br />
                      Tamil Nadu, India - 641010
                    </p>
                  </div>
                </div>
              </div>

              <div className="text-left">
                <h3 className="font-heading text-2xl text-foreground mb-4">What's Included</h3>
                <div className="space-y-2">
                  <p className="font-body text-muted-foreground">✓ Professional consultation</p>
                  <p className="font-body text-muted-foreground">✓ Customized bridal makeover</p>
                  <p className="font-body text-muted-foreground">✓ High-quality luxury products</p>
                  <p className="font-body text-muted-foreground">✓ Touch-up services</p>
                  <p className="font-body text-muted-foreground">✓ Professional photography ready</p>
                </div>
              </div>
            </div>

            <div className="mt-8 p-6 bg-accent/10 rounded-lg border border-accent/20">
              <p className="font-body text-foreground">
                <strong>Ready to book?</strong> Call or message us to discuss your bridal vision, preferred dates, and get a custom quote tailored to your needs.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
