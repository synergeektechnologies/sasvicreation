import Image from "next/image"

export default function AboutHero() {
  return (
    <section className="relative h-[80vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/background image.jpeg"
          alt="Professional Makeup Artist Portrait"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="font-heading text-4xl md:text-6xl mb-4 text-shadow">
            Best Bridal Makeup Artist in Your City | Wedding Makeup Artist
          </h1>
          <p className="font-body text-xl md:text-2xl mb-8 text-shadow">Enhance Your Beauty with Sasvi Creations</p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <h3 className="font-heading text-2xl mb-2">5+</h3>
              <p className="font-body text-sm">Years Experience</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <h3 className="font-heading text-2xl mb-2">100+</h3>
              <p className="font-body text-sm">Happy Clients</p>
            </div>
            <div className="bg-white/10 backdrop-blur-sm rounded-lg p-4 text-center">
              <h3 className="font-heading text-2xl mb-2">50+</h3>
              <p className="font-body text-sm">Weddings</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
