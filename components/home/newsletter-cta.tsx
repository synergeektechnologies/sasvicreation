import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"

export default function NewsletterCTA() {
  return (
    <section className="py-20 bg-accent/5">
      <div className="container mx-auto px-4">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="font-heading text-3xl md:text-4xl text-foreground mb-4">Stay Updated on Beauty Trends</h2>
          <p className="font-body text-muted-foreground text-lg mb-8">
            Get the latest updates on new events, trends in makeover and hairstyling, and exclusive beauty tips
            delivered to your inbox.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <Input
              type="email"
              placeholder="Enter your email address"
              className="flex-1 bg-background border-border focus:border-accent"
            />
            <Button className="bg-accent hover:bg-accent/90 text-accent-foreground px-8">Subscribe for Trends</Button>
          </div>

          <p className="font-body text-sm text-muted-foreground mt-4">
            Join 500+ beauty enthusiasts who trust our expertise
          </p>
        </div>
      </div>
    </section>
  )
}
