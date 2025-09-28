import { Clock, MapPin, Phone } from "lucide-react"

export function ContactDetails() {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Get in Touch</h2>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Contact Information */}
            <div className="space-y-8">
              {/* Phone/WhatsApp */}
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-full flex-shrink-0">
                  <Phone className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-2">Phone/WhatsApp</h3>
                  <p className="text-muted-foreground text-lg">+91-7708032077</p>
                </div>
              </div>

              {/* Studio Address */}
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-full flex-shrink-0">
                  <MapPin className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-2">Studio Address</h3>
                  <p className="text-muted-foreground text-lg">Kovaipudur, Coimbatore, Tamil Nadu, India - 641010</p>
                </div>
              </div>

              {/* Hours */}
              <div className="flex items-start gap-4">
                <div className="bg-accent/20 p-3 rounded-full flex-shrink-0">
                  <Clock className="w-6 h-6 text-accent" />
                </div>
                <div>
                  <h3 className="font-heading text-xl text-foreground mb-2">Hours</h3>
                  <p className="text-muted-foreground text-lg">Mon-Sat, 9AM-7PM IST</p>
                </div>
              </div>
            </div>

            {/* Map */}
            <div className="bg-muted rounded-2xl overflow-hidden">
              <div className="aspect-[4/3] bg-gradient-to-br from-accent/10 to-secondary/20 flex items-center justify-center">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3915.7234567890!2d77.0234567890!3d11.0234567890!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2sCoimbatore%2C%20Tamil%20Nadu!5e0!3m2!1sen!2sin!4v1234567890"
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="w-full h-full"
                ></iframe>
              </div>
              <div className="p-6 bg-card">
                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-heading text-lg text-foreground">Kovaipudur, Coimbatore, Tamil Nadu, India - 641010</h4>
                    <p className="text-muted-foreground">Kovaipudur, Coimbatore, Tamil Nadu</p>
                  </div>
                  <a
                    href="https://maps.google.com/?q=Kovaipudur,Coimbatore,Tamil+Nadu+641010"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-accent hover:text-accent/80 font-medium"
                  >
                    Directions
                  </a>
                </div>
                <button className="mt-4 text-accent hover:text-accent/80 font-medium">
                  View larger map
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}