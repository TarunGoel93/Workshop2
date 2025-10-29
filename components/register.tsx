"use client"

import { Button } from "@/components/ui/button"
import { ArrowRight } from "lucide-react"

export default function Register() {
  const handleRegisterClick = () => {
  window.open("https://forms.gle/HMHrTAEqRLWBrEXn8", "_blank")
  }


  return (
    <section id="register" className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <div className="text-center space-y-8 animate-fade-in-up">
          <div className="space-y-4">
            <h2 className="text-4xl sm:text-5xl font-bold mb-4">Join the Workshop Today!</h2>
            <p className="text-lg text-muted-foreground">
              Reserve your spot now and get hands-on training from experts in data science, open-source collaboration,
              and automation.
            </p>
          </div>

          <Button size="lg" className="bg-primary hover:bg-primary/90 text-lg px-8" onClick={handleRegisterClick}>
            Register Now
            <ArrowRight className="ml-2 w-5 h-5" />
          </Button>

          <p className="text-sm text-muted-foreground">Limited seats available </p>
        </div>
      </div>
    </section>
  )
}
