import Image from "next/image"

const portfolioImages = [
  {
    src: "/images/image1.jpeg",
    alt: "Professional Bridal Makeup",
    category: "Bridal",
  },
  {
    src: "/images/image2.jpeg",
    alt: "Elegant Bridal Creation",
    category: "Traditional",
  },
  {
    src: "/images/image3.jpeg",
    alt: "Beautiful Bridal Style",
    category: "Modern",
  },
  {
    src: "/images/image4.jpeg",
    alt: "Stunning Bridal Look",
    category: "Elegant",
  },
  {
    src: "/images/image5.jpeg",
    alt: "Artistic Bridal Design",
    category: "Traditional",
  },
  {
    src: "/images/hero.png",
    alt: "Bridal Updo Hairstyle",
    category: "Modern",
  },
]

export default function BridalPortfolio() {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Our Bridal Portfolio</h2>
          <p className="font-body text-muted-foreground text-lg">Real brides, real transformations, real confidence</p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {portfolioImages.map((image, index) => (
            <div
              key={index}
              className="group relative overflow-hidden rounded-xl bg-muted hover-lift transition-all cursor-pointer"
            >
              <div className="aspect-[3/4]">
                <Image
                  src={image.src || "/placeholder.svg"}
                  alt={image.alt}
                  width={400}
                  height={533}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-4 left-4 right-4">
                  <span className="inline-block bg-accent text-accent-foreground px-2 py-1 rounded text-sm font-body mb-2">
                    {image.category}
                  </span>
                  <h3 className="font-body text-white text-lg font-medium">{image.alt}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="font-body text-muted-foreground mb-4">
            Each look is uniquely crafted to enhance individual beauty and style
          </p>
        </div>
      </div>
    </section>
  )
}
