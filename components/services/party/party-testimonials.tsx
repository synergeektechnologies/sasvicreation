"use client"

import { useState, useEffect } from "react"
import { Star, ChevronLeft, ChevronRight } from "lucide-react"
import { Button } from "@/components/ui/button"

const testimonials = [
  {
    name: "Riya Kapoor",
    rating: 5,
    text: "Amazing party makeup! I felt so confident and glamorous. The makeup lasted the entire night and looked perfect in all the photos. Highly recommend for any special occasion!",
    occasion: "Birthday Party",
  },
  {
    name: "Neha Sharma",
    rating: 5,
    text: "Professional service and stunning results. The team understood exactly what I wanted and delivered beyond expectations. Perfect for my corporate event!",
    occasion: "Corporate Event",
  },
  {
    name: "Anjali Patel",
    rating: 5,
    text: "Incredible transformation! The makeup was flawless and the hairstyle was exactly what I envisioned. Will definitely book again for future parties.",
    occasion: "Anniversary Celebration",
  },
  {
    name: "Pooja Singh",
    rating: 5,
    text: "Best party makeup artist in the city! The look was glamorous yet elegant, perfect for my friend's wedding reception. Everyone complimented my makeup!",
    occasion: "Wedding Reception",
  },
]

export default function PartyTestimonials() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const nextTestimonial = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length)
  }

  const prevTestimonial = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length)
  }

  useEffect(() => {
    const interval = setInterval(nextTestimonial, 5000)
    return () => clearInterval(interval)
  }, [])

  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">What Our Customers Are Saying</h2>
          <p className="font-body text-muted-foreground text-lg">Real experiences from our party makeup clients</p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="relative">
            <div className="bg-card rounded-2xl p-8 md:p-12 border border-border shadow-lg">
              <div className="text-center">
                {/* Stars */}
                <div className="flex justify-center space-x-1 mb-6">
                  {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                    <Star key={i} className="w-6 h-6 text-accent fill-current" />
                  ))}
                </div>

                {/* Testimonial Text */}
                <blockquote className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-balance">
                  "{testimonials[currentIndex].text}"
                </blockquote>

                {/* Client Info */}
                <div className="space-y-2">
                  <h4 className="font-heading text-xl text-foreground">{testimonials[currentIndex].name}</h4>
                  <p className="font-body text-accent text-sm">{testimonials[currentIndex].occasion}</p>
                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <Button
              variant="outline"
              size="icon"
              onClick={prevTestimonial}
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-card border-border hover:bg-muted"
            >
              <ChevronLeft className="w-5 h-5" />
            </Button>

            <Button
              variant="outline"
              size="icon"
              onClick={nextTestimonial}
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-card border-border hover:bg-muted"
            >
              <ChevronRight className="w-5 h-5" />
            </Button>
          </div>

          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-8">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-3 h-3 rounded-full transition-colors ${
                  index === currentIndex ? "bg-accent" : "bg-muted"
                }`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
