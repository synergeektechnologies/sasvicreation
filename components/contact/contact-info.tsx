import { Clock, Instagram, MapPin, Phone } from "lucide-react"

export function ContactInfo() {
  return (
    <section className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">Get In Touch</h2>
            <p className="text-lg text-muted-foreground">Multiple ways to reach us for your convenience</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* Contact Details */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-sage/10 p-3 rounded-lg">
                  <Phone className="w-6 h-6 text-sage" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Phone</h3>
                  <p className="text-muted-foreground">+91-7708032077</p>
                  <p className="text-sm text-muted-foreground">Available 9 AM - 8 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="bg-sage/10 p-3 rounded-lg">
                  <MapPin className="w-6 h-6 text-sage" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">Location</h3>
                  <p className="text-muted-foreground">Kovaipudur, Coimbatore, Tamil Nadu, India - 641010</p>
                  <p className="text-sm text-muted-foreground">Home studio & on-location</p>
                </div>
              </div>
            </div>

            {/* Business Hours */}
            <div className="space-y-6">
              <div className="flex items-start gap-4">
                <div className="bg-ochre/10 p-3 rounded-lg">
                  <Clock className="w-6 h-6 text-ochre" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-3">Business Hours</h3>
                  <div className="space-y-2 text-sm">
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Monday - Friday</span>
                      <span className="text-foreground">9:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Saturday</span>
                      <span className="text-foreground">8:00 AM - 10:00 PM</span>
                    </div>
                    <div className="flex justify-between">
                      <span className="text-muted-foreground">Sunday</span>
                      <span className="text-foreground">10:00 AM - 6:00 PM</span>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-sage/5 p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Emergency Bookings</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  Last-minute bookings available with additional charges
                </p>
                <a href="tel:+917708032077" className="text-sage font-medium text-sm hover:underline">
                  Call for urgent requests
                </a>
              </div>
            </div>

            {/* Social Media */}
            <div className="space-y-6">
              <div>
                <h3 className="font-semibold text-foreground mb-4">Follow Our Work</h3>
                <div className="space-y-4">
                  <a
                    href="https://instagram.com/sasvicreations"
                    className="flex items-center gap-3 p-3 rounded-lg border hover:bg-sage/5 transition-colors"
                  >
                    <Instagram className="w-5 h-5 text-sage" />
                    <div>
                      <p className="font-medium text-foreground">@sasvicreations</p>
                      <p className="text-sm text-muted-foreground">Latest looks & behind-the-scenes</p>
                    </div>
                  </a>
                </div>
              </div>

              <div className="bg-ochre/5 p-6 rounded-lg">
                <h4 className="font-semibold text-foreground mb-2">Quick Response</h4>
                <p className="text-sm text-muted-foreground mb-3">
                  For fastest response, message us on Instagram or WhatsApp
                </p>
                <a href="https://wa.me/917708032077" className="text-ochre font-medium text-sm hover:underline">
                  WhatsApp: +91-7708032077
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
