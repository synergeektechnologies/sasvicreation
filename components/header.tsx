"use client"

import { Button } from "@/components/ui/button"
import { ChevronDown, Menu, X } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { useState } from "react"

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [isServicesOpen, setIsServicesOpen] = useState(false)

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-3">
            <Image
              src="/images/sasvi-logo.png"
              alt="Sasvi Creations Logo"
              width={60}
              height={60}
              className="w-12 h-12 md:w-15 md:h-15"
            />
            <div className="hidden sm:block">
              <h1 className="font-heading text-xl md:text-2xl text-foreground">SASVI</h1>
              <p className="text-sm text-primary font-medium">CREATIONS</p>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-8">
            <Link href="/" className="font-body text-foreground hover:text-primary transition-colors">
              Home
            </Link>

            <div
              className="relative"
              onMouseEnter={() => setIsServicesOpen(true)}
              onMouseLeave={() => setIsServicesOpen(false)}
            >
              <button className="flex items-center space-x-1 font-body text-foreground hover:text-primary transition-colors">
                <span>Services</span>
                <ChevronDown className="w-4 h-4" />
              </button>

              {isServicesOpen && (
                <div className="absolute top-full left-0 mt-2 w-56 bg-card rounded-lg shadow-lg border border-border py-2">
                  <Link
                    href="/services/bridal"
                    className="block px-4 py-2 font-body text-foreground hover:bg-muted hover:text-primary transition-colors"
                  >
                    Bridal Packages
                  </Link>
                  <Link
                    href="/services/party"
                    className="block px-4 py-2 font-body text-foreground hover:bg-muted hover:text-primary transition-colors"
                  >
                    Party Makeup
                  </Link>
                </div>
              )}
            </div>

            <Link href="/about" className="font-body text-foreground hover:text-primary transition-colors">
              About
            </Link>

            <Link href="/contact" className="font-body text-foreground hover:text-primary transition-colors">
              Contact
            </Link>
          </nav>

          {/* CTA Button */}
          <div className="hidden lg:block">
            <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground">
              <Link href="https://wa.me/917708032077?text=Hi%20Sasvi%20Creations!%20I'm%20interested%20in%20booking%20a%20makeup%20appointment.%20Could%20you%20please%20share%20more%20details%20about%20your%20services%20and%20availability?" target="_blank" rel="noopener noreferrer">Book Appointment</Link>
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button className="lg:hidden p-2" onClick={() => setIsMenuOpen(!isMenuOpen)}>
            {isMenuOpen ? <X className="w-6 h-6 text-foreground" /> : <Menu className="w-6 h-6 text-foreground" />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <div className="lg:hidden py-4 border-t border-border">
            <nav className="flex flex-col space-y-4">
              <Link
                href="/"
                className="font-body text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Home
              </Link>
              <Link
                href="/services/bridal"
                className="font-body text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Bridal Packages
              </Link>
              <Link
                href="/services/party"
                className="font-body text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Party Makeup
              </Link>
              <Link
                href="/about"
                className="font-body text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                About
              </Link>
              <Link
                href="/contact"
                className="font-body text-foreground hover:text-primary transition-colors"
                onClick={() => setIsMenuOpen(false)}
              >
                Contact
              </Link>
              <Button asChild className="bg-primary hover:bg-primary/90 text-primary-foreground w-fit">
                <Link href="https://wa.me/917708032077?text=Hi%20Sasvi%20Creations!%20I'm%20interested%20in%20booking%20a%20makeup%20appointment.%20Could%20you%20please%20share%20more%20details%20about%20your%20services%20and%20availability?" target="_blank" rel="noopener noreferrer" onClick={() => setIsMenuOpen(false)}>
                  Book Appointment
                </Link>
              </Button>
            </nav>
          </div>
        )}
      </div>
    </header>
  )
}
