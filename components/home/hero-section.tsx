import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

export default function HeroSection() {
  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/hero.png"
          alt="Hero Background"
          fill
          className="object-cover"
          priority
        />
      </div>



      <div className="container mx-auto px-4 text-center relative z-10">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Main Heading */}
          <h1 className="font-heading text-4xl md:text-6xl lg:text-7xl text-white text-shadow leading-tight">
            We Help Enhance Your <span className="text-accent font-accent text-balance">Real Beauty</span>
          </h1>

          {/* Subheading */}
          <h2 className="font-body text-xl md:text-2xl text-white text-balance">
            Best Bridal Makeup Artist in Your City
          </h2>

          {/* Tagline */}
          <p className="font-body text-lg md:text-xl text-white text-balance">
            Professional Makeup Artist - Enhancing Natural Beauty with Confidence
          </p>

          {/* CTA Button */}
          <div className="pt-8">
            <Button
              asChild
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-4 text-lg font-body hover-scale transition-all"
            >
              <Link href="https://wa.me/917708032077?text=Hi%20Sasvi%20Creations!%20I'm%20interested%20in%20booking%20a%20makeup%20appointment.%20Could%20you%20please%20share%20more%20details%20about%20your%20services%20and%20availability?" target="_blank" rel="noopener noreferrer">Book Now</Link>
            </Button>
          </div>

          {/* Decorative Elements */}
          <div className="flex justify-center items-center space-x-4 pt-12">
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse"></div>
            <div className="w-16 h-px bg-accent/50"></div>
            <div className="w-4 h-4 bg-secondary rounded-full animate-pulse delay-300"></div>
            <div className="w-16 h-px bg-accent/50"></div>
            <div className="w-3 h-3 bg-accent rounded-full animate-pulse delay-700"></div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-accent/70 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-accent/70 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}
