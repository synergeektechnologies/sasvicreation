"use client"

import { Quote, Star } from "lucide-react"
import { useState } from "react"

const testimonials = [
  {
    name: "Bhavana Singh",
    rating: 5,
    text: "Sasvi made my wedding day so special! Her friendly attitude and expertise made the whole experience enjoyable. The makeup was long-lasting and photographed beautifully. I felt like a princess!",
    occasion: "Bridal Makeup",
    location: "Coimbatore",
  },
  {
    name: "Sneha Reddy",
    rating: 5,
    text: "Amazing experience from start to finish! The team was punctual, professional, and created exactly the look I wanted. My family and friends couldn't stop complimenting the makeup and hairstyle.",
    occasion: "Wedding Reception",
    location: "Pune",
  },
  {
    name: "Priya Sharma",
    rating: 5,
    text: "Transformed my look beyond my dreams! Her attention to detail and understanding of what suits me best made my engagement ceremony even more magical. Highly recommended!",
    occasion: "Engagement",
    location: "Delhi",
  },
  {
    name: "Kavya Nair",
    rating: 5,
    text: "Best makeup artist in the city! Natural yet glamorous look that enhanced my features perfectly. The service was exceptional and the products used were top quality.",
    occasion: "Party Makeup",
    location: "Bangalore",
  },
  {
    name: "Anita Patel",
    rating: 5,
    text: "Professional, friendly, and incredibly talented. The makeup lasted all day and looked flawless in every photo. Thank you for making me feel so beautiful and confident!",
    occasion: "Bridal Makeup",
    location: "Ahmedabad",
  },
  {
    name: "Meera Gupta",
    rating: 5,
    text: "Incredible talent and professionalism. She understood my vision perfectly and delivered beyond expectations. Will definitely book again for future occasions!",
    occasion: "Commercial Shoot",
    location: "Chennai",
  },
]

export default function AboutTestimonials() {
  const [selectedTestimonial, setSelectedTestimonial] = useState(0)

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Client Testimonials</h2>
          <p className="font-body text-muted-foreground text-lg">
            Real stories from real clients who trusted us with their special moments
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Testimonial List */}
            <div className="lg:col-span-1">
              <div className="space-y-4">
                {testimonials.map((testimonial, index) => (
                  <button
                    key={index}
                    onClick={() => setSelectedTestimonial(index)}
                    className={`w-full text-left p-4 rounded-lg border transition-all ${
                      selectedTestimonial === index
                        ? "border-accent bg-accent/5"
                        : "border-border bg-card hover:bg-muted/50"
                    }`}
                  >
                    <div className="flex items-center space-x-3 mb-2">
                      <div className="w-10 h-10 bg-accent/10 rounded-full flex items-center justify-center">
                        <span className="font-heading text-accent text-sm">
                          {testimonial.name
                            .split(" ")
                            .map((n) => n[0])
                            .join("")}
                        </span>
                      </div>
                      <div>
                        <h4 className="font-body font-medium text-foreground text-sm">{testimonial.name}</h4>
                        <p className="font-body text-muted-foreground text-xs">{testimonial.location}</p>
                      </div>
                    </div>
                    <div className="flex space-x-1 mb-2">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="w-3 h-3 text-accent fill-current" />
                      ))}
                    </div>
                    <p className="font-body text-accent text-xs">{testimonial.occasion}</p>
                  </button>
                ))}
              </div>
            </div>

            {/* Selected Testimonial */}
            <div className="lg:col-span-2">
              <div className="bg-card rounded-2xl p-8 md:p-12 border border-border h-full flex flex-col justify-center">
                <div className="mb-6">
                  <Quote className="w-12 h-12 text-accent/20 mb-4" />
                </div>

                <blockquote className="font-body text-lg md:text-xl text-muted-foreground leading-relaxed mb-8 text-balance">
                  "{testimonials[selectedTestimonial].text}"
                </blockquote>

                <div className="flex items-center justify-between">
                  <div>
                    <h4 className="font-heading text-xl text-foreground">{testimonials[selectedTestimonial].name}</h4>
                    <p className="font-body text-muted-foreground text-sm">
                      {testimonials[selectedTestimonial].location}
                    </p>
                  </div>

                  <div className="text-right">
                    <div className="flex space-x-1 mb-1">
                      {[...Array(testimonials[selectedTestimonial].rating)].map((_, i) => (
                        <Star key={i} className="w-4 h-4 text-accent fill-current" />
                      ))}
                    </div>
                    <p className="font-body text-accent text-sm">{testimonials[selectedTestimonial].occasion}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="text-center mt-12">
            <div className="inline-flex items-center space-x-2 bg-accent/10 px-6 py-3 rounded-full">
              <Star className="w-5 h-5 text-accent fill-current" />
              <span className="font-body text-foreground">4.9/5 Average Rating from 100+ Reviews</span>
              <Star className="w-5 h-5 text-accent fill-current" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
