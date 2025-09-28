import { Button } from "@/components/ui/button"
import Image from "next/image"
import Link from "next/link"

const portfolioImages = [
  {
    src: "/images/image1.jpeg",
    alt: "Professional Makeup Artistry",
    caption: "Elegant Bridal Look",
  },
  {
    src: "/images/image2.jpeg",
    alt: "Beautiful Makeup Creation",
    caption: "Glamorous Party Makeup",
  },
  {
    src: "/images/image3.jpeg",
    alt: "Stunning Makeup Design",
    caption: "Traditional Bridal Style",
  },
  {
    src: "/images/image4.jpeg",
    alt: "Professional Beauty Look",
    caption: "Modern Bridal Hairstyle",
  },
  {
    src: "/images/image5.jpeg",
    alt: "Artistic Makeup Creation",
    caption: "Bridesmaid Coordination",
  },
  {
    src: "/commercial-shoot-makeup-professional-camera-ready.jpg",
    alt: "Commercial Shoot Makeup",
    caption: "Commercial Shoot Ready",
  },
]

export default function LatestWorkSection() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Latest Work</h2>
          <p className="font-body text-xl text-muted-foreground mb-6">Explore More Of Our Latest Work</p>
          <div className="w-24 h-1 bg-accent mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-muted hover-lift transition-all cursor-pointer"
            >
              <div className="aspect-[3/4]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={300}
                  height={400}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <h3 className="font-body text-white text-lg font-medium">{image.caption}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center">
          <Button
            asChild
            variant="outline"
            size="lg"
            className="border-accent text-accent hover:bg-accent hover:text-accent-foreground bg-transparent"
          >
            <Link href="/services/bridal">View All Work</Link>
          </Button>
        </div>
      </div>
    </section>
  )
}
