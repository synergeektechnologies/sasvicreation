"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useEffect, useState } from "react"

const heroImages = [
  {
    src: "/images/image1.jpeg",
    alt: "Professional Bridal Makeup",
  },
  {
    src: "/images/image2.jpeg",
    alt: "Elegant Bridal Creation",
  },
  {
    src: "/images/image3.jpeg",
    alt: "Beautiful Bridal Style",
  },
  {
    src: "/images/image4.jpeg",
    alt: "Natural Elegant Bridal Makeup",
  },
]

export default function BridalHero() {
  const [currentImage, setCurrentImage] = useState(0)

  const nextImage = () => {
    setCurrentImage((prev) => (prev + 1) % heroImages.length)
  }

  const prevImage = () => {
    setCurrentImage((prev) => (prev - 1 + heroImages.length) % heroImages.length)
  }

  useEffect(() => {
    const interval = setInterval(nextImage, 4000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background Image Carousel */}
      <div className="absolute inset-0">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentImage ? "opacity-100" : "opacity-0"
            }`}
          >
            <Image
              src={image.src || "/placeholder.svg"}
              alt={image.alt}
              fill
              className="object-cover"
              priority={index === 0}
            />
          </div>
        ))}
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="font-heading text-4xl md:text-6xl mb-4 text-shadow">
            Bridal Makeover Packages | Bridal Makeup Artists in Your City
          </h1>
          <p className="font-body text-xl md:text-2xl mb-8 text-shadow">
            Luxury Professional Bridal Makeup for Destination Weddings
          </p>
          <Button asChild size="lg" className="bg-accent hover:bg-accent/90 text-accent-foreground px-8 py-4 text-lg">
            <Link href="https://wa.me/917708032077?text=Hi%20Sasvi%20Creations!%20I'm%20interested%20in%20your%20bridal%20makeup%20packages.%20Could%20you%20please%20share%20the%20package%20details%20and%20pricing?" target="_blank" rel="noopener noreferrer">
              View Packages
            </Link>
          </Button>
        </div>
      </div>

      {/* Navigation Arrows */}
      <Button
        variant="outline"
        size="icon"
        onClick={prevImage}
        className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
      >
        <ChevronLeft className="w-5 h-5" />
      </Button>

      <Button
        variant="outline"
        size="icon"
        onClick={nextImage}
        className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/20 border-white/30 text-white hover:bg-white/30"
      >
        <ChevronRight className="w-5 h-5" />
      </Button>

      {/* Dots Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {heroImages.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentImage(index)}
            className={`w-3 h-3 rounded-full transition-colors ${index === currentImage ? "bg-white" : "bg-white/50"}`}
          />
        ))}
      </div>
    </section>
  )
}
