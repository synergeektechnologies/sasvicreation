"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, ChevronUp, Crown, Heart, Star, Users } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const packages = [
  {
    icon: Crown,
    title: "Bridal Makeover",
    price: "Starting from INR 30,000/-",
    description: "Natural and elegant for Wedding, Reception, etc.",
    inclusions: [
      "HD/Airbrush makeup and hairstyle by professional artist",
      "Outfit styling and draping assistance",
      "Luxury cosmetics from international brands",
      "Hair accessories and styling tools",
      "Eyelashes & contact lenses included",
      "Touch-up kit for the day",
      "Pre-wedding consultation",
    ],
    popular: true,
  },
  {
    icon: Heart,
    title: "Haldi/Mehendi Makeover",
    price: "Starting from INR 15,000/-",
    description: "Camera-ready for pre-wedding rituals.",
    inclusions: [
      "HD makeup and hairstyle",
      "Styling and draping for traditional outfits",
      "International brand cosmetics",
      "Traditional accessories coordination",
      "Eyelashes & lenses",
      "Waterproof makeup for ceremonies",
    ],
  },
  {
    icon: Users,
    title: "Bridesmaid Makeover",
    price: "INR 5,500/- to 10,500/-",
    description: "Best looks for family celebrations.",
    inclusions: [
      "HD/Soft Glam makeup application",
      "Styling and outfit coordination",
      "International/drugstore brand cosmetics",
      "Hair accessories included",
      "Eyelashes & lenses",
      "Group coordination for consistent looks",
    ],
  },
  {
    icon: Star,
    title: "Groom Makeover",
    price: "Starting from INR 5,500/-",
    description: "Perfect subtle looks for D-Day.",
    inclusions: [
      "Professional beard grooming and styling",
      "Matte finish makeup for photography",
      "Hair styling and grooming",
      "Subtle enhancement techniques",
      "Long-lasting products",
    ],
  },
]

export default function BridalPackages() {
  const [expandedPackage, setExpandedPackage] = useState<number | null>(0)

  const togglePackage = (index: number) => {
    setExpandedPackage(expandedPackage === index ? null : index)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Choose Your Package</h2>
          <p className="font-body text-muted-foreground text-lg max-w-2xl mx-auto">
            Customized bridal makeup packages designed to make your special day unforgettable
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto space-y-6">
          {packages.map((pkg, index) => (
            <div
              key={index}
              className={`bg-card rounded-xl border transition-all ${
                pkg.popular ? "border-accent shadow-lg" : "border-border"
              } ${expandedPackage === index ? "shadow-xl" : "hover:shadow-lg"}`}
            >
              {pkg.popular && (
                <div className="bg-accent text-accent-foreground text-center py-2 rounded-t-xl">
                  <span className="font-body text-sm font-medium">Most Popular</span>
                </div>
              )}

              <div className="p-6">
                <div className="flex items-center justify-between cursor-pointer" onClick={() => togglePackage(index)}>
                  <div className="flex items-center space-x-4">
                    <div className="w-12 h-12 bg-accent/10 rounded-full flex items-center justify-center">
                      <pkg.icon className="w-6 h-6 text-accent" />
                    </div>
                    <div>
                      <h3 className="font-heading text-xl md:text-2xl text-foreground">{pkg.title}</h3>
                      <p className="font-body text-muted-foreground">{pkg.description}</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-4">
                    <div className="text-right">
                      <p className="font-heading text-lg md:text-xl text-accent">{pkg.price}</p>
                    </div>
                    {expandedPackage === index ? (
                      <ChevronUp className="w-5 h-5 text-muted-foreground" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-muted-foreground" />
                    )}
                  </div>
                </div>

                {expandedPackage === index && (
                  <div className="mt-6 pt-6 border-t border-border">
                    <h4 className="font-body font-medium text-foreground mb-4">Package Inclusions:</h4>
                    <ul className="space-y-2 mb-6">
                      {pkg.inclusions.map((inclusion, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="font-body text-muted-foreground">{inclusion}</span>
                        </li>
                      ))}
                    </ul>

                    <Button asChild className="bg-accent hover:bg-accent/90 text-accent-foreground">
                      <Link href="https://wa.me/917708032077?text=Hi%20Sasvi%20Creations!%20I'm%20interested%20in%20booking%20a%20bridal%20package.%20Could%20you%20please%20share%20more%20details%20about%20the%20packages%20and%20pricing?" target="_blank" rel="noopener noreferrer">
                        Book This Package
                      </Link>
                    </Button>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-muted-foreground mb-4">
            All packages can be customized based on your specific requirements
          </p>
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            <Link href="https://wa.me/917708032077?text=Hi%20Sasvi%20Creations!%20I'm%20interested%20in%20a%20custom%20bridal%20makeup%20quote.%20Could%20you%20please%20help%20me%20with%20customized%20pricing%20based%20on%20my%20requirements?" target="_blank" rel="noopener noreferrer">
              Get Custom Quote
            </Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
