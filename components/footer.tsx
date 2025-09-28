import { Instagram } from "lucide-react"
import Image from "next/image"
import Link from "next/link"

export default function Footer() {
  return (
    <footer className="bg-secondary border-t border-secondary">
      <div className="container mx-auto px-4 py-12">
        <div className="text-center space-y-8">
          {/* Logo */}
          <div className="flex justify-center">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/images/sasvi-logo.png"
                alt="Sasvi Creations Logo"
                width={80}
                height={80}
                className="w-16 h-16"
              />
              <div>
                <h2 className="font-heading text-2xl text-white">SASVI</h2>
                <p className="text-accent font-medium">CREATIONS</p>
              </div>
            </Link>
          </div>

          {/* Quick Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8">
            <Link href="/" className="font-body text-white hover:text-accent transition-colors">
              Home
            </Link>
            <Link href="/services/bridal" className="font-body text-white hover:text-accent transition-colors">
              Bridal Services
            </Link>
            <Link href="/services/party" className="font-body text-white hover:text-accent transition-colors">
              Party Makeup
            </Link>
            <Link href="/about" className="font-body text-white hover:text-accent transition-colors">
              About
            </Link>
            <Link href="/contact" className="font-body text-white hover:text-accent transition-colors">
              Contact
            </Link>
          </nav>

          {/* Social Icons */}
          <div className="flex justify-center space-x-4">
            <a
              href="#"
              className="w-10 h-10 bg-accent rounded-full flex items-center justify-center hover:bg-accent/80 transition-colors"
              aria-label="Instagram"
            >
              <Instagram className="w-5 h-5 text-accent-foreground" />
            </a>
          </div>

          {/* Decorative Divider */}
          <div className="flex items-center justify-center space-x-4">
            <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
            </div>
            <div className="w-16 h-px bg-white/30"></div>
            <div className="w-8 h-8 bg-accent/20 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-accent rounded-full"></div>
            </div>
            <div className="w-16 h-px bg-white/30"></div>
            <div className="w-8 h-8 bg-secondary/20 rounded-full flex items-center justify-center">
              <div className="w-3 h-3 bg-secondary rounded-full"></div>
            </div>
          </div>

          {/* Copyright */}
          <p className="font-body text-white/70 text-sm">© 2025 Sasvi Creations. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
