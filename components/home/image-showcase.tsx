"use client"

import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

const showcaseImages = [
  {
    src: "/images/image1.jpeg",
    alt: "Professional Makeup Artistry",
    title: "Bridal Elegance",
    description: "Timeless beauty that captures your special moment",
  },
  {
    src: "/images/image2.jpeg",
    alt: "Beautiful Makeup Creation",
    title: "Natural Glamour",
    description: "Enhancing your natural features with sophistication",
  },
  {
    src: "/images/image3.jpeg",
    alt: "Stunning Makeup Design",
    title: "Modern Style",
    description: "Contemporary looks that make you feel confident",
  },
  {
    src: "/images/image4.jpeg",
    alt: "Professional Beauty Look",
    title: "Classic Beauty",
    description: "Traditional elegance meets modern techniques",
  },
  {
    src: "/images/image5.jpeg",
    alt: "Artistic Makeup Creation",
    title: "Artistic Expression",
    description: "Creative artistry that tells your unique story",
  },
]

export default function ImageShowcase() {
  const [activeImage, setActiveImage] = useState(0)

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">
            Our Signature Creations
          </h2>
          <p className="font-body text-muted-foreground text-lg">
            Each look is carefully crafted to bring out your inner radiance
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Main Image Display */}
          <div className="relative">
            <div className="aspect-[4/5] rounded-2xl overflow-hidden bg-muted">
              <Image
                src={showcaseImages[activeImage].src}
                alt={showcaseImages[activeImage].alt}
                width={600}
                height={750}
                className="w-full h-full object-cover transition-all duration-500"
              />
            </div>
            
            {/* Decorative Elements */}
            <div className="absolute -top-4 -left-4 w-8 h-8 bg-accent/30 rounded-full"></div>
            <div className="absolute -bottom-4 -right-4 w-12 h-12 bg-secondary/30 rounded-full"></div>
          </div>

          {/* Content & Thumbnails */}
          <div className="space-y-8">
            {/* Active Image Info */}
            <div className="text-center lg:text-left">
              <h3 className="font-heading text-3xl text-foreground mb-4">
                {showcaseImages[activeImage].title}
              </h3>
              <p className="font-body text-muted-foreground text-lg leading-relaxed">
                {showcaseImages[activeImage].description}
              </p>
            </div>

            {/* Thumbnail Grid */}
            <div className="grid grid-cols-5 gap-3">
              {showcaseImages.map((image, index) => (
                <button
                  key={index}
                  onClick={() => setActiveImage(index)}
                  className={`aspect-square rounded-xl overflow-hidden transition-all duration-300 ${
                    activeImage === index
                      ? "ring-2 ring-accent ring-offset-2 ring-offset-background"
                      : "opacity-60 hover:opacity-100"
                  }`}
                >
                  <Image
                    src={image.src}
                    alt={image.alt}
                    width={80}
                    height={80}
                    className="w-full h-full object-cover"
                  />
                </button>
              ))}
            </div>

            {/* CTA */}
            <div className="text-center lg:text-left pt-4">
              <Button
                asChild
                size="lg"
                className="bg-accent hover:bg-accent/90 text-accent-foreground px-8"
              >
                <Link href="https://wa.me/917708032077?text=Hi%20Sasvi%20Creations!%20I'm%20interested%20in%20booking%20a%20makeup%20session.%20Could%20you%20please%20share%20more%20details%20about%20your%20services%20and%20availability?" target="_blank" rel="noopener noreferrer">
                  Book Your Session
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}