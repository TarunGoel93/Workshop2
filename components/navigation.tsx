"use client"

import { useState } from "react"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/button"

interface NavigationProps {
  isScrolled: boolean
}

export default function Navigation({ isScrolled }: NavigationProps) {
  const [isOpen, setIsOpen] = useState(false)

  const navItems = [
    { label: "Home", href: "#home" },
    { label: "About", href: "#about" },
    { label: "Schedule", href: "#schedule" },
    { label: "Speakers", href: "#speakers" },
    { label: "Gallery", href: "#gallery" },
    { label: "Testimonials", href: "#testimonials" },
    { label: "FAQ", href: "#faq" },
  ]

  const formLink = "https://forms.gle/HMHrTAEqRLWBrEXn8"

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? "bg-background/80 backdrop-blur-xl shadow-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 bg-gradient-to-br from-primary via-secondary to-accent rounded-lg flex items-center justify-center shadow-lg">
              <span className="text-white font-bold text-sm">W</span>
            </div>
            <span className="font-bold text-lg hidden sm:inline bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              Workshop
            </span>
          </div>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-muted-foreground hover:text-primary transition-smooth relative group"
              >
                {item.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-to-r from-primary to-accent group-hover:w-full transition-all duration-300" />
              </a>
            ))}
          </div>

          {/* Desktop Buttons */}
          <div className="hidden md:flex gap-3">
            <a href={formLink} target="_blank" rel="noopener noreferrer">
              <Button
                variant="outline"
                size="sm"
                className="border-border bg-transparent text-foreground hover:bg-primary/10 hover:text-primary transition-smooth"
              >
                Sign In
              </Button>
            </a>
            <a href={formLink} target="_blank" rel="noopener noreferrer">
              <Button
                size="sm"
                className="bg-gradient-to-r from-primary to-secondary hover:shadow-lg hover:shadow-primary/50 transition-smooth"
              >
                Register
              </Button>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 space-y-2 animate-fade-in-up">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="block px-4 py-2 hover:bg-muted rounded-lg transition-smooth text-sm"
                onClick={() => setIsOpen(false)}
              >
                {item.label}
              </a>
            ))}
            <div className="flex gap-2 pt-4">
              <a href={formLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button variant="outline" size="sm" className="w-full border-border bg-transparent">
                  Sign In
                </Button>
              </a>
              <a href={formLink} target="_blank" rel="noopener noreferrer" className="flex-1">
                <Button size="sm" className="w-full bg-gradient-to-r from-primary to-secondary">
                  Register
                </Button>
              </a>
            </div>
          </div>
        )}
      </div>
    </nav>
  )
}
