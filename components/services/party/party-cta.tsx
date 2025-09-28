export default function PartyCTA() {
  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Information */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-heading text-2xl text-foreground mb-6">Get In Touch</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-body font-medium text-foreground mb-2">Phone</h4>
                  <p className="font-body text-muted-foreground">+91-7708032077</p>
                </div>

                <div>
                  <h4 className="font-body font-medium text-foreground mb-2">Address</h4>
                  <p className="font-body text-muted-foreground">
                    Kovaipudur, Coimbatore
                    <br />
                    Tamil Nadu, India - 641010
                  </p>
                </div>

                <div>
                  <h4 className="font-body font-medium text-foreground mb-2">Working Hours</h4>
                  <p className="font-body text-muted-foreground">Monday - Sunday: 9:00 AM - 8:00 PM</p>
                </div>
              </div>

              <div className="mt-8 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className="font-body text-foreground text-sm">
                  <strong>Quick Tip:</strong> Book your party makeup at least 1-2 weeks in advance to secure your
                  preferred time slot, especially for weekend events.
                </p>
              </div>
            </div>

            {/* Service Information */}
            <div className="bg-card rounded-2xl p-8 border border-border">
              <h3 className="font-heading text-2xl text-foreground mb-6">Party Makeup Services</h3>

              <div className="space-y-4">
                <div>
                  <h4 className="font-body font-semibold text-foreground mb-2">Occasions We Cover</h4>
                  <ul className="font-body text-muted-foreground space-y-1">
                    <li>• Birthday Parties</li>
                    <li>• Anniversary Celebrations</li>
                    <li>• Corporate Events</li>
                    <li>• Date Nights</li>
                    <li>• Wedding Guest Looks</li>
                    <li>• Photo Shoots</li>
                  </ul>
                </div>

                <div>
                  <h4 className="font-body font-semibold text-foreground mb-2">What's Included</h4>
                  <ul className="font-body text-muted-foreground space-y-1">
                    <li>• Professional consultation</li>
                    <li>• Customized party look</li>
                    <li>• High-quality products</li>
                    <li>• Long-lasting finish</li>
                    <li>• Camera-ready styling</li>
                  </ul>
                </div>
              </div>

              <div className="mt-6 p-4 bg-accent/10 rounded-lg border border-accent/20">
                <p className="font-body text-foreground font-semibold text-center">
                  Call or message us to discuss your party vision and book your appointment!
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
