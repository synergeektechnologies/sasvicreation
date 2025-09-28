"use client"

import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "Priya Sharma",
    event: "Wedding",
    rating: 5,
    text: "Sasvi made my wedding day absolutely perfect! The makeup lasted all day and looked stunning in photos. She understood my vision perfectly and made me feel like a princess.",
    image: "/indian-bride-smiling.jpg",
  },
  {
    name: "Anita Patel",
    event: "Reception",
    rating: 5,
    text: "Professional, punctual, and incredibly talented. The makeup was flawless and received so many compliments. Sasvi's attention to detail is remarkable.",
    image: "/elegant-woman-in-party-makeup.jpg",
  },
  {
    name: "Meera Gupta",
    event: "Engagement",
    rating: 5,
    text: "From trial to the actual day, everything was perfect. Sasvi listened to all my concerns and created a look that was both traditional and modern. Highly recommend!",
    image: "/indian-woman-in-engagement-makeup.jpg",
  },
  {
    name: "Kavya Reddy",
    event: "Pre-wedding Shoot",
    rating: 5,
    text: "Amazing experience! The makeup looked natural yet glamorous, perfect for our outdoor shoot. Sasvi's expertise really shows in her work.",
    image: "/bride-in-natural-makeup-outdoors.jpg",
  },
]

export function ContactTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  return (
    <section className="py-16 bg-accent/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">What Our Clients Say</h2>
            <p className="text-lg text-muted-foreground">Real experiences from our beautiful brides and clients</p>
          </div>

          <div className="relative">
            <div className="bg-white rounded-2xl p-8 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <button
                  onClick={prevTestimonial}
                  className="p-2 rounded-full border hover:bg-sage/10 transition-colors"
                >
                  <ChevronLeft className="w-5 h-5 text-sage" />
                </button>

                <div className="flex gap-2">
                  {testimonials.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentIndex(index)}
                      className={`w-2 h-2 rounded-full transition-colors ${
                        index === currentIndex ? "bg-sage" : "bg-gray-300"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextTestimonial}
                  className="p-2 rounded-full border hover:bg-sage/10 transition-colors"
                >
                  <ChevronRight className="w-5 h-5 text-sage" />
                </button>
              </div>

              <div className="text-center">
                <img
                  src={testimonials[currentIndex].image || "/placeholder.svg"}
                  alt={testimonials[currentIndex].name}
                  className="w-20 h-20 rounded-full mx-auto mb-4 object-cover"
                />

                <div className="flex justify-center mb-4">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-5 h-5 fill-ochre text-ochre" />
                  ))}
                </div>

                <blockquote className="text-lg text-muted-foreground mb-6 leading-relaxed italic">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                <div>
                  <h4 className="font-semibold text-foreground">{testimonials[currentIndex].name}</h4>
                  <p className="text-sm text-muted-foreground">{testimonials[currentIndex].event}</p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-6">Ready to create your own beautiful story?</p>
            <p className="text-sage font-medium">
              Contact us through our details above to book your consultation
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
