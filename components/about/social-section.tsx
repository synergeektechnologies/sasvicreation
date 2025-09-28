import { Instagram } from "lucide-react"

export default function SocialSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Connect on Social Media</h2>
          <p className="font-body text-muted-foreground text-lg">
            Follow our journey and get inspired by our latest work and beauty tips
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="max-w-2xl mx-auto">
          <div className="grid grid-cols-1 gap-8 mb-12">
            <div className="bg-card rounded-xl p-8 border border-border text-center hover-lift transition-all">
              <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <Instagram className="w-10 h-10 text-accent" />
              </div>
              <h3 className="font-heading text-2xl text-foreground mb-3">Instagram</h3>
              <p className="font-body text-muted-foreground mb-6">
                Follow us for daily inspiration, behind-the-scenes content, client transformations, and beauty tips
              </p>
              <a
                href="#"
                className="font-body text-accent hover:text-accent/80 transition-colors underline underline-offset-4 text-lg"
              >
                @sasvicreations
              </a>
            </div>
          </div>

          <div className="bg-accent/5 rounded-2xl p-8 border border-accent/20 text-center">
            <h3 className="font-heading text-2xl text-foreground mb-4">Stay Connected</h3>
            <p className="font-body text-muted-foreground mb-6 leading-relaxed">
              Join our social media community to stay updated on the latest beauty trends, get exclusive tips, and see
              our amazing client transformations. We love sharing the journey of making every client feel beautiful and
              confident.
            </p>

            <div className="flex justify-center">
              <a
                href="#"
                className="w-12 h-12 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
                aria-label="Instagram"
              >
                <Instagram className="w-6 h-6 text-accent-foreground" />
              </a>
            </div>

            <p className="font-body text-muted-foreground text-sm mt-6">
              Best services for bridal makeovers and professional shoots - Follow us for daily inspiration!
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
