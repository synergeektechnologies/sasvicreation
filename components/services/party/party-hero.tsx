import Image from "next/image"

export default function PartyHero() {
  return (
    <section className="relative h-[70vh] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/image5.jpeg"
          alt="Party Makeup Services"
          fill
          className="object-cover"
          priority
        />
      </div>

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50"></div>

      {/* Decorative Elements */}
      <div className="absolute inset-0 opacity-20">
        <div className="absolute top-20 left-10 w-16 h-16 bg-accent rounded-full animate-pulse"></div>
        <div className="absolute top-40 right-20 w-12 h-12 bg-secondary rounded-full animate-pulse delay-300"></div>
        <div className="absolute bottom-40 left-20 w-20 h-20 bg-accent rounded-full animate-pulse delay-700"></div>
        <div className="absolute bottom-20 right-10 w-14 h-14 bg-secondary rounded-full animate-pulse delay-1000"></div>
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 h-full flex items-center">
        <div className="max-w-3xl text-white">
          <h1 className="font-heading text-4xl md:text-6xl mb-4 text-shadow">Party Makeup Services in Your City</h1>
          <p className="font-body text-xl md:text-2xl mb-8 text-shadow">
            Best Party Makeup Services for Every Celebration
          </p>
        </div>
      </div>
    </section>
  )
}
