"use client"

import { ChevronDown, ChevronUp } from "lucide-react"
import { useState } from "react"

const faqs = [
  {
    question: "How far in advance should I book?",
    answer:
      "For bridal makeup, we recommend booking 3-6 months in advance, especially during wedding season (October-March). For party makeup, 2-4 weeks notice is usually sufficient. However, we do accommodate last-minute bookings when possible with additional charges.",
  },
  {
    question: "Do you provide makeup trials?",
    answer:
      "Yes! We highly recommend makeup trials, especially for brides. Trials are typically scheduled 1-2 months before your event and cost ₹3,000-₹5,000 depending on the complexity. This ensures we perfect your look and you feel confident on your special day.",
  },
  {
    question: "What's included in your bridal packages?",
    answer:
      "Our bridal packages include consultation, makeup trial, wedding day makeup, hair styling, draping assistance, and touch-up kit. Premium packages also include pre-wedding shoot makeup, mehendi/sangeet looks, and additional family member makeup.",
  },
  {
    question: "Do you travel for destination weddings?",
    answer:
      "We love destination weddings. Travel charges apply based on location and duration. For outstation events, accommodation and travel expenses are additional. We're experienced with multi-day wedding celebrations.",
  },
  {
    question: "What products do you use?",
    answer:
      "We use premium, long-lasting makeup brands including Kryolan, MAC, Forever, and NARS. All products are hypoallergenic and suitable for photography. We also carry backup products for touch-ups throughout your event.",
  },
  {
    question: "Can you accommodate skin allergies or sensitivities?",
    answer:
      "Yes, we always conduct a patch test during trials for sensitive skin. We carry hypoallergenic and organic product alternatives. Please inform us about any allergies or skin conditions during booking so we can prepare accordingly.",
  },
  {
    question: "What's your cancellation policy?",
    answer:
      "Cancellations made 30+ days before the event receive a full refund minus booking fee. 15-30 days: 50% refund. Less than 15 days: no refund, but we can reschedule once within 6 months. Weather-related cancellations are handled case-by-case.",
  },
  {
    question: "Do you offer group discounts?",
    answer:
      "Yes! Groups of 4+ people receive 10% discount, and 6+ people receive 15% discount. Bridal parties with multiple services (mehendi, sangeet, wedding) receive special package pricing. Contact us for custom group quotes.",
  },
]

export function ContactFAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-16 bg-secondary/10">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-foreground mb-4">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about our services and booking process
            </p>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, index) => (
              <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                <button
                  onClick={() => setOpenIndex(openIndex === index ? null : index)}
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-sage/5 transition-colors"
                >
                  <h3 className="font-semibold text-foreground pr-4">{faq.question}</h3>
                  {openIndex === index ? (
                    <ChevronUp className="w-5 h-5 text-sage flex-shrink-0" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-sage flex-shrink-0" />
                  )}
                </button>
                {openIndex === index && (
                  <div className="px-6 pb-4">
                    <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                  </div>
                )}
              </div>
            ))}
          </div>

          <div className="mt-12 text-center">
            <p className="text-muted-foreground mb-4">Still have questions? We're here to help!</p>
            <div className="flex justify-center">
              <a
                href="tel:+917708032077"
                className="bg-sage text-white px-6 py-3 rounded-lg font-medium hover:bg-sage/90 transition-colors"
              >
                Call Us: +91-7708032077
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
