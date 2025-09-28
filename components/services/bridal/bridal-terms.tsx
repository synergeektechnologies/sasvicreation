"use client"

import { useState } from "react"
import { ChevronDown, ChevronUp, AlertCircle } from "lucide-react"

const termsData = [
  {
    title: "Booking & Confirmation",
    content: [
      "Confirm exact numbers of people requiring services in advance",
      "No reductions in numbers allowed after confirmation",
      "Full charges apply without 1-month prior notice for cancellations",
      "Advance booking deposit is non-refundable under any circumstances",
    ],
  },
  {
    title: "Payment Terms",
    content: [
      "Client takes full responsibility for payment arrangements",
      "Bank deposit only - no cash transactions",
      "7-day payment hold period for all transactions",
      "Legal action will be taken for non-payment or bounced payments",
      "All payments must be cleared before service commencement",
    ],
  },
  {
    title: "Service Guidelines",
    content: [
      "Services are provided at client's venue within city limits",
      "Additional charges apply for locations beyond 25km",
      "Minimum 2-hour advance notice required for any changes",
      "Client must provide adequate lighting and seating arrangements",
      "All products and tools are provided by Sasvi Creations",
    ],
  },
  {
    title: "Cancellation Policy",
    content: [
      "48-hour notice required for any cancellations",
      "Cancellations within 48 hours will incur full charges",
      "Weather-related cancellations will be rescheduled without penalty",
      "Emergency cancellations will be handled case-by-case",
      "Refunds are processed within 7-10 business days",
    ],
  },
]

export default function BridalTerms() {
  const [expandedTerm, setExpandedTerm] = useState<number | null>(null)

  const toggleTerm = (index: number) => {
    setExpandedTerm(expandedTerm === index ? null : index)
  }

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="font-heading text-4xl md:text-5xl text-foreground mb-4">Terms & Conditions</h2>
          <p className="font-body text-muted-foreground text-lg">
            Please review our service terms for a smooth experience
          </p>
          <div className="w-24 h-1 bg-accent mx-auto mt-6"></div>
        </div>

        <div className="max-w-4xl mx-auto">
          <div className="bg-accent/5 border border-accent/20 rounded-lg p-4 mb-8 flex items-start space-x-3">
            <AlertCircle className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
            <p className="font-body text-foreground text-sm">
              Please read all terms carefully before booking. By confirming your appointment, you agree to these terms
              and conditions.
            </p>
          </div>

          <div className="space-y-4">
            {termsData.map((term, index) => (
              <div key={index} className="bg-card rounded-lg border border-border overflow-hidden">
                <button
                  className="w-full px-6 py-4 text-left flex items-center justify-between hover:bg-muted/50 transition-colors"
                  onClick={() => toggleTerm(index)}
                >
                  <h3 className="font-heading text-lg text-foreground">{term.title}</h3>
                  {expandedTerm === index ? (
                    <ChevronUp className="w-5 h-5 text-muted-foreground" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-muted-foreground" />
                  )}
                </button>

                {expandedTerm === index && (
                  <div className="px-6 pb-4 border-t border-border">
                    <ul className="space-y-2 mt-4">
                      {term.content.map((item, i) => (
                        <li key={i} className="flex items-start space-x-2">
                          <div className="w-2 h-2 bg-accent rounded-full mt-2 flex-shrink-0"></div>
                          <span className="font-body text-muted-foreground text-sm">{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
