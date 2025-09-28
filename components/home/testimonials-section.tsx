"use client"

import { Button } from "@/components/ui/button"
import { ChevronLeft, ChevronRight, Star } from "lucide-react"
import { useEffect, useState } from "react"

const testimonials = [
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Sasvi transformed my wedding look beyond my dreams! Her attention to detail and understanding of what suits me best made my special day even more magical. Highly recommended!",
    occasion: "Bridal Makeup",
  },
  {
    name: "Anita Patel",
    rating: 5,
    text: "Professional, friendly, and incredibly talented. The makeup lasted all day and looked flawless in every photo. Thank you for making me feel so beautiful and confident!",
    occasion: "Wedding Reception",
  },
  {
    name: "Sneha Reddy",
    rating: 5,
    text: "Amazing experience! The team was punctual, professional, and created exactly the look I wanted. My family and friends couldn't stop complimenting the makeup and hairstyle.",
    occasion: "Engagement Ceremony",
  },
  {
    name: "Kavya Nair",
    rating: 5,
    text: "Best makeup artist in the city! Natural yet glamorous look that enhanced my features perfectly. The service was exceptional and the products used were top quality.",
    occasion: "Party Makeup",
  },
  {
    name: "Bhavana Singh",
    rating: 5,
    text: "Sasvi made my day so special! Her friendly attitude and expertise made the whole experience enjoyable. The makeup was long-lasting and photograph beautifully.",
    occasion: "Bridal Makeup",
  },
  {
    name: "Meera Gupta",
    rating: 5,
    text: "Incredible talent and professionalism. She understood my vision perfectly and delivered beyond expectations. Will definitely book again for future occasions!",
    occasion: "Commercial Shoot",
  },
]

export default function TestimonialsSection() {
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
    <section className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">What Our Clients Say</h2>
          <p className="font-body text-muted-foreground text-lg">Real experiences from our happy clients</p>
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
